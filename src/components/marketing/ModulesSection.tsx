'use client'

import { AlertTriangle } from 'lucide-react'

export function ModulesSection() {
  return (
    <section className="flex-1 flex flex-col lg:pt-32 z-10 bg-neutral-950/80 w-full pt-24 pr-6 pb-16 pl-6 relative items-center">
      <div className="w-full max-w-[1180px]">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 mb-20">
          <div className="flex-1 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-[600px]">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest font-geist text-neutral-400">Módulos do sistema</span>
            </div>
            <h2 className="md:text-4xl lg:text-5xl leading-[1.15] text-3xl font-medium text-neutral-50 tracking-tight font-geist">
              Construído para orquestrar, decidir e executar em cada etapa do crescimento
            </h2>
          </div>
          <div className="flex-1 w-full max-w-[480px] md:mt-12">
            <p className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-base text-neutral-400 font-geist">
              Um sistema unificado que conecta dados, leads, decisões e execução em uma única operação contínua. Visibilidade total sem trocar de contexto.
            </p>
          </div>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full">

          {/* Card 1: YZI CONNECT */}
          <div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll bg-gradient-to-r from-white/10 to-white/0 h-[340px] rounded-[20px] pt-6 pr-6 pb-6 pl-6 shadow-sm"
            style={{ position: 'relative', '--border-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '20px' } as React.CSSProperties}>
            <h3 className="text-lg font-medium text-neutral-50 tracking-tight font-geist">YZI CONNECT</h3>
            <p className="text-sm leading-relaxed font-geist mb-6 text-neutral-400">
              Comunicação ativa e rastreável. Todos os pontos de contato sincronizados em tempo real.
            </p>
            <div className="border-white/[0.05] flex flex-col overflow-hidden w-full border rounded-xl mt-auto px-3 py-3 relative gap-3 bg-neutral-950">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2 px-2 py-1 rounded-md border border-white/[0.05] shadow-sm bg-neutral-800/80">
                  <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </div>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-neutral-400">Live View</span>
                </div>
                <div className="text-[10px] font-mono font-medium tabular-nums px-2 py-1 rounded-md border border-white/[0.05] shadow-sm text-neutral-50 bg-neutral-800/80">
                  2.4k msgs/dia
                </div>
              </div>
              <div className="flex items-end gap-[3px] w-full h-12 z-10 px-0.5">
                {[
                  { h: '30%', cls: 'bg-neutral-800', anim: 'micro-eq1', d: '0.1s' },
                  { h: '45%', cls: 'bg-cyan-400/60 group-hover:bg-cyan-400', anim: 'micro-eq2', d: '0.2s' },
                  { h: '65%', cls: 'bg-emerald-500/70 group-hover:bg-emerald-500', anim: 'micro-eq3', d: '0.3s' },
                  { h: '40%', cls: 'bg-neutral-800', anim: 'micro-eq1', d: '0.4s' },
                  { h: '75%', cls: 'bg-cyan-400/70 group-hover:bg-cyan-400', anim: 'micro-eq2', d: '0.5s' },
                  { h: '95%', cls: 'bg-emerald-500/80 group-hover:bg-emerald-500', anim: 'micro-eq3', d: '0.1s' },
                  { h: '100%', cls: 'bg-emerald-500/90 group-hover:bg-emerald-500', anim: 'micro-eq1', d: '0.2s' },
                  { h: '85%', cls: 'bg-cyan-400/70 group-hover:bg-cyan-400', anim: 'micro-eq2', d: '0.3s' },
                  { h: '50%', cls: 'bg-neutral-800', anim: 'micro-eq3', d: '0.4s' },
                  { h: '70%', cls: 'bg-emerald-500/80 group-hover:bg-emerald-500', anim: 'micro-eq1', d: '0.5s' },
                  { h: '40%', cls: 'bg-cyan-400/60 group-hover:bg-cyan-400', anim: 'micro-eq2', d: '0.1s' },
                  { h: '20%', cls: 'bg-neutral-800', anim: 'micro-eq3', d: '0.2s' },
                  { h: '55%', cls: 'bg-emerald-500/70 group-hover:bg-emerald-500', anim: 'micro-eq1', d: '0.3s' },
                  { h: '35%', cls: 'bg-cyan-400/50 group-hover:bg-cyan-400', anim: 'micro-eq2', d: '0.4s' },
                  { h: '25%', cls: 'bg-neutral-800', anim: 'micro-eq3', d: '0.5s' },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-[2px] transition-all duration-300 ${bar.cls}`}
                    style={{ height: bar.h, transformOrigin: 'center bottom', animation: `1.4s ease-in-out ${bar.d} infinite normal none running ${bar.anim}` }}
                  />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t to-transparent pointer-events-none z-20 from-neutral-950" />
            </div>
          </div>

          {/* Card 2: YZI RADAR */}
          <div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll bg-gradient-to-r from-white/10 to-white/0 h-[340px] rounded-[20px] pt-6 pr-6 pb-6 pl-6 shadow-sm"
            style={{ position: 'relative', '--border-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '20px' } as React.CSSProperties}>
            <h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">YZI RADAR</h3>
            <p className="text-sm leading-relaxed font-geist mb-6 text-neutral-400">
              Monitoramento inteligente da operação. Gargalos detectados e priorizados automaticamente.
            </p>
            <div className="border-white/[0.05] flex flex-col overflow-hidden w-full border rounded-xl mt-auto px-3 py-3 relative gap-2 bg-neutral-950">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wide font-semibold font-geist text-amber-600">Gargalo Detectado</span>
                </div>
                <span className="text-[10px] font-mono font-medium tabular-nums text-neutral-50">94% CONF</span>
              </div>
              <div className="relative h-12 w-full mt-1">
                <div className="absolute inset-0 flex flex-col justify-between opacity-30 pointer-events-none">
                  {[0,1,2].map(i => <div key={i} className="border-b border-dashed w-full h-[1px] border-neutral-700" />)}
                </div>
                <div className="absolute left-[65%] top-0 bottom-0 w-[25%] bg-amber-500/10 border-x border-amber-500/20 z-0 rounded-sm" />
                <svg className="absolute inset-0 w-full h-full z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0,32 L10,28 L20,31 L30,29 L40,32 L50,28 L60,31 L68,30" fill="none" stroke="#404040" strokeDasharray="150" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ animation: 'micro-draw-line1 4s infinite ease-in-out' }} />
                  <path d="M68,30 L75,6 L82,32" fill="none" stroke="#f59e0b" strokeDasharray="50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ animation: 'micro-draw-spike 4s infinite ease-in-out' }} />
                  <path d="M82,32 L90,29 L100,31" fill="none" stroke="#404040" strokeDasharray="100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ animation: 'micro-draw-line2 4s infinite ease-in-out' }} />
                </svg>
                <div className="absolute left-[75%] top-[15%] w-2 h-2 border border-amber-500 rounded-full z-20 -translate-x-1/2 -translate-y-1/2 bg-neutral-950" style={{ animation: 'micro-spike-dot 4s infinite ease-in-out' }}>
                  <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-75" />
                  <div className="absolute inset-[1.5px] rounded-full bg-amber-500" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-1 z-10">
                <AlertTriangle size={10} className="text-amber-500 shrink-0" />
                <span className="text-[10px] font-mono truncate text-neutral-400">Gargalo no funil de aquisição</span>
              </div>
            </div>
          </div>

          {/* Card 3: YZI CONTROL */}
          <div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll bg-gradient-to-r from-white/10 to-white/0 h-[340px] rounded-[20px] pt-6 pr-6 pb-6 pl-6 shadow-sm"
            style={{ position: 'relative', '--border-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '20px' } as React.CSSProperties}>
            <h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">YZI CONTROL</h3>
            <p className="text-sm leading-relaxed font-geist mb-6 text-neutral-400">
              Sistema estável e sob controle. Capacidade, cadência e decisões monitoradas em tempo real.
            </p>
            <div className="border-white/[0.05] flex flex-col w-full border rounded-xl mt-auto px-3.5 py-3.5 gap-3.5 bg-neutral-950">
              {[
                { label: 'FLUXO', pct: '64%', color: 'bg-neutral-600 group-hover:bg-neutral-500', textColor: 'text-neutral-300', anim: 'micro-prog1', warning: false },
                { label: 'CONVERSÃO', pct: '42%', color: 'bg-emerald-500/80 group-hover:bg-emerald-500', textColor: 'text-emerald-500', anim: 'micro-prog2', warning: false },
                { label: 'CARGA', pct: '91%', color: 'bg-amber-500 group-hover:bg-amber-400', textColor: 'text-amber-500', anim: 'micro-prog3', warning: true },
              ].map(({ label, pct, color, textColor, anim, warning }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    {warning ? (
                      <div className="flex items-center gap-1.5">
                        <div className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                        </div>
                        <span className={`${textColor} uppercase tracking-widest font-semibold`}>{label}</span>
                      </div>
                    ) : (
                      <span className="text-neutral-500 uppercase tracking-widest font-semibold">{label}</span>
                    )}
                    <span className={`${textColor} tabular-nums ${warning ? 'font-bold' : ''}`}>{pct}</span>
                  </div>
                  <div className="w-full rounded-full h-1.5 overflow-hidden bg-neutral-800">
                    <div
                      className={`h-full rounded-full transition-all duration-500 relative ${color}`}
                      style={{ width: pct, animation: `4s ease-in-out 0s infinite normal none running ${anim}` }}
                    >
                      {warning && <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l to-transparent from-black/30" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: YZIHUB Operação */}
          <div className="group flex flex-col border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll bg-gradient-to-r from-white/10 to-white/0 h-[340px] rounded-[20px] pt-6 pr-6 pb-6 pl-6 shadow-sm"
            style={{ position: 'relative', '--border-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '20px' } as React.CSSProperties}>
            <h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">YZIHUB: Operação</h3>
            <p className="text-sm leading-relaxed font-geist mb-6 text-neutral-400">
              Histórico operacional em tempo real. Cada decisão do sistema registrada e rastreável.
            </p>
            <div className="border-white/[0.05] overflow-hidden w-full border rounded-xl mt-auto px-3 py-3 relative bg-neutral-950">
              <div className="flex items-center justify-between mb-3 z-10 relative px-1">
                <div className="flex items-center gap-1.5">
                  <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neutral-500" />
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-neutral-500 font-geist">Operação ao vivo</span>
                </div>
              </div>
              <div className="relative flex flex-col gap-3 z-10 pl-1.5">
                <div className="absolute left-[9px] top-1.5 bottom-1 w-[1px] bg-gradient-to-b to-transparent from-neutral-800 via-neutral-800" />
                {[
                  { time: '14:02:41', msg: 'Lead qualificado pelo YZI', anim: 'micro-log-seq1' },
                  { time: '14:01:30', msg: 'Funil atualizado automaticamente', anim: 'micro-log-seq2' },
                  { time: '13:58:22', msg: 'Follow-up disparado pelo YZI', anim: 'micro-log-seq3' },
                ].map(({ time, msg, anim }) => (
                  <div key={time} className="flex items-start gap-2.5 relative group/log cursor-default" style={{ animation: `${anim} 4s infinite ease-out` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-[3px] relative z-10 ring-[3px] transition-transform duration-300 group-hover/log:scale-150 ring-neutral-950" />
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] text-neutral-500 font-mono tabular-nums leading-none mb-0.5">{time}</span>
                      <span className="text-[10px] font-mono truncate font-medium text-neutral-100">{msg}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
