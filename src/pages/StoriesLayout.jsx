import { Outlet } from 'react-router-dom'
import TopNav from '@/components/layout/TopNav'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreakingNewsBanner from '@/components/home/BreakingNewsBanner'
import AdSlotRow from '@/components/ui/AdSlotRow'
import MarketTicker from '@/components/home/MarketTicker'

export default function StoriesLayout() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <BreakingNewsBanner />
      <Header />
      <AdSlotRow />
      {/* <MarketTicker /> */}
      <Outlet />
      <Footer />
    </div>
  )
}
