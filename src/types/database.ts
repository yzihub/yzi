// ============================================================
// YZIHUB — Supabase Database Types
// Auto-generate when connected: npx supabase gen types typescript --linked
// This is a hand-written reference schema — update after migrations.
// ============================================================

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

type Relationship = {
  foreignKeyName: string
  columns: string[]
  isOneToOne: boolean
  referencedRelation: string
  referencedColumns: string[]
}

export interface Database {
  public: {
    Tables: {
      agents: {
        Row: {
          id: string
          name: string
          type: string
          status: string
          config: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          type: string
          status?: string
          config?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: string
          status?: string
          config?: Json
          updated_at?: string
        }
        Relationships: Relationship[]
      }
      agent_logs: {
        Row: {
          id: string
          agent_id: string
          status: string
          payload: Json | null
          result: Json | null
          error: string | null
          execution_time_ms: number | null
          started_at: string
          finished_at: string | null
        }
        Insert: {
          id?: string
          agent_id: string
          status: string
          payload?: Json | null
          result?: Json | null
          error?: string | null
          execution_time_ms?: number | null
          started_at?: string
          finished_at?: string | null
        }
        Update: {
          status?: string
          result?: Json | null
          error?: string | null
          execution_time_ms?: number | null
          finished_at?: string | null
        }
        Relationships: Relationship[]
      }
      agent_events: {
        Row: {
          id: string
          type: string
          source_agent_id: string | null
          target_agent_id: string | null
          payload: Json
          processed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          type: string
          source_agent_id?: string | null
          target_agent_id?: string | null
          payload: Json
          processed?: boolean
          created_at?: string
        }
        Update: {
          processed?: boolean
        }
        Relationships: Relationship[]
      }
      leads: {
        Row: {
          id: string
          email: string
          name: string
          company: string
          goal: string
          source: string | null
          stage: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          company: string
          goal: string
          source?: string | null
          stage?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          company?: string
          goal?: string
          source?: string | null
          stage?: string
          updated_at?: string
        }
        Relationships: Relationship[]
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
