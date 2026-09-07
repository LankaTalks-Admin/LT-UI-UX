import { Megaphone } from 'lucide-react'

function parseSize(size) {
  const [width, height] = String(size || '300×250').split('×').map(Number)
  return {
    width: Number.isFinite(width) ? width : 300,
    height: Number.isFinite(height) ? height : 250,
  }
}

export default function AdPlaceholder({ slot }) {
  const { width, height } = parseSize(slot.size)
  const compact = height <= 120

  return (
    <a
      href="#"
      aria-label={`${slot.size} advertisement placeholder`}
      className={`group mx-auto flex flex-col items-center justify-center overflow-hidden border border-dashed border-slate-300 bg-slate-50 text-center transition-colors hover:border-secondary-900 hover:bg-white ${
        compact ? 'gap-1 px-2 py-1' : 'gap-0 p-4'
      }`}
      style={{ width, height, maxWidth: '100%' }}
    >
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <Megaphone className="size-3" aria-hidden="true" />
          {slot.eyebrow}
        </span>
        <span className="bg-secondary-900 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
          {slot.size}
        </span>
        <span className="bg-slate-200 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-slate-500">
          {slot.type}
        </span>
      </div>
      <p
        className={`font-black uppercase tracking-wider text-slate-900 ${
          compact ? 'text-[11px] leading-4' : 'mt-2 text-[13px]'
        }`}
      >
        {slot.title}
      </p>
      {!compact && (
        <>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
            {slot.body}
          </p>
          <span className="mt-2 text-[11px] font-bold uppercase tracking-wider text-brand-700 transition-colors group-hover:text-brand-600">
            {slot.cta}
          </span>
        </>
      )}
    </a>
  )
}
