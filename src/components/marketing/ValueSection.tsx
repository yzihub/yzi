'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

const BULLETS = [
  'Leads não se perdem',
  'Conversas têm continuidade',
  'Decisões não dependem de memória humana',
  'Operação escala com estabilidade',
  'Crescimento se torna previsível',
]

export function ValueSection() {
  return (
    <section
      id="valor"
      className="relative py-40 px-6"
      style={{ background: '#050507', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: E }}
            className="space-y-6 lg:sticky lg:top-40"
          >
            <span
              className="font-mono text-[10px] uppercase block"
              style={{ color: CYAN, letterSpacing: '0.18em' }}
            >
              [ 05 — Valor ]
            </span>
            <h2
              className="font-display text-3xl md:text-4xl font-semibold"
              style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              O que isso muda na prática?
            </h2>
          </motion.div>

          {/* Right — bullet list */}
          <div className="space-y-0">
            {BULLETS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: E }}
                className="flex items-center gap-5 py-6 group"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                {/* Tick */}
                <span
                  className="flex-shrink-0 font-mono text-xs"
                  style={{ color: CYAN, opacity: 0.7 }}
                >
                  ✓
                </span>

                <span
                  className="font-display text-xl md:text-2xl font-semibold"
                  style={{
                    color: 'rgba(230,234,240,0.65)',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = T1 }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(230,234,240,0.65)' }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
