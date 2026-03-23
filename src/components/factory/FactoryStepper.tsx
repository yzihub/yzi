'use client'

import { useState } from 'react'
import { Database, MessageCircle, Zap, Users, TrendingUp, Star } from 'lucide-react'
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
                  ? 'bg-[#60A5FA] text-black font-semibold'
                  : current > number
                  ? 'bg-[rgba(96,165,250,0.2)] text-[#60A5FA]'
                  : 'border border-[rgba(255,255,255,0.08)] text-[#52525b]',
              ].join(' ')}
            >
              {number}
            </div>
            <span className="font-mono text-[10px] text-[#52525b] mt-1.5 text-center">
              {label}
            </span>
          </div>

          {i < STEPS.length - 1 && (
            <div className="h-px bg-[rgba(255,255,255,0.08)] flex-1 mt-3.5 mx-1" />
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

// ─── Shared input styles ───────────────────────────────────────────────────────

const inputClass =
  'bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm px-3 py-2 font-mono text-sm text-white w-full focus:border-[#60A5FA] focus:outline-none'

const labelClass = 'font-mono text-[10px] uppercase text-[#52525b] mb-1.5 block'

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
    <div className="max-w-xl">
      <StepIndicator current={step} />

      {/* ── Passo 1: Identidade ── */}
      {step === 1 && (
        <div className="flex flex-col gap-5">
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
              <span className="text-[#333] normal-case tracking-normal">(gerado automaticamente)</span>
            </label>
            <input
              className={`${inputClass} opacity-50 cursor-not-allowed`}
              value={form.tenantId}
              readOnly
            />
          </div>

          <button
            className="mt-2 bg-[#60A5FA] text-black font-mono text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-sm hover:bg-[#93c5fd] transition-colors disabled:opacity-40"
            disabled={!form.clientName.trim()}
            onClick={() => setStep(2)}
          >
            Próximo →
          </button>
        </div>
      )}

      {/* ── Passo 2: Infraestrutura ── */}
      {step === 2 && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            {infraItems.map(({ key, icon: Icon, label, description }) => {
              const checked = form.infrastructure[key]
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleInfra(key)}
                  className={[
                    'flex items-center gap-4 p-4 rounded-sm border text-left transition-colors',
                    checked
                      ? 'border-[#60A5FA] bg-[rgba(96,165,250,0.04)]'
                      : 'border-[rgba(255,255,255,0.08)] bg-[#0A0A0C]',
                  ].join(' ')}
                >
                  <Icon size={16} strokeWidth={1.5} className={checked ? 'text-[#60A5FA]' : 'text-[#52525b]'} />
                  <div className="flex-1">
                    <p className="font-sans text-xs font-semibold text-white">{label}</p>
                    <p className="font-mono text-[10px] text-[#52525b] mt-0.5">{description}</p>
                  </div>
                  <div className={[
                    'w-4 h-4 rounded-sm border flex items-center justify-center shrink-0',
                    checked ? 'bg-[#60A5FA] border-[#60A5FA]' : 'border-[rgba(255,255,255,0.16)]',
                  ].join(' ')}>
                    {checked && <span className="text-black text-[10px] font-bold leading-none">✓</span>}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="flex gap-3 mt-2">
            <button
              className="border border-[rgba(255,255,255,0.08)] text-[#52525b] font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-sm hover:text-white hover:border-[rgba(255,255,255,0.2)] transition-colors"
              onClick={() => setStep(1)}
            >
              ← Voltar
            </button>
            <button
              className="bg-[#60A5FA] text-black font-mono text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-sm hover:bg-[#93c5fd] transition-colors"
              onClick={() => setStep(3)}
            >
              Próximo →
            </button>
          </div>
        </div>
      )}

      {/* ── Passo 3: Workflows ── */}
      {step === 3 && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            {workflowItems.map(({ key, icon: Icon, label, description }) => {
              const selected = form.workflows.includes(key)
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleWorkflow(key)}
                  className={[
                    'flex items-center gap-4 p-4 rounded-sm border text-left transition-colors',
                    selected
                      ? 'border-[#60A5FA] bg-[rgba(96,165,250,0.04)]'
                      : 'border-[rgba(255,255,255,0.08)] bg-[#0A0A0C]',
                  ].join(' ')}
                >
                  <Icon size={16} strokeWidth={1.5} className={selected ? 'text-[#60A5FA]' : 'text-[#52525b]'} />
                  <div className="flex-1">
                    <p className="font-sans text-xs font-semibold text-white">{label}</p>
                    <p className="font-mono text-[10px] text-[#52525b] mt-0.5">{description}</p>
                  </div>
                  <div className={[
                    'w-4 h-4 rounded-sm border flex items-center justify-center shrink-0',
                    selected ? 'bg-[#60A5FA] border-[#60A5FA]' : 'border-[rgba(255,255,255,0.16)]',
                  ].join(' ')}>
                    {selected && <span className="text-black text-[10px] font-bold leading-none">✓</span>}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="flex gap-3 mt-2">
            <button
              className="border border-[rgba(255,255,255,0.08)] text-[#52525b] font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-sm hover:text-white hover:border-[rgba(255,255,255,0.2)] transition-colors"
              onClick={() => setStep(2)}
            >
              ← Voltar
            </button>
            <button
              className="bg-[#60A5FA] text-black font-mono text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-sm hover:bg-[#93c5fd] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? (
                <>
                  <span className="w-3 h-3 border border-black border-t-transparent rounded-full animate-spin" />
                  Provisionando...
                </>
              ) : (
                'Provisionar cliente'
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
