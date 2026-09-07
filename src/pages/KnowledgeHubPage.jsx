import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  Download,
  ExternalLink,
  Lock,
  Search,
  SlidersHorizontal,
  TrendingUp,
  Users,
} from 'lucide-react'
import TopNav from '@/components/layout/TopNav'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Breadcrumbs from '@/components/stories/Breadcrumbs'
import {
  categories,
  featuredReports,
  recentReports,
  knowledgeHubPageStats,
} from '@/data/knowledgeHub'
import AdPlaceholder from '@/components/ui/AdPlaceholder'
import { adSlots } from '@/data/ads'
import { cn } from '@/lib/cn'

const ALL_TYPES = 'All Types'

export default function KnowledgeHubPage() {
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState(ALL_TYPES)

  const allReports = useMemo(() => [...featuredReports, ...recentReports], [])

  const filtered = useMemo(() => {
    let result = allReports

    if (selectedType !== ALL_TYPES) {
      result = result.filter((r) => r.type === selectedType)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.sector.toLowerCase().includes(q) ||
          r.type.toLowerCase().includes(q),
      )
    }

    return result
  }, [search, selectedType, allReports])

  const featured = featuredReports[0]
  const maxCatCount = Math.max(...categories.map((c) => c.count))

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <Header />

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="pt-4">
            <Breadcrumbs
              items={[{ label: 'Home', to: '/' }, { label: 'Knowledge Hub' }]}
            />
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
                    Live Intelligence Library
                  </span>
                </div>
                <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-[42px]">
                  Knowledge Hub
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  Sri Lanka's most comprehensive library of sector reports, research
                  surveys, white papers and deep dives.
                </p>
              </div>

              {/* Hero stats — right-aligned */}
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { value: `${knowledgeHubPageStats.totalReports.toLocaleString()}+`, label: 'Reports' },
                  { value: `${knowledgeHubPageStats.totalCitations.toLocaleString()}+`, label: 'Citations' },
                  { value: knowledgeHubPageStats.freeReports.toString(), label: 'Free Access' },
                  { value: `${knowledgeHubPageStats.sectorCoverage}`, label: 'Sectors' },
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

        {/* ═══════════════════════════════════════════
            FEATURED — Full-width dark banner
        ═══════════════════════════════════════════ */}
        {featured && (
          <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
            <div className="group relative overflow-hidden border border-slate-200 bg-white transition-all hover:border-slate-400 hover:shadow-[4px_4px_0_0_#020617]">
              <div className="grid lg:grid-cols-[1fr_1.4fr]">
                {/* Dark left strip */}
                <div className="relative flex flex-col justify-between bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-950 p-7 sm:p-8">
                  <div
                    className="absolute right-0 top-0 size-40 rounded-full bg-brand-600/10 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider',
                          featured.typeColor,
                        )}
                      >
                        <featured.typeIcon className="size-3" aria-hidden="true" />
                        {featured.type}
                      </span>
                      <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-brand-400">
                        <Clock className="size-2.5" aria-hidden="true" />
                        Latest
                      </span>
                    </div>
                    <h2 className="font-serif text-xl font-bold leading-snug text-white sm:text-2xl">
                      {featured.title}
                    </h2>
                    {featured.subtitle && (
                      <p className="mt-1.5 text-xs text-slate-300/70">
                        {featured.subtitle}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-2.5 text-[10px] text-slate-400">
                      <span className="rounded bg-white/10 px-2 py-0.5 font-medium text-white">
                        {featured.sector}
                      </span>
                      <span>{featured.date}</span>
                      <span>{featured.pages}</span>
                      <span className="flex items-center gap-1">
                        <Download className="size-2.5" aria-hidden="true" />
                        {featured.downloads}
                      </span>
                    </div>
                    {featured.author && (
                      <p className="mt-3 text-[10px] text-slate-500">
                        By <span className="text-slate-400">{featured.author}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Right — highlights */}
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Key Highlights
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {(featured.highlights || []).map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600"
                        >
                          <span className="mt-1 font-mono text-[10px] font-bold text-brand-600">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <button
                      type="button"
                      className="flex items-center gap-2 bg-brand-600 px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
                    >
                      <Lock className="size-3" aria-hidden="true" />
                      Subscribe to Access
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 transition-colors hover:text-slate-900"
                    >
                      Preview
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════
            MAIN CONTENT — Two-column: sidebar + table
        ═══════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">

            {/* ─── Sidebar ─── */}
            <aside className="space-y-6">
              {/* Search */}
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                />
              </div>

              {/* Category facet list */}
              <div className="rounded-lg border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Categories
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedType(ALL_TYPES)
                    }}
                    className={cn(
                      'text-[10px] font-bold transition-colors',
                      selectedType !== ALL_TYPES
                        ? 'text-brand-600 hover:text-brand-700'
                        : 'text-slate-300',
                    )}
                  >
                    Clear
                  </button>
                </div>
                <div className="p-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon
                    const isActive = selectedType === cat.name
                    const pct = Math.round((cat.count / maxCatCount) * 100)
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedType(
                            isActive ? ALL_TYPES : cat.name,
                          )
                        }}
                        className={cn(
                          'flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors',
                          isActive
                            ? 'bg-secondary-900 text-white'
                            : 'text-slate-700 hover:bg-slate-50',
                        )}
                      >
                        <Icon
                          className={cn(
                            'size-4 shrink-0',
                            isActive ? 'text-white' : 'text-slate-400',
                          )}
                          aria-hidden="true"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold">{cat.name}</span>
                            <span
                              className={cn(
                                'font-mono text-[10px] font-bold',
                                isActive ? 'text-slate-300' : 'text-slate-400',
                              )}
                            >
                              {cat.count}
                            </span>
                          </div>
                          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                            <div
                              className={cn(
                                'h-full rounded-full transition-all',
                                isActive ? 'bg-brand-400' : 'bg-slate-300',
                              )}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Quick stats card */}
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Library Overview
                </h3>
                <div className="mt-3 space-y-3">
                  {[
                    { label: 'Total Reports', value: knowledgeHubPageStats.totalReports.toLocaleString(), icon: BookOpen },
                    { label: 'Expert Citations', value: knowledgeHubPageStats.totalCitations.toLocaleString(), icon: TrendingUp },
                    { label: 'Partner Orgs', value: knowledgeHubPageStats.partnerDocs.toString(), icon: Users },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs text-slate-500">
                        <s.icon className="size-3.5 text-slate-400" aria-hidden="true" />
                        {s.label}
                      </span>
                      <span className="font-mono text-sm font-bold text-slate-900">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-[10px] text-slate-400">
                    Last updated: <span className="font-medium text-slate-600">{knowledgeHubPageStats.lastUpdated}</span>
                  </p>
                </div>
              </div>
            </aside>

            {/* ─── Report Table ─── */}
            <div>
              {/* Table header bar */}
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900">
                    Reports
                  </h2>
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-500">
                    {filtered.length}
                  </span>
                </div>
                {(search || selectedType !== ALL_TYPES) && (
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="size-3 text-slate-400" aria-hidden="true" />
                    {selectedType !== ALL_TYPES && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary-900 px-2.5 py-1 text-[10px] font-semibold text-white">
                        {selectedType}
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedType(ALL_TYPES)
                            setActiveTab('all')
                          }}
                          className="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-white/20"
                          aria-label={`Remove ${selectedType} filter`}
                        >
                          &times;
                        </button>
                      </span>
                    )}
                    {search && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary-900 px-2.5 py-1 text-[10px] font-semibold text-white">
                        &ldquo;{search}&rdquo;
                        <button
                          type="button"
                          onClick={() => setSearch('')}
                          className="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-white/20"
                          aria-label="Clear search"
                        >
                          &times;
                        </button>
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setSearch('')
                        setSelectedType(ALL_TYPES)
                        setActiveTab('all')
                      }}
                      className="text-[10px] font-bold text-brand-600 hover:text-brand-700"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </div>

              {/* Table */}
              {filtered.length === 0 ? (
                <div className="rounded-lg border border-slate-200 bg-white py-16 text-center">
                  <Search className="mx-auto size-8 text-slate-300" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium text-slate-500">
                    No reports found
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Try adjusting your search or category filter
                  </p>
                </div>
              ) : (
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  {/* Table head */}
                  <div className="hidden border-b border-slate-200 bg-slate-50 px-5 py-2.5 sm:grid sm:grid-cols-[1fr_120px_80px_80px_100px_40px] sm:gap-4">
                    {['Report', 'Sector', 'Date', 'Pages', 'Downloads', ''].map(
                      (h) => (
                        <span
                          key={h}
                          className="text-[10px] font-bold uppercase tracking-wider text-slate-400"
                        >
                          {h}
                        </span>
                      ),
                    )}
                  </div>

                  {/* Table rows */}
                  {filtered.map((r, idx) => (
                    <div
                      key={r.id}
                      className={cn(
                        'group cursor-pointer transition-colors hover:bg-brand-600/[0.02]',
                        idx !== filtered.length - 1 && 'border-b border-slate-100',
                      )}
                    >
                      <div className="grid items-center gap-4 px-5 py-4 sm:grid-cols-[1fr_120px_80px_80px_100px_40px]">
                        {/* Title cell */}
                        <div className="min-w-0">
                          <div className="flex items-start gap-2.5">
                            <span
                              className={cn(
                                'mt-0.5 flex size-7 shrink-0 items-center justify-center rounded border',
                                r.typeColor,
                              )}
                            >
                              <r.typeIcon className="size-3.5" aria-hidden="true" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-[13px] font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                                {r.title}
                              </h3>
                              {r.subtitle && (
                                <p className="mt-0.5 text-[11px] text-slate-400 line-clamp-1">
                                  {r.subtitle}
                                </p>
                              )}
                              <div className="mt-1 flex items-center gap-2 sm:hidden">
                                <span className="text-[10px] text-slate-500">{r.sector}</span>
                                <span className="text-[10px] text-slate-400">{r.date}</span>
                                <span className="text-[10px] text-slate-400">{r.pages}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Sector */}
                        <span className="hidden text-xs font-medium text-slate-600 sm:block">
                          {r.sector}
                        </span>

                        {/* Date */}
                        <span className="hidden font-mono text-xs text-slate-500 sm:block">
                          {r.date}
                        </span>

                        {/* Pages */}
                        <span className="hidden font-mono text-xs text-slate-500 sm:block">
                          {r.pages}
                        </span>

                        {/* Downloads */}
                        <span className="hidden items-center gap-1 text-xs text-slate-500 sm:flex">
                          <Download className="size-2.5" aria-hidden="true" />
                          {r.downloads}
                        </span>

                        {/* Access indicator */}
                        <div className="hidden items-center justify-end sm:flex">
                          {r.locked ? (
                            <Lock className="size-3.5 text-slate-300" aria-hidden="true" />
                          ) : (
                            <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-600">
                              Free
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Expert quote */}
              <div className="mt-8 border-l-2 border-brand-600 bg-white py-4 pl-6 pr-4">
                <p className="text-sm italic leading-relaxed text-slate-600">
                  "The LankaTalks Knowledge Hub has become an indispensable resource for our
                  investment research team. The depth of sector analysis and primary survey data
                  is unmatched in the Sri Lankan market."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="size-7 rounded-full bg-secondary-900" />
                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      Dr. Nandika Perera
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Chief Economist, Ceylon Chamber of Commerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA — Bottom conversion band
        ═══════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
          <div className="relative overflow-hidden border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1fr_auto]">
              <div className="p-8 sm:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
                  Upgrade Your Access
                </p>
                <h3 className="mt-2 text-xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-2xl">
                  Unlock the Full Library
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
                  Subscribe for unlimited access to all{' '}
                  <span className="font-semibold text-slate-700">
                    {knowledgeHubPageStats.totalReports.toLocaleString()}+
                  </span>{' '}
                  reports, advanced search, email alerts for new publications,
                  offline downloads and citation export tools.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-brand-600 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
                  >
                    Subscribe Now
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 border border-slate-200 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
                  >
                    View Plans
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center gap-4 border-l border-slate-100 px-8 py-8 sm:py-0">
                {[
                  { val: `${knowledgeHubPageStats.totalReports.toLocaleString()}+`, lbl: 'Reports' },
                  { val: `${knowledgeHubPageStats.freeReports}+`, lbl: 'Free Reports' },
                  { val: `${knowledgeHubPageStats.dataPoints}+`, lbl: 'Data Points' },
                ].map((s) => (
                  <div key={s.lbl} className="text-right">
                    <p className="font-mono text-xl font-bold text-slate-900">
                      {s.val}
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                      {s.lbl}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
