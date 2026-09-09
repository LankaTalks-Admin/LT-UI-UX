import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function LineSparkline({ data, title, color = 'bg-brand-600', suffix = '%' }) {
  const max = Math.max(...data.map((d) => d.value))
  const min = Math.min(...data.map((d) => d.value))
  const range = max - min || 1
  const latest = data[data.length - 1].value
  const prev = data[data.length - 2]?.value ?? latest
  const change = latest - prev
  const isPositive = change >= 0

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - ((d.value - min) / range) * 70 - 15
    return { x, y, value: d.value, label: d.label }
  })

  const pathD = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(' ')

  const areaD = `${pathD} L 100 100 L 0 100 Z`

  const maxPoint = points.reduce((a, b) => (b.value > a.value ? b : a))
  const minPoint = points.reduce((a, b) => (b.value < a.value ? b : a))

  return (
    <div className="flex flex-col gap-3">
      {title && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[15px] font-bold text-slate-900">
              {latest}{suffix}
            </span>
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
              {isPositive ? '+' : ''}{change.toFixed(1)}{suffix}
            </span>
          </div>
        </div>
      )}

      <div className="relative h-[180px] w-full">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id={`sparkline-grad-${title}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-brand-600)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--color-brand-600)" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <polygon points={areaD} fill={`url(#sparkline-grad-${title})`} />
          <path d={pathD} fill="none" stroke="var(--color-brand-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i === points.length - 1 ? 2.5 : 1.5}
              fill={i === points.length - 1 ? 'var(--color-brand-600)' : 'white'}
              stroke="var(--color-brand-600)"
              strokeWidth={i === points.length - 1 ? 0 : 0.8}
            />
          ))}

          <circle cx={maxPoint.x} cy={maxPoint.y} r="2" fill="var(--color-brand-600)" />
          <circle cx={minPoint.x} cy={minPoint.y} r="2" fill="var(--color-brand-600)" />
        </svg>

        <div
          className="absolute flex items-center gap-1 rounded bg-white px-1.5 py-0.5 text-[8px] font-bold text-slate-700 shadow-sm"
          style={{ left: `${maxPoint.x}%`, top: `${maxPoint.y - 12}%`, transform: 'translateX(-50%)' }}
        >
          <ArrowUpRight className="size-2.5 text-emerald-500" aria-hidden="true" />
          {maxPoint.value}{suffix}
        </div>
        <div
          className="absolute flex items-center gap-1 rounded bg-white px-1.5 py-0.5 text-[8px] font-bold text-slate-700 shadow-sm"
          style={{ left: `${minPoint.x}%`, top: `${minPoint.y + 8}%`, transform: 'translateX(-50%)' }}
        >
          <ArrowDownRight className="size-2.5 text-brand-500" aria-hidden="true" />
          {minPoint.value}{suffix}
        </div>
      </div>

      <div className="flex justify-between px-1">
        {data.map((d) => (
          <span key={d.label} className="text-[9px] font-medium text-slate-500">
            {d.label}
          </span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-3 gap-2 rounded border border-slate-100 bg-slate-50 px-3 py-2">
        <div>
          <span className="text-[8px] uppercase tracking-wider text-slate-400">Latest</span>
          <p className="font-mono text-[12px] font-bold text-slate-900">{latest}{suffix}</p>
        </div>
        <div>
          <span className="text-[8px] uppercase tracking-wider text-slate-400">High</span>
          <p className="font-mono text-[12px] font-bold text-emerald-600">{max}{suffix}</p>
        </div>
        <div>
          <span className="text-[8px] uppercase tracking-wider text-slate-400">Low</span>
          <p className="font-mono text-[12px] font-bold text-brand-600">{min}{suffix}</p>
        </div>
      </div>
    </div>
  )
}
