# YZIHUB

Hub central de automações, agentes e integrações da YZI.

## Stack

- **Next.js 15** (App Router + Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS** (Hub-style dark design system)
- **Supabase** (banco de dados + auth + realtime)
- **n8n** (orquestração de workflows)
- **Evolution API** (WhatsApp automation)

## Metodologia

### GSD (Get Shit Done)
Foco em execução incremental com checkpoints. Cada fase tem um `PLAN.md` executável com tarefas atômicas e critérios de verificação claros.

### A2A (Agent-to-Agent)
Arquitetura orientada a agentes com responsabilidades isoladas. Agentes se comunicam via eventos, com estado centralizado no Supabase.

```
Trigger (webhook/schedule/manual)
    ↓
Agent Coordinator (src/core/)
    ↓
Specialized Agents (workflow | responder | analyzer)
    ↓
External Services (n8n | Evolution API | Supabase)
```

## Rodando o Projeto

### Pré-requisitos
- Node.js 20+
- npm ou pnpm

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.local .env.local
# Edite .env.local com suas credenciais

# 3. Rodar em desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## Estrutura de Pastas

```
src/
├── app/          # Next.js App Router — rotas, layouts, pages
│   ├── api/      # API Routes (REST endpoints)
│   ├── layout.tsx
│   └── page.tsx
├── core/         # Lógica de domínio
│   ├── agents/   # Implementações de agentes A2A
│   ├── rules/    # Regras de negócio
│   └── events/   # Sistema de eventos
├── lib/          # Utilitários, helpers, config de clientes
├── mcp/          # Integrações MCP (Model Context Protocol)
├── services/     # Clientes de serviços externos
│   ├── supabase/ # Cliente Supabase + queries
│   ├── n8n/      # Cliente n8n API
│   └── evolution/# Cliente Evolution API
└── types/        # TypeScript types globais

AI_CONTEXT/       # Contexto para IAs (Claude, Cursor, Copilot)
├── A2A_RULES.md       # Regras do protocolo A2A
├── ARCH_BLUEPRINT.md  # Decisões de arquitetura
├── METRICS.md         # KPIs e métricas do projeto
├── PROGRESS.md        # Progresso atual
├── SYSTEM_MAP.md      # Mapa de sistemas e integrações
└── YZIHUB_METHOD.md   # Metodologia completa

docs/             # Documentação técnica
```

## Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave anon do Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Chave service role (server-only) |
| `N8N_API_KEY` | API Key do n8n |
| `N8N_BASE_URL` | URL base do n8n (default: localhost:5678) |
| `EVOLUTION_API_KEY` | API Key da Evolution API |
| `EVOLUTION_API_URL` | URL base da Evolution API |

## Comandos

```bash
npm run dev      # Desenvolvimento com hot-reload
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # ESLint
```

## Contexto AI

Os arquivos em `/AI_CONTEXT/` devem ser mantidos atualizados. Toda IA (Claude, Cursor, Copilot) deve consultar esses arquivos antes de implementar novas features.

**Antes de qualquer implementação:** leia `ARCH_BLUEPRINT.md` e `A2A_RULES.md`.
**Após completar uma tarefa:** atualize `PROGRESS.md`.
