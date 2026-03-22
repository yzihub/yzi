'use client'

import { ArrowRight, BarChart2, ShieldAlert, Target } from 'lucide-react'

export function LandingHero() {
  return (
    <main className="relative w-full overflow-hidden [display:flow-root]" style={{ zIndex: 10 }}>
      {/* Unicorn Studio animated canvas */}
      <div
        className="absolute inset-0 pointer-events-none"
        data-us-project="xLvbfXE8t7glcJDs4g9g"
        style={{ zIndex: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', mixBlendMode: 'screen', opacity: 0.85 }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          background: 'radial-gradient(ellipse 70% 80% at 50% 40%, transparent 40%, #0a0a0e 100%)',
        }}
      />

      {/* Content wrapper */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen pt-44 px-6 pb-16"
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col w-full max-w-[1100px] items-center">

          {/* Badge */}
          <div className="blur-animate inline-flex gap-2 border-white/[0.1] z-10 bg-neutral-950/80 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 relative shadow-sm backdrop-blur-md items-center">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest font-geist text-neutral-300">
              YZI Growth System
            </span>
          </div>

          {/* Headline */}
          <h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-neutral-50 tracking-tight font-geist text-center max-w-[800px] z-10 mb-6 relative">
            <span className="scroll-animate block">Enquanto você responde...</span>
            <span className="scroll-animate delay-1 hidden sm:block">o sistema já está operando.</span>
          </h1>

          {/* Sub */}
          <p className="scroll-animate delay-2 leading-relaxed md:text-lg text-base text-neutral-400 font-geist text-center max-w-[600px] z-10 mb-10 relative">
            Conecte dados, decisões e execução em um único sistema. Transforme operações fragmentadas em crescimento coordenado.
          </p>

          {/* CTAs */}
          <div className="scroll-animate delay-3 z-10 flex flex-col gap-4 sm:w-auto sm:flex-row w-full mb-14 relative items-center justify-center">
            <a
              href="#"
              className="group flex w-full items-center justify-center gap-2 rounded-lg border border-[#009b81] bg-gradient-to-b from-[#00c9a7] to-[#009b81] px-6 py-2.5 text-sm font-medium shadow-md transition-all duration-200 hover:from-[#20d7b2] hover:to-[#00a88a] hover:shadow-lg active:scale-95 sm:w-auto text-white font-geist"
            >
              Falar com a YZI
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <button className="font-geist flex w-full items-center justify-center rounded-lg border border-white/[0.1] px-6 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow active:scale-95 sm:w-auto bg-neutral-950/80 backdrop-blur-md text-neutral-300 hover:bg-neutral-800 hover:text-white">
              Ver arquitetura
            </button>
          </div>

          {/* Feature indicators */}
          <div className="scroll-animate delay-4 flex flex-col md:flex-row md:gap-8 z-10 text-xs font-medium relative items-center justify-center text-neutral-400">
            <div className="flex items-center gap-2 font-geist">
              <BarChart2 size={18} className="text-emerald-500" />
              Operação estruturada
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <div className="flex items-center gap-2 font-geist">
              <ShieldAlert size={18} className="text-emerald-500" />
              Decisão com contexto
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <div className="flex items-center gap-2 font-geist">
              <Target size={18} className="text-emerald-500" />
              Execução coordenada
            </div>
          </div>

        </div>

        {/* Dashboard Preview */}
        <div className="[animation:animationIn_0.8s_ease-out_0.6s_both] z-10 bg-neutral-900 w-full max-w-[1100px] rounded-[20px] mt-16 mr-auto ml-auto pt-1.5 pr-1.5 pb-1.5 pl-1.5 relative shadow-float">
          {/* Glow */}
          <div className="-translate-x-1/2 -translate-y-1/2 blur-[120px] pointer-events-none bg-emerald-400/10 w-[80%] h-[60%] rounded-full absolute top-1/2 left-1/2" />

          {/* Dashboard frame */}
          <div className="border-white/[0.05] overflow-hidden flex flex-col bg-neutral-900 w-full z-10 border rounded-[16px] relative shadow-inner">

            {/* Top bar */}
            <div className="border-white/[0.05] flex h-12 border-b pr-4 pl-4 items-center justify-between bg-neutral-950/50">
              <div className="flex items-center gap-1.5 w-1/4">
                <div className="w-3 h-3 rounded-full border bg-[#FF5F56] border-white/10" />
                <div className="w-3 h-3 rounded-full border bg-[#FFBD2E] border-white/10" />
                <div className="w-3 h-3 rounded-full border bg-[#27C93F] border-white/10" />
              </div>
              <div className="flex-1 max-w-[340px] flex justify-center">
                <div className="flex gap-2 border-white/[0.05] text-[0.65rem] text-neutral-500 font-mono w-full border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center shadow-inner bg-neutral-950">
                  <svg className="text-neutral-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  CMD + K buscar no sistema...
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 w-1/4">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded border border-white/[0.05] text-[0.65rem] font-mono font-medium font-geist bg-neutral-950 text-neutral-400">
                  SYS_OPT
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.5)]" />
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 min-h-[480px]">
              {/* Sidebar */}
              <div className="border-white/[0.05] flex flex-col shrink-0 w-14 border-r pt-4 pb-4 gap-6 items-center bg-neutral-950/50">
                {[
                  <path key="w" d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>,
                  <><path key="c1" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path key="c2" d="M12 8v4l3 3"/></>,
                  <><polyline key="g" points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline key="g2" points="16 7 22 7 22 13"/></>,
                  <><path key="s" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
                  <><circle key="cc" cx="12" cy="12" r="10"/><path key="cc2" d="M8 12h8M12 8v8"/></>,
                ].map((icon, idx) => (
                  <button
                    key={idx}
                    className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${idx === 0 ? 'text-emerald-500 bg-neutral-800 border border-neutral-700' : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800'}`}
                  >
                    <svg className="text-xl" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </button>
                ))}
                <div className="mt-auto" />
                <button className="w-8 h-8 rounded-md text-neutral-500 flex items-center justify-center transition-colors hover:text-neutral-300 hover:bg-neutral-800">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>

              {/* Main grid */}
              <div className="flex-1 grid grid-cols-1 overflow-y-auto no-scrollbar md:grid-cols-3 bg-neutral-950 pt-5 pr-5 pb-5 pl-5 gap-4">

                {/* Operational Flow - col span 2 */}
                <div
                    className="md:col-span-2 border-white/[0.05] flex flex-col overflow-hidden bg-gradient-to-r from-white/10 to-white/0 h-full rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] justify-between"
                    style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px' } as React.CSSProperties}
                  >
                    <div className="flex items-center justify-between mb-6 z-10">
                      <h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">Operational Flow</h3>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.05] text-xs font-medium font-geist shadow-sm bg-neutral-950 hover:bg-neutral-800 text-neutral-400 cursor-pointer">
                        Hourly
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 z-10">
                      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md border bg-neutral-950/50 border-neutral-800">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                        <span className="text-xs font-medium font-geist text-neutral-400">Leads em fluxo <span className="ml-1 text-neutral-50">124 hoje</span></span>
                      </div>
                      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md border bg-neutral-950/50 border-neutral-800">
                        <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                        <span className="text-xs font-medium font-geist text-neutral-400">Decisões ativas <span className="ml-1 text-neutral-50">4.210</span></span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end z-10">
                      <div className="md:col-span-1 flex flex-col pb-2 md:pb-6">
                        <span className="text-4xl font-medium tracking-tight text-emerald-500 tabular-data font-geist">+28.4%</span>
                        <span className="text-xs font-medium mt-2 leading-relaxed font-geist text-neutral-400">Eficiência do fluxo de operação</span>
                      </div>
                      <div className="md:col-span-3 relative h-32 md:h-40 w-full mt-6 md:mt-0">
                        {/* Floating tooltip */}
                        <div className="absolute left-[66.66%] top-[14.28%] -translate-x-1/2 -translate-y-[calc(100%+4px)] z-20 flex flex-col items-center pointer-events-none anim-tooltip opacity-0">
                          <div className="text-[10px] font-medium px-2.5 py-1.5 rounded-md shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)] whitespace-nowrap font-geist flex items-center gap-2 border backdrop-blur-sm bg-neutral-800 text-neutral-50 border-neutral-700">
                            <div className="relative flex h-1.5 w-1.5 items-center justify-center">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
                              <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-400" />
                            </div>
                            Pico de conversão
                          </div>
                          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent -mt-px border-t-neutral-800" />
                        </div>
                        {/* SVG chart */}
                        <svg className="overflow-visible w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 140">
                          <defs>
                            <linearGradient id="emeraldSmoothArea" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="amberSmoothArea" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
                              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                            </linearGradient>
                            <filter id="nodeGlow" width="300%" height="300%" x="-100%" y="-100%">
                              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4" />
                              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                          </defs>
                          <g stroke="#262626" strokeDasharray="4 4" strokeWidth="1.5">
                            <line x1="100" x2="100" y1="0" y2="140" />
                            <line x1="200" x2="200" y1="0" y2="140" />
                            <line x1="300" x2="300" y1="0" y2="140" />
                            <line stroke="#404040" strokeDasharray="2 4" x1="400" x2="400" y1="0" y2="140" />
                            <line x1="500" x2="500" y1="0" y2="140" />
                          </g>
                          <path d="M0,130 C70,125 100,130 180,110 C260,90 300,115 360,90 C410,69 480,95 540,85 C570,80 590,90 600,90 L600,140 L0,140 Z" fill="url(#amberSmoothArea)" />
                          <path d="M0,130 C70,125 100,130 180,110 C260,90 300,115 360,90 C410,69 480,95 540,85 C570,80 590,90 600,90" fill="none" stroke="#F59E0B" strokeOpacity="0.5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                          <path d="M0,110 C60,110 90,85 150,80 C210,75 240,90 300,60 C340,40 370,20 400,20 C430,20 460,50 500,60 C550,72 580,70 600,70 L600,140 L0,140 Z" fill="url(#emeraldSmoothArea)" />
                          <path className="anim-line-draw" d="M0,110 C60,110 90,85 150,80 C210,75 240,90 300,60 C340,40 370,20 400,20 C430,20 460,50 500,60 C550,72 580,70 600,70" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                          <circle fill="#10B981" filter="url(#nodeGlow)" r="4">
                            <animateMotion calcMode="linear" dur="4s" keyPoints="0;1" keyTimes="0;1" path="M0,110 C60,110 90,85 150,80 C210,75 240,90 300,60 C340,40 370,20 400,20 C430,20 460,50 500,60 C550,72 580,70 600,70" repeatCount="indefinite" />
                            <animate attributeName="opacity" dur="4s" keyTimes="0;0.1;0.9;1" repeatCount="indefinite" values="0;1;1;0" />
                          </circle>
                          <circle fill="#34D399" opacity="0.8" r="2.5">
                            <animateMotion begin="2s" calcMode="linear" dur="4s" keyPoints="0;1" keyTimes="0;1" path="M0,110 C60,110 90,85 150,80 C210,75 240,90 300,60 C340,40 370,20 400,20 C430,20 460,50 500,60 C550,72 580,70 600,70" repeatCount="indefinite" />
                            <animate attributeName="opacity" begin="2s" dur="4s" keyTimes="0;0.1;0.9;1" repeatCount="indefinite" values="0;0.8;0.8;0" />
                          </circle>
                          <circle cx="180" cy="110" fill="#171717" r="3" stroke="#F59E0B" strokeWidth="1.5" />
                          <circle cx="360" cy="90" fill="#171717" r="3" stroke="#F59E0B" strokeWidth="1.5" />
                          <circle cx="540" cy="85" fill="#171717" r="3" stroke="#F59E0B" strokeWidth="1.5" />
                          <circle cx="150" cy="80" fill="#171717" r="3.5" stroke="#10B981" strokeWidth="2" />
                          <circle cx="300" cy="60" fill="#171717" r="3.5" stroke="#10B981" strokeWidth="2" />
                          <circle cx="500" cy="60" fill="#171717" r="3.5" stroke="#10B981" strokeWidth="2" />
                          <g transform="translate(400, 20)">
                            <circle cx="0" cy="0" fill="#171717" filter="url(#nodeGlow)" r="5" stroke="#10B981" strokeWidth="2.5" />
                            <circle cx="0" cy="0" fill="none" r="5" stroke="#10B981" strokeWidth="2">
                              <animate attributeName="r" dur="2s" repeatCount="indefinite" values="5;16" />
                              <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="0.8;0" />
                            </circle>
                          </g>
                        </svg>
                      </div>
                    </div>
                </div>

                {/* YZI BRAIN - col 3 */}
                <div
                    className="border-white/[0.05] flex flex-col bg-gradient-to-r from-white/10 to-white/0 w-full h-full rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm justify-between"
                    style={{ position: 'relative', '--border-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '12px' } as React.CSSProperties}
                  >
                    <div className="flex flex-col items-start mb-6 w-full gap-1.5">
                      <h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">YZI BRAIN: Contexto ativo</h3>
                      <p className="text-[12px] font-geist text-neutral-400">Lead: Maria · Status: Qualificado · Intenção: Alta</p>
                    </div>
                    <div className="w-[180px] h-[180px] relative mb-8 mx-auto">
                      <svg className="w-[180px] h-[180px] animate-[spin_20s_linear_infinite]" strokeWidth="3.4" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" fill="none" r="15" stroke="#262626" strokeWidth="5.5" />
                        {[
                          { color: '#facc15', offset: 2 }, { color: '#fb923c', offset: 22 }, { color: '#f97373', offset: 42 },
                          { color: '#ec4899', offset: 62 }, { color: '#8b5cf6', offset: 82 }, { color: '#3b82f6', offset: 102 },
                        ].map(({ color, offset }) => (
                          <circle key={color} cx="18" cy="18" fill="none" r="15" stroke={color} strokeDasharray="18 77" strokeDashoffset={offset} strokeLinecap="round" strokeWidth="5.5" />
                        ))}
                      </svg>
                      <div className="absolute inset-[32px] rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] border flex flex-col items-center justify-center text-center bg-neutral-900 border-neutral-800">
                        <span className="text-[9px] font-medium text-neutral-500 font-geist uppercase tracking-widest mt-1">Ativos</span>
                        <span className="text-4xl font-semibold tracking-tight font-geist tabular-nums leading-none mt-1 text-neutral-50">27</span>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-3 px-2">
                      {[
                        { color: '#3b82f6', label: 'Leads qualificados', val: 12, glow: 'rgba(59,130,246,0.4)' },
                        { color: '#8b5cf6', label: 'Decisões automatizadas', val: 8, glow: 'rgba(139,92,246,0.4)' },
                        { color: '#ec4899', label: 'Follow-ups ativos', val: 7, glow: 'rgba(236,72,153,0.4)' },
                      ].map(({ color, label, val, glow }) => (
                        <div key={label} className="flex items-center justify-between text-[13px] font-geist">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${glow}` }} />
                            <span className="font-medium text-neutral-400">{label}</span>
                          </div>
                          <span className="font-semibold tabular-nums text-neutral-50">{val}</span>
                        </div>
                      ))}
                    </div>
                </div>

                {/* Activity log - col 1 */}
                <div
                    className="border-white/[0.05] min-h-[220px] flex flex-col bg-gradient-to-r from-white/10 to-white/0 rounded-xl px-5 py-5 shadow-sm"
                    style={{ position: 'relative', '--border-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '12px' } as React.CSSProperties}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-medium font-geist text-neutral-400">Operação acontecendo em tempo real</h3>
                      <span className="text-[0.65rem] text-neutral-500 font-mono font-geist">Sistema ativo</span>
                    </div>
                    <div className="flex flex-col gap-2.5 flex-1 justify-center">
                      {[
                        { color: 'bg-emerald-500', glow: 'rgba(16,185,129,0.45)', label: 'Success', labelColor: 'text-emerald-500', time: '14:02:41', msg: 'Lead qualificado encaminhado ao CRM' },
                        { color: 'bg-orange-400', glow: 'rgba(251,146,60,0.35)', label: 'Warning', labelColor: 'text-orange-500', time: '14:02:38', msg: 'Gargalo detectado na etapa de aquisição' },
                        { color: 'bg-blue-400', glow: 'rgba(96,165,250,0.35)', label: 'Info', labelColor: 'text-blue-500', time: '14:01:15', msg: 'Contexto atualizado pelo sistema' },
                        { color: 'bg-emerald-400', glow: 'rgba(16,185,129,0.35)', label: 'Success', labelColor: 'text-emerald-500', time: '13:58:22', msg: 'Follow-up estratégico disparado pelo YZI' },
                      ].map(({ color, glow, label, labelColor, time, msg }) => (
                        <div key={time} className="flex items-start gap-3 rounded-lg border border-white/[0.05] px-3 py-2.5 bg-neutral-950/50">
                          <span className={`mt-1.5 w-2 h-2 rounded-full ${color}`} style={{ boxShadow: `0 0 6px ${glow}` }} />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className={`text-[0.6rem] uppercase tracking-wide ${labelColor} font-medium font-mono font-geist`}>{label}</span>
                              <span className="text-[0.6rem] text-neutral-500 font-mono font-geist">{time}</span>
                            </div>
                            <p className="text-[0.72rem] leading-snug font-geist truncate text-neutral-400">{msg}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>

                {/* YZI CONTROL - col span 2 */}
                <div
                  className="border-white/[0.05] flex flex-col group overflow-hidden md:col-span-2 md:p-7 bg-gradient-to-r from-white/10 to-white/0 rounded-[20px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] justify-between"
                  style={{ position: 'relative', '--border-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '20px' } as React.CSSProperties}
                >
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-medium tracking-tight font-geist text-neutral-50">YZI CONTROL: Fluxo em operação</h3>
                      <p className="text-[13px] font-geist text-neutral-400">Performance da operação</p>
                    </div>
                    <span className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[11px] font-medium font-mono uppercase tracking-widest shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981] animate-pulse" />
                      Ao Vivo
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-end gap-6 h-full relative z-10 w-full mt-auto">
                    <div className="flex flex-col shrink-0 mb-4 md:mb-6 w-full md:w-auto relative z-20">
                      <span className="text-[13px] font-medium font-geist flex items-center gap-2 text-neutral-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        Volume de leads
                      </span>
                    </div>
                    <div className="flex-1 md:mt-0 w-full h-[160px] mt-2 relative">
                      <div className="absolute left-[35%] top-[25%] -translate-x-1/2 -translate-y-[calc(100%+12px)] z-30 cursor-default anim-tooltip-float">
                        <div className="border text-[13px] font-medium px-3 py-1.5 rounded-lg shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)] font-geist tabular-nums flex items-center gap-2 bg-neutral-800 border-neutral-700 text-neutral-50">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                          Pico de leads
                        </div>
                        <div className="absolute left-1/2 bottom-0 w-px h-3 bg-emerald-500/30 -translate-x-1/2 translate-y-full" />
                      </div>
                      <svg className="overflow-visible w-full h-[160px]" preserveAspectRatio="none" strokeWidth="2" viewBox="0 0 800 160">
                        <defs>
                          <pattern id="diagonalHatch" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse" width="6">
                            <line stroke="#171717" strokeOpacity="0.3" strokeWidth="1.5" x1="0" x2="0" y1="0" y2="6" />
                          </pattern>
                          <filter id="pillarGlow" height="140%" width="200%" x="-50%" y="-20%">
                            <feGaussianBlur result="blur" stdDeviation="8" />
                            <feComponentTransfer in="blur" result="glow"><feFuncA slope="0.45" type="linear" /></feComponentTransfer>
                            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
                          </filter>
                          <filter id="nodeGlow2" height="300%" width="300%" x="-100%" y="-100%">
                            <feGaussianBlur result="blur" stdDeviation="4" />
                            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                          </filter>
                        </defs>
                        <g stroke="#262626" strokeDasharray="4 4" strokeLinecap="round" strokeWidth="1.5">
                          <line x1="40" x2="40" y1="0" y2="140" />
                          <line stroke="#404040" strokeDasharray="2 4" x1="280" x2="280" y1="0" y2="140" />
                          <line x1="520" x2="520" y1="0" y2="140" />
                          <line x1="760" x2="760" y1="0" y2="140" />
                        </g>
                        {[
                          { cls: 'loop-bar-1', delay: '0.00s', d: 'M24,140 L24,124 Q24,120 28,120 L52,120 Q56,120 56,124 L56,140 Z', highlight: false },
                          { cls: 'loop-bar-2', delay: '0.15s', d: 'M104,140 L104,114 Q104,110 108,110 L132,110 Q136,110 136,114 L136,140 Z', highlight: false },
                          { cls: 'loop-bar-3', delay: '0.30s', d: 'M184,140 L184,94 Q184,90 188,90 L212,90 Q216,90 216,94 L216,140 Z', highlight: false },
                          { cls: 'loop-bar-4', delay: '0.45s', d: 'M264,140 L264,44 Q264,40 268,40 L292,40 Q296,40 296,44 L296,140 Z', highlight: true },
                          { cls: 'loop-bar-1', delay: '0.60s', d: 'M344,140 L344,84 Q344,80 348,80 L372,80 Q376,80 376,84 L376,140 Z', highlight: false },
                          { cls: 'loop-bar-2', delay: '0.75s', d: 'M424,140 L424,104 Q424,100 428,100 L452,100 Q456,100 456,104 L456,140 Z', highlight: false },
                          { cls: 'loop-bar-3', delay: '0.90s', d: 'M504,140 L504,99 Q504,95 508,95 L532,95 Q536,95 536,99 L536,140 Z', highlight: false },
                          { cls: 'loop-bar-4', delay: '1.05s', d: 'M584,140 L584,114 Q584,110 588,110 L612,110 Q616,110 616,114 L616,140 Z', highlight: false },
                          { cls: 'loop-bar-1', delay: '1.20s', d: 'M664,140 L664,129 Q664,125 668,125 L692,125 Q696,125 696,129 L696,140 Z', highlight: false },
                          { cls: 'loop-bar-2', delay: '1.35s', d: 'M744,140 L744,134 Q744,130 748,130 L772,130 Q776,130 776,134 L776,140 Z', highlight: false },
                        ].map(({ cls, delay, d, highlight }, i) => (
                          <g key={i} className={cls} style={{ animationDelay: delay }}>
                            {highlight ? (
                              <>
                                <path d={d} fill="#10B981" filter="url(#pillarGlow)" />
                                <path d={d} fill="url(#diagonalHatch)" />
                                <circle cx="280" cy="40" fill="#171717" filter="url(#nodeGlow2)" r="5" stroke="#10B981" strokeWidth="2.5" />
                              </>
                            ) : (
                              <path className="hover:text-emerald-500 transition-colors duration-300 cursor-pointer text-neutral-800" d={d} fill="currentColor" />
                            )}
                          </g>
                        ))}
                        <line stroke="#262626" strokeWidth="1" x1="0" x2="800" y1="140" y2="140" />
                        <g className="font-geist font-normal" fill="#737373" fontSize="14" textAnchor="middle">
                          {['Jul','Aug','Sep','Nov','Dec','Jan','Feb','Mar','Apr'].map((m, i) => {
                            const x = [40, 120, 200, 360, 440, 520, 600, 680, 760][i]
                            return <text key={m} x={x} y="156">{m}</text>
                          })}
                          <text fill="#10B981" fontWeight="500" x="280" y="156">Oct</text>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function AuraNumber() {
  'use client'
  return (
    <span className="text-[44px] leading-none font-semibold tracking-tight tabular-nums font-geist flex items-baseline gap-1 text-neutral-50">
      <span className="js-aura-number">0.0</span>
      <span className="text-[22px] font-medium text-neutral-500">PB</span>
    </span>
  )
}

function AuraNumberSm() {
  return <span className="js-aura-number-sm">0.0</span>
}
