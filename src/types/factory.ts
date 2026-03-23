export type Squad = 'yzi-sdr' | 'yzi-trafego' | 'yzi-factory'

export type WorkflowTemplate = 'sdr' | 'trafego' | 'high-ticket'

export interface FactoryFormData {
  clientName: string
  squad: Squad
  tenantId: string
  infrastructure: {
    nocodb: boolean
    evolution: boolean
    redis: boolean
  }
  workflows: WorkflowTemplate[]
}
