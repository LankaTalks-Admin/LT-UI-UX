export const archiveStats = {
  totalArticles: 12400,
  totalSectors: 16,
  totalContentTypes: 5,
  yearsSpanned: 3,
  freeArticles: 8200,
  premiumArticles: 4200,
  lastUpdated: 'Jun 2026',
}

export const contentTypes = [
  { id: 'all', name: 'All Types', count: 12400 },
  { id: 'web-news', name: 'Web News', count: 7800 },
  { id: 'deep-dive', name: 'Deep Dives', count: 340 },
  { id: 'sector-report', name: 'Sector Reports', count: 420 },
  { id: 'pr-post', name: 'PR Posts', count: 2100 },
  { id: 'events', name: 'Events', count: 480 },
  { id: 'intelligence', name: 'Intelligence', count: 1260 },
]

export const archiveSectorColors = {
  Markets: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  Tech: 'bg-violet-50 text-violet-700 border border-violet-200',
  Policy: 'bg-amber-50 text-amber-700 border border-amber-200',
  Tourism: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
  Infrastructure: 'bg-orange-50 text-orange-700 border border-orange-200',
  Startups: 'bg-rose-50 text-rose-700 border border-rose-200',
  Trade: 'bg-blue-50 text-blue-700 border border-blue-200',
  Agriculture: 'bg-lime-50 text-lime-700 border border-lime-200',
  Construction: 'bg-stone-50 text-stone-700 border border-stone-200',
  Logistics: 'bg-sky-50 text-sky-700 border border-sky-200',
  Apparel: 'bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200',
  Education: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
  Health: 'bg-red-50 text-red-700 border border-red-200',
  Energy: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  Green: 'bg-teal-50 text-teal-700 border border-teal-200',
  'Blue Economy': 'bg-sky-50 text-sky-700 border border-sky-200',
  Sports: 'bg-pink-50 text-pink-700 border border-pink-200',
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const MONTH_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const IMAGES = [
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
]

const AUTHORS = [
  'K. De Silva', 'A. Perera', 'N. Fernando', 'S. Jayasinghe',
  'LankaTalks Research', 'Nisha Perera', 'Tech Desk', 'Infrastructure Desk',
  'Shehan Fernando', 'Ravi Jayawardena', 'Shanika Perera', 'Asanka Fernando',
  'Anura Kumara', 'Tharaka Liyanage', 'Dr. Nirosha Gunawardena',
  'Dilini Perera', 'Channel Desk', 'Markets Desk',
]

function d(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function displayDate(year, month, day) {
  return `${MONTH_SHORT[month - 1]} ${day}, ${year}`
}

function pick(arr, seed) {
  return arr[seed % arr.length]
}

let _id = 0
function makeStory({ title, excerpt, category, sector, sectorSlug, contentType, date, author, readTime, verified, locked, partner }) {
  _id++
  return {
    id: _id,
    title,
    excerpt,
    category,
    sector,
    sectorSlug,
    contentType,
    date,
    dateLabel: displayDate(
      parseInt(date.slice(0, 4)),
      parseInt(date.slice(5, 7)),
      parseInt(date.slice(8, 10)),
    ),
    author: author || pick(AUTHORS, _id),
    readTime: readTime || `${3 + (_id % 12)} min read`,
    image: pick(IMAGES, _id),
    verified: verified || _id % 5 === 0,
    locked: locked || _id % 7 === 0,
    partner: partner || _id % 9 === 0,
  }
}

export const archivedStories = [
  // ── 2026 June ──────────────────────────────────────
  makeStory({ title: 'Sri Lanka Banking Sector NPL Ratio Eases to 9.2% on Recovery-Led Write-offs', excerpt: 'Improved collections and restructuring exits support a second consecutive quarter of decline across the licensed commercial banking sector.', category: 'Commercial Banking', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2026, 6, 15), author: 'K. De Silva', readTime: '6 min read', verified: true }),
  makeStory({ title: 'IWT Lanka Launches Premier League E-Commerce Platform with Rs 1.2B Investment', excerpt: 'The new marketplace connects 4,000+ local sellers with buyers across the island, backed by a 12-month national fulfilment rollout.', category: 'E-Commerce & Digital Retail', sector: 'Tech', sectorSlug: 'tech', contentType: 'Web News', date: d(2026, 6, 14), author: 'A. Perera', readTime: '5 min read', partner: true }),
  makeStory({ title: 'Sri Lanka Welcomes 800,000 Tourists in First Half of 2026 – Record Quarter', excerpt: 'Arrivals surged 22% YoY on expanded flight connectivity, with India, China and the UK leading source markets.', category: 'Hotels & Hospitality', sector: 'Tourism', sectorSlug: 'tourism', contentType: 'Web News', date: d(2026, 6, 13), author: 'N. Fernando', readTime: '4 min read', verified: true }),
  makeStory({ title: 'IMF Programme: A Comprehensive Analysis of Fiscal Consolidation and Growth Outlook', excerpt: 'An in-depth examination of Sri Lanka progress under the USD 2.9B Extended Fund Facility, covering fiscal targets and debt sustainability.', category: 'Government Economic Policy', sector: 'Policy', sectorSlug: 'policy', contentType: 'Deep Dive', date: d(2026, 6, 12), author: 'LankaTalks Research', readTime: '18 min read', locked: true }),
  makeStory({ title: 'CSE Closes at Record High as Foreign Buying Returns to Colombo Market', excerpt: 'The benchmark index crossed 14,000 for the first time, driven by renewed foreign inflows and a firmer macro outlook.', category: 'Colombo Stock Exchange (CSE) & Equities', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2026, 6, 11), author: 'K. De Silva', readTime: '4 min read' }),
  makeStory({ title: 'Mobile Payments Hit Rs 12T Annualised Run-Rate in Sri Lanka', excerpt: 'QR and in-app transactions now outpace cards for the first time as adoption deepens across urban and rural markets.', category: 'Fintech & Digital Payments', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2026, 6, 10), author: 'Nisha Perera', readTime: '4 min read', partner: true }),
  makeStory({ title: 'Digital Banking Revolution: How 9 Sri Lankan Banks Are Racing Toward AI', excerpt: 'From conversational banking bots to AI-driven credit scoring, Sri Lanka licensed commercial banks are deploying technology at scale.', category: 'Software & IT Services', sector: 'Tech', sectorSlug: 'tech', contentType: 'Deep Dive', date: d(2026, 6, 9), author: 'Tech Desk', readTime: '14 min read', locked: true }),
  makeStory({ title: 'ICTA Launches National AI Strategy with Rs 5B Budget for 2026–2030', excerpt: 'The strategy targets 250,000 AI-trained professionals and a 3% GDP contribution from digital services by 2030.', category: 'Government Economic Policy', sector: 'Policy', sectorSlug: 'policy', contentType: 'Web News', date: d(2026, 6, 8), author: 'S. Jayasinghe', readTime: '5 min read' }),
  makeStory({ title: 'Port City Colombo: Mapping the USD 1.5B Investment Pipeline', excerpt: 'Phase 1 of the Colombo International Financial City is taking shape. We track committed vs realised investment and regulatory frameworks.', category: 'Urban Development & Smart Cities', sector: 'Infrastructure', sectorSlug: 'infrastructure', contentType: 'Deep Dive', date: d(2026, 6, 7), author: 'Infrastructure Desk', readTime: '22 min read', locked: true }),
  makeStory({ title: 'Apparel Exporters Target 30% Green-Product Share by 2028', excerpt: 'Manufacturers invest in circular sourcing as EU buyers demand verified sustainability data across the supply chain.', category: 'Garment Manufacturing & Export', sector: 'Apparel', sectorSlug: 'apparel', contentType: 'Web News', date: d(2026, 6, 6), author: 'Shehan Fernando', readTime: '5 min read' }),

  // ── 2026 May ──────────────────────────────────────
  makeStory({ title: 'SME Digital Adoption in Sri Lanka 2025 – Survey of 600 Businesses', excerpt: 'Primary research covering technology adoption rates, digital maturity, barriers to digitalisation and investment intentions among SMEs.', category: 'SME Development & Growth', sector: 'Startups', sectorSlug: 'startups', contentType: 'Sector Report', date: d(2026, 5, 30), author: 'LankaTalks Research', readTime: '12 min read' }),
  makeStory({ title: 'Wirawila Solar Park Achieves 100 MW Milestone as Sri Lanka Largest Installation', excerpt: 'The Wirawila Solar Park has achieved full 100 MW operational capacity, displacing approximately 150,000 tonnes of CO2 annually.', category: 'Solar Energy', sector: 'Energy', sectorSlug: 'energy', contentType: 'Web News', date: d(2026, 5, 28), author: 'Anura Kumara', readTime: '4 min read' }),
  makeStory({ title: 'WSO2 Opens New AI Centre of Excellence in Colombo for Enterprise Clients', excerpt: 'Sri Lankan software giant WSO2 has inaugurated a dedicated AI Centre of Excellence in Orion City for managed AI integration services.', category: 'Software & IT Services', sector: 'Tech', sectorSlug: 'tech', contentType: 'Web News', date: d(2026, 5, 25), author: 'Tharaka Liyanage', readTime: '5 min read', partner: true }),
  makeStory({ title: 'Asiri Hospital Network Expands with New 200-Bed Facility in Kandy', excerpt: 'Asiri Hospital Group has opened a new 200-bed multi-specialty hospital in Kandy, representing an investment of LKR 8.5 billion.', category: 'Hospitals & Private Healthcare', sector: 'Health', sectorSlug: 'health', contentType: 'PR Post', date: d(2026, 5, 22), author: 'Dr. Nirosha Gunawardena', readTime: '5 min read', partner: true }),
  makeStory({ title: 'Startup Ecosystem Report Sri Lanka 2026 – Funding Rounds and Exits', excerpt: 'Mapping the full startup lifecycle from seed to Series B, including venture capital flows, exit pathways and talent pipeline analysis.', category: 'Startup Ecosystem & Venture Capital', sector: 'Startups', sectorSlug: 'startups', contentType: 'Sector Report', date: d(2026, 5, 20), author: 'LankaTalks Research', readTime: '16 min read' }),
  makeStory({ title: 'Sri Lanka and India Sign Landmark FTA Protocol Covering 95% of Tariff Lines', excerpt: 'Sri Lanka and India signed a comprehensive free trade agreement protocol covering 95% of tariff lines with phased duty elimination.', category: 'Trade Policy & Free Trade Agreements', sector: 'Trade', sectorSlug: 'trade', contentType: 'Web News', date: d(2026, 5, 18), author: 'Ravi Jayawardena', readTime: '6 min read', verified: true }),
  makeStory({ title: 'Colombo Port Handles Record 800,000 TEUs in Single Quarter', excerpt: 'The Colombo International Container Terminals achieved a record throughput of 800,000 TEUs in Q2 2026.', category: 'Port Operations & Colombo Port', sector: 'Logistics', sectorSlug: 'logistics', contentType: 'Web News', date: d(2026, 5, 15), author: 'Asanka Fernando', readTime: '4 min read' }),
  makeStory({ title: 'Cinnamon Hotels Launches Luxury Resort Expansion in Trincomalee', excerpt: 'Cinnamon Hotels & Resorts has broken ground on a 250-room luxury beachfront resort representing an investment of USD 85 million.', category: 'Hotels & Hospitality', sector: 'Tourism', sectorSlug: 'tourism', contentType: 'PR Post', date: d(2026, 5, 12), author: 'Shanika Perera', readTime: '4 min read', partner: true }),

  // ── 2026 April ──────────────────────────────────────
  makeStory({ title: 'Central Bank Holds Rates Steady as Inflation Falls to 2.8%', excerpt: 'The Monetary Board held the SDFR and SLFR unchanged citing a favourable inflation outlook and stable external sector.', category: 'Monetary Policy & Interest Rates', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2026, 4, 28), author: 'K. De Silva', readTime: '5 min read' }),
  makeStory({ title: 'Sri Lanka Tea Exports Surge Past USD 1.5B in Q1 2026', excerpt: 'Record-breaking tea auction prices and expanded Middle Eastern demand drive a 18% YoY increase in export revenue.', category: 'Plantation & Tea Industry', sector: 'Agriculture', sectorSlug: 'agriculture', contentType: 'Web News', date: d(2026, 4, 22), author: 'Dilini Perera', readTime: '4 min read', verified: true }),
  makeStory({ title: 'Deep Dive: Colombo Real Estate Market 2026 – Supply Glut Meets Pent-Up Demand', excerpt: 'We examine 12,000 unsold apartment units, pricing trends across Colombo 1-15, and the impact of Port City on luxury segment.', category: 'Real Estate & Property', sector: 'Construction', sectorSlug: 'construction', contentType: 'Deep Dive', date: d(2026, 4, 18), author: 'Infrastructure Desk', readTime: '20 min read', locked: true }),
  makeStory({ title: 'Dialog Axiata Reports 12% Revenue Growth on Data Monetisation', excerpt: 'Mobile data ARPU crossed Rs 600 for the first time as 5G rollout accelerates across Western Province.', category: 'Telecommunications', sector: 'Tech', sectorSlug: 'tech', contentType: 'Web News', date: d(2026, 4, 15), author: 'Tech Desk', readTime: '4 min read' }),
  makeStory({ title: 'Sri Lanka Green Bond Framework Receives ICMA Alignment Certification', excerpt: 'The SEC-approved framework enables corporates to issue green bonds aligned with ICMA Green Bond Principles.', category: 'Sustainable Finance', sector: 'Markets', sectorSlug: 'markets', contentType: 'Intelligence', date: d(2026, 4, 10), author: 'Markets Desk', readTime: '6 min read' }),
  makeStory({ title: 'National Digital Health Platform Reaches 5 Million Registrations', excerpt: 'The government digital health records system now covers 25% of the population with interoperability across 340 hospitals.', category: 'Digital Health & MedTech', sector: 'Health', sectorSlug: 'health', contentType: 'Web News', date: d(2026, 4, 8), author: 'Dr. Nirosha Gunawardena', readTime: '5 min read' }),
  makeStory({ title: 'Sri Lanka Construction Materials Index – Q1 Price Trend Report', excerpt: 'Cement and steel prices stabilised as import volumes recovered, though sand supply remains constrained in the Western Province.', category: 'Building Materials', sector: 'Construction', sectorSlug: 'construction', contentType: 'Sector Report', date: d(2026, 4, 5), author: 'LankaTalks Research', readTime: '8 min read' }),

  // ── 2026 March ──────────────────────────────────────
  makeStory({ title: 'Budget 2026: Key Tax Changes and Their Impact on Businesses', excerpt: 'A comprehensive breakdown of the new corporate tax rates, VAT adjustments, and withholding tax modifications announced in the budget.', category: 'Taxation & Fiscal Policy', sector: 'Policy', sectorSlug: 'policy', contentType: 'Deep Dive', date: d(2026, 3, 25), author: 'S. Jayasinghe', readTime: '16 min read', locked: true }),
  makeStory({ title: 'CSE Market Cap Crosses LKR 5 Trillion Milestone', excerpt: 'The Colombo Stock Exchange total market capitalisation surpassed LKR 5 trillion for the first time in history.', category: 'Colombo Stock Exchange (CSE) & Equities', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2026, 3, 20), author: 'K. De Silva', readTime: '4 min read', verified: true }),
  makeStory({ title: 'Sri Lanka Logistics Sector Outlook 2026 – Infrastructure Pipeline Review', excerpt: 'Mapping USD 3.2B in committed logistics infrastructure projects from expressways to dry ports and airport expansion.', category: 'Supply Chain & Warehousing', sector: 'Logistics', sectorSlug: 'logistics', contentType: 'Sector Report', date: d(2026, 3, 15), author: 'Asanka Fernando', readTime: '14 min read' }),
  makeStory({ title: 'Rubber Industry Pushes for Value-Added Exports to Counter Raw Price Dip', excerpt: 'Industry associations call for government support on latex processing and medical-grade rubber manufacturing.', category: 'Rubber & Tyre Manufacturing', sector: 'Apparel', sectorSlug: 'apparel', contentType: 'Web News', date: d(2026, 3, 12), author: 'Shehan Fernando', readTime: '5 min read' }),
  makeStory({ title: 'Intelligence Brief: South Asian FDI Trends and Sri Lanka Competitive Position', excerpt: 'Sri Lanka attracted USD 1.1B in FDI in 2025, ranking third in South Asia behind India and Bangladesh.', category: 'Foreign Direct Investment', sector: 'Policy', sectorSlug: 'policy', contentType: 'Intelligence', date: d(2026, 3, 10), author: 'LankaTalks Research', readTime: '10 min read' }),
  makeStory({ title: 'Lanka Premier League 2026 Drives Rs 2.5B in Economic Activity', excerpt: 'Cricket tourism generated an estimated Rs 2.5 billion in direct and indirect economic benefits across host cities.', category: 'Sports Tourism & Events', sector: 'Sports', sectorSlug: 'sports', contentType: 'Events', date: d(2026, 3, 5), author: 'Channel Desk', readTime: '3 min read' }),
  makeStory({ title: 'Coconut Industry Report: Production Recovery and Export Diversification', excerpt: 'Sri Lanka coconut production rebounded 15% YoY with new kernel processing capacity coming online in Kurunegala.', category: 'Coconut & Spices', sector: 'Agriculture', sectorSlug: 'agriculture', contentType: 'Sector Report', date: d(2026, 3, 2), author: 'Dilini Perera', readTime: '10 min read' }),

  // ── 2026 February ──────────────────────────────────────
  makeStory({ title: 'Sri Lanka External Reserves Climb to USD 6.8B – Highest Since 2019', excerpt: 'Strong remittance inflows and tourism receipts bolstered the central bank reserve position to a comfortable import cover.', category: 'Balance of Payments & Reserves', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2026, 2, 28), author: 'K. De Silva', readTime: '5 min read', verified: true }),
  makeStory({ title: 'EDB Targets USD 18B in Export Revenue for 2026', excerpt: 'The Export Development Board unveiled a five-sector strategy targeting garments, tea, IT services, rubber products and spices.', category: 'Export Promotion', sector: 'Trade', sectorSlug: 'trade', contentType: 'Web News', date: d(2026, 2, 22), author: 'Ravi Jayawardena', readTime: '5 min read' }),
  makeStory({ title: 'Digital Payments Revolution: Sri Lanka QR Code Adoption Hits 2M Merchants', excerpt: 'LankaQR now connects 2 million merchants, processing over Rs 800 billion in annualised transaction value.', category: 'Fintech & Digital Payments', sector: 'Tech', sectorSlug: 'tech', contentType: 'Deep Dive', date: d(2026, 2, 18), author: 'Nisha Perera', readTime: '12 min read', locked: true }),
  makeStory({ title: 'New Colombo Port Terminal Adds 2.4M TEU Capacity by 2028', excerpt: 'The Colombo West International Terminal construction is 60% complete, on track for operational commencement in Q3 2027.', category: 'Port Operations & Colombo Port', sector: 'Infrastructure', sectorSlug: 'infrastructure', contentType: 'Web News', date: d(2026, 2, 15), author: 'Infrastructure Desk', readTime: '4 min read' }),
  makeStory({ title: 'Sri Lanka Education Sector – EdTech Investment Landscape Report', excerpt: 'USD 45M invested in Sri Lankan EdTech startups over the past 18 months, with LMS and assessment platforms leading.', category: 'EdTech & E-Learning', sector: 'Education', sectorSlug: 'education', contentType: 'Sector Report', date: d(2026, 2, 10), author: 'LankaTalks Research', readTime: '11 min read' }),
  makeStory({ title: 'Waste-to-Energy Project in Kelaniya Begins Commercial Operations', excerpt: 'The 10 MW waste-to-energy facility processes 600 tonnes of municipal waste daily, supplying power to the national grid.', category: 'Waste Management & Recycling', sector: 'Green', sectorSlug: 'green', contentType: 'Web News', date: d(2026, 2, 5), author: 'Anura Kumara', readTime: '4 min read' }),

  // ── 2026 January ──────────────────────────────────────
  makeStory({ title: '2026 Economic Outlook: Sri Lanka GDP Growth Projected at 4.5%', excerpt: 'The Central Bank forecasts 4.5% real GDP growth in 2026, driven by services expansion and continued fiscal consolidation.', category: 'Macroeconomic Forecast', sector: 'Policy', sectorSlug: 'policy', contentType: 'Intelligence', date: d(2026, 1, 30), author: 'LankaTalks Research', readTime: '8 min read' }),
  makeStory({ title: 'New Companies Act 2025: What Businesses Need to Know', excerpt: 'Key changes to company registration, governance requirements, and digital filing obligations under the new Companies Act.', category: 'Corporate Law & Governance', sector: 'Policy', sectorSlug: 'policy', contentType: 'Deep Dive', date: d(2026, 1, 25), author: 'S. Jayasinghe', readTime: '14 min read', locked: true }),
  makeStory({ title: 'Sri Lanka Hotel Sector Occupancy Reaches 78% in Peak Season', excerpt: 'Colombo and southern coast hotels recorded near-full occupancy during the December-January tourist peak.', category: 'Hotels & Hospitality', sector: 'Tourism', sectorSlug: 'tourism', contentType: 'Web News', date: d(2026, 1, 20), author: 'N. Fernando', readTime: '4 min read' }),
  makeStory({ title: 'Insurance Sector Consolidation: Three Mergers Reshape Market', excerpt: 'The insurance industry undergoes rapid consolidation with three major mergers approved by the IRCSL in Q4 2025.', category: 'Insurance & Risk Management', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2026, 1, 15), author: 'Markets Desk', readTime: '6 min read' }),
  makeStory({ title: 'Agritech Startup Pitch Deck: 12 Companies to Watch in 2026', excerpt: 'From drone-based crop monitoring to AI-powered supply chain optimisation, these 12 agritech startups are transforming farming.', category: 'AgriTech & Food Innovation', sector: 'Startups', sectorSlug: 'startups', contentType: 'Web News', date: d(2026, 1, 10), author: 'Tharaka Liyanage', readTime: '7 min read' }),
  makeStory({ title: 'LankaTalks Intelligence: Monthly Macro Dashboard – January 2026', excerpt: 'Key economic indicators including GDP, inflation, trade balance, remittances, tourist arrivals and fiscal metrics.', category: 'Economic Indicators', sector: 'Policy', sectorSlug: 'policy', contentType: 'Intelligence', date: d(2026, 1, 5), author: 'LankaTalks Research', readTime: '6 min read' }),

  // ── 2025 December ──────────────────────────────────────
  makeStory({ title: 'Year in Review 2025: Sri Lanka Economic Recovery Milestones', excerpt: 'A comprehensive review of Sri Lanka economic milestones in 2025 including IMF programme progress, debt restructuring and growth recovery.', category: 'Annual Review', sector: 'Policy', sectorSlug: 'policy', contentType: 'Deep Dive', date: d(2025, 12, 30), author: 'LankaTalks Research', readTime: '25 min read', locked: true }),
  makeStory({ title: 'CSE Annual Report 2025: Best Performing Market in South Asia', excerpt: 'The Colombo Stock Exchange delivered 28% returns in 2025, outperforming all regional peers on a USD-adjusted basis.', category: 'Colombo Stock Exchange (CSE) & Equities', sector: 'Markets', sectorSlug: 'markets', contentType: 'Sector Report', date: d(2025, 12, 28), author: 'K. De Silva', readTime: '10 min read' }),
  makeStory({ title: 'Apparel Industry 2025 Export Figures: USD 5.2B Tally', excerpt: 'Sri Lanka apparel exports reached USD 5.2 billion in 2025, driven by ethical manufacturing premiums and near-shoring trends.', category: 'Garment Manufacturing & Export', sector: 'Apparel', sectorSlug: 'apparel', contentType: 'Web News', date: d(2025, 12, 22), author: 'Shehan Fernando', readTime: '5 min read', verified: true }),
  makeStory({ title: 'Healthcare Investment Forum 2025 – Key Takeaways', excerpt: 'Over USD 200M in healthcare investment commitments announced at the annual forum, focusing on medical tourism and digital health.', category: 'Healthcare Investment', sector: 'Health', sectorSlug: 'health', contentType: 'Events', date: d(2025, 12, 18), author: 'Dr. Nirosha Gunawardena', readTime: '6 min read' }),
  makeStory({ title: 'Infrastructure Pipeline 2026-2030: A USD 8.5B Roadmap', excerpt: 'Government reveals a five-year infrastructure investment plan covering expressways, ports, airports and urban development.', category: 'National Infrastructure', sector: 'Infrastructure', sectorSlug: 'infrastructure', contentType: 'Deep Dive', date: d(2025, 12, 15), author: 'Infrastructure Desk', readTime: '18 min read', locked: true }),

  // ── 2025 November ──────────────────────────────────────
  makeStory({ title: 'Tourism Revenue Crosses USD 5B for First Time in 2025', excerpt: 'Sri Lanka tourism revenue surpassed the USD 5 billion mark in November 2025, beating the annual target by two months.', category: 'Hotels & Hospitality', sector: 'Tourism', sectorSlug: 'tourism', contentType: 'Web News', date: d(2025, 11, 28), author: 'N. Fernando', readTime: '4 min read', verified: true }),
  makeStory({ title: 'Telecom Regulatory Framework Overhaul: 5G Spectrum Auction Announced', excerpt: 'TRCSL announces the 5G spectrum auction schedule with three frequency bands on offer for mobile network operators.', category: 'Telecommunications Regulation', sector: 'Tech', sectorSlug: 'tech', contentType: 'Web News', date: d(2025, 11, 22), author: 'Tech Desk', readTime: '5 min read' }),
  makeStory({ title: 'Sri Lanka Spice Export Quality Standards – Global Compliance Guide', excerpt: 'New EU and US FDA compliance requirements for Sri Lankan spice exporters, covering cinnamon, pepper and cardamom.', category: 'Spices & Condiments', sector: 'Agriculture', sectorSlug: 'agriculture', contentType: 'Sector Report', date: d(2025, 11, 18), author: 'Dilini Perera', readTime: '12 min read' }),
  makeStory({ title: 'Blue Economy Strategy: Sustainable Fisheries and Marine Tourism', excerpt: 'Government launches a USD 500M blue economy initiative targeting sustainable fisheries, marine conservation and ocean tourism.', category: 'Marine Resources', sector: 'Blue Economy', sectorSlug: 'blue-economy', contentType: 'Intelligence', date: d(2025, 11, 12), author: 'LankaTalks Research', readTime: '9 min read' }),
  makeStory({ title: 'Colombo Office Market Vacancy Drops Below 10%', excerpt: 'Grade A office space in Colombo 1-3 recorded single-digit vacancy for the first time since 2019, driving rental escalation.', category: 'Commercial Real Estate', sector: 'Construction', sectorSlug: 'construction', contentType: 'Web News', date: d(2025, 11, 8), author: 'Asanka Fernando', readTime: '4 min read' }),

  // ── 2025 October ──────────────────────────────────────
  makeStory({ title: 'FDI Hits USD 1.1B in 2025 – Highest Since 2018', excerpt: 'Foreign direct investment reached USD 1.1 billion in 2025, led by renewable energy, IT/BPO and real estate sectors.', category: 'Foreign Direct Investment', sector: 'Policy', sectorSlug: 'policy', contentType: 'Web News', date: d(2025, 10, 28), author: 'S. Jayasinghe', readTime: '5 min read' }),
  makeStory({ title: 'Lankan Startup Funding Report: USD 180M Raised in 2025', excerpt: 'Sri Lankan startups raised a record USD 180 million across 45 funding rounds, with fintech and healthtech leading.', category: 'Venture Capital & Angel Investment', sector: 'Startups', sectorSlug: 'startups', contentType: 'Sector Report', date: d(2025, 10, 22), author: 'Tharaka Liyanage', readTime: '10 min read' }),
  makeStory({ title: 'Green Hydrogen Pilot Project in Hambantota Enters Phase 2', excerpt: 'The 5 MW green hydrogen pilot at Hambantota Industrial Zone advances to phase 2 with international partnership.', category: 'Renewable Energy', sector: 'Energy', sectorSlug: 'energy', contentType: 'Web News', date: d(2025, 10, 18), author: 'Anura Kumara', readTime: '5 min read' }),
  makeStory({ title: 'Sri Lanka Education Budget 2026: University Funding and Digital Classrooms', excerpt: 'Education allocation rises to 2.3% of GDP with major investments in university modernisation and rural digital classrooms.', category: 'Higher Education', sector: 'Education', sectorSlug: 'education', contentType: 'Intelligence', date: d(2025, 10, 12), author: 'Channel Desk', readTime: '7 min read' }),
  makeStory({ title: 'Rubber gloves manufacturer Register Systems IPO Opens', excerpt: 'Register Systems, Sri Lanka\'s largest rubber glove manufacturer, opens its IPO targeting Rs 5B in fresh capital.', category: 'IPOs & Capital Markets', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2025, 10, 8), author: 'Markets Desk', readTime: '4 min read' }),

  // ── 2025 September ──────────────────────────────────────
  makeStory({ title: 'IMF Second Review: Sri Lanka Meets All Quantitative Targets', excerpt: 'The IMF completed the second EFF review, disbursing USD 333M after confirming Sri Lanka met all performance criteria.', category: 'IMF Programme & Sovereign Debt', sector: 'Policy', sectorSlug: 'policy', contentType: 'Web News', date: d(2025, 9, 28), author: 'LankaTalks Research', readTime: '8 min read', verified: true }),
  makeStory({ title: 'Port City Colombo First Tenant: Singapore FinTech Opens HQ', excerpt: 'A Singapore-based payments fintech becomes the first international company to establish headquarters at Port City.', category: 'Special Economic Zones', sector: 'Infrastructure', sectorSlug: 'infrastructure', contentType: 'Web News', date: d(2025, 9, 22), author: 'Infrastructure Desk', readTime: '4 min read' }),
  makeStory({ title: 'Sri Lanka Rice Production Hits 3.2M Tonnes – Food Security Update', excerpt: 'Maha season paddy production exceeded targets, bringing total annual rice output to 3.2 million metric tonnes.', category: 'Rice & Paddy', sector: 'Agriculture', sectorSlug: 'agriculture', contentType: 'Web News', date: d(2025, 9, 18), author: 'Dilini Perera', readTime: '4 min read' }),
  makeStory({ title: 'Colombo Night Economy: A USD 500M Opportunity', excerpt: 'A LankaTalks study estimates the potential economic contribution of a regulated Colombo night economy at USD 500M annually.', category: 'Night Economy & Entertainment', sector: 'Tourism', sectorSlug: 'tourism', contentType: 'Deep Dive', date: d(2025, 9, 12), author: 'N. Fernando', readTime: '14 min read', locked: true }),
  makeStory({ title: 'Intelligence Brief: Monsoon Impact on Agriculture and Inflation', excerpt: 'SW monsoon rainfall 15% above average supporting Kharif crops but flooding risks in Eastern Province remain elevated.', category: 'Climate & Weather Impact', sector: 'Policy', sectorSlug: 'policy', contentType: 'Intelligence', date: d(2025, 9, 8), author: 'LankaTalks Research', readTime: '6 min read' }),

  // ── 2025 August ──────────────────────────────────────
  makeStory({ title: 'Sri Lanka Rating Upgrade: S&P Raises to B+ with Stable Outlook', excerpt: 'Standard & Poor\'s upgraded Sri Lanka sovereign rating to B+ from B, citing improved fiscal metrics and debt sustainability.', category: 'Sovereign Credit Rating', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2025, 8, 28), author: 'K. De Silva', readTime: '5 min read', verified: true }),
  makeStory({ title: 'Cinnamon Export Revenue Reaches Record USD 380M', excerpt: 'Sri Lankan cinnamon exports hit an all-time high of USD 380 million, commanding a 90% share of the global "true cinnamon" market.', category: 'Cinnamon & Spice Exports', sector: 'Agriculture', sectorSlug: 'agriculture', contentType: 'Web News', date: d(2025, 8, 22), author: 'Dilini Perera', readTime: '4 min read' }),
  makeStory({ title: 'Deep Dive: Sri Lanka Insurance Penetration – Growth and Gaps', excerpt: 'At 1.4% of GDP, Sri Lanka insurance penetration lags regional peers. We examine distribution challenges and digital opportunities.', category: 'Insurance & Risk Management', sector: 'Markets', sectorSlug: 'markets', contentType: 'Deep Dive', date: d(2025, 8, 18), author: 'Markets Desk', readTime: '16 min read', locked: true }),
  makeStory({ title: 'Youth Unemployment Falls Below 20% for First Time in a Decade', excerpt: 'Labour force survey data shows youth unemployment declining to 19.2%, driven by IT/BPO sector hiring and overseas employment.', category: 'Labour Market & Employment', sector: 'Policy', sectorSlug: 'policy', contentType: 'Web News', date: d(2025, 8, 12), author: 'S. Jayasinghe', readTime: '4 min read' }),
  makeStory({ title: 'New Expressway Connecting Kandy to Mattala Airport Breaks Ground', excerpt: 'Construction begins on the 120km expressway linking Kandy to Mattala Rajapaksa International Airport with a USD 800M investment.', category: 'Transport Infrastructure', sector: 'Infrastructure', sectorSlug: 'infrastructure', contentType: 'Web News', date: d(2025, 8, 5), author: 'Infrastructure Desk', readTime: '4 min read' }),

  // ── 2025 July ──────────────────────────────────────
  makeStory({ title: 'Monetary Policy Review: 200bps Rate Cut Announced', excerpt: 'The Central Bank cut policy rates by 200 basis points, the largest single cut since 2020, signalling confidence in the disinflation process.', category: 'Monetary Policy & Interest Rates', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2025, 7, 25), author: 'K. De Silva', readTime: '5 min read' }),
  makeStory({ title: 'Solar Rooftop Installations Surge 200% on Net Metering Expansion', excerpt: 'Rooftop solar installations jumped 200% in H1 2025 as the expanded net metering programme attracted residential and commercial users.', category: 'Solar Energy', sector: 'Energy', sectorSlug: 'energy', contentType: 'Web News', date: d(2025, 7, 20), author: 'Anura Kumara', readTime: '4 min read' }),
  makeStory({ title: 'Sri Lanka BPO Industry Targets USD 2B Revenue by 2028', excerpt: 'The IT-BPM industry roadmap targets tripling export revenue through English-speaking talent advantage and time-zone positioning.', category: 'Business Process Outsourcing', sector: 'Tech', sectorSlug: 'tech', contentType: 'Sector Report', date: d(2025, 7, 15), author: 'Tech Desk', readTime: '10 min read' }),
  makeStory({ title: 'Fresh Water Fish Farming Expansion in North Central Province', excerpt: 'Government aquaculture programme introduces modern cage farming techniques across 500 water bodies in the NCP.', category: 'Aquaculture & Fisheries', sector: 'Agriculture', sectorSlug: 'agriculture', contentType: 'Web News', date: d(2025, 7, 10), author: 'Dilini Perera', readTime: '4 min read' }),
  makeStory({ title: 'LankaTalks Events: South Asia Infrastructure Summit 2025 Highlights', excerpt: 'Key announcements from the two-day summit including Port City Phase 2, green mobility corridor and smart city pilots.', category: 'Industry Events', sector: 'Infrastructure', sectorSlug: 'infrastructure', contentType: 'Events', date: d(2025, 7, 5), author: 'Channel Desk', readTime: '6 min read' }),

  // ── 2025 June ──────────────────────────────────────
  makeStory({ title: 'Debt Restructuring Complete: Sri Lanka Reaches Agreement with Bondholders', excerpt: 'Sri Lanka finalises USD 12.6B external debt restructuring with international bondholders, clearing a major programme milestone.', category: 'Sovereign Debt Restructuring', sector: 'Policy', sectorSlug: 'policy', contentType: 'Web News', date: d(2025, 6, 28), author: 'LankaTalks Research', readTime: '8 min read', verified: true }),
  makeStory({ title: 'Emerging Tech Hub: 50 IT Companies Set Up in Colombo in 2025', excerpt: 'A wave of international tech companies established Colombo offices in H1 2025, attracted by the ITZ tax incentives.', category: 'Software & IT Services', sector: 'Tech', sectorSlug: 'tech', contentType: 'Web News', date: d(2025, 6, 22), author: 'Tharaka Liyanage', readTime: '5 min read' }),
  makeStory({ title: 'Textile Recycling Initiative: Circular Fashion Push from Sri Lanka', excerpt: 'A consortium of apparel manufacturers launches a USD 30M textile recycling facility in the Free Trade Zone.', category: 'Circular Economy & Recycling', sector: 'Green', sectorSlug: 'green', contentType: 'Web News', date: d(2025, 6, 15), author: 'Shehan Fernando', readTime: '4 min read' }),
  makeStory({ title: 'Sri Lanka Philanthropy Index: Corporate Giving Trends 2025', excerpt: 'Top 50 Sri Lankan corporates contributed Rs 12B to CSR and philanthropic activities in 2024, up 18% YoY.', category: 'CSR & Philanthropy', sector: 'Education', sectorSlug: 'education', contentType: 'Sector Report', date: d(2025, 6, 10), author: 'LankaTalks Research', readTime: '8 min read' }),
  makeStory({ title: 'Mid-Year Fiscal Review: Revenue Collection Exceeds Targets', excerpt: 'Government tax revenue exceeded targets by 8% in the first five months of 2025, driven by improved compliance and digitisation.', category: 'Fiscal Policy & Revenue', sector: 'Policy', sectorSlug: 'policy', contentType: 'Intelligence', date: d(2025, 6, 5), author: 'S. Jayasinghe', readTime: '7 min read' }),

  // ── 2024 December ──────────────────────────────────────
  makeStory({ title: 'Year in Review 2024: Sri Lanka Economic Turnaround Story', excerpt: 'From sovereign default to IMF programme compliance and rating upgrades – Sri Lanka 2024 economic journey in perspective.', category: 'Annual Review', sector: 'Policy', sectorSlug: 'policy', contentType: 'Deep Dive', date: d(2024, 12, 30), author: 'LankaTalks Research', readTime: '22 min read', locked: true }),
  makeStory({ title: 'CSE 2024 Performance: ASPI Returns 22% in Recovering Market', excerpt: 'The All Share Price Index gained 22% in 2024 as foreign investor confidence returned and corporate earnings recovered.', category: 'Colombo Stock Exchange (CSE) & Equities', sector: 'Markets', sectorSlug: 'markets', contentType: 'Sector Report', date: d(2024, 12, 28), author: 'K. De Silva', readTime: '10 min read' }),
  makeStory({ title: 'Apparel Industry Resilience: USD 4.8B Exports Despite Global Headwinds', excerpt: 'Sri Lanka apparel maintained its export levels through ethical manufacturing differentiation and near-shoring demand.', category: 'Garment Manufacturing & Export', sector: 'Apparel', sectorSlug: 'apparel', contentType: 'Web News', date: d(2024, 12, 22), author: 'Shehan Fernando', readTime: '5 min read' }),
  makeStory({ title: 'Tourism Recovery: 2 Million Arrivals Target for 2025', excerpt: 'Sri Lanka Tourism Promotion Bureau sets an ambitious 2 million arrivals target for 2025 following the strong 1.5M in 2024.', category: 'Tourism Policy & Promotion', sector: 'Tourism', sectorSlug: 'tourism', contentType: 'Web News', date: d(2024, 12, 18), author: 'N. Fernando', readTime: '4 min read' }),

  // ── 2024 November ──────────────────────────────────────
  makeStory({ title: 'IMF First Review Complete: USD 337M Disbursed', excerpt: 'The IMF completed its first review of Sri Lanka\'s Extended Fund Facility, disbursing USD 337 million after confirming programme adherence.', category: 'IMF Programme & Sovereign Debt', sector: 'Policy', sectorSlug: 'policy', contentType: 'Web News', date: d(2024, 11, 25), author: 'LankaTalks Research', readTime: '7 min read', verified: true }),
  makeStory({ title: 'Digital Identity Card Rollout Reaches 10 Million Registrations', excerpt: 'The national digital ID programme surpassed 10 million registrations, enabling e-government services across 400+ agencies.', category: 'Digital Government', sector: 'Tech', sectorSlug: 'tech', contentType: 'Web News', date: d(2024, 11, 20), author: 'Tech Desk', readTime: '5 min read' }),
  makeStory({ title: 'Sri Lanka Cement Industry: Import Dependency and Local Production Plans', excerpt: 'With 70% of cement consumed in Sri Lanka imported, new clinker processing plants aim to reduce the import bill by USD 200M.', category: 'Cement & Building Materials', sector: 'Construction', sectorSlug: 'construction', contentType: 'Sector Report', date: d(2024, 11, 15), author: 'Asanka Fernando', readTime: '9 min read' }),
  makeStory({ title: 'Healthcare Tech: Telemedicine Platform Reaches Rural 2.5M Patients', excerpt: 'The government telemedicine platform now connects rural patients with Colombo specialists, handling 2.5 million consultations since launch.', category: 'Telemedicine & Digital Health', sector: 'Health', sectorSlug: 'health', contentType: 'Web News', date: d(2024, 11, 10), author: 'Dr. Nirosha Gunawardena', readTime: '5 min read' }),
  makeStory({ title: 'Plantation Sector Wages: A Deep Dive into Living Wage Challenges', excerpt: 'Tea plantation workers still earn below the living wage threshold. We examine the structural issues and proposed solutions.', category: 'Plantation Labour', sector: 'Agriculture', sectorSlug: 'agriculture', contentType: 'Deep Dive', date: d(2024, 11, 5), author: 'Dilini Perera', readTime: '16 min read', locked: true }),

  // ── 2024 October ──────────────────────────────────────
  makeStory({ title: 'Sri Lanka 2024 Budget: Tax Reform and Fiscal Consolidation', excerpt: 'The 2024 budget introduced progressive income tax reforms and corporate tax rationalisation targeting a 5% primary surplus.', category: 'Budget & Fiscal Policy', sector: 'Policy', sectorSlug: 'policy', contentType: 'Deep Dive', date: d(2024, 10, 28), author: 'S. Jayasinghe', readTime: '14 min read', locked: true }),
  makeStory({ title: 'LankaPay QR Transactions Cross Rs 500B Milestone', excerpt: 'The national QR payment infrastructure processed Rs 500 billion in cumulative transactions, with 800,000 active merchants.', category: 'Digital Payments', sector: 'Tech', sectorSlug: 'tech', contentType: 'Web News', date: d(2024, 10, 22), author: 'Nisha Perera', readTime: '4 min read' }),
  makeStory({ title: 'Renewable Energy Capacity Crosses 2,500 MW Landmark', excerpt: 'Sri Lanka total renewable energy capacity reached 2,500 MW, meeting 40% of peak electricity demand from renewables.', category: 'Renewable Energy Mix', sector: 'Energy', sectorSlug: 'energy', contentType: 'Web News', date: d(2024, 10, 15), author: 'Anura Kumara', readTime: '4 min read' }),
  makeStory({ title: 'Sri Lanka EdTech Market: USD 80M Opportunity Assessment', excerpt: 'The domestic EdTech market is projected to reach USD 80M by 2026, driven by digital classroom adoption and skills training.', category: 'Education Technology', sector: 'Education', sectorSlug: 'education', contentType: 'Sector Report', date: d(2024, 10, 10), author: 'LankaTalks Research', readTime: '10 min read' }),

  // ── 2024 September ──────────────────────────────────────
  makeStory({ title: 'Sri Lanka Tea Board Modernisation: Digital Auction System Launch', excerpt: 'The Ceylon Tea Board launches a fully digital tea auction system, replacing the 130-year-old open outcry method.', category: 'Tea Industry Modernisation', sector: 'Agriculture', sectorSlug: 'agriculture', contentType: 'Web News', date: d(2024, 9, 28), author: 'Dilini Perera', readTime: '5 min read' }),
  makeStory({ title: 'Sovereign Bond Rally: Sri Lanka 2030 Maturity Yields Fall to 7.5%', excerpt: 'Sri Lanka international sovereign bond prices rallied as yields tightened following the successful IMF review.', category: 'Fixed Income & Bonds', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2024, 9, 22), author: 'Markets Desk', readTime: '4 min read' }),
  makeStory({ title: 'Intelligence: Port City Colombo Regulatory Framework Finalised', excerpt: 'The Colombo Port City Commission Act regulations published, defining the special economic zone governance and investment categories.', category: 'Special Economic Zones', sector: 'Infrastructure', sectorSlug: 'infrastructure', contentType: 'Intelligence', date: d(2024, 9, 15), author: 'Infrastructure Desk', readTime: '8 min read' }),
  makeStory({ title: 'Sri Lanka Automotive Aftermarket: A USD 1.2B Industry Analysis', excerpt: 'From spare parts to servicing, the Sri Lanka automotive aftermarket is valued at USD 1.2B with significant growth in EV servicing.', category: 'Automotive & Mobility', sector: 'Trade', sectorSlug: 'trade', contentType: 'Sector Report', date: d(2024, 9, 10), author: 'Ravi Jayawardena', readTime: '11 min read' }),

  // ── 2024 August ──────────────────────────────────────
  makeStory({ title: 'Sri Lanka Credit Rating Outlook: Moody\'s Changes to Stable', excerpt: 'Moody\'s changed Sri Lanka outlook from negative to stable, reflecting improving fiscal metrics and external position.', category: 'Sovereign Credit Rating', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2024, 8, 28), author: 'K. De Silva', readTime: '4 min read' }),
  makeStory({ title: 'Startup Sri Lanka: First Unicorn Discussion Gains Momentum', excerpt: 'Industry leaders debate the pathway to Sri Lanka\'s first billion-dollar startup valuation, citing fintech and healthtech as most likely sectors.', category: 'Startup Ecosystem & Venture Capital', sector: 'Startups', sectorSlug: 'startups', contentType: 'Web News', date: d(2024, 8, 20), author: 'Tharaka Liyanage', readTime: '6 min read' }),
  makeStory({ title: 'Green Building Certification Surge: 50 LEED-Registered Projects', excerpt: 'Sri Lanka records a surge in green building certifications with 50 LEED-registered projects across commercial and residential segments.', category: 'Green Building & Construction', sector: 'Green', sectorSlug: 'green', contentType: 'Web News', date: d(2024, 8, 15), author: 'Asanka Fernando', readTime: '4 min read' }),
  makeStory({ title: 'Sri Lanka Pharmaceutical Industry: Local Manufacturing Push', excerpt: 'The government targets 60% local pharmaceutical production by 2028, with three new manufacturing facilities under construction.', category: 'Pharmaceuticals & Drug Manufacturing', sector: 'Health', sectorSlug: 'health', contentType: 'Intelligence', date: d(2024, 8, 10), author: 'Dr. Nirosha Gunawardena', readTime: '7 min read' }),
  makeStory({ title: 'MICE Tourism: Sri Lanka Targets USD 500M Conference Tourism', excerpt: 'New convention centres in Colombo and Kandy position Sri Lanka as a MICE tourism destination for South Asian corporate events.', category: 'Meetings, Incentives, Conferences & Exhibitions', sector: 'Tourism', sectorSlug: 'tourism', contentType: 'Web News', date: d(2024, 8, 5), author: 'N. Fernando', readTime: '4 min read' }),

  // ── 2024 July ──────────────────────────────────────
  makeStory({ title: 'Post-Crisis Economic Recovery: GDP Growth Returns to 3.2%', excerpt: 'Sri Lanka GDP growth returned to positive territory at 3.2% in Q2 2024, the first expansion since the 2022 economic crisis.', category: 'GDP & Economic Growth', sector: 'Policy', sectorSlug: 'policy', contentType: 'Web News', date: d(2024, 7, 28), author: 'LankaTalks Research', readTime: '6 min read', verified: true }),
  makeStory({ title: 'IT Park Developments: Orion City Expansion and Tech City Plans', excerpt: 'Orion City tech park announces Phase 2 expansion while a new tech city project is planned for the Greater Colombo area.', category: 'Technology Parks & IT Zones', sector: 'Tech', sectorSlug: 'tech', contentType: 'Web News', date: d(2024, 7, 22), author: 'Tech Desk', readTime: '5 min read' }),
  makeStory({ title: 'Spice Export Quality Crisis: EU Standards Compliance Gap', excerpt: 'Sri Lanka spice exporters face challenges meeting new EU Maximum Residue Limits, risking market access for key products.', category: 'Trade Compliance & Standards', sector: 'Trade', sectorSlug: 'trade', contentType: 'Intelligence', date: d(2024, 7, 15), author: 'Ravi Jayawardena', readTime: '8 min read' }),
  makeStory({ title: 'Inflation Falls to 3.5% – Lowest Since 2019', excerpt: 'Headline inflation eased to 3.5% in July 2024, with food inflation turning negative for the first time since the economic crisis.', category: 'Consumer Prices & Inflation', sector: 'Markets', sectorSlug: 'markets', contentType: 'Web News', date: d(2024, 7, 10), author: 'Markets Desk', readTime: '4 min read' }),

  // ── 2024 June ──────────────────────────────────────
  makeStory({ title: 'Sri Lanka External Trade Balance Improves to USD -3.2B', excerpt: 'The trade deficit narrowed to USD 3.2 billion in the first five months of 2024 as import controls and export growth took effect.', category: 'Trade Balance & Commerce', sector: 'Trade', sectorSlug: 'trade', contentType: 'Web News', date: d(2024, 6, 25), author: 'Ravi Jayawardena', readTime: '5 min read' }),
  makeStory({ title: 'Hotel Sector Recovery: Occupancy Rates Return to Pre-Crisis Levels', excerpt: 'Colombo hotel occupancy recovered to 72%, matching 2019 levels as tourist arrivals continued their upward trajectory.', category: 'Hospitality Recovery', sector: 'Tourism', sectorSlug: 'tourism', contentType: 'Web News', date: d(2024, 6, 18), author: 'N. Fernando', readTime: '4 min read' }),
  makeStory({ title: 'Sri Lanka Microfinance Sector Reforms: New Regulatory Framework', excerpt: 'The Central Bank introduces comprehensive microfinance regulations to address predatory lending concerns and protect borrowers.', category: 'Microfinance & Financial Inclusion', sector: 'Markets', sectorSlug: 'markets', contentType: 'Deep Dive', date: d(2024, 6, 12), author: 'Nisha Perera', readTime: '12 min read', locked: true }),
  makeStory({ title: 'Waste Management Revolution: Colombo Municipal Green Initiative', excerpt: 'Colombo Municipal Council launches a comprehensive waste segregation and recycling programme targeting 50% waste reduction.', category: 'Municipal Waste Management', sector: 'Green', sectorSlug: 'green', contentType: 'Web News', date: d(2024, 6, 8), author: 'Anura Kumara', readTime: '4 min read' }),
  makeStory({ title: 'Intelligence: Water Supply Infrastructure Investment Gap Analysis', excerpt: 'Sri Lanka needs USD 2.5B in water supply and sanitation infrastructure over the next decade to meet SDG targets.', category: 'Water & Sanitation', sector: 'Infrastructure', sectorSlug: 'infrastructure', contentType: 'Intelligence', date: d(2024, 6, 2), author: 'Infrastructure Desk', readTime: '9 min read' }),
]

export function getArchiveYears() {
  const yearMap = {}
  for (const story of archivedStories) {
    const year = parseInt(story.date.slice(0, 4))
    if (!yearMap[year]) {
      yearMap[year] = { year, count: 0, sectors: {} }
    }
    yearMap[year].count++
    yearMap[year].sectors[story.sector] = (yearMap[year].sectors[story.sector] || 0) + 1
  }
  return Object.values(yearMap).sort((a, b) => b.year - a.year)
}

export function getMonthCountsForYear(year) {
  const counts = Array.from({ length: 12 }, (_, i) => ({
    month: i,
    name: MONTH_NAMES[i],
    short: MONTH_SHORT[i],
    count: 0,
    sectors: {},
  }))
  for (const story of archivedStories) {
    const storyYear = parseInt(story.date.slice(0, 4))
    const storyMonth = parseInt(story.date.slice(5, 7)) - 1
    if (storyYear === year) {
      counts[storyMonth].count++
      counts[storyMonth].sectors[story.sector] = (counts[storyMonth].sectors[story.sector] || 0) + 1
    }
  }
  return counts
}

export function getStoriesByYearMonth(year, month) {
  return archivedStories.filter((story) => {
    const storyYear = parseInt(story.date.slice(0, 4))
    const storyMonth = parseInt(story.date.slice(5, 7)) - 1
    return storyYear === year && storyMonth === month
  }).sort((a, b) => b.date.localeCompare(a.date))
}

export function getDayCountsForYearMonth(year, month) {
  const map = {}
  for (const story of archivedStories) {
    const storyYear = parseInt(story.date.slice(0, 4))
    const storyMonth = parseInt(story.date.slice(5, 7)) - 1
    const storyDay = parseInt(story.date.slice(8, 10))
    if (storyYear === year && storyMonth === month) {
      if (!map[storyDay]) map[storyDay] = 0
      map[storyDay]++
    }
  }
  return map
}

export function getStoriesByYearMonthDay(year, month, day) {
  return archivedStories.filter((story) => {
    const storyYear = parseInt(story.date.slice(0, 4))
    const storyMonth = parseInt(story.date.slice(5, 7)) - 1
    const storyDay = parseInt(story.date.slice(8, 10))
    return storyYear === year && storyMonth === month && storyDay === day
  }).sort((a, b) => b.date.localeCompare(a.date))
}

export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}
