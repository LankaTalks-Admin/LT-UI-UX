import { Eye, Flame } from 'lucide-react'
import { mostPopular } from '@/data/mostPopular'

export default function MostPopularWidget() {
  return (
    <div className="border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b-2 border-secondary-900 bg-secondary-900 px-4 py-2.5">
        <Flame className="size-4 text-amber-400" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Most Popular
        </h3>
      </div>
      <ol className="divide-y divide-slate-100">
        {mostPopular.map((item, i) => (
          <li key={item.id}>
            <a href="#" className="group flex gap-3 p-3.5 transition-colors hover:bg-slate-50">
              <span className="w-6 shrink-0 font-serif text-2xl font-black text-slate-300 transition-colors group-hover:text-brand-700">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                  {item.title}
                </p>
                <p className="mt-1 flex items-center gap-2 text-[11px] font-medium text-slate-500">
                  <span className="uppercase tracking-wider">{item.category}</span>
                  <span className="flex items-center gap-0.5">
                    <Eye className="size-3" aria-hidden="true" />
                    {item.views}
                  </span>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
