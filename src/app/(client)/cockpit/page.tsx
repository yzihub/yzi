import {
  MOCK_COCKPIT_CLIENT,
  MOCK_COCKPIT_METRICS,
  MOCK_COCKPIT_FUNNEL,
  MOCK_RECENT_CONVERSATIONS,
} from '@/lib/mock/cockpit'
import PerformanceCards from '@/components/cockpit/PerformanceCards'
import FunnelSimple from '@/components/cockpit/FunnelSimple'
import ConversationsList from '@/components/cockpit/ConversationsList'
import AgentStatus from '@/components/cockpit/AgentStatus'

export default function CockpitPage() {
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
        <section>
          <PerformanceCards metrics={MOCK_COCKPIT_METRICS} />
        </section>

        <section>
          <div className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm p-4">
            <FunnelSimple data={MOCK_COCKPIT_FUNNEL} />
          </div>
        </section>

        <section>
          <ConversationsList conversations={MOCK_RECENT_CONVERSATIONS} />
        </section>

        <section>
          <AgentStatus client={MOCK_COCKPIT_CLIENT} />
        </section>
      </div>
    </div>
  )
}
