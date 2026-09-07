import { Clock, Newspaper } from 'lucide-react'
import { allStories, getStoryUrl } from '@/data/stories'

export default function RecentNewsWidget() {
  const recent = allStories.slice(0, 5)

  return (
    <div className="border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b-2 border-secondary-900 bg-secondary-900 px-4 py-2.5">
        <Newspaper className="size-4 text-amber-400" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Recent News
        </h3>
      </div>
      <div className="divide-y divide-slate-100">
        {recent.map((item) => (
          <a
            key={item.slug}
            href={getStoryUrl(item)}
            className="group flex gap-3 p-3.5 transition-colors hover:bg-slate-50"
          >
            <div className="size-[72px] shrink-0 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-700">
                {item.category}
              </p>
              <h4 className="mt-1 line-clamp-2 text-[13px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                {item.title}
              </h4>
              <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <Clock className="size-3" aria-hidden="true" />
                {item.time}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
