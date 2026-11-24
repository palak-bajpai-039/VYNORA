import { Link } from 'react-router-dom'
import { BadgeCheck, MoreVertical } from 'lucide-react'
import { avatarUrl, formatCount, getChannel, thumbUrl } from '../data/videos.js'

export default function VideoCard({ video }) {
  const channel = getChannel(video.channelId)
  return (
    <article className="video-card">
      <Link to={`/watch/${video.id}`} className="thumb-wrap">
        <img src={thumbUrl(video.thumbnail)} alt="" loading="lazy" />
        <span className={`duration ${video.live ? 'live' : ''}`}>
          {video.live ? 'LIVE' : video.duration}
        </span>
        <span className="thumb-shade" />
      </Link>
      <div className="video-info">
        <Link to={`/channel/${channel.id}`} className="card-avatar">
          <img src={avatarUrl(channel.avatar, 80)} alt="" loading="lazy" />
        </Link>
        <div className="video-text">
          <Link to={`/watch/${video.id}`} className="video-title" title={video.title}>
            {video.title}
          </Link>
          <Link to={`/channel/${channel.id}`} className="video-channel">
            {channel.name}
            {channel.verified && <BadgeCheck size={14} className="verified" />}
          </Link>
          <div className="video-meta">
            {video.live
              ? `${formatCount(video.viewCount)} watching`
              : `${formatCount(video.viewCount)} views`}{' '}
            • {video.uploaded}
          </div>
        </div>
        <button className="icon-btn card-more" aria-label="More options">
          <MoreVertical size={18} />
        </button>
      </div>
    </article>
  )
}

export function RelatedCard({ video }) {
  const channel = getChannel(video.channelId)
  return (
    <Link to={`/watch/${video.id}`} className="related-card">
      <div className="related-thumb">
        <img src={thumbUrl(video.thumbnail, 320, 180)} alt="" loading="lazy" />
        <span className={`duration ${video.live ? 'live' : ''}`}>
          {video.live ? 'LIVE' : video.duration}
        </span>
      </div>
      <div className="related-info">
        <div className="related-title" title={video.title}>
          {video.title}
        </div>
        <div className="related-channel">{channel.name}</div>
        <div className="related-meta">
          {formatCount(video.viewCount)} views • {video.uploaded}
        </div>
      </div>
    </Link>
  )
}

export function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}
