'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center overflow-hidden"
      style={{ background: '#050507' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Top hairline accent */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(to right, transparent, ${CYAN}28, transparent)` }}
      />

      <div className="relative flex flex-col items-center gap-9 max-w-5xl mx-auto w-full" style={{ zIndex: 1, paddingTop: '7rem', paddingBottom: '4rem' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: E }}
          className="inline-flex items-center gap-3"
        >
          <span className="h-px w-6" style={{ background: `${CYAN}50` }} />
          <span
            className="font-mono text-[10px] uppercase"
            style={{ color: CYAN, letterSpacing: '0.18em' }}
          >
            YZI Growth System
          </span>
          <span className="h-px w-6" style={{ background: `${CYAN}50` }} />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: E }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08]"
          style={{ color: T1, letterSpacing: '-0.03em' }}
        >
          Enquanto você responde leads…{' '}
          <br className="hidden md:block" />
          existe quem já opera{' '}
          <span style={{ color: CYAN }}>um sistema inteiro.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: E }}
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: T2 }}
        >
          O YZI-OS™ é um sistema operacional de crescimento que conecta dados, decisões e execução —
          transformando operações fragmentadas em uma máquina coordenada de conversão.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: E }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#cta"
            className="inline-flex items-center font-mono text-sm font-semibold"
            style={{
              background: CYAN,
              color: '#000',
              borderRadius: 9999,
              padding: '14px 32px',
              letterSpacing: '0.04em',
              transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.opacity = '0.9'
              el.style.boxShadow = `0 0 32px ${CYAN}35`
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.opacity = '1'
              el.style.boxShadow = 'none'
            }}
          >
            Falar com a YZI
          </a>

          <a
            href="#arquitetura"
            className="inline-flex items-center font-mono text-sm"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: T2,
              borderRadius: 9999,
              padding: '14px 32px',
              letterSpacing: '0.04em',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = `${CYAN}40`
              el.style.color = T1
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(255,255,255,0.1)'
              el.style.color = T2
            }}
          >
            Explorar arquitetura →
          </a>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      />
      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-5 w-px mx-auto"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        />
      </motion.div>
    </section>
  )
}
