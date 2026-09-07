import { useMemo, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Archive,
  Calendar,
  CalendarDays,
  ChevronRight,
  Clock,
  FileText,
  LayoutGrid,
  List,
  Search,
  Shield,
  Layers,
  User,
} from 'lucide-react'
import TopNav from '@/components/layout/TopNav'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Breadcrumbs from '@/components/stories/Breadcrumbs'
import Pagination from '@/components/stories/Pagination'
import {
  archivedStories,
  archiveStats,
  archiveSectorColors,
  getArchiveYears,
  getMonthCountsForYear,
  getStoriesByYearMonth,
  getDayCountsForYearMonth,
  getStoriesByYearMonthDay,
  getDaysInMonth,
  getFirstDayOfMonth,
} from '@/data/archive'
import { slugify } from '@/lib/slugify'
import { cn } from '@/lib/cn'
import AdPlaceholder from '@/components/ui/AdPlaceholder'
import { adSlots } from '@/data/ads'

const PAGE_SIZE = 9

const SECTOR_BAR_COLORS = [
  'bg-emerald-500', 'bg-violet-500', 'bg-amber-500', 'bg-cyan-500',
  'bg-orange-500', 'bg-rose-500', 'bg-blue-500', 'bg-lime-500',
  'bg-stone-500', 'bg-sky-500', 'bg-fuchsia-500', 'bg-indigo-500',
  'bg-red-500', 'bg-yellow-500', 'bg-teal-500', 'bg-pink-500',
]

export default function ArchivePage() {
  const [view, setView] = useState('year')
  const [selectedYear, setSelectedYear] = useState(null)
  const [selectedMonth, setSelectedMonth] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)

  const years = useMemo(() => getArchiveYears(), [])
  const totalArticles = useMemo(() => archivedStories.length, [])

  const monthCounts = useMemo(() => {
    if (selectedYear === null) return []
    return getMonthCountsForYear(selectedYear)
  }, [selectedYear])

  const monthStories = useMemo(() => {
    if (selectedYear === null || selectedMonth === null) return []
    return getStoriesByYearMonth(selectedYear, selectedMonth)
  }, [selectedYear, selectedMonth])

  const dayCounts = useMemo(() => {
    if (selectedYear === null || selectedMonth === null) return {}
    return getDayCountsForYearMonth(selectedYear, selectedMonth)
  }, [selectedYear, selectedMonth])

  const dayStories = useMemo(() => {
    if (selectedYear === null || selectedMonth === null || selectedDay === null) return []
    return getStoriesByYearMonthDay(selectedYear, selectedMonth, selectedDay)
  }, [selectedYear, selectedMonth, selectedDay])

  const scopedStories = useMemo(() => {
    if (selectedDay !== null) return dayStories
    if (selectedMonth !== null) return monthStories
    return archivedStories
  }, [selectedDay, selectedMonth, dayStories, monthStories])

  const filteredStories = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return scopedStories
    return archivedStories.filter(
      (s) =>
        s.title.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.sector.toLowerCase().includes(query) ||
        s.author?.toLowerCase().includes(query),
    )
  }, [search, scopedStories])

  const totalPages = Math.ceil(filteredStories.length / PAGE_SIZE)
  const paged = filteredStories.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  )

  const navigateToYear = useCallback((year) => {
    setSelectedYear(year)
    setSelectedMonth(null)
    setSelectedDay(null)
    setView('month')
    setCurrentPage(1)
    setSearch('')
  }, [])

  const navigateToMonth = useCallback((month) => {
    setSelectedMonth(month)
    setSelectedDay(null)
    setView('day')
    setCurrentPage(1)
    setSearch('')
  }, [])

  const navigateToDay = useCallback((day) => {
    setSelectedDay(day)
    setCurrentPage(1)
  }, [])

  const goBack = useCallback(() => {
    if (view === 'day') {
      setSelectedDay(null)
      setView('month')
    } else if (view === 'month') {
      setSelectedYear(null)
      setSelectedMonth(null)
      setView('year')
    }
    setCurrentPage(1)
    setSearch('')
  }, [view])

  const breadcrumbItems = useMemo(() => {
    const items = [{ label: 'Home', to: '/' }, { label: 'Archive' }]
    if (selectedYear !== null) items.push({ label: String(selectedYear) })
    if (selectedMonth !== null) {
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ]
      items.push({ label: monthNames[selectedMonth] })
    }
    if (selectedDay !== null) {
      items.push({ label: `Day ${selectedDay}` })
    }
    return items
  }, [selectedYear, selectedMonth, selectedDay])

  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="pt-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Back Button */}
        {view !== 'year' && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <button
              type="button"
              onClick={goBack}
              className="mb-4 mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 transition-colors hover:text-brand-600"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              Back to {view === 'day' ? 'Month' : 'Years'}
            </button>
          </div>
        )}

        {/* ═══════════════════════════════════════════
            HERO — Dark intelligence band
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-secondary-900">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(169,0,12,0.15),transparent)]"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="size-2 rounded-full bg-brand-500 animate-live-pulse" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">
                    Live Archive
                  </span>
                </div>
                <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-[42px]">
                  {view === 'year' && 'Archive'}
                  {view === 'month' && `${selectedYear} Archive`}
                  {view === 'day' && `${selectedYear} — ${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][selectedMonth]}`}
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  {view === 'year'
                    ? `Browse ${archiveStats.yearsSpanned} years of business news, sector reports, intelligence briefs and analysis spanning ${totalArticles.toLocaleString()}+ archived articles.`
                    : view === 'month'
                      ? `Explore ${selectedYear} coverage across all sectors and content types.`
                      : `Articles published on ${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][selectedMonth]} ${selectedDay}, ${selectedYear}.`}
                </p>
              </div>

              {/* Hero stats — right-aligned */}
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { value: `${archiveStats.totalArticles.toLocaleString()}+`, label: 'Articles' },
                  { value: archiveStats.totalSectors.toString(), label: 'Sectors' },
                  { value: archiveStats.freeArticles.toLocaleString(), label: 'Free Access' },
                  { value: `${archiveStats.yearsSpanned}`, label: 'Years' },
                ].map((s) => (
                  <div key={s.label} className="text-right">
                    <p className="font-mono text-2xl font-bold text-white sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ad Slots */}
        <section aria-label="Advertisement slots" className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {adSlots.slice(0, 3).map((slot) => (
              <AdPlaceholder key={slot.id} slot={slot} />
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">

          {/* Search + Filters Bar */}
          <div className="mb-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search the archive by title, category, author..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full rounded-md border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center border border-slate-200">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    'flex size-10 items-center justify-center transition-colors',
                    viewMode === 'grid'
                      ? 'bg-secondary-900 text-white'
                      : 'text-slate-500 hover:bg-slate-50',
                  )}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={cn(
                    'flex size-10 items-center justify-center transition-colors',
                    viewMode === 'list'
                      ? 'bg-secondary-900 text-white'
                      : 'text-slate-500 hover:bg-slate-50',
                  )}
                  aria-label="List view"
                >
                  <List className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {search.trim() ? (
            <>
              {/* Search Results */}
              <div className="mb-4 mt-2 flex items-center justify-between">
                <p className="text-[12px] text-slate-500">
                  <span className="font-semibold text-slate-900">{filteredStories.length}</span>{' '}
                  {filteredStories.length === 1 ? 'result' : 'results'} for{' '}
                  <span className="font-semibold text-slate-900">"{search}"</span>
                </p>
                <span className="text-[11px] text-slate-400">Sorted by newest first</span>
              </div>

              {filteredStories.length === 0 ? (
                <div className="rounded-lg border border-slate-200 bg-white py-16 text-center">
                  <Search className="mx-auto size-8 text-slate-300" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium text-slate-500">No articles found</p>
                  <p className="mt-1 text-xs text-slate-400">Try a different keyword or browse by year</p>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {paged.map((story) => (
                    <ArticleCard key={story.id} story={story} />
                  ))}
                </div>
              ) : (
                <div className="divide-y divide-slate-200 overflow-hidden border border-slate-200">
                  {paged.map((story) => (
                    <ArticleRow key={story.id} story={story} />
                  ))}
                </div>
              )}

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <>
              {/* ═══════════════════ YEAR VIEW ═══════════════════ */}
              {view === 'year' && (
                <YearView years={years} onSelectYear={navigateToYear} />
              )}

              {/* ═══════════════════ MONTH VIEW ═══════════════════ */}
              {view === 'month' && (
                <MonthView
                  year={selectedYear}
                  monthCounts={monthCounts}
                  onSelectMonth={navigateToMonth}
                />
              )}

              {/* ═══════════════════ DAY VIEW ═══════════════════ */}
              {view === 'day' && (
                <>
                  {/* Calendar Strip */}
                  <DayCalendar
                    year={selectedYear}
                    month={selectedMonth}
                    dayCounts={dayCounts}
                    selectedDay={selectedDay}
                    onSelectDay={navigateToDay}
                  />

                  {/* Results Count */}
                  <div className="mb-4 mt-6 flex items-center justify-between">
                    <p className="text-[12px] text-slate-500">
                      {selectedDay !== null ? (
                        <>
                          Showing{' '}
                          <span className="font-semibold text-slate-900">{paged.length}</span>{' '}
                          of{' '}
                          <span className="font-semibold text-slate-900">{filteredStories.length}</span>{' '}
                          articles
                        </>
                      ) : (
                        <>
                          <span className="font-semibold text-slate-900">{filteredStories.length}</span>{' '}
                          articles this month
                        </>
                      )}
                    </p>
                    <span className="text-[11px] text-slate-400">Sorted by newest first</span>
                  </div>

                  {/* Article List */}
                  {filteredStories.length === 0 ? (
                    <div className="rounded-lg border border-slate-200 bg-white py-16 text-center">
                      <Search className="mx-auto size-8 text-slate-300" aria-hidden="true" />
                      <p className="mt-3 text-sm font-medium text-slate-500">No articles found</p>
                      <p className="mt-1 text-xs text-slate-400">Try selecting a different day or adjusting your search</p>
                    </div>
                  ) : viewMode === 'grid' ? (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {paged.map((story) => (
                        <ArticleCard key={story.id} story={story} />
                      ))}
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-200 overflow-hidden border border-slate-200">
                      {paged.map((story) => (
                        <ArticleRow key={story.id} story={story} />
                      ))}
                    </div>
                  )}

                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </>
              )}
            </>
          )}

        {/* CTA Banner */}
        <div className="mt-10 rounded-lg border-2 border-secondary-900 bg-secondary-900 p-6 text-center sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            Full Archive Access
          </p>
          <p className="mt-2 max-w-xl mx-auto text-sm leading-relaxed text-slate-300">
            Unlock all {archiveStats.totalArticles.toLocaleString()}+ articles
            with advanced search, date-range filtering, saved searches, email
            alerts and export capabilities.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="cursor-pointer border-2 border-white bg-white px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider text-secondary-900 transition-colors hover:bg-transparent hover:text-white"
            >
              Subscribe Now
            </button>
            <button
              type="button"
              className="cursor-pointer border-2 border-white/30 px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
            >
              View Plans
            </button>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   YEAR VIEW
   ═══════════════════════════════════════════════════════════ */

function YearView({ years, onSelectYear }) {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between border-b-2 border-slate-900 py-2">
        <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
          Browse by Year
        </h2>
        <span className="text-[11px] font-medium text-slate-400">
          {years.length} years of coverage
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {years.map((yearData) => (
          <YearCard key={yearData.year} data={yearData} onClick={() => onSelectYear(yearData.year)} />
        ))}
      </div>
    </section>
  )
}

function YearCard({ data, onClick }) {
  const sectorEntries = Object.entries(data.sectors)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
  const maxCount = sectorEntries.length > 0 ? sectorEntries[0][1] : 1

  return (
    <button
      type="button"
      onClick={onClick}
      className="group cursor-pointer overflow-hidden border border-slate-200 bg-white text-left transition-all hover:-translate-y-1 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#020617]"
    >
      {/* Year header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-4">
        <div>
          <h3 className="text-3xl font-extrabold tabular-nums text-slate-900 font-mono group-hover:text-brand-600 transition-colors">
            {data.year}
          </h3>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-slate-400">
            {data.count.toLocaleString()} articles
          </p>
        </div>
        <div className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
          <ChevronRight className="size-5" />
        </div>
      </div>

      {/* Sector breakdown */}
      <div className="px-5 py-4">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Top Sectors
        </p>
        <div className="space-y-2">
          {sectorEntries.map(([sector, count], i) => (
            <div key={sector} className="flex items-center gap-2.5">
              <span className="w-20 shrink-0 truncate text-[11px] font-medium text-slate-600">
                {sector}
              </span>
              <div className="relative h-2 flex-1 overflow-hidden bg-slate-100">
                <span
                  className={cn('absolute inset-y-0 left-0 transition-all', SECTOR_BAR_COLORS[i % SECTOR_BAR_COLORS.length])}
                  style={{ width: `${(count / maxCount) * 100}%` }}
                />
              </div>
              <span className="w-6 text-right text-[11px] font-mono font-semibold text-slate-500">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </button>
  )
}

/* ═══════════════════════════════════════════════════════════
   MONTH VIEW
   ═══════════════════════════════════════════════════════════ */

function MonthView({ year, monthCounts, onSelectMonth }) {
  const totalArticles = monthCounts.reduce((s, m) => s + m.count, 0)
  const maxMonth = Math.max(...monthCounts.map((m) => m.count), 1)

  return (
    <section>
      <div className="mb-5 flex items-center justify-between border-b-2 border-slate-900 py-2">
        <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
          {year} — Monthly Breakdown
        </h2>
        <span className="text-[11px] font-medium text-slate-400">
          {totalArticles.toLocaleString()} total articles
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {monthCounts.map((m) => (
          <MonthCard
            key={m.month}
            data={m}
            year={year}
            maxCount={maxMonth}
            onClick={() => onSelectMonth(m.month)}
          />
        ))}
      </div>
    </section>
  )
}

function MonthCard({ data, year, maxCount, onClick }) {
  const sectorEntries = Object.entries(data.sectors)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 4)
  const intensity = maxCount > 0 ? data.count / maxCount : 0

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={data.count === 0}
      className={cn(
        'group cursor-pointer overflow-hidden border bg-white text-left transition-all',
        data.count === 0
          ? 'border-slate-100 opacity-40 cursor-not-allowed'
          : 'border-slate-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#020617]',
      )}
    >
      {/* Month header with volume bar */}
      <div className="relative border-b border-slate-100 px-4 py-3">
        <div
          className="absolute inset-y-0 left-0 bg-brand-600/[0.06] transition-all"
          style={{ width: `${intensity * 100}%` }}
        />
        <div className="relative flex items-center justify-between">
          <div>
            <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
              {data.name}
            </h3>
            <p className="text-[11px] text-slate-400">
              {year}
            </p>
          </div>
          <div className="text-right">
            <span className="text-xl font-extrabold tabular-nums text-slate-900 font-mono">
              {data.count}
            </span>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              articles
            </p>
          </div>
        </div>
      </div>

      {/* Mini sector tags */}
      {sectorEntries.length > 0 && (
        <div className="flex flex-wrap gap-1 px-4 py-2.5">
          {sectorEntries.map(([sector]) => (
            <span
              key={sector}
              className="inline-flex items-center rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-500"
            >
              {sector}
            </span>
          ))}
          {Object.keys(data.sectors).length > 4 && (
            <span className="text-[9px] text-slate-400">
              +{Object.keys(data.sectors).length - 4} more
            </span>
          )}
        </div>
      )}

      {/* Empty state */}
      {data.count === 0 && (
        <div className="px-4 py-3 text-[11px] text-slate-300 italic">
          No articles published
        </div>
      )}
    </button>
  )
}

/* ═══════════════════════════════════════════════════════════
   DAY CALENDAR
   ═══════════════════════════════════════════════════════════ */

function DayCalendar({ year, month, dayCounts, selectedDay, onSelectDay }) {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const maxDayCount = Math.max(...Object.values(dayCounts), 1)

  const cells = []
  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={`empty-${i}`} className="h-14 sm:h-16" />)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const count = dayCounts[day] || 0
    const intensity = count > 0 ? count / maxDayCount : 0
    const isSelected = day === selectedDay
    const isToday =
      new Date().getFullYear() === year &&
      new Date().getMonth() === month &&
      new Date().getDate() === day

    cells.push(
      <button
        key={day}
        type="button"
        onClick={() => count > 0 && onSelectDay(day)}
        disabled={count === 0}
        className={cn(
          'relative flex h-14 flex-col items-center justify-center rounded border transition-all sm:h-16',
          count === 0 && 'cursor-not-allowed border-transparent bg-slate-50/50',
          count > 0 && !isSelected && 'cursor-pointer border-slate-200 bg-white hover:border-brand-400 hover:shadow-sm',
          isSelected && 'border-brand-600 bg-brand-600 text-white shadow-md',
          isToday && !isSelected && 'border-slate-900',
        )}
      >
        {count > 0 && !isSelected && (
          <span
            className="absolute inset-x-0 bottom-0 bg-brand-600/[0.08]"
            style={{ height: `${Math.max(intensity * 100, 10)}%` }}
          />
        )}
        <span
          className={cn(
            'relative text-[13px] font-semibold tabular-nums',
            isSelected ? 'text-white' : 'text-slate-700',
            isToday && !isSelected && 'text-slate-900 font-bold',
          )}
        >
          {day}
        </span>
        {count > 0 && (
          <span
            className={cn(
              'relative mt-0.5 text-[9px] font-bold',
              isSelected ? 'text-white/80' : 'text-brand-600',
            )}
          >
            {count} {count === 1 ? 'article' : 'articles'}
          </span>
        )}
        {isToday && (
          <span className="absolute -right-1 -top-1 size-2 rounded-full bg-brand-600 ring-2 ring-white" />
        )}
      </button>,
    )
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <CalendarDays className="size-4 text-slate-400" aria-hidden="true" />
        <h3 className="text-[12px] font-bold uppercase tracking-wider text-slate-500">
          Select a Day
        </h3>
        {selectedDay !== null && (
          <button
            type="button"
            onClick={() => onSelectDay(null)}
            className="ml-auto text-[11px] font-medium text-brand-600 hover:text-brand-700"
          >
            Show all days
          </button>
        )}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div
            key={d}
            className="py-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400"
          >
            {d}
          </div>
        ))}
        {cells}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   ARTICLE CARD (Grid)
   ═══════════════════════════════════════════════════════════ */

function ArticleCard({ story }) {
  return (
    <Link
      to={`/post/${slugify(story.title)}`}
      className="group flex h-full flex-col border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[4px_4px_0_0_#020617]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={story.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-0 top-0 flex items-center gap-1">
          <span className="bg-secondary-900/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {story.sector}
          </span>
          {story.locked && (
            <span className="bg-brand-600/90 px-1.5 py-1 text-[10px] font-bold text-white">
              Premium
            </span>
          )}
        </div>
        {story.verified && (
          <span className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white/90">
            <Shield className="size-3.5 text-brand-600" aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <span
            className={cn(
              'inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium',
              archiveSectorColors[story.sector] || 'bg-slate-100 text-slate-600',
            )}
          >
            {story.contentType}
          </span>
          <span className="text-[10px] text-slate-400">{story.category}</span>
        </div>
        <h3 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 line-clamp-2">
          {story.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-slate-500">
          {story.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[11px] font-medium text-slate-500">
          <div className="flex min-w-0 items-center gap-2">
            {story.author && (
              <>
                <span className="flex items-center gap-1">
                  <User className="size-3" aria-hidden="true" />
                  <span className="truncate">{story.author}</span>
                </span>
                <span className="size-0.5 shrink-0 bg-slate-400" aria-hidden="true" />
              </>
            )}
            <span className="flex shrink-0 items-center gap-1">
              <Clock className="size-3" aria-hidden="true" />
              {story.readTime}
            </span>
          </div>
          <span className="flex shrink-0 items-center gap-1">
            <Calendar className="size-3" aria-hidden="true" />
            {story.dateLabel}
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ═══════════════════════════════════════════════════════════
   ARTICLE ROW (List)
   ═══════════════════════════════════════════════════════════ */

function ArticleRow({ story }) {
  return (
    <Link
      to={`/post/${slugify(story.title)}`}
      className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-brand-600/[0.03]"
    >
      <div className="relative h-20 w-28 shrink-0 overflow-hidden">
        <img
          src={story.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {story.locked && (
          <span className="absolute right-1 top-1 bg-brand-600 px-1 py-0.5 text-[8px] font-bold text-white">
            Premium
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span
            className={cn(
              'inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium',
              archiveSectorColors[story.sector] || 'bg-slate-100 text-slate-600',
            )}
          >
            {story.contentType}
          </span>
          <span className="text-[10px] font-medium text-brand-600/80">{story.sector}</span>
          <span className="text-[10px] text-slate-400">·</span>
          <span className="text-[10px] text-slate-400">{story.category}</span>
        </div>
        <h3 className="text-[14px] font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 line-clamp-1">
          {story.title}
        </h3>
        <p className="mt-1 line-clamp-1 text-[11px] leading-relaxed text-slate-500">
          {story.excerpt}
        </p>
        <div className="mt-1.5 flex items-center gap-3 text-[10px] text-slate-500">
          {story.author && (
            <span className="flex items-center gap-1">
              <User className="size-3" aria-hidden="true" />
              {story.author}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Clock className="size-3" aria-hidden="true" />
            {story.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="size-3" aria-hidden="true" />
            {story.dateLabel}
          </span>
          {story.verified && (
            <Shield className="size-3 text-brand-600" aria-hidden="true" />
          )}
        </div>
      </div>
    </Link>
  )
}

/* ═══════════════════════════════════════════════════════════
   STAT CARD
   ═══════════════════════════════════════════════════════════ */

const STAT_ICONS = {
  brand: Archive,
  secondary: Layers,
  amber: FileText,
}

function StatCard({ eyebrow, value, suffix, description, color = 'brand', extra }) {
  const Icon = STAT_ICONS[color] || Archive

  return (
    <div className="group flex flex-col items-center justify-center overflow-hidden border border-dashed border-slate-300 bg-slate-50 p-5 text-center transition-colors hover:border-secondary-900 hover:bg-white sm:p-6">
      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <Icon className="size-3" aria-hidden="true" />
        {eyebrow}
      </span>
      <p className="mt-2 font-black uppercase tracking-wider text-slate-900 text-[28px] leading-none font-mono sm:text-[32px]">
        {value}{suffix || ''}
      </p>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-500 max-w-[220px]">
        {description}
      </p>
      {extra && <div>{extra}</div>}
    </div>
  )
}
