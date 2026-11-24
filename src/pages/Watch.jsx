import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  BadgeCheck,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Send,
  Share2,
  ThumbsDown,
  ThumbsUp
} from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import {
  avatarUrl,
  formatCount,
  getChannel,
  getVideo,
  starterComments,
  thumbUrl,
  videos
} from '../data/videos.js'
import { RelatedCard } from '../components/VideoCard.jsx'
import NotFound from './NotFound.jsx'

export default function Watch() {
  const { id } = useParams()
  const video = getVideo(id)
  const channel = video ? getChannel(video.channelId) : null
  const { library, toggleLike, toggleSave, toggleSubscribe, addHistory } = useApp()

  const [expanded, setExpanded] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [draft, setDraft] = useState('')
  const [copied, setCopied] = useState(false)
  const [comments, setComments] = useState(starterComments)
  const copyTimer = useRef(null)

  useEffect(() => {
    if (video) addHistory(video.id)
  }, [video, addHistory])

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  useEffect(() => {
    setExpanded(false)
    setDisliked(false)
    setComments(starterComments)
  }, [id])

  const related = useMemo(() => {
    if (!video) return []
    return videos
      .filter((item) => item.id !== video.id)
      .sort((a, b) => {
        const scoreA = a.category === video.category ? 1 : 0
        const scoreB = b.category === video.category ? 1 : 0
        return scoreB - scoreA
      })
      .slice(0, 10)
  }, [video])

  if (!video) return <NotFound />

  const liked = library.liked.includes(video.id)
  const saved = library.saved.includes(video.id)
  const subscribed = library.subscribed.includes(channel.id)
  const likeCount = video.likes + (liked ? 1 : 0)

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      /* clipboard permissions can be denied — still show feedback */
    }
    setCopied(true)
    clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopied(false), 2000)
  }

  const submitComment = (event) => {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    setComments((current) => [
      {
        id: `own-${Date.now()}`,
        author: 'You',
        avatar: 'guest-user',
        text,
        time: 'Just now',
        likes: 0,
        mine: true
      },
      ...current
    ])
    setDraft('')
  }

  return (
    <div className="watch">
      <div className="watch-main">
        <div className="player">
          <video
            key={video.id}
            controls
            playsInline
            preload="metadata"
            poster={thumbUrl(video.thumbnail, 1280, 720)}
            src={video.videoUrl}
          />
        </div>

        <h1 className="watch-title">{video.title}</h1>

        <div className="watch-bar">
          <div className="watch-channel">
            <Link to={`/channel/${channel.id}`}>
              <img className="avatar lg" src={avatarUrl(channel.avatar, 120)} alt="" />
            </Link>
            <div className="watch-channel-text">
              <Link to={`/channel/${channel.id}`} className="watch-channel-name">
                {channel.name}
                {channel.verified && <BadgeCheck size={15} className="verified" />}
              </Link>
              <span className="muted">{channel.subscribers} subscribers</span>
            </div>
            <button
              className={`subscribe-btn ${subscribed ? 'subscribed' : ''}`}
              onClick={() => toggleSubscribe(channel.id)}
            >
              {subscribed ? 'Subscribed' : 'Subscribe'}
              {subscribed && <CheckCircle2 size={16} />}
            </button>
          </div>

          <div className="watch-actions">
            <div className="pill-group">
              <button
                className={`pill ${liked ? 'active' : ''}`}
                onClick={() => {
                  toggleLike(video.id)
                  setDisliked(false)
                }}
              >
                <ThumbsUp size={18} />
                <span>{formatCount(likeCount)}</span>
              </button>
              <span className="pill-divider" />
              <button
                className={`pill ${disliked ? 'active' : ''}`}
                onClick={() => setDisliked((current) => !current)}
                aria-label="Dislike"
              >
                <ThumbsDown size={18} />
              </button>
            </div>
            <button className="pill" onClick={share}>
              <Share2 size={18} />
              <span>{copied ? 'Copied!' : 'Share'}</span>
            </button>
            <button className={`pill ${saved ? 'active' : ''}`} onClick={() => toggleSave(video.id)}>
              <Bookmark size={18} fill={saved ? 'currentColor' : 'none'} />
              <span>{saved ? 'Saved' : 'Save'}</span>
            </button>
            <button className="pill icon-only" aria-label="More actions">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>

        <div
          className={`description ${expanded ? 'open' : ''}`}
          onClick={() => setExpanded((current) => !current)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') setExpanded((current) => !current)
          }}
        >
          <div className="description-meta">
            <strong>
              {video.live
                ? `${formatCount(video.viewCount)} watching now`
                : `${formatCount(video.viewCount)} views`}
            </strong>
            <span> • {video.uploaded}</span>
            {!expanded && <span className="description-tags"> #{video.tags.slice(0, 3).join(' #')}</span>}
          </div>
          <p>{video.description}</p>
          {expanded && <div className="description-tags full">#{video.tags.join(' #')}</div>}
          <span className="description-toggle">
            {expanded ? (
              <>
                Show less <ChevronUp size={16} />
              </>
            ) : (
              <>
                ...more <ChevronDown size={16} />
              </>
            )}
          </span>
        </div>

        <section className="comments">
          <h2>{comments.length} Comments</h2>

          <form className="comment-form" onSubmit={submitComment}>
            <img className="avatar" src={avatarUrl('guest-user', 80)} alt="" />
            <div className="comment-input-wrap">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Add a comment..."
                aria-label="Add a comment"
              />
              <div className="comment-form-actions">
                <button type="button" className="pill" onClick={() => setDraft('')} disabled={!draft}>
                  Cancel
                </button>
                <button type="submit" className="pill primary" disabled={!draft.trim()}>
                  <Send size={16} /> Comment
                </button>
              </div>
            </div>
          </form>

          <div className="comment-list">
            {comments.map((comment) => (
              <article className="comment" key={comment.id}>
                <img className="avatar" src={avatarUrl(comment.avatar, 80)} alt="" />
                <div className="comment-body">
                  <div className="comment-head">
                    <span className="comment-author">
                      {comment.author}
                      {comment.mine && <span className="you-badge">You</span>}
                    </span>
                    <span className="comment-time">{comment.time}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                  <div className="comment-actions">
                    <button className="comment-action" aria-label="Like comment">
                      <ThumbsUp size={15} /> {comment.likes}
                    </button>
                    <button className="comment-action" aria-label="Dislike comment">
                      <ThumbsDown size={15} />
                    </button>
                    <button className="comment-action">Reply</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <aside className="watch-aside">
        <h3>Up next</h3>
        <div className="related-list">
          {related.map((item) => (
            <RelatedCard key={item.id} video={item} />
          ))}
        </div>
      </aside>
    </div>
  )
}
