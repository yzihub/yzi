'use client'

import { motion } from 'framer-motion'
import { MockupWhatsApp } from './MockupWhatsApp'

const EASE = [0.16, 1, 0.3, 1] as const
const GREEN = '#14F195'

const BLOCKS = [
  'Enquanto ela conversa, qualifica e conduz…',
  'Existe um sistema inteiro operando por trás: memória, contexto, decisão e execução.',
  'É por isso que ela não parece um bot. Ela parece alguém que sabe exatamente o que está fazendo.',
]

export function YZIRepositionSection() {
  return (
    <section className="relative py-40 px-6" style={{ background: '#050505' }}>
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
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ background: GREEN }}
              />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: GREEN }}>
                YZI — Interface de Atendimento
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
              A YZI é só a{' '}
              <span style={{ color: GREEN }}>superfície visível.</span>
            </motion.h2>

            <div className="space-y-8">
              {BLOCKS.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                  className={i === 2 ? 'text-lg font-medium text-white' : 'text-lg'}
                  style={{ color: i === 2 ? 'white' : 'rgba(255,255,255,0.5)' }}
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
            className="flex justify-center lg:justify-end"
          >
            <MockupWhatsApp />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
