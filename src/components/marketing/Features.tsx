'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Radar,
  Users,
  Bot,
  Workflow,
  BarChart3,
  MessageSquare,
  ArrowRight,
  type LucideProps,
} from 'lucide-react'
import siteConfig from '@/config/site-config.json'

// ─── Icon registry (JSON cannot store React components) ───────────────────────

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Radar, Users, Bot, Workflow, BarChart3, MessageSquare,
}

// ─── Animation variants ────────────────────────────────────────────────────────

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
}

// ─── Bento card ────────────────────────────────────────────────────────────────

interface BentoCardData {
  label: string
  title: string
  description: string
  accentColor: string
  iconName: string
  badge?: string | null
  glowColor?: string
  tags?: string[]
  microLabel?: string | null
  isPAM?: boolean
  deepTech?: string | null
}

// PAM phase → color mapping
const PAM_COLORS: Record<string, string> = {
  '[P]': 'border-status-running/30 bg-status-running/10 text-status-running',
  '[A]': 'border-mage-neon/30 bg-mage-neon/10 text-mage-neon',
  '[M]': 'border-status-success/30 bg-status-success/10 text-status-success',
}

function BentoCard({ card, index = 0 }: { card: BentoCardData; index?: number }) {
  const Icon = ICONS[card.iconName] ?? Bot

  return (
    <motion.div
      variants={item}
      whileHover={{
        y: -5,
        boxShadow: card.microLabel
          ? '0 0 0 1px rgba(59,130,246,0.35), 0 8px 32px rgba(59,130,246,0.10)'
          : '0 8px 32px rgba(0,0,0,0.25)',
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className={[
        'group relative rounded-2xl overflow-hidden p-6 flex flex-col gap-4 framer-card',
      ].join(' ')}
    >
      {/* Hover glow */}
      {card.glowColor && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(400px circle at 30% 40%, ${card.glowColor}, transparent 60%)` }}
        />
      )}

      {/* Glass reflection shimmer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        initial={{ x: '-100%' }}
        animate={{ x: ['−100%', '200%'] }}
        transition={{
          duration: 1.4,
          delay: 3 + index * 0.7,
          repeat: Infinity,
          repeatDelay: 6 + index * 0.5,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
          width: '60%',
        }}
      />

      {/* PAM scan line — simula IA processando padrões */}
      {card.isPAM && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 z-20 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,176,255,0.7) 35%, rgba(138,43,226,0.7) 65%, transparent 100%)',
            boxShadow: '0 0 10px rgba(0,176,255,0.5), 0 0 20px rgba(138,43,226,0.3)',
          }}
          animate={{ top: ['8%', '88%', '8%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Icon + badge row */}
      <div className="flex items-start justify-between">
        <div className="h-10 w-10 rounded-xl border border-white/[.08] bg-white/[.04] flex items-center justify-center">
          <Icon size={20} className={card.accentColor} />
        </div>
        {card.badge && (
          <span className="text-[10px] font-medium px-2 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
            {card.badge}
          </span>
        )}
      </div>

      {/* MCP micro-label — industrial engineering style */}
      {card.microLabel && (
        <div className="font-mono text-[10px] uppercase tracking-industrial px-2 py-0.5 rounded border border-white/[.06] bg-white/[.02] text-status-pending/60 w-fit -mt-1">
          {card.microLabel}
        </div>
      )}

      {/* Text */}
      <div className="flex-1 space-y-2">
        <div className="text-[11px] font-medium uppercase tracking-wider text-hub-text-muted/60">
          {card.label}
        </div>
        <h3 className="text-lg font-semibold text-hub-text leading-snug">{card.title}</h3>
        <p className="text-sm text-hub-text-muted leading-relaxed">{card.description}</p>
        {card.deepTech && (
          <p className="font-mono text-xs text-slate-500 leading-snug pt-1">
            // {card.deepTech}
          </p>
        )}
      </div>

      {/* Tags — PAM phases get per-phase color, others get default */}
      {card.tags && card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((tag) => {
            const prefix = tag.startsWith('[P]') ? '[P]'
              : tag.startsWith('[A]') ? '[A]'
              : tag.startsWith('[M]') ? '[M]'
              : null
            const pamClass = prefix ? PAM_COLORS[prefix] : null
            return (
              <span
                key={tag}
                className={[
                  'font-mono text-[9px] uppercase tracking-industrial px-2 py-0.5 rounded border',
                  pamClass ?? 'border-white/[.07] bg-white/[.03] text-hub-text-muted/70',
                ].join(' ')}
              >
                {tag}
              </span>
            )
          })}
        </div>
      )}

      {/* CTA */}
      <div className="flex items-center gap-1 text-xs text-hub-text-muted/60 group-hover:text-brand-blue transition-colors">
        <span>Explorar</span>
        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </motion.div>
  )
}

// ─── Lazy video player (IntersectionObserver) ─────────────────────────────────

function SiloVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.load()
          el.play().catch(() => { /* autoplay blocked by browser — silent */ })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
      {/* Video */}
      <video
        ref={videoRef}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ borderRadius: '0.75rem' }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Film-grain noise overlay — Attio style */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.045,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Vignette — darker edges so copy stays legible */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(11,13,23,0.55) 100%)',
        }}
      />
    </div>
  )
}

// ─── Large silo card (featured = true) ────────────────────────────────────────

function FeaturedSiloCard({ silo }: { silo: typeof siteConfig.silos[0] }) {
  const Icon = ICONS[silo.iconName] ?? Workflow

  return (
    <motion.div
      variants={item}
      whileHover={{
        y: -3,
        boxShadow: '0 0 0 1px rgba(59,130,246,0.40), 0 12px 48px rgba(59,130,246,0.12)',
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className={[
        'group relative col-span-1 md:col-span-2 row-span-1 md:row-span-2',
        'rounded-2xl overflow-hidden p-8 flex flex-col justify-between framer-card',
      ].join(' ')}
    >
      {/* Background glow — brand-blue */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-[0.15] group-hover:opacity-[0.22] transition-opacity"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent 70%)' }}
      />

      {/* Glass reflection shimmer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        initial={{ x: '-100%' }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{
          duration: 1.6,
          delay: 3,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
          width: '60%',
        }}
      />

      {/* Video — lazy-loaded, noise overlay, vignette */}
      {'videoSrc' in silo && silo.videoSrc ? (
        <div className="absolute top-4 right-4 w-52 lg:w-64 pointer-events-none">
          <SiloVideo src={String(silo.videoSrc)} />
        </div>
      ) : (
        /* Fallback: A2A network graphic (shown when no video) */
        <div className="absolute top-6 right-6 h-32 w-32 opacity-[0.18] group-hover:opacity-[0.28] transition-opacity">
          <svg viewBox="0 0 128 128" className="h-full w-full text-brand-blue">
            <circle cx="64" cy="64" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="64" cy="64" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="64" cy="64" r="24" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="64" y1="4" x2="64" y2="124" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="4" y1="64" x2="124" y2="64" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
            <path d="M64 64 L104 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="88" cy="40" r="3" fill="currentColor" />
            <circle cx="72" cy="55" r="2" fill="currentColor" fillOpacity="0.6" />
            <circle cx="50" cy="38" r="2" fill="currentColor" fillOpacity="0.4" />
          </svg>
        </div>
      )}

      {/* Top section */}
      <div className="space-y-3">
        <div className="h-12 w-12 rounded-xl border border-brand-blue/20 bg-brand-blue/10 flex items-center justify-center">
          <Icon size={24} className="text-brand-blue" />
        </div>
        <div className="text-[11px] font-medium uppercase tracking-wider text-hub-text-muted/60">
          {silo.label}
        </div>
        <h3 className="text-2xl font-bold text-hub-text leading-tight">
          {silo.title}
        </h3>
        {/* MCP micro-label — industrial */}
        {'microLabel' in silo && silo.microLabel && (
          <div className="font-mono text-[10px] uppercase tracking-industrial px-2 py-0.5 rounded border border-white/[.06] bg-white/[.02] text-status-pending/60 w-fit">
            {String(silo.microLabel)}
          </div>
        )}
      </div>

      {/* Bottom section */}
      <div className="space-y-4">
        <p className="text-hub-text-muted leading-relaxed max-w-sm">
          {silo.description}
        </p>
        {'deepTech' in silo && silo.deepTech && (
          <p className="font-mono text-xs text-slate-500 leading-snug">
            // {String(silo.deepTech)}
          </p>
        )}

        {silo.tags && (
          <div className="flex flex-wrap gap-2">
            {silo.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full border border-white/[.08] bg-white/[.04] text-hub-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1.5 text-sm text-brand-blue group-hover:gap-2.5 transition-all">
          <span>Explorar {silo.name}</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  )
}

// ─── Features section ──────────────────────────────────────────────────────────

const featuredSilo = siteConfig.silos.find((s) => s.featured)!
const otherSilos = siteConfig.silos.filter((s) => !s.featured)

// Merge: other silos first (they get silo context), then extra features
const gridCards = [
  ...otherSilos.map((s) => ({
    label: s.label,
    title: s.title,
    description: s.description,
    accentColor: s.accentColor,
    iconName: s.iconName,
    badge: s.badge,
    glowColor: s.glowColor,
    tags: s.tags,
    microLabel: 'microLabel' in s ? (s.microLabel as string) : undefined,
    deepTech: 'deepTech' in s ? (s.deepTech as string) : undefined,
  })),
  ...siteConfig.features.slice(0, 4).map((f) => ({
    label: f.label,
    title: f.title,
    description: f.description,
    accentColor: f.accentColor,
    iconName: f.iconName,
    badge: f.badge ?? null,
    tags: 'tags' in f ? (f.tags as string[]) : undefined,
    microLabel: 'microLabel' in f ? (f.microLabel as string) : undefined,
    isPAM: 'isPAM' in f ? (f.isPAM as boolean) : false,
    deepTech: 'deepTech' in f ? (f.deepTech as string) : undefined,
  })),
]

export function Features() {
  return (
    <section id="features" className="relative py-40 px-6">
      {/* Section fade masks */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-28 z-10"
        style={{ background: 'linear-gradient(to bottom, #0B0D17, transparent)' }} />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 z-10"
        style={{ background: 'linear-gradient(to top, #0B0D17, transparent)' }} />

      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="text-center mb-16 space-y-4"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[.06]"
            style={{ background: 'rgba(19,22,32,0.7)' }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: '#00B0FF', boxShadow: '0 0 6px rgba(0,176,255,0.6)' }}
            />
            <span className="font-mono text-[10px] uppercase tracking-industrial text-white/40">
              AI OS Stack
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-medium text-hub-text leading-tight"
            style={{ letterSpacing: '-0.04em' }}
          >
            Quatro camadas.<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #8A2BE2 100%)' }}
            >
              Um sistema operacional.
            </span>
          </h2>
          <p className="text-hub-text-muted text-base max-w-xl mx-auto font-mono tracking-wide">
            Data · Tools · Agents · Applications
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(180px,auto)]"
        >
          {/* Featured silo — large 2×2 card from config */}
          <FeaturedSiloCard silo={featuredSilo} />

          {/* Remaining cards from config */}
          {gridCards.map((card, i) => (
            <BentoCard key={card.title} card={card} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
