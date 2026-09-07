import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart2,
  FileText,
  TrendingUp,
} from 'lucide-react'
import { dashboardStats } from '@/data/dashboardStats'
import { cseSixMonth, topMovers } from '@/data/topMovers'
import { cn } from '@/lib/cn'

const statIcons = {
  'Companies Tracked': BarChart2,
  'Sector Activity Index': TrendingUp,
  'Intelligence Items': FileText,
  'Open Tenders': FileText,
}

function StatCard({ stat }) {
  const Icon = statIcons[stat.label] ?? FileText
  const isPositive = !String(stat.delta ?? '').startsWith('-')

  return (
    <div className="flex flex-col gap-1.5 border-r border-slate-200 px-3 py-3.5 last:border-r-0 sm:px-5">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          {stat.label}
        </span>
        {stat.badge && (
          <span className="bg-brand-600/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-brand-600">
            {stat.badge}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[22px] font-light tracking-tight text-slate-900">
          {stat.value}
        </span>
        {stat.delta && (
          <span
            className={cn(
              'flex items-center gap-0.5 text-[10px] font-semibold',
              isPositive ? 'text-emerald-600' : 'text-brand-600',
            )}
          >
            {isPositive ? (
              <ArrowUpRight className="size-3" aria-hidden="true" />
            ) : (
              <ArrowDownRight className="size-3" aria-hidden="true" />
            )}
            {stat.delta}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-slate-500">{stat.sub}</span>
        <Icon className="size-3.5 text-slate-400" aria-hidden="true" />
      </div>
    </div>
  )
}

function MiniBar({ values, color = 'bg-brand-600' }) {
  const max = Math.max(...values)

  return (
    <div className="flex h-6 items-end gap-px">
      {values.map((v, i) => (
        <div
          key={i}
          className={`w-1.5 rounded-sm ${color} opacity-70`}
          style={{ height: `${Math.round((v / max) * 24)}px` }}
        />
      ))}
    </div>
  )
}

function MarketMini() {
  return (
    <div className="min-w-0 px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          CSE Top Movers
        </span>
        <span className="ml-2 cursor-pointer whitespace-nowrap text-[8px] font-medium text-brand-600 hover:underline">
          View All →
        </span>
      </div>
      <div className="space-y-1.5">
        {topMovers.map((m) => {
          const up = m.change >= 0
          return (
            <div
              key={m.symbol}
              className="flex min-w-0 items-center justify-between gap-2"
            >
              <div className="flex min-w-0 items-center gap-1.5 overflow-hidden">
                <span className="shrink-0 font-mono text-[9px] font-semibold text-slate-900">
                  {m.symbol}
                </span>
                <span className="hidden truncate text-[9px] text-slate-500 lg:block">
                  {m.name}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="font-mono text-[9px] font-semibold text-slate-900">
                  {m.price}
                </span>
                <span
                  className={cn(
                    'text-[9px] font-semibold',
                    up ? 'text-emerald-600' : 'text-brand-600',
                  )}
                >
                  {up ? '+' : ''}
                  {m.change}%
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function IntelligenceBanner() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-3 border-b border-slate-100 py-1.5">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-brand-600" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-600">
              LK Intelligence Dashboard
            </span>
          </div>
          <span className="hidden text-[9px] text-slate-500 sm:block">
            Live – Updated Jun 6, 2026
          </span>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden text-[9px] text-slate-500 sm:block">
              Subscribers Only
            </span>
            <button
              type="button"
              className="cursor-pointer border border-brand-600 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
            >
              Unlock Access
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-3 xl:grid-cols-6">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
          <div className="flex flex-col gap-1.5 border-r border-slate-200 px-3 py-3.5 sm:px-5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
              {cseSixMonth.label}
            </span>
            <MiniBar values={cseSixMonth.values} />
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-[14px] font-light text-slate-900">
                {cseSixMonth.current}
              </span>
              <span className="flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600">
                <ArrowUpRight className="size-3" aria-hidden="true" />
                +{cseSixMonth.change}%
              </span>
            </div>
          </div>
          <MarketMini />
        </div>
      </div>
    </div>
  )
}
