import { MOCK_COCKPIT_METRICS } from '@/lib/mock/cockpit'

type Metrics = typeof MOCK_COCKPIT_METRICS

interface Props {
  metrics: Metrics
}

const cards: { label: string; key: keyof Metrics; suffix?: string; accent: string }[] = [
  { label: 'Leads totais',     key: 'totalLeads',    accent: 'border-l-[#60A5FA]' },
  { label: 'Taxa de resposta', key: 'responseRate',  accent: 'border-l-emerald-500', suffix: '%' },
  { label: 'Leads quentes',    key: 'hotLeads',      accent: 'border-l-amber-500' },
  { label: 'Fechados',         key: 'closed',        accent: 'border-l-neutral-500' },
]

export default function PerformanceCards({ metrics }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {cards.map(({ label, key, suffix, accent }) => (
        <div
          key={key}
          className={`bg-neutral-900/50 border border-white/[0.05] rounded-xl p-4 backdrop-blur-sm border-l-2 ${accent}`}
        >
          <p className="font-mono text-3xl font-medium text-white tracking-tighter">
            {metrics[key]}{suffix ?? ''}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 mt-2">
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}
