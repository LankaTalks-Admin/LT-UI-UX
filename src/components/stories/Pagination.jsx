import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
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

      {pages.map((page) => (
        <button
          key={page}
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
