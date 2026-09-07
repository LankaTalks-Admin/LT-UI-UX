import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import { sectors } from '@/data/sectors'
import { cn } from '@/lib/cn'

export default function SectorFilter({
  activeSectorSlug,
  selectedSubSectors,
  onToggleSubSector,
  onClearAll,
}) {
  const [manualOpen, setManualOpen] = useState(null)
  const scrollRef = useRef(null)
  const sectorRefs = useRef({})

  useEffect(() => {
    const el = sectorRefs.current[activeSectorSlug]
    if (el) {
      el.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [activeSectorSlug])

  const hasSelection = selectedSubSectors.size > 0

  function isOpen(sector) {
    return manualOpen !== null ? manualOpen === sector.slug : activeSectorSlug === sector.slug
  }

  function toggleSector(slug) {
    setManualOpen(manualOpen === slug ? null : slug)
  }

  const activeSector = sectors.find((s) => s.slug === activeSectorSlug)

  return (
    <aside className="top-[120px] flex max-h-[calc(100vh-140px)] flex-col self-start lg:sticky">
      <div className="shrink-0 rounded border border-slate-200 bg-white p-2.5 shadow-sm">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
          Viewing
        </span>
        <h2 className="mt-0.5 text-[13px] font-extrabold text-slate-900">
          {activeSector?.name || 'Sectors'}
        </h2>
        {activeSector?.description && (
          <p className="mt-0.5 text-[10px] text-slate-500">
            {activeSector.description}
          </p>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between shrink-0">
        <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-500">
          All Sectors
        </h3>
        {hasSelection && (
          <button
            type="button"
            onClick={onClearAll}
            className="flex cursor-pointer items-center gap-1 text-[9px] font-semibold text-brand-600 hover:underline"
          >
            <X className="size-3" aria-hidden="true" />
            Clear
          </button>
        )}
      </div>

      <div ref={scrollRef} className="mt-1 space-y-0.5 overflow-y-auto">
        {sectors.map((sector) => {
          const open = isOpen(sector)
          const activeSector = activeSectorSlug === sector.slug
          const hasSelected = sector.subSectors.some((ss) =>
            selectedSubSectors.has(ss.slug),
          )

          return (
            <div key={sector.slug}>
              <button
                ref={(el) => { sectorRefs.current[sector.slug] = el }}
                type="button"
                onClick={() => toggleSector(sector.slug)}
                className={cn(
                  'flex w-full cursor-pointer items-center gap-2 rounded px-2.5 py-1.5 text-left text-[11px] font-semibold transition-colors',
                  activeSector
                    ? 'bg-brand-600 text-white'
                    : hasSelected
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                )}
              >
                {open ? (
                  <ChevronDown className="size-3 shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronRight className="size-3 shrink-0" aria-hidden="true" />
                )}
                <span className="truncate">{sector.name}</span>
                {hasSelected && (
                  <span className="ml-auto shrink-0 rounded-full bg-brand-600/10 px-1.5 py-0.5 text-[8px] font-bold text-brand-600">
                    {sector.subSectors.filter((ss) => selectedSubSectors.has(ss.slug)).length}
                  </span>
                )}
              </button>

              {open && (
                <div className="ml-3 border-l border-slate-200 pl-2 py-1 space-y-0.5">
                  {sector.subSectors.map((sub) => {
                    const selected = selectedSubSectors.has(sub.slug)
                    return (
                      <button
                        key={sub.slug}
                        type="button"
                        onClick={() => onToggleSubSector(sub.slug)}
                        className={cn(
                          'flex w-full cursor-pointer items-center rounded px-2 py-1 text-left text-[10px] transition-colors',
                          selected
                            ? 'bg-brand-600 font-semibold text-white'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800',
                        )}
                      >
                        <span className="truncate">{sub.name}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  )
}
