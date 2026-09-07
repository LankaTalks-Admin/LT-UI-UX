import { heroStories, newsSections } from '@/data/news'
import { mockStories } from '@/data/mockStories'
import { buildStoryPath, slugify } from '@/lib/slugify'

const viewCounts = [1240, 986, 873, 754, 631, 590, 512, 468, 421, 395, 341, 288, 264, 240, 218, 192, 165, 143, 121, 98, 77, 55, 41]

const heroSectorMap = {
  Technology: { sector: 'tech', subSector: 'e-commerce-digital-retail' },
  Tourism: { sector: 'tourism', subSector: 'hotels-hospitality' },
  Policy: { sector: 'policy', subSector: 'government-economic-policy' },
  Sports: { sector: 'sports', subSector: 'cricket-cricket-business' },
  Finance: { sector: 'markets', subSector: 'colombo-stock-exchange-cse-equities' },
}

const sectionSectorMap = {
  commerce: { sector: 'trade', subSector: 'trade-policy-free-trade-agreements' },
  banking: { sector: 'markets', subSector: 'commercial-banking' },
  industry: { sector: 'apparel', subSector: 'garment-manufacturing-export' },
  sports: { sector: 'sports', subSector: 'cricket-cricket-business' },
  tourism: { sector: 'tourism', subSector: 'hotels-hospitality' },
  technology: { sector: 'tech', subSector: 'software-it-services' },
}

export const storyBodies = {
  'seylan-bank-celebrates-294th-pahasara-library-bringing-quality-learning-resources-to-galgamuwa-maha-vidyalaya': [
    {
      type: 'p',
      text: "Continuing its long-standing commitment to empowering future generations through education, Seylan Bank recently opened its 294th 'Pahasara' Library at Galgamuwa Maha Vidyalaya, Maharachchimulla, Narammala, marking another milestone in the Bank's flagship social sustainability initiative.",
    },
    {
      type: 'p',
      text: 'The library was officially declared open in the presence of N. D. R. Jayasuriya, Assistant Director of Education – Giriulla Division; Upendra Adhikari, Regional Manager – North Western Region, Seylan Bank; H. P. A. S. Jayathilaka, Principal of Galgamuwa Maha Vidyalaya; and T. D. Wijerathna, Branch Manager of Seylan Bank\u2019s Narammala Branch, alongside students, teachers, parents and other distinguished guests.',
    },
    {
      type: 'quote',
      text: 'At Seylan Bank, we believe education is one of the most powerful investments we can make in the future of our nation. Through the \u2018Pahasara\u2019 initiative, we remain committed to creating learning environments that inspire young minds, broaden opportunities, and empower students with the knowledge and resources they need to succeed.',
      cite: 'Asiri Abhayaratne, Assistant General Manager – Marketing and Sales, Seylan Bank',
    },
    {
      type: 'p',
      text: 'As part of the initiative, Seylan Bank donated two laptop computers, a multimedia projector with a white screen, and books worth LKR 100,000 to enrich the school\u2019s library facilities and provide students with greater access to quality educational resources. The opening also formed part of \u2018Pahasara Week\u2019, which featured an Elle tournament, a Media Day programme for students in Grade 9 and above, a financial literacy educational programme, and an art competition for students below Grade 9.',
    },
    {
      type: 'p',
      text: 'The opening of the 294th library represents another significant step towards Seylan Bank\u2019s commitment to establishing 300 \u2018Pahasara\u2019 Libraries across Sri Lanka. Through the initiative, the Bank continues to strengthen library infrastructure, expand access to essential learning tools, nurture financial literacy, and create a lasting positive impact within communities across the country.',
    },
  ],
}

export const rawStories = [
  ...heroStories.map((story) => ({
    ...story,
    section: 'Fresh Updates',
    sector: heroSectorMap[story.category]?.sector || 'markets',
    subSector: heroSectorMap[story.category]?.subSector || 'commercial-banking',
  })),
  ...newsSections.flatMap((section) =>
    section.stories.map((story) => ({
      ...story,
      section: section.title,
      sector: sectionSectorMap[section.id]?.sector || 'markets',
      subSector: sectionSectorMap[section.id]?.subSector || 'commercial-banking',
    })),
  ),
  ...mockStories.map((story) => ({ ...story, section: story.category })),
]

function enrich(story, index) {
  const slug = slugify(story.title)
  return {
    ...story,
    slug,
    section: story.section,
    views: viewCounts[index % viewCounts.length],
    tags: buildTags(story),
    imageCredit: 'Photo: LankaTalks / Unsplash',
    body: storyBodies[slug] || buildArticleBody(story),
  }
}

export const allStories = rawStories.map(enrich)

export function getStoryBySlug(slug) {
  return allStories.find((story) => story.slug === slug)
}

export function getStoryUrl(story) {
  return buildStoryPath(story.slug)
}

export function getRelatedStories(story, limit = 3) {
  const sameSection = allStories.filter(
    (item) => item.section === story.section && item.slug !== story.slug,
  )
  const others = allStories.filter(
    (item) => item.section !== story.section && item.slug !== story.slug,
  )
  return [...sameSection, ...others].slice(0, limit)
}

export function getAdjacentStories(story) {
  const index = allStories.findIndex((item) => item.slug === story.slug)
  return {
    prev: index > 0 ? allStories[index - 1] : null,
    next: index < allStories.length - 1 ? allStories[index + 1] : null,
  }
}

function buildTags(story) {
  const words = story.title.toLowerCase().split(' ').filter((w) => w.length > 3)
  const tags = [story.category.toLowerCase().replace(/[^a-z0-9]+/g, '')]
  while (tags.length < 3 && words.length) {
    const word = words.shift().replace(/[^a-z0-9]/g, '')
    if (word && !tags.includes(word)) tags.push(word)
  }
  tags.push('lankatalks')
  return tags
}

function buildArticleBody(story) {
  const category = story.category
  const sector = story.section === 'Fresh Updates' ? 'business' : story.section
  return [
    { type: 'p', text: story.excerpt },
    {
      type: 'p',
      text: `Colombo — The development marks another milestone for Sri Lanka's ${sector.toLowerCase()} landscape, coming as the sector continues to reset after a period of cautious spending. Industry participants told LankaTalks the move signals renewed confidence among businesses and policymakers alike, with several executives describing the timing as carefully calibrated to the current economic cycle.`,
    },
    { type: 'h2', text: 'Why it matters' },
    {
      type: 'p',
      text: `For the ${category.toLowerCase()} segment, the announcement is significant not only for its immediate impact but for what it says about the direction of the broader economy. Analysts point to improving macro conditions — softer inflation, a stabilising currency and early signs of credit growth — as the backdrop against which such developments are now possible.`,
    },
    {
      type: 'p',
      text: 'Stakeholders across supply chains, from raw-material suppliers to end consumers, are expected to feel the ripple effects over the coming quarters. Early estimates suggest the initiative could translate into measurable gains for the sector, with follow-on investment likely as confidence compounds.',
    },
    {
      type: 'quote',
      text: 'This is exactly the kind of momentum Sri Lanka needs right now. The fundamentals have improved, and the market is responding with a clear signal of intent.',
      cite: 'A senior industry analyst, in conversation with LankaTalks',
    },
    { type: 'h2', text: 'What to watch' },
    {
      type: 'p',
      text: `The next few months will be telling. Execution, financing and demand absorption will determine whether this translates into sustained growth or remains a headline event. Regulators and trade bodies have signalled they will track progress closely, while businesses watch for the knock-on effects on hiring, procurement and expansion plans.`,
    },
    {
      type: 'p',
      text: `LankaTalks will continue to follow this story. For decision-makers, the message is simple: after years of consolidation, Sri Lanka's ${category.toLowerCase()} sector is once again opening up new opportunities — and the window to act is now.`,
    },
  ]
}
