'use client'

import { motion } from 'framer-motion'
import { MockupN8N } from './MockupN8N'

const EASE = [0.16, 1, 0.3, 1] as const
const GREEN = '#14F195'

export function IntroOSSection() {
  return (
    <section className="relative py-40 px-6" style={{ background: '#000' }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{ borderColor: 'rgba(20,241,149,0.25)', background: 'rgba(20,241,149,0.05)' }}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: GREEN }}>
                YZI-OS™
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ letterSpacing: '-0.04em' }}
            >
              O YZI-OS™ não é uma ferramenta.{' '}
              <span style={{ color: GREEN }}>É a camada que organiza tudo.</span>
            </motion.h2>

            <div className="space-y-6 border-l-2 pl-8" style={{ borderColor: 'rgba(20,241,149,0.15)' }}>
              {[
                'Ele conecta atendimento, dados, decisão e execução em uma única estrutura.',
                'Cada parte da operação deixa de funcionar isoladamente e passa a operar como um sistema coordenado.',
                'Onde cada ação gera contexto. E cada contexto melhora a próxima decisão.',
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                  className="text-lg leading-relaxed"
                  style={{ color: i === 2 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)' }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            <MockupN8N />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
