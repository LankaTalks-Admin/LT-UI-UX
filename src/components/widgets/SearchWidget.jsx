import { Search } from 'lucide-react'

export default function SearchWidget() {
  return (
    <div className="border border-slate-200 bg-white">
      <form className="flex items-center gap-2 p-3" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="sidebar-search" className="sr-only">
          Search News
        </label>
        <input
          id="sidebar-search"
          type="text"
          placeholder="Search News…"
          className="w-full border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-secondary-900 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex size-10 shrink-0 items-center justify-center bg-secondary-900 text-white transition-colors hover:bg-brand-600"
        >
          <Search className="size-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}
