import { Fragment, useMemo, useRef, useState, useCallback } from 'react'
import {
  Building2,
  Calendar,
  CalendarClock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Flame,
  GraduationCap,
  HeartPulse,
  Landmark,
  Newspaper,
  Search,
  Shield,
  SlidersHorizontal,
  Sprout,
  Tag,
  X,
  Zap,
} from 'lucide-react'
import TopNav from '@/components/layout/TopNav'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Breadcrumbs from '@/components/stories/Breadcrumbs'
import AdPlaceholder from '@/components/ui/AdPlaceholder'
import { adSlots } from '@/data/ads'
import {
  tendersWithStatus,
  SECTORS,
  NEWSPAPERS,
  STATUSES,
  STATUS_LABELS,
  STATUS_COLORS,
  tendersSummary,
} from '@/data/tenders'

const categoryIcons = {
  cpu: Cpu,
  landmark: Landmark,
  zap: Zap,
  building2: Building2,
  'heart-pulse': HeartPulse,
  'graduation-cap': GraduationCap,
  sprout: Sprout,
  bus: Shield,
  shield: Shield,
}

function Dropdown({ label, icon: Icon, options, value, onChange }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[12px] font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
      >
        <Icon className="size-3.5 text-slate-400" aria-hidden="true" />
        <span className="max-w-[120px] truncate">{value}</span>
        <ChevronDown
          className={`size-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute left-0 z-20 mt-1.5 min-w-[180px] rounded-lg border border-slate-200 bg-white py-1 shadow-xl">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt)
                  setOpen(false)
                }}
                className={`flex w-full items-center px-3 py-2 text-left text-[12px] transition-colors hover:bg-slate-50 ${
                  value === opt
                    ? 'bg-brand-50 font-semibold text-brand-700'
                    : 'text-slate-600'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const PAGE_SIZE = 6

function getPageWindow(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages = new Set([1, total, current - 1, current, current + 1])
  return [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b)
}

export default function TendersPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Sectors')
  const [selectedNewspaper, setSelectedNewspaper] = useState('All Newspapers')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [selectedTender, setSelectedTender] = useState(null)
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const detailRef = useRef(null)

  const handleSelectTender = useCallback((tender) => {
    setSelectedTender(tender)
    if (window.matchMedia('(max-width: 1023px)').matches) {
      requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [])

  const filtered = useMemo(() => {
    let result = tendersWithStatus

    if (selectedCategory !== 'All Sectors') {
      result = result.filter((t) => t.sector === selectedCategory)
    }
    if (selectedNewspaper !== 'All Newspapers') {
      result = result.filter((t) => t.newspaper === selectedNewspaper)
    }
    if (selectedStatus !== 'all') {
      result = result.filter((t) => t.status === selectedStatus)
    }
    if (dateFrom) {
      result = result.filter((t) => new Date(t.publishedDate) >= new Date(dateFrom))
    }
    if (dateTo) {
      result = result.filter((t) => new Date(t.publishedDate) <= new Date(dateTo))
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.ref.toLowerCase().includes(q) ||
          t.institution.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.sector.toLowerCase().includes(q),
      )
    }
    return result
  }, [search, selectedCategory, selectedNewspaper, selectedStatus, dateFrom, dateTo])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const statusCounts = useMemo(() => {
    const counts = { all: 0, open: 0, closing_soon: 0, closed: 0 }
    tendersWithStatus.forEach((t) => {
      counts.all++
      counts[t.status]++
    })
    return counts
  }, [])

  const hasActiveFilters =
    search ||
    selectedCategory !== 'All Sectors' ||
    selectedNewspaper !== 'All Newspapers' ||
    selectedStatus !== 'all' ||
    dateFrom ||
    dateTo

  const clearAll = useCallback(() => {
    setSearch('')
    setSelectedCategory('All Sectors')
    setSelectedNewspaper('All Newspapers')
    setSelectedStatus('all')
    setDateFrom('')
    setDateTo('')
    setCurrentPage(1)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <Header />

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="pt-4">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Tenders' }]} />
          </div>
        </div>

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
                    Live Tender Intelligence
                  </span>
                </div>
                <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-[42px]">
                  Tenders Database
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  Browse and search government and institutional tenders across Sri Lanka
                </p>
              </div>

              {/* Hero stats — right-aligned */}
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { value: tendersSummary.total, label: 'Total Tenders' },
                  { value: tendersSummary.institutions.toString(), label: 'Institutions' },
                  { value: tendersSummary.netValue, label: 'Net Value' },
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

        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

        {/* Stats Cards */}
        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-brand-50">
                <FileText className="size-5 text-brand-600" />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Total Tenders
                </p>
                <p className="text-xl font-extrabold text-slate-900">{tendersSummary.total}</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-secondary-50">
                <Building2 className="size-5 text-secondary-600" />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Govt Institutions
                </p>
                <p className="text-xl font-extrabold text-slate-900">
                  {tendersSummary.institutions}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50">
                <Tag className="size-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Net Value
                </p>
                <p className="text-xl font-extrabold text-emerald-600">
                  {tendersSummary.netValue}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {[
            { key: 'all', label: 'All Papers', count: statusCounts.all },
            { key: STATUSES.OPEN, label: 'Open', count: statusCounts.open },
            { key: STATUSES.CLOSING_SOON, label: 'Closing Soon', count: statusCounts.closing_soon },
            { key: STATUSES.CLOSED, label: 'Closed', count: statusCounts.closed },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setSelectedStatus(tab.key)
                setCurrentPage(1)
              }}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12px] font-medium transition-all ${
                selectedStatus === tab.key
                  ? 'bg-secondary-900 text-white shadow-md shadow-secondary-900/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  selectedStatus === tab.key
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search + Filter Bar */}
        <div className="mb-4 rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center gap-2 p-3">
            <div className="relative min-w-[200px] flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search tenders by title, ref, institution..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-[13px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20"
              />
            </div>

            <Dropdown
              label="Sector"
              icon={Tag}
              options={SECTORS}
              value={selectedCategory}
              onChange={(v) => {
                setSelectedCategory(v)
                setCurrentPage(1)
              }}
            />

            <Dropdown
              label="Newspaper"
              icon={Newspaper}
              options={NEWSPAPERS}
              value={selectedNewspaper}
              onChange={(v) => {
                setSelectedNewspaper(v)
                setCurrentPage(1)
              }}
            />

            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-[12px] font-medium transition-all ${
                showFilters || dateFrom || dateTo
                  ? 'border-brand-300 bg-brand-50 text-brand-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Filter className="size-3.5" />
              More Filters
            </button>
          </div>

          {showFilters && (
            <div className="border-t border-slate-100 px-3 py-3">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <CalendarClock className="size-3.5 text-slate-400" />
                  <span className="text-[11px] font-medium text-slate-500">From</span>
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => {
                      setDateFrom(e.target.value)
                      setCurrentPage(1)
                    }}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-slate-500">To</span>
                  <input
                    type="date"
                    value={dateTo}
                    onChange={(e) => {
                      setDateTo(e.target.value)
                      setCurrentPage(1)
                    }}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>
            </div>
          )}

          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 px-3 py-2">
              <SlidersHorizontal className="size-3 text-slate-400" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Active:
              </span>
              {selectedCategory !== 'All Sectors' && (
                <FilterChip
                  label={selectedCategory}
                  onRemove={() => setSelectedCategory('All Sectors')}
                />
              )}
              {selectedNewspaper !== 'All Newspapers' && (
                <FilterChip
                  label={selectedNewspaper}
                  onRemove={() => setSelectedNewspaper('All Newspapers')}
                />
              )}
              {selectedStatus !== 'all' && (
                <FilterChip
                  label={STATUS_LABELS[selectedStatus]}
                  onRemove={() => setSelectedStatus('all')}
                />
              )}
              {dateFrom && (
                <FilterChip label={`From: ${dateFrom}`} onRemove={() => setDateFrom('')} />
              )}
              {dateTo && (
                <FilterChip label={`To: ${dateTo}`} onRemove={() => setDateTo('')} />
              )}
              {search && (
                <FilterChip label={`"${search}"`} onRemove={() => setSearch('')} />
              )}
              <button
                type="button"
                onClick={clearAll}
                className="text-[10px] font-semibold text-brand-600 hover:text-brand-700"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results + Split Panel */}
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[12px] text-slate-500">
            Showing{' '}
            <span className="font-bold text-slate-900">{paginated.length}</span> of{' '}
            <span className="font-bold text-slate-900">{filtered.length}</span> tenders
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Tender List */}
          <div className="lg:col-span-5">
            {filtered.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-white py-20 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100">
                  <Search className="size-6 text-slate-300" />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-500">No tenders found</p>
                <p className="mt-1 text-xs text-slate-400">
                  Try adjusting your search or filters
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-3 text-xs font-medium text-brand-600 hover:text-brand-700"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {paginated.map((t) => {
                  const Icon = categoryIcons[t.sectorIcon] ?? Building2
                  const isSelected = selectedTender?.id === t.id
                  return (
                    <div
                      key={t.id}
                      onClick={() => handleSelectTender(t)}
                      className={`group cursor-pointer rounded-xl border bg-white p-4 transition-all hover:shadow-md ${
                        isSelected
                          ? 'border-brand-400 ring-2 ring-brand-100 shadow-md'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                            {t.isNew && (
                              <span className="shrink-0 rounded bg-brand-600 px-1.5 py-0.5 text-[8px] font-bold text-white">
                                NEW
                              </span>
                            )}
                            {t.isUrgent && (
                              <span className="flex shrink-0 items-center gap-0.5 rounded bg-orange-50 px-1.5 py-0.5 text-[8px] font-bold text-orange-600">
                                <Flame className="size-2.5" />
                                URGENT
                              </span>
                            )}
                            <span
                              className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[8px] font-bold ${STATUS_COLORS[t.status]}`}
                            >
                              {STATUS_LABELS[t.status]}
                            </span>
                          </div>
                          <h3 className="text-[13px] font-semibold leading-snug text-slate-900 line-clamp-2 group-hover:text-brand-600 transition-colors">
                            {t.title}
                          </h3>
                          <div className="mt-1.5 flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                              <Building2 className="size-3 text-slate-400" />
                              {t.institution}
                            </span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-mono text-[13px] font-bold text-slate-900">
                            {t.value}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-slate-400">{t.ref}</span>
                          <span
                            className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[8px] font-bold ${t.sectorColor}`}
                          >
                            <Icon className="size-2.5" />
                            {t.sector}
                          </span>
                          <span className="inline-flex items-center gap-0.5 text-[9px] text-slate-400">
                            <Newspaper className="size-2.5" />
                            {t.newspaper}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="size-3 text-slate-400" />
                          <span className="text-[10px] font-medium text-slate-500">
                            {t.deadline}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-4 flex items-center justify-center gap-1">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="size-4" />
                </button>
                {getPageWindow(currentPage, totalPages).map((page, idx, arr) => (
                  <Fragment key={page}>
                    {idx > 0 && page - arr[idx - 1] > 1 && (
                      <span className="px-1 text-[10px] text-slate-400" aria-hidden="true">
                        &hellip;
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`flex size-8 items-center justify-center rounded-lg text-[12px] font-semibold transition-all ${
                        currentPage === page
                          ? 'bg-secondary-900 text-white shadow-md shadow-secondary-900/20'
                          : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {page}
                    </button>
                  </Fragment>
                ))}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            )}
          </div>

          {/* Detail Panel */}
          <div
            ref={detailRef}
            className={`scroll-mt-28 lg:col-span-7 ${
              selectedTender ? 'max-lg:order-first max-lg:block' : 'hidden lg:block'
            }`}
          >
            <div className="sticky top-26 rounded-xl border border-slate-200 bg-white shadow-sm">
              {selectedTender ? (
                <TenderDetail
                  tender={selectedTender}
                  onClose={() => setSelectedTender(null)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-38 text-center">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-slate-100">
                    <FileText className="size-8 text-slate-300" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-slate-500">
                    Click a tender to preview full view
                  </p>
                  <p className="mt-1.5 max-w-xs text-xs text-slate-400">
                    Details, categories, documents, and actions will appear here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function FilterChip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-secondary-900 px-2.5 py-1 text-[10px] font-semibold text-white">
      {label}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
        className="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-white/20"
      >
        <X className="size-2.5" />
      </button>
    </span>
  )
}

function TenderDetail({ tender, onClose }) {
  const Icon = categoryIcons[tender.sectorIcon] ?? Building2
  return (
    <div className="p-6">
      {onClose && (
        <div className="mb-4 lg:hidden">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition-colors hover:bg-slate-50"
          >
            <X className="size-3.5" />
            Back to list
          </button>
        </div>
      )}

      {/* Header Row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {tender.isNew && (
          <span className="rounded bg-brand-600 px-2 py-0.5 text-[10px] font-bold text-white">
            NEW
          </span>
        )}
        {tender.isUrgent && (
          <span className="flex items-center gap-0.5 rounded bg-orange-50 px-2 py-0.5 text-[10px] font-bold text-orange-600">
            <Flame className="size-3" />
            URGENT
          </span>
        )}
        <span
          className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold ${STATUS_COLORS[tender.status]}`}
        >
          {STATUS_LABELS[tender.status]}
        </span>
        <span
          className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold ${tender.sectorColor}`}
        >
          <Icon className="size-3" />
          {tender.sector}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold leading-snug text-slate-900">{tender.title}</h2>
      <p className="mt-1 font-mono text-[12px] text-slate-400">Ref: {tender.ref}</p>

      {/* Info Grid */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <InfoCard label="Institution" value={tender.institution} icon={Building2} />
        <InfoCard
          label="Est. Value"
          value={tender.value}
          icon={Tag}
          valueClass="font-bold text-brand-600"
        />
        <InfoCard label="Published" value={tender.publishedDate} icon={Calendar} />
        <InfoCard label="Deadline" value={tender.deadline} icon={Clock} />
        <InfoCard
          label="Newspaper"
          value={tender.newspaper}
          icon={Newspaper}
          className="col-span-2"
        />
      </div>

      {/* Description */}
      <div className="mt-5">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Description
        </p>
        <p className="text-[13px] leading-relaxed text-slate-600">{tender.description}</p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        {/* <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[12px] font-bold text-white shadow-md shadow-brand-600/20 transition-all hover:bg-brand-700 hover:shadow-lg"
        >
          <ExternalLink className="size-3.5" />
          View Full Tender
        </button> */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-[12px] font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
        >
          <Download className="size-3.5" />
          Download Document
        </button>
      </div>
    </div>
  )
}

function InfoCard({ label, value, icon: Icon, className = '', valueClass = '' }) {
  return (
    <div className={`rounded-lg bg-slate-50 p-3 ${className}`}>
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
      <p className={`mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-slate-900 ${valueClass}`}>
        <Icon className="size-3.5 text-slate-400" />
        {value}
      </p>
    </div>
  )
}
