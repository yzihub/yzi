import { z } from 'zod'
import { BaseAgent } from './BaseAgent'
import type { AgentContext, AgentResult } from '@/types'

// ─── Payload schema (shared with API route) ───────────────────────────────────

export const ContactPayloadSchema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  company: z.string().min(1, 'Informe sua empresa'),
  email: z.string().email('E-mail inválido'),
  goal: z.enum(['SaaS', 'Consultoria', 'Outros']),
})

export type ContactPayload = z.infer<typeof ContactPayloadSchema>

// ─── ContactAgent ─────────────────────────────────────────────────────────────

export class ContactAgent extends BaseAgent {
  constructor() {
    // Stable ID so repeated submissions upsert, not duplicate
    super('contact-agent-001', 'contact_agent', 'responder')
  }

  async execute(ctx: AgentContext): Promise<AgentResult> {
    const payload = ContactPayloadSchema.parse(ctx.payload)

    const steps: string[] = []
    const warnings: string[] = []

    // ── Step 1: Upsert lead in Supabase ──────────────────────────────────────
    try {
      await this.syncData({
        table: 'leads',
        operation: 'upsert',
        data: {
          email: payload.email,
          name: payload.name,
          company: payload.company,
          goal: payload.goal,
          source: 'landing_page',
          stage: 'new',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      })
      steps.push('lead_upserted')
      console.log(`[ContactAgent] ✓ Lead upserted — ${payload.email}`)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      warnings.push(`lead_upsert_skipped: ${msg}`)
      console.warn(`[ContactAgent] ⚠ Lead upsert skipped (Supabase not configured): ${msg}`)
    }

    // ── Step 2: Trigger n8n webhook ───────────────────────────────────────────
    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL

    if (webhookUrl) {
      try {
        await this.triggerWebhook(webhookUrl, {
          event: 'contact_form_submitted',
          lead: payload,
          submittedAt: new Date().toISOString(),
          source: 'yzihub_landing',
        })
        steps.push('n8n_webhook_triggered')
        console.log(`[ContactAgent] ✓ n8n webhook triggered`)
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        warnings.push(`n8n_trigger_failed: ${msg}`)
        console.warn(`[ContactAgent] ⚠ n8n webhook failed: ${msg}`)
      }
    } else {
      warnings.push('n8n_webhook_skipped: N8N_CONTACT_WEBHOOK_URL not set')
      console.warn(`[ContactAgent] ⚠ n8n webhook skipped — add N8N_CONTACT_WEBHOOK_URL to .env.local`)
    }

    // ── Step 3: Emit A2A event (notifies other agents) ────────────────────────
    try {
      await this.emitEvent('contact:new_lead', {
        email: payload.email,
        goal: payload.goal,
        source: 'landing_page',
      })
      steps.push('a2a_event_emitted')
    } catch {
      warnings.push('a2a_event_skipped: Supabase not configured')
    }

    console.log(`[ContactAgent] 📋 Summary — steps: [${steps.join(', ')}]`, {
      warnings: warnings.length ? warnings : 'none',
    })

    return {
      success: true,
      data: { steps, warnings, email: payload.email },
    }
  }
}
