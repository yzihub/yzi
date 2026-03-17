import { ArrowUpRight, Clock, Gauge, Sparkles, TrendingUp } from "lucide-react";

const kpis = [
  {
    title: "Lead Response Time",
    target: "< 30 seconds",
    value: "—",
    icon: Clock,
  },
  {
    title: "Automation Execution Time",
    target: "< 2 seconds",
    value: "—",
    icon: Gauge,
  },
  {
    title: "AI Tool Call Latency",
    target: "< 1 second",
    value: "—",
    icon: Sparkles,
  },
  {
    title: "Workflow Failure Rate",
    target: "< 1%",
    value: "—",
    icon: TrendingUp,
  },
] as const;

function MetricCard({
  title,
  target,
  value,
  icon: Icon,
}: {
  title: string;
  target: string;
  value: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <div className="hub-card backdrop-blur-md bg-white/[.03] border border-white/10">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="text-xs text-hub-text-muted">{title}</div>
          <div className="text-2xl font-semibold tracking-tight">{value}</div>
          <div className="text-xs text-hub-text-muted/80">
            Target: <span className="text-hub-text-muted">{target}</span>
          </div>
        </div>
        <div className="h-9 w-9 rounded-md border border-white/10 bg-hub-surface/30 backdrop-blur-md flex items-center justify-center">
          <Icon size={18} className="text-hub-text-muted/80" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Bem-vindo(a) ao Dashboard</h1>
          <p className="text-sm text-hub-text-muted">
            Uma visão rápida do que importa agora — KPIs, saúde do sistema e próximos passos.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-md border border-hub-border bg-white/[.02] hover:bg-white/[.04] transition-colors px-3 py-2 text-sm text-hub-text">
          Ver detalhes
          <ArrowUpRight size={16} className="text-hub-text-muted/80" />
        </button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <MetricCard
            key={kpi.title}
            title={kpi.title}
            target={kpi.target}
            value={kpi.value}
            icon={kpi.icon}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2 hub-card backdrop-blur-md bg-white/[.02] border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Resumo</div>
              <div className="text-xs text-hub-text-muted">Status geral da operação</div>
            </div>
            <span className="text-xs px-2 py-1 rounded-md border border-hub-accent/30 bg-hub-accent/10 text-hub-accent">
              online
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-md border border-white/10 bg-white/[.02] p-3">
              <div className="text-xs text-hub-text-muted">Automations</div>
              <div className="text-lg font-semibold">—</div>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[.02] p-3">
              <div className="text-xs text-hub-text-muted">Leads</div>
              <div className="text-lg font-semibold">—</div>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[.02] p-3">
              <div className="text-xs text-hub-text-muted">CRM</div>
              <div className="text-lg font-semibold">—</div>
            </div>
          </div>
        </div>

        <div className="hub-card backdrop-blur-md bg-white/[.02] border border-white/10">
          <div className="text-sm font-medium">Próximos passos</div>
          <div className="text-xs text-hub-text-muted">Sugestões para destravar o MVP</div>

          <ul className="mt-4 space-y-2 text-sm">
            <li className="rounded-md border border-white/10 bg-white/[.02] px-3 py-2">
              Conectar Supabase e popular KPIs
            </li>
            <li className="rounded-md border border-white/10 bg-white/[.02] px-3 py-2">
              Criar páginas de CRM (Empresas/Pessoas)
            </li>
            <li className="rounded-md border border-white/10 bg-white/[.02] px-3 py-2">
              Integrar Automações (n8n) via A2A
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

