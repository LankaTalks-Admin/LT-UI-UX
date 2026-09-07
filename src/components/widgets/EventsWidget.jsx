import { ArrowRight, Calendar } from 'lucide-react'
import { events } from '@/data/events'

export default function EventsWidget() {
  return (
    <div className="border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b-2 border-secondary-900 bg-secondary-900 px-4 py-2.5">
        <Calendar className="size-4 text-amber-400" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Upcoming Events
        </h3>
      </div>
      <div className="divide-y divide-slate-100">
        {events.map((e) => (
          <a
            key={e.id}
            href="#"
            className="group flex gap-3 p-3.5 transition-colors hover:bg-slate-50"
          >
            <div className="flex w-11 shrink-0 flex-col items-center justify-center border border-slate-200 bg-slate-50">
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">
                {e.month}
              </span>
              <span className="font-mono text-lg font-bold leading-none text-slate-900">
                {e.day}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                {e.title}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">{e.venue}</p>
            </div>
          </a>
        ))}
      </div>
      <a
        href="#"
        className="group flex items-center justify-center gap-1.5 border-t-2 border-slate-200 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
      >
        View All
        <ArrowRight
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}
