import { Radio, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { breakingNews } from '@/data/breakingNews'

const readingTimeMs = (title) =>
  Math.max(5000, Math.round(title.trim().split(/\s+/).length * 450))

export default function BreakingNewsBanner() {
  const [dismissed, setDismissed] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const item = breakingNews[active]
    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % breakingNews.length)
    }, readingTimeMs(item?.title || ''))
    return () => clearTimeout(timer)
  }, [active, dismissed])

  if (dismissed) return null

  return (
    <div className="bg-brand-600 text-white">
      <div className="mx-auto flex min-h-[34px] max-w-[1280px] items-stretch px-3">
        <div className="flex shrink-0 items-center gap-2 border-r border-white/20 py-2 pr-3">
          <Radio className="h-3 w-3 animate-pulse text-yellow-300" aria-hidden="true" />
          <span className="whitespace-nowrap text-[9px] font-black uppercase tracking-[0.16em] text-yellow-300">
            Breaking
          </span>
        </div>
        <div className="flex flex-1 items-center overflow-hidden px-3">
          <div className="w-full">
            {breakingNews.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`block w-full cursor-pointer text-left text-[11px] font-medium leading-snug transition-all duration-300 hover:text-yellow-200 ${
                  active === index ? 'block' : 'hidden'
                }`}
              >
                <span className="mr-2 rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold uppercase">
                  {item.tag}
                </span>
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3 border-l border-white/20 py-2 pl-3">
          <div className="hidden sm:flex items-center gap-1.5">
            {breakingNews.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-all ${
                  active === index
                    ? 'scale-125 bg-yellow-300'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Dismiss breaking news"
            onClick={() => setDismissed(true)}
            className="cursor-pointer rounded p-0.5 transition-colors hover:bg-white/20"
          >
            <X className="h-3.5 w-3.5 text-white/70" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
