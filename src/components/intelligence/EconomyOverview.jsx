import { ArrowDownRight, ArrowUpRight, Landmark, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/cn'

const icons = {
  'Policy Rate': Landmark,
  'GDP Growth': TrendingUp,
}

export default function EconomyOverview({ indicators }) {
  return (
    <div className="rounded border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b-2 border-brand-600 px-5 py-2.5">
        <div className="size-2 rounded-full bg-brand-600" />
        <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-900">
          Key Economic Indicators
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-px bg-slate-100 md:grid-cols-3 lg:grid-cols-6">
        {indicators.map((stat) => {
          const isPositive = !stat.delta.startsWith('-') && stat.delta !== '0.00%'
          const Icon = icons[stat.label] ?? TrendingUp

          return (
            <div
              key={stat.label}
              className="group flex flex-col gap-1.5 bg-white p-4 transition-colors hover:bg-slate-50/80"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {stat.label}
                </span>
                {stat.badge && (
                  <span
                    className={cn(
                      'px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider',
                      stat.badge === 'Live'
                        ? 'bg-brand-600/10 text-brand-600'
                        : 'bg-emerald-50 text-emerald-600',
                    )}
                  >
                    {stat.badge}
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[22px] font-light tracking-tight text-slate-900 transition-colors group-hover:text-brand-700">
                  {stat.value}
                </span>
                <span
                  className={cn(
                    'flex items-center gap-0.5 text-[10px] font-semibold',
                    isPositive ? 'text-emerald-600' : stat.delta === '0.00%' ? 'text-slate-400' : 'text-brand-600',
                  )}
                >
                  {stat.delta === '0.00%' ? null : isPositive ? (
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  ) : (
                    <ArrowDownRight className="size-3" aria-hidden="true" />
                  )}
                  {stat.delta}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500">{stat.sub}</span>
                <Icon className="size-3.5 text-slate-300 transition-colors group-hover:text-brand-400" aria-hidden="true" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
