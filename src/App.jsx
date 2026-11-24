import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import { useApp } from './context/AppContext.jsx'
import Home from './pages/Home.jsx'
import Watch from './pages/Watch.jsx'
import Search from './pages/Search.jsx'
import Channel from './pages/Channel.jsx'
import Collection from './pages/Collection.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

export default function App() {
  const { mini, drawer, setDrawer } = useApp()

  return (
    <div className={`app ${mini ? 'mini' : ''}`}>
      <ScrollToTop />
      <Header />
      <Sidebar />
      {drawer && (
        <button className="scrim" aria-label="Close menu" onClick={() => setDrawer(false)} />
      )}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/search" element={<Search />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/history" element={<Collection type="history" />} />
          <Route path="/liked" element={<Collection type="liked" />} />
          <Route path="/watch-later" element={<Collection type="watch-later" />} />
          <Route path="/subscriptions" element={<Collection type="subscriptions" />} />
          <Route path="/trending" element={<Collection type="trending" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
