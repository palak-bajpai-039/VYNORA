import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const AppContext = createContext(null)

const LIBRARY_KEY = 'mytube-library'
const THEME_KEY = 'mytube-theme'

function loadLibrary() {
  try {
    const raw = localStorage.getItem(LIBRARY_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        liked: parsed.liked ?? [],
        saved: parsed.saved ?? [],
        history: parsed.history ?? [],
        subscribed: parsed.subscribed ?? ['nova-beats', 'byte-size']
      }
    }
  } catch {
    /* ignore corrupted storage */
  }
  return { liked: [], saved: [], history: [], subscribed: ['nova-beats', 'byte-size'] }
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'dark')
  const [mini, setMini] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [library, setLibrary] = useState(loadLibrary)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(LIBRARY_KEY, JSON.stringify(library))
  }, [library])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const toggleSidebar = useCallback(() => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      setDrawer((open) => !open)
    } else {
      setMini((open) => !open)
    }
  }, [])

  const toggleInLibrary = useCallback((key, id) => {
    setLibrary((current) => {
      const list = current[key]
      const next = list.includes(id) ? list.filter((item) => item !== id) : [id, ...list]
      return { ...current, [key]: next }
    })
  }, [])

  const toggleLike = useCallback((id) => toggleInLibrary('liked', id), [toggleInLibrary])
  const toggleSave = useCallback((id) => toggleInLibrary('saved', id), [toggleInLibrary])
  const toggleSubscribe = useCallback((id) => toggleInLibrary('subscribed', id), [toggleInLibrary])

  const addHistory = useCallback((id) => {
    setLibrary((current) => {
      if (current.history[0] === id) return current
      return { ...current, history: [id, ...current.history.filter((item) => item !== id)].slice(0, 60) }
    })
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      mini,
      drawer,
      setDrawer,
      toggleSidebar,
      library,
      toggleLike,
      toggleSave,
      toggleSubscribe,
      addHistory
    }),
    [theme, toggleTheme, mini, drawer, toggleSidebar, library, toggleLike, toggleSave, toggleSubscribe, addHistory]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}
