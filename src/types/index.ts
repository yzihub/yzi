// ============================================================
// YZIHUB — Global Types
// ============================================================

export type AgentStatus = 'idle' | 'running' | 'error' | 'paused'
export type AgentType = 'workflow' | 'webhook' | 'scheduler' | 'responder' | 'analyzer'

export interface IAgent {
  id: string
  name: string
  type: AgentType
  status: AgentStatus
  createdAt: string
  updatedAt: string
  config?: Record<string, unknown>
}

export interface AgentContext {
  agentId: string
  triggeredBy: string
  payload: unknown
  timestamp: string
  sessionId?: string   // End-to-end traceability across agent chains
}

export interface AgentResult {
  success: boolean
  data?: unknown
  error?: string
  executionTime?: number
}

export interface IWorkflow {
  id: string
  name: string
  n8nWorkflowId?: string
  active: boolean
  triggers: string[]
  createdAt: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
