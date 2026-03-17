# System Map — YZIHUB

Mapa de todos os sistemas, serviços e integrações do projeto.

---

## Arquitetura Geral

```
┌─────────────────────────────────────────────────┐
│                   YZIHUB (Next.js)               │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │  /app    │  │  /core   │  │   /services  │  │
│  │ (UI +    │  │ (Agents  │  │  (External   │  │
│  │  API     │  │  + Rules)│  │   Clients)   │  │
│  │ Routes)  │  │          │  │              │  │
│  └────┬─────┘  └────┬─────┘  └──────┬───────┘  │
│       └─────────────┴───────────────┘           │
└─────────────────────────────────────────────────┘
          │              │              │
          ▼              ▼              ▼
      Supabase          n8n       Evolution API
   (DB + Auth +     (Workflows)    (WhatsApp)
    Realtime)
```

---

## Serviços Externos

### Supabase
- **Env:** `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Uso:** Banco de dados principal, autenticação, Realtime para eventos A2A
- **Client:** `src/services/supabase/client.ts`
- **Tables principais:** `agents`, `agent_logs`, `agent_events`, `workflows`

### n8n
- **Env:** `N8N_BASE_URL` + `N8N_API_KEY`
- **Uso:** Orquestração de workflows complexos, integrações low-code
- **Client:** `src/services/n8n/client.ts`

### Evolution API
- **Env:** `EVOLUTION_API_URL` + `EVOLUTION_API_KEY`
- **Uso:** Automação WhatsApp (envio/recebimento de mensagens)
- **Client:** `src/services/evolution/client.ts`

---

## Rotas de API (Next.js)

| Rota | Método | Descrição |
|------|--------|-----------|
| `/api/agents` | GET | Lista todos os agentes |
| `/api/agents/[id]` | GET | Detalhes de um agente |
| `/api/agents/[id]/execute` | POST | Dispara execução manual |
| `/api/webhooks/n8n` | POST | Recebe eventos do n8n |
| `/api/webhooks/evolution` | POST | Recebe mensagens WhatsApp |
| `/api/health` | GET | Health check geral |

---

## Fluxo de Dados Principal

```
WhatsApp Message
      ↓
Evolution API → POST /api/webhooks/evolution
      ↓
WebhookAgent (valida + roteia)
      ↓
ResponderAgent (processa intenção)
      ↓
WorkflowAgent (aciona n8n se necessário)
      ↓
Evolution API → responde no WhatsApp
```

---

## Status dos Serviços

| Serviço | Status | Notas |
|---------|--------|-------|
| Next.js | ✅ configurado | v16+ |
| Supabase | ⏳ pendente | aguardando credenciais |
| n8n | ⏳ pendente | aguardando setup |
| Evolution API | ⏳ pendente | aguardando setup |
