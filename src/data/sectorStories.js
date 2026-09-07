const sectorColors = {
  markets:       { color: 'bg-emerald-600',  accent: 'text-emerald-700', border: 'border-emerald-600' },
  tech:          { color: 'bg-violet-600',   accent: 'text-violet-700',  border: 'border-violet-600' },
  policy:        { color: 'bg-blue-600',     accent: 'text-blue-700',    border: 'border-blue-600' },
  tourism:       { color: 'bg-cyan-600',     accent: 'text-cyan-700',    border: 'border-cyan-600' },
  infrastructure:{ color: 'bg-amber-500',    accent: 'text-amber-700',   border: 'border-amber-500' },
  startups:      { color: 'bg-pink-600',     accent: 'text-pink-700',    border: 'border-pink-600' },
  trade:         { color: 'bg-teal-600',     accent: 'text-teal-700',    border: 'border-teal-600' },
  agriculture:   { color: 'bg-lime-600',     accent: 'text-lime-700',    border: 'border-lime-600' },
  construction:  { color: 'bg-orange-600',   accent: 'text-orange-700',  border: 'border-orange-600' },
  logistics:     { color: 'bg-indigo-600',   accent: 'text-indigo-700',  border: 'border-indigo-600' },
  apparel:       { color: 'bg-rose-600',     accent: 'text-rose-700',    border: 'border-rose-600' },
  education:     { color: 'bg-sky-600',      accent: 'text-sky-700',     border: 'border-sky-600' },
  health:        { color: 'bg-red-600',      accent: 'text-red-700',     border: 'border-red-600' },
  energy:        { color: 'bg-yellow-500',   accent: 'text-yellow-700',  border: 'border-yellow-500' },
  green:         { color: 'bg-green-600',    accent: 'text-green-700',   border: 'border-green-600' },
  'blue-economy':{ color: 'bg-sky-700',     accent: 'text-sky-800',     border: 'border-sky-700' },
  sports:        { color: 'bg-fuchsia-600',  accent: 'text-fuchsia-700', border: 'border-fuchsia-600' },
}

export const sectorStories = [
  {
    slug: 'markets',
    title: 'Markets',
    ...sectorColors.markets,
    stories: [
      { id: 'mkt-1', category: 'Banking', subSectorSlug: 'commercial-banking', title: 'Sampath Bank Reports Record Q2 Profit on Lower NPL Provisions', excerpt: 'Net interest margins widened 18 bps as the bank benefited from a favourable rate environment.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop', time: '1 hr ago', readTime: '4 min read' },
      { id: 'mkt-2', category: 'CSE', subSectorSlug: 'colombo-stock-exchange-cse-equities', title: 'CSE All-Share Index Rallies 3.2% on IMF Review Completion', excerpt: 'Foreign investors net-bought Rs 4.8B this week, the highest weekly inflow since 2022.', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop', time: '3 hrs ago', readTime: '3 min read' },
      { id: 'mkt-3', category: 'Fintech', subSectorSlug: 'fintech-digital-payments', title: 'LankaPay QR Transactions Cross 1 Billion Mark', excerpt: 'The national QR payment network sees accelerated merchant adoption across rural districts.', image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop', time: '6 hrs ago', readTime: '5 min read' },
    ],
    expandedStories: [
      { id: 'mkt-e1', category: 'Insurance', subSectorSlug: 'insurance-reinsurance', title: 'SLIC Reports 15% Premium Growth Driven by Health Segment', excerpt: 'Mandatory health insurance uptake boosts industry-wide revenues for the third consecutive quarter.', image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=800&auto=format&fit=crop', time: '2 hrs ago', readTime: '4 min read' },
      { id: 'mkt-e2', category: 'Investment', subSectorSlug: 'investment-asset-management', title: 'Lankan Equity Funds Outperform Asian Peers in H1 2026', excerpt: 'Domestic-focused equity funds deliver 18.4% returns, outpacing the regional average by 600 bps.', image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '5 min read' },
    ],
  },
  {
    slug: 'tech',
    title: 'Tech',
    ...sectorColors.tech,
    stories: [
      { id: 'tech-1', category: 'AI', subSectorSlug: 'artificial-intelligence-automation', title: 'Sri Lankan AI Startup Secures $8M Series B from Sequoia Scout', excerpt: 'The Colombo-based firm builds LLM-powered document processing for South Asian banks.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop', time: '2 hrs ago', readTime: '5 min read' },
      { id: 'tech-2', category: 'Telecom', subSectorSlug: 'telecommunications-connectivity', title: 'Dialog Launches 5G Home Broadband in Colombo', excerpt: 'Fixed wireless access targets 200,000 households in the first phase rollout.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '3 min read' },
      { id: 'tech-3', category: 'Cybersecurity', subSectorSlug: 'cybersecurity-data-privacy', title: 'CERT Sri Lanka Warns of Rising Phishing Campaigns Targeting SMEs', excerpt: 'A 40% spike in reported incidents prompts new national awareness initiative.', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=800&auto=format&fit=crop', time: '8 hrs ago', readTime: '4 min read' },
    ],
    expandedStories: [
      { id: 'tech-e1', category: 'E-Commerce', subSectorSlug: 'e-commerce-digital-retail', title: 'PickMe Marketplace Reaches 50,000 Active Sellers', excerpt: 'The platform\'s GMV grows 200% YoY as rural sellers join the digital economy.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop', time: '3 hrs ago', readTime: '4 min read' },
      { id: 'tech-e2', category: 'Cloud', subSectorSlug: 'cloud-computing-data-centres', title: 'Dialog Axiata Launches Hyperscale Data Centre in Colombo', excerpt: 'The $45M facility offers 2MW of IT load capacity for enterprise and government workloads.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop', time: '7 hrs ago', readTime: '5 min read' },
    ],
  },
  {
    slug: 'policy',
    title: 'Policy',
    ...sectorColors.policy,
    stories: [
      { id: 'pol-1', category: 'IMF', subSectorSlug: 'imf-programme-debt-restructuring', title: 'Sri Lanka Completes 4th IMF Review, Unlocking $334M Tranche', excerpt: 'The government meets all quantitative targets under the Extended Fund Facility.', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop', time: '30 min ago', readTime: '6 min read' },
      { id: 'pol-2', category: 'Taxation', subSectorSlug: 'taxation-inland-revenue', title: 'New VAT Threshold of Rs 120M Takes Effect July 1', excerpt: 'The revised threshold relieves 18,000 SMEs from monthly VAT compliance obligations.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '4 min read' },
      { id: 'pol-3', category: 'SOE Reform', subSectorSlug: 'state-owned-enterprise-soe-reform', title: 'Cabinet Approves Partial Privatisation of SriLankan Airlines', excerpt: 'A 49% stake sale to a strategic investor is targeted by Q1 2027.', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop', time: '7 hrs ago', readTime: '5 min read' },
    ],
    expandedStories: [
      { id: 'pol-e1', category: 'Governance', subSectorSlug: 'anti-corruption-governance-reform', title: 'Anti-Corruption Commission Recovers Rs 2.3B in Misappropriated Funds', excerpt: 'The landmark year sees 45 successful prosecutions under the new governance act.', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop', time: '3 hrs ago', readTime: '5 min read' },
    ],
  },
  {
    slug: 'tourism',
    title: 'Tourism',
    ...sectorColors.tourism,
    stories: [
      { id: 'tour-1', category: 'Hospitality', subSectorSlug: 'hotels-hospitality', title: 'Anantara Launches $120M Resort Complex in Bentota', excerpt: 'The 200-key property targets luxury experiential travellers from the Middle East and Europe.', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop', time: '1 hr ago', readTime: '4 min read' },
      { id: 'tour-2', category: 'Aviation', subSectorSlug: 'airline-airport-connectivity', title: 'Emirates Increases Colombo Frequencies to 4 Daily Flights', excerpt: 'Capacity expansion adds 1,200 seats per day on the Dubai–Colombo route.', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '3 min read' },
      { id: 'tour-3', category: 'Eco-Tourism', subSectorSlug: 'wildlife-eco-tourism', title: 'Yala Buffer Zone Lodges Report 90% Occupancy Through Q3', excerpt: 'Community-based tourism model generates Rs 2.1B for surrounding villages.', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop', time: '9 hrs ago', readTime: '5 min read' },
    ],
    expandedStories: [
      { id: 'tour-e1', category: 'Heritage', subSectorSlug: 'heritage-cultural-tourism', title: 'Sigiriya Complex Receives UNESCO Enhanced Protection Status', excerpt: 'New visitor management system caps daily entries at 5,000 to preserve the site.', image: 'https://images.unsplash.com/photo-1590123579284-c39a2532363b?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '4 min read' },
      { id: 'tour-e2', category: 'Wellness', subSectorSlug: 'wellness-ayurveda-tourism', title: 'Ayurveda Tourism Revenue Hits $320M on Indian Wellness Demand', excerpt: 'Sri Lanka positions itself as the Ayurveda capital of South Asia with 200 new centres.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop', time: '8 hrs ago', readTime: '3 min read' },
    ],
  },
  {
    slug: 'infrastructure',
    title: 'Infrastructure',
    ...sectorColors.infrastructure,
    stories: [
      { id: 'infra-1', category: 'Transport', subSectorSlug: 'public-transportation', title: 'Colombo Light Rail Project Gets Final Approval from Cabinet', excerpt: 'The 16km line connecting Malabe to Colombo Fort targets completion by 2030.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop', time: '2 hrs ago', readTime: '5 min read' },
      { id: 'infra-2', category: 'Water', subSectorSlug: 'water-supply-sanitation-nwsdb', title: 'Greater Colombo Water Supply Upgrade Reaches 85% Completion', excerpt: 'The $310M Japanese-funded project will supply 540,000 m³/day to suburban areas.', image: 'https://images.unsplash.com/photo-1501004318855-b174af8d0a51?q=80&w=800&auto=format&fit=crop', time: '6 hrs ago', readTime: '4 min read' },
      { id: 'infra-3', category: 'Urban', subSectorSlug: 'urban-development-smart-cities', title: 'Kathmandu-style Urban Renewal: Pettah Revival Phase 1 Complete', excerpt: 'The first block of the heritage market district reopens with modern facilities.', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop', time: '10 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'infra-e1', category: 'Roads', subSectorSlug: 'roads-highways-expressways', title: 'Central Expressway Phase 3 Opens to Traffic', excerpt: 'The 32km stretch cuts Kandy travel time from Colombo to under 90 minutes.', image: 'https://images.unsplash.com/photo-1515165076831-77937fa1bd14?q=80&w=800&auto=format&fit=crop', time: '3 hrs ago', readTime: '4 min read' },
    ],
  },
  {
    slug: 'startups',
    title: 'Startups',
    ...sectorColors.startups,
    stories: [
      { id: 'st-1', category: 'Funding', subSectorSlug: 'startup-ecosystem-venture-capital', title: 'Lankan Fintech raised $12M to Expand BNPL Across South Asia', excerpt: 'PayHere plans to launch in Bangladesh and Nepal by year-end.', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop', time: '1 hr ago', readTime: '4 min read' },
      { id: 'st-2', category: 'Incubator', subSectorSlug: 'accelerators-incubators', title: 'SLIIT Launches Deep-Tech Incubator with Rs 500M Fund', excerpt: 'The programme targets AI, robotics and climate-tech startups in their pre-seed phase.', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '3 min read' },
      { id: 'st-3', category: 'E-Commerce', subSectorSlug: 'sme-development-growth', title: 'Koko.lk Achieves Rs 1B GMV in First Year of Operations', excerpt: 'The social commerce platform onboarded 8,000 small sellers across 22 districts.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop', time: '7 hrs ago', readTime: '5 min read' },
    ],
    expandedStories: [
      { id: 'st-e1', category: 'Angel', subSectorSlug: 'angel-investing-seed-funding', title: 'Lanka Angel Network Deploys Rs 800M Across 24 Startups', excerpt: 'Average seed ticket grows to Rs 33M as institutional LPs join the network.', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '4 min read' },
      { id: 'st-e2', category: 'Women', subSectorSlug: 'women-entrepreneurship', title: 'Women-Led Startups Raise Record $45M in 2026', excerpt: 'Female-founded ventures in healthtech and edtech attract 30% of total VC funding.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop', time: '9 hrs ago', readTime: '5 min read' },
    ],
  },
  {
    slug: 'trade',
    title: 'Trade',
    ...sectorColors.trade,
    stories: [
      { id: 'tr-1', category: 'Exports', subSectorSlug: 'industrial-goods-exports', title: 'Sri Lanka Exports Hit $6.2B in H1 2026, Up 14% YoY', excerpt: 'Apparel and electronics lead the export surge amid easing global demand.', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop', time: '2 hrs ago', readTime: '4 min read' },
      { id: 'tr-2', category: 'FTAs', subSectorSlug: 'trade-policy-free-trade-agreements', title: 'India-Sri Lanka FTA Phase 2 Negotiations Enter Final Round', excerpt: 'Services and digital trade chapters expected to be concluded by September.', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '5 min read' },
      { id: 'tr-3', category: 'Remittances', subSectorSlug: 'remittances-diaspora-economy', title: 'Worker Remittances Surge to $3.8B in First Half', excerpt: 'Gulf countries account for 62% of inward remittances, up from 58% last year.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop', time: '8 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'tr-e1', category: 'FDI', subSectorSlug: 'foreign-direct-investment-fdi', title: 'FDI Inflows Reach $1.8B in First Half, Highest Since 2019', excerpt: 'India and China lead source markets, with manufacturing and tech attracting the bulk.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '5 min read' },
    ],
  },
  {
    slug: 'agriculture',
    title: 'Agriculture',
    ...sectorColors.agriculture,
    stories: [
      { id: 'ag-1', category: 'Tea', subSectorSlug: 'tea-industry', title: 'Sri Lanka Tea Exports Cross $1.5B on Premium Demand from China', excerpt: 'Ceylon tea commands 25% price premium over regional competitors at auction.', image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=800&auto=format&fit=crop', time: '1 hr ago', readTime: '4 min read' },
      { id: 'ag-2', category: 'Rice', subSectorSlug: 'rice-cereals', title: 'Maha Season Rice Output Exceeds 3.2M Metric Tons', excerpt: 'Record harvest eliminates the need for rice imports for the third consecutive quarter.', image: 'https://images.unsplash.com/photo-1536304993881-460e32f5061b?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '5 min read' },
      { id: 'ag-3', category: 'Organic', subSectorSlug: 'organic-sustainable-farming', title: 'Sri Lanka Organic Tea Exports Grow 35% on EU Demand', excerpt: 'European buyers pay $8/kg premium for certified organic Ceylon tea.', image: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?q=80&w=800&auto=format&fit=crop', time: '7 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'ag-e1', category: 'Dairy', subSectorSlug: 'dairy-livestock', title: 'National Dairy Programme Boosts Milk Collection by 22%', excerpt: 'Smallholder farmer support schemes increase daily collection to 850,000 litres.', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop', time: '3 hrs ago', readTime: '4 min read' },
      { id: 'ag-e2', category: 'AgriTech', subSectorSlug: 'agritech-farm-modernisation', title: 'Drone Spraying Service Covers 50,000 Hectares in North-Central Province', excerpt: 'AgriDrone SL reduces pesticide costs by 40% for rice and vegetable farmers.', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop', time: '6 hrs ago', readTime: '5 min read' },
    ],
  },
  {
    slug: 'construction',
    title: 'Construction',
    ...sectorColors.construction,
    stories: [
      { id: 'con-1', category: 'Real Estate', subSectorSlug: 'real-estate-development', title: 'Colombo Condo Market Sees 22% Price Recovery in Premium Segment', excerpt: 'Foreign buyer interest and limited new supply drive prices back toward 2019 peaks.', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop', time: '2 hrs ago', readTime: '5 min read' },
      { id: 'con-2', category: 'Infrastructure', subSectorSlug: 'building-civil-construction', title: 'Rs 180B Port City Phase 2 Construction Begins', excerpt: 'Marine reclamation for the second tranche of land creates 58 hectares of new waterfront.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '4 min read' },
      { id: 'con-3', category: 'Green', subSectorSlug: 'green-building-sustainability', title: 'First LEED Platinum Office Tower Opens in Colombo 3', excerpt: 'The 32-storey building achieves 40% energy savings through passive design strategies.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', time: '9 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'con-e1', category: 'Housing', subSectorSlug: 'housing-policy-affordable-housing', title: 'Government Launches Rs 200B Affordable Housing Programme', excerpt: '50,000 housing units across 12 districts target low-income families.', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '5 min read' },
    ],
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    ...sectorColors.logistics,
    stories: [
      { id: 'log-1', category: 'Ports', subSectorSlug: 'port-operations-colombo-port', title: 'Colombo Port Handles Record 4.2M TEU in H1 2026', excerpt: 'Transhipment volumes grow 18% as South Asian hub status strengthens.', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?q=80&w=800&auto=format&fit=crop', time: '1 hr ago', readTime: '4 min read' },
      { id: 'log-2', category: 'Air Cargo', subSectorSlug: 'airlines-air-cargo', title: 'Mattala Airport Cargo Terminal Opens with Chinese Investment', excerpt: 'The $85M facility targets 50,000 tonnes of annual throughput by 2028.', image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '5 min read' },
      { id: 'log-3', category: 'Cold Chain', subSectorSlug: 'cold-chain-temperature-logistics', title: 'Lankan Startup Raises $5M for Island-Wide Cold Chain Network', excerpt: 'The IoT-enabled system reduces post-harvest losses by an estimated 30%.', image: 'https://images.unsplash.com/photo-1586528116319-ad8e138398ff?q=80&w=800&auto=format&fit=crop', time: '8 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'log-e1', category: 'Shipping', subSectorSlug: 'shipping-lines-maritime', title: 'Sri Lanka Shipping Corporation Orders Four New Container Vessels', excerpt: 'The $320M fleet renewal programme targets intra-Asian trade routes.', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop', time: '6 hrs ago', readTime: '4 min read' },
    ],
  },
  {
    slug: 'apparel',
    title: 'Apparel',
    ...sectorColors.apparel,
    stories: [
      { id: 'app-1', category: 'Exports', subSectorSlug: 'garment-manufacturing-export', title: 'Apparel Industry Targets $7B Export Revenue by 2028', excerpt: 'Sustainability credentials and nearshoring trends position Sri Lanka as a premium sourcing hub.', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop', time: '2 hrs ago', readTime: '4 min read' },
      { id: 'app-2', category: 'Sustainability', subSectorSlug: 'sustainable-ethical-fashion', title: 'Brandix Achieves Carbon Neutral Certification Across All Factories', excerpt: 'The milestone covers 45,000 workers and 8 manufacturing plants island-wide.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '5 min read' },
      { id: 'app-3', category: 'Innovation', subSectorSlug: 'technical-textiles-industrial-fabric', title: '3D Virtual Sampling Cuts Sample Waste by 70% at MAS Holdings', excerpt: 'Digital prototyping accelerates the design-to-production cycle from 12 weeks to 4.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop', time: '9 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'app-e1', category: 'Compliance', subSectorSlug: 'apparel-standards-compliance', title: 'Sri Lanka Tops South Asia in Workplace Safety Compliance', excerpt: '98% of factories pass international audit standards, up from 84% two years ago.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '4 min read' },
    ],
  },
  {
    slug: 'education',
    title: 'Education',
    ...sectorColors.education,
    stories: [
      { id: 'edu-1', category: 'EdTech', subSectorSlug: 'edtech-digital-learning', title: 'Lankan EdTech Startup Reaches 1M Students Across South Asia', excerpt: 'The Sinhala, Tamil and English platform partners with 200 schools for rollout.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', time: '1 hr ago', readTime: '4 min read' },
      { id: 'edu-2', category: 'Universities', subSectorSlug: 'higher-education-universities', title: 'University of Colombo Launches Joint AI Research Centre with IIT', excerpt: 'The centre will offer dual-degree programmes and host 50 doctoral researchers.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '5 min read' },
      { id: 'edu-3', category: 'TVET', subSectorSlug: 'technical-vocational-training-tvet', title: 'Germany Funds Rs 4.5B Technical Training Programme in Sri Lanka', excerpt: 'Four new centres of excellence target automotive, renewable energy and ICT skills.', image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop', time: '7 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'edu-e1', category: 'Scholarships', subSectorSlug: 'scholarships-student-mobility', title: 'Fully-Funded Chevening Scholarships Open for 2027 Intake', excerpt: '45 new slots added for Sri Lankan professionals in climate and digital policy.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop', time: '6 hrs ago', readTime: '3 min read' },
    ],
  },
  {
    slug: 'health',
    title: 'Health',
    ...sectorColors.health,
    stories: [
      { id: 'hlth-1', category: 'Hospitals', subSectorSlug: 'hospitals-private-healthcare', title: 'Asiri Hospital Network Opens $50M Super-Specialty Centre in Kandy', excerpt: 'The 200-bed facility brings advanced cardiac and oncology services to the central province.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop', time: '2 hrs ago', readTime: '4 min read' },
      { id: 'hlth-2', category: 'Pharma', subSectorSlug: 'pharmaceuticals-medicine', title: 'Sri Lanka Pharma Exports Grow 28% to $120M', excerpt: 'Ayurvedic and generic medicines find new markets in Africa and Southeast Asia.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '3 min read' },
      { id: 'hlth-3', category: 'Public Health', subSectorSlug: 'public-health-disease-control', title: 'Dengue Cases Drop 40% After AI-Powered Vector Control Programme', excerpt: 'Predictive analytics from IoT traps enables targeted larvicide deployment.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop', time: '8 hrs ago', readTime: '5 min read' },
    ],
    expandedStories: [
      { id: 'hlth-e1', category: 'Mental Health', subSectorSlug: 'mental-health-wellness', title: 'National Mental Health Helpline Logs 100,000th Call', excerpt: 'The 24/7 service has reduced crisis escalation rates by 35% since launch.', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop', time: '3 hrs ago', readTime: '4 min read' },
      { id: 'hlth-e2', category: 'MedTech', subSectorSlug: 'medical-technology-equipment', title: 'Sri Lankan MedTech Startup Wins ASEAN Health Innovation Award', excerpt: 'The portable diagnostics device costs 90% less than traditional lab equipment.', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop', time: '7 hrs ago', readTime: '5 min read' },
    ],
  },
  {
    slug: 'energy',
    title: 'Energy',
    ...sectorColors.energy,
    stories: [
      { id: 'en-1', category: 'Solar', subSectorSlug: 'solar-energy', title: 'Sri Lanka Solar Capacity Crosses 2GW Milestone', excerpt: 'Rooftop installations account for 45% of total installed solar capacity.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop', time: '1 hr ago', readTime: '4 min read' },
      { id: 'en-2', category: 'Wind', subSectorSlug: 'wind-energy', title: 'Mannar Wind Farm Phase 3 Secures $180M ADB Financing', excerpt: 'The 100MW expansion will power 200,000 homes in the Northern Province.', image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '5 min read' },
      { id: 'en-3', category: 'Policy', subSectorSlug: 'energy-policy-regulation', title: 'Cabinet Approves Net Metering Reform for Commercial Buildings', excerpt: 'Revised regulations allow 300% of connected load for solar net metering.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop', time: '7 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'en-e1', category: 'Storage', subSectorSlug: 'energy-storage-batteries', title: 'First Utility-Scale Battery Storage System Installed in Kurunegala', excerpt: 'The 50MWh lithium-iron-phosphate system stabilises grid supply for 3 provinces.', image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '4 min read' },
    ],
  },
  {
    slug: 'green',
    title: 'Green',
    ...sectorColors.green,
    stories: [
      { id: 'gr-1', category: 'Climate', subSectorSlug: 'climate-change-net-zero', title: 'Sri Lanka Launches $500M Green Bond Framework', excerpt: 'The sovereign green bond attracts $2.1B in oversubscribed orders from ESG-focused funds.', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop', time: '2 hrs ago', readTime: '5 min read' },
      { id: 'gr-2', category: 'ESG', subSectorSlug: 'esg-reporting-standards', title: '60 Sri Lankan Companies Publish ESG Reports for First Time', excerpt: 'CSE-mandated disclosures drive corporate sustainability transparency.', image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '4 min read' },
      { id: 'gr-3', category: 'Biodiversity', subSectorSlug: 'biodiversity-conservation', title: 'Sinharaja Buffer Zone Gets Expanded Protection Status', excerpt: 'New 5,000-hectare buffer protects 60% of endemic species habitat.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop', time: '9 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'gr-e1', category: 'Green Finance', subSectorSlug: 'green-finance-sustainable-investment', title: 'Sri Lanka Green Finance Taxonomy Published for Investment Funds', excerpt: 'The framework classifies 120 economic activities by environmental sustainability.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '5 min read' },
    ],
  },
  {
    slug: 'blue-economy',
    title: 'Blue Economy',
    ...sectorColors['blue-economy'],
    stories: [
      { id: 'be-1', category: 'Fisheries', subSectorSlug: 'deep-sea-coastal-fisheries', title: 'Deep-Sea Fishing Fleet Modernisation programme Targets 500 Vessels', excerpt: 'The government-subsidised scheme introduces GPS tracking and cold storage on board.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop', time: '1 hr ago', readTime: '4 min read' },
      { id: 'be-2', category: 'Aquaculture', subSectorSlug: 'aquaculture-fish-farming', title: 'Shrimp Exports Reach $420M on High-Value US Demand', excerpt: 'Vannamei shrimp farming expands to 12,000 hectares in the Eastern Province.', image: 'https://images.unsplash.com/photo-1565680018630-5d4a8faab2f7?q=80&w=800&auto=format&fit=crop', time: '4 hrs ago', readTime: '5 min read' },
      { id: 'be-3', category: 'Marine', subSectorSlug: 'harbour-marine-infrastructure', title: 'Sri Lanka Marine Research Vessel Deployed for Indian Ocean Survey', excerpt: 'The $35M ship maps critical habitats across 200,000 sq km of territorial waters.', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=800&auto=format&fit=crop', time: '8 hrs ago', readTime: '3 min read' },
    ],
    expandedStories: [
      { id: 'be-e1', category: 'Seafood', subSectorSlug: 'seafood-processing-export', title: 'Lankan Seafood Processors Achieve EU HACCP Certification Milestone', excerpt: '42 processing plants certified, opening direct supply chains to European retailers.', image: 'https://images.unsplash.com/photo-1510130113356-d4c9d8f59694?q=80&w=800&auto=format&fit=crop', time: '6 hrs ago', readTime: '4 min read' },
    ],
  },
  {
    slug: 'sports',
    title: 'Sports',
    ...sectorColors.sports,
    stories: [
      { id: 'sp-1', category: 'Cricket', subSectorSlug: 'cricket-cricket-business', title: 'Sri Lanka Cricket Signs $120M Broadcast Deal with Star Sports', excerpt: 'The five-year agreement covers all home internationals and the LPL.', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop', time: '2 hrs ago', readTime: '4 min read' },
      { id: 'sp-2', category: 'Rugby', subSectorSlug: 'sports-tourism-events', title: 'Sri Lanka Rugby Sevens Qualifies for Asia Championship Division 1', excerpt: 'The team clinches promotion after defeating Hong Kong in the qualifying final.', image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800&auto=format&fit=crop', time: '5 hrs ago', readTime: '3 min read' },
      { id: 'sp-3', category: 'Olympics', subSectorSlug: 'sports-policy-governing-bodies', title: 'National Sports Council Commits Rs 2B for Olympic 2028 Preparation', excerpt: 'The investment targets high-potential athletes in swimming, athletics and badminton.', image: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?q=80&w=800&auto=format&fit=crop', time: '8 hrs ago', readTime: '5 min read' },
    ],
    expandedStories: [
      { id: 'sp-e1', category: 'Infrastructure', subSectorSlug: 'sports-infrastructure-stadiums', title: 'New 25,000-Seat International Cricket Stadium Approved for Hambantota', excerpt: 'The Rs 45B project includes practice facilities and a sports science centre.', image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800&auto=format&fit=crop', time: '3 hrs ago', readTime: '5 min read' },
      { id: 'sp-e2', category: 'Sponsorship', subSectorSlug: 'sports-sponsorship-marketing', title: 'Sri Lankan Cricket Sponsorship Revenue Tops $80M Annually', excerpt: 'New jersey and stadium naming deals drive record commercial income for the board.', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop', time: '7 hrs ago', readTime: '4 min read' },
    ],
  },
]
