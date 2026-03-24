import Clock from '@/components/shared/Clock'

const badges: { name: string; dot: string }[] = [
  { name: 'n8n',       dot: 'bg-emerald-500 animate-pulse' },
  { name: 'Evolution', dot: 'bg-emerald-500 animate-pulse' },
  { name: 'NocoDB',    dot: 'bg-amber-500' },
]

export default function Topbar() {
  return (
    <header className="h-11 shrink-0 bg-[#0A0A0C] border-b border-white/[0.08] flex items-center justify-between px-4">
      <span className="font-mono text-sm font-semibold text-white">
        YZI<span className="text-[#60A5FA]">.</span>CONTROL
      </span>

      <div className="flex items-center gap-3">
        {badges.map(({ name, dot }) => (
          <span
            key={name}
            className="flex items-center gap-1.5 bg-neutral-900 border border-white/[0.08] rounded-md px-2.5 py-1"
          >
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
            <span className="font-mono text-[11px] text-neutral-300">{name}</span>
          </span>
        ))}
        <Clock />
      </div>
    </header>
  )
}
