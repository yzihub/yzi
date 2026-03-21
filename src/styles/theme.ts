// YZIHUB — Design Token System (Mage.ai DNA)
// Source of truth for colors, typography and effects.
// Tailwind config mirrors these values via tailwind.config.ts.

export const theme = {
  colors: {
    background: {
      base: '#0B0D17',        // Deep dark space — canvas principal
      surface: '#131620',     // Cards, painéis, sidebars
      surfaceHover: '#1C2130',
    },
    primary: {
      blue: '#3B82F6',
      blueHover: '#2563EB',
      neon: '#8A2BE2',        // Roxo assinatura Mage.ai
      glow: 'rgba(138, 43, 226, 0.4)',
    },
    status: {
      success: '#00E676',     // Verde neon — sucesso
      running: '#00B0FF',     // Azul cyan — processando
      error: '#FF1744',       // Vermelho alerta
      pending: '#78909C',     // Cinza mutado — aguardando
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',   // Slate 400
      muted: '#64748B',       // Slate 500
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.05)',
      highlight: 'rgba(255, 255, 255, 0.10)',
    },
  },
  typography: {
    fontFamily: {
      sans: '"Inter", sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
    scale: {
      micro: '0.625rem',  // 10px — labels industriais
      small: '0.875rem',  // 14px — texto secundário
      base: '1rem',       // 16px — corpo
      h1: '1.5rem',       // 24px — títulos
    },
    letterSpacing: {
      industrial: '0.1em', // essencial para o look engineering nos micro-labels
    },
  },
  effects: {
    glow: {
      panel: '0 0 20px rgba(138, 43, 226, 0.05)',
      activeNode: '0 0 15px rgba(138, 43, 226, 0.3), inset 0 0 10px rgba(138, 43, 226, 0.2)',
      statusRunning: '0 0 10px rgba(0, 176, 255, 0.5)',
      statusSuccess: '0 0 8px rgba(0, 230, 118, 0.6)',
      blue: '0 0 20px rgba(59, 130, 246, 0.3)',
      neon: '0 0 20px rgba(138, 43, 226, 0.3)',
    },
    glass: {
      backdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(19, 22, 32, 0.7)',
    },
  },
} as const

export type Theme = typeof theme
