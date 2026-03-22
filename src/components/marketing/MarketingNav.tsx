'use client'

import { ArrowRight } from 'lucide-react'

export function MarketingNav() {
  return (
    <header className="fixed z-50 flex w-[calc(100%-2rem)] shadow-black/20 [animation:animationIn_0.8s_ease-out_0.1s_both] bg-neutral-950/95 h-[64px] max-w-5xl border-neutral-800 border rounded-full inset-x-0 mx-auto px-6 top-4 shadow-lg backdrop-blur-md items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="font-semibold text-base font-geist text-neutral-50 tracking-wide">YZIHUB</div>
      </div>

      <nav className="hidden md:flex items-center gap-1">
        {['Produto', 'YZIHUB', 'Soluções', 'Integrações', 'Docs'].map((item) => (
          <a
            key={item}
            href="#"
            className="px-4 py-2 text-sm font-medium font-geist text-neutral-400 transition-all duration-300 rounded-full hover:text-neutral-50 hover:bg-neutral-800/80"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-medium border border-[#009b81] bg-gradient-to-b from-[#00c9a7] to-[#009b81] px-5 py-2 rounded-full shadow-md transition-all duration-200 hover:from-[#20d7b2] hover:to-[#00a88a] hover:shadow-lg active:scale-95 font-geist text-white"
        >
          Comece já
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </header>
  )
}
