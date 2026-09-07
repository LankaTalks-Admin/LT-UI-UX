import { Link } from 'react-router-dom'
import { Clock, Flame } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { getRelatedStories } from '@/data/stories'
import { slugify } from '@/lib/slugify'

export default function RelatedStories({ story }) {
  const related = getRelatedStories(story, 3)

  if (related.length === 0) return null

  return (
    <section className="mt-10">
      <SectionTitle color="bg-brand-600" link={{ label: 'All Stories', href: '/stories' }}>
        Related News
      </SectionTitle>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <Link
            key={item.slug}
            to={`/post/${slugify(item.title)}`}
            className="group flex flex-col border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#000052]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-0 top-0 bg-secondary-900/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                {item.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                {item.title}
              </h3>
              <div className="mt-auto flex items-center gap-3 pt-3 text-[11px] font-medium text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="size-3" aria-hidden="true" />
                  {item.time}
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="size-3 text-orange-500" aria-hidden="true" />
                  {item.views.toLocaleString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
