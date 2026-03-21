# YZIHUB — Claude Code Context

## Projeto
Plataforma SaaS multi-tenant de automação de marketing e atendimento.
Stack: Next.js + Supabase + NocoDB + n8n + Evolution API + Redis

## Arquitetura
```
Cliente (Next.js)
      ↓
Supabase (Auth + DB principal)
      ↓
n8n (toda lógica de negócio)
      ↓
NocoDB (gestão interna)
      ↓
Evolution API (WhatsApp)
```

## Produtos
- CRM (IMOBI360) → Next.js + Supabase + NocoDB
- Tráfego → Meta/TikTok/Instagram API
- RADAR → Google Trends + Search API
- YZI → agente de atendimento WhatsApp

## Multi-tenant
- Auth via Supabase
- Cada cliente tem tenant_id
- Workspaces isolados no NocoDB
- Workflows separados no n8n

## Stack
- Next.js 15 + TypeScript + Tailwind
- Motion (animações)
- Lenis (scroll)
- Supabase (auth + banco)
- NocoDB (engine interna)
- n8n (automações)
- Vercel (deploy)

## Regras
- NUNCA hardcode de credenciais
- SEMPRE usar .env.local
- Uma skill = uma responsabilidade
- Testar antes de avançar
- Commits pequenos e frequentes

## MCPs disponíveis
- Supabase MCP ✅
- n8n MCP ✅
- NocoDB MCP ✅

## Skills disponíveis
- setup-projeto
- provisionar-cliente
- criar-workspace-nocodb
- duplicar-workflow-n8n
- configurar-yzi
- build-crm-front