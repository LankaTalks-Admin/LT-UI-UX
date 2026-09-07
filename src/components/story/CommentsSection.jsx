import { Lock, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { currentUser, loginLink, registerLink } from '@/data/mockAuth'

const sampleComments = [
  {
    id: 1,
    name: 'Ruwan Perera',
    time: '2 hrs ago',
    text: 'Great initiative. Education infrastructure like this goes a long way for rural schools — more banks should follow this model.',
  },
  {
    id: 2,
    name: 'Nimasha Fernando',
    time: '1 hr ago',
    text: 'The Pahasara programme is one of the most consistent CSR efforts in Sri Lankan banking. Congratulations to everyone involved.',
  },
]

export default function CommentsSection() {
  const [comment, setComment] = useState('')
  const isLoggedIn = Boolean(currentUser)

  return (
    <section className="mt-10 border border-slate-200">
      <div className="flex items-center gap-2 border-b-2 border-secondary-900 bg-secondary-900 px-4 py-2.5">
        <MessageSquare className="size-4 text-white" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Comments
        </h3>
      </div>

      <div className="p-4">
        {isLoggedIn ? (
          <form className="mt-0" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="comment-text" className="sr-only">
              Write a comment
            </label>
            <textarea
              id="comment-text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              placeholder={`Comment as ${currentUser.name}…`}
              className="w-full resize-y border border-slate-200 p-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-secondary-900 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className="mt-2 bg-brand-600 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Post Comment
            </button>
          </form>
        ) : (
          <div className="border border-slate-200 bg-slate-50 px-5 py-8 text-center">
            <Lock className="mx-auto size-6 text-slate-400" aria-hidden="true" />
            <p className="mt-3 text-[13px] text-slate-600">
              You must be{' '}
              <a
                href={registerLink}
                className="font-bold text-brand-700 underline underline-offset-2"
              >
                registered
              </a>{' '}
              or{' '}
              <a
                href={loginLink}
                className="font-bold text-brand-700 underline underline-offset-2"
              >
                logged in
              </a>{' '}
              to post a comment.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <a
                href={loginLink}
                className="bg-brand-600 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
              >
                Log In
              </a>
              <a
                href={registerLink}
                className="border border-secondary-900 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-secondary-900 transition-colors hover:bg-secondary-900 hover:text-white"
              >
                Register
              </a>
            </div>
          </div>
        )}

        <ul className="mt-6 space-y-4">
          {sampleComments.map((c) => (
            <li key={c.id} className="border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2">
                <span className="flex size-8 shrink-0 items-center justify-center bg-secondary-900 font-mono text-[12px] font-bold text-white">
                  {c.name.charAt(0)}
                </span>
                <div>
                  <p className="text-[13px] font-bold text-slate-900">{c.name}</p>
                  <p className="text-[11px] text-slate-400">{c.time}</p>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
