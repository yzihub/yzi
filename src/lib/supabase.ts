import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// ─── Typed client alias ───────────────────────────────────────────────────────
export type TypedSupabaseClient = ReturnType<typeof createClient<Database>>

// ─── Browser client — lazy singleton ─────────────────────────────────────────
// Initialized on first call, not at module load, so build-time evaluation
// with placeholder env vars does not throw "Invalid supabaseUrl".
let _browserClient: TypedSupabaseClient | null = null

export function getSupabaseClient(): TypedSupabaseClient {
  if (_browserClient) return _browserClient

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key || url.startsWith('your_')) {
    throw new Error(
      '[Supabase] Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
    )
  }

  _browserClient = createClient<Database>(url, key, {
    auth: { persistSession: true, autoRefreshToken: true },
  })
  return _browserClient
}

// ─── Server client factory (service role — NEVER expose to browser) ───────────
// Call inside API Routes, Server Actions, and Server Components only.
export function createServerClient(): TypedSupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key || url.startsWith('your_') || key.startsWith('your_')) {
    throw new Error(
      '[Supabase] Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local'
    )
  }

  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
