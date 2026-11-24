import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="empty-state full-page">
      <div className="empty-icon">
        <Compass size={34} />
      </div>
      <h2>This page isn’t available</h2>
      <p>The video or page you are looking for could not be found.</p>
      <Link to="/" className="subscribe-btn">
        Back to home
      </Link>
    </div>
  )
}
