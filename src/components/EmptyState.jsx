import { Clapperboard } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function EmptyState({ title, text, actionLabel, actionTo = '/' }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <Clapperboard size={34} />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      {actionLabel && (
        <Link to={actionTo} className="subscribe-btn">
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
