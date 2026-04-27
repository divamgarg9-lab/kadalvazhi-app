import { useState } from 'react'
import { NEWS } from '../data'

const QUICK_CARDS = [
  { id: 'schemes', icon: '📋', en: 'Govt Schemes', ta: 'அரசு திட்டங்கள்', sub: '8 active', subTa: '8 திட்டங்கள்', badge: 'badge-blue', badgeText: 'Free apply' },
  { id: 'weather', icon: '🌊', en: 'Sea Weather', ta: 'கடல் வானிலை', sub: 'Hourly alerts', subTa: 'நேரடி தகவல்', badge: 'badge-teal', badgeText: 'Live' },
  { id: 'market', icon: '🐟', en: 'Fish Prices', ta: 'மீன் விலை', sub: 'Kasimedu rates', subTa: 'இன்றைய விலை', badge: 'badge-green', badgeText: 'Today' },
  { id: 'insurance', icon: '🛡️', en: 'Insurance', ta: 'காப்பீடு', sub: 'CMFRAY cover', subTa: 'CMFRAY', badge: 'badge-amber', badgeText: 'Apply' },
  { id: 'training', icon: '📚', en: 'Free Training', ta: 'இலவச பயிற்சி', sub: '4 programs', subTa: '4 திட்டங்கள்', badge: 'badge-purple', badgeText: 'Tamil' },
  { id: 'credit', icon: '💳', en: 'Kisan Credit', ta: 'கிசான் கிரெடிட்', sub: 'Up to ₹2L loan', subTa: '₹2L கடன்', badge: 'badge-amber', badgeText: 'Bank link' },
]

export default function HomeScreen({ lang, onNavigate, onSOS }) {
  const ta = lang === 'ta'

  return (
    <div className="scroll-area">
      {/* SOS Strip */}
      <div style={{ padding: '12px 14px 0' }}>
        <button
          className="pulse"
          onClick={onSOS}
          style={{
            width: '100%', background: 'var(--danger)', border: 'none', borderRadius: 14,
            padding: '13px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            cursor: 'pointer', fontFamily: 'var(--font)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, background: 'rgba(255,255,255,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>
                {ta ? 'அவசர SOS' : 'Emergency SOS'}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>
                {ta ? 'கடலோர காவலர் · 1554' : 'Indian Coast Guard · 1554'}
              </div>
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Quick Access Grid */}
      <div className="section-hd">
        <h3>{ta ? 'விரைவு அணுகல்' : 'Quick access'}</h3>
        <button onClick={() => onNavigate('schemes')}>{ta ? 'அனைத்தும்' : 'See all'}</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 14px 4px' }}>
        {QUICK_CARDS.map(card => (
          <button
            key={card.id}
            onClick={() => onNavigate(card.id)}
            style={{
              background: 'var(--card)', border: '1px solid var(--border-light)', borderRadius: 14,
              padding: 12, textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font)', transition: 'border-color 0.15s'
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--ocean-light)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-light)'}
          >
            <div style={{ fontSize: 24, marginBottom: 6, lineHeight: 1 }}>{card.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
              {ta ? card.ta : card.en}
            </div>
            <div style={{ fontSize: 10, color: 'var(--text-sub)', marginTop: 2 }}>
              {ta ? card.subTa : card.sub}
            </div>
            <span className={`badge ${card.badge}`}>{card.badgeText}</span>
          </button>
        ))}
      </div>

      {/* Fishing Ban Banner */}
      <div style={{ margin: '14px 14px 0' }}>
        <div style={{ background: 'var(--sun-pale)', border: '1px solid #FCD34D', borderRadius: 12, padding: '10px 14px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div style={{ fontSize: 20, flexShrink: 0 }}>⚠️</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#633806' }}>
              {ta ? 'மீன்பிடி தடை: ஏப்ரல் 15 – ஜூன் 14' : 'Fishing Ban: Apr 15 – Jun 14'}
            </div>
            <div style={{ fontSize: 11, color: '#854F0B', marginTop: 2 }}>
              {ta ? '₹8,000 இழப்பீட்டிற்கு இப்போதே விண்ணப்பிக்கவும்' : 'Apply for ₹8,000 compensation now — deadline Apr 20'}
            </div>
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="section-hd" style={{ marginTop: 4 }}>
        <h3>{ta ? 'சமீபத்திய செய்திகள்' : 'Latest updates'}</h3>
        <button>{ta ? 'அனைத்தும்' : 'All news'}</button>
      </div>
      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {NEWS.map((item, i) => (
          <div
            key={item.id}
            className="fade-up"
            style={{
              background: 'var(--card)', border: '1px solid var(--border-light)', borderRadius: 12,
              padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'flex-start',
              cursor: 'pointer', animationDelay: `${i * 0.05}s`
            }}
          >
            <div style={{ width: 3, borderRadius: 2, background: item.accent, flexShrink: 0, alignSelf: 'stretch', minHeight: 32 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: 'var(--text)', lineHeight: 1.5 }}>
                {ta ? item.titleTa : item.title}
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-hint)', marginTop: 3 }}>
                {item.source} · {item.time}
              </div>
            </div>
            {item.urgent && (
              <span style={{ background: 'var(--danger-pale)', color: 'var(--danger)', fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 20, flexShrink: 0, alignSelf: 'flex-start' }}>
                URGENT
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Helplines footer */}
      <div style={{ margin: '14px 14px 0', background: 'var(--ocean-pale)', border: '1px solid var(--border)', borderRadius: 12, padding: '10px 14px' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ocean)', marginBottom: 8 }}>
          {ta ? 'முக்கிய ஹெல்ப்லைன் எண்கள்' : 'Key helplines'}
        </div>
        {[
          { label: 'Coast Guard', labelTa: 'கடலோர காவலர்', num: '1554' },
          { label: 'TN Fisheries', labelTa: 'மீன்வளத் துறை', num: '044-28523366' },
          { label: 'Disaster Mgmt', labelTa: 'பேரிடர் மேலாண்மை', num: '1070' },
        ].map(h => (
          <div key={h.num} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: '0.5px solid var(--border)' }}>
            <span style={{ fontSize: 12, color: 'var(--text-sub)' }}>{ta ? h.labelTa : h.label}</span>
            <a href={`tel:${h.num}`} style={{ fontSize: 13, fontWeight: 600, color: 'var(--ocean-mid)', textDecoration: 'none' }}>{h.num}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
