export const MOCK_COCKPIT_CLIENT = {
  name: 'Jurema Brokers',
  agent: 'Luana',
}

export const MOCK_COCKPIT_METRICS = {
  totalLeads: 87,
  responseRate: 94,
  hotLeads: 12,
  closed: 8,
}

export const MOCK_COCKPIT_FUNNEL = [
  { stage: 'Novos', count: 87 },
  { stage: 'Qualificados', count: 43 },
  { stage: 'Em negociação', count: 19 },
  { stage: 'Fechados', count: 8 },
]

export const MOCK_RECENT_CONVERSATIONS = [
  {
    id: 'conv-001',
    contactName: 'Ana Souza',
    lastMessage: 'Tenho interesse no imóvel da Rua das Flores.',
    time: '10:42',
    status: 'ativo' as const,
  },
  {
    id: 'conv-002',
    contactName: 'Carlos Mendes',
    lastMessage: 'Pode me enviar mais fotos do apartamento?',
    time: '10:18',
    status: 'qualificado' as const,
  },
  {
    id: 'conv-003',
    contactName: 'Patrícia Lima',
    lastMessage: 'Vamos fechar! Quais são os próximos passos?',
    time: '09:55',
    status: 'fechado' as const,
  },
  {
    id: 'conv-004',
    contactName: 'Roberto Dias',
    lastMessage: 'Preciso de uma opção com 3 quartos no centro.',
    time: '09:30',
    status: 'ativo' as const,
  },
]
