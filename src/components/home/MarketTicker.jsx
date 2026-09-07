import { TrendingDown, TrendingUp } from 'lucide-react'
import { marketTicker } from '@/data/marketTicker'
import { cn } from '@/lib/cn'

export default function MarketTicker() {
  const items = [...marketTicker, ...marketTicker]

  return (
    <div className="overflow-hidden border-b border-slate-800 bg-secondary-900">
      <div className="mx-auto flex max-w-[1280px] items-stretch">
        <div className="flex shrink-0 items-center gap-2 border-r border-slate-800 px-4 py-2.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-live-pulse bg-brand-500" />
            <span className="relative inline-flex size-2 bg-brand-600" />
          </span>
          <span className="text-[11px] font-black uppercase tracking-widest text-white">
            Live
          </span>
        </div>
        <div className="flex flex-1 items-center overflow-hidden">
          <div className="flex w-max animate-marquee items-center whitespace-nowrap">
            {items.map((m, index) => {
              const up = m.change >= 0
              return (
                <div
                  key={`${m.label}-${index}`}
                  className="flex shrink-0 items-center gap-2 border-r border-slate-800 px-3 py-2.5"
                >
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    {m.label}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-white">
                    {m.value}
                    {m.unit ? (
                      <span className="ml-1 font-medium text-slate-400">{m.unit}</span>
                    ) : null}
                  </span>
                  <span
                    className={cn(
                      'flex items-center gap-0.5 font-mono text-[10px] font-semibold',
                      up ? 'text-emerald-400' : 'text-red-400',
                    )}
                  >
                    {up ? (
                      <TrendingUp className="size-2.5" aria-hidden="true" />
                    ) : (
                      <TrendingDown className="size-2.5" aria-hidden="true" />
                    )}
                    {up ? '+' : ''}
                    {m.change}%
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
