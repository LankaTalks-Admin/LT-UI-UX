import { Fragment } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pages = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    const window = new Set([1, currentPage - 1, currentPage, currentPage + 1, totalPages])
    pages.push(...[...window].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b))
  }

  return (
    <nav className="mt-8 flex items-center justify-center gap-1" aria-label="Pagination">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={cn(
          'flex size-9 items-center justify-center rounded transition-colors',
          currentPage === 1
            ? 'cursor-not-allowed text-slate-300'
            : 'text-slate-600 hover:bg-secondary-900 hover:text-white',
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4" />
      </button>

      {pages.map((page, idx) => (
        <Fragment key={page}>
          {idx > 0 && page - pages[idx - 1] > 1 && (
            <span className="px-1 text-[11px] text-slate-400" aria-hidden="true">
              &hellip;
            </span>
          )}
          <button
            type="button"
            onClick={() => onPageChange(page)}
            className={cn(
              'flex size-9 items-center justify-center rounded text-[13px] font-semibold transition-colors',
              page === currentPage
                ? 'bg-secondary-900 text-white'
                : 'text-slate-600 hover:bg-slate-100',
            )}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        </Fragment>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={cn(
          'flex size-9 items-center justify-center rounded transition-colors',
          currentPage === totalPages
            ? 'cursor-not-allowed text-slate-300'
            : 'text-slate-600 hover:bg-secondary-900 hover:text-white',
        )}
        aria-label="Next page"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  )
}
