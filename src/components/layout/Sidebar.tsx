'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Monitor, Factory } from 'lucide-react'

const links = [
  { href: '/control', label: 'Control', icon: LayoutDashboard },
  { href: '/cockpit', label: 'Cockpit', icon: Monitor },
  { href: '/factory', label: 'Factory', icon: Factory },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-60 shrink-0 bg-[#0A0A0C] border-r border-white/[0.08] flex flex-col h-full">
      <nav className="flex flex-col gap-1 pt-4 px-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={[
                'flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors',
                active
                  ? 'border-l-2 border-[#60A5FA] bg-[rgba(96,165,250,0.08)] text-white pl-[10px]'
                  : 'border-l-2 border-transparent text-white/50 hover:text-white hover:bg-white/[0.04] pl-[10px]',
              ].join(' ')}
            >
              <Icon size={16} strokeWidth={1.5} />
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
