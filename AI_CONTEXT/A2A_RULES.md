# A2A Rules — Agent-to-Agent Protocol

## Princípio Central
Cada agente tem **uma responsabilidade única**. Agentes nunca se chamam diretamente — eles emitem eventos e outros agentes reagem.

---

## Tipos de Agentes

| Tipo | Responsabilidade |
|------|-----------------|
| `workflow` | Orquestra sequências de tarefas no n8n |
| `webhook` | Recebe e roteia eventos externos |
| `scheduler` | Dispara agentes em intervalos programados |
| `responder` | Processa e responde mensagens (WhatsApp, email) |
| `analyzer` | Analisa dados e gera insights |

---

## Ciclo de Vida de um Agente

```
IDLE → RUNNING → COMPLETED
             ↓
           ERROR → RETRY (max 3x) → FAILED
```

- Todo agente deve logar início e fim no Supabase (`agent_logs`)
- Timeout padrão: **30 segundos** (configurável por agente)
- Em caso de erro, o agente emite `agent:error` e para — nunca silencia exceções

---

## Contrato de Interface

Todo agente implementa:

```typescript
interface IAgent {
  id: string           // UUID único e estável
  name: string         // Human-readable, snake_case
  type: AgentType
  status: AgentStatus
  execute(ctx: AgentContext): Promise<AgentResult>
}
```

### AgentContext (entrada)
```typescript
{
  agentId: string
  triggeredBy: string      // ID do agente ou "system" | "user"
  payload: unknown         // Validado com Zod dentro do agente
  timestamp: string        // ISO 8601
  sessionId?: string       // Para rastreabilidade end-to-end
}
```

### AgentResult (saída)
```typescript
{
  success: boolean
  data?: unknown
  error?: string
  executionTime?: number   // ms
  nextAgent?: string       // ID do próximo agente (encadeamento opcional)
}
```

---

## Regras de Comunicação

1. **Event-driven first** — prefira eventos Supabase Realtime a chamadas síncronas
2. **Sem acoplamento direto** — um agente não importa outro diretamente
3. **Payload imutável** — nunca mute o `ctx.payload`, crie um novo objeto
4. **Idempotência** — agentes devem ser seguros para re-execução com o mesmo payload
5. **Sem estado local** — todo estado persiste no Supabase, nunca em memória do agente

---

## Tabelas Supabase

```sql
agent_logs    (id, agent_id, status, payload, result, error, started_at, finished_at)
agent_events  (id, type, source_agent_id, target_agent_id, payload, created_at)
```

---

## Proibições

- ❌ Nunca usar `console.log` em produção — use o logger do agente
- ❌ Nunca capturar erros silenciosamente (`catch {}`)
- ❌ Nunca fazer chamadas de rede sem timeout definido
- ❌ Nunca armazenar segredos no payload do agente
