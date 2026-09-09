import {
  AlertCircle,
  BookmarkPlus,
  CalendarDays,
  ChevronRight,
  Clock,
  Eye,
  Languages,
  Volume2,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AdBanner from '@/components/ui/AdBanner'
import AdSlotRow from '@/components/ui/AdSlotRow'
import BreakingNewsBanner from '@/components/home/BreakingNewsBanner'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TopNav from '@/components/layout/TopNav'
import CommentsSection from '@/components/story/CommentsSection'
import PrevNextNav from '@/components/story/PrevNextNav'
import RelatedStories from '@/components/story/RelatedStories'
import ShareBar from '@/components/story/ShareBar'
import StoryBody from '@/components/story/StoryBody'
import StorySidebar from '@/components/widgets/StorySidebar'
import { headerSlotAd } from '@/data/ads'
import { getAdjacentStories, getStoryBySlug } from '@/data/stories'

export default function StoryPage() {
  const { slug } = useParams()
  const story = getStoryBySlug(slug)
  const [translateOpen, setTranslateOpen] = useState(false)
  const translateRef = useRef(null)

  useEffect(() => {
    if (!translateOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setTranslateOpen(false)
    }
    const handleClickOutside = (e) => {
      if (translateRef.current && !translateRef.current.contains(e.target)) {
        setTranslateOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [translateOpen])

  if (!story) {
    return (
      <div className="min-h-screen bg-white">
        <TopNav />
        <AdBanner ad={headerSlotAd} dismissible />
        <Header />
        <main className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6">
          <AlertCircle className="size-12 text-brand-600" aria-hidden="true" />
          <h1 className="mt-4 font-serif text-3xl font-black text-slate-900">
            Story not found
          </h1>
          <p className="mt-2 max-w-md text-sm text-slate-600">
            The article you are looking for does not exist or may have been moved.
          </p>
          <Link
            to="/"
            className="mt-6 bg-brand-600 px-6 py-3 text-[12px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
          >
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const { prev, next } = getAdjacentStories(story)
  const author = story.author || 'LankaTalks Desk'

  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <AdBanner ad={headerSlotAd} dismissible />
      <Header />
      <BreakingNewsBanner />  

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <AdSlotRow />

        <div className="grid gap-8 py-6 lg:grid-cols-[1fr_280px]">
          <article className="min-w-0">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500"
            >
              <Link to="/" className="transition-colors hover:text-brand-700">
                Home
              </Link>
              <ChevronRight className="size-3 text-slate-300" aria-hidden="true" />
              <Link to="/stories" className="transition-colors hover:text-brand-700">
                Stories
              </Link>
              <ChevronRight className="size-3 text-slate-300" aria-hidden="true" />
              <Link to="/stories" className="transition-colors hover:text-brand-700">
                {story.section}
              </Link>
              <ChevronRight className="size-3 text-slate-300" aria-hidden="true" />
              <span className="line-clamp-1 text-slate-400">{story.title}</span>
            </nav>

            <h1 className="mt-3 font-serif text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              {story.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-y border-slate-200 py-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex size-9 shrink-0 items-center justify-center bg-secondary-900 font-mono text-[14px] font-bold text-white">
                  {author.charAt(0)}
                </span>
                <div className="min-w-0">
                  <a
                    href="#"
                    className="block truncate text-[13px] font-bold text-slate-900 transition-colors hover:text-brand-700"
                  >
                    {author}
                  </a>
                  <p className="text-[11px] font-medium text-slate-500">
                    LankaTalks Correspondent
                  </p>
                </div>
              </div>
              <ShareBar title={story.title} compact />
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-slate-200 pb-3 text-[12px] font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-3.5 text-slate-400" aria-hidden="true" />
                {story.time}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-slate-400" aria-hidden="true" />
                {story.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="size-3.5 text-slate-400" aria-hidden="true" />
                {story.views.toLocaleString()} views
              </span>
              <div className="ml-auto flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  aria-label="Listen to this article"
                  className="flex cursor-pointer items-center gap-1.5 border border-slate-300 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 transition-colors hover:border-secondary-900 hover:bg-secondary-900 hover:text-white"
                >
                  <Volume2 className="size-3.5" aria-hidden="true" />
                  Listen
                </button>

                <div className="relative" ref={translateRef}>
                  <button
                    type="button"
                    aria-expanded={translateOpen}
                    onClick={() => setTranslateOpen((v) => !v)}
                    className="flex cursor-pointer items-center gap-1.5 border border-slate-300 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 transition-colors hover:border-secondary-900 hover:bg-secondary-900 hover:text-white"
                  >
                    <Languages className="size-3.5" aria-hidden="true" />
                    Translate
                  </button>

                  {translateOpen && (
                    <div className="absolute right-0 top-full z-30 mt-1 min-w-40 border border-slate-200 bg-white shadow-lg">
                      {['English', 'Sinhala', 'Tamil','Mandarin'].map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => setTranslateOpen(false)}
                          className="block w-full cursor-pointer px-3 py-2 text-left text-[12px] font-semibold text-slate-700 transition-colors hover:bg-secondary-900 hover:text-white"
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1.5 border border-slate-300 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 transition-colors hover:border-secondary-900 hover:bg-secondary-900 hover:text-white"
                >
                  <BookmarkPlus className="size-3.5" aria-hidden="true" />
                  Add to Reading List
                </button>
              </div>
            </div>

            <figure className="mt-6">
              <div className="overflow-hidden border border-slate-200">
                <img
                  src={story.image}
                  alt={story.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              {story.imageCredit && (
                <figcaption className="mt-2 text-[11px] text-slate-500">
                  {story.imageCredit}
                </figcaption>
              )}
            </figure>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="bg-brand-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                {story.category}
              </span>
              {story.partner ? (
                <span className="border border-amber-400 bg-amber-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-amber-700">
                  Partner Content
                </span>
              ) : (
                <span className="border border-emerald-400 bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-700">
                  Verified Content
                </span>
              )}
            </div>

            <div className="mt-6">
              <StoryBody blocks={story.body} />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-5">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                Tags:
              </span>
              {story.tags.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                >
                  #{tag}
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
              <ShareBar title={story.title} />
            </div>

            <div className="mt-6">
              <PrevNextNav prev={prev} next={next}   />
            </div>

            <AdSlotRow />

            <CommentsSection />
            <RelatedStories story={story} />
          </article>

          <StorySidebar story={story} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
