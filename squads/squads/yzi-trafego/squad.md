# Squad: YZI-Tráfego

## Objetivo
Criar, publicar e otimizar campanhas em Meta, TikTok e Instagram.

## Agentes

### 1. Radar
- Papel: Pesquisa tendências e oportunidades de mercado
- Skills: apify
- Input: segmento, produto, objetivo
- Output: tendências + keywords + concorrentes

### 2. Creative
- Papel: Gera copy e criativo visual adaptado por plataforma
- Skills: image-generator, canva
- Input: tendências + briefing do produto
- Output: copy + imagem por plataforma

### 3. Publisher
- Papel: Publica nas redes sociais
- Skills: blotato, instagram-publisher
- Input: copy + imagem + plataforma
- Output: post publicado + link

### 4. Optimizer
- Papel: Monitora métricas e sugere ajustes
- Skills: apify
- Input: dados de performance
- Output: relatório + próximas ações

## Fluxo
Radar → Creative → Publisher → Optimizer

## Checkpoint
Humano aprova criativo antes de publicar

## Trigger
Manual ou agendado via n8n