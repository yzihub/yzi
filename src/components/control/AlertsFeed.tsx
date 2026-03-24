import { AlertCircle, AlertTriangle, Zap } from 'lucide-react'
import type { Alert } from '@/types/control'

interface Props {
  alerts: Alert[]
}

type Severity = Alert['severity']

const icon: Record<Severity, React.ReactNode> = {
  critical: <AlertCircle size={14} color="#ef4444" strokeWidth={1.5} />,
  warning:  <AlertTriangle size={14} color="#f59e0b" strokeWidth={1.5} />,
  info:     <Zap size={14} color="#60A5FA" strokeWidth={1.5} />,
}

const borderLeft: Record<Severity, string> = {
  critical: 'border-l-2 border-l-red-500',
  warning:  'border-l-2 border-l-yellow-500',
  info:     'border-l-2 border-l-blue-400',
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

export default function AlertsFeed({ alerts }: Props) {
  return (
    <div>
      <p className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 mb-4">
        Alertas Recentes
      </p>

      <div className="flex flex-col gap-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={[
              'flex items-start gap-3 p-3',
              'bg-neutral-950/50 border border-white/[0.05] rounded-xl',
              borderLeft[alert.severity],
            ].join(' ')}
          >
            <span className="mt-0.5 shrink-0">{icon[alert.severity]}</span>

            <div className="flex-1 min-w-0">
              <p className="font-sans text-sm font-medium text-neutral-200">{alert.clientName}</p>
              <p className="font-sans text-xs text-neutral-400 mt-0.5">{alert.message}</p>
              <p className="font-sans text-xs text-neutral-500 mt-0.5">{alert.source}</p>
            </div>

            <span className="font-mono text-[10px] text-neutral-500 whitespace-nowrap shrink-0">
              {formatTime(alert.time)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
