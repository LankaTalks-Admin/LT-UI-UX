import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart2,
  ChevronDown,
  ChevronUp,
  Columns3,
  List,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { sectorIntel } from '@/data/sectorIntel'
import { cn } from '@/lib/cn'

const columns = [
  { key: 'name', label: 'Sector', sortable: true },
  { key: 'topStock', label: 'Top Stock', sortable: true },
  { key: 'topPrice', label: 'Price (LKR)', sortable: true, align: 'right' },
  { key: 'change', label: 'Change', sortable: true, align: 'right' },
  { key: 'marketCap', label: 'Mkt Cap', sortable: true, align: 'right' },
  { key: 'activity', label: 'Activity', sortable: true },
  { key: 'companies', label: 'Cos.', sortable: true, align: 'right' },
  { key: 'reports', label: 'Reports', sortable: true, align: 'right' },
]

const sortKeys = [
  { key: 'change', label: 'Change %' },
  { key: 'activity', label: 'Activity' },
  { key: 'companies', label: 'Companies' },
  { key: 'marketCap', label: 'Market Cap' },
  { key: 'reports', label: 'Reports' },
]

function HeatmapBar({ sector }) {
  const up = sector.change >= 0
  const intensity = Math.min(Math.abs(sector.change) / 3, 1)
  return (
    <div
      className={cn(
        'h-full w-full transition-opacity',
        up ? 'bg-emerald-500' : 'bg-red-500',
      )}
      style={{ opacity: 0.2 + intensity * 0.8 }}
      title={`${sector.name}: ${up ? '+' : ''}${sector.change}%`}
    />
  )
}

function ActivityDots({ value }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={cn(
              'size-1.5 rounded-full',
              value >= i * 2 ? 'bg-brand-600' : 'bg-slate-200',
            )}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] font-semibold text-slate-600">
        {value}
      </span>
    </div>
  )
}

function TableView({ data, sortKey, sortDir, onSort }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-slate-900">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  'px-3 py-2.5 text-[9px] font-bold uppercase tracking-wider text-slate-500',
                  col.sortable && 'cursor-pointer select-none hover:text-slate-900',
                  col.align === 'right' && 'text-right',
                )}
                onClick={() => col.sortable && onSort(col.key)}
              >
                <span className="inline-flex items-center gap-1">
                  {col.label}
                  {col.sortable && sortKey === col.key && (
                    sortDir === 'asc' ? (
                      <ChevronUp className="size-3 text-brand-600" />
                    ) : (
                      <ChevronDown className="size-3 text-brand-600" />
                    )
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((sector, i) => {
            const up = sector.change >= 0
            return (
              <tr
                key={sector.id}
                className={cn(
                  'border-b border-slate-100 transition-colors hover:bg-brand-50/40',
                  i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50',
                )}
              >
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div className={`size-2.5 shrink-0 rounded-sm ${sector.color}`} />
                    <div>
                      <span className="text-[12px] font-semibold text-slate-900">
                        {sector.name}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span className="font-mono text-[12px] font-bold text-slate-900">
                    {sector.topStock}
                  </span>
                </td>
                <td className="px-3 py-3 text-right">
                  <span className="font-mono text-[12px] font-semibold text-slate-700">
                    {sector.topPrice}
                  </span>
                </td>
                <td className="px-3 py-3 text-right">
                  <span
                    className={cn(
                      'inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 font-mono text-[11px] font-bold',
                      up ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600',
                    )}
                  >
                    {up ? (
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    ) : (
                      <ArrowDownRight className="size-3" aria-hidden="true" />
                    )}
                    {up ? '+' : ''}{sector.change}%
                  </span>
                </td>
                <td className="px-3 py-3 text-right">
                  <span className="font-mono text-[12px] font-semibold text-slate-700">
                    ${sector.marketCap}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <ActivityDots value={sector.activity} />
                </td>
                <td className="px-3 py-3 text-right">
                  <span className="font-mono text-[12px] text-slate-600">
                    {sector.companies}
                  </span>
                </td>
                <td className="px-3 py-3 text-right">
                  <span className="font-mono text-[12px] font-semibold text-brand-600">
                    {sector.reports}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function CardView({ data }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((sector) => {
        const up = sector.change >= 0
        return (
          <div
            key={sector.id}
            className="group flex cursor-pointer flex-col gap-2.5 border border-slate-200 bg-white p-4 transition-all hover:border-brand-600/30 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className={`size-3 rounded-sm ${sector.color}`} />
                <div>
                  <h3 className="text-[12px] font-bold text-slate-900 leading-tight">
                    {sector.name}
                  </h3>
                  <span className="text-[9px] text-slate-400">
                    {sector.companies} companies
                  </span>
                </div>
              </div>
              <span
                className={cn(
                  'flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-bold',
                  up ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600',
                )}
              >
                {up ? (
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                ) : (
                  <ArrowDownRight className="size-3" aria-hidden="true" />
                )}
                {up ? '+' : ''}{sector.change}%
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[14px] font-bold text-slate-900">
                {sector.topStock}
              </span>
              <span className="font-mono text-[11px] text-slate-500">
                LKR {sector.topPrice}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-2.5">
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400">Mkt Cap</span>
                <p className="font-mono text-[11px] font-semibold text-slate-700">
                  ${sector.marketCap}
                </p>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400">Activity</span>
                <div className="flex items-center gap-1">
                  <div className="h-1 flex-1 overflow-hidden bg-slate-100">
                    <div
                      className={cn(
                        'h-full',
                        sector.activity >= 7 ? 'bg-emerald-500' : sector.activity >= 5 ? 'bg-amber-500' : 'bg-slate-300',
                      )}
                      style={{ width: `${(sector.activity / 10) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-slate-600">
                    {sector.activity}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400">Reports</span>
                <p className="font-mono text-[11px] font-semibold text-brand-600">
                  {sector.reports}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const INITIAL_COUNT = 8

export default function SectorIntelScroll() {
  const [sortKey, setSortKey] = useState('change')
  const [sortDir, setSortDir] = useState('desc')
  const [filterType, setFilterType] = useState('all')
  const [viewMode, setViewMode] = useState('table')
  const [expanded, setExpanded] = useState(false)

  const gainers = sectorIntel.filter((s) => s.change >= 0).length
  const losers = sectorIntel.length - gainers
  const avgActivity = (sectorIntel.reduce((s, sec) => s + sec.activity, 0) / sectorIntel.length).toFixed(1)
  const totalMktCap = sectorIntel.reduce((s, sec) => s + parseFloat(sec.marketCap), 0).toFixed(1)

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('desc')
    }
  }

  const filtered = sectorIntel
    .filter((s) => {
      if (filterType === 'gainers') return s.change >= 0
      if (filterType === 'losers') return s.change < 0
      if (filterType === 'active') return s.activity >= 6
      return true
    })
    .sort((a, b) => {
      let cmp = 0
      if (sortKey === 'change') cmp = a.change - b.change
      else if (sortKey === 'activity') cmp = a.activity - b.activity
      else if (sortKey === 'companies') cmp = a.companies - b.companies
      else if (sortKey === 'reports') cmp = a.reports - b.reports
      else if (sortKey === 'marketCap') cmp = parseFloat(a.marketCap) - parseFloat(b.marketCap)
      else if (sortKey === 'name') cmp = a.name.localeCompare(b.name)
      else if (sortKey === 'topStock') cmp = a.topStock.localeCompare(b.topStock)
      else if (sortKey === 'topPrice') cmp = parseFloat(a.topPrice) - parseFloat(b.topPrice)
      return sortDir === 'asc' ? cmp : -cmp
    })

  const visibleSectors = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <section>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3 border-b-2 border-slate-900 py-2">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
            Sector Intelligence
          </h2>
          {/* <span className="text-[12px] text-slate-500">
            <span className="font-semibold text-slate-900">{sectorIntel.length}</span> sectors
          </span> */}
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setViewMode('table')}
            className={cn(
              'flex size-8 cursor-pointer items-center justify-center border transition-colors',
              viewMode === 'table'
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300 hover:text-slate-600',
            )}
            title="Table view"
          >
            <List className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setViewMode('card')}
            className={cn(
              'flex size-8 cursor-pointer items-center justify-center border transition-colors',
              viewMode === 'card'
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300 hover:text-slate-600',
            )}
            title="Card view"
          >
            <Columns3 className="size-4" />
          </button>
        </div>
      </div>

      {/* Summary stats */}
      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="flex items-center gap-3 rounded border border-slate-200 bg-white px-4 py-3">
          <div className="flex size-9 items-center justify-center rounded bg-slate-900">
            <BarChart2 className="size-4 text-white" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
              Total Sectors
            </span>
            <p className="font-mono text-[18px] font-bold leading-tight text-slate-900">
              {sectorIntel.length}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded border border-slate-200 bg-white px-4 py-3">
          <div className="flex size-9 items-center justify-center rounded bg-emerald-600">
            <TrendingUp className="size-4 text-white" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
              Gainers / Losers
            </span>
            <p className="font-mono text-[18px] font-bold leading-tight text-slate-900">
              <span className="text-emerald-600">{gainers}</span>
              <span className="text-slate-300"> / </span>
              <span className="text-red-500">{losers}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded border border-slate-200 bg-white px-4 py-3">
          <div className="flex size-9 items-center justify-center rounded bg-brand-600">
            <TrendingDown className="size-4 text-white" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
              Avg Activity
            </span>
            <p className="font-mono text-[18px] font-bold leading-tight text-slate-900">
              {avgActivity}<span className="text-[11px] text-slate-400">/10</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded border border-slate-200 bg-white px-4 py-3">
          <div className="flex size-9 items-center justify-center rounded bg-amber-500">
            <BarChart2 className="size-4 text-white" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
              Total Mkt Cap
            </span>
            <p className="font-mono text-[18px] font-bold leading-tight text-slate-900">
              ${totalMktCap}<span className="text-[11px] text-slate-400">B</span>
            </p>
          </div>
        </div>
      </div>

      {/* Heatmap overview */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Performance Heatmap
          </span>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 text-[8px] text-slate-400">
              <span className="inline-block size-2 bg-red-500 opacity-70" /> Loss
            </span>
            <span className="flex items-center gap-1 text-[8px] text-slate-400">
              <span className="inline-block size-2 bg-emerald-500 opacity-70" /> Gain
            </span>
          </div>
        </div>
        <div className="grid h-8 grid-cols-17 gap-px overflow-hidden rounded border border-slate-200">
          {sectorIntel.map((sector) => (
            <HeatmapBar key={sector.id} sector={sector} />
          ))}
        </div>
        <div className="mt-1 flex justify-between px-0.5">
          {sectorIntel.map((sector) => (
            <span
              key={sector.id}
              className="text-[7px] font-medium text-slate-400 truncate"
              title={sector.name}
            >
              {sector.shortName}
            </span>
          ))}
        </div>
      </div>

      {/* Filters + Sort */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="flex gap-1">
          {[
            { key: 'all', label: 'All' },
            { key: 'gainers', label: 'Gainers', count: gainers },
            { key: 'losers', label: 'Losers', count: losers },
            { key: 'active', label: 'Active' },
          ].map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilterType(f.key)}
              className={cn(
                'flex cursor-pointer items-center gap-1 border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-colors',
                filterType === f.key
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50',
              )}
            >
              {f.label}
              {f.count !== undefined && (
                <span className={cn(
                  'ml-0.5 font-mono text-[9px]',
                  filterType === f.key ? 'text-white/60' : 'text-slate-400',
                )}>
                  {f.count}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Sort:
          </span>
          <div className="flex gap-0.5">
            {sortKeys.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => handleSort(s.key)}
                className={cn(
                  'flex cursor-pointer items-center gap-0.5 border px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider transition-colors',
                  sortKey === s.key
                    ? 'border-brand-600 bg-brand-50 text-brand-700'
                    : 'border-transparent text-slate-400 hover:text-slate-600',
                )}
              >
                {s.label}
                {sortKey === s.key && (
                  sortDir === 'asc' ? (
                    <ChevronUp className="size-3" />
                  ) : (
                    <ChevronDown className="size-3" />
                  )
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'table' ? (
        <div className="rounded border border-slate-200 bg-white">
          <TableView
            data={visibleSectors}
            sortKey={sortKey}
            sortDir={sortDir}
            onSort={handleSort}
          />
        </div>
      ) : (
        <CardView data={visibleSectors} />
      )}

      {filtered.length === 0 && (
        <div className="border border-dashed border-slate-300 bg-slate-50 py-12 text-center">
          <p className="text-sm text-slate-500">No sectors match the current filter.</p>
        </div>
      )}

      {/* Show more */}
      {filtered.length > INITIAL_COUNT && (
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[10px] text-slate-400">
            Showing {expanded ? filtered.length : INITIAL_COUNT} of {filtered.length} sectors
          </span>
          <button
            type="button"
            onClick={() => setExpanded((p) => !p)}
            className="group flex cursor-pointer items-center gap-2 border border-slate-300 bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-600 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            {expanded ? (
              <>
                Collapse
                <ChevronUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
              </>
            ) : (
              <>
                Show All {filtered.length}
                <ChevronDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  )
}
