import type { Client, ClientStatus } from '@/types/control'

interface Props {
  clients: Client[]
}

const statusDot: Record<ClientStatus, string> = {
  online:   'bg-green-500 animate-pulse',
  degraded: 'bg-yellow-500',
  offline:  'bg-red-500',
}

const statusLabel: Record<ClientStatus, string> = {
  online:   'online',
  degraded: 'degraded',
  offline:  'offline',
}

const statusText: Record<ClientStatus, string> = {
  online:   'text-green-500',
  degraded: 'text-yellow-500',
  offline:  'text-red-500',
}

const statusBorderLeft: Record<ClientStatus, string> = {
  online:   'border-l-2 border-l-emerald-500/50',
  degraded: 'border-l-2 border-l-amber-500/50',
  offline:  'border-l-2 border-l-red-500/50',
}

const columns = ['Cliente', 'Status', 'Conversas', 'Leads hoje', 'Atualizado']

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })
}

export default function ClientsTable({ clients }: Props) {
  return (
    <div>
      <p className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 mb-4">
        Clientes Ativos
      </p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-neutral-950/80 border-b border-white/[0.05]">
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500 min-w-[160px]">
                Cliente
              </th>
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500 min-w-[100px]">
                Status
              </th>
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500 min-w-[80px]">
                Conversas
              </th>
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500 min-w-[80px]">
                Leads hoje
              </th>
              <th className="py-3 px-4 text-left text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                Atualizado
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
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
                </td>

                <td className="py-3 px-4">
                  <span className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${statusDot[client.status]}`} />
                    <span className={`font-mono text-xs ${statusText[client.status]}`}>
                      {statusLabel[client.status]}
                    </span>
                  </span>
                </td>

                <td className="py-3 px-4 font-mono tracking-tighter tabular-nums text-sm text-neutral-200">
                  {client.activeConversations}
                </td>

                <td className="py-3 px-4 font-mono tracking-tighter tabular-nums text-sm text-neutral-200">
                  {client.leadsToday}
                </td>

                <td className="py-3 px-4 font-mono text-xs text-neutral-500">
                  {formatDate(client.lastUpdate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
