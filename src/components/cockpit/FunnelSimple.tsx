type FunnelStage = { stage: string; count: number }

interface Props {
  data: FunnelStage[]
}

const barFill = [
  'bg-[#60A5FA]',
  'bg-emerald-400',
  'bg-amber-400',
  'bg-violet-400',
]

export default function FunnelSimple({ data }: Props) {
  const total = data.reduce((sum, { count }) => sum + count, 0)
  const max = data[0]?.count ?? 1

  return (
    <div className="bg-neutral-900/50 border border-white/[0.05] rounded-xl p-6 backdrop-blur-sm">
      <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 mb-4">
        Funil de Vendas
      </p>

      <div>
        {data.map(({ stage, count }, i) => (
          <div key={stage} className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-neutral-400 w-[120px] whitespace-nowrap">
              {stage}
            </span>

            <div className="flex-1 h-2 rounded-full bg-neutral-800">
              <div
                className={`h-full rounded-full transition-all duration-500 ${barFill[i] ?? 'bg-[#60A5FA]/15'}`}
                style={{ width: `${Math.round((count / max) * 100)}%` }}
              />
            </div>

            <span className="font-mono text-sm font-medium text-neutral-200 w-[40px] text-right">
              {count}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.05] pt-3 mt-2">
        <p className="font-mono text-[11px] text-neutral-500">
          Total: {total} leads
        </p>
      </div>
    </div>
  )
}
