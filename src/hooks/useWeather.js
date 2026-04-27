import { useState, useEffect } from 'react'

// Chennai Marina coordinates
const LAT = 13.0500
const LON = 80.2824

export function useWeather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,weather_code&hourly=wave_height,sea_surface_temperature&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FKolkata&forecast_days=3`
        const res = await fetch(url)
        const data = await res.json()

        const cur = data.current
        const waveH = data.hourly?.wave_height?.[new Date().getHours()] ?? 1.2
        const seaTemp = data.hourly?.sea_surface_temperature?.[0] ?? 29

        const windSpeed = Math.round(cur.wind_speed_10m)
        const waveHeight = parseFloat(waveH.toFixed(1))

        // Safety logic
        let safeStatus = 'safe'
        let safeLabel = 'Safe to sail'
        let safeColor = 'var(--safe)'
        if (waveHeight > 3.5 || windSpeed > 45) {
          safeStatus = 'danger'
          safeLabel = 'Do NOT sail'
          safeColor = 'var(--danger)'
        } else if (waveHeight > 2 || windSpeed > 30) {
          safeStatus = 'caution'
          safeLabel = 'Caution advised'
          safeColor = 'var(--warn)'
        }

        const dirs = ['N','NE','E','SE','S','SW','W','NW']
        const windDir = dirs[Math.round(cur.wind_direction_10m / 45) % 8]

        setWeather({
          temp: Math.round(cur.temperature_2m),
          humidity: Math.round(cur.relative_humidity_2m),
          windSpeed,
          windDir,
          waveHeight,
          seaTemp: Math.round(seaTemp),
          weatherCode: cur.weather_code,
          safeStatus,
          safeLabel,
          safeColor,
          daily: data.daily,
          updated: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
        })
      } catch (e) {
        setError('Could not load weather data. Check your connection.')
        // Fallback mock data for offline
        setWeather({
          temp: 32, humidity: 78, windSpeed: 18, windDir: 'NE',
          waveHeight: 1.2, seaTemp: 29, weatherCode: 1,
          safeStatus: 'safe', safeLabel: 'Safe to sail', safeColor: 'var(--safe)',
          updated: 'Offline', daily: null
        })
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
    const interval = setInterval(fetchWeather, 30 * 60 * 1000) // refresh every 30 min
    return () => clearInterval(interval)
  }, [])

  return { weather, loading, error }
}
