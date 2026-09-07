import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function SectionTitle({
  children,
  color = 'bg-secondary-900',
  link,
  linkClassName = 'text-[#FFD700] hover:text-[#E0AC00]',
  linkButton = false,
  filters = [],
  activeFilter = null,
  onFilterChange,
}) {
  const renderLink = (extraClass) => {
    const className = extraClass || `shrink-0 uppercase transition-colors ${linkClassName}`
    if (link.href.startsWith('/')) {
      return (
        <Link to={link.href} className={className}>
          {link.label}
        </Link>
      )
    }
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    )
  }

  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-200 pb-2">
      <div className="flex items-center gap-2.5">
        <span className={`h-6 w-1.5 ${color}`} aria-hidden="true" />
        <h2 className="text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl">
          {children}
        </h2>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {filters.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {filters.map((f) => {
              const value = f === 'All' ? null : f
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => onFilterChange?.(value)}
                  className={cn(
                    'cursor-pointer px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors',
                    activeFilter === value
                      ? 'bg-secondary-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900',
                  )}
                >
                  {f}
                </button>
              )
            })}
          </div>
        )}
        {link &&
          (linkButton ? (
            renderLink(`shrink-0 uppercase transition-colors ${linkClassName}`)
          ) : (
            (() => {
              const className = `group flex shrink-0 items-center gap-0.5 text-xs font-bold uppercase tracking-wide transition-colors ${linkClassName}`
              const content = (
                <>
                  {link.label}
                  <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </>
              )
              return link.href.startsWith('/') ? (
                <Link to={link.href} className={className}>{content}</Link>
              ) : (
                <a href={link.href} className={className}>{content}</a>
              )
            })()
          ))}
      </div>
    </div>
  )
}
