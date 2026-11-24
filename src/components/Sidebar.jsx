import { Link, useLocation } from 'react-router-dom'
import {
  Clock,
  Film,
  Flame,
  Gamepad2,
  GraduationCap,
  History,
  Home,
  Music2,
  Newspaper,
  Podcast,
  Radio,
  ThumbsUp,
  Trophy,
  Users
} from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { avatarUrl, channels } from '../data/videos.js'

function isActive(location, to) {
  if (to === '/') return location.pathname === '/'
  const [path, search] = to.split('?')
  if (location.pathname !== path) return false
  if (!search) return true
  const want = new URLSearchParams(search)
  const have = new URLSearchParams(location.search)
  for (const [key, value] of want) {
    if (have.get(key) !== value) return false
  }
  return true
}

function NavItem({ to, icon: Icon, label, badge }) {
  const location = useLocation()
  const { setDrawer } = useApp()
  const active = isActive(location, to)
  return (
    <Link
      to={to}
      className={`nav-item ${active ? 'active' : ''}`}
      onClick={() => setDrawer(false)}
      title={label}
    >
      <span className="nav-icon">
        <Icon size={22} />
      </span>
      <span className="nav-label">{label}</span>
      {badge > 0 && <span className="nav-badge">{badge > 99 ? '99+' : badge}</span>}
    </Link>
  )
}

function SectionTitle({ children }) {
  return <div className="nav-section-title">{children}</div>
}

export default function Sidebar() {
  const { drawer, library, setDrawer } = useApp()
  const subscribed = channels.filter((channel) => library.subscribed.includes(channel.id))

  return (
    <aside className={`sidebar ${drawer ? 'drawer-open' : ''}`}>
      <nav className="nav">
        <NavItem to="/" icon={Home} label="Home" />
        <NavItem to="/trending" icon={Flame} label="Trending" />
        <NavItem to="/subscriptions" icon={Users} label="Subscriptions" />

        <div className="nav-divider" />
        <SectionTitle>You</SectionTitle>
        <NavItem to="/history" icon={History} label="History" badge={library.history.length} />
        <NavItem to="/watch-later" icon={Clock} label="Watch later" badge={library.saved.length} />
        <NavItem to="/liked" icon={ThumbsUp} label="Liked videos" badge={library.liked.length} />

        <div className="nav-divider" />
        <SectionTitle>Explore</SectionTitle>
        <NavItem to="/search?category=Music" icon={Music2} label="Music" />
        <NavItem to="/search?category=Gaming" icon={Gamepad2} label="Gaming" />
        <NavItem to="/search?category=News" icon={Newspaper} label="News" />
        <NavItem to="/search?category=Movies" icon={Film} label="Movies" />
        <NavItem to="/search?category=Live" icon={Radio} label="Live" />
        <NavItem to="/search?category=Learning" icon={GraduationCap} label="Learning" />
        <NavItem to="/search?category=Sports" icon={Trophy} label="Sports" />
        <NavItem to="/search?category=Podcasts" icon={Podcast} label="Podcasts" />

        <div className="nav-divider" />
        <SectionTitle>Subscriptions</SectionTitle>
        {subscribed.length === 0 && <div className="nav-empty">Subscribe to channels to see them here.</div>}
        {subscribed.map((channel) => (
          <Link
            key={channel.id}
            to={`/channel/${channel.id}`}
            className="nav-item channel-item"
            title={channel.name}
            onClick={() => setDrawer(false)}
          >
            <img className="nav-avatar" src={avatarUrl(channel.avatar, 60)} alt="" />
            <span className="nav-label">{channel.name}</span>
          </Link>
        ))}
        <Link to="/subscriptions" className="nav-item channel-item" onClick={() => setDrawer(false)}>
          <span className="nav-icon">
            <Users size={20} />
          </span>
          <span className="nav-label">All subscriptions</span>
        </Link>

        <div className="nav-divider" />
        <div className="sidebar-footer">
          <p>About Press Copyright Contact Creators Advertise</p>
          <p>Developers Terms Privacy Policy &amp; Safety</p>
          <p className="copyright">© 2026 MyTube — a React demo</p>
        </div>
      </nav>
    </aside>
  )
}
