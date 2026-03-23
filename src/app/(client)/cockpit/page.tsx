import {
  MOCK_COCKPIT_CLIENT,
  MOCK_COCKPIT_METRICS,
  MOCK_COCKPIT_FUNNEL,
  MOCK_RECENT_CONVERSATIONS,
} from '@/lib/mock/cockpit'

const sections = [
  { key: 'metricas', label: 'MÉTRICAS', placeholder: 'MetricsRow — em breve' },
  { key: 'funil', label: 'FUNIL', placeholder: 'SalesFunnel — em breve' },
  { key: 'conversas', label: 'CONVERSAS RECENTES', placeholder: 'ConversationsList — em breve' },
  { key: 'agente', label: 'STATUS DO AGENTE', placeholder: 'AgentStatus — em breve' },
]

export default function CockpitPage() {
  // dados disponíveis para os componentes reais quando substituírem os placeholders
  const _metrics = MOCK_COCKPIT_METRICS
  const _funnel = MOCK_COCKPIT_FUNNEL
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

      <div className="flex flex-col gap-4">
        {sections.map(({ key, label, placeholder }) => (
          <section key={key} className="flex flex-col gap-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b]">
              {label}
            </p>
            <div className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm p-4">
              <span className="font-mono text-xs text-[#52525b]">{placeholder}</span>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
