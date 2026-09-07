import ArticleCard from '@/components/ui/ArticleCard'
import SectionTitle from '@/components/ui/SectionTitle'
import { heroStories } from '@/data/news'

export default function HeroSection() {
  const [lead, ...rest] = heroStories

  return (
    <section className="my-8">
      <SectionTitle
        color="bg-brand-600"
        link={{ label: 'All Stories', href: '/stories' }}
        linkClassName="text-[#FFB900] hover:text-[#FFB900]"
      >
        Fresh Updates from LankaTalks
      </SectionTitle>
      <div className="grid gap-5 md:grid-cols-2">
        <ArticleCard story={lead} featured />
        <div className="grid gap-5 sm:grid-cols-2">
          {rest.map((story) => (
            <ArticleCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  )
}
