import { Calendar, ChevronRight, Clock } from 'lucide-react'
import { whatsNext, whatsNextStats } from '@/data/whatsNext'

function TimelineItem({ item, isLast }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 bg-white">
          <span className="text-[9px] font-black text-brand-600">
            {item.day}
          </span>
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-slate-200" />}
      </div>

      <div className="flex flex-1 flex-col gap-2 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            {item.month} 2026
          </span>
          <span className="text-[9px] text-slate-300">·</span>
          <span className="text-[9px] font-medium text-slate-500">
            {item.category}
          </span>
          <span
            className={`rounded border px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider ${item.impactColor}`}
          >
            {item.impact} Impact
          </span>
        </div>
        <h3 className="text-[13px] font-semibold text-slate-900">
          {item.title}
        </h3>
        <p className="text-[11px] leading-relaxed text-slate-500">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function WhatsNextTimeline() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-3 border-b-2 border-slate-900 py-2">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
            What&apos;s Next
          </h2>
          <span className="flex items-center gap-1 text-[12px] text-slate-500">
            <Calendar className="size-3.5" aria-hidden="true" />
            <span className="font-semibold text-slate-900">
              {whatsNextStats.upcomingThisMonth}
            </span>{' '}
            upcoming
          </span>
          <span className="flex items-center gap-1 text-[12px] text-slate-500">
            <Clock className="size-3.5" aria-hidden="true" />
            Next:{' '}
            <span className="font-semibold text-slate-900">
              {whatsNextStats.nextReview}
            </span>
          </span>
        </div>
        <button
          type="button"
          className="flex shrink-0 cursor-pointer items-center gap-1 text-[9px] font-semibold text-brand-600 hover:underline"
        >
          Full Calendar
          <ChevronRight className="size-3" aria-hidden="true" />
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div>
          {whatsNext.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={index === whatsNext.length - 1}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="border border-slate-200 bg-white p-4">
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Key Dates Summary
            </h3>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-[11px] text-slate-600">
                  High Impact Events
                </span>
                <span className="font-mono text-[13px] font-bold text-red-500">
                  {whatsNextStats.highImpact}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-[11px] text-slate-600">
                  Reports Pending
                </span>
                <span className="font-mono text-[13px] font-bold text-amber-500">
                  {whatsNextStats.reportsPending}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-600">
                  Next CBSL Meeting
                </span>
                <span className="font-mono text-[11px] font-semibold text-slate-900">
                  Jul 15
                </span>
              </div>
            </div>
          </div>

          <div className="border border-secondary-900 bg-secondary-900 p-4 text-center">
            <p className="text-[9px] font-bold uppercase tracking-wider text-amber-400">
              Intelligence Calendar
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
              Get alerts for policy meetings, earnings dates and report releases.
            </p>
            <button
              type="button"
              className="mt-3 w-full cursor-pointer border-2 border-white bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-secondary-900 transition-colors hover:bg-transparent hover:text-white"
            >
              Enable Alerts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
