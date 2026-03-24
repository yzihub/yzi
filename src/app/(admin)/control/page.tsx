import { MOCK_CLIENTS, MOCK_ALERTS } from '@/lib/mock/control'
import ClientsTable from '@/components/control/ClientsTable'
import LeadsTable from '@/components/control/LeadsTable'
import AlertsFeed from '@/components/control/AlertsFeed'

export default function ControlPage() {
  return (
    <div className="bg-black min-h-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-6">
        <header className="flex flex-col gap-1">
          <h1 className="font-sans font-bold text-white text-xl tracking-widest uppercase">
            CONTROL
          </h1>
          <p className="font-mono text-xs text-neutral-500">Visão geral da operação</p>
        </header>

        <div className="grid grid-cols-[1fr_1fr_320px] gap-6">
          <div className="bg-neutral-900/50 border border-white/[0.05] rounded-[20px] p-6 backdrop-blur-md min-w-0">
            <ClientsTable clients={MOCK_CLIENTS} />
          </div>

          <div className="bg-neutral-900/50 border border-white/[0.05] rounded-[20px] p-6 backdrop-blur-md min-w-0">
            <LeadsTable clients={MOCK_CLIENTS} />
          </div>

          <div className="bg-neutral-900/50 border border-white/[0.05] rounded-[20px] p-6 backdrop-blur-md min-w-0">
            <AlertsFeed alerts={MOCK_ALERTS} />
          </div>
        </div>
      </div>
    </div>
  )
}
