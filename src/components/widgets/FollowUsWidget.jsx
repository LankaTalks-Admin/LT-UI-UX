import { ThumbsUp } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from '@/components/ui/BrandIcons'

const followStats = [
  { label: 'Follow US', count: '20,567', color: '#1966e1', icon: FacebookIcon, name: 'Facebook' },
  { label: 'Follow Us', count: '10,346', color: '#f52424', icon: YoutubeIcon, name: 'YouTube' },
  { label: 'Follwers', count: '12,5645', color: '#ff247b', icon: InstagramIcon, name: 'Instagram' },
  { label: 'Subscribers', count: '14,343', color: '#05acc2', icon: XIcon, name: 'Twitter' },
]

export default function FollowUsWidget() {
  return (
    <div className="border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b-2 border-secondary-900 bg-secondary-900 px-4 py-2.5">
        <ThumbsUp className="size-4 text-amber-400" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Follow US
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-px bg-slate-200">
        {followStats.map(({ label, count, color, icon: Icon, name }) => (
          <a
            key={name}
            href="#"
            aria-label={name}
            className="flex min-h-[86px] items-center gap-3 bg-white p-3 text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: color }}
          >
            <Icon className="size-5 shrink-0" />
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-black leading-tight">
                {count}
              </span>
              <span className="block truncate text-[10px] uppercase tracking-wide opacity-90">
                {label}
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
