'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function TransitionSection() {
  return (
    <section className="relative py-32 px-6 text-center">
      <div className="mx-auto max-w-3xl space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-3xl md:text-4xl font-medium text-hub-text"
          style={{ letterSpacing: '-0.04em' }}
        >
          Como esses sistemas funcionam na prática
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="text-hub-text-muted text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Cada componente segue uma lógica específica. Quando conectados, formam um sistema autônomo de crescimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <a
            href="#processo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[.10] bg-white/[.04] hover:bg-white/[.08] text-hub-text text-sm font-medium transition-all duration-200"
          >
            Explorar arquitetura
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
