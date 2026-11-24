export default function CategoryChips({ categories, active, onChange }) {
  return (
    <div className="chips" role="tablist" aria-label="Video categories">
      <div className="chips-inner">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={active === category}
            className={`chip ${active === category ? 'active' : ''}`}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
