import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingElements } from '@/components/marketing/FloatingElements'
import { YZIStatusWidget } from '@/components/marketing/YZIStatusWidget'

export const metadata: Metadata = {
  title: 'YZIHUB — Onde a Automação encontra a Estratégia',
  description:
    'Sistemas inteligentes para quem escala com propósito. CRM, Radar de mercado e agentes SDR em uma plataforma unificada.',
}

function MarketingNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Glass nav bar */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full px-5 py-2.5 bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="h-7 w-7 rounded-lg bg-hub-accent/20 border border-hub-accent/40 flex items-center justify-center">
              <span className="text-hub-accent text-xs font-bold">Y</span>
            </span>
            <span className="font-semibold tracking-tight text-hub-text">
              YZI<span className="text-hub-accent">HUB</span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: 'Produto', href: '#features' },
              { label: 'Radar', href: '#radar' },
              { label: 'CRM', href: '#crm' },
              { label: 'Preços', href: '#pricing' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-sm text-hub-text-muted hover:text-hub-text transition-colors rounded-lg hover:bg-white/[.04]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex px-3 py-1.5 text-sm text-hub-text-muted hover:text-hub-text transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-hub-accent hover:bg-hub-accent-hover text-white text-sm font-medium transition-colors"
            >
              Começar grátis
              <span className="text-white/60">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function MarketingFooter() {
  return (
    <footer className="border-t border-hub-border mt-32 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-tight text-hub-text">
            YZI<span className="text-hub-accent">HUB</span>
          </span>
          <span className="text-hub-text-muted text-sm">© 2026</span>
        </div>
        <p className="text-hub-text-muted text-sm text-center">
          Sistemas inteligentes para quem escala com propósito.
        </p>
      </div>
    </footer>
  )
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-hub-bg">
      <FloatingElements />
      <MarketingNav />
      <main>{children}</main>
      <MarketingFooter />
      <YZIStatusWidget />
    </div>
  )
}
