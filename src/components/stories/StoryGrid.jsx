import StoryCard from '@/components/stories/StoryCard'

export default function StoryGrid({ stories, emptyMessage = 'No stories found.' }) {
  if (!stories || stories.length === 0) {
    return (
      <div className="rounded border border-dashed border-slate-300 bg-white py-16 text-center">
        <p className="text-sm font-semibold text-slate-500">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  )
}
