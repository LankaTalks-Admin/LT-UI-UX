import { useState } from 'react'
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  ChevronRight,
  Clock,
  FileText,
  Filter,
  Lock,
  Sparkles,
  Tag,
} from 'lucide-react'
import { latestIntel, latestIntelStats } from '@/data/latestIntel'
import { cn } from '@/lib/cn'

const typeConfig = {
  'Sector Brief': {
    icon: BarChart2,
    color: 'bg-blue-500',
    light: 'bg-blue-50 text-blue-700 border border-blue-200',
    accent: 'border-l-blue-500',
  },
  'Business Brief': {
    icon: FileText,
    color: 'bg-violet-500',
    light: 'bg-violet-50 text-violet-700 border border-violet-200',
    accent: 'border-l-violet-500',
  },
  'Data Intelligence': {
    icon: Sparkles,
    color: 'bg-emerald-500',
    light: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    accent: 'border-l-emerald-500',
  },
}

const typeFilters = [
  { key: 'all', label: 'All' },
  { key: 'Sector Brief', label: 'Sector Briefs', icon: BarChart2 },
  { key: 'Business Brief', label: 'Business Briefs', icon: FileText },
  { key: 'Data Intelligence', label: 'Data Intel', icon: Sparkles },
]

function FeaturedCard({ item }) {
  const config = typeConfig[item.type] ?? typeConfig['Business Brief']
  const Icon = config.icon

  return (
    <div className="group relative flex cursor-pointer overflow-hidden border border-slate-200 bg-white transition-all hover:border-brand-600/30 hover:shadow-lg">
      <div className="relative flex w-full flex-col lg:flex-row">
        {/* Left accent + visual */}
        <div className={cn('relative flex w-full shrink-0 items-center justify-center border-l-4 bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:w-[340px]', config.accent)}>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className={cn('flex size-14 items-center justify-center rounded-lg', config.color)}>
              <Icon className="size-7 text-white" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                Featured Report
              </span>
              <p className="mt-1 font-serif text-lg font-bold leading-snug text-white">
                {item.type}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-white/40">
              <Clock className="size-3" aria-hidden="true" />
              {item.length}
            </div>
          </div>
          {item.locked && (
            <div className="absolute right-3 top-3">
              <Lock className="size-4 text-white/40" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 lg:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-semibold', config.light)}>
              <Icon className="size-3" aria-hidden="true" />
              {item.type}
            </span>
            <span className="flex items-center gap-1 text-[10px] font-medium text-brand-600">
              <Tag className="size-3" aria-hidden="true" />
              {item.sector}
            </span>
            <span className="text-[10px] text-slate-400">·</span>
            <span className="text-[10px] text-slate-400">{item.date}</span>
          </div>

          <h3 className="mb-2 font-serif text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 lg:text-2xl">
            {item.headline}
          </h3>

          <p className="mb-4 flex-1 text-[12px] leading-relaxed text-slate-500 line-clamp-3">
            {item.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <BookOpen className="size-3" aria-hidden="true" />
                {item.length}
              </span>
            </div>
            <span className="group/btn flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-600 transition-colors hover:text-brand-700">
              {item.locked ? 'Subscribe to Read' : 'Read Report'}
              <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function IntelRow({ item, index }) {
  const config = typeConfig[item.type] ?? typeConfig['Business Brief']
  const Icon = config.icon

  return (
    <div className={cn(
      'group flex cursor-pointer items-start gap-4 border-b border-slate-100 px-5 py-4 transition-colors last:border-0 hover:bg-brand-50/30',
      'border-l-3',
      config.accent,
    )}>
      <span className="flex size-8 shrink-0 items-center justify-center rounded bg-slate-100 font-mono text-[11px] font-bold text-slate-400">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span className={cn('inline-flex items-center gap-1 px-1.5 py-0.5 text-[8px] font-semibold', config.light)}>
            <Icon className="size-3" aria-hidden="true" />
            {item.type}
          </span>
          <span className="text-[10px] font-medium text-brand-600/80">
            {item.sector}
          </span>
          <span className="text-[9px] text-slate-300">|</span>
          <span className="text-[9px] text-slate-400">{item.date}</span>
          <span className="text-[9px] text-slate-300">|</span>
          <span className="text-[9px] text-slate-400">{item.length}</span>
          {item.locked && (
            <Lock className="size-3 text-slate-300" aria-hidden="true" />
          )}
        </div>

        <h3 className="text-[13px] font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 line-clamp-1">
          {item.headline}
        </h3>

        <p className="mt-1 text-[11px] leading-relaxed text-slate-500 line-clamp-1">
          {item.excerpt}
        </p>
      </div>

      <span className="hidden shrink-0 items-center gap-1 text-[10px] font-semibold text-brand-600 opacity-0 transition-opacity group-hover:flex sm:flex">
        {item.locked ? 'Subscribe' : 'Read'}
        <ChevronRight className="size-3" aria-hidden="true" />
      </span>
    </div>
  )
}

export default function LatestIntelGrid() {
  const [activeType, setActiveType] = useState('all')

  const featured = latestIntel.find((d) => d.featured)
  const filtered = latestIntel
    .filter((d) => !d.featured)
    .filter((d) => activeType === 'all' || d.type === activeType)

  const typeCounts = {
    'Sector Brief': latestIntel.filter((d) => d.type === 'Sector Brief').length,
    'Business Brief': latestIntel.filter((d) => d.type === 'Business Brief').length,
    'Data Intelligence': latestIntel.filter((d) => d.type === 'Data Intelligence').length,
  }

  return (
    <section>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3 border-b-2 border-slate-900 py-2">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
            Latest Intelligence
          </h2>
        </div>
        <button
          type="button"
          className="shrink-0 cursor-pointer bg-brand-600 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
        >
          View All
        </button>
      </div>

      {/* Summary stat bar */}
      <div className="mb-5 grid grid-cols-3 gap-px overflow-hidden rounded border border-slate-200 bg-slate-200">
        {Object.entries(typeCounts).map(([type, count]) => {
          const cfg = typeConfig[type]
          const Icon = cfg.icon
          return (
            <div key={type} className="flex items-center gap-3 bg-white px-4 py-3">
              <div className={cn('flex size-8 items-center justify-center rounded', cfg.color)}>
                <Icon className="size-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-[16px] font-bold text-slate-900">{count}</p>
                <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
                  {type === 'Data Intelligence' ? 'Data Intel' : type + 's'}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Featured card */}
      {featured && (
        <div className="mb-5">
          <FeaturedCard item={featured} />
        </div>
      )}

      {/* Filter tabs */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Filter className="size-3.5 text-slate-400" aria-hidden="true" />
        {typeFilters.map((f) => {
          const count = f.key === 'all'
            ? latestIntel.filter((d) => !d.featured).length
            : latestIntel.filter((d) => !d.featured && d.type === f.key).length
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setActiveType(f.key)}
              className={cn(
                'flex cursor-pointer items-center gap-1 border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-colors',
                activeType === f.key
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50',
              )}
            >
              {f.label}
              <span className={cn(
                'ml-0.5 font-mono text-[9px]',
                activeType === f.key ? 'text-white/50' : 'text-slate-400',
              )}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* List */}
      <div className="overflow-hidden rounded border border-slate-200 bg-white">
        {filtered.length > 0 ? (
          filtered.map((item, i) => (
            <IntelRow key={item.id} item={item} index={i} />
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-sm text-slate-500">No reports match this filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
