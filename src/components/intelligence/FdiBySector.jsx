import { ArrowUpRight } from 'lucide-react'

export default function FdiBySector({ data }) {
  const max = Math.max(...data.map((d) => d.value))
  const total = data.reduce((s, d) => s + d.value, 0)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          FDI by Sector
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[13px] font-bold text-slate-900">
            ${total}M
          </span>
          <span className="flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600">
            <ArrowUpRight className="size-3" aria-hidden="true" />
            +18%
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {data.map((d) => {
          const pct = ((d.value / total) * 100).toFixed(1)
          return (
            <div key={d.label} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-700">
                  {d.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[12px] font-bold text-slate-900">
                    ${d.value}M
                  </span>
                  <span className="text-[9px] font-semibold text-slate-400">
                    {pct}%
                  </span>
                </div>
              </div>
              <div className="relative h-2.5 overflow-hidden bg-slate-100">
                <div
                  className={`${d.color} absolute inset-y-0 left-0 rounded-r-sm transition-all duration-700`}
                  style={{ width: `${(d.value / max) * 100}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-1 grid grid-cols-3 gap-2 rounded border border-slate-100 bg-slate-50 px-3 py-2">
        <div className="min-w-0">
          <span className="text-[8px] uppercase tracking-wider text-slate-400">Total FDI</span>
          <p className="font-mono text-[12px] font-bold text-slate-900">${total}M</p>
        </div>
        <div className="min-w-0">
          <span className="text-[8px] uppercase tracking-wider text-slate-400">Top Sector</span>
          <p className="truncate text-[11px] font-semibold text-slate-900">{data[0].label}</p>
        </div>
        <div className="min-w-0">
          <span className="text-[8px] uppercase tracking-wider text-slate-400">Sectors</span>
          <p className="font-mono text-[12px] font-bold text-slate-900">{data.length}</p>
        </div>
      </div>
    </div>
  )
}
