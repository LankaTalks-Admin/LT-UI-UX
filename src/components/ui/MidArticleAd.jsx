import AdPlaceholder from '@/components/ui/AdPlaceholder'

export default function MidArticleAd({
  label = 'Advertisement',
  size = '728×90',
}) {
  const slot = {
    size,
    type: 'general',
    eyebrow: label,
    title: `${size} In-Content Ad Slot`,
    body: 'Placeholder reserved for sponsor placements.',
    cta: 'Advertise Here',
  }

  return <AdPlaceholder slot={slot} />
}
