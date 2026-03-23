type FunnelStage = { stage: string; count: number }

interface Props {
  data: FunnelStage[]
}

const opacities = ['opacity-100', 'opacity-70', 'opacity-40', 'opacity-20']

export default function FunnelSimple({ data }: Props) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mb-3">
        Funil de Vendas
      </p>

      <div className="flex gap-1">
        {data.map(({ stage, count }, i) => (
          <div
            key={stage}
            className="flex flex-col"
            style={{ flex: count }}
          >
            <div className={`h-16 rounded-sm bg-[#60A5FA] ${opacities[i] ?? 'opacity-10'}`} />
            <p className="font-sans text-[10px] text-white mt-2">{stage}</p>
            <p className="font-mono text-xs text-[#a1a1aa]">{count}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
