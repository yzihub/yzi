'use client'

import { motion } from 'framer-motion'

const GREEN = '#14F195'
const EASE = [0.16, 1, 0.3, 1] as const

const METRICS = [
  { label: 'Tendência Alta',          value: '+34%',  sub: 'Demanda por automação',    color: GREEN },
  { label: 'Oportunidade Detectada',  value: '3',     sub: 'Nichos sem cobertura',     color: '#38bdf8' },
  { label: 'Alerta de Competidor',    value: '1',     sub: 'Novo player no mercado',   color: '#f97316' },
]

// Mini sparkline points (normalized 0-1)
const SPARKLINE = [0.4, 0.5, 0.35, 0.6, 0.55, 0.75, 0.65, 0.85, 0.8, 0.95]

function Sparkline() {
  const w = 200, h = 48, pad = 4
  const xs = SPARKLINE.map((_, i) => pad + (i / (SPARKLINE.length - 1)) * (w - pad * 2))
  const ys = SPARKLINE.map((v) => h - pad - v * (h - pad * 2))
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${x} ${ys[i]}`).join(' ')
  const fill = `${d} L ${xs[xs.length - 1]} ${h} L ${xs[0]} ${h} Z`

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.3" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#sg)" />
      <motion.path
        d={d}
        fill="none"
        stroke={GREEN}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
      />
      {/* Last dot */}
      <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill={GREEN} />
    </svg>
  )
}

export function MockupRadar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE }}
      style={{
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        background: 'rgba(255,255,255,0.03)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
        transform: 'perspective(1000px) rotateX(2deg)',
        overflow: 'hidden',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          YZI RADAR · Sinais de Mercado
        </span>
        <span className="font-mono text-[9px] animate-pulse" style={{ color: GREEN }}>● ao vivo</span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className="p-4 space-y-1"
            style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
          >
            <div className="font-mono text-[9px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {m.label}
            </div>
            <div className="text-2xl font-bold" style={{ color: m.color }}>{m.value}</div>
            <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Sparkline chart */}
      <div className="px-4 py-4 space-y-2">
        <div className="font-mono text-[9px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Tendência — últimas 10 semanas
        </div>
        <Sparkline />
      </div>
    </motion.div>
  )
}
