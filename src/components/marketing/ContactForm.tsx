'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { z } from 'zod'
import { Check, Loader2, Mail, Building2, User, Target, ArrowRight } from 'lucide-react'

// ─── Schema (client-side mirror of ContactPayloadSchema) ─────────────────────

const schema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  company: z.string().min(1, 'Informe sua empresa'),
  email: z.string().email('E-mail inválido'),
  goal: z.enum(['SaaS', 'Consultoria', 'Outros'] as const),
})

type FormData = z.infer<typeof schema>
type FieldErrors = Partial<Record<keyof FormData, string>>
type FormState = 'idle' | 'submitting' | 'success' | 'error'

const GOALS = ['SaaS', 'Consultoria', 'Outros'] as const

// ─── Field component ──────────────────────────────────────────────────────────

function Field({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-xs font-medium text-hub-text-muted">
        <Icon size={12} className="text-hub-text-muted/60" />
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// Mage.ai style: surface #131620, border rgba(255,255,255,0.05), focus ring status-running
const inputClass =
  'w-full rounded-xl border border-white/[.05] bg-mage-surface px-4 py-3 text-sm text-hub-text placeholder-hub-text-muted/40 outline-none transition-all duration-200 focus:border-status-running/30 focus:ring-1 focus:ring-status-running/15'

// ─── Submit button ────────────────────────────────────────────────────────────

function SubmitButton({ state }: { state: FormState }) {
  return (
    <motion.button
      type="submit"
      disabled={state === 'submitting' || state === 'success'}
      className={[
        'relative w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5',
        'text-sm font-semibold transition-all duration-300 overflow-hidden',
        state === 'success'
          ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 cursor-default'
          : 'bg-brand-blue hover:bg-brand-blue-hover text-white shadow-lg shadow-glow-blue hover:shadow-glow-blue-lg disabled:opacity-70',
      ].join(' ')}
      whileTap={state === 'idle' ? { scale: 0.98 } : {}}
    >
      <AnimatePresence mode="wait">
        {state === 'idle' && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2"
          >
            Falar com a YZI agora
            <ArrowRight size={15} />
          </motion.span>
        )}

        {state === 'submitting' && (
          <motion.span
            key="submitting"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2"
          >
            <Loader2 size={15} className="animate-spin" />
            Enviando...
          </motion.span>
        )}

        {state === 'success' && (
          <motion.span
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, type: 'spring', bounce: 0.4 }}
            className="flex items-center gap-2"
          >
            <Check size={15} />
            Mensagem enviada!
          </motion.span>
        )}

        {state === 'error' && (
          <motion.span
            key="error"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2"
          >
            Tentar novamente
            <ArrowRight size={15} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

// ─── Main form ────────────────────────────────────────────────────────────────

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [serverError, setServerError] = useState<string | null>(null)
  const [data, setData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    goal: 'SaaS',
  })

  function handleChange(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (formState === 'submitting' || formState === 'success') return

    // Client-side validation
    const result = schema.safeParse(data)
    if (!result.success) {
      const fieldErrors: FieldErrors = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData
        fieldErrors[field] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    setServerError(null)
    setFormState('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      const json = await response.json()

      if (!response.ok || !json.success) {
        throw new Error(json.message ?? 'Erro desconhecido')
      }

      setFormState('success')
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Falha ao enviar. Tente novamente.')
      setFormState('error')
    }
  }

  return (
    <section id="contact" className="relative py-40 px-6">
      {/* Section fade masks */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-28 z-10"
        style={{ background: 'linear-gradient(to bottom, #0B0D17, transparent)' }} />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 z-10"
        style={{ background: 'linear-gradient(to top, #0B0D17, transparent)' }} />

      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(138,43,226,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: copy ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[.06]"
                style={{ background: 'rgba(19,22,32,0.7)' }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse"
                  style={{ background: '#00E676', boxShadow: '0 0 6px rgba(0,230,118,0.6)' }}
                />
                <span className="font-mono text-[10px] uppercase tracking-industrial text-white/40">
                  YZI — IA de Atendimento
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-hub-text tracking-tighter leading-tight">
                A YZI conduz<br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #14F195 0%, #3B82F6 100%)' }}
                >
                  o próximo passo.
                </span>
              </h2>

              <p className="text-hub-text-muted text-lg leading-relaxed">
                Ela entende seu cenário, organiza as informações e{' '}
                <span className="text-white font-medium">direciona você para a melhor solução.</span>
              </p>

              <p className="text-hub-text-muted/70 text-base">
                Sem formulários longos. Sem fricção.
              </p>
            </div>

            {/* Value props */}
            <ul className="space-y-3">
              {[
                'Resposta imediata da YZI',
                'Diagnóstico do seu cenário sem custo',
                'Direcionamento para a melhor solução',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-hub-text-muted">
                  <span className="h-5 w-5 rounded-full border border-hub-accent/30 bg-hub-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-hub-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: form card ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 16, delay: 0.12 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl p-7 space-y-5 framer-glass"
            >
              {/* Name */}
              <Field label="Nome completo" icon={User} error={errors.name}>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={data.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={inputClass}
                  autoComplete="name"
                />
              </Field>

              {/* Company */}
              <Field label="Empresa" icon={Building2} error={errors.company}>
                <input
                  type="text"
                  placeholder="Nome da sua empresa"
                  value={data.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className={inputClass}
                  autoComplete="organization"
                />
              </Field>

              {/* Email */}
              <Field label="E-mail profissional" icon={Mail} error={errors.email}>
                <input
                  type="email"
                  placeholder="voce@empresa.com"
                  value={data.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClass}
                  autoComplete="email"
                />
              </Field>

              {/* Goal — pill toggle */}
              <Field label="Objetivo principal" icon={Target} error={errors.goal}>
                <div className="flex gap-2 flex-wrap">
                  {GOALS.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => handleChange('goal', goal)}
                      className={[
                        'px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200',
                        data.goal === goal
                          ? 'border-brand-blue/50 bg-brand-blue/15 text-brand-blue'
                          : 'border-white/10 bg-white/[0.03] text-hub-text-muted hover:border-white/[.14] hover:text-hub-text',
                      ].join(' ')}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Server error */}
              <AnimatePresence>
                {serverError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2"
                  >
                    {serverError}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Success message */}
              <AnimatePresence>
                {formState === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2"
                  >
                    Recebemos sua mensagem! Entraremos em contato em breve.
                  </motion.p>
                )}
              </AnimatePresence>

              <SubmitButton state={formState} />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
