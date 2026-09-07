import { useMemo, useState, useCallback } from 'react'
import AdBanner from '@/components/ui/AdBanner'
import AdPlaceholder from '@/components/ui/AdPlaceholder'
import HeroSection from '@/components/home/HeroSection'
import SectionGrid from '@/components/home/SectionGrid'
import Sidebar from '@/components/widgets/Sidebar'
import SectorFilter from '@/components/stories/SectorFilter'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { advertiseAd, subscribeAd, adSlots } from '@/data/ads'
import { sectorStories } from '@/data/sectorStories'

export default function StoriesPage() {
  const sectorIds = useMemo(() => sectorStories.map((s) => s.slug), [])
  const activeSectorSlug = useScrollSpy(sectorIds)

  const [selectedSubSectors, setSelectedSubSectors] = useState(new Set())

  const handleToggleSubSector = useCallback((slug) => {
    setSelectedSubSectors((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      return next
    })
  }, [])

  const handleClearAll = useCallback(() => {
    setSelectedSubSectors(new Set())
  }, [])

  const hasFilter = selectedSubSectors.size > 0

  const sectorFilteredMap = useMemo(() => {
    if (!hasFilter) return null
    const map = {}
    for (const sector of sectorStories) {
      const matched = [
        ...sector.stories,
        ...(sector.expandedStories || []),
      ].filter((s) => selectedSubSectors.has(s.subSectorSlug))
      if (matched.length > 0) {
        map[sector.slug] = matched
      }
    }
    return map
  }, [hasFilter, selectedSubSectors])

  return (
    <main className="mx-auto max-w-[1440px] px-4 sm:px-6">
      <div className="grid gap-6 py-6 lg:grid-cols-[200px_1fr_280px]">
        <SectorFilter
          activeSectorSlug={activeSectorSlug}
          selectedSubSectors={selectedSubSectors}
          onToggleSubSector={handleToggleSubSector}
          onClearAll={handleClearAll}
        />

        <div>
          <HeroSection />

          <AdBanner ad={advertiseAd} />

          {sectorStories.map((sector, index) => {
            const filtered = sectorFilteredMap?.[sector.slug]
            return (
              <div key={sector.slug}>
                <SectionGrid
                  section={sector}
                  sectorSlug={sector.slug}
                  filteredStories={filtered || undefined}
                />
                {index % 2 === 1 && index < sectorStories.length - 1 && (
                  <div className="grid gap-4 sm:grid-cols-2 my-6">
                    <AdPlaceholder slot={adSlots[index % adSlots.length]} />
                    <AdPlaceholder slot={adSlots[(index + 1) % adSlots.length]} />
                  </div>
                )}
              </div>
            )
          })}

          {!hasFilter && <AdBanner ad={subscribeAd} />}
        </div>

        <Sidebar />
      </div>
    </main>
  )
}
