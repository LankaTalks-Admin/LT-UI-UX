import { LogIn } from 'lucide-react'
import { currentUser, loginLink } from '@/data/mockAuth'

export default function AuthWidget() {
  if (!currentUser) {
    return (
      <a
        href={loginLink}
        className="flex items-center gap-1.5 whitespace-nowrap px-2 text-[11px] font-bold uppercase tracking-wider text-brand-700 transition-colors hover:text-brand-800"
      >
        <LogIn className="size-4" aria-hidden="true" />
        <span className="hidden md:inline">Sign In</span>
      </a>
    )
  }

  const initial = (currentUser.name || 'U').charAt(0).toUpperCase()

  return (
    <div className="flex items-center gap-2 px-2" title={currentUser.name}>
      <span className="flex size-7 items-center justify-center bg-secondary-900 font-mono text-[11px] font-bold text-white">
        {initial}
      </span>
      <span className="hidden max-w-[10rem] truncate text-[11px] font-bold uppercase tracking-wider text-slate-600 lg:block">
        {currentUser.name}
      </span>
    </div>
  )
}