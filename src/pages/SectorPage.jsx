import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import Breadcrumbs from '@/components/stories/Breadcrumbs'
import StoryGrid from '@/components/stories/StoryGrid'
import AdSlotRow from '@/components/ui/AdSlotRow'
import { getStoriesBySector } from '@/data/storyService'
import { getSectorBySlug } from '@/data/sectors'
import NotFoundPage from '@/pages/NotFoundPage'
import { cn } from '@/lib/cn'

const INITIAL_COUNT = 6
const LOAD_MORE_COUNT = 9

export default function SectorPage() {
  const { sectorSlug } = useParams()
  const sector = getSectorBySlug(sectorSlug)
  const [query, setQuery] = useState('')
  const [selectedSubSectors, setSelectedSubSectors] = useState(new Set())
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const allStories = sector ? getStoriesBySector(sectorSlug) : []

  const filteredStories = useMemo(() => {
    let stories = allStories
    if (selectedSubSectors.size > 0) {
      stories = stories.filter((s) => selectedSubSectors.has(s.subSector))
    }
    const q = query.trim().toLowerCase()
    if (q) {
      stories = stories.filter(
        (s) =>
          s.title?.toLowerCase().includes(q) ||
          s.excerpt?.toLowerCase().includes(q) ||
          s.author?.toLowerCase().includes(q) ||
          s.category?.toLowerCase().includes(q),
      )
    }
    return stories
  }, [allStories, query, selectedSubSectors])

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT)
  }, [query, selectedSubSectors])

  if (!sector) return <NotFoundPage />

  const toggleSubSector = (slug) => {
    setSelectedSubSectors((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      return next
    })
  }

  const clearFilters = () => {
    setQuery('')
    setSelectedSubSectors(new Set())
  }

  const hasFilters = query.trim() !== '' || selectedSubSectors.size > 0

  const handleShowMore = () => {
    setVisibleCount((count) => Math.min(count + LOAD_MORE_COUNT, filteredStories.length))
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Stories', to: '/stories' },
          { label: sector.name },
        ]}
      />

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <span className="h-6 w-1.5 bg-brand-600" aria-hidden="true" />
          <h1 className="text-xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-2xl">
            {sector.name}
          </h1>
        </div>
        <p className="text-sm text-slate-500">{sector.description}</p>
        <p className="mt-1 text-sm text-slate-500">
          {allStories.length} {allStories.length === 1 ? 'story' : 'stories'}
        </p>
      </div>

      {/* Search + Subsector Filters */}
      <div className="mb-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${sector.name} stories by title, author, category...`}
            className="w-full rounded-md border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Filter:
          </span>
          <button
            type="button"
            onClick={() => setSelectedSubSectors(new Set())}
            className={cn(
              'px-3 py-1.5 text-[11px] font-semibold transition-colors',
              selectedSubSectors.size === 0
                ? 'bg-secondary-900 text-white'
                : 'border border-slate-200 text-slate-600 hover:bg-slate-50',
            )}
          >
            All Sub Sectors
          </button>
          {sector.subSectors.map((sub) => (
            <button
              key={sub.slug}
              type="button"
              onClick={() => toggleSubSector(sub.slug)}
              className={cn(
                'px-3 py-1.5 text-[11px] font-semibold transition-colors',
                selectedSubSectors.has(sub.slug)
                  ? 'bg-brand-600 text-white'
                  : 'border border-slate-200 text-slate-600 hover:bg-slate-50',
              )}
            >
              {sub.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[12px] text-slate-500">
          Showing{' '}
          <span className="font-semibold text-slate-900">{filteredStories.length}</span> of{' '}
          <span className="font-semibold text-slate-900">{allStories.length}</span> stories
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-[11px] font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="relative z-0 mb-6">
        <StoryGrid
          stories={filteredStories.slice(0, INITIAL_COUNT)}
          emptyMessage={
            hasFilters
              ? `No stories match your filters in ${sector.name}.`
              : `No stories found in ${sector.name}.`
          }
        />
      </div>

      {filteredStories.length > INITIAL_COUNT && (
        <div className="relative z-0 my-6">
          <AdSlotRow />
        </div>
      )}

      {visibleCount > INITIAL_COUNT && (
        <div className="relative z-0 mb-6">
          <StoryGrid
            stories={filteredStories.slice(INITIAL_COUNT, visibleCount)}
            emptyMessage={`No stories found in ${sector.name}.`}
          />
        </div>
      )}

      {visibleCount < filteredStories.length && (
        <div className="mt-8 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={handleShowMore}
            className="bg-brand-600 px-8 py-3 text-[12px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
          >
            Show More Stories
          </button>
          <p className="text-[11px] text-slate-400">
            {filteredStories.length - visibleCount} more to explore
          </p>
        </div>
      )}
    </main>
  )
}