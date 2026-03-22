'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const
const GREEN = '#14F195'

const ARROWS = [
  '→ operações que crescem… e quebram',
  '→ leads que chegam… e se perdem',
  '→ sistemas que existem… mas não se conectam',
]

export function AuthoritySection() {
  return (
    <section id="autoridade" className="relative py-40 px-6" style={{ background: '#050505' }}>
      <div className="mx-auto max-w-3xl space-y-14">

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          Eu não vendo automação. Eu estruturo operações que{' '}
          <span style={{ color: GREEN }}>funcionam sem depender de esforço constante.</span>
        </motion.h2>

        <div className="space-y-5 pl-6 border-l-2" style={{ borderColor: 'rgba(20,241,149,0.2)' }}>
          {ARROWS.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="text-lg font-mono"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="text-xl font-semibold"
          style={{ color: GREEN }}
        >
          O YZI-OS™ nasce exatamente nesse ponto.
        </motion.p>

      </div>
    </section>
  )
}
