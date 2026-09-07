import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '@/components/stories/Breadcrumbs'
import StoryGrid from '@/components/stories/StoryGrid'
import Pagination from '@/components/stories/Pagination'
import { getStoriesBySubSector } from '@/data/storyService'
import { getSectorBySlug, getSubSectorBySlug } from '@/data/sectors'
import NotFoundPage from '@/pages/NotFoundPage'

const PAGE_SIZE = 15

export default function SubSectorPage() {
  const { sectorSlug, subSectorSlug } = useParams()
  const sector = getSectorBySlug(sectorSlug)
  const subSector = getSubSectorBySlug(sectorSlug, subSectorSlug)
  const [page, setPage] = useState(1)

  if (!sector || !subSector) return <NotFoundPage />

  const allStories = getStoriesBySubSector(sectorSlug, subSectorSlug)
  const totalPages = Math.ceil(allStories.length / PAGE_SIZE)
  const stories = allStories.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Stories', to: '/stories' },
          { label: sector.name, to: `/stories/${sector.slug}` },
          { label: subSector.name },
        ]}
      />

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <span className="h-6 w-1.5 bg-brand-600" aria-hidden="true" />
          <h1 className="text-xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-2xl">
            {subSector.name}
          </h1>
        </div>
        <p className="text-sm text-slate-500">
          {sector.name} &middot; {allStories.length} {allStories.length === 1 ? 'story' : 'stories'}
        </p>
      </div>

      <StoryGrid stories={stories} emptyMessage={`No stories found in ${subSector.name}.`} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </main>
  )
}
