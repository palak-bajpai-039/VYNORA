import EmptyState from '../components/EmptyState.jsx'
import { VideoGrid } from '../components/VideoCard.jsx'
import { useApp } from '../context/AppContext.jsx'
import { channels, getVideo, videos } from '../data/videos.js'

const CONFIG = {
  history: {
    title: 'Watch history',
    subtitle: 'Videos you have watched, newest first',
    emptyTitle: 'No watch history yet',
    emptyText: 'Videos you watch will show up here so you can pick up where you left off.',
    actionLabel: 'Browse videos'
  },
  liked: {
    title: 'Liked videos',
    subtitle: 'Everything you gave a thumbs up',
    emptyTitle: 'No liked videos',
    emptyText: 'Tap the thumbs up on a video and it will be saved here.',
    actionLabel: 'Find something to like'
  },
  'watch-later': {
    title: 'Watch later',
    subtitle: 'Your personal queue',
    emptyTitle: 'Your queue is empty',
    emptyText: 'Save videos with the bookmark button to watch them later.',
    actionLabel: 'Browse videos'
  },
  subscriptions: {
    title: 'Subscriptions',
    subtitle: 'The latest from channels you follow',
    emptyTitle: 'No subscriptions yet',
    emptyText: 'Subscribe to a channel and their newest videos will appear here.',
    actionLabel: 'Discover channels',
    actionTo: '/trending'
  },
  trending: {
    title: 'Trending now',
    subtitle: 'The most watched videos on MyTube right now',
    emptyTitle: 'Nothing trending',
    emptyText: 'Check back in a little while.',
    actionLabel: 'Browse videos'
  }
}

export default function Collection({ type }) {
  const { library } = useApp()
  const config = CONFIG[type]

  let list = []
  if (type === 'history') list = library.history.map(getVideo).filter(Boolean)
  if (type === 'liked') list = library.liked.map(getVideo).filter(Boolean)
  if (type === 'watch-later') list = library.saved.map(getVideo).filter(Boolean)
  if (type === 'subscriptions') {
    const subscribed = channels.filter((channel) => library.subscribed.includes(channel.id))
    list = videos.filter((video) => subscribed.some((channel) => channel.id === video.channelId))
  }
  if (type === 'trending') list = [...videos].sort((a, b) => b.viewCount - a.viewCount)

  return (
    <div className="page">
      <div className="page-inner">
        <div className="page-heading">
          <div>
            <h1>{config.title}</h1>
            <span className="muted">{config.subtitle}</span>
          </div>
          <span className="muted">{list.length} videos</span>
        </div>
        {list.length > 0 ? (
          <VideoGrid videos={list} />
        ) : (
          <EmptyState
            title={config.emptyTitle}
            text={config.emptyText}
            actionLabel={config.actionLabel}
            actionTo={config.actionTo || '/'}
          />
        )}
      </div>
    </div>
  )
}
