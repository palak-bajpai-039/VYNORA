import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Bell, Menu, Mic, Moon, Play, Plus, Search, Sun } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { avatarUrl } from '../data/videos.js'

export default function Header() {
  const { theme, toggleTheme, toggleSidebar } = useApp()
  const [query, setQuery] = useState('')
  const [toast, setToast] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const inputRef = useRef(null)
  const toastTimer = useRef(null)

  useEffect(() => {
    if (location.pathname === '/search') {
      setQuery(new URLSearchParams(location.search).get('q') || '')
    } else {
      setQuery('')
    }
  }, [location.pathname, location.search])

  useEffect(() => {
    const onKeyDown = (event) => {
      const tag = document.activeElement?.tagName
      if (event.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const notify = (message) => {
    setToast(message)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(''), 2600)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    const q = query.trim()
    if (!q) return
    navigate(`/search?q=${encodeURIComponent(q)}`)
    inputRef.current?.blur()
  }

  return (
    <>
      <header className="header">
        <div className="header-left">
          <button className="icon-btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <Menu />
          </button>
          <Link to="/" className="logo" aria-label="MyTube home">
            <span className="logo-mark">
              <Play size={18} fill="currentColor" strokeWidth={0} />
            </span>
            <span className="logo-text">Vynora</span>
          </Link>
        </div>

        <form className="search" onSubmit={handleSearch} role="search">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search videos, channels..."
              aria-label="Search"
            />
            <kbd className="search-kbd">/</kbd>
          </div>
          <button className="search-submit" type="submit" aria-label="Search">
            <Search size={20} />
          </button>
          <button
            type="button"
            className="icon-btn mic"
            aria-label="Search with voice"
            onClick={() => notify('Voice search is not available in this demo.')}
          >
            <Mic />
          </button>
        </form>

        <div className="header-right">
          <button
            className="create-btn"
            onClick={() => notify('MyTube Studio is not part of this demo.')}
          >
            <Plus size={20} />
            <span>Create</span>
          </button>
          <button
            className="icon-btn bell"
            aria-label="Notifications"
            onClick={() => notify('You have no new notifications.')}
          >
            <Bell />
            <span className="bell-badge">9+</span>
          </button>
          <button
            className="icon-btn"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <Link to="/history" className="avatar-btn" title="Your account">
            <img src={avatarUrl('guest-user', 80)} alt="Your account" />
          </Link>
        </div>
      </header>
      {toast && <div className="toast">{toast}</div>}
    </>
  )
}
