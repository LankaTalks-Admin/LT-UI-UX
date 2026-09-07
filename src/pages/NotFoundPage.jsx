import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
      <p className="text-6xl font-extrabold text-slate-200">404</p>
      <h1 className="mt-4 text-xl font-bold text-slate-900">Page Not Found</h1>
      <p className="mt-2 text-sm text-slate-500">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded bg-secondary-900 px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-secondary-800"
      >
        Back to Home
      </Link>
    </main>
  )
}
