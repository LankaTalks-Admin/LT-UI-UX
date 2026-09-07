import { cn } from '@/lib/cn'

export default function StatCard({ stat }) {
  const isPositive = !String(stat.delta).startsWith('-')

  return (
    <div className="flex flex-col justify-between border border-slate-800 bg-white p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          {stat.label}
        </p>
        {stat.badge && (
          <span className="inline-flex items-center gap-1 bg-brand-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            <span
              className="size-1.5 animate-live-pulse rounded-full bg-white"
              aria-hidden="true"
            />
            {stat.badge}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-end justify-between gap-2">
        <span className="font-mono text-3xl font-bold leading-none text-slate-900">
          {stat.value}
        </span>
        <span
          className={cn(
            'font-mono text-sm font-semibold',
            isPositive ? 'text-emerald-600' : 'text-red-600',
          )}
        >
          {stat.delta}
        </span>
      </div>
      <p className="mt-2 text-[11px] font-medium text-slate-500">{stat.sub}</p>
    </div>
  )
}
