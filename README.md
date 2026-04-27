# Kadalvazhi — கடல்வழி
## Fishermen NGO App · Chennai Coastline

A full-featured Progressive Web App (PWA) for Chennai coastline fishermen. Works offline, installable on any phone, uses 100% free APIs.

---

## Features
- Live Sea Weather — Open-Meteo free API (waves, wind, safety status)
- Govt Schemes — 8 schemes with docs, apply links, deadlines
- Fish Market Prices — Kasimedu harbor rates with % change
- Emergency SOS — One-tap Coast Guard / Police / Ambulance
- Free Training — Register for fishermen skill programs
- Hospital Locator — Nearest hospitals with tap-to-call
- Tamil / English — Full bilingual support
- PWA / Offline — Install on phone, works without internet

---

## Quick Start

  npm install
  npm run dev       # development
  npm run build     # production build
  npm run preview   # preview build

Open http://localhost:5173

---

## Project Structure

  src/
    components/
      AppHeader.jsx     Ocean header + live weather
      BottomNav.jsx     5-tab bottom navigation
      SOSModal.jsx      Emergency contacts sheet
    screens/
      HomeScreen.jsx    Dashboard, news, quick access
      SchemesScreen.jsx Govt schemes, expandable cards
      MarketScreen.jsx  Fish market prices
      WeatherScreen.jsx Full weather + 3-day forecast
      MoreScreen.jsx    Training, hospitals, about NGO
    hooks/
      useWeather.js     Open-Meteo API (auto-refresh 30min)
    data/
      index.js          Schemes, prices, news, training

---

## Free APIs Used

Open-Meteo: https://api.open-meteo.com
- 100% free, no API key required
- Wave height, wind speed/direction, sea temp, forecast
- Cached offline by PWA service worker

---

## Deployment (Free)

Vercel:   npm i -g vercel && vercel --prod
Netlify:  npm run build, drag dist/ to netlify.com/drop

---

## Installing on Phone

Android Chrome: Menu → Add to Home Screen
iPhone Safari:  Share → Add to Home Screen

---

## Safety Logic

Safe:    Wave < 2m, Wind < 30 km/h
Caution: Wave 2-3.5m, Wind 30-45 km/h
Danger:  Wave > 3.5m, Wind > 45 km/h

---

## Key Helplines

Coast Guard: 1554
Ambulance: 108
Police: 100
TN Fisheries: 044-28523366

---

Built with love for Chennai fishing communities.
Kadalvazhi — கடல்வழி — The Ocean Path
