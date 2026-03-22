'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

export function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative py-40 px-6 overflow-hidden"
      style={{ background: '#050507', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Subtle glow from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 50% at 50% 100%, ${CYAN}06, transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center space-y-12">

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
            [ YZI-OS™ · Iniciar ]
          </span>

          <h2
            className="font-display text-4xl md:text-5xl font-semibold"
            style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Ou você continua operando ferramentas…{' '}
            <br className="hidden md:block" />
            ou passa a operar{' '}
            <span style={{ color: CYAN }}>um sistema.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: E }}
        >
          <a
            href="https://wa.me/5511999999999"
            className="inline-flex items-center font-mono text-sm font-semibold"
            style={{
              background: CYAN,
              color: '#000',
              borderRadius: 9999,
              padding: '16px 48px',
              letterSpacing: '0.04em',
              transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.opacity = '0.9'
              el.style.boxShadow = `0 0 40px ${CYAN}30`
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.opacity = '1'
              el.style.boxShadow = 'none'
            }}
          >
            Falar com a YZI
          </a>
        </motion.div>

        {/* Build tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: E }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-10" style={{ background: 'rgba(255,255,255,0.07)' }} />
          <span
            className="font-mono text-[9px] uppercase"
            style={{ color: 'rgba(255,255,255,0.18)', letterSpacing: '0.16em' }}
          >
            YZI-OS™ · Build 2026
          </span>
          <span className="h-px w-10" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </motion.div>

      </div>
    </section>
  )
}
