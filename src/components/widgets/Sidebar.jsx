import EventsWidget from './EventsWidget'
import IntelligencePromo from './IntelligencePromo'
import MostPopularWidget from './MostPopularWidget'
import SocialWidget from './SocialWidget'

export default function Sidebar() {
  return (
    <aside className="top-[120px] space-y-6 self-start lg:sticky">
      <SocialWidget />
      <IntelligencePromo />
      <MostPopularWidget />
      <EventsWidget />
    </aside>
  )
}
