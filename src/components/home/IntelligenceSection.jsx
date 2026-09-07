import { BarChart2, ChevronRight, FileText, LineChart, Lock } from 'lucide-react'
import { intelligenceCounts, intelligenceItems } from '@/data/intelligence'

const icons = {
  chart: BarChart2,
  doc: FileText,
  line: LineChart,
}

function IntelCard({ item }) {
  const Icon = icons[item.icon] ?? FileText

  return (
    <div className="group relative flex cursor-pointer flex-col gap-3 border border-slate-200 bg-white p-4 transition-all hover:border-brand-600/30 hover:shadow-sm">
      {item.locked && (
        <Lock
          className="absolute right-3.5 top-3.5 size-3.5 text-slate-400/60"
          aria-hidden="true"
        />
      )}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-medium ${item.typeColor}`}
        >
          <Icon className="size-3.5" aria-hidden="true" />
          {item.type}
        </span>
        <span className="text-[10px] font-medium text-brand-600/80">
          {item.sector}
        </span>
      </div>
      <h3 className="pr-4 text-[13px] font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-600">
        {item.headline}
      </h3>
      <p className="flex-1 text-[11px] leading-relaxed text-slate-500 line-clamp-2">
        {item.excerpt}
      </p>
      <div className="flex items-center justify-between border-t border-slate-200 pt-1">
        <span className="text-[9px] text-slate-500">
          {item.date} · {item.length}
        </span>
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1 text-[9px] font-semibold text-brand-600 hover:underline"
        >
          Subscribe to Read
          <ChevronRight className="size-3" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default function IntelligenceSection() {
  return (
    <section className="my-8">
      <div className="mb-4 flex items-center justify-between gap-3 border-b-2 border-slate-900 py-2">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
            Intelligence
          </h2>
          <span className="text-[12px] text-slate-500 ml-10">
            <span className="font-semibold text-slate-900">
              {intelligenceCounts.sectorBriefs}
            </span>{' '}
            sector briefs
          </span>
          <span className="text-[12px] text-slate-500">
            <span className="font-semibold text-slate-900">
              {intelligenceCounts.businessBriefs}
            </span>{' '}
            business briefs
          </span>
          <span className="text-[12px] text-slate-500">
            <span className="font-semibold text-slate-900">
              {intelligenceCounts.dataIntel}
            </span>{' '}
            data intel
          </span>
        </div>
        <button
          type="button"
          className="shrink-0 cursor-pointer bg-brand-600 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
        >
          Subscribers Only - View All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {intelligenceItems.map((item) => (
          <IntelCard key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          type="button"
          className="shrink-0 cursor-pointer bg-brand-600 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
        >
          Get Intelligence Access
        </button>
      </div>
    </section>
  )
}
