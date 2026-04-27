import { useWeather } from '../hooks/useWeather'

const WEATHER_CODES = {
  0: { label: 'Clear sky', icon: '☀️' },
  1: { label: 'Mainly clear', icon: '🌤️' },
  2: { label: 'Partly cloudy', icon: '⛅' },
  3: { label: 'Overcast', icon: '☁️' },
  45: { label: 'Foggy', icon: '🌫️' },
  51: { label: 'Light drizzle', icon: '🌦️' },
  61: { label: 'Light rain', icon: '🌧️' },
  63: { label: 'Moderate rain', icon: '🌧️' },
  71: { label: 'Snow', icon: '❄️' },
  80: { label: 'Showers', icon: '🌦️' },
  95: { label: 'Thunderstorm', icon: '⛈️' },
}

function getWeatherInfo(code) {
  const keys = Object.keys(WEATHER_CODES).map(Number).sort((a,b)=>b-a)
  for (const k of keys) { if (code >= k) return WEATHER_CODES[k] }
  return { label: 'Clear', icon: '☀️' }
}

const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

export default function WeatherScreen({ lang }) {
  const { weather, loading, error } = useWeather()
  const ta = lang === 'ta'

  if (loading) return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', gap: 12 }}>
      <div className="spinner" />
      <p style={{ fontSize: 13, color: 'var(--text-sub)' }}>{ta ? 'வானிலை ஏற்றுகிறது...' : 'Loading weather data...'}</p>
    </div>
  )

  const wInfo = weather ? getWeatherInfo(weather.weatherCode || 1) : { label: 'Clear', icon: '☀️' }

  const metrics = weather ? [
    { label: ta ? 'அலை உயரம்' : 'Wave height', val: `${weather.waveHeight}m`, icon: '🌊', color: 'var(--wave-pale)' },
    { label: ta ? 'காற்று வேகம்' : 'Wind speed', val: `${weather.windSpeed} km/h`, icon: '💨', color: 'var(--ocean-pale)' },
    { label: ta ? 'காற்று திசை' : 'Wind dir', val: weather.windDir, icon: '🧭', color: 'var(--surface)' },
    { label: ta ? 'ஈரப்பதம்' : 'Humidity', val: `${weather.humidity}%`, icon: '💧', color: 'var(--wave-pale)' },
    { label: ta ? 'கடல் வெப்பம்' : 'Sea temp', val: `${weather.seaTemp}°C`, icon: '🌡️', color: 'var(--sun-pale)' },
    { label: ta ? 'நிலை' : 'Status', val: weather.safeLabel, icon: weather.safeStatus === 'safe' ? '✅' : weather.safeStatus === 'caution' ? '⚠️' : '🚫', color: weather.safeStatus === 'safe' ? 'var(--safe-pale)' : weather.safeStatus === 'caution' ? 'var(--sun-pale)' : 'var(--danger-pale)' },
  ] : []

  return (
    <div className="scroll-area">
      <div style={{ padding: '16px 16px 8px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ocean)' }}>
          {ta ? 'கடல் வானிலை' : 'Sea Weather'}
        </h2>
        <p style={{ fontSize: 12, color: 'var(--text-sub)', marginTop: 2 }}>
          {ta ? 'மரீனா கடலோரம் · Open-Meteo இலவச API' : 'Marina Coast · Powered by Open-Meteo (Free API)'}
        </p>
      </div>

      {error && (
        <div style={{ margin: '0 14px 10px', background: 'var(--warn-pale)', border: '1px solid #FCD34D', borderRadius: 10, padding: '8px 12px', fontSize: 12, color: '#633806' }}>
          ⚠️ {error}
        </div>
      )}

      {/* Main weather card */}
      {weather && (
        <div style={{ margin: '0 14px 14px', background: 'var(--ocean)', borderRadius: 16, padding: '18px', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
                {ta ? 'சென்னை · தமிழ்நாடு' : 'Chennai, Tamil Nadu'}
              </div>
              <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1 }}>{weather.temp}°</div>
              <div style={{ fontSize: 13, color: '#90CAF9', marginTop: 4 }}>{wInfo.label}</div>
            </div>
            <div style={{ fontSize: 52, lineHeight: 1 }}>{wInfo.icon}</div>
          </div>
          <div style={{ marginTop: 14, padding: '10px 0 0', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{ta ? 'அலைகள்' : 'Waves'}</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{weather.waveHeight}m</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{ta ? 'காற்று' : 'Wind'}</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{weather.windSpeed}km/h</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{ta ? 'கடல் வெப்பம்' : 'Sea'}</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{weather.seaTemp}°C</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{ta ? 'நிலை' : 'Safety'}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: weather.safeStatus === 'safe' ? '#6EE7B7' : weather.safeStatus === 'caution' ? '#FCD34D' : '#FCA5A5' }}>
                {weather.safeStatus === 'safe' ? '✓ Safe' : weather.safeStatus === 'caution' ? '⚠ Caution' : '✗ Danger'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Metrics grid */}
      {weather && (
        <div style={{ padding: '0 14px 14px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {metrics.map(m => (
              <div key={m.label} style={{ background: m.color, borderRadius: 12, padding: '10px 12px', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 16 }}>{m.icon}</span>
                  <span style={{ fontSize: 10, color: 'var(--text-sub)', fontWeight: 500 }}>{m.label}</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{m.val}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3-day forecast */}
      {weather?.daily && (
        <div style={{ padding: '0 14px 14px' }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
            {ta ? '3 நாள் முன்னறிவிப்பு' : '3-day forecast'}
          </h3>
          <div style={{ display: 'flex', gap: 8 }}>
            {[0,1,2].map(d => {
              const date = new Date()
              date.setDate(date.getDate() + d)
              const code = weather.daily.weather_code?.[d] ?? 1
              const info = getWeatherInfo(code)
              const max = Math.round(weather.daily.temperature_2m_max?.[d] ?? 33)
              const min = Math.round(weather.daily.temperature_2m_min?.[d] ?? 27)
              return (
                <div key={d} style={{ flex: 1, background: 'var(--card)', borderRadius: 12, padding: '10px 8px', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: 11, color: 'var(--text-sub)', marginBottom: 4 }}>
                    {d === 0 ? (ta ? 'இன்று' : 'Today') : DAYS[date.getDay()]}
                  </div>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{info.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ocean)' }}>{max}°</div>
                  <div style={{ fontSize: 11, color: 'var(--text-hint)' }}>{min}°</div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Safety guide */}
      <div style={{ margin: '0 14px 14px', background: 'var(--card)', borderRadius: 14, border: '1px solid var(--border-light)', overflow: 'hidden' }}>
        <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border-light)', fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
          {ta ? 'கடல் பாதுகாப்பு வழிகாட்டி' : 'Sea safety guide'}
        </div>
        {[
          { color: '#6EE7B7', label: ta ? 'பாதுகாப்பு' : 'Safe', range: ta ? 'அலை <2மீ, காற்று <30கி/ம' : 'Wave <2m, Wind <30km/h' },
          { color: '#FCD34D', label: ta ? 'எச்சரிக்கை' : 'Caution', range: ta ? 'அலை 2-3.5மீ, காற்று 30-45கி/ம' : 'Wave 2–3.5m, Wind 30–45km/h' },
          { color: '#FCA5A5', label: ta ? 'ஆபத்து' : 'Danger', range: ta ? 'அலை >3.5மீ, காற்று >45கி/ம' : 'Wave >3.5m, Wind >45km/h' },
        ].map(s => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px', borderBottom: '1px solid var(--border-light)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', marginRight: 8 }}>{s.label}</span>
              <span style={{ fontSize: 11, color: 'var(--text-sub)' }}>{s.range}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
