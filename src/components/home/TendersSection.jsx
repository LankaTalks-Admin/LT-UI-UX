import { Calendar, ChevronRight, Flame, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '@/components/ui/SectionTitle'
import { tenders } from '@/data/tenders'

const VISIBLE_TENDERS = 6

export default function TendersSection() {
  return (
    <section className="my-8">
      <SectionTitle
        color="bg-brand-600"
        link={{ label: 'View All Tenders', href: '/tenders' }}
        linkButton
        linkClassName="cursor-pointer bg-brand-600 px-3 py-1.5 text-[9px] font-semibold tracking-wider text-white hover:bg-brand-700"
      >
        Tenders
      </SectionTitle>

      <div className="grid gap-3 md:grid-cols-2">
        {tenders.slice(0, VISIBLE_TENDERS).map((t) => (
          <a
            key={t.id}
            href="#"
            className="group flex items-start gap-4 border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#020617]"
          >
            <span
              className={`flex size-11 shrink-0 items-center justify-center border text-sm font-black ${t.sectorColor}`}
            >
              {t.institution
                .split(' ')
                .map((w) => w[0])
                .join('')
                .slice(0, 2)}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                {t.isNew && (
                  <span className="shrink-0 bg-brand-600 px-1.5 py-0.5 text-[8px] font-semibold text-white">
                    New
                  </span>
                )}
                {t.isUrgent && (
                  <span className="flex shrink-0 items-center gap-0.5 text-[8px] font-semibold text-orange-600">
                    <Flame className="size-2.5" aria-hidden="true" />
                    Urgent
                  </span>
                )}
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {t.institution}
                </p>
              </div>
              <h3 className="mt-0.5 text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                {t.title}
              </h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Tag className="size-3.5" aria-hidden="true" />
                  {t.sector}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3.5" aria-hidden="true" />
                  {t.deadline}
                </span>
                <span className="font-mono font-semibold text-slate-700">
                  {t.value}
                </span>
              </div>
            </div>
            <ChevronRight
              className="mt-1 size-5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-700"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center">
        <Link
          to="/tenders"
          className="shrink-0 cursor-pointer bg-brand-600 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
        >
          View All Tenders
        </Link>
      </div>
    </section>
  )
}
