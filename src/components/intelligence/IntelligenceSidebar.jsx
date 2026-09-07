import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Mail,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { currencyRates } from '@/data/intelligencePage'
import { sectorIntel } from '@/data/sectorIntel'
import { cn } from '@/lib/cn'

function MarketSnapshot() {
  const topCurrencies = currencyRates.slice(0, 4)
  return (
    <div className="border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b-2 border-brand-600 bg-slate-900 px-4 py-2.5">
        <Zap className="size-4 text-amber-400" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Market Snapshot
        </h3>
      </div>
      <div className="divide-y divide-slate-100">
        {topCurrencies.map((c) => {
          const isUp = c.change > 0
          return (
            <div
              key={c.code}
              className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base" aria-hidden="true">
                  {c.flag}
                </span>
                <div>
                  <span className="text-[11px] font-bold text-slate-900">
                    {c.code}/LKR
                  </span>
                  <p className="text-[9px] text-slate-500">{c.name}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono text-[13px] font-bold text-slate-900">
                  {c.rate.toFixed(2)}
                </span>
                <span
                  className={cn(
                    'ml-1.5 flex items-center gap-0.5 text-[9px] font-semibold',
                    isUp ? 'text-brand-600' : 'text-emerald-600',
                  )}
                >
                  {isUp ? (
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  ) : (
                    <ArrowDownRight className="size-3" aria-hidden="true" />
                  )}
                  {isUp ? '+' : ''}
                  {c.change.toFixed(2)}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <a
        href="#"
        className="group flex items-center justify-center gap-1.5 border-t border-slate-200 py-2.5 text-[10px] font-bold uppercase tracking-wider text-brand-600 transition-colors hover:bg-brand-50"
      >
        All Exchange Rates
        <ChevronRight
          className="size-3 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}

function EconomicCalendar() {
  const upcoming = [
    { date: 'Jul 15', title: 'CBSL Policy Rate Decision', impact: 'High', impactColor: 'text-red-600 bg-red-50 border-red-200' },
    { date: 'Jul 22', title: 'IMF 5th Review Mission', impact: 'High', impactColor: 'text-red-600 bg-red-50 border-red-200' },
    { date: 'Aug 01', title: 'Q2 Earnings Season', impact: 'Medium', impactColor: 'text-amber-600 bg-amber-50 border-amber-200' },
    { date: 'Aug 14', title: 'GDP Q2 Estimate', impact: 'High', impactColor: 'text-red-600 bg-red-50 border-red-200' },
  ]

  return (
    <div className="border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b-2 border-brand-600 bg-slate-900 px-4 py-2.5">
        <Calendar className="size-4 text-amber-400" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Economic Calendar
        </h3>
      </div>
      <div className="divide-y divide-slate-100">
        {upcoming.map((event, i) => (
          <div
            key={i}
            className="flex gap-3 px-4 py-3 transition-colors hover:bg-slate-50"
          >
            <div className="flex w-10 shrink-0 flex-col items-center justify-center border border-slate-200 bg-slate-50">
              <span className="font-mono text-[10px] font-bold leading-none text-slate-900">
                {event.date.split(' ')[1]}
              </span>
              <span className="text-[8px] font-bold uppercase text-slate-500">
                {event.date.split(' ')[0]}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold leading-snug text-slate-900">
                {event.title}
              </p>
              <span
                className={cn(
                  'mt-1 inline-block border px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider',
                  event.impactColor,
                )}
              >
                {event.impact}
              </span>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="group flex items-center justify-center gap-1.5 border-t border-slate-200 py-2.5 text-[10px] font-bold uppercase tracking-wider text-brand-600 transition-colors hover:bg-brand-50"
      >
        Full Calendar
        <ChevronRight
          className="size-3 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}

function SectorHighlights() {
  const topSectors = [...sectorIntel]
    .sort((a, b) => b.change - a.change)
    .slice(0, 4)

  return (
    <div className="border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b-2 border-brand-600 bg-slate-900 px-4 py-2.5">
        <TrendingUp className="size-4 text-amber-400" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Top Sectors
        </h3>
      </div>
      <div className="divide-y divide-slate-100">
        {topSectors.map((sector) => {
          const up = sector.change >= 0
          return (
            <div
              key={sector.id}
              className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-2.5">
                <div className={`size-2.5 rounded-full ${sector.color}`} />
                <div>
                  <span className="text-[11px] font-bold text-slate-900">
                    {sector.shortName}
                  </span>
                  <p className="text-[9px] text-slate-500">
                    {sector.topStock} · {sector.topPrice}
                  </p>
                </div>
              </div>
              <span
                className={cn(
                  'flex items-center gap-0.5 font-mono text-[11px] font-bold',
                  up ? 'text-emerald-600' : 'text-red-500',
                )}
              >
                {up ? (
                  <TrendingUp className="size-3" aria-hidden="true" />
                ) : (
                  <TrendingDown className="size-3" aria-hidden="true" />
                )}
                {up ? '+' : ''}
                {sector.change}%
              </span>
            </div>
          )
        })}
      </div>
      <a
        href="#"
        className="group flex items-center justify-center gap-1.5 border-t border-slate-200 py-2.5 text-[10px] font-bold uppercase tracking-wider text-brand-600 transition-colors hover:bg-brand-50"
      >
        All Sectors
        <ChevronRight
          className="size-3 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}

function NewsletterSignup() {
  return (
    <div className="bg-slate-900 p-5 text-center">
      <h3 className="font-serif text-lg font-black text-white">
        Intelligence Briefing
      </h3>
      <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
        Weekly economic digest — market data, sector insights and analyst
        commentary delivered to your inbox.
      </p>
      <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="intel-newsletter-email" className="sr-only">
          Email address
        </label>
        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-white/40"
            aria-hidden="true"
          />
          <input
            id="intel-newsletter-email"
            type="email"
            required
            placeholder="Enter Email"
            className="w-full border border-white/10 bg-white/10 py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-white/50 focus:border-amber-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="mt-3 w-full bg-brand-600 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
        >
          Subscribe Free
        </button>
      </form>
    </div>
  )
}

function PartnerPromo() {
  return (
    <div className="border-2 border-secondary-900 bg-secondary-900 p-5">
      <p className="text-[9px] font-bold uppercase tracking-wider text-amber-400">
        Full Intelligence Access
      </p>
      <p className="mt-2 text-[12px] leading-relaxed text-slate-300">
        Get real-time data, detailed sector reports and exclusive infographics
        with a LankaTalks subscription.
      </p>
      <a
        href="#"
        className="group mt-4 inline-flex items-center gap-1.5 border-2 border-amber-400 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-amber-400 transition-colors hover:bg-amber-400 hover:text-secondary-900"
      >
        Subscribe Now
        <ArrowRight
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}

export default function IntelligenceSidebar() {
  return (
    <aside className="top-[120px] space-y-5 self-start lg:sticky">
      <MarketSnapshot />
      <EconomicCalendar />
      <SectorHighlights />
      <NewsletterSignup />
      <PartnerPromo />
    </aside>
  )
}
