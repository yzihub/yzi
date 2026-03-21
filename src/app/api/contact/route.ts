import { ContactAgent, ContactPayloadSchema } from '@/core/agents/ContactAgent'
import type { AgentContext } from '@/types'
import type { ApiResponse } from '@/types'

export async function POST(request: Request): Promise<Response> {
  // ── 1. Parse body ───────────────────────────────────────────────────────────
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json(
      { success: false, error: 'Invalid JSON body' } satisfies ApiResponse,
      { status: 400 }
    )
  }

  // ── 2. Validate with Zod ────────────────────────────────────────────────────
  const parsed = ContactPayloadSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json(
      {
        success: false,
        error: 'Validation failed',
        message: parsed.error.issues.map((i) => i.message).join(', '),
      } satisfies ApiResponse,
      { status: 422 }
    )
  }

  // ── 3. Run ContactAgent ─────────────────────────────────────────────────────
  const ctx: AgentContext = {
    agentId: 'contact-agent-001',
    triggeredBy: 'landing_page_form',
    payload: parsed.data,
    timestamp: new Date().toISOString(),
    sessionId: crypto.randomUUID(),
  }

  const agent = new ContactAgent()
  const result = await agent.run(ctx)

  // Agent always returns success:true (errors are warnings, not failures)
  // so the user gets a confirmation even if Supabase/n8n are not yet configured
  return Response.json(
    {
      success: result.success,
      message: result.success
        ? 'Mensagem recebida! Entraremos em contato em breve.'
        : 'Falha ao processar. Tente novamente.',
      data: result.data,
    } satisfies ApiResponse,
    { status: result.success ? 200 : 500 }
  )
}
