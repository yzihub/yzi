'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Database, MessageCircle, Zap, Users, TrendingUp, Star } from 'lucide-react'
import type { FactoryFormData, Squad, WorkflowTemplate } from '@/types/factory'

// ─── Step indicator ────────────────────────────────────────────────────────────

const STEPS = [
  { number: 1, label: 'Identidade' },
  { number: 2, label: 'Infraestrutura' },
  { number: 3, label: 'Workflows' },
]

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-start gap-0 mb-8">
      {STEPS.map(({ number, label }, i) => (
        <div key={number} className="flex items-start flex-1">
          <div className="flex flex-col items-center flex-1">
            <div
              className={[
                'w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs',
                current === number
                  ? 'bg-emerald-500 text-black font-bold'
                  : current > number
                  ? 'bg-emerald-500/20 border border-emerald-500/30'
                  : 'border border-white/[0.08] text-neutral-500',
              ].join(' ')}
              style={current === number ? { boxShadow: '0 0 15px rgba(16,185,129,0.3)' } : undefined}
            >
              {current > number
                ? <Check size={12} className="text-emerald-500" />
                : number
              }
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-300 mt-1 text-center">
              {label}
            </span>
          </div>

          {i < STEPS.length - 1 && (
            <div className="relative overflow-hidden h-px flex-1 mt-3.5 mx-1 bg-white/[0.08]">
              <motion.span
                className="absolute inset-y-0 w-[40%]"
                style={{ background: 'linear-gradient(90deg, transparent, #10B981, transparent)' }}
                animate={{ left: ['-40%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Infrastructure cards ──────────────────────────────────────────────────────

const infraItems = [
  { key: 'nocodb' as const, icon: Database, label: 'NocoDB', description: 'Workspace e tabelas do CRM' },
  { key: 'evolution' as const, icon: MessageCircle, label: 'Evolution API', description: 'Instância WhatsApp do cliente' },
  { key: 'redis' as const, icon: Zap, label: 'Redis', description: 'Cache de sessão e filas' },
]

// ─── Workflow cards ────────────────────────────────────────────────────────────

const workflowItems = [
  { key: 'sdr' as const, icon: Users, label: 'Template SDR', description: 'Qualificação de leads via WhatsApp' },
  { key: 'trafego' as const, icon: TrendingUp, label: 'Template Tráfego', description: 'Nutrição de leads de tráfego pago' },
  { key: 'high-ticket' as const, icon: Star, label: 'Template High-Ticket', description: 'Atendimento consultivo de alto valor' },
]

// ─── Shared styles ─────────────────────────────────────────────────────────────

const inputClass =
  'h-12 w-full bg-neutral-900/50 border border-white/[0.05] rounded-xl px-4 font-mono text-base text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50'

const labelClass =
  'font-mono text-[11px] uppercase tracking-widest text-neutral-300 mb-2 block'

const btnBack =
  'text-neutral-500 hover:text-white transition-colors font-mono text-sm h-11 px-4'

// ─── Main component ────────────────────────────────────────────────────────────

export default function FactoryStepper() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState<FactoryFormData>({
    clientName: '',
    squad: 'yzi-sdr',
    tenantId: crypto.randomUUID(),
    infrastructure: { nocodb: true, evolution: true, redis: true },
    workflows: [],
  })

  function toggleWorkflow(key: WorkflowTemplate) {
    setForm((prev) => ({
      ...prev,
      workflows: prev.workflows.includes(key)
        ? prev.workflows.filter((w) => w !== key)
        : [...prev.workflows, key],
    }))
  }

  function toggleInfra(key: keyof FactoryFormData['infrastructure']) {
    setForm((prev) => ({
      ...prev,
      infrastructure: { ...prev.infrastructure, [key]: !prev.infrastructure[key] },
    }))
  }

  async function handleSubmit() {
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setIsLoading(false)
    // integração real virá aqui
  }

  return (
    <div className="bg-neutral-900/50 border border-white/[0.05] border-t-2 border-t-[#60A5FA]/30 rounded-2xl p-8 backdrop-blur-md max-w-2xl mx-auto w-full px-4">
      <StepIndicator current={step} />

      {/* ── Passo 1: Identidade ── */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <label className={labelClass}>Nome do cliente</label>
            <input
              className={inputClass}
              value={form.clientName}
              onChange={(e) => setForm({ ...form, clientName: e.target.value })}
              placeholder="Ex: Jurema Brokers"
            />
          </div>

          <div>
            <label className={labelClass}>Squad</label>
            <select
              className={inputClass}
              value={form.squad}
              onChange={(e) => setForm({ ...form, squad: e.target.value as Squad })}
            >
              <option value="yzi-sdr">yzi-sdr</option>
              <option value="yzi-trafego">yzi-trafego</option>
              <option value="yzi-factory">yzi-factory</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Tenant ID{' '}
              <span className="text-neutral-700 normal-case tracking-normal">(gerado automaticamente)</span>
            </label>
            <input
              className={`${inputClass} opacity-40 cursor-not-allowed`}
              value={form.tenantId}
              readOnly
            />
          </div>

          <motion.button
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold w-full h-11 rounded-full font-mono text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ boxShadow: '0 0 15px rgba(16,185,129,0.3)' }}
            disabled={!form.clientName.trim()}
            onClick={() => setStep(2)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Próximo →
          </motion.button>
        </div>
      )}

      {/* ── Passo 2: Infraestrutura ── */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            {infraItems.map(({ key, icon: Icon, label, description }) => {
              const checked = form.infrastructure[key]
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleInfra(key)}
                  className={[
                    'flex items-center gap-4 p-4 rounded-xl border text-left transition-all cursor-pointer',
                    checked
                      ? 'border-[#60A5FA]/50 bg-[#60A5FA]/[0.04]'
                      : 'bg-neutral-900/50 border-white/[0.05] hover:border-white/[0.12]',
                  ].join(' ')}
                >
                  <Icon size={16} strokeWidth={1.5} className={checked ? 'text-[#60A5FA]' : 'text-neutral-500'} />
                  <div className="flex-1">
                    <p className="font-sans text-sm font-medium text-neutral-200">{label}</p>
                    <p className="font-mono text-[11px] text-neutral-500 mt-0.5">{description}</p>
                  </div>
                  <div className={[
                    'w-4 h-4 rounded border flex items-center justify-center shrink-0',
                    checked ? 'bg-[#60A5FA] border-[#60A5FA]' : 'border-white/[0.16]',
                  ].join(' ')}>
                    {checked && <Check size={10} className="text-black" strokeWidth={3} />}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <button className={btnBack} onClick={() => setStep(1)}>← Voltar</button>
            <motion.button
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex-1 h-11 rounded-full font-mono text-sm flex items-center justify-center gap-2"
              style={{ boxShadow: '0 0 15px rgba(16,185,129,0.3)' }}
              onClick={() => setStep(3)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Próximo →
            </motion.button>
          </div>
        </div>
      )}

      {/* ── Passo 3: Workflows ── */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            {workflowItems.map(({ key, icon: Icon, label, description }) => {
              const selected = form.workflows.includes(key)
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleWorkflow(key)}
                  className={[
                    'flex items-center gap-4 p-4 rounded-xl border text-left transition-all cursor-pointer',
                    selected
                      ? 'border-[#60A5FA]/50 bg-[#60A5FA]/[0.04]'
                      : 'bg-neutral-900/50 border-white/[0.05] hover:border-white/[0.12]',
                  ].join(' ')}
                >
                  <Icon size={16} strokeWidth={1.5} className={selected ? 'text-[#60A5FA]' : 'text-neutral-500'} />
                  <div className="flex-1">
                    <p className="font-sans text-sm font-medium text-neutral-200">{label}</p>
                    <p className="font-mono text-[11px] text-neutral-500 mt-0.5">{description}</p>
                  </div>
                  <div className={[
                    'w-4 h-4 rounded border flex items-center justify-center shrink-0',
                    selected ? 'bg-[#60A5FA] border-[#60A5FA]' : 'border-white/[0.16]',
                  ].join(' ')}>
                    {selected && <Check size={10} className="text-black" strokeWidth={3} />}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <button className={btnBack} onClick={() => setStep(2)}>← Voltar</button>
            <motion.button
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex-1 h-11 rounded-full font-mono text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ boxShadow: '0 0 15px rgba(16,185,129,0.3)' }}
              disabled={isLoading}
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <span className="w-3 h-3 border border-black border-t-transparent rounded-full animate-spin" />
                  Provisionando...
                </>
              ) : (
                'Disparar provisionamento'
              )}
            </motion.button>
          </div>
        </div>
      )}
    </div>
  )
}
