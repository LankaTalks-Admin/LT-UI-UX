import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { sectors } from '@/data/sectors'
import { cn } from '@/lib/cn'

export default function MobileSectorNav({ onNavigate }) {
  const { sectorSlug } = useParams()
  const [expanded, setExpanded] = useState(null)

  const toggle = (slug) => {
    setExpanded(expanded === slug ? null : slug)
  }

  return (
    <div className="space-y-0.5 lg:hidden">
      <button
        type="button"
        className="flex w-full items-center justify-between px-2.5 py-2 text-[12px] font-bold uppercase tracking-wide text-slate-500"
        onClick={() => setExpanded(expanded === '__all__' ? null : '__all__')}
      >
        All Sectors
        <ChevronDown
          className={cn(
            'size-4 transition-transform',
            expanded === '__all__' && 'rotate-180',
          )}
        />
      </button>
      {expanded === '__all__' && (
        <div className="flex flex-wrap gap-1 px-2 pb-2">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              to={`/stories/${sector.slug}`}
              onClick={onNavigate}
              className={cn(
                'rounded px-2.5 py-1 text-[11px] font-semibold transition-colors',
                sectorSlug === sector.slug
                  ? 'bg-secondary-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
              )}
            >
              {sector.name}
            </Link>
          ))}
        </div>
      )}

      {sectors.map((sector) => (
        <div key={sector.slug}>
          <div className="flex items-center">
            <Link
              to={`/stories/${sector.slug}`}
              onClick={onNavigate}
              className={cn(
                'flex-1 px-2.5 py-2 text-[12px] font-semibold transition-colors',
                sectorSlug === sector.slug
                  ? 'text-brand-700'
                  : 'text-slate-700',
              )}
            >
              {sector.name}
            </Link>
            <button
              type="button"
              onClick={() => toggle(sector.slug)}
              className="px-2.5 py-2 text-slate-400"
              aria-label={`Expand ${sector.name}`}
            >
              <ChevronDown
                className={cn(
                  'size-3.5 transition-transform',
                  expanded === sector.slug && 'rotate-180',
                )}
              />
            </button>
          </div>
          {expanded === sector.slug && (
            <div className="flex flex-wrap gap-1 px-2 pb-2">
              {sector.subSectors.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/stories/${sector.slug}/${sub.slug}`}
                  onClick={onNavigate}
                  className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 hover:bg-secondary-900 hover:text-white"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
