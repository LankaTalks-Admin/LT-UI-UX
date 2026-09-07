import { allStories } from '@/data/stories'
import { getSectorBySlug, getSubSectorBySlug } from '@/data/sectors'

export function getStoriesBySector(sectorSlug) {
  const sector = getSectorBySlug(sectorSlug)
  if (!sector) return []
  return allStories.filter((s) => s.sector === sectorSlug)
}

export function getStoriesBySubSector(sectorSlug, subSectorSlug) {
  const subSector = getSubSectorBySlug(sectorSlug, subSectorSlug)
  if (!subSector) return []
  return allStories.filter(
    (s) => s.sector === sectorSlug && s.subSector === subSectorSlug,
  )
}

export function getAllStories() {
  return allStories
}
