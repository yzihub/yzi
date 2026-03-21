'use client'

import { useRef, useCallback } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Workflow, Zap, BrainCircuit, Database, Mail } from 'lucide-react'

// ─── Constants ─────────────────────────────────────────────────────────────────

const BRAND = { blue: '#3B82F6', purple: '#8B5CF6', neon: '#8A2BE2', bg: '#0B0D17' }
const EASE_EXPO = [0.22, 1, 0.36, 1] as const

// ─── SVG Node Card (inside workflow canvas) ────────────────────────────────────

function NodeCard({ title, subtitle, icon, color, bg }: {
  title: string
  subtitle: string
  icon: React.ReactNode
  color: string
  bg: string
}) {
  return (
    <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md shadow-xl h-full w-full">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${bg} ${color}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-medium text-white tracking-tight truncate">{title}</div>
        <div className="text-[10px] text-white/40 truncate">{subtitle}</div>
      </div>
    </div>
  )
}

// ─── Workflow canvas mockup ────────────────────────────────────────────────────

function WorkflowCanvas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.55, ease: EASE_EXPO }}
      className="relative w-full max-w-5xl mx-auto"
    >
      <div
        className="framer-glass rounded-3xl overflow-hidden"
        style={{ aspectRatio: '21/9' }}
      >
        {/* App bar */}
        <div className="h-10 border-b border-white/[0.06] flex items-center px-4 justify-between bg-white/[0.02] flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/[0.05]">
            <Workflow size={10} className="text-white/40" />
            <span className="font-mono text-[10px] text-white/40">Fluxo de Qualificação · YZI SDR Agent</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.06] px-3 py-1 rounded-full border border-white/[0.06] cursor-pointer hover:bg-white/[0.10] transition-colors">
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: '#00E676', boxShadow: '0 0 6px rgba(0,230,118,0.6)' }}
            />
            <span className="font-mono text-[10px] text-white/50">Run</span>
          </div>
        </div>

        {/* SVG canvas */}
        <div className="relative bg-canvas-grid" style={{ height: 'calc(100% - 2.5rem)' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 800 240"
              className="w-full h-full max-w-4xl"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Base connectors */}
              <path d="M 175 120 C 215 120, 215 120, 255 120" stroke="#27272a" strokeWidth="1.5" fill="none" />
              <path d="M 435 120 C 485 120, 485 60, 535 60" stroke="#27272a" strokeWidth="1.5" fill="none" />
              <path d="M 435 120 C 485 120, 485 180, 535 180" stroke="#27272a" strokeWidth="1.5" fill="none" />

              {/* Animated flow lines */}
              <path d="M 175 120 C 215 120, 215 120, 255 120" stroke={BRAND.neon} strokeWidth="1.5" fill="none" strokeDasharray="6 6" className="animate-flow-dash" />
              <path d="M 435 120 C 485 120, 485 60, 535 60" stroke="#00B0FF" strokeWidth="1.5" fill="none" strokeDasharray="6 6" className="animate-flow-dash" />
              <path d="M 435 120 C 485 120, 485 180, 535 180" stroke="#00E676" strokeWidth="1.5" fill="none" strokeDasharray="6 6" className="animate-flow-dash" />

              {/* Nodes via foreignObject */}
              <foreignObject x="15" y="88" width="160" height="64">
                <NodeCard
                  title="Lead Capturado"
                  subtitle="webhook · trigger"
                  icon={<Zap size={14} />}
                  color="text-[#8A2BE2]"
                  bg="bg-[#8A2BE2]/10"
                />
              </foreignObject>

              <foreignObject x="255" y="88" width="180" height="64">
                <NodeCard
                  title="YZI SDR Agent"
                  subtitle="qualificar · enriquecer"
                  icon={<BrainCircuit size={14} />}
                  color="text-[#00B0FF]"
                  bg="bg-[#00B0FF]/10"
                />
              </foreignObject>

              <foreignObject x="535" y="28" width="170" height="64">
                <NodeCard
                  title="CRM · Oportunidade"
                  subtitle="create_lead · MCP"
                  icon={<Database size={14} />}
                  color="text-emerald-400"
                  bg="bg-emerald-400/10"
                />
              </foreignObject>

              <foreignObject x="535" y="148" width="170" height="64">
                <NodeCard
                  title="Outbound WhatsApp"
                  subtitle="trigger_workflow · A2A"
                  icon={<Mail size={14} />}
                  color="text-white/60"
                  bg="bg-white/[0.06]"
                />
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Mesh background with parallax ────────────────────────────────────────────

function MeshBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Blobs scroll at ~30% of page scroll speed (slower than content)
  const blob1Y = useTransform(scrollY, [0, 600], [0, -80])
  const blob2Y = useTransform(scrollY, [0, 600], [0, -55])
  const blob3Y = useTransform(scrollY, [0, 600], [0, -40])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Blob 1 — brand-blue, top center */}
      <motion.div
        style={{
          y: blob1Y,
          background: `radial-gradient(ellipse at center, ${BRAND.blue} 0%, transparent 70%)`,
          filter: 'blur(90px)',
        }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-[0.10]"
      />

      {/* Blob 2 — brand-purple, left */}
      <motion.div
        style={{
          y: blob2Y,
          background: `radial-gradient(ellipse at center, ${BRAND.purple} 0%, transparent 70%)`,
          filter: 'blur(70px)',
        }}
        className="absolute top-1/4 -left-40 h-[450px] w-[450px] rounded-full opacity-[0.10]"
      />

      {/* Blob 3 — neon purple, right */}
      <motion.div
        style={{
          y: blob3Y,
          background: `radial-gradient(ellipse at center, ${BRAND.neon} 0%, transparent 70%)`,
          filter: 'blur(70px)',
        }}
        className="absolute top-1/3 -right-40 h-[320px] w-[320px] rounded-full opacity-[0.08]"
      />

      {/* Grid overlay — subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Bottom fade — deep */}
      <div
        className="absolute bottom-0 inset-x-0 h-64"
        style={{ background: `linear-gradient(to top, ${BRAND.bg} 20%, transparent)` }}
      />
      {/* Top fade */}
      <div
        className="absolute top-0 inset-x-0 h-32"
        style={{ background: `linear-gradient(to bottom, ${BRAND.bg}, transparent)` }}
      />
    </div>
  )
}

// ─── Animated badge ────────────────────────────────────────────────────────────

function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[.08] backdrop-blur-sm"
      style={{ background: 'rgba(19,22,32,0.7)' }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full animate-pulse"
        style={{ background: '#00B0FF', boxShadow: '0 0 8px rgba(0,176,255,0.7)' }}
      />
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/50">
        AI Operating System for Growth
      </span>
    </motion.div>
  )
}

// ─── Main heading ──────────────────────────────────────────────────────────────

function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: EASE_EXPO }}
      className="space-y-3"
    >
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-center"
        style={{ letterSpacing: '-0.05em' }}
      >
        <span className="text-white">A parceira que faltava</span>
        <br />
        <span className="text-white/50">para sua empresa dominar</span>
        <br />
        <span className="text-white/50">a era da{' '}</span>
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.neon} 60%, ${BRAND.purple} 100%)`,
          }}
        >
          IA.
        </span>
      </h1>
    </motion.div>
  )
}

// ─── Magnetic Button ───────────────────────────────────────────────────────────

const MAGNETIC_RADIUS = 80 // px — attraction radius

function MagneticButton({ children, className, href }: {
  children: React.ReactNode
  className: string
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springConfig = { stiffness: 180, damping: 18, mass: 0.6 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dx = e.clientX - centerX
    const dy = e.clientY - centerY
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < MAGNETIC_RADIUS) {
      const pull = (1 - dist / MAGNETIC_RADIUS) * 10
      rawX.set(dx * pull / dist)
      rawY.set(dy * pull / dist)
    }
  }, [rawX, rawY])

  const handleMouseLeave = useCallback(() => {
    rawX.set(0)
    rawY.set(0)
  }, [rawX, rawY])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-flex' }}
    >
      <motion.div style={{ x, y }} whileTap={{ scale: 0.95 }}>
        <Link href={href} className={className}>
          {children}
        </Link>
      </motion.div>
    </div>
  )
}

// ─── HeroSection ───────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-32 text-center overflow-hidden bg-canvas-grid">
      <MeshBackground />
      {/* Framer-style ambient glow */}
      <div className="bg-hero-glow" aria-hidden="true" />

      {/* Content stack */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">

        <HeroBadge />

        <HeroHeading />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE_EXPO }}
          className="text-lg md:text-xl text-hub-text-muted max-w-2xl leading-snug text-center"
        >
          A YZI entende o caos da sua operação. Por isso, ela integra agentes autônomos e fluxos inteligentes para que você{' '}
          <span className="text-white font-medium">pare de apagar incêndios</span>{' '}
          e comece a escalar com liberdade.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48, ease: EASE_EXPO }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          {/* Primary CTA — magnetic pill */}
          <MagneticButton
            href="/dashboard"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0B0D17] font-semibold text-base transition-all duration-200 hover:scale-[1.03] shadow-lg"
          >
            Começar a virar o jogo com a YZI
            <ArrowRight size={16} />
          </MagneticButton>

          {/* Secondary CTA pill */}
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/[.10] bg-white/[.04] hover:bg-white/[.08] text-hub-text text-base font-medium transition-all duration-200 backdrop-blur-sm"
          >
            Ver funcionalidades
          </a>
        </motion.div>
      </div>

      {/* Workflow canvas mockup */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-6">
        <WorkflowCanvas />
      </div>

      {/* Floating MCP tool definition — decorative */}
      <motion.div
        className="absolute right-12 top-1/2 -translate-y-16 hidden xl:block pointer-events-none"
        aria-hidden="true"
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { delay: 1.6, duration: 1 },
          x: { delay: 1.6, duration: 0.8, ease: EASE_EXPO },
          y: { delay: 1.6, duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="rounded-xl border border-white/[.06] bg-white/[.018] backdrop-blur-sm px-4 py-3.5 font-mono text-[10px] leading-[1.8] select-none">
          <span className="text-hub-text-muted/25">{'{'}</span>
          <br />
          <span className="pl-3">
            <span className="text-brand-purple/50">&quot;name&quot;</span>
            <span className="text-hub-text-muted/25">: </span>
            <span className="text-brand-blue/60">&quot;create_lead&quot;</span>
            <span className="text-hub-text-muted/25">,</span>
          </span>
          <br />
          <span className="pl-3">
            <span className="text-brand-purple/50">&quot;source&quot;</span>
            <span className="text-hub-text-muted/25">: </span>
            <span className="text-brand-blue/60">&quot;sdr_agent&quot;</span>
            <span className="text-hub-text-muted/25">,</span>
          </span>
          <br />
          <span className="pl-3">
            <span className="text-brand-purple/50">&quot;status&quot;</span>
            <span className="text-hub-text-muted/25">: </span>
            <span className="text-emerald-400/60">&quot;200 OK&quot;</span>
          </span>
          <br />
          <span className="text-hub-text-muted/25">{'}'}</span>
        </div>
        {/* Subtle connecting line */}
        <div className="absolute -left-6 top-1/2 h-px w-5 bg-gradient-to-r from-transparent to-white/[.06]" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-hub-text-muted/50">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-4 w-px bg-gradient-to-b from-hub-text-muted/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
