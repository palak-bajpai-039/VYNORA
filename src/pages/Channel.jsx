import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BadgeCheck, Bell } from 'lucide-react'
import { VideoGrid } from '../components/VideoCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { useApp } from '../context/AppContext.jsx'
import { avatarUrl, channels, formatCount, getChannel, thumbUrl, videos } from '../data/videos.js'
import NotFound from './NotFound.jsx'

export default function Channel() {
  const { id } = useParams()
  const channel = getChannel(id)
  const { library, toggleSubscribe } = useApp()
  const [tab, setTab] = useState('videos')

  useEffect(() => setTab('videos'), [id])

  if (!channel) return <NotFound />

  const channelVideos = videos.filter((video) => video.channelId === channel.id)
  const subscribed = library.subscribed.includes(channel.id)
  const totalViews = channelVideos.reduce((sum, video) => sum + video.viewCount, 0)

  return (
    <div className="channel-page">
      <div className="channel-banner">
        <img src={thumbUrl(`${channel.avatar}-banner`, 1600, 280)} alt="" />
      </div>

      <div className="channel-head">
        <img className="channel-avatar" src={avatarUrl(channel.avatar, 200)} alt="" />
        <div className="channel-head-text">
          <h1>
            {channel.name}
            {channel.verified && <BadgeCheck size={20} className="verified" />}
          </h1>
          <div className="channel-stats">
            <span>{channel.handle}</span>
            <span>•</span>
            <span>{channel.subscribers} subscribers</span>
            <span>•</span>
            <span>{channelVideos.length} videos</span>
          </div>
          <p className="channel-tagline">
            Welcome to {channel.name}. New videos every week — subscribe and hit the bell so you never
            miss an upload.
          </p>
        </div>
        <button
          className={`subscribe-btn ${subscribed ? 'subscribed' : ''}`}
          onClick={() => toggleSubscribe(channel.id)}
        >
          {subscribed ? (
            <>
              <Bell size={16} /> Subscribed
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </div>

      <div className="channel-tabs">
        <button
          className={`channel-tab ${tab === 'videos' ? 'active' : ''}`}
          onClick={() => setTab('videos')}
        >
          Videos
        </button>
        <button
          className={`channel-tab ${tab === 'about' ? 'active' : ''}`}
          onClick={() => setTab('about')}
        >
          About
        </button>
      </div>

      {tab === 'videos' ? (
        channelVideos.length > 0 ? (
          <VideoGrid videos={channelVideos} />
        ) : (
          <EmptyState title="No videos yet" text="This channel has not uploaded anything." />
        )
      ) : (
        <div className="channel-about">
          <div>
            <h2>About</h2>
            <p>
              {channel.name} is an independent creator on MyTube, making videos about the things they
              love. This page is part of a React demo project — the content, channels and comments are
              fictional.
            </p>
            <p className="muted">Joined March 2019 · {formatCount(totalViews)} total views</p>
          </div>
          <div className="channel-about-stats">
            <div>
              <strong>{channel.subscribers}</strong>
              <span>Subscribers</span>
            </div>
            <div>
              <strong>{channelVideos.length}</strong>
              <span>Videos</span>
            </div>
            <div>
              <strong>{formatCount(totalViews)}</strong>
              <span>Total views</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
