# Metrics — YZIHUB

KPIs e métricas de performance do projeto.

---

## KPIs de Produto

| Métrica | Meta | Atual | Status |
|---------|------|-------|--------|
| Agentes ativos | 5+ | 0 | ⏳ |
| Uptime do Hub | ≥ 99% | — | ⏳ |
| Tempo médio de resposta (webhook) | < 500ms | — | ⏳ |
| Workflows automatizados | 10+ | 0 | ⏳ |
| Mensagens WhatsApp processadas/dia | 100+ | 0 | ⏳ |

---

## KPIs Técnicos

| Métrica | Meta | Atual | Status |
|---------|------|-------|--------|
| Lighthouse Performance | ≥ 90 | — | ⏳ |
| TypeScript coverage | 100% | 100% | ✅ |
| Vulnerabilidades (npm audit) | 0 | 0 | ✅ |
| Tempo de build | < 30s | — | ⏳ |
| Bundle size (First Load JS) | < 150KB | — | ⏳ |

---

## KPIs de Agentes (A2A)

| Métrica | Meta | Atual |
|---------|------|-------|
| Taxa de sucesso de execução | ≥ 95% | — |
| Tempo médio de execução | < 2s | — |
| Taxa de retry | < 5% | — |
| Eventos perdidos | 0 | — |

---

## Como Medir

- **Performance:** `npm run build` → analisar `.next/static`
- **Agentes:** consultar `agent_logs` no Supabase
- **Webhooks:** logs em `agent_events` com `started_at` e `finished_at`
- **Uptime:** monitorar via `/api/health`

---

## Histórico

| Data | Evento |
|------|--------|
| 2026-03-17 | Projeto inicializado — baseline estabelecido |
