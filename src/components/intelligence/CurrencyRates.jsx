import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRightLeft,
  ArrowUpRight,
  Banknote,
  ChevronsUpDown,
  Globe,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { cn } from '@/lib/cn'

const sortKeys = [
  { key: 'code', label: 'Currency' },
  { key: 'rate', label: 'Rate (LKR)' },
  { key: 'change', label: '24h Change' },
]

function MiniSparkline({ positive }) {
  const points = positive
    ? '0,8 15,6 30,7 45,4 60,5 75,3 90,2 100,1'
    : '0,2 15,3 30,2 45,5 60,4 75,6 90,7 100,8'

  return (
    <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="h-2.5 w-12">
      <polyline
        points={points}
        fill="none"
        stroke={positive ? 'var(--color-emerald-500)' : 'var(--color-red-500)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PrimaryRateCard({ currency }) {
  const isUp = currency.change > 0
  const changePct = ((currency.change / currency.rate) * 100).toFixed(3)

  return (
    <div className="overflow-hidden rounded border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-2.5">
        <div className="flex items-center gap-2">
          <Banknote className="size-4 text-slate-400" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Primary Rate
          </span>
        </div>
        <span className="text-[9px] text-slate-400">Live · Jun 6, 2026</span>
      </div>

      <div className="flex flex-wrap items-center gap-6 p-5">
        <div className="flex items-center gap-4">
          <span className="text-4xl" aria-hidden="true">{currency.flag}</span>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[32px] font-light tracking-tight text-slate-900">
                {currency.rate.toFixed(2)}
              </span>
              <span className="text-[12px] font-semibold text-slate-400">LKR</span>
            </div>
            <p className="text-[11px] text-slate-500">
              1 {currency.code} = {currency.rate.toFixed(2)} LKR
            </p>
          </div>
        </div>

        <div className="ml-auto flex flex-col items-end gap-1">
          <span
            className={cn(
              'flex items-center gap-1 rounded px-2 py-1 text-[12px] font-bold',
              isUp ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600',
            )}
          >
            {isUp ? (
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            ) : (
              <ArrowDownRight className="size-3.5" aria-hidden="true" />
            )}
            {isUp ? '+' : ''}{currency.change.toFixed(2)}
          </span>
          <span className="text-[10px] text-slate-400">
            {isUp ? '+' : ''}{changePct}% 24h
          </span>
          <MiniSparkline positive={isUp} />
        </div>
      </div>
    </div>
  )
}

function ConvertWidget({ currencies }) {
  const [amount, setAmount] = useState(1000)
  const [target, setTarget] = useState('USD')
  const usd = currencies.find((c) => c.code === target) ?? currencies[0]
  const converted = (amount / usd.rate).toFixed(2)

  return (
    <div className="rounded border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <ArrowRightLeft className="size-4 text-slate-400" aria-hidden="true" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Quick Convert
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor="convert-amount" className="mb-1 block text-[9px] font-semibold uppercase tracking-wider text-slate-400">
            Amount (LKR)
          </label>
          <input
            id="convert-amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            className="w-full border border-slate-200 bg-slate-50 px-3 py-2.5 font-mono text-[15px] font-bold text-slate-900 focus:border-brand-600 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="convert-currency" className="mb-1 block text-[9px] font-semibold uppercase tracking-wider text-slate-400">
            Convert To
          </label>
          <select
            id="convert-currency"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full cursor-pointer border border-slate-200 bg-slate-50 px-3 py-2.5 text-[13px] font-semibold text-slate-900 focus:border-brand-600 focus:outline-none"
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.code} — {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="border-t border-slate-100 pt-3">
          <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
            Result
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-mono text-[22px] font-bold text-slate-900">
              {converted}
            </span>
            <span className="text-[12px] font-semibold text-slate-500">{target}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CurrencyRates({ currencies }) {
  const [sortKey, setSortKey] = useState('rate')
  const [sortDir, setSortDir] = useState('desc')

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir(key === 'code' ? 'asc' : 'desc')
    }
  }

  const sorted = [...currencies].sort((a, b) => {
    let cmp = 0
    if (sortKey === 'code') cmp = a.code.localeCompare(b.code)
    else if (sortKey === 'rate') cmp = a.rate - b.rate
    else if (sortKey === 'change') cmp = a.change - b.change
    return sortDir === 'asc' ? cmp : -cmp
  })

  const primary = currencies.find((c) => c.code === 'USD')
  const strongest = [...currencies].sort((a, b) => b.change - a.change)[0]
  const weakest = [...currencies].sort((a, b) => a.change - b.change)[0]

  return (
    <section>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3 border-b-2 border-slate-900 py-2">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
            Exchange Rates (LKR)
          </h2>
          <div className="hidden items-center gap-3 sm:flex">
            <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
              <Globe className="size-3" aria-hidden="true" />
              <span className="font-semibold text-slate-700">{currencies.length}</span> currencies
            </span>
            <span className="text-[10px] text-slate-300">|</span>
            <span className="flex items-center gap-1 text-[10px] text-slate-500">
              <TrendingUp className="size-3 text-emerald-500" aria-hidden="true" />
              Best: <span className="font-semibold text-emerald-600">{strongest.code}</span>
            </span>
            <span className="flex items-center gap-1 text-[10px] text-slate-500">
              <TrendingDown className="size-3 text-red-500" aria-hidden="true" />
              Worst: <span className="font-semibold text-red-600">{weakest.code}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Primary rate + Convert */}
      <div className="mb-5 grid gap-5 lg:grid-cols-[1fr_300px]">
        {primary && <PrimaryRateCard currency={primary} />}
        <ConvertWidget currencies={currencies} />
      </div>

      {/* All rates table */}
<div className="overflow-x-auto rounded border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-2.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            All Rates
          </span>
          <div className="flex items-center gap-1">
            <ChevronsUpDown className="size-3 text-slate-400" aria-hidden="true" />
            <span className="text-[9px] text-slate-400">Click column to sort</span>
          </div>
        </div>

        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200">
              {sortKeys.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'cursor-pointer select-none px-5 py-2.5 text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900',
                    col.key !== 'code' && 'text-right',
                  )}
                  onClick={() => handleSort(col.key)}
                >
                  <span className={cn('inline-flex items-center gap-1', col.key !== 'code' && 'justify-end')}>
                    {col.label}
                    {sortKey === col.key && (
                      sortDir === 'asc' ? (
                        <ArrowUpRight className="size-3 text-brand-600" />
                      ) : (
                        <ArrowDownRight className="size-3 text-brand-600" />
                      )
                    )}
                  </span>
                </th>
              ))}
              <th className="px-5 py-2.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                Trend
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((c, i) => {
              const isUp = c.change > 0
              const changePct = ((c.change / c.rate) * 100).toFixed(3)
              const isUSD = c.code === 'USD'

              return (
                <tr
                  key={c.code}
                  className={cn(
                    'border-b border-slate-100 transition-colors last:border-0 hover:bg-brand-50/30',
                    i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50',
                    isUSD && 'bg-brand-50/60',
                  )}
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="text-xl" aria-hidden="true">{c.flag}</span>
                      <div>
                        <span className="text-[13px] font-bold text-slate-900">
                          {c.code}
                        </span>
                        <p className="text-[10px] text-slate-400">{c.name}</p>
                      </div>
                      {isUSD && (
                        <span className="ml-1 rounded bg-brand-600/10 px-1.5 py-0.5 text-[8px] font-bold uppercase text-brand-600">
                          Base
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <span className="font-mono text-[15px] font-bold text-slate-900">
                      {c.rate.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex flex-col items-end gap-0.5">
                      <span
                        className={cn(
                          'inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 font-mono text-[11px] font-bold',
                          isUp ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600',
                        )}
                      >
                        {isUp ? (
                          <ArrowUpRight className="size-3" aria-hidden="true" />
                        ) : (
                          <ArrowDownRight className="size-3" aria-hidden="true" />
                        )}
                        {isUp ? '+' : ''}{c.change.toFixed(2)}
                      </span>
                      <span className="text-[9px] text-slate-400">
                        {isUp ? '+' : ''}{changePct}%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <MiniSparkline positive={isUp} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
