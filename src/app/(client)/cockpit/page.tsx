import {
  MOCK_COCKPIT_CLIENT,
  MOCK_COCKPIT_METRICS,
  MOCK_COCKPIT_FUNNEL,
  MOCK_RECENT_CONVERSATIONS,
} from '@/lib/mock/cockpit'
import PerformanceCards from '@/components/cockpit/PerformanceCards'
import FunnelSimple from '@/components/cockpit/FunnelSimple'

export default function CockpitPage() {
  const _conversations = MOCK_RECENT_CONVERSATIONS

  return (
    <div className="flex flex-col gap-6 p-6 bg-[#000000] min-h-full">
      <header className="flex flex-col gap-1">
        <h1 className="font-sans font-bold text-white text-xl">
          {MOCK_COCKPIT_CLIENT.name}
        </h1>
        <p className="font-mono text-xs text-[#52525b]">
          Painel de operações · Agente {MOCK_COCKPIT_CLIENT.agent}
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b]">
            Métricas
          </p>
          <PerformanceCards metrics={MOCK_COCKPIT_METRICS} />
        </section>

        <section className="flex flex-col gap-2">
          <div className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm p-4">
            <FunnelSimple data={MOCK_COCKPIT_FUNNEL} />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b]">
            Conversas Recentes
          </p>
          <div className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm p-4">
            <span className="font-mono text-xs text-[#52525b]">ConversationsList — em breve</span>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b]">
            Status do Agente
          </p>
          <div className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm p-4">
            <span className="font-mono text-xs text-[#52525b]">AgentStatus — em breve</span>
          </div>
        </section>
      </div>
    </div>
  )
}
