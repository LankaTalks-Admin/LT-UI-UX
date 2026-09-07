import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'
import { cn } from '@/lib/cn'
import { slugify } from '@/lib/slugify'

export default function StoryCard({ story, layout = 'grid' }) {
  const storyLink = `/post/${slugify(story.title)}`

  if (layout === 'list') {
    return (
      <Link
        to={storyLink}
        className="group flex gap-4 border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#000052]"
      >
        <div className="relative h-28 w-36 shrink-0 overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
              {story.title}
            </h3>
            {story.excerpt && (
              <p className="mt-1 line-clamp-2 text-xs text-slate-500">{story.excerpt}</p>
            )}
          </div>
          <div className="mt-2 flex items-center gap-3 text-[11px] font-medium text-slate-500">
            {story.author && <span>{story.author}</span>}
            <span className="flex items-center gap-1">
              <Clock className="size-3" aria-hidden="true" />
              {story.time}
            </span>
            <span>{story.readTime}</span>
          </div>
        </div>
        <ArrowUpRight className="size-4 shrink-0 self-start text-slate-300 transition-all group-hover:text-brand-700" aria-hidden="true" />
      </Link>
    )
  }

  return (
    <Link
      to={storyLink}
      className="group flex h-full flex-col border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#000052]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 bg-secondary-900/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {story.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className={cn(
          'font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700',
          'text-base',
        )}>
          {story.title}
        </h3>
        {story.excerpt && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {story.excerpt}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[11px] font-medium text-slate-500">
          <div className="flex min-w-0 items-center gap-2">
            {story.author && (
              <>
                <span className="truncate">{story.author}</span>
                <span className="size-0.5 shrink-0 bg-slate-400" aria-hidden="true" />
              </>
            )}
            <span className="flex shrink-0 items-center gap-1">
              <Clock className="size-3" aria-hidden="true" />
              {story.time}
            </span>
            <span className="shrink-0">{story.readTime}</span>
          </div>
          <ArrowUpRight
            className="size-4 shrink-0 text-slate-300 transition-all group-hover:text-brand-700"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  )
}
