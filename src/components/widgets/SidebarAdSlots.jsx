import AdPlaceholder from '@/components/ui/AdPlaceholder'
import { sidebarAdSlots } from '@/data/ads'

export default function SidebarAdSlots({ ads = sidebarAdSlots }) {
  return (
    <div className="space-y-6">
      {ads.map((slot) => (
        <AdPlaceholder key={slot.id} slot={slot} />
      ))}
    </div>
  )
}
