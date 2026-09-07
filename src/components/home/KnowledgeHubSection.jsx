import { ChevronRight, Download, Lock } from 'lucide-react'
import { hubStats, reports } from '@/data/reports'

export default function KnowledgeHubSection() {
  return (
    <section id="knowledge-hub" className="my-8 scroll-mt-40">
      <div className="mb-4 flex items-center justify-between border-b-2 border-slate-900 py-2">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
            Knowledge Hub
          </h2>
          {hubStats.map((s) => (
            <span key={s.label} className="text-[12px] text-slate-500">
              <span className="font-semibold text-slate-900">{s.value}</span> {s.label}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="shrink-0 cursor-pointer bg-brand-600 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-700 flex"
        >
          Full Library
          <ChevronRight className="size-3" aria-hidden="true" />
        </button>
      </div>

      <div className="divide-y divide-slate-200 overflow-hidden border border-slate-200">
        {reports.map((r) => (
          <div
            key={r.id}
            className="group flex cursor-pointer items-start gap-4 px-4 py-3.5 transition-colors hover:bg-brand-600/[0.03]"
          >
            <div
              className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded border ${r.typeColor}`}
            >
              <r.typeIcon className="size-3.5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex items-start justify-between gap-3">
                <h3 className="flex-1 text-[13px] font-medium leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                  {r.title}
                </h3>
                {r.locked && (
                  <Lock className="mt-0.5 size-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-medium ${r.typeColor}`}
                >
                  <r.typeIcon className="size-3" aria-hidden="true" />
                  {r.type}
                </span>
                <span className="text-[10px] text-slate-500">{r.date}</span>
                <span className="text-[10px] text-slate-500">{r.pages}</span>
                <span className="bg-slate-100 px-1.5 py-0.5 text-[9px] text-slate-500">
                  {r.sector}
                </span>
                <span className="ml-auto flex items-center gap-1 text-[10px] text-slate-500">
                  <Download className="size-2.5" aria-hidden="true" />
                  {r.downloads}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
