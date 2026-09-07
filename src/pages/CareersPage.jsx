import { useMemo, useState, useCallback, useRef, useEffect } from 'react'
import {
  Briefcase,
  Building2,
  ChevronDown,
  Clock,
  GraduationCap,
  MapPin,
  Search,
  SlidersHorizontal,
  Tag,
  X,
  Bookmark,
  RotateCcw,
  Star,
} from 'lucide-react'
import TopNav from '@/components/layout/TopNav'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Breadcrumbs from '@/components/stories/Breadcrumbs'
import Pagination from '@/components/stories/Pagination'
import AdPlaceholder from '@/components/ui/AdPlaceholder'
import { cn } from '@/lib/cn'
import {
  careers,
  CAREER_TYPES,
  LOCATIONS,
  DEPARTMENTS,
  SALARY_RANGES,
  EXPERIENCE_LEVELS,
  SORT_OPTIONS,
  careersSummary,
} from '@/data/careers'
import { adSlots } from '@/data/ads'

const PAGE_SIZE = 8

function daysAgo(dateStr) {
  const now = new Date('2026-06-16')
  const posted = new Date(dateStr)
  const diff = Math.floor((now - posted) / (1000 * 60 * 60 * 24))
  if (diff === 0) return 'Today'
  if (diff === 1) return 'Yesterday'
  return `${diff}d ago`
}

function FilterChip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 rounded bg-secondary-900 px-2 py-1 text-[10px] font-semibold text-white">
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="rounded-sm p-0.5 transition-colors hover:bg-white/20"
        aria-label={`Remove ${label}`}
      >
        <X className="size-2.5" />
      </button>
    </span>
  )
}

function DropdownFilter({ label, icon: Icon, children, count }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-1.5 rounded-md border px-3 py-2 text-[11px] font-semibold transition-all',
          count > 0
            ? 'border-brand-600 bg-brand-50 text-brand-700'
            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50',
        )}
      >
        <Icon className="size-3 text-slate-400" />
        {label}
        {count > 0 && (
          <span className="rounded bg-brand-600 px-1 py-0.5 text-[8px] font-bold text-white">
            {count}
          </span>
        )}
        <ChevronDown
          className={cn(
            'size-3 text-slate-400 transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <div className="absolute left-0 z-30 mt-1.5 min-w-[220px] rounded-lg border border-slate-200 bg-white py-1.5 shadow-xl">
          {children}
        </div>
      )}
    </div>
  )
}

function DropdownOption({ label, checked, onChange, count }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={cn(
        'flex w-full items-center gap-2.5 px-3 py-2 text-left text-[12px] transition-colors',
        checked
          ? 'bg-brand-50 text-brand-700 font-semibold'
          : 'text-slate-600 hover:bg-slate-50',
      )}
    >
      <span
        className={cn(
          'flex size-3.5 shrink-0 items-center justify-center rounded-sm border transition-colors',
          checked
            ? 'border-brand-600 bg-brand-600'
            : 'border-slate-300',
        )}
      >
        {checked && (
          <svg className="size-2 text-white" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="flex-1">{label}</span>
      {count !== undefined && (
        <span className="text-[10px] text-slate-400">{count}</span>
      )}
    </button>
  )
}

function DropdownRadio({ label, selected, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={cn(
        'flex w-full items-center gap-2.5 px-3 py-2 text-left text-[12px] transition-colors',
        selected
          ? 'bg-brand-50 text-brand-700 font-semibold'
          : 'text-slate-600 hover:bg-slate-50',
      )}
    >
      <span
        className={cn(
          'flex size-3.5 shrink-0 items-center justify-center rounded-full border transition-colors',
          selected ? 'border-brand-600' : 'border-slate-300',
        )}
      >
        {selected && <span className="size-1.5 rounded-full bg-brand-600" />}
      </span>
      <span className="flex-1">{label}</span>
    </button>
  )
}

export default function CareersPage() {
  const [search, setSearch] = useState('')
  const [locationSearch, setLocationSearch] = useState('')
  const [activeTab, setActiveTab] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('newest')
  const [salaryRange, setSalaryRange] = useState(null)
  const [selectedLocations, setSelectedLocations] = useState([])
  const [selectedDepartments, setSelectedDepartments] = useState([])
  const [selectedExperience, setSelectedExperience] = useState([])

  const toggleLocation = useCallback((loc) => {
    setSelectedLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc],
    )
    setCurrentPage(1)
  }, [])

  const toggleDepartment = useCallback((dep) => {
    setSelectedDepartments((prev) =>
      prev.includes(dep) ? prev.filter((d) => d !== dep) : [...prev, dep],
    )
    setCurrentPage(1)
  }, [])

  const toggleExperience = useCallback((exp) => {
    setSelectedExperience((prev) =>
      prev.includes(exp) ? prev.filter((e) => e !== exp) : [...prev, exp],
    )
    setCurrentPage(1)
  }, [])

  const clearAllFilters = useCallback(() => {
    setSearch('')
    setLocationSearch('')
    setActiveTab('All')
    setSortBy('newest')
    setSalaryRange(null)
    setSelectedLocations([])
    setSelectedDepartments([])
    setSelectedExperience([])
    setCurrentPage(1)
  }, [])

  const hasActiveFilters =
    search ||
    locationSearch ||
    activeTab !== 'All' ||
    salaryRange !== null ||
    selectedLocations.length > 0 ||
    selectedDepartments.length > 0 ||
    selectedExperience.length > 0

  const filtered = useMemo(() => {
    let result = [...careers]

    if (activeTab !== 'All') {
      result = result.filter((c) => c.type === activeTab)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (c) =>
          c.role.toLowerCase().includes(q) ||
          c.company.toLowerCase().includes(q) ||
          c.department.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q),
      )
    }

    if (locationSearch.trim()) {
      const q = locationSearch.toLowerCase()
      result = result.filter((c) => c.location.toLowerCase().includes(q))
    }

    if (selectedLocations.length > 0) {
      result = result.filter((c) => selectedLocations.includes(c.location))
    }

    if (selectedDepartments.length > 0) {
      result = result.filter((c) => selectedDepartments.includes(c.department))
    }

    if (selectedExperience.length > 0) {
      result = result.filter((c) => selectedExperience.includes(c.experienceLevel))
    }

    if (salaryRange !== null) {
      const range = SALARY_RANGES[salaryRange]
      result = result.filter(
        (c) => c.salaryValue >= range.min && c.salaryValue < range.max,
      )
    }

    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))
        break
      case 'oldest':
        result.sort((a, b) => new Date(a.postedAt) - new Date(b.postedAt))
        break
      case 'salary-high':
        result.sort((a, b) => b.salaryValue - a.salaryValue)
        break
      case 'salary-low':
        result.sort((a, b) => a.salaryValue - b.salaryValue)
        break
    }

    return result
  }, [
    search,
    locationSearch,
    activeTab,
    sortBy,
    salaryRange,
    selectedLocations,
    selectedDepartments,
    selectedExperience,
  ])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paged = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  )

  const locationCounts = useMemo(() => {
    const counts = {}
    careers.forEach((c) => {
      counts[c.location] = (counts[c.location] || 0) + 1
    })
    return counts
  }, [])

  const departmentCounts = useMemo(() => {
    const counts = {}
    careers.forEach((c) => {
      counts[c.department] = (counts[c.department] || 0) + 1
    })
    return counts
  }, [])

  const experienceCounts = useMemo(() => {
    const counts = {}
    careers.forEach((c) => {
      counts[c.experienceLevel] = (counts[c.experienceLevel] || 0) + 1
    })
    return counts
  }, [])

  const removeFilter = useCallback(
    (type, value) => {
      switch (type) {
        case 'tab':
          setActiveTab('All')
          break
        case 'location':
          setSelectedLocations((prev) => prev.filter((l) => l !== value))
          break
        case 'department':
          setSelectedDepartments((prev) => prev.filter((d) => d !== value))
          break
        case 'experience':
          setSelectedExperience((prev) => prev.filter((e) => e !== value))
          break
        case 'salary':
          setSalaryRange(null)
          break
        case 'search':
          setSearch('')
          break
        case 'locationSearch':
          setLocationSearch('')
          break
      }
      setCurrentPage(1)
    },
    [],
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <Header />

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="pt-4">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Careers' }]} />
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
                    Live Career Opportunities
                  </span>
                </div>
                <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-[42px]">
                  Jobs & Internships
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  Discover opportunities at Sri Lanka's leading companies and institutions
                </p>
              </div>

              {/* Hero stats — right-aligned */}
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { value: careersSummary.total.toString(), label: 'Open Positions' },
                  { value: careersSummary.companies.toString(), label: 'Companies' },
                  { value: careersSummary.newThisWeek.toString(), label: 'New This Week' },
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

        {/* Stats Cards */}
        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-brand-50">
                <Briefcase className="size-5 text-brand-600" />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Open Positions
                </p>
                <p className="text-xl font-extrabold text-slate-900">{careersSummary.total}</p>
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
                  Companies
                </p>
                <p className="text-xl font-extrabold text-slate-900">
                  {careersSummary.companies}
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
                  New This Week
                </p>
                <p className="text-xl font-extrabold text-emerald-600">
                  {careersSummary.newThisWeek}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search + Filter Toolbar */}
        <div className="mb-5 rounded-lg border border-slate-200 bg-white shadow-sm">
          {/* Search Row */}
          <div className="flex items-center gap-3 border-b border-slate-100 p-3">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Search roles, companies, keywords..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-[13px] text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div className="relative sm:w-44">
              <MapPin
                className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Location"
                value={locationSearch}
                onChange={(e) => {
                  setLocationSearch(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-[13px] text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Filter Dropdowns Row */}
          <div className="flex flex-wrap items-center gap-2 p-3">
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">
              <SlidersHorizontal className="size-3" />
              Filters
            </span>

            {/* Job Type */}
            <DropdownFilter
              label="Job Type"
              icon={Briefcase}
              count={activeTab !== 'All' ? 1 : 0}
            >
              {CAREER_TYPES.map((type) => {
                const cnt = careers.filter((c) => c.type === type).length
                return (
                  <DropdownOption
                    key={type}
                    label={type}
                    checked={activeTab === type}
                    onChange={() => {
                      setActiveTab(activeTab === type ? 'All' : type)
                      setCurrentPage(1)
                    }}
                    count={cnt}
                  />
                )
              })}
            </DropdownFilter>

            {/* Location */}
            <DropdownFilter
              label="Location"
              icon={MapPin}
              count={selectedLocations.length}
            >
              {LOCATIONS.map((loc) => (
                <DropdownOption
                  key={loc}
                  label={loc}
                  checked={selectedLocations.includes(loc)}
                  onChange={() => toggleLocation(loc)}
                  count={locationCounts[loc] || 0}
                />
              ))}
            </DropdownFilter>

            {/* Department */}
            <DropdownFilter
              label="Department"
              icon={Building2}
              count={selectedDepartments.length}
            >
              {DEPARTMENTS.map((dep) => (
                <DropdownOption
                  key={dep}
                  label={dep}
                  checked={selectedDepartments.includes(dep)}
                  onChange={() => toggleDepartment(dep)}
                  count={departmentCounts[dep] || 0}
                />
              ))}
            </DropdownFilter>

            {/* Experience */}
            <DropdownFilter
              label="Experience"
              icon={GraduationCap}
              count={selectedExperience.length}
            >
              {EXPERIENCE_LEVELS.map((exp) => (
                <DropdownOption
                  key={exp}
                  label={exp}
                  checked={selectedExperience.includes(exp)}
                  onChange={() => toggleExperience(exp)}
                  count={experienceCounts[exp] || 0}
                />
              ))}
            </DropdownFilter>

            {/* Salary */}
            <DropdownFilter
              label="Salary"
              icon={Briefcase}
              count={salaryRange !== null ? 1 : 0}
            >
              {SALARY_RANGES.map((range, i) => (
                <DropdownRadio
                  key={range.label}
                  label={range.label}
                  selected={salaryRange === i}
                  onChange={() => {
                    setSalaryRange(salaryRange === i ? null : i)
                    setCurrentPage(1)
                  }}
                />
              ))}
            </DropdownFilter>

            {/* Reset */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="flex items-center gap-1 rounded-md px-2.5 py-2 text-[11px] font-medium text-brand-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <RotateCcw className="size-3" />
                Reset
              </button>
            )}

            {/* Sort — right aligned */}
            <div className="ml-auto flex items-center gap-2">
              <span className="hidden text-[10px] text-slate-400 sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value)
                  setCurrentPage(1)
                }}
                className="cursor-pointer rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-700 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="mb-4 flex flex-wrap items-center gap-1.5">
            {activeTab !== 'All' && (
              <FilterChip label={activeTab} onRemove={() => removeFilter('tab')} />
            )}
            {search && (
              <FilterChip
                label={`"${search}"`}
                onRemove={() => removeFilter('search')}
              />
            )}
            {locationSearch && (
              <FilterChip
                label={`Location: "${locationSearch}"`}
                onRemove={() => removeFilter('locationSearch')}
              />
            )}
            {selectedLocations.map((loc) => (
              <FilterChip
                key={loc}
                label={loc}
                onRemove={() => removeFilter('location', loc)}
              />
            ))}
            {selectedDepartments.map((dep) => (
              <FilterChip
                key={dep}
                label={dep}
                onRemove={() => removeFilter('department', dep)}
              />
            ))}
            {selectedExperience.map((exp) => (
              <FilterChip
                key={exp}
                label={exp}
                onRemove={() => removeFilter('experience', exp)}
              />
            ))}
            {salaryRange !== null && (
              <FilterChip
                label={SALARY_RANGES[salaryRange].label}
                onRemove={() => removeFilter('salary')}
              />
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[12px] text-slate-500">
            Showing{' '}
            <span className="font-semibold text-slate-900">{paged.length}</span> of{' '}
            <span className="font-semibold text-slate-900">{filtered.length}</span>{' '}
            positions
          </p>
        </div>

        {/* Job Cards — 2-col grid */}
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-slate-200 bg-white py-16 text-center">
            <Search className="mx-auto size-8 text-slate-300" aria-hidden="true" />
            <p className="mt-3 text-sm font-medium text-slate-500">
              No positions match your filters
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Try adjusting your filters or search terms
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="mt-4 cursor-pointer rounded-lg bg-brand-600 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {paged.map((job) => (
              <div
                key={job.id}
                className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[4px_4px_0_0_#020617]"
              >
                {job.isFeatured && (
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-700 border border-amber-200">
                    <Star className="size-2.5 fill-amber-400" />
                    Featured
                  </span>
                )}

                <div className="flex items-start gap-3">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center border text-xs font-black ${job.logoColor}`}
                  >
                    {job.company
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {job.company}
                    </p>
                    <h3 className="mt-0.5 text-[14px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                      {job.role}
                    </h3>
                  </div>
                </div>

                <p className="mt-2.5 line-clamp-2 text-[11px] leading-relaxed text-slate-500">
                  {job.description}
                </p>

                <div className="mt-auto pt-3 flex flex-wrap items-center gap-1.5">
                  <span
                    className={cn(
                      'rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider',
                      job.type === 'Full-time'
                        ? 'border-sky-200 bg-sky-50 text-sky-700'
                        : job.type === 'Internship'
                          ? 'border-violet-200 bg-violet-50 text-violet-700'
                          : job.type === 'Part-time'
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                            : 'border-orange-200 bg-orange-50 text-orange-700',
                    )}
                  >
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-600">
                    <Briefcase className="size-2.5" />
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-600">
                    <MapPin className="size-2.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-600">
                    <GraduationCap className="size-2.5" />
                    {job.experienceLevel}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[13px] font-bold text-slate-900">
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400">
                      <Clock className="size-2.5" />
                      {daysAgo(job.postedAt)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-md border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                    >
                      <Bookmark className="size-2.5" />
                      Save
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded-md bg-brand-600 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        {/* CTA Banner */}
        <div className="mt-8 rounded-lg border-2 border-secondary-900 bg-secondary-900 p-6 text-center sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            Post a Job
          </p>
          <p className="mt-2 max-w-xl mx-auto text-sm leading-relaxed text-slate-300">
            Reach thousands of qualified professionals in Sri Lanka. Post your job or
            internship listing and connect with top talent.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="cursor-pointer border-2 border-white bg-white px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider text-secondary-900 transition-colors hover:bg-transparent hover:text-white"
            >
              Post a Job
            </button>
            <button
              type="button"
              className="cursor-pointer border-2 border-white/30 px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
            >
              View Pricing
            </button>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
