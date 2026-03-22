'use client'

import { motion } from 'framer-motion'

const GREEN = '#14F195'
const EASE = [0.16, 1, 0.3, 1] as const

function NodeCard({ title, subtitle, color }: { title: string; subtitle: string; color: string }) {
  return (
    <div
      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        minWidth: 148,
      }}
    >
      <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: color }} />
      <div>
        <div className="text-[11px] font-medium text-white leading-none">{title}</div>
        <div className="text-[9px] mt-0.5 font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>{subtitle}</div>
      </div>
    </div>
  )
}

export function MockupN8N() {
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
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Fluxo de Qualificação · YZI SDR Agent
        </span>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(20,241,149,0.12)', border: '1px solid rgba(20,241,149,0.25)' }}
        >
          <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: GREEN }} />
          <span className="font-mono text-[9px] font-medium" style={{ color: GREEN }}>Run</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative px-6 py-8" style={{ background: 'rgba(0,0,0,0.4)' }}>
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative flex items-center gap-0">
          {/* Node 1 */}
          <NodeCard title="Lead Capturado" subtitle="webhook · trigger" color="#a78bfa" />

          {/* Animated connector → Node 2 */}
          <div className="relative mx-2 flex items-center">
            <svg width="60" height="16" viewBox="0 0 60 16">
              <line x1="0" y1="8" x2="60" y2="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <motion.line
                x1="0" y1="8" x2="60" y2="8"
                stroke={GREEN} strokeWidth="1.5"
                strokeDasharray="6 6"
                animate={{ strokeDashoffset: [12, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
              />
            </svg>
          </div>

          {/* Node 2 */}
          <NodeCard title="YZI SDR Agent" subtitle="qualificar · enriquecer" color="#38bdf8" />

          {/* Fork connectors */}
          <div className="relative mx-2">
            <svg width="60" height="80" viewBox="0 0 60 80">
              {/* Top branch */}
              <path d="M 0 40 C 20 40, 20 12, 60 12" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <motion.path
                d="M 0 40 C 20 40, 20 12, 60 12" fill="none"
                stroke={GREEN} strokeWidth="1.5" strokeDasharray="6 6"
                animate={{ strokeDashoffset: [12, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'linear', delay: 0.15 }}
              />
              {/* Bottom branch */}
              <path d="M 0 40 C 20 40, 20 68, 60 68" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <motion.path
                d="M 0 40 C 20 40, 20 68, 60 68" fill="none"
                stroke={GREEN} strokeWidth="1.5" strokeDasharray="6 6"
                animate={{ strokeDashoffset: [12, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'linear', delay: 0.3 }}
              />
            </svg>
          </div>

          {/* Nodes 3 + 4 stacked */}
          <div className="flex flex-col gap-4">
            <NodeCard title="CRM · Oportunidade" subtitle="create_lead · MCP" color={GREEN} />
            <NodeCard title="Outbound WhatsApp" subtitle="trigger_workflow · A2A" color="rgba(255,255,255,0.5)" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
