'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

/* ─── Mini UI Demos ──────────────────────────────────────────────── */

function RadarDemo() {
  const DOTS = [[18, 55], [38, 25], [55, 70], [72, 40], [88, 18], [62, 82]]
  return (
    <div
      className="relative overflow-hidden"
      style={{ height: 48, borderRadius: 4, background: 'rgba(0,240,255,0.02)', border: '1px solid rgba(0,240,255,0.07)' }}
    >
      {DOTS.map(([x, y], i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, width: 2, height: 2, borderRadius: '50%', background: `${CYAN}80` }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}
      {/* Horizontal scan beam */}
      <motion.div
        style={{
          position: 'absolute', top: 0, bottom: 0, width: 36,
          background: `linear-gradient(to right, transparent, ${CYAN}18, transparent)`,
        }}
        animate={{ left: ['-10%', '105%'] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'linear', repeatDelay: 0.6 }}
      />
    </div>
  )
}

function AquisicaoDemo() {
  return (
    <div style={{ height: 48, display: 'flex', flexDirection: 'column', gap: 6, overflow: 'hidden', justifyContent: 'center' }}>
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,240,255,0.05)',
            border: '1px solid rgba(0,240,255,0.12)',
            borderRadius: 3, padding: '4px 8px', width: 'fit-content',
          }}
          initial={{ x: 32, opacity: 0 }}
          animate={{ x: 0, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 1.4, ease: E, repeatDelay: 0.5 }}
        >
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: CYAN, opacity: 0.7, display: 'block' }} />
          <span className="font-mono" style={{ fontSize: 8, color: `${CYAN}CC`, letterSpacing: '0.08em' }}>
            lead · qualificado
          </span>
        </motion.div>
      ))}
    </div>
  )
}

function CRMDemo() {
  const STAGES = [
    { label: 'Novo', count: 4, active: false },
    { label: 'Ativo', count: 7, active: true },
    { label: 'Fechado', count: 2, active: false },
  ]
  return (
    <div style={{ height: 48, display: 'flex', alignItems: 'center', gap: 4 }}>
      {STAGES.map((s, i) => (
        <div
          key={s.label}
          style={{
            flex: 1, borderRadius: 4, padding: '6px 8px',
            background: s.active ? 'rgba(0,240,255,0.06)' : 'rgba(255,255,255,0.02)',
            border: s.active ? `1px solid ${CYAN}22` : '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="font-mono" style={{ fontSize: 7, color: 'rgba(255,255,255,0.25)', marginBottom: 3, letterSpacing: '0.08em' }}>
            {s.label}
          </div>
          <motion.div
            className="font-mono font-semibold"
            style={{ fontSize: 13, color: s.active ? CYAN : T2 }}
            animate={s.active ? { opacity: [1, 0.5, 1] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            {s.count}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

function YZIDemo() {
  return (
    <div style={{ height: 48, display: 'flex', alignItems: 'flex-end', gap: 6 }}>
      <div
        style={{
          background: 'rgba(0,240,255,0.07)',
          border: `1px solid ${CYAN}20`,
          borderRadius: '8px 8px 8px 2px',
          padding: '8px 14px',
          display: 'flex', gap: 5, alignItems: 'center',
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{ width: 4, height: 4, borderRadius: '50%', background: CYAN }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <span className="font-mono" style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', paddingBottom: 10 }}>
        YZI
      </span>
    </div>
  )
}

function AnalyticsDemo() {
  const BARS = [
    { base: 0.35, peak: 0.52 },
    { base: 0.58, peak: 0.72 },
    { base: 0.42, peak: 0.56 },
    { base: 0.76, peak: 0.88 },
    { base: 0.50, peak: 0.64 },
    { base: 0.82, peak: 0.94 },
    { base: 0.63, peak: 0.77 },
  ]
  return (
    <div style={{ height: 48, display: 'flex', alignItems: 'flex-end', gap: 3 }}>
      {BARS.map((b, i) => (
        <motion.div
          key={i}
          style={{ flex: 1, borderRadius: '2px 2px 0 0', background: `${CYAN}28` }}
          animate={{ height: [`${b.base * 100}%`, `${b.peak * 100}%`, `${b.base * 100}%`] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ─── Animated SVG connector ─────────────────────────────────────── */

function FlowConnector() {
  return (
    <div className="hidden lg:flex items-center justify-center" style={{ height: 28, paddingLeft: 0 }}>
      <svg width="200" height="16" viewBox="0 0 200 16" fill="none">
        <line x1="0" y1="8" x2="200" y2="8" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <motion.line
          x1="0" y1="8" x2="200" y2="8"
          stroke={CYAN} strokeWidth="1"
          strokeDasharray="6 8"
          animate={{ strokeDashoffset: [14, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  )
}

/* ─── Block data ─────────────────────────────────────────────────── */

const DEMOS = [RadarDemo, AquisicaoDemo, CRMDemo, YZIDemo, AnalyticsDemo]

const BLOCKS = [
  {
    label: 'RADAR',
    narrative:
      'Antes de qualquer investimento em tráfego, o sistema analisa o cenário, identifica padrões e estrutura os dados que vão orientar cada decisão seguinte. Não há aquisição sem diagnóstico.',
  },
  {
    label: 'AQUISIÇÃO',
    narrative:
      'Com base no que o Radar estruturou, a entrada de leads deixa de ser tentativa e passa a ser orientada. Cada lead que chega já carrega contexto, origem e qualificação inicial.',
  },
  {
    label: 'CRM',
    narrative:
      'O pipeline não é uma lista. É a memória operacional do processo. Cada lead tem histórico, etapa e próxima ação definida. Nada depende de quem lembra. Tudo depende do sistema.',
  },
  {
    label: 'YZI',
    narrative:
      'A condução de conversas não é automação genérica. É inteligência que lê contexto, qualifica com precisão e direciona cada oportunidade para o estágio correto, sem perder continuidade.',
  },
  {
    label: 'ANALYTICS',
    narrative:
      'O ciclo fecha com visibilidade total. Dashboards e métricas que não apenas descrevem o que aconteceu, mas informam o que deve acontecer a seguir. Operação vira decisão.',
  },
]

/* ─── Main section ───────────────────────────────────────────────── */

export function SystemSection() {
  return (
    <section
      className="relative py-40 px-8"
      style={{ background: '#0A0A0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-5xl space-y-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: E }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-end"
        >
          <div className="space-y-5">
            <span
              className="font-mono text-[10px] uppercase block"
              style={{ color: CYAN, letterSpacing: '0.2em' }}
            >
              [ Sistema ]
            </span>
            <h2
              className="font-display text-3xl md:text-4xl font-semibold"
              style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              Um sistema completo, não uma ferramenta isolada
            </h2>
          </div>
          <p className="text-base leading-relaxed" style={{ color: T2 }}>
            Cada componente opera de forma independente, mas nenhum opera de forma isolada.
            O que um produz alimenta o próximo. A inteligência acumula ao longo do processo.
          </p>
        </motion.div>

        {/* Blocks with mini demos */}
        <div className="space-y-0">
          {BLOCKS.map((block, i) => {
            const Demo = DEMOS[i]
            return (
              <div key={block.label}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: E }}
                  className="group grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-0"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    transition: 'background 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = '#0d0d11'
                    el.style.boxShadow = `inset 0 0 0 1px ${CYAN}0D`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'transparent'
                    el.style.boxShadow = 'none'
                  }}
                >
                  {/* Label column */}
                  <div
                    className="py-10 pr-8 flex flex-col justify-between"
                    style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <div className="space-y-3">
                      <span
                        className="font-mono text-[9px] block"
                        style={{ color: 'rgba(255,255,255,0.18)', letterSpacing: '0.12em' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3
                        className="font-mono text-sm font-semibold"
                        style={{ color: T1, letterSpacing: '0.08em', transition: 'color 0.2s ease' }}
                      >
                        {block.label}
                      </h3>
                    </div>
                  </div>

                  {/* Narrative column */}
                  <div className="py-10 px-10 lg:px-12">
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: T2, maxWidth: 480 }}
                    >
                      {block.narrative}
                    </p>
                  </div>

                  {/* Demo column */}
                  <div
                    className="py-10 pl-8 hidden lg:flex flex-col justify-center"
                    style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <Demo />
                  </div>
                </motion.div>

                {/* Animated connector between blocks */}
                {i < BLOCKS.length - 1 && <FlowConnector />}
              </div>
            )
          })}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: E }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-8" style={{ background: `${CYAN}40` }} />
          <p
            className="font-mono text-xs uppercase"
            style={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em' }}
          >
            Cada etapa alimenta a próxima. Nada se perde. Tudo evolui.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
