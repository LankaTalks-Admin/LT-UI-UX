import { Mail } from 'lucide-react'
import { footerLinks, siteConfig } from '@/config/site'
import ltLogo from '@/assets/lt-logo.png'

const legalLinks = ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Contact']

export default function Footer() {
  return (
    <footer className="mt-12 bg-secondary-900 text-[oklch(0.65_0_0)]">
      <div className="border-b border-white/[0.08] bg-[oklch(0.16_0_0)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
          <div className="min-w-0">
            <h3 className="mb-1 font-serif text-base font-black text-white">
              Get LankaTalks Daily Intelligence
            </h3>
            <p className="text-[11px] text-[oklch(0.55_0_0)] text-white/60">
              Business news, sector briefs, tenders, and careers – straight to your inbox.
            </p>
          </div>
          <form
            className="flex w-full max-w-md items-center gap-2 md:w-auto md:shrink-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="relative min-w-0 flex-1 md:w-64">
              <Mail
                className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[oklch(0.5_0_0)]"
                aria-hidden="true"
              />
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full border border-white/10 bg-[oklch(0.2_0_0)] py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-[oklch(0.45_0_0)] focus:border-brand-600 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="whitespace-nowrap bg-brand-600 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            >
              Subscribe Free
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-4 py-10 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="min-w-0 col-span-2 md:col-span-1 md:mt-13">
          <img src={ltLogo} alt="LankaTalks" className="mb-4 h-16  w-auto" />
          <p className="mb-4 max-w-xs text-[11px] leading-relaxed text-[oklch(0.5_0_0)] text-white/60">
            Sri Lanka's premier business intelligence and news platform. Trusted by
            42,000+ monthly readers across industry.
          </p>
          <div className="flex items-center gap-3">
            {siteConfig.socials.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-7 items-center justify-center rounded-sm text-[oklch(0.65_0_0)] transition-colors hover:text-brand-600"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            {siteConfig.apps.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex items-center gap-1.5 border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/80 transition-colors hover:border-brand-600 hover:text-white"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((col) => (
          <div key={col.title} className="min-w-0 md:ml-30">
            <h4 className="mb-3 border-b border-white/[0.08] pb-2 text-[10px] font-black uppercase tracking-widest text-white">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs leading-relaxed text-white/80 transition-colors hover:text-brand-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.08] px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-[10px] text-[oklch(0.4_0_0)] md:flex-row text-white/60">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-white/60">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors hover:text-brand-600"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
