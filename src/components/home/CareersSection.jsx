import { Briefcase, ChevronRight, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '@/components/ui/SectionTitle'
import { careers } from '@/data/careers'

const filters = ['Jobs', 'Internships']
const VISIBLE_CAREERS = 6

export default function CareersSection() {
  const [activeFilter, setActiveFilter] = useState(null)

  const filteredCareers =
    activeFilter === 'Internships'
      ? careers.filter((job) => job.type === 'Internship')
      : activeFilter === 'Jobs'
        ? careers.filter((job) => job.type !== 'Internship')
        : careers

  const visibleCareers = filteredCareers.slice(0, VISIBLE_CAREERS)

  return (
    <section className="my-8">
      <SectionTitle
        color="bg-brand-600"
        link={{ label: 'View All Careers', href: '/careers' }}
        linkButton
        linkClassName="cursor-pointer bg-brand-600 px-3 py-1.5 text-[9px] font-semibold tracking-wider text-white hover:bg-brand-700"
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      >
        Careers
      </SectionTitle>

      <div className="grid gap-3 md:grid-cols-2">
        {visibleCareers.map((job) => (
          <a
            key={job.id}
            href="#"
            className="group flex items-start gap-4 border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#020617]"
          >
            <span
              className={`flex size-11 shrink-0 items-center justify-center border border-slate-200 text-sm font-black ${job.logo}`}
            >
              {job.company
                .split(' ')
                .map((w) => w[0])
                .join('')
                .slice(0, 2)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {job.company}
              </p>
              <h3 className="mt-0.5 text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                {job.role}
              </h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Briefcase className="size-3.5" aria-hidden="true" />
                  {job.type}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {job.location}
                </span>
                <span className="font-mono font-semibold text-slate-700">
                  {job.salary}
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
          to="/careers"
          className="shrink-0 cursor-pointer bg-brand-600 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
        >
          View All Careers
        </Link>
      </div>
    </section>
  )
}
