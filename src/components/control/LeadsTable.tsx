import type { Client } from '@/types/control'

interface Props {
  clients: Client[]
}

const columns = ['Cliente', 'Novos', 'Qualificados', 'Fechados', 'Total']

export default function LeadsTable({ clients }: Props) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mb-3">
        Distribuição de Leads
      </p>

      <div className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#09090b] border-b border-[rgba(255,255,255,0.08)]">
              {columns.map((col) => (
                <th
                  key={col}
                  className="py-2.5 px-4 text-left font-mono text-[10px] uppercase tracking-widest text-[#52525b]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clients.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-2.5 px-4 font-mono text-xs text-[#52525b] text-center"
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
                      'border-b border-[rgba(255,255,255,0.04)]',
                      client.status === 'offline' ? 'opacity-50' : '',
                    ].join(' ')}
                  >
                    <td className="py-2.5 px-4">
                      <span className="font-mono text-xs text-[#a1a1aa]">{client.name}</span>
                      <span className="block font-mono text-[10px] text-[#52525b]">
                        {client.agent}
                      </span>
                      <div className="h-0.5 bg-[rgba(255,255,255,0.06)] rounded-full mt-1">
                        <div
                          className="h-full bg-[#60A5FA] rounded-full transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </td>

                    <td className="py-2.5 px-4 font-mono text-xs text-[#a1a1aa]">
                      {client.leadsNew}
                    </td>

                    <td className="py-2.5 px-4 font-mono text-xs text-[#e4e4e7] font-medium">
                      {client.leadsQualified}
                    </td>

                    <td className="py-2.5 px-4 font-mono text-xs text-[#a1a1aa]">
                      {client.leadsClosed}
                    </td>

                    <td className="py-2.5 px-4 font-mono text-xs text-[#a1a1aa]">
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
