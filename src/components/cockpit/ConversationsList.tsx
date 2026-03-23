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
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mb-3">
        Conversas Recentes
      </p>

      <div className="flex flex-col gap-2">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="bg-[#0A0A0C] border border-[rgba(255,255,255,0.08)] rounded-sm p-3 flex justify-between items-start"
          >
            <div>
              <p className="font-sans text-xs font-semibold text-white">{conv.contactName}</p>
              <span
                className={`font-mono text-[10px] px-1.5 py-0.5 rounded-sm mt-1 inline-block ${badgeStyles[conv.status]}`}
              >
                {conv.status}
              </span>
              <p className="font-sans text-xs text-[#71717a] mt-0.5 truncate max-w-[200px]">
                {conv.lastMessage}
              </p>
            </div>

            <span className="font-mono text-[10px] text-[#52525b] whitespace-nowrap ml-3">
              {conv.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
