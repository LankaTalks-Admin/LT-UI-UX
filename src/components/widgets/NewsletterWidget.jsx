import { Mail } from 'lucide-react'

export default function NewsletterWidget() {
  return (
    <div className="bg-secondary-900 p-6 text-center">
      <h3 className="font-serif text-xl font-black text-white">
        Get Latest News
      </h3>
      <p className="mt-2 text-[12px] leading-relaxed text-white/70">
        Subscribe to our newsletter to get the latest news and exclusive
        updates.
      </p>
      <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="sidebar-newsletter-email" className="sr-only">
          Email address
        </label>
        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-white/40"
            aria-hidden="true"
          />
          <input
            id="sidebar-newsletter-email"
            type="email"
            required
            placeholder="Enter Email"
            className="w-full border border-white/10 bg-white/10 py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-white/50 focus:border-amber-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="mt-3 w-full bg-brand-600 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
