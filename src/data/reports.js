import { BarChart2, FileSearch, Users } from 'lucide-react'

export const reports = [
  {
    id: 1,
    type: 'Sector Report',
    typeIcon: BarChart2,
    typeColor: 'bg-blue-50 text-blue-700 border border-blue-200',
    title:
      'Sri Lanka Banking Sector Outlook H2 2026 – Capital adequacy, NPLs and digital transformation roadmap',
    date: 'May 2026',
    pages: '84 pp',
    sector: 'Banking',
    downloads: '1,240',
    locked: true,
  },
  {
    id: 2,
    type: 'Research Survey',
    typeIcon: FileSearch,
    typeColor: 'bg-violet-50 text-violet-700 border border-violet-200',
    title:
      'SME Digital Adoption in Sri Lanka 2025 – Survey of 600 businesses across manufacturing, services and agriculture',
    date: 'Apr 2026',
    pages: '56 pp',
    sector: 'Cross-Sector',
    downloads: '3,780',
    locked: false,
  },
  {
    id: 3,
    type: 'Ecosystem Report',
    typeIcon: Users,
    typeColor: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    title:
      'Startup Ecosystem Report Sri Lanka 2026 – Funding rounds, exits, accelerator outcomes and talent gaps',
    date: 'Jun 2026',
    pages: '92 pp',
    sector: 'Technology',
    downloads: '2,190',
    locked: false,
  },
  {
    id: 4,
    type: 'Sector Report',
    typeIcon: BarChart2,
    typeColor: 'bg-blue-50 text-blue-700 border border-blue-200',
    title: 'Tourism Recovery & FDI Potential 2026–2028 – Arrivals data, hotel pipeline and investment zones',
    date: 'Jun 2026',
    pages: '67 pp',
    sector: 'Tourism',
    downloads: '892',
    locked: true,
  },
]

export const hubStats = [
  { label: 'reports', value: '1,100' },
  { label: 'citations', value: '3,200' },
  { label: 'partner docs', value: '55' },
]
