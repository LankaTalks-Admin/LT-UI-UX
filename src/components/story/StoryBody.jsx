import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import MidArticleAd from '@/components/ui/MidArticleAd'

const MAX_HEIGHT = 400

function renderBlock(block) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="border-l-4 border-brand-600 pt-1 pl-3 text-xl font-extrabold text-slate-900">
          {block.text}
        </h2>
      )
    case 'quote':
      return (
        <blockquote className="border-l-4 border-secondary-900 bg-slate-50 px-5 py-4 text-slate-700">
          <p className="font-serif text-lg font-semibold italic leading-relaxed text-secondary-900">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.cite && (
            <cite className="mt-2 block text-[12px] font-bold uppercase tracking-wider text-slate-500 not-italic">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      )
    default:
      return <p className="text-[15px] leading-7 text-slate-700">{block.text}</p>
  }
}

function getAdAfterParagraphIndexes(blocks) {
  const paragraphIndexes = blocks
    .map((block, i) => (block.type === 'p' ? i : -1))
    .filter((i) => i !== -1)

  const total = paragraphIndexes.length
  if (total < 2) return []

  const first = paragraphIndexes[Math.floor(total / 3)]
  const second = paragraphIndexes[Math.floor((total * 2) / 3)]
  const indexes = [first]

  if (second !== first) indexes.push(second)

  return indexes
}

export default function StoryBody({ blocks }) {
  const [expanded, setExpanded] = useState(false)
  const [needsReadMore, setNeedsReadMore] = useState(false)
  const contentRef = useRef(null)

  const adIndexes = getAdAfterParagraphIndexes(blocks)
  let adSlot = 0

  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollHeight > MAX_HEIGHT) {
      setNeedsReadMore(true)
    }
  }, [])

  const collapsed = !expanded && needsReadMore

  return (
    <div className="relative">
      <div
        ref={contentRef}
        className="space-y-5"
        style={
          collapsed
            ? { maxHeight: MAX_HEIGHT, overflow: 'hidden' }
            : undefined
        }
      >
        {blocks.map((block, i) => (
          <div key={i}>
            {renderBlock(block)}
            {adIndexes.includes(i) && (
              <div className="mt-5">
                <MidArticleAd label={`Advertisement ${++adSlot}`} />
              </div>
            )}
          </div>
        ))}
      </div>

      {collapsed && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-center bg-gradient-to-b from-transparent via-white/60 to-white pb-6">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="pointer-events-auto flex cursor-pointer items-center gap-2 border-2 border-secondary-900 bg-white px-8 py-3 text-[12px] font-black uppercase tracking-wider text-secondary-900 transition-colors hover:bg-secondary-900 hover:text-white"
          >
            Read More
            <ChevronDown className="size-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  )
}
