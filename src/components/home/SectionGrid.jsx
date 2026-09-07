import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ArticleCard from '@/components/ui/ArticleCard'
import SectionTitle from '@/components/ui/SectionTitle'

export default function SectionGrid({ section, sectorSlug, filteredStories }) {
  const filters = useMemo(
    () => ['All', ...new Set(section.stories.map((s) => s.category))],
    [section],
  )
  const [activeFilter, setActiveFilter] = useState(null)

  const baseStories = activeFilter
    ? section.stories.filter((s) => s.category === activeFilter)
    : section.stories

  const displayStories = filteredStories || baseStories

  const moreHref = sectorSlug || section.sectorSlug
    ? `/stories/${sectorSlug || section.sectorSlug}`
    : '#'

  return (
    <section id={sectorSlug} className="my-8 scroll-mt-40">
      <SectionTitle
        color={section.color}
        link={{ label: 'More', href: moreHref }}
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      >
        {section.title}
      </SectionTitle>
      <div className="grid gap-5 md:grid-cols-3">
        {displayStories.map((story) => (
          <ArticleCard key={story.id} story={story} threeCol />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Link
          to={moreHref}
          className="flex items-center gap-1.5 border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-600 transition-colors hover:border-brand-600 hover:text-brand-600"
        >
          More Stories
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
