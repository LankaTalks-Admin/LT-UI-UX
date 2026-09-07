import AdBanner from '@/components/ui/AdBanner'
import BreakingNewsBanner from '@/components/home/BreakingNewsBanner'
import CareersSection from '@/components/home/CareersSection'
import HeroSection from '@/components/home/HeroSection'
import IntelligenceBanner from '@/components/home/IntelligenceBanner'
import IntelligenceSection from '@/components/home/IntelligenceSection'
import KnowledgeHubSection from '@/components/home/KnowledgeHubSection'
import MarketTicker from '@/components/home/MarketTicker'
import SectionGrid from '@/components/home/SectionGrid'
import TendersSection from '@/components/home/TendersSection'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TopNav from '@/components/layout/TopNav'
import Sidebar from '@/components/widgets/Sidebar'
import { advertiseAd, careersAd, headerSlotAd, subscribeAd } from '@/data/ads'
import { newsSections } from '@/data/news'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <AdBanner ad={headerSlotAd} dismissible />
      <Header />
      <BreakingNewsBanner />
      <MarketTicker />

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <IntelligenceBanner />

        <div className="grid gap-8 py-6 lg:grid-cols-[1fr_280px]">
          <div>
            <HeroSection />

            <AdBanner ad={advertiseAd} />

            <SectionGrid section={newsSections[0]} />
            <SectionGrid section={newsSections[1]} />

            <AdBanner ad={subscribeAd} />

            <IntelligenceSection />

            <SectionGrid section={newsSections[2]} />
            <SectionGrid section={newsSections[3]} />

            <AdBanner ad={careersAd} />

            <SectionGrid section={newsSections[4]} />
            <SectionGrid section={newsSections[5]} />

            <TendersSection />
            <CareersSection />
            <KnowledgeHubSection />
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  )
}
