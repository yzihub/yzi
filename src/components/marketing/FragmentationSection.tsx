'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

const LINES = [
  'Leads chegam sem contexto.',
  'Tráfego roda sem base.',
  'Conversas começam do zero.',
  'Decisões dependem de memória humana.',
]

export function FragmentationSection() {
  return (
    <section
      className="relative py-40 px-8"
      style={{ background: '#0A0A0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

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
              style={{ color: CYAN, letterSpacing: '0.2em' }}
            >
              [ Diagnóstico ]
            </span>
            <h2
              className="font-display text-3xl md:text-4xl font-semibold"
              style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              Crescimento falha onde a operação se fragmenta
            </h2>
            <div
              className="pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p
                className="text-base leading-relaxed"
                style={{ color: T2 }}
              >
                Nada disso é falta de ferramenta.
                <br />
                É falta de estrutura.
              </p>
            </div>
          </motion.div>

          {/* Right — diagnostic lines */}
          <div className="flex flex-col justify-center space-y-0">
            {LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09, ease: E }}
                className="py-6"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                <p
                  className="font-display text-xl md:text-2xl font-semibold"
                  style={{ color: 'rgba(230,234,240,0.45)', letterSpacing: '-0.02em' }}
                >
                  {line}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
