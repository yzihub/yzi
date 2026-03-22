'use client'

import { motion } from 'framer-motion'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

export function HubHeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-8 overflow-hidden"
      style={{ background: '#050507' }}
    >
      {/* Moving grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute"
          style={{
            inset: -80,
            backgroundImage: `
              linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{ x: [0, 80], y: [0, 80] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Radial vignette over grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 20% 50%, transparent 40%, #050507 100%)',
        }}
      />

      {/* Top hairline accent */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(to right, transparent, ${CYAN}25, transparent)` }}
      />

      <div
        className="relative mx-auto max-w-5xl w-full"
        style={{ paddingTop: '8rem', paddingBottom: '6rem', zIndex: 1 }}
      >

        {/* System status badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: E }}
          className="flex items-center gap-3 mb-14"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full flex-shrink-0"
            style={{ background: CYAN }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            className="font-mono text-[9px] uppercase"
            style={{ color: CYAN, letterSpacing: '0.2em' }}
          >
            YZI-OS™
          </span>
          <span className="h-px w-8" style={{ background: `${CYAN}35` }} />
          <span
            className="font-mono text-[9px] uppercase"
            style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.16em' }}
          >
            Sistema ativo · 2026
          </span>
        </motion.div>

        {/* Headline — stagger per span */}
        <div className="mb-8">
          <div className="overflow-hidden">
            <motion.span
              className="block font-display font-semibold text-6xl md:text-7xl lg:text-8xl"
              style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.05 }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: E }}
            >
              YZI-OS™
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="block font-display text-3xl md:text-4xl lg:text-5xl mt-2"
              style={{ color: T2, fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1 }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.28, ease: E }}
            >
              Sistema operacional de crescimento com IA
            </motion.span>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: E }}
          className="mb-8"
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.06)',
            transformOrigin: 'left',
            maxWidth: 560,
          }}
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: E }}
          className="text-lg leading-relaxed mb-6"
          style={{ color: T2, maxWidth: 520 }}
        >
          Estrutura que organiza dados, tráfego, leads e decisões em uma única operação contínua.
        </motion.p>

        {/* Micro text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75, ease: E }}
          className="font-mono text-xs uppercase"
          style={{ color: 'rgba(255,255,255,0.22)', letterSpacing: '0.16em' }}
        >
          Do diagnóstico ao fechamento, tudo conectado.
        </motion.p>

      </div>

      {/* Bottom hairline */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      />
    </section>
  )
}
