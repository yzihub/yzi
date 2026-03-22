'use client'

import { motion } from 'framer-motion'

const GREEN = '#14F195'
const EASE = [0.16, 1, 0.3, 1] as const

const LEADS = [
  { name: 'Ana Beatriz',     company: 'Studio AB Design',       status: 'Qualificado', score: 92, last: '2min atrás' },
  { name: 'Rodrigo Mendes',  company: 'RM Investimentos',        status: 'Em contato',  score: 74, last: '18min atrás' },
  { name: 'Carla Fontana',   company: 'Fontana Consultoria',     status: 'Qualificado', score: 88, last: '1h atrás' },
  { name: 'Paulo Drummond',  company: 'Drummond Imóveis',        status: 'Novo',        score: 51, last: '3h atrás' },
  { name: 'Mariana Setubal', company: 'MS Alta Performance',     status: 'Em contato',  score: 67, last: '5h atrás' },
]

const STATUS_STYLE: Record<string, React.CSSProperties> = {
  'Qualificado': { background: 'rgba(20,241,149,0.12)', color: GREEN,                    border: '1px solid rgba(20,241,149,0.25)' },
  'Em contato':  { background: 'rgba(250,204,21,0.1)',  color: 'rgba(250,204,21,0.9)',    border: '1px solid rgba(250,204,21,0.2)' },
  'Novo':        { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.1)' },
}

export function MockupCRM() {
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
          YZI CRM · Leads
        </span>
        <span className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
          {LEADS.length} registros
        </span>
      </div>

      {/* Table header */}
      <div
        className="grid px-4 py-2"
        style={{ gridTemplateColumns: '1fr 1fr 100px 60px 100px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {['Nome', 'Empresa', 'Status', 'Score', 'Última interação'].map((h) => (
          <span key={h} className="font-mono text-[9px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {LEADS.map((lead, i) => (
        <motion.div
          key={lead.name}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
          className="grid px-4 py-2.5 items-center"
          style={{
            gridTemplateColumns: '1fr 1fr 100px 60px 100px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          <span className="text-xs font-medium text-white">{lead.name}</span>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{lead.company}</span>
          <span
            className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium w-fit"
            style={STATUS_STYLE[lead.status]}
          >
            {lead.status}
          </span>
          <span className="font-mono text-xs font-bold" style={{ color: lead.score > 80 ? GREEN : lead.score > 60 ? 'rgba(250,204,21,0.9)' : 'rgba(255,255,255,0.45)' }}>
            {lead.score}
          </span>
          <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{lead.last}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
