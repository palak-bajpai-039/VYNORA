import { useState } from 'react'
import CategoryChips from '../components/CategoryChips.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { VideoGrid } from '../components/VideoCard.jsx'
import { categories, videos } from '../data/videos.js'

export default function Home() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? videos : videos.filter((video) => video.category === active)

  return (
    <div className="page">
      <CategoryChips categories={categories} active={active} onChange={setActive} />
      <div className="page-inner">
        {filtered.length > 0 ? (
          <VideoGrid videos={filtered} />
        ) : (
          <EmptyState
            title="Nothing here yet"
            text={`No videos in ${active}. Try another category.`}
            actionLabel="Back to all videos"
            actionTo="/"
          />
        )}
      </div>
    </div>
  )
}
