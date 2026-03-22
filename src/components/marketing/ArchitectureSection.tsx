'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

const MODULES = [
  { index: '01', name: 'YZI CONTROL', desc: 'A central que governa tudo',       href: '/control' },
  { index: '02', name: 'YZI CRM',     desc: 'Onde o lead vira processo',         href: '/crm' },
  { index: '03', name: 'YZI RADAR',   desc: 'Monitoramento e estabilidade',      href: '/radar' },
  { index: '04', name: 'YZI BRAIN',   desc: 'Inteligência e memória',            href: '/brain' },
  { index: '05', name: 'YZI COCKPIT', desc: 'Visualização e controle',           href: '/cockpit' },
  { index: '06', name: 'YZI CONNECT', desc: 'Integração com WhatsApp',           href: '/connect' },
]

export function ArchitectureSection() {
  return (
    <section
      id="arquitetura"
      className="relative py-40 px-8"
      style={{ background: '#0A0A0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-6xl space-y-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: E }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="space-y-5">
            <span
              className="font-mono text-[10px] uppercase block"
              style={{ color: CYAN, letterSpacing: '0.18em' }}
            >
              [ 04 — Arquitetura ]
            </span>
            <h2
              className="font-display text-3xl md:text-4xl font-semibold"
              style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              Módulos. Não features.
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: T2 }}>
            Cada componente opera de forma independente e coordenada dentro do sistema.
          </p>
        </motion.div>

        {/* 3 × 2 grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ border: '1px solid rgba(255,255,255,0.05)' }}
        >
          {MODULES.map((mod, i) => (
            <ModuleCard key={mod.index} mod={mod} delay={i * 0.07} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ModuleCard({
  mod,
  delay,
  index,
}: {
  mod: typeof MODULES[0]
  delay: number
  index: number
}) {
  const col = index % 3
  const row = Math.floor(index / 3)
  const isLastRow = row === 1

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: E }}
      style={{
        borderRight: col < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
        borderBottom: !isLastRow ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <Link
        href={mod.href}
        className="group flex flex-col justify-between h-full p-8 space-y-8"
        style={{
          background: '#0A0A0D',
          transition: 'background 0.2s ease',
          minHeight: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = '#111116'
          el.style.boxShadow = `inset 0 0 0 1px ${CYAN}18`
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = '#0A0A0D'
          el.style.boxShadow = 'none'
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span
            className="font-mono text-[9px]"
            style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}
          >
            {mod.index}
          </span>

          {/* Arrow — visible on hover */}
          <span
            className="font-mono text-xs opacity-0 group-hover:opacity-100"
            style={{
              color: CYAN,
              transition: 'opacity 0.2s ease, transform 0.2s ease',
              transform: 'translateX(-4px)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'
            }}
          >
            →
          </span>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3
            className="font-mono text-sm font-semibold"
            style={{ color: T1, letterSpacing: '0.04em' }}
          >
            {mod.name}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: T2 }}>
            {mod.desc}
          </p>
        </div>

        {/* Hover accent underline */}
        <div
          className="h-px w-0 group-hover:w-10"
          style={{
            background: CYAN,
            opacity: 0.45,
            transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </Link>
    </motion.div>
  )
}
