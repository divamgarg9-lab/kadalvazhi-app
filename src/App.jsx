import { useState } from 'react'
import './index.css'
import AppHeader from './components/AppHeader'
import BottomNav from './components/BottomNav'
import SOSModal from './components/SOSModal'
import HomeScreen from './screens/HomeScreen'
import SchemesScreen from './screens/SchemesScreen'
import MarketScreen from './screens/MarketScreen'
import WeatherScreen from './screens/WeatherScreen'
import MoreScreen from './screens/MoreScreen'

export default function App() {
  const [tab, setTab] = useState('home')
  const [lang, setLang] = useState('en')
  const [sosOpen, setSosOpen] = useState(false)

  const handleNavigate = (dest) => {
    const tabMap = { schemes: 'schemes', weather: 'weather', market: 'market', insurance: 'schemes', training: 'more', credit: 'schemes' }
    setTab(tabMap[dest] || dest)
  }

  return (
    <>
      <div className="screen">
        <AppHeader lang={lang} />
        {tab === 'home' && <HomeScreen lang={lang} onNavigate={handleNavigate} onSOS={() => setSosOpen(true)} />}
        {tab === 'schemes' && <SchemesScreen lang={lang} />}
        {tab === 'market' && <MarketScreen lang={lang} />}
        {tab === 'weather' && <WeatherScreen lang={lang} />}
        {tab === 'more' && <MoreScreen lang={lang} onLangChange={setLang} />}
        <BottomNav active={tab} onChange={setTab} lang={lang} />
      </div>
      {sosOpen && <SOSModal onClose={() => setSosOpen(false)} />}
    </>
  )
}
