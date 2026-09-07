import { Clock, Lock, User } from 'lucide-react'
import { deepDives, deepDivesStats } from '@/data/deepDives'

function FeaturedDive({ item }) {
  return (
    <div className="group cursor-pointer overflow-hidden border border-slate-200 bg-white transition-all hover:border-brand-600/30 hover:shadow-sm">
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-block bg-brand-600 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
            {item.category}
          </span>
          <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-white group-hover:text-red-200 transition-colors">
            {item.headline}
          </h3>
        </div>
        {item.locked && (
          <div className="absolute right-3 top-3">
            <Lock className="size-4 text-white/70" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="mb-3 text-[11px] leading-relaxed text-slate-500 line-clamp-2">
          {item.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[9px] text-slate-500">
              <User className="size-3" aria-hidden="true" />
              {item.author}
            </span>
            <span className="flex items-center gap-1 text-[9px] text-slate-500">
              <Clock className="size-3" aria-hidden="true" />
              {item.readTime}
            </span>
          </div>
          <span className="text-[9px] text-slate-400">{item.date}</span>
        </div>
      </div>
    </div>
  )
}

function DiveCard({ item }) {
  return (
    <div className="group flex cursor-pointer gap-3 border-b border-slate-100 py-3 transition-colors last:border-0 hover:bg-slate-50/50">
      <div className="relative h-16 w-20 shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.locked && (
          <Lock
            className="absolute right-1 top-1 size-3 text-white/70"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-[9px] font-medium text-brand-600/80">
          {item.sector}
        </span>
        <h3 className="text-[12px] font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-600 line-clamp-2">
          {item.headline}
        </h3>
        <div className="mt-auto flex items-center gap-2">
          <span className="text-[9px] text-slate-400">{item.readTime}</span>
          <span className="text-[9px] text-slate-300">·</span>
          <span className="text-[9px] text-slate-400">{item.date}</span>
        </div>
      </div>
    </div>
  )
}

export default function DeepDivesSection() {
  const featured = deepDives.find((d) => d.featured)
  const others = deepDives.filter((d) => !d.featured)

  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-3 border-b-2 border-slate-900 py-2">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
            Deep Dives From Our Stories
          </h2>
          <span className="text-[12px] text-slate-500">
            <span className="font-semibold text-slate-900">
              {deepDivesStats.total}
            </span>{' '}
            reports
          </span>
          <span className="text-[12px] text-slate-500">
            Avg.{' '}
            <span className="font-semibold text-slate-900">
              {deepDivesStats.avgReadTime}
            </span>{' '}
            read
          </span>
        </div>
        <button
          type="button"
          className="shrink-0 cursor-pointer bg-brand-600 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
        >
          All Deep Dives
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        {featured && <FeaturedDive item={featured} />}

        <div className="flex flex-col">
          <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Recent Deep Dives
          </h3>
          {others.map((item) => (
            <DiveCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
