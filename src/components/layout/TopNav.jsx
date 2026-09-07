import { siteConfig } from '@/config/site'

export default function   TopNav() {
  return (
    <div className="border-b border-secondary-800 bg-secondary-900 text-slate-300">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6">
        <p className="hidden text-[11px] font-semibold uppercase tracking-wider sm:block">
          {siteConfig.topTagline}
        </p>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 md:flex">
            {siteConfig.socials.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="p-1.5 text-slate-400 transition-colors hover:text-white"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
