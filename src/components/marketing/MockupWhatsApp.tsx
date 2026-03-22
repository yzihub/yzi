'use client'

import { motion } from 'framer-motion'

const GREEN = '#14F195'
const EASE = [0.16, 1, 0.3, 1] as const

const MESSAGES = [
  { from: 'lead', text: 'Olá, vi o site e quero saber mais' },
  { from: 'yzi',  text: 'Olá! Eu sou a YZI. Para te ajudar melhor, me conta: qual é o principal desafio da sua operação hoje?' },
  { from: 'lead', text: 'Perco muitos leads por demora no atendimento' },
  { from: 'yzi',  text: 'Entendo. Isso é mais comum do que parece. Você atende por WhatsApp hoje? E tem uma estimativa de quantos leads chegam por semana?' },
]

export function MockupWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE }}
      style={{
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        background: 'rgba(255,255,255,0.03)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
        transform: 'perspective(1000px) rotateX(2deg)',
        overflow: 'hidden',
        maxWidth: 380,
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
          style={{ background: GREEN, color: '#000' }}
        >
          Y
        </div>
        <div>
          <div className="text-xs font-semibold text-white">YZI</div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: GREEN }} />
            <span className="font-mono text-[9px]" style={{ color: GREEN }}>Ouvindo</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 p-4" style={{ background: 'rgba(0,0,0,0.3)' }}>
        {MESSAGES.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12, ease: EASE }}
            className={`flex ${msg.from === 'yzi' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className="max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed"
              style={
                msg.from === 'yzi'
                  ? { background: 'rgba(20,241,149,0.1)', border: '1px solid rgba(20,241,149,0.2)', color: 'rgba(255,255,255,0.85)', borderBottomLeftRadius: 4 }
                  : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', borderBottomRightRadius: 4 }
              }
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="flex-1 rounded-full px-3 py-1.5 text-[11px] font-mono"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.25)' }}
        >
          Mensagem…
        </div>
        <div
          className="h-7 w-7 rounded-full flex items-center justify-center"
          style={{ background: GREEN }}
        >
          <span className="text-black text-xs">↑</span>
        </div>
      </div>
    </motion.div>
  )
}
