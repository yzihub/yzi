# Squad: YZI-Factory

## Objetivo
Provisionar novo cliente no ecossistema YZIHUB do zero.

## Agentes

### 1. Architect
- Papel: Coleta dados do cliente e desenha a estrutura
- Skills: nenhuma (raciocínio puro)
- Input: nome, segmento, plano, evolution_instance
- Output: configuração completa do cliente

### 2. Provisioner
- Papel: Cria workspace no NocoDB
- Skills: nocodb MCP
- Input: configuração do cliente
- Output: workspace_id + tabelas criadas

### 3. Automator
- Papel: Duplica e configura workflows no n8n
- Skills: n8n MCP
- Input: workspace_id + template do segmento
- Output: workflows ativos + webhook_base

### 4. Activator
- Papel: Configura YZI e conecta WhatsApp
- Skills: n8n MCP
- Input: webhook_base + evolution_instance
- Output: QR code + YZI ativa

### 5. Validator
- Papel: Testa o sistema completo e confirma operação
- Skills: nenhuma
- Input: todos os IDs gerados
- Output: relatório de saúde + status

## Fluxo
Architect → Provisioner → Automator → Activator → Validator

## Checkpoint
Humano aprova após Architect desenhar a estrutura
Humano conecta WhatsApp no QR code do Activator

## Trigger
Novo cliente cadastrado no Supabase