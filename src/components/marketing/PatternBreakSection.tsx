'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

export function PatternBreakSection() {
  return (
    <section
      className="relative py-32 px-6"
      style={{ background: '#0A0A0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Subtle centered glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 80% at 50% 50%, ${CYAN}05, transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: E }}
          className="space-y-8"
        >
          <span
            className="font-mono text-[10px] uppercase block"
            style={{ color: CYAN, letterSpacing: '0.18em' }}
          >
            [ 02 — Quebra ]
          </span>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold"
            style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Automação sem sistema
            <br />
            só acelera o caos.
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: T2 }}
          >
            A maioria das empresas que automatizam só aumenta volume, mas continua sem controle, sem contexto e sem inteligência acumulada.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
