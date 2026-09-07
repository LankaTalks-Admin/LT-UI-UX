import { Share2 } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function SocialWidget() {
  return (
    <div className="border border-slate-200 bg-white ">
      <div className="flex items-center gap-2 border-b-2 border-secondary-900 bg-secondary-900 px-4 py-2.5">
        <Share2 className="size-4 text-white" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Stay Connected
        </h3>
      </div>
      <div className="grid grid-cols-5 gap-1 p-2">
        {siteConfig.socials.map(({ label, handle, icon: Icon }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            title={handle}
            className="flex aspect-square items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:border-secondary-900 hover:bg-secondary-900 hover:text-white"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>
    </div>
  )
}
