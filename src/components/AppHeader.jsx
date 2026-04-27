import { useWeather } from '../hooks/useWeather'

const weatherDesc = (code) => {
  if (code <= 1) return 'Clear sky'
  if (code <= 3) return 'Partly cloudy'
  if (code <= 48) return 'Foggy'
  if (code <= 67) return 'Rainy'
  if (code <= 77) return 'Snow/Sleet'
  if (code <= 82) return 'Showers'
  if (code >= 95) return 'Thunderstorm'
  return 'Cloudy'
}

export default function AppHeader({ lang }) {
  const { weather, loading } = useWeather()
  const ta = lang === 'ta'

  return (
    <div style={{ background: 'var(--ocean)', position: 'relative', overflow: 'visible', zIndex: 10 }}>
      {/* Status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 18px 0', fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
        <span>{new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
        <span>Kasimedu, Chennai</span>
        <span>4G ●●●</span>
      </div>

      {/* Brand row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: 'var(--wave)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <WaveIcon />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: -0.3 }}>
              {ta ? 'கடல்வழி' : 'Kadalvazhi'}
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)' }}>
              {ta ? 'மீனவர் சேவை இயக்கம்' : 'Fishermen Service NGO · Chennai'}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <CircleBtn>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="1.8"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="1.8"/>
            </svg>
          </CircleBtn>
        </div>
      </div>

      {/* Weather card */}
      <div style={{ margin: '0 14px 0', background: 'rgba(255,255,255,0.1)', borderRadius: 14, padding: '11px 14px', marginBottom: 18 }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <div className="spinner" style={{ borderTopColor: '#fff', borderColor: 'rgba(255,255,255,0.3)' }} />
          </div>
        ) : weather ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 2 }}>
                {ta ? 'மரீனா கடலோரம்' : 'Marina Coast · Bay of Bengal'}
              </div>
              <div style={{ fontSize: 30, fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>{weather.temp}°C</div>
              <div style={{ fontSize: 11, color: '#90CAF9', marginTop: 2 }}>
                {ta ? `காற்று ${weather.windSpeed}கி/ம் · அலை ${weather.waveHeight}மீ` 
                     : `Wind ${weather.windSpeed}km/h · Waves ${weather.waveHeight}m`}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ background: weather.safeColor, color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 11px', borderRadius: 20, marginBottom: 5, display: 'inline-block' }}>
                {ta ? (weather.safeStatus === 'safe' ? 'கடலுக்கு பாதுகாப்பு' : weather.safeStatus === 'caution' ? 'எச்சரிக்கை' : 'கடலுக்கு போகாதே') : weather.safeLabel}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
                {ta ? 'தடை இல்லை' : 'No ban active'}
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                {ta ? `புதுப்பிக்கப்பட்டது: ${weather.updated}` : `Updated: ${weather.updated}`}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Wave divider */}
      <svg viewBox="0 0 430 22" style={{ display: 'block', marginBottom: -1 }} preserveAspectRatio="none" height="22" width="100%">
        <path d="M0 22 Q107 0 215 10 Q322 20 430 4 L430 22 Z" fill="var(--surface)" />
      </svg>
    </div>
  )
}

function WaveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 18c4-4 6-8 9-8s5 4 9 8" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M3 12c4-3 6-6 9-6s5 3 9 6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CircleBtn({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </button>
  )
}
