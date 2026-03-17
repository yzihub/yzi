import { createServerClient } from '@/lib/supabase'
import type { AgentContext, AgentResult, AgentStatus, AgentType } from '@/types'
import type { Json } from '@/types/database'

// ─── Silo Rules (SYSTEM_MAP.md) ───────────────────────────────────────────────
// core/ can call services/ — never the other way around
// Agents never import each other directly — communicate via events only
// All state persists in Supabase, never in agent memory
// ─────────────────────────────────────────────────────────────────────────────

export interface N8nTriggerOptions {
  workflowId: string
  payload: Record<string, unknown>
  waitForResult?: boolean
}

export interface SyncDataOptions {
  table: string
  data: Record<string, unknown> | Record<string, unknown>[]
  operation: 'upsert' | 'insert' | 'update'
  match?: Record<string, unknown>
}

// ─────────────────────────────────────────────────────────────────────────────

export abstract class BaseAgent {
  readonly id: string
  readonly name: string
  readonly type: AgentType
  protected status: AgentStatus = 'idle'
  private logId: string | null = null

  constructor(id: string, name: string, type: AgentType) {
    this.id = id
    this.name = name
    this.type = type
  }

  // ─── Abstract contract — each agent must implement this ────────────────────
  abstract execute(ctx: AgentContext): Promise<AgentResult>

  // ─── Public runner — handles lifecycle, logging and error capture ──────────
  async run(ctx: AgentContext): Promise<AgentResult> {
    const startTime = Date.now()
    this.status = 'running'

    // Console log always fires — confirms agent activation even without Supabase
    console.log(`[BaseAgent:${this.name}] ▶ Starting`, {
      agentId: this.id,
      triggeredBy: ctx.triggeredBy,
      timestamp: ctx.timestamp,
    })

    // Supabase log is best-effort — degrades gracefully when not configured
    try { await this.logActivity('started', { ctx }) } catch {
      console.warn(`[BaseAgent:${this.name}] Supabase not configured — skipping DB log`)
    }

    try {
      const result = await this.execute(ctx)
      const executionTime = Date.now() - startTime
      this.status = 'idle'

      console.log(`[BaseAgent:${this.name}] ✓ Completed in ${executionTime}ms`, {
        success: result.success,
      })

      try { await this.logActivity('completed', { result, executionTime }) } catch { /* no-op */ }

      return { ...result, executionTime }
    } catch (err) {
      const error = err instanceof Error ? err.message : String(err)
      const executionTime = Date.now() - startTime
      this.status = 'error'

      console.error(`[BaseAgent:${this.name}] ✗ Error in ${executionTime}ms`, { error })

      try { await this.logActivity('error', { error, executionTime }) } catch { /* no-op */ }

      return { success: false, error, executionTime }
    }
  }

  // ─── logActivity — persiste toda execução no Supabase ─────────────────────
  protected async logActivity(
    status: 'started' | 'completed' | 'error',
    data: {
      ctx?: AgentContext
      result?: AgentResult
      error?: string
      executionTime?: number
    }
  ): Promise<void> {
    const db = createServerClient()

    if (status === 'started') {
      const { data: row, error } = await db
        .from('agent_logs')
        .insert({
          agent_id: this.id,
          status: 'running',
          payload: (data.ctx?.payload ?? null) as Json,
          started_at: new Date().toISOString(),
        })
        .select('id')
        .single()

      if (!error && row && typeof row === 'object' && 'id' in row) {
        this.logId = (row as { id: string }).id
      }
      return
    }

    if (!this.logId) return

    await db
      .from('agent_logs')
      .update({
        status,
        result: (data.result ?? null) as Json,
        error: data.error ?? null,
        execution_time_ms: data.executionTime ?? null,
        finished_at: new Date().toISOString(),
      })
      .eq('id', this.logId)
  }

  // ─── triggerAutomation — dispara um workflow no n8n ───────────────────────
  // Respeita DA-003: workflows com 3+ steps vão para o n8n
  protected async triggerAutomation(options: N8nTriggerOptions): Promise<unknown> {
    const n8nBaseUrl = process.env.N8N_BASE_URL ?? 'http://localhost:5678'
    const n8nApiKey = process.env.N8N_API_KEY

    if (!n8nApiKey) {
      throw new Error('[BaseAgent.triggerAutomation] Missing env var: N8N_API_KEY')
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 30_000)

    try {
      const response = await fetch(
        `${n8nBaseUrl}/api/v1/workflows/${options.workflowId}/execute`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-N8N-API-KEY': n8nApiKey,
          },
          body: JSON.stringify({ workflowData: options.payload }),
          signal: controller.signal,
        }
      )

      if (!response.ok) {
        throw new Error(
          `[BaseAgent.triggerAutomation] n8n responded with status ${response.status}`
        )
      }

      return options.waitForResult ? response.json() : null
    } finally {
      clearTimeout(timeout)
    }
  }

  // ─── syncData — upsert/insert/update no Supabase ──────────────────────────
  protected async syncData(options: SyncDataOptions): Promise<void> {
    const db = createServerClient()
    const table = db.from(options.table)

    if (options.operation === 'insert') {
      const { error } = await table.insert(options.data as Parameters<typeof table.insert>[0])
      if (error) throw new Error(`[BaseAgent.syncData] insert failed: ${error.message}`)
      return
    }

    if (options.operation === 'upsert') {
      const { error } = await table.upsert(options.data as Parameters<typeof table.upsert>[0])
      if (error) throw new Error(`[BaseAgent.syncData] upsert failed: ${error.message}`)
      return
    }

    if (options.operation === 'update' && options.match) {
      let query = table.update(options.data as Parameters<typeof table.update>[0])
      for (const [col, val] of Object.entries(options.match)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        query = (query as any).eq(col, val)
      }
      const { error } = await query
      if (error) throw new Error(`[BaseAgent.syncData] update failed: ${error.message}`)
    }
  }

  // ─── triggerWebhook — dispara um webhook n8n diretamente ─────────────────
  // Use para acionar workflows via trigger de webhook (não via API REST)
  protected async triggerWebhook(
    webhookUrl: string,
    payload: Record<string, unknown>
  ): Promise<void> {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15_000)

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      if (!response.ok) {
        throw new Error(
          `[BaseAgent.triggerWebhook] Webhook responded with status ${response.status}`
        )
      }
    } finally {
      clearTimeout(timeout)
    }
  }

  // ─── emitEvent — publica evento para outros agentes (A2A) ─────────────────
  protected async emitEvent(
    type: string,
    payload: Record<string, unknown>,
    targetAgentId?: string
  ): Promise<void> {
    const db = createServerClient()

    const { error } = await db.from('agent_events').insert({
      type,
      source_agent_id: this.id,
      target_agent_id: targetAgentId ?? null,
      payload: payload as unknown as Json,
      processed: false,
    })

    if (error) {
      throw new Error(`[BaseAgent.emitEvent] failed to emit event "${type}": ${error.message}`)
    }
  }

  getStatus(): AgentStatus {
    return this.status
  }
}
