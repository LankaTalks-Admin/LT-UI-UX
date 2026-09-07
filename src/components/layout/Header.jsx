import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navItems, siteConfig } from '@/config/site'
import { sectors } from '@/data/sectors'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import AuthWidget from '@/components/ui/AuthWidget'
import HeaderSearch from '@/components/ui/HeaderSearch'
import WeatherWidget from '@/components/ui/WeatherWidget'
import MobileSectorNav from '@/components/stories/MobileSectorNav'
import { cn } from '@/lib/cn'
import ltLogo from '@/assets/lt-logo.png'

export default function Header() {
  const scrolled = useScrollPosition()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [sectorsOpen, setSectorsOpen] = useState(false)
  const [sectorsMenuOpen, setSectorsMenuOpen] = useState(false)
  const sectorsTimer = useRef(null)
  const activeTab = navItems.find(
    (item) => item.href && location.pathname.startsWith(item.href),
  )
  const isHome = location.pathname === '/'
  const tagline = isHome ? siteConfig.tagline : activeTab?.label || siteConfig.tagline
  const sectorsRef = useRef(null)

  const openSectors = useCallback(() => {
    clearTimeout(sectorsTimer.current)
    setSectorsOpen(true)
  }, [])

  const closeSectors = useCallback(() => {
    sectorsTimer.current = setTimeout(() => setSectorsOpen(false), 140)
  }, [])

  const cancelCloseSectors = useCallback(() => {
    clearTimeout(sectorsTimer.current)
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSectorsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    return () => clearTimeout(sectorsTimer.current)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-slate-200 bg-white transition-shadow',
        scrolled && 'shadow-md',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={ltLogo} alt="LankaTalks" className="h-10 w-auto" />
          <span className="hidden text-2xl font-light text-slate-300 md:inline">|</span>
          <span className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 md:block">
            {tagline}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <AuthWidget />
          <a
            href="#"
            className="whitespace-nowrap bg-brand-600 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
          >
            Subscribe
          </a>
          <HeaderSearch />
          <WeatherWidget />
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => {
              setMenuOpen((v) => !v)
              setSectorsMenuOpen(false)
            }}
            className="p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <nav className="hidden bg-[#A9000C] lg:block" aria-label="Primary">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            {navItems.filter((item) => !item.right).map((item) => {
              const isActive = activeTab?.label === item.label
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    'px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/15',
                    isActive && 'bg-white/15',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center">
            {navItems.filter((item) => item.right).map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    ref={sectorsRef}
                    onMouseEnter={openSectors}
                    onMouseLeave={closeSectors}
                  >
                    <span
                      className={cn(
                        'flex cursor-default items-center gap-1 px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors',
                        sectorsOpen && 'bg-white/15',
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'size-3 transition-transform',
                          sectorsOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </span>

                    {sectorsOpen && (
                      <div
                        className="absolute right-0 top-full z-50 w-screen max-w-5xl max-h-[70vh] overflow-y-auto border-t border-slate-200 bg-white shadow-xl"
                        onMouseEnter={cancelCloseSectors}
                        onMouseLeave={closeSectors}
                        role="menu"
                      >
                        <div className="mx-auto max-w-5xl px-6 py-5">
                          <div className="mb-4">
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                              {sectors.length} Sectors
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-x-6 gap-y-4 md:grid-cols-4 lg:grid-cols-5">
                            {sectors.map((sector) => (
                              <div key={sector.slug}>
                                <Link
                                  to={`/stories/${sector.slug}`}
                                  onClick={() => setSectorsOpen(false)}
                                  className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-secondary-900 hover:text-brand-700"
                                  role="menuitem"
                                >
                                  {sector.name}
                                </Link>
                                <div className="space-y-0.5">
                                  {sector.subSectors.map((sub) => (
                                    <Link
                                      key={sub.slug}
                                      to={`/stories/${sector.slug}/${sub.slug}`}
                                      onClick={() => setSectorsOpen(false)}
                                      className="block truncate text-[11px] text-slate-600 transition-colors hover:bg-secondary-900 hover:text-white rounded px-1.5 py-0.5"
                                      role="menuitem"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    'px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/15',
                    activeTab?.label === item.label && 'bg-white/15',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-3" aria-label="Mobile">
            <div className="flex flex-wrap gap-1">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setSectorsMenuOpen((v) => !v)}
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 text-[13px] font-bold uppercase tracking-wide',
                        sectorsMenuOpen ? 'bg-secondary-900 text-white' : 'text-slate-700',
                      )}
                      aria-expanded={sectorsMenuOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'size-3.5 transition-transform',
                          sectorsMenuOpen && 'rotate-180',
                        )}
                      />
                    </button>
                  )
                }
                const isActive = activeTab?.label === item.label
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      'px-3 py-2 text-[13px] font-bold uppercase tracking-wide',
                      isActive ? 'bg-secondary-900 text-white' : 'text-slate-700',
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
            {sectorsMenuOpen && (
              <div className="mt-3 border-t border-slate-200 pt-3">
                <MobileSectorNav onNavigate={() => setMenuOpen(false)} />
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
