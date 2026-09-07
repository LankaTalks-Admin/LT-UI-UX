export const gdpQuarterly = [
  { label: 'Q1 2025', value: 22.4, unit: 'USD Bn' },
  { label: 'Q2 2025', value: 23.1, unit: 'USD Bn' },
  { label: 'Q3 2025', value: 23.8, unit: 'USD Bn' },
  { label: 'Q4 2025', value: 24.5, unit: 'USD Bn' },
  { label: 'Q1 2026', value: 25.2, unit: 'USD Bn' },
  { label: 'Q2 2026', value: 26.0, unit: 'USD Bn' },
]

export const inflationMonthly = [
  { label: 'Jan', value: 4.2 },
  { label: 'Feb', value: 3.8 },
  { label: 'Mar', value: 3.5 },
  { label: 'Apr', value: 3.9 },
  { label: 'May', value: 3.2 },
  { label: 'Jun', value: 2.9 },
]

export const tradeBalance = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  imports: [3.2, 3.5, 3.1, 3.8, 3.4, 3.6],
  exports: [1.8, 2.0, 1.9, 2.2, 2.1, 2.4],
}

export const fdiBySector = [
  { label: 'Technology', value: 420, color: 'bg-blue-500' },
  { label: 'Tourism', value: 310, color: 'bg-emerald-500' },
  { label: 'Manufacturing', value: 280, color: 'bg-violet-500' },
  { label: 'Infrastructure', value: 240, color: 'bg-amber-500' },
  { label: 'Agriculture', value: 150, color: 'bg-rose-500' },
  { label: 'Energy', value: 120, color: 'bg-cyan-500' },
]

export const currencyRates = [
  { code: 'USD', name: 'US Dollar', rate: 298.45, change: -0.32, flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', rate: 324.10, change: 0.18, flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', rate: 378.60, change: 0.45, flag: '🇬🇧' },
  { code: 'INR', name: 'Indian Rupee', rate: 3.56, change: -0.01, flag: '🇮🇳' },
  { code: 'JPY', name: 'Japanese Yen', rate: 1.89, change: 0.02, flag: '🇯🇵' },
  { code: 'CNY', name: 'Chinese Yuan', rate: 41.12, change: -0.08, flag: '🇨🇳' },
]

export const keyIndicators = [
  { label: 'Policy Rate', value: '8.00%', delta: '0.00%', sub: 'CBSL SDFR', badge: null },
  { label: 'Unemployment', value: '4.7%', delta: '-0.3%', sub: 'Q1 2026 estimate', badge: null },
  { label: 'Debt-to-GDP', value: '88.3%', delta: '-4.1%', sub: 'Down from 92.4%', badge: 'Improved' },
  { label: 'Reserves', value: '$6.2B', delta: '+$0.4B', sub: '3.8 months import cover', badge: 'Live' },
  { label: 'FDI Inflows', value: '$1.5B', delta: '+18%', sub: 'TTM to Jun 2026', badge: null },
  { label: 'GDP Growth', value: '4.8%', delta: '+0.6%', sub: 'YoY Q2 2026', badge: null },
]
