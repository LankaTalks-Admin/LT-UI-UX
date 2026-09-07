import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-[12px] text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="size-3 shrink-0 text-slate-300" aria-hidden="true" />
              )}
              {isLast || !item.to ? (
                <span className="font-medium text-slate-700">{item.label}</span>
              ) : (
                <Link
                  to={item.to}
                  className="font-medium text-slate-500 transition-colors hover:text-brand-700"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
