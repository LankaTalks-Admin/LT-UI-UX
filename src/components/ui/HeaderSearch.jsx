import { useEffect, useRef, useState } from 'react'
import { Search, TrendingUp } from 'lucide-react'

const popularSearches = [
  'IMF Programme',
  'Apparel Exports',
  'Banking Sector',
  'Foreign Investment',
  'Tourism',
  'Cement Prices',
  'Startups',
  'Education',
]

export default function HeaderSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div ref={panelRef}>
      <button
        type="button"
        aria-label={open ? 'Close search' : 'Search'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-slate-600 transition-colors hover:bg-slate-100"
      >
        <Search className="size-5" aria-hidden="true" />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 border-b border-slate-200 bg-white shadow-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <form
              className="flex items-center gap-2 pt-3 pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="header-search-input" className="sr-only">
                Search
              </label>
              <input
                id="header-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                autoFocus
                className="w-full border border-slate-200 px-3 py-2 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-secondary-900 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="flex size-9 shrink-0 items-center justify-center bg-secondary-900 text-white transition-colors hover:bg-brand-600"
              >
                <Search className="size-4" aria-hidden="true" />
              </button>
            </form>

            <div className="border-t border-slate-100 py-3">
              <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <TrendingUp className="size-3" aria-hidden="true" />
                Frequently Searched
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-colors hover:border-secondary-900 hover:bg-secondary-900 hover:text-white"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}