import { useState } from 'react'
import { ArrowRight, Megaphone, X } from 'lucide-react'

export default function AdBanner({ ad, dismissible = false }) {
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  return (
    <section
      aria-label={ad.eyebrow}
      className="relative my-8 border-2 border-secondary-900 bg-secondary-900 mt-0 mb-0"
    >
      {dismissible && (
        <button
          type="button"
          onClick={() => setHidden(true)}
          aria-label="Close advertisement"
          className="absolute right-3 top-3 z-10 flex size-7 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/25"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      )}
      <div
        className={`flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 ${dismissible ? 'pr-12' : ''}`}
      >
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-2">
            <Megaphone className="size-4 text-amber-400" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
              {ad.eyebrow}
            </span>
          </div>
          <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {ad.title} — <span className="text-amber-400">{ad.highlight}</span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{ad.body}</p>
        </div>
        <a
          href="#"
          className="group inline-flex shrink-0 items-center gap-2 border-2 border-white bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-secondary-900 transition-colors hover:bg-transparent hover:text-white"
        >
          {ad.cta}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}
