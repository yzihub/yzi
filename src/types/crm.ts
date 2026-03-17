// ============================================================
// YZIHUB — CRM Types
// Baseado em: docs/screenshots/EMPRESAS.PNG
// Interface de referência: Attio CRM
// ============================================================

// ─── Company (Empresa) ────────────────────────────────────────────────────────

export interface ICompany {
  id: string
  name: string
  description: string | null
  logo_url: string | null

  // Location
  city: string | null
  country: string | null

  // Founding
  founded_year: number | null

  // Social metrics
  twitter_followers_count: number | null
  linkedin_url: string | null
  website_url: string | null

  // CRM metadata
  status: CompanyStatus
  owner_id: string | null
  tags: string[]

  created_at: string
  updated_at: string
}

export type CompanyStatus =
  | 'prospect'
  | 'active'
  | 'customer'
  | 'churned'
  | 'partner'

// ─── Person (Pessoa) ──────────────────────────────────────────────────────────

export interface IPerson {
  id: string
  first_name: string
  last_name: string
  full_name: string
  email: string | null
  phone: string | null
  avatar_url: string | null

  company_id: string | null
  company?: Pick<ICompany, 'id' | 'name' | 'logo_url'>

  job_title: string | null
  linkedin_url: string | null

  status: PersonStatus
  owner_id: string | null
  tags: string[]

  created_at: string
  updated_at: string
}

export type PersonStatus =
  | 'lead'
  | 'prospect'
  | 'active'
  | 'customer'
  | 'churned'

// ─── Lead (unified entry point for CRM pipeline) ──────────────────────────────

export interface ILead {
  id: string
  type: 'company' | 'person'

  // Resolved dynamically based on type
  company?: ICompany
  person?: IPerson

  // Pipeline
  stage: LeadStage
  score: number | null         // 0-100
  estimated_value: number | null
  currency: string             // 'BRL' | 'USD' | ...

  // Automation
  last_interaction_at: string | null
  next_action_at: string | null
  next_action_note: string | null

  // Relations
  owner_id: string | null
  sequence_id: string | null   // n8n sequence tied to this lead

  created_at: string
  updated_at: string
}

export type LeadStage =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'proposal'
  | 'negotiation'
  | 'won'
  | 'lost'

// ─── Table display types ───────────────────────────────────────────────────────

export interface CompanyRow
  extends Pick<
    ICompany,
    | 'id'
    | 'name'
    | 'description'
    | 'logo_url'
    | 'country'
    | 'founded_year'
    | 'twitter_followers_count'
    | 'status'
  > {}
