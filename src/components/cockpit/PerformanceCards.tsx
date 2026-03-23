import { MOCK_COCKPIT_METRICS } from '@/lib/mock/cockpit'

type Metrics = typeof MOCK_COCKPIT_METRICS

interface Props {
  metrics: Metrics
}

const cards: { label: string; key: keyof Metrics; suffix?: string }[] = [
  { label: 'Leads totais', key: 'totalLeads' },
  { label: 'Taxa de resposta', key: 'responseRate', suffix: '%' },
  { label: 'Leads quentes', key: 'hotLeads' },
  { label: 'Fechados', key: 'closed' },
]

export default function PerformanceCards({ metrics }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {cards.map(({ label, key, suffix }) => (
        <div
          key={key}
          className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm p-4"
        >
          <p className="font-mono text-2xl font-semibold text-[#60A5FA]">
            {metrics[key]}{suffix ?? ''}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mt-1">
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}
