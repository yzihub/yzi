'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

const STEPS = [
  { index: '01', title: 'Diagnóstico' },
  { index: '02', title: 'Arquitetura' },
  { index: '03', title: 'Implementação' },
  { index: '04', title: 'Otimização' },
]

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="relative py-40 px-6"
      style={{ background: '#0A0A0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-6xl space-y-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: E }}
          className="space-y-5"
        >
          <span
            className="font-mono text-[10px] uppercase block"
            style={{ color: CYAN, letterSpacing: '0.18em' }}
          >
            [ 06 — Processo ]
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-semibold"
            style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            Como implementamos.
          </h2>
        </motion.div>

        {/* Steps row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {STEPS.map((step, i) => (
            <StepCard key={step.index} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: E }}
      className="p-10 space-y-6"
      style={{ background: '#0A0A0D', transition: 'background 0.25s ease' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#111115' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0A0A0D' }}
    >
      {/* Step number — large ghost */}
      <div
        className="font-display font-semibold"
        style={{ fontSize: '4rem', lineHeight: 1, color: `${CYAN}12`, letterSpacing: '-0.04em' }}
      >
        {step.index}
      </div>

      <div
        className="h-px"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />

      <h3
        className="font-display text-xl font-semibold"
        style={{ color: T1 }}
      >
        {step.title}
      </h3>
    </motion.div>
  )
}
