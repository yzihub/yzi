'use client'

import {
  Building2,
  MapPin,
  Calendar,
  Twitter,
  Plus,
  Filter,
  ArrowUpDown,
  Upload,
  ChevronDown,
  MoreHorizontal,
} from 'lucide-react'
import type { CompanyRow } from '@/types/crm'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatFollowers(count: number | null): string {
  if (count === null) return '—'
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`
  if (count >= 1_000) return `${(count / 1_000).toFixed(0)}K`
  return count.toLocaleString('pt-BR')
}

function CompanyAvatar({ name, logoUrl }: { name: string; logoUrl: string | null }) {
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={name}
        className="w-6 h-6 rounded-full object-cover flex-shrink-0"
      />
    )
  }

  return (
    <span className="w-6 h-6 rounded-full bg-hub-muted/40 flex items-center justify-center flex-shrink-0 text-[10px] font-semibold text-hub-text-muted">
      {name.charAt(0).toUpperCase()}
    </span>
  )
}

// ─── Column header ─────────────────────────────────────────────────────────────

function ColHeader({
  icon: Icon,
  label,
  sortable = false,
}: {
  icon?: React.ComponentType<{ size?: number; className?: string }>
  label: string
  sortable?: boolean
}) {
  return (
    <th className="px-4 py-3 text-left">
      <button className="flex items-center gap-1.5 text-xs font-medium text-hub-text-muted hover:text-hub-text transition-colors group">
        {Icon && <Icon size={13} className="text-hub-text-muted/70" />}
        <span>{label}</span>
        {sortable && (
          <ArrowUpDown size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
        )}
      </button>
    </th>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────

interface CompanyTableProps {
  data: CompanyRow[]
  onNewCompany?: () => void
}

export function CompanyTable({ data, onNewCompany }: CompanyTableProps) {
  return (
    <div className="flex flex-col h-full">

      {/* ── Top bar ──────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-hub-border">
        <div className="flex items-center gap-3">
          {/* View selector */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-hub-accent/15 border border-hub-accent/30 text-hub-accent text-sm font-medium">
            <Building2 size={14} />
            Todas as empresas
            <ChevronDown size={13} />
          </button>

          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-hub-border text-hub-text-muted hover:text-hub-text hover:border-hub-muted text-sm transition-colors">
            Ver configurações
            <ChevronDown size={13} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Sort indicator */}
          <div className="flex items-center gap-1.5 text-xs text-hub-text-muted/70 mr-2">
            <ArrowUpDown size={12} />
            <span>
              Ordenado por{' '}
              <span className="text-hub-text font-medium underline decoration-dashed underline-offset-2 cursor-pointer">
                Contagem de seguidores no Twitter
              </span>
            </span>
          </div>

          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-hub-border text-hub-text-muted hover:text-hub-text hover:border-hub-muted text-sm transition-colors">
            <Filter size={13} />
            Filtro
          </button>

          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-hub-border text-hub-text-muted hover:text-hub-text hover:border-hub-muted text-sm transition-colors">
            <Upload size={13} />
            Importação/Exportação
          </button>

          <button
            onClick={onNewCompany}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-hub-accent hover:bg-hub-accent-hover text-white text-sm font-medium transition-colors"
          >
            <Plus size={14} />
            Nova empresa
          </button>
        </div>
      </div>

      {/* ── Glass table container ─────────────────────────────────────────── */}
      <div className="flex-1 overflow-auto">
        {/*
          Glassmorphism layer:
          - backdrop-blur cria o efeito de "vidro fosco"
          - bg-white/[.02] dá a translucidez sutil sobre o fundo escuro
          - border-hub-border mantém o contorno discreto
        */}
        <div className="relative backdrop-blur-sm bg-white/[.02]">
          <table className="w-full text-sm">
            {/* ── Header ───────────────────────────────────────────────── */}
            <thead>
              <tr className="border-b border-hub-border bg-hub-surface/60 backdrop-blur-sm sticky top-0 z-10">
                {/* Checkbox col */}
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 rounded border border-hub-muted bg-transparent accent-hub-accent cursor-pointer"
                  />
                </th>

                <ColHeader label="Empresa" sortable />
                <ColHeader icon={undefined} label="Descrição" />
                <ColHeader icon={MapPin} label="País" sortable />
                <ColHeader icon={Calendar} label="Data de fundação" sortable />
                <ColHeader icon={Twitter} label="Contagem de seguidores" sortable />

                {/* Actions col */}
                <th className="w-10 px-2 py-3" />
              </tr>
            </thead>

            {/* ── Body ─────────────────────────────────────────────────── */}
            <tbody>
              {data.map((company, idx) => (
                <CompanyRow key={company.id} company={company} isEven={idx % 2 === 0} />
              ))}

              {data.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-16 text-center text-hub-text-muted text-sm">
                    Nenhuma empresa encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-4 px-6 py-3 border-t border-hub-border text-xs text-hub-text-muted">
        <span>{data.length} {data.length === 1 ? 'empresa' : 'empresas'}</span>
        <button className="flex items-center gap-1 hover:text-hub-text transition-colors ml-4">
          <Plus size={11} />
          Adicionar cálculo
        </button>
      </div>
    </div>
  )
}

// ─── Individual row ────────────────────────────────────────────────────────────

function CompanyRow({ company, isEven }: { company: CompanyRow; isEven: boolean }) {
  return (
    <tr
      className={[
        'group border-b border-hub-border/50 transition-colors cursor-pointer',
        isEven
          ? 'bg-transparent hover:bg-white/[.025]'
          : 'bg-white/[.015] hover:bg-white/[.035]',
      ].join(' ')}
    >
      {/* Checkbox */}
      <td className="w-10 px-4 py-3">
        <input
          type="checkbox"
          className="w-3.5 h-3.5 rounded border border-hub-muted bg-transparent accent-hub-accent cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </td>

      {/* Company name + avatar */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2.5">
          <CompanyAvatar name={company.name} logoUrl={company.logo_url} />
          <span className="font-medium text-hub-text group-hover:text-white transition-colors">
            {company.name}
          </span>
        </div>
      </td>

      {/* Description */}
      <td className="px-4 py-3 max-w-xs">
        <span className="text-hub-text-muted truncate block">
          {company.description ?? '—'}
        </span>
      </td>

      {/* Country */}
      <td className="px-4 py-3">
        <span className="text-hub-text-muted">{company.country ?? '—'}</span>
      </td>

      {/* Founded year */}
      <td className="px-4 py-3">
        <span className="text-hub-text-muted">{company.founded_year ?? '—'}</span>
      </td>

      {/* Twitter followers */}
      <td className="px-4 py-3">
        <span className="text-hub-text tabular-nums">
          {formatFollowers(company.twitter_followers_count)}
        </span>
      </td>

      {/* Row actions */}
      <td className="w-10 px-2 py-3">
        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-hub-surface text-hub-text-muted hover:text-hub-text">
          <MoreHorizontal size={14} />
        </button>
      </td>
    </tr>
  )
}
