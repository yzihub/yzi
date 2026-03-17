'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function YZIStatusWidget() {
  const [open, setOpen] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Speech bubble / log */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 1.8 }}
            className="framer-glass rounded-2xl px-4 py-3.5 w-72"
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse flex-shrink-0"
                  style={{ background: '#00B0FF', boxShadow: '0 0 8px rgba(0,176,255,0.9)' }}
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/35">
                  YZI · ouvindo
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/20 hover:text-white/60 transition-colors rounded-md p-0.5"
                aria-label="Fechar"
              >
                <X size={12} />
              </button>
            </div>

            {/* Log line — mono style */}
            <div className="space-y-1">
              <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.08em]">
                // Conectando com você.
              </p>
              <p className="text-sm text-white/70 leading-snug">
                Olá, eu sou a{' '}
                <span className="text-white font-semibold">YZI</span>.{' '}
                Qual processo vamos otimizar hoje?
              </p>
            </div>

            {/* Tail / pointer */}
            <div
              className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45"
              style={{
                background: 'rgba(10,10,10,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: 'none',
                borderLeft: 'none',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always-visible pulse orb — toggle */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="h-11 w-11 rounded-full framer-glass flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        title="YZI está ouvindo"
        aria-label="Abrir chat da YZI"
      >
        {/* Outer pulse ring */}
        <motion.span
          className="absolute h-11 w-11 rounded-full"
          style={{ border: '1px solid rgba(0,176,255,0.25)' }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Inner LED */}
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: '#00B0FF', boxShadow: '0 0 12px rgba(0,176,255,1)' }}
        />
      </motion.button>

    </div>
  )
}
