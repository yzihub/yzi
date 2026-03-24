import { MOCK_RECENT_CONVERSATIONS } from '@/lib/mock/cockpit'

type RecentConversation = typeof MOCK_RECENT_CONVERSATIONS[number]

interface Props {
  conversations: RecentConversation[]
}

type Status = RecentConversation['status']

const badgeStyles: Record<Status, string> = {
  ativo:       'bg-[rgba(96,165,250,0.1)] text-[#60A5FA] border border-[rgba(96,165,250,0.2)]',
  qualificado: 'bg-[rgba(34,197,94,0.1)] text-[#22c55e] border border-[rgba(34,197,94,0.2)]',
  fechado:     'bg-[rgba(255,255,255,0.04)] text-[#52525b] border border-[rgba(255,255,255,0.08)]',
}

export default function ConversationsList({ conversations }: Props) {
  return (
    <div className="bg-neutral-900/50 border border-white/[0.05] rounded-xl p-4 backdrop-blur-sm">
      <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 mb-3">
        Conversas Recentes
      </p>

      <div className="flex flex-col">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="border-b border-white/[0.05] py-3 flex justify-between items-start hover:bg-white/[0.02] transition-colors duration-150 px-1 -mx-1 rounded"
          >
            <div>
              <p className="font-sans text-sm font-medium text-neutral-200">{conv.contactName}</p>
              <span
                className={`font-mono text-[10px] px-1.5 py-0.5 rounded mt-1 inline-block ${badgeStyles[conv.status]}`}
              >
                {conv.status}
              </span>
              <p className="font-sans text-xs text-neutral-500 mt-0.5 truncate max-w-[200px]">
                {conv.lastMessage}
              </p>
            </div>

            <span className="font-mono text-[10px] text-neutral-500 whitespace-nowrap ml-3">
              {conv.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
