import { useNavigate, useSearchParams } from 'react-router-dom'
import CategoryChips from '../components/CategoryChips.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { VideoGrid } from '../components/VideoCard.jsx'
import { categories, channels, videos } from '../data/videos.js'

export default function Search() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const q = (params.get('q') || '').trim()
  const category = params.get('category') || 'All'

  const filtered = videos.filter((video) => {
    const channel = channels.find((item) => item.id === video.channelId)
    const matchesCategory = category === 'All' || video.category === category
    if (!matchesCategory) return false
    if (!q) return true
    const haystack = [video.title, video.category, channel?.name, ...video.tags]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q.toLowerCase())
  })

  const setCategory = (next) => {
    const nextParams = new URLSearchParams()
    if (q) nextParams.set('q', q)
    if (next !== 'All') nextParams.set('category', next)
    navigate(`/search?${nextParams.toString()}`)
  }

  const heading = q
    ? `Search results for “${q}”`
    : category !== 'All'
      ? `${category} videos`
      : 'All videos'

  return (
    <div className="page">
      <CategoryChips categories={categories} active={category} onChange={setCategory} />
      <div className="page-inner">
        <div className="page-heading">
          <h1>{heading}</h1>
          <span className="muted">{filtered.length} videos</span>
        </div>
        {filtered.length > 0 ? (
          <VideoGrid videos={filtered} />
        ) : (
          <EmptyState
            title="No videos found"
            text="Try different keywords or browse another category."
            actionLabel="Browse all videos"
            actionTo="/"
          />
        )}
      </div>
    </div>
  )
}
