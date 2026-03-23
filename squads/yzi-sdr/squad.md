# Squad: YZI-SDR

## Objetivo
Qualificar leads recebidos via WhatsApp e encaminhar para o CRM.

## Agentes

### 1. Radar
- Papel: Pesquisa contexto do lead (empresa, segmento, dores)
- Skills: apify
- Input: nome, telefone, empresa do lead
- Output: perfil completo do lead

### 2. Brain
- Papel: Analisa perfil e define score de qualificação
- Skills: nenhuma (raciocínio puro)
- Input: perfil do lead
- Output: score 0-100 + próximo passo recomendado

### 3. Connect
- Papel: Envia mensagem personalizada via WhatsApp
- Skills: n8n webhook
- Input: score + próximo passo
- Output: mensagem enviada + lead no CRM

## Fluxo
Radar → Brain → Connect

## Checkpoint
Humano aprova antes do Connect enviar mensagem

## Trigger
Webhook n8n quando novo lead chega