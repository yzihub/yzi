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
  critical: 'border-l-2 border-l-[#ef4444]',
  warning:  'border-l-2 border-l-[#f59e0b]',
  info:     'border-l-2 border-l-[#60A5FA]',
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
      <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mb-3">
        Alertas Recentes
      </p>

      <div className="flex flex-col gap-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={[
              'flex items-start gap-3 p-3',
              'bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm',
              borderLeft[alert.severity],
            ].join(' ')}
          >
            <span className="mt-0.5 shrink-0">{icon[alert.severity]}</span>

            <div className="flex-1 min-w-0">
              <p className="font-sans text-xs font-semibold text-white">{alert.clientName}</p>
              <p className="font-sans text-xs text-[#71717a] mt-0.5">{alert.message}</p>
            </div>

            <span className="font-mono text-[10px] text-[#52525b] whitespace-nowrap shrink-0">
              {formatTime(alert.time)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
