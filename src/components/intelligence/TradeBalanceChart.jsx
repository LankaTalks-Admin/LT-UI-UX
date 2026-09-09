import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function TradeBalanceChart({ data }) {
  const max = Math.max(...data.imports)
  const totalImports = data.imports.reduce((a, b) => a + b, 0)
  const totalExports = data.exports.reduce((a, b) => a + b, 0)
  const deficit = totalImports - totalExports

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Trade Balance
        </h3>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[9px] font-medium text-slate-500">
            <span className="size-2 rounded-sm bg-brand-600" aria-hidden="true" />
            Imports
          </span>
          <span className="flex items-center gap-1 text-[9px] font-medium text-slate-500">
            <span className="size-2 rounded-sm bg-emerald-500" aria-hidden="true" />
            Exports
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded border border-slate-100 bg-slate-50 px-3 py-2">
          <span className="text-[8px] uppercase tracking-wider text-slate-400">Imports</span>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-[14px] font-bold text-slate-900">
              ${totalImports.toFixed(1)}
            </span>
            <span className="text-[9px] text-slate-500">Bn</span>
          </div>
        </div>
        <div className="rounded border border-slate-100 bg-slate-50 px-3 py-2">
          <span className="text-[8px] uppercase tracking-wider text-slate-400">Exports</span>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-[14px] font-bold text-emerald-600">
              ${totalExports.toFixed(1)}
            </span>
            <span className="text-[9px] text-slate-500">Bn</span>
          </div>
        </div>
        <div className="rounded border border-brand-100 bg-brand-50 px-3 py-2">
          <span className="text-[8px] uppercase tracking-wider text-brand-400">Deficit</span>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-[14px] font-bold text-brand-600">
              -${deficit.toFixed(1)}
            </span>
            <span className="text-[9px] text-slate-500">Bn</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {[100, 75, 50, 25].map((pct) => (
          <div
            key={pct}
            className="absolute w-full border-t border-dashed border-slate-100"
            style={{ bottom: `${pct}%` }}
          />
        ))}

        <div className="relative flex items-end gap-3" style={{ height: '140px' }}>
          {data.months.map((month, i) => (
            <div key={month} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex w-full items-end gap-0.5" style={{ height: '140px' }}>
                <div
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-700 to-brand-500 transition-all duration-500"
                  style={{ height: `${(data.imports[i] / max) * 100}%` }}
                />
                <div
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all duration-500"
                  style={{ height: `${(data.exports[i] / max) * 100}%` }}
                />
              </div>
              <span className="text-[9px] font-medium text-slate-500">{month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={cn(
        'mt-1 flex flex-wrap items-center justify-between gap-2 rounded border border-slate-100 bg-slate-50 px-3 py-2',
      )}>
        <div className="flex items-center gap-2">
          <ArrowDownRight className="size-3.5 text-brand-500" aria-hidden="true" />
          <span className="text-[10px] font-semibold text-slate-600">
            Trade deficit: <span className="font-mono text-brand-600">-${deficit.toFixed(1)}B</span> (YTD)
          </span>
        </div>
        <span className="text-[9px] text-slate-400">
          {data.months[0]} — {data.months[data.months.length - 1]} 2026
        </span>
      </div>
    </div>
  )
}
