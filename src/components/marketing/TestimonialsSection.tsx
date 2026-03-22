'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const StarIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 fill-emerald-500" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const QuoteIcon = () => (
  <svg className="w-6 h-6 text-emerald-500 mb-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
)

const borderGradient = 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'

const testimonials = [
  {
    quote: '"O sistema trouxe clareza total sobre a operação. Hoje conseguimos identificar gargalos antes mesmo de impactarem os resultados."',
    name: 'Rafael Mendes',
    role: 'Diretor de Tecnologia, GrowthOps',
    initials: 'RM',
    metric: { value: '4.2', suffix: 'ms', suffixClass: 'text-2xl ml-0.5 text-neutral-400' },
    metricLabel: 'Tempo médio de resposta da operação',
  },
  {
    quote: '"A implementação foi rápida, mas o impacto foi imediato. Passamos a ter controle real sobre o fluxo de leads e decisões."',
    name: 'Camila Rocha',
    role: 'Head de Operações, ScaleLab',
    initials: 'CR',
    metric: { value: '32', suffix: '+', suffixClass: 'text-emerald-500' },
    metricLabel: 'Operações ativas monitoradas',
  },
  {
    quote: '"Antes tudo era desconectado. Hoje a operação funciona como um sistema único, com decisões muito mais rápidas e assertivas."',
    name: 'Bruno Almeida',
    role: 'CEO, Nexa Digital',
    initials: 'BA',
    metric: { value: '70', suffix: '%', suffixClass: 'text-2xl ml-0.5 text-neutral-400' },
    metricLabel: 'Redução no tempo de resposta operacional',
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="flex-1 flex flex-col lg:pt-32 z-10 bg-neutral-950/80 w-full pt-32 pr-6 pb-16 pl-6 relative items-center">
      <div className="w-full max-w-[1180px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20 items-start justify-between">
          <div className="flex-1 w-full max-w-[520px]">
            <motion.div initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }} animate={inView ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : {}} transition={{ duration: 0.6, ease: EASE }} className="flex items-center gap-2 mb-6">
              <div className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest font-geist text-neutral-600">Validação</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }} className="md:text-4xl lg:text-5xl leading-[1.15] text-3xl font-medium text-neutral-50 tracking-tight font-geist">
              Operações que escolheram estrutura antes de tráfego
            </motion.h2>
          </div>
          <div className="flex-1 w-full max-w-[420px] md:mt-12">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE, delay: 0.2 }} className="leading-relaxed text-base text-neutral-500 font-geist">
              Implementado em operações reais que não podem falhar. Veja como equipes estruturadas utilizam o sistema para manter controle, previsibilidade e crescimento contínuo.
            </motion.p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <section className="sm:py-24 w-full pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: index * 0.15 }}
                className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 bg-gradient-to-r from-white/10 to-white/0 z-10 rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)]"
                style={{ position: 'relative', '--border-gradient': borderGradient, '--border-radius-before': '20px' } as React.CSSProperties}
              >
                <div className="lg:p-10 flex-1 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative">
                  <QuoteIcon />
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <p className="text-base leading-relaxed font-geist mb-8 flex-1 text-neutral-400">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full border border-white/[0.08] bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-300 font-geist flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium font-geist text-neutral-50">{t.name}</div>
                      <div className="text-xs font-geist text-neutral-500">{t.role}</div>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-10 border-t border-white/[0.05] relative z-10">
                  <div className="text-4xl lg:text-5xl font-medium tracking-tight font-geist mb-2 tabular-nums text-neutral-50">
                    {t.metric.value}<span className={t.metric.suffixClass}>{t.metric.suffix}</span>
                  </div>
                  <div className="text-sm font-geist leading-snug text-neutral-400">{t.metricLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
