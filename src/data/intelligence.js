export const intelligenceCounts = {
  sectorBriefs: 42,
  businessBriefs: 16,
  dataIntel: 20,
}

export const intelligenceItems = [
  {
    id: 1,
    type: 'Sector Brief',
    typeColor: 'bg-blue-50 text-blue-700 border border-blue-200',
    icon: 'chart',
    sector: 'Banking & Finance',
    headline:
      'Banking & Finance: Q2 2026 sector brief - capital adequacy, NPL trends and digital investment',
    excerpt:
      'Comprehensive analysis of the Q2 banking landscape covering capital ratios across the 9 licensed commercial banks, provisioning trends and digital capex.',
    date: 'Jun 2026',
    length: '42 pp · Analysis',
    locked: true,
  },
  {
    id: 2,
    type: 'Business Brief',
    typeColor: 'bg-violet-50 text-violet-700 border border-violet-200',
    icon: 'doc',
    sector: 'Finance',
    headline:
      'Post-IMF review: cross-sector implications for banking, trade finance and FDI inflows in H2 2026',
    excerpt:
      'Analyst-written cross-sector notes for the post-IMF review period covering capital flows and financial stability outlooks for key sectors.',
    date: 'Jun 2026',
    length: '31 pp · Analysis',
    locked: true,
  },
  {
    id: 3,
    type: 'Data Intelligence',
    typeColor: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    icon: 'line',
    sector: 'Tourism',
    headline:
      'Sri Lanka tourism 2026: 4 charts on arrivals, source markets, and revenue recovery',
    excerpt:
      'AI-generated data intelligence review of inbound tourism metrics with benchmark comparisons to pre-2020 figures and regional peers.',
    date: 'Jun 2026',
    length: '16 pp · AI-generated',
    locked: true,
  },
]
