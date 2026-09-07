import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TopNav from '@/components/layout/TopNav'
import Breadcrumbs from '@/components/stories/Breadcrumbs'
import AdPlaceholder from '@/components/ui/AdPlaceholder'
import { adSlots } from '@/data/ads'
import EconomyOverview from '@/components/intelligence/EconomyOverview'
import BarChart from '@/components/intelligence/BarChart'
import LineSparkline from '@/components/intelligence/LineSparkline'
import TradeBalanceChart from '@/components/intelligence/TradeBalanceChart'
import FdiBySector from '@/components/intelligence/FdiBySector'
import CurrencyRates from '@/components/intelligence/CurrencyRates'
import LatestIntelGrid from '@/components/intelligence/LatestIntelGrid'
import SectorIntelScroll from '@/components/intelligence/SectorIntelScroll'
import WhatsNextTimeline from '@/components/intelligence/WhatsNextTimeline'
import DeepDivesSection from '@/components/intelligence/DeepDivesSection'
import IntelligenceSidebar from '@/components/intelligence/IntelligenceSidebar'
import {
  gdpQuarterly,
  inflationMonthly,
  tradeBalance,
  fdiBySector,
  currencyRates,
  keyIndicators,
} from '@/data/intelligencePage'

export default function IntelligencePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <Header />

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="pt-4">
            <Breadcrumbs
              items={[{ label: 'Home', to: '/' }, { label: 'Intelligence' }]}
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
                    Live Economic Intelligence
                  </span>
                </div>
                <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-[42px]">
                  LK Intelligence
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  Economic dashboard — Key indicators, trade data, FDI flows and
                  currency rates
                </p>
              </div>

              {/* Hero stats — right-aligned */}
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { value: keyIndicators.find(i => i.label === 'GDP Growth')?.value || '4.8%', label: 'GDP Growth' },
                  { value: keyIndicators.find(i => i.label === 'Reserves')?.value || '$6.2B', label: 'Reserves' },
                  { value: keyIndicators.find(i => i.label === 'FDI Inflows')?.value || '$1.5B', label: 'FDI Inflows' },
                  { value: keyIndicators.find(i => i.label === 'Inflation')?.value || '2.9%', label: 'Inflation' },
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

        {/* Main content + Sidebar layout */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <div className="min-w-0 space-y-8">
            <EconomyOverview indicators={keyIndicators} />

            <SectorIntelScroll />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded border border-slate-200 bg-white p-5">
                <BarChart
                  data={gdpQuarterly}
                  title="GDP Growth (Quarterly)"
                  unit="B"
                  color="bg-brand-600"
                />
              </div>
              <div className="rounded border border-slate-200 bg-white p-5">
                <LineSparkline
                  data={inflationMonthly}
                  title="Inflation Rate (CPI)"
                  suffix="%"
                />
              </div>
            </div>

            <LatestIntelGrid />

            <DeepDivesSection />

            <WhatsNextTimeline />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded border border-slate-200 bg-white p-5">
                <TradeBalanceChart data={tradeBalance} />
              </div>
              <div className="rounded border border-slate-200 bg-white p-5">
                <FdiBySector data={fdiBySector} />
              </div>
            </div>

            <div className="rounded border border-slate-200 bg-white p-5">
              <CurrencyRates currencies={currencyRates} />
            </div>

            {/* CTA banner */}
            <div className="rounded border-2 border-secondary-900 bg-secondary-900 p-6 text-center">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Full intelligence access
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Get real-time data, detailed sector reports and exclusive
                infographics with a LankaTalks subscription.
              </p>
              <button
                type="button"
                className="mt-4 cursor-pointer border-2 border-white bg-white px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider text-secondary-900 transition-colors hover:bg-transparent hover:text-white"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <IntelligenceSidebar />
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
