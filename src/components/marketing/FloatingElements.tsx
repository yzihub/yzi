'use client'

import { motion } from 'framer-motion'

// ─── Floating debris — minimalista Framer-style ────────────────────────────────

const DEBRIS = [
  // Apenas 3 nós sutis — tela limpa
  { id: 'node-1', type: 'node', top: '22%', right: '4%',  delay: 1,   duration: 9,  size: 10, opacity: 0.07 },
  { id: 'node-2', type: 'node', top: '60%', left: '3%',   delay: 3.5, duration: 11, size: 8,  opacity: 0.05 },
  { id: 'node-3', type: 'node', top: '78%', right: '6%',  delay: 0.8, duration: 8,  size: 9,  opacity: 0.06 },
] as const

// ─── Sub-components ────────────────────────────────────────────────────────────

function NodeIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size * 2.4} height={size * 2.4} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1" />
      <circle cx="12" cy="12" r="2.5" fill={color} />
      <line x1="12" y1="3" x2="12" y2="7" stroke={color} strokeWidth="1" />
      <line x1="12" y1="17" x2="12" y2="21" stroke={color} strokeWidth="1" />
      <line x1="3" y1="12" x2="7" y2="12" stroke={color} strokeWidth="1" />
      <line x1="17" y1="12" x2="21" y2="12" stroke={color} strokeWidth="1" />
    </svg>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────

export function FloatingElements() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {DEBRIS.map((item) => {
        const style: React.CSSProperties = {
          position: 'absolute',
          top: 'top' in item ? item.top : undefined,
          left: 'left' in item ? item.left : undefined,
          right: 'right' in item ? item.right : undefined,
        }

        return (
          <motion.div
            key={item.id}
            style={style}
            initial={{ opacity: 0 }}
            animate={{
              opacity: item.opacity,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { delay: item.delay + 0.5, duration: 1.5 },
              y: {
                delay: item.delay,
                duration: item.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            {item.type === 'node' && (
              <NodeIcon size={item.size} color="#8A2BE2" />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
