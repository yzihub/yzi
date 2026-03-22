'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

const LINES = [
  'Ele conecta atendimento, dados, decisão e execução em uma única estrutura.',
  'Cada ação gera contexto.',
  'Cada contexto melhora a próxima decisão.',
]

export function SolutionSection() {
  return (
    <section
      className="relative py-40 px-6"
      style={{ background: '#050507', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: E }}
            className="space-y-8"
          >
            <span
              className="font-mono text-[10px] uppercase block"
              style={{ color: CYAN, letterSpacing: '0.18em' }}
            >
              [ 03 — Sistema ]
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-semibold"
              style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              O YZI-OS™ não é uma ferramenta.{' '}
              <span style={{ color: CYAN }}>É a camada que organiza tudo.</span>
            </h2>
          </motion.div>

          {/* Right — staggered lines with left border */}
          <div
            className="space-y-0"
            style={{ borderLeft: `1px solid ${CYAN}18` }}
          >
            {LINES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: E }}
                className="px-8 py-6 text-base leading-relaxed"
                style={{
                  color: i === 0 ? T2 : i === 2 ? T1 : T2,
                  fontWeight: i === 2 ? 500 : 400,
                  borderBottom: i < LINES.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  background: i === 2 ? 'rgba(0,240,255,0.02)' : 'transparent',
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
