import { MOCK_COCKPIT_CLIENT } from '@/lib/mock/cockpit'

type CockpitClient = typeof MOCK_COCKPIT_CLIENT

interface Props {
  client: CockpitClient
}

const leadsAtendidos = 47
const uptime = '99.9%'

export default function AgentStatus({ client }: Props) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mb-3">
        Status do Agente
      </p>

      <div className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] border-t-2 border-t-[#60A5FA] rounded-sm p-4">
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm font-bold tracking-widest uppercase text-white">
            {client.agent}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="font-mono text-[10px] text-[#52525b]">online agora</span>
        </div>

        <div className="flex gap-6 mt-4">
          <div>
            <p className="font-mono text-lg text-[#60A5FA]">{leadsAtendidos}</p>
            <p className="font-mono text-[10px] text-[#52525b] uppercase">Leads atendidos hoje</p>
          </div>
          <div>
            <p className="font-mono text-lg text-[#22c55e]">{uptime}</p>
            <p className="font-mono text-[10px] text-[#52525b] uppercase">Uptime</p>
          </div>
        </div>
      </div>
    </div>
  )
}
