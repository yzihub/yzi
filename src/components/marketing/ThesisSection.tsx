'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

const LINES = [
  'CRM de um lado.',
  'WhatsApp de outro.',
  'Automação isolada.',
  'Dados que não conversam.',
  'Equipes apagando incêndio.',
]

export function ThesisSection() {
  return (
    <section
      className="relative py-40 px-6"
      style={{ background: '#050507', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left — title + closing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: E }}
            className="space-y-10"
          >
            <span
              className="font-mono text-[10px] uppercase block"
              style={{ color: CYAN, letterSpacing: '0.18em' }}
            >
              [ 01 — Tese ]
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-semibold"
              style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              O mercado não sofre por falta de ferramentas. Sofre por excesso de desconexão.
            </h2>

            <div className="space-y-6 pt-4">
              <p
                className="font-display text-xl font-semibold"
                style={{ color: T1 }}
              >
                Tudo funciona… mas nada escala.
              </p>
              <p className="text-base leading-relaxed" style={{ color: T2 }}>
                Porque crescimento não vem de peças soltas. Vem de orquestração.
              </p>
            </div>
          </motion.div>

          {/* Right — diagnostic lines */}
          <div className="space-y-1 flex flex-col justify-center">
            {LINES.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: E }}
                className="flex items-center gap-4 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
              >
                <span
                  className="font-mono text-[9px] flex-shrink-0"
                  style={{ color: `${CYAN}50`, letterSpacing: '0.1em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="font-display text-xl md:text-2xl font-semibold"
                  style={{ color: 'rgba(230,234,240,0.55)', letterSpacing: '-0.02em' }}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
