type ClientStatus = 'online' | 'offline' | 'degraded'

interface Client {
  id: string
  name: string
  agent: string
  status: ClientStatus
  activeConversations: number
  leadsToday: number
  leadsNew: number
  leadsQualified: number
  leadsClosed: number
  lastUpdate: string
}

interface Alert {
  id: string
  clientId: string
  clientName: string
  severity: 'critical' | 'warning' | 'info'
  message: string
  time: string
}

export type { ClientStatus, Client, Alert }
