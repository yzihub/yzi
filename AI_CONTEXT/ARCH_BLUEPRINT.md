# Architecture Blueprint — YZIHUB

Decisões arquiteturais, padrões e trade-offs do projeto.

---

## Stack Definitiva

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Framework | Next.js 16+ (App Router) | Server Components, streaming, tipagem nativa |
| Linguagem | TypeScript (strict) | Segurança em runtime, DX superior |
| Estilo | Tailwind CSS | Consistência, sem CSS-in-JS overhead |
| Banco | Supabase (PostgreSQL) | Realtime built-in, auth, storage — tudo em um |
| Workflows | n8n | Orquestração visual + API REST |
| WhatsApp | Evolution API | Self-hosted, sem custo por mensagem |
| Validação | Zod | Schema-first, tipagem inferida automaticamente |

---

## Padrão de Camadas

```
src/app/          → Presentation layer (React, rotas, layouts)
src/core/         → Domain layer (regras de negócio, agentes, events)
src/services/     → Infrastructure layer (clientes externos: Supabase, n8n, Evolution)
src/lib/          → Shared utilities (helpers, formatters, constants)
src/mcp/          → MCP integrations (Model Context Protocol)
src/types/        → Shared TypeScript contracts
```

**Regra de dependência:** as setas só apontam para dentro.
`app` → `core` → `services` → (external APIs)
Nunca o contrário.

---

## Decisões Arquiteturais

### DA-001: Server Components por padrão
- **Decisão:** Usar React Server Components em todas as páginas, adicionar `"use client"` apenas quando há interatividade real
- **Motivo:** Reduz bundle JS enviado ao cliente, melhora TTFB, dados sensíveis nunca saem do servidor
- **Consequência:** Fetch de dados sempre no servidor, client state gerenciado com Zustand/Context quando necessário

### DA-002: Event-driven A2A via Supabase Realtime
- **Decisão:** Agentes se comunicam através de eventos persistidos no Supabase, não chamadas síncronas
- **Motivo:** Desacoplamento total, rastreabilidade, retry automático, sem single point of failure
- **Consequência:** Latência mínima de ~100ms entre agentes (aceitável para nossos casos de uso)

### DA-003: n8n como orquestrador de workflows complexos
- **Decisão:** Workflows com 3+ steps vão para o n8n. Logic simples fica no Next.js
- **Motivo:** Visibilidade visual, retry built-in, integrações prontas com 400+ serviços
- **Consequência:** n8n deve estar sempre online — é uma dependência crítica

### DA-004: Validação Zod em todas as fronteiras
- **Decisão:** Todo dado externo (webhooks, API requests, env vars) é validado com Zod antes de uso
- **Motivo:** Falhas explícitas > erros silenciosos em runtime
- **Consequência:** Overhead mínimo de validação, mas elimina classe inteira de bugs

### DA-005: Self-hosted para Evolution API e n8n
- **Decisão:** Ambos rodam em infra própria (VPS/Docker)
- **Motivo:** Custo zero por volume, dados sensíveis (mensagens WhatsApp) não saem da infra
- **Consequência:** Responsabilidade de uptime é nossa

---

## Estrutura de Banco de Dados

```sql
-- Agentes registrados no sistema
CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'idle',
  config JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Log de todas as execuções
CREATE TABLE agent_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID REFERENCES agents(id),
  status TEXT NOT NULL,
  payload JSONB,
  result JSONB,
  error TEXT,
  execution_time_ms INTEGER,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  finished_at TIMESTAMPTZ
);

-- Fila de eventos entre agentes
CREATE TABLE agent_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,
  source_agent_id UUID REFERENCES agents(id),
  target_agent_id UUID REFERENCES agents(id),
  payload JSONB NOT NULL,
  processed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Padrões de Código

### API Routes
```typescript
// Sempre: validação → lógica → resposta tipada
export async function POST(request: Request): Promise<Response> {
  const body = await request.json()
  const parsed = MySchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ success: false, error: parsed.error.message }, { status: 400 })
  }
  // lógica aqui...
  return Response.json({ success: true, data: result })
}
```

### Agentes
```typescript
// Sempre estender BaseAgent, nunca implementar IAgent direto
export class MyAgent extends BaseAgent {
  async execute(ctx: AgentContext): Promise<AgentResult> {
    const payload = MyPayloadSchema.parse(ctx.payload) // Zod valida
    // lógica específica...
    return { success: true, data: result, executionTime: Date.now() - start }
  }
}
```

---

## O que NÃO fazer

- ❌ Pages Router — projeto usa App Router exclusivamente
- ❌ `fetch` direto em Client Components — use Server Actions ou API Routes
- ❌ Estado global complexo no client — Supabase é a fonte da verdade
- ❌ Secrets no frontend — qualquer chave privada fica só no servidor
- ❌ Migrations manuais — usar Supabase CLI para versionamento do schema
