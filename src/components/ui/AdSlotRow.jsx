import AdPlaceholder from '@/components/ui/AdPlaceholder'
import { adSlots } from '@/data/ads'

export default function AdSlotRow() {
  return (
    <section aria-label="Advertisement slots" className="mt-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {adSlots.slice(0, 3).map((slot) => (
          <AdPlaceholder key={slot.id} slot={slot} />
        ))}
      </div>
    </section>
  )
}
