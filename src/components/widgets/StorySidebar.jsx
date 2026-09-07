import FollowUsWidget from './FollowUsWidget'
import NewsletterWidget from './NewsletterWidget'
import PartnerContentWidget from './PartnerContentWidget'
import RecentNewsWidget from './RecentNewsWidget'
import SearchWidget from './SearchWidget'
import SidebarAdSlots from './SidebarAdSlots'
import { subscriptionAdSlots } from '@/data/ads'

export default function StorySidebar({ story }) {
  return (
    <aside className="space-y-6">
      <SearchWidget />
      <SidebarAdSlots />
      <PartnerContentWidget story={story} />
      <FollowUsWidget />
      <RecentNewsWidget />
      <NewsletterWidget />
      <SidebarAdSlots ads={subscriptionAdSlots} />
    </aside>
  )
}
