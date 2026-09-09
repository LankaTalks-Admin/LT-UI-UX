import { TrendingUp } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function BarChart({ data, title, unit = '', color = 'bg-brand-600', maxValue }) {
  const max = maxValue || Math.max(...data.map((d) => d.value))
  const avg = (data.reduce((s, d) => s + d.value, 0) / data.length).toFixed(1)
  const latest = data[data.length - 1].value
  const prev = data[data.length - 2]?.value ?? latest
  const change = ((latest - prev) / prev * 100).toFixed(1)
  const isPositive = Number(change) >= 0

  return (
    <div className="flex flex-col gap-3">
      {title && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[10px] text-slate-500">
              Avg: <span className="font-mono font-semibold text-slate-700">{avg}{unit}</span>
            </span>
            <span
              className={cn(
                'flex items-center gap-0.5 text-[10px] font-semibold',
                isPositive ? 'text-emerald-600' : 'text-brand-600',
              )}
            >
              <TrendingUp className="size-3" aria-hidden="true" />
              {isPositive ? '+' : ''}{change}%
            </span>
          </div>
        </div>
      )}

      <div className="relative">
        {[100, 75, 50, 25].map((pct) => (
          <div
            key={pct}
            className="absolute w-full border-t border-dashed border-slate-100"
            style={{ bottom: `${pct}%` }}
          />
        ))}

        <div className="relative flex items-end gap-2" style={{ height: '160px' }}>
          {data.map((d, i) => {
            const height = Math.round((d.value / max) * 100)
            const isLatest = i === data.length - 1
            return (
              <div key={d.label} className="group relative flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 rounded-t-sm transition-all duration-500',
                    isLatest
                      ? 'bg-gradient-to-t from-brand-700 to-brand-500 shadow-sm shadow-brand-200'
                      : 'bg-gradient-to-t from-slate-300 to-slate-200 group-hover:from-brand-600/60 group-hover:to-brand-400/60',
                  )}
                  style={{ height: `${height}%` }}
                />
                <span
                  className={cn(
                    'relative z-10 font-mono text-[10px] font-bold',
                    isLatest ? 'text-brand-700' : 'text-slate-600',
                  )}
                >
                  {d.value}{unit}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-between px-0.5">
        {data.map((d, i) => {
          const isLatest = i === data.length - 1
          return (
            <span
              key={d.label}
              className={cn(
                'text-[9px] font-medium',
                isLatest ? 'font-bold text-brand-700' : 'text-slate-500',
              )}
            >
              {d.label}
            </span>
          )
        })}
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 rounded border border-slate-100 bg-slate-50 px-3 py-2">
        <span className="text-[9px] uppercase tracking-wider text-slate-400">Latest</span>
        <span className="font-mono text-[13px] font-bold text-slate-900">
          {latest}{unit}
        </span>
        <span className="text-[9px] text-slate-400">|</span>
        <span className="text-[9px] uppercase tracking-wider text-slate-400">Period</span>
        <span className="text-[10px] font-semibold text-slate-600">
          {data[0].label} — {data[data.length - 1].label}
        </span>
      </div>
    </div>
  )
}
