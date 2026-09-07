import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { sectors } from '@/data/sectors'
import { cn } from '@/lib/cn'

export default function SectorMegaMenu() {
  const { sectorSlug } = useParams()
  const [hovered, setHovered] = useState(null)
  const timer = useRef(null)
  const navRef = useRef(null)

  const open = useCallback((slug) => {
    clearTimeout(timer.current)
    setHovered(slug)
  }, [])

  const close = useCallback(() => {
    timer.current = setTimeout(() => setHovered(null), 140)
  }, [])

  const cancelClose = useCallback(() => {
    clearTimeout(timer.current)
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setHovered(null)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    return () => clearTimeout(timer.current)
  }, [])

  const highlightedSector = hovered || sectorSlug || null
  const expandedSector = hovered || null

  return (
    <div className="hidden lg:block" ref={navRef}>
      <div
        className="border-t border-slate-200 bg-slate-50"
        onMouseLeave={close}
      >
        <div className="mx-auto flex h-10 w-full max-w-7xl items-center gap-1 px-6">
          <span className="shrink-0 border-r border-slate-300 pr-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Sectors
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-0 overflow-x-auto">
            {sectors.map((sector) => (
              <div
                key={sector.slug}
                className="relative shrink-0"
                onMouseEnter={() => open(sector.slug)}
              >
                <Link
                  to={`/stories/${sector.slug}`}
                  onClick={() => setHovered(null)}
                  className={cn(
                    'flex items-center gap-0.5 whitespace-nowrap px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide transition-colors',
                    highlightedSector === sector.slug
                      ? 'bg-secondary-900 text-white'
                      : 'text-slate-600 hover:bg-slate-200 hover:text-secondary-900',
                  )}
                  aria-haspopup="true"
                  aria-expanded={highlightedSector === sector.slug}
                >
                  {sector.name}
                  <ChevronDown
                    className={cn(
                      'size-2.5 transition-transform',
                      highlightedSector === sector.slug && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {expandedSector && (() => {
        const sector = sectors.find((s) => s.slug === expandedSector)
        if (!sector) return null
        return (
          <div
            className="hidden border-t border-slate-200 bg-white shadow-lg lg:block"
            onMouseEnter={cancelClose}
            onMouseLeave={close}
            role="menu"
          >
            <div className="mx-auto max-w-7xl px-6 py-5">
              <div className="mb-3">
                <Link
                  to={`/stories/${sector.slug}`}
                  onClick={() => setHovered(null)}
                  className="text-sm font-extrabold uppercase tracking-wide text-secondary-900 hover:text-brand-700"
                >
                  {sector.name}
                </Link>
                <p className="mt-0.5 text-[11px] text-slate-500">{sector.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-x-8 gap-y-1 md:grid-cols-4">
                {sector.subSectors.map((sub) => (
                  <Link
                    key={sub.slug}
                    to={`/stories/${sector.slug}/${sub.slug}`}
                    onClick={() => setHovered(null)}
                    className="rounded px-2.5 py-1.5 text-[12px] text-slate-700 transition-colors hover:bg-secondary-900 hover:text-white"
                    role="menuitem"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
