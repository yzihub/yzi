import Sidebar from '@/components/layout/Sidebar'
import Topbar from '@/components/layout/Topbar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-black font-sans">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-black text-white">
          {children}
        </main>
      </div>
    </div>
  )
}
