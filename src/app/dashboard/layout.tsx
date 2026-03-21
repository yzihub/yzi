import Link from "next/link";
import { PropsWithChildren } from "react";
import {
  Building2,
  Home,
  Radar,
  Settings,
  Users,
  Workflow,
  Search,
  Command,
  UserCircle2,
} from "lucide-react";

function NavIconLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-hub-text-muted hover:text-hub-text hover:bg-white/[.04] transition-colors"
    >
      <Icon size={16} className="text-hub-text-muted/80 group-hover:text-hub-text" />
      <span className="truncate">{label}</span>
    </Link>
  );
}

function DashboardSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] border-r border-hub-border bg-hub-surface/20 backdrop-blur-md">
      <div className="h-14 px-4 flex items-center border-b border-hub-border/70">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-md bg-hub-accent/15 border border-hub-accent/30" />
          <span className="font-semibold tracking-tight text-hub-text">
            YZI<span className="text-hub-accent">HUB</span>
          </span>
        </Link>
      </div>

      <nav className="p-3 space-y-1">
        <NavIconLink href="/dashboard" label="Início" icon={Home} />
        <NavIconLink href="/dashboard/radar" label="Radar" icon={Radar} />

        <div className="pt-2">
          <div className="px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-hub-text-muted/70">
            CRM
          </div>
          <NavIconLink href="/dashboard/crm/companies" label="Empresas" icon={Building2} />
          <NavIconLink href="/dashboard/crm/people" label="Pessoas" icon={Users} />
        </div>

        <div className="pt-2">
          <NavIconLink href="/dashboard/automations" label="Automações" icon={Workflow} />
          <NavIconLink href="/dashboard/settings" label="Configurações" icon={Settings} />
        </div>
      </nav>
    </aside>
  );
}

function DashboardHeader() {
  return (
    <header className="fixed left-[260px] right-0 top-0 z-20 h-14 border-b border-hub-border bg-hub-surface/20 backdrop-blur-md">
      <div className="h-full px-6 flex items-center justify-between gap-4">
        <button
          type="button"
          className="w-full max-w-[680px] flex items-center gap-2 rounded-md border border-hub-border bg-white/[.03] hover:bg-white/[.05] transition-colors px-3 py-2 text-left"
          aria-label="Buscar (Command Bar)"
        >
          <Search size={16} className="text-hub-text-muted/80" />
          <span className="flex-1 text-sm text-hub-text-muted">
            Buscar… <span className="text-hub-text-muted/70">(⌘K)</span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-md border border-hub-border bg-hub-surface/30 px-2 py-1 text-[11px] text-hub-text-muted">
            <Command size={14} />
            K
          </span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-hub-border bg-white/[.02] hover:bg-white/[.04] transition-colors px-3 py-2"
          aria-label="Perfil do usuário"
        >
          <UserCircle2 size={18} className="text-hub-text-muted/80" />
          <div className="text-left leading-tight">
            <div className="text-sm text-hub-text font-medium">Você</div>
            <div className="text-xs text-hub-text-muted">Plano MVP</div>
          </div>
        </button>
      </div>
    </header>
  );
}

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-hub-bg text-hub-text">
      <DashboardSidebar />
      <DashboardHeader />

      <main className="ml-[260px] pt-14">
        <div className="px-6 py-6">{children}</div>
      </main>
    </div>
  );
}
