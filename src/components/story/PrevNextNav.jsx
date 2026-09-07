import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { slugify } from '@/lib/slugify'

export default function PrevNextNav({ prev, next }) {
  const getStoryLink = (story) => `/post/${slugify(story.title)}`

  return (
    <nav aria-label="Story navigation" className="grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link
          to={getStoryLink(prev)}
          className="group border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#000052]"
        >
          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <ChevronLeft className="size-3.5" aria-hidden="true" />
            Read Prev
          </span>
          <p className="mt-2 line-clamp-2 text-[14px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
            {prev.title}
          </p>
        </Link>
      ) : (
        <div className="border border-dashed border-slate-200 bg-slate-50 p-4 opacity-60">
          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <ChevronLeft className="size-3.5" aria-hidden="true" />
            Read Prev
          </span>
          <p className="mt-2 line-clamp-2 text-[14px] font-bold leading-snug text-slate-400">
            No previous story
          </p>
        </div>
      )}
      {next ? (
        <Link
          to={getStoryLink(next)}
          className="group border border-slate-200 bg-white p-4 text-right transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#000052]"
        >
          <span className="flex items-center justify-end gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Read Next
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </span>
          <p className="mt-2 line-clamp-2 text-[14px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
            {next.title}
          </p>
        </Link>
      ) : (
        <div className="border border-dashed border-slate-200 bg-slate-50 p-4 text-right opacity-60">
          <span className="flex items-center justify-end gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Read Next
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </span>
          <p className="mt-2 line-clamp-2 text-[14px] font-bold leading-snug text-slate-400">
            No next story
          </p>
        </div>
      )}
    </nav>
  )
}
