import { MOCK_CLIENTS, MOCK_ALERTS } from '@/lib/mock/control'
import ClientsTable from '@/components/control/ClientsTable'
import LeadsTable from '@/components/control/LeadsTable'
import AlertsFeed from '@/components/control/AlertsFeed'

export default function ControlPage() {

  return (
    <div className="flex flex-col gap-6 p-6 bg-[#000000] min-h-full">
      <header className="flex flex-col gap-1">
        <h1 className="font-sans font-bold text-white text-xl tracking-widest uppercase">
          CONTROL
        </h1>
        <p className="font-mono text-xs text-[#52525b]">Visão geral da operação</p>
      </header>

      <div className="grid grid-cols-3 gap-4">
        <ClientsTable clients={MOCK_CLIENTS} />

        <LeadsTable clients={MOCK_CLIENTS} />

        <AlertsFeed alerts={MOCK_ALERTS} />
      </div>
    </div>
  )
}
