'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

export function DemandSection() {
  return (
    <section
      className="relative py-32 px-8"
      style={{ background: '#050507', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left — thin label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: E }}
          >
            <span
              className="font-mono text-[10px] uppercase block"
              style={{ color: CYAN, letterSpacing: '0.2em' }}
            >
              [ Contexto ]
            </span>
          </motion.div>

          {/* Right — title + text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: E }}
            className="space-y-6"
          >
            <h2
              className="font-display text-2xl md:text-3xl font-semibold"
              style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.2 }}
            >
              O problema não é gerar demanda.
              <br />
              É sustentar o que acontece depois.
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: T2, maxWidth: 520 }}
            >
              A maioria das operações consegue atrair atenção, mas não consegue organizar,
              conduzir e evoluir o processo de forma contínua.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
