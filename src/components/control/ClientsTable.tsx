import type { Client, ClientStatus } from '@/types/control'

interface Props {
  clients: Client[]
}

const statusDot: Record<ClientStatus, string> = {
  online: 'bg-green-500 animate-pulse',
  degraded: 'bg-yellow-500',
  offline: 'bg-red-500',
}

const statusLabel: Record<ClientStatus, string> = {
  online: 'online',
  degraded: 'degraded',
  offline: 'offline',
}

const statusText: Record<ClientStatus, string> = {
  online: 'text-green-500',
  degraded: 'text-yellow-500',
  offline: 'text-red-500',
}

const columns = ['Cliente', 'Status', 'Conversas ativas', 'Leads hoje', 'Última atualização']

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })
}

export default function ClientsTable({ clients }: Props) {
  return (
    <div className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#09090b] border-b border-[rgba(255,255,255,0.08)]">
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-widest text-[#52525b]"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className={[
                'border-b border-[rgba(255,255,255,0.04)] hover:bg-[#111113] transition-colors duration-150',
                client.status === 'offline' ? 'opacity-60' : '',
              ].join(' ')}
            >
              <td className="px-4 py-3">
                <span className="text-white">{client.name}</span>
                <span className="block font-mono text-xs text-[#52525b]">{client.agent}</span>
              </td>

              <td className="px-4 py-3">
                <span className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${statusDot[client.status]}`} />
                  <span className={`font-mono text-xs ${statusText[client.status]}`}>
                    {statusLabel[client.status]}
                  </span>
                </span>
              </td>

              <td className="px-4 py-3 font-mono text-sm text-white">
                {client.activeConversations}
              </td>

              <td className="px-4 py-3 font-mono text-sm text-white">
                {client.leadsToday}
              </td>

              <td className="px-4 py-3 font-mono text-xs text-[#52525b]">
                {formatDate(client.lastUpdate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
