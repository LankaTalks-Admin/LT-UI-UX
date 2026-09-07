import { Link2, Mail, Share2 } from 'lucide-react'
import { useState } from 'react'
import { FacebookIcon, LinkedinIcon, XIcon } from '@/components/ui/BrandIcons'

function WhatsAppIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

export default function ShareBar({ title = '', compact = false }) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const buildShareUrl = (kind) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(title || document.title)
    switch (kind) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`
      case 'x':
        return `https://twitter.com/intent/tweet?url=${url}&text=${text}`
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
      case 'whatsapp':
        return `https://wa.me/?text=${text}%20${url}`
      case 'email':
        return `mailto:?subject=${text}&body=${url}`
      default:
        return window.location.href
    }
  }

  const shares = [
    { label: 'Share on Facebook', kind: 'facebook', Icon: FacebookIcon },
    { label: 'Share on X', kind: 'x', Icon: XIcon },
    { label: 'Share on LinkedIn', kind: 'linkedin', Icon: LinkedinIcon },
    { label: 'Share on WhatsApp', kind: 'whatsapp', Icon: WhatsAppIcon },
    { label: 'Share by Email', kind: 'email', Icon: Mail },
  ]

  return (
    <div className="flex items-center gap-1.5">
      <span className="mr-1 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
        <Share2 className="size-3.5" aria-hidden="true" />
        Share
      </span>
      {shares.map(({ label, kind, Icon }) => (
        <a
          key={kind}
          href={buildShareUrl(kind)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="flex size-7 items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:border-secondary-900 hover:bg-secondary-900 hover:text-white"
        >
          <Icon className="size-3.5" />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        title={copied ? 'Link copied' : 'Copy link'}
        className="flex size-7 cursor-pointer items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white"
      >
        <Link2 className="size-3.5" aria-hidden="true" />
      </button>
      {copied && (
        <span className="ml-1 text-[11px] font-semibold text-emerald-600">
          {compact ? 'Copied' : 'Link copied to clipboard'}
        </span>
      )}
    </div>
  )
}
