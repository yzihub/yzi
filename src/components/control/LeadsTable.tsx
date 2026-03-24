import type { Client, ClientStatus } from '@/types/control'

interface Props {
  clients: Client[]
}

const statusBorderLeft: Record<ClientStatus, string> = {
  online:   'border-l-2 border-l-emerald-500/50',
  degraded: 'border-l-2 border-l-amber-500/50',
  offline:  'border-l-2 border-l-red-500/50',
}

export default function LeadsTable({ clients }: Props) {
  return (
    <div>
      <p className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 mb-4">
        Distribuição de Leads
      </p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-neutral-950/80 border-b border-white/[0.05]">
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500 whitespace-nowrap min-w-[160px]">
                Cliente
              </th>
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500 whitespace-nowrap min-w-[70px]">
                Novos
              </th>
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500 whitespace-nowrap min-w-[110px]">
                Qualificados
              </th>
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500 whitespace-nowrap min-w-[90px]">
                Fechados
              </th>
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500 whitespace-nowrap min-w-[70px]">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-3 px-4 font-mono text-xs text-neutral-500 text-center"
                >
                  Nenhum cliente encontrado
                </td>
              </tr>
            ) : (
              clients.map((client) => {
                const pct =
                  client.leadsToday > 0
                    ? Math.round((client.leadsQualified / client.leadsToday) * 100)
                    : 0

                return (
                  <tr
                    key={client.id}
                    className={[
                      'border-b border-white/[0.05] transition-colors duration-150',
                      statusBorderLeft[client.status],
                      client.status === 'online' ? 'hover:bg-emerald-500/[0.03]' : 'hover:bg-white/[0.02]',
                      client.status === 'offline' ? 'opacity-50' : '',
                    ].join(' ')}
                  >
                    <td className="py-3 px-4">
                      <span className="font-sans font-medium text-sm text-neutral-200 whitespace-nowrap">
                        {client.name}
                      </span>
                      <span className="block font-mono text-[11px] text-neutral-500">
                        {client.agent}
                      </span>
                      <div className="h-0.5 bg-white/[0.06] rounded-full mt-1.5">
                        <div
                          className="h-full bg-blue-400 rounded-full transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </td>

                    <td className="py-3 px-4 font-mono tracking-tighter tabular-nums text-sm text-neutral-200">
                      {client.leadsNew}
                    </td>

                    <td className="py-3 px-4 font-mono tracking-tighter tabular-nums text-sm text-neutral-200">
                      {client.leadsQualified}
                    </td>

                    <td className="py-3 px-4 font-mono tracking-tighter tabular-nums text-sm text-neutral-200">
                      {client.leadsClosed}
                    </td>

                    <td className="py-3 px-4 font-mono tracking-tighter tabular-nums text-sm text-neutral-200">
                      {client.leadsToday}
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
