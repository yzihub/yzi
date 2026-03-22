'use client'

export function PerformanceSection() {
  return (
    <section aria-label="System Performance Dashboard" className="flex-1 flex flex-col lg:pt-32 bg-neutral-950/80 w-full z-50 pt-32 pr-6 pb-16 pl-6 relative items-center">
      <div className="w-full max-w-[1180px]">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 mb-16">
          <div className="flex-1 w-full max-w-[520px]">
            <div className="blur-animate flex items-center gap-2 mb-6">
              <div aria-hidden="true" className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest font-geist text-neutral-600">Performance da operação</span>
            </div>
            <h2 className="scroll-animate md:text-4xl lg:text-5xl leading-[1.15] text-3xl font-medium text-neutral-50 tracking-tight font-geist">
              Operação em escala, do diagnóstico ao fechamento
            </h2>
          </div>
          <div className="flex-1 w-full max-w-[420px] md:mt-12">
            <p className="scroll-animate delay-1 leading-relaxed text-base text-neutral-500 font-geist">
              Operação acontecendo em tempo real. Acompanhe o fluxo de leads, decisões automatizadas e performance do sistema sem perder nenhum evento.
            </p>
          </div>
        </header>

        {/* Stats grid */}
        <div className="scroll-animate delay-2 grid grid-cols-2 lg:grid-cols-4 w-full mb-16 gap-2">
          <div className="flex flex-col gap-2 py-4 pl-4 border-l-2 border-emerald-500 group relative transition-transform hover:-translate-y-1 duration-300">
            <div className="absolute inset-0 bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -ml-4 from-emerald-500/10" />
            <div className="flex items-center gap-2 relative z-10">
              <span className="text-xs font-medium font-geist uppercase tracking-widest text-neutral-400">Leads ativos</span>
              <div aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
            </div>
            <span className="text-3xl md:text-4xl font-medium tracking-tight tabular-nums font-geist relative z-10 text-neutral-50">4,210+</span>
          </div>
          <div className="flex flex-col gap-2 py-4 pl-4 border-l-2 group transition-transform hover:-translate-y-1 duration-300 border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium font-geist uppercase tracking-widest text-neutral-400">Conversas em andamento</span>
              <svg aria-hidden="true" className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="12"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            </div>
            <span className="text-3xl md:text-4xl font-medium tracking-tight tabular-nums font-geist text-neutral-50">124 <span className="text-xl ml-0.5 text-neutral-500">leads hoje</span></span>
          </div>
          <div className="flex flex-col gap-2 group transition-transform hover:-translate-y-1 duration-300 border-neutral-800 border-l-2 pt-4 pb-4 pl-4 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium font-geist uppercase tracking-widest text-neutral-400">Operação contínua</span>
              <svg aria-hidden="true" className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="12"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <span className="text-3xl md:text-4xl font-medium tracking-tight tabular-nums font-geist text-neutral-50">99.98%</span>
          </div>
          <div className="flex flex-col gap-2 py-4 pl-4 border-l-2 group transition-transform hover:-translate-y-1 duration-300 border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium font-geist uppercase tracking-widest text-neutral-400">Canais conectados</span>
            </div>
            <span className="text-3xl md:text-4xl font-medium tracking-tight tabular-nums font-geist text-neutral-50">32</span>
          </div>
        </div>

        {/* Main dashboard */}
        <div className="scroll-animate delay-3 flex sm:p-8 font-geist w-full pt-4 pr-4 pb-4 pl-4 justify-center" id="dashboard-root">
          <main className="z-10 border-white/[0.05] p-6 sm:p-8 flex flex-col lg:flex-row gap-6 w-full max-w-[1100px] border rounded-[24px] relative shadow-2xl bg-neutral-900" id="main-card">

            {/* Left: region cards */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {[
                { label: 'AQUISIÇÃO', ms: '12', pct: '99.9%', cap: '82%', capPct: 82, color: 'emerald', up: true },
                { label: 'CRM',       ms: '24', pct: '99.8%', cap: '64%', capPct: 64, color: 'emerald', up: true },
                { label: 'RADAR',     ms: '142', pct: '98.4%', cap: '91%', capPct: 91, color: 'amber', up: false },
              ].map(({ label, ms, pct, cap, capPct, color, up }) => (
                <div
                  key={label}
                  className={`p-5 rounded-xl bg-neutral-950/50 border flex flex-col group hover:bg-neutral-950 transition-colors ${color === 'amber' ? 'border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)]' : 'border-white/[0.05]'}`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-[10px] font-mono font-medium uppercase tracking-wider ${color === 'amber' ? 'text-amber-500' : 'text-neutral-400'}`}>{label}</span>
                    <span className="flex h-1.5 w-1.5 relative">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${color === 'amber' ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                      <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${color === 'amber' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-3xl font-medium tracking-tight text-neutral-50 tabular-nums">{ms}<span className="text-sm text-neutral-500 ml-1">ms</span></div>
                    <div className={`flex items-center gap-1 text-xs font-medium ${color === 'amber' ? 'text-amber-500' : 'text-emerald-500'}`}>
                      {up ? (
                        <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                      ) : (
                        <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
                      )}
                      {pct}
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <div className={`flex justify-between text-[10px] font-mono ${color === 'amber' ? 'text-amber-500/70' : 'text-neutral-500'}`}>
                      <span>CAPACIDADE</span><span>{cap}</span>
                    </div>
                    <div className="w-full bg-neutral-800 rounded-full h-1">
                      <div className={`h-1 rounded-full transition-all duration-1000 ${color === 'amber' ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${capPct}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: network viz */}
            <div className="w-full lg:w-2/3 p-6 sm:p-8 rounded-xl bg-neutral-950/50 border border-white/[0.05] flex flex-col relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] blur-[100px] rounded-full pointer-events-none bg-emerald-500/10" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 relative z-10 gap-4">
                <div>
                  <h3 className="text-base font-medium text-neutral-50 font-geist tracking-tight">Fluxo de leads em tempo real</h3>
                  <p className="text-xs text-neutral-400 font-geist mt-1">Visualização do fluxo de leads entre os módulos do sistema.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-neutral-400 font-mono uppercase">Ativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-[10px] text-neutral-400 font-mono uppercase">Atenção</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative min-h-[320px] flex items-center justify-center z-10 border border-white/[0.05] rounded-lg bg-neutral-950">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="line-grad-1" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="line-grad-2" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
                    </linearGradient>
                    <filter id="glow-emerald" height="140%" width="140%" x="-20%" y="-20%">
                      <feGaussianBlur result="blur" stdDeviation="2" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  <path className="opacity-70" d="M 20 45 C 35 45, 40 50, 50 50" fill="none" stroke="url(#line-grad-1)" strokeWidth="1" />
                  <path className="opacity-50 animate-[dash_20s_linear_infinite]" d="M 20 45 C 30 30, 40 30, 50 50" fill="none" stroke="url(#line-grad-1)" strokeDasharray="2 4" strokeWidth="1.5" />
                  <path className="opacity-70" d="M 50 50 C 65 50, 75 35, 80 35" fill="none" stroke="url(#line-grad-1)" strokeWidth="1" />
                  <path className="opacity-80 animate-[dash_15s_linear_infinite]" d="M 50 50 C 60 70, 70 70, 75 65" fill="none" stroke="url(#line-grad-2)" strokeDasharray="4 4" strokeWidth="1.5" />
                  <circle fill="#10b981" filter="url(#glow-emerald)" r="1">
                    <animateMotion dur="3s" path="M 20 45 C 35 45, 40 50, 50 50" repeatCount="indefinite" />
                  </circle>
                  <circle fill="#10b981" filter="url(#glow-emerald)" r="1">
                    <animateMotion begin="1s" dur="2s" path="M 20 45 C 30 30, 40 30, 50 50" repeatCount="indefinite" />
                  </circle>
                  <circle fill="#10b981" filter="url(#glow-emerald)" r="1">
                    <animateMotion dur="2.5s" path="M 50 50 C 65 50, 75 35, 80 35" repeatCount="indefinite" />
                  </circle>
                  <circle fill="#f59e0b" r="1.5">
                    <animateMotion begin="0.5s" dur="4s" path="M 50 50 C 60 70, 70 70, 75 65" repeatCount="indefinite" />
                  </circle>
                </svg>

                {/* Nodes */}
                {[
                  { pos: 'left-[20%] top-[45%]', dur: '6s', delay: '', size: 'w-10 h-10', border: 'border-emerald-500/30', glow: '0_0_15px_rgba(16,185,129,0.15)', label: 'AQUISIÇÃO', labelCls: 'text-[9px] font-mono text-neutral-300 bg-neutral-800/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm', isHub: false, isAmber: false },
                  { pos: 'left-[50%] top-[50%]', dur: '7s', delay: '1s', size: 'w-14 h-14', border: 'border-2 border-emerald-500', glow: '0_0_30px_rgba(16,185,129,0.25)', label: 'YZIHUB', labelCls: 'text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30 backdrop-blur-sm', isHub: true, isAmber: false },
                  { pos: 'left-[80%] top-[35%]', dur: '5s', delay: '0.5s', size: 'w-10 h-10', border: 'border-emerald-500/30', glow: '0_0_15px_rgba(16,185,129,0.15)', label: 'CRM', labelCls: 'text-[9px] font-mono text-neutral-300 bg-neutral-800/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm', isHub: false, isAmber: false },
                  { pos: 'left-[75%] top-[65%]', dur: '6s', delay: '2s', size: 'w-10 h-10', border: 'border-amber-500/40', glow: '0_0_20px_rgba(245,158,11,0.2)', label: 'RADAR', labelCls: 'text-[9px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 backdrop-blur-sm', isHub: false, isAmber: true },
                ].map(({ pos, dur, delay, size, border, glow, label, labelCls, isHub, isAmber }) => (
                  <div
                    key={label}
                    className={`absolute ${pos} flex flex-col items-center gap-2`}
                    style={{ animation: `float-node ${dur} ease-in-out infinite${delay ? ' ' + delay : ''}` }}
                  >
                    <div className={`${size} rounded-full border ${border} bg-neutral-900 flex items-center justify-center relative`} style={{ boxShadow: glow }}>
                      {isHub && <div className="absolute -inset-2 rounded-full border border-emerald-500/20 animate-[spin_10s_linear_infinite] border-t-emerald-500" />}
                      {isAmber && <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-neutral-900" />}
                      {!isHub && <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping opacity-50" />}
                      {isHub ? (
                        <svg className="text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                      ) : (
                        <svg className={isAmber ? 'text-amber-500' : 'text-emerald-500'} fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"/><rect height="8" rx="2" ry="2" width="20" x="2" y="14"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
                      )}
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={labelCls}>{label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-mono text-neutral-500">
                <div className="flex gap-4">
                  <span>Entrada: 4.2k leads/dia</span>
                  <span>Saída: 3.8k qualificados</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  SINCRONIZADO
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </section>
  )
}
