import Clock from '@/components/shared/Clock'

const badges = ['n8n', 'Evolution', 'NocoDB']

export default function Topbar() {
  return (
    <header className="h-11 shrink-0 bg-[#0A0A0C] border-b border-white/[0.08] flex items-center justify-between px-4">
      <span className="font-sans text-sm font-semibold tracking-widest uppercase text-white">
        YZI<span className="text-[#60A5FA]">.</span>CONTROL
      </span>

      <div className="flex items-center gap-3">
        {badges.map((name) => (
          <span
            key={name}
            className="text-[10px] font-mono uppercase tracking-widest text-white/40 border border-white/[0.08] px-2 py-0.5 rounded-sm"
          >
            {name}
          </span>
        ))}
        <Clock />
      </div>
    </header>
  )
}
