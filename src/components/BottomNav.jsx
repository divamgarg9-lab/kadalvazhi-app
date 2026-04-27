const TABS = [
  { id: 'home', labelEn: 'Home', labelTa: 'முகப்பு', icon: HomeIcon },
  { id: 'schemes', labelEn: 'Schemes', labelTa: 'திட்டங்கள்', icon: SchemeIcon },
  { id: 'market', labelEn: 'Market', labelTa: 'சந்தை', icon: MarketIcon },
  { id: 'weather', labelEn: 'Weather', labelTa: 'வானிலை', icon: WeatherIcon },
  { id: 'more', labelEn: 'More', labelTa: 'மேலும்', icon: MoreIcon },
]

export default function BottomNav({ active, onChange, lang }) {
  const ta = lang === 'ta'
  return (
    <nav className="bottom-nav">
      {TABS.map(tab => {
        const Icon = tab.icon
        const isActive = active === tab.id
        return (
          <button key={tab.id} className={`nav-item ${isActive ? 'active' : ''}`} onClick={() => onChange(tab.id)}>
            <div className="nav-icon">
              <Icon active={isActive} />
            </div>
            <span className="nav-label">{ta ? tab.labelTa : tab.labelEn}</span>
          </button>
        )
      })}
    </nav>
  )
}

function HomeIcon({ active }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill={active ? 'white' : 'none'} stroke={active ? 'none' : 'var(--text-hint)'} strokeWidth="1.8">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
}

function SchemeIcon({ active }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? 'white' : 'var(--text-hint)'} strokeWidth="1.8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
}

function MarketIcon({ active }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? 'white' : 'var(--text-hint)'} strokeWidth="1.8">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
}

function WeatherIcon({ active }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? 'white' : 'var(--text-hint)'} strokeWidth="1.8">
    <path d="M3 18c4-4 6-7 9-7s5 3 9 7"/>
    <path d="M3 13c4-3 6-5 9-5s5 2 9 5"/>
  </svg>
}

function MoreIcon({ active }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill={active ? 'white' : 'var(--text-hint)'}>
    <circle cx="5" cy="12" r="2"/>
    <circle cx="12" cy="12" r="2"/>
    <circle cx="19" cy="12" r="2"/>
  </svg>
}
