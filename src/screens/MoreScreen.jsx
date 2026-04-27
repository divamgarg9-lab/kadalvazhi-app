import { useState } from 'react'
import { TRAINING, HOSPITALS } from '../data'

export default function MoreScreen({ lang, onLangChange }) {
  const ta = lang === 'ta'
  const [section, setSection] = useState('training')

  const sections = [
    { id: 'training', en: 'Training', ta: 'பயிற்சி' },
    { id: 'hospitals', en: 'Hospitals', ta: 'மருத்துவமனை' },
    { id: 'about', en: 'About NGO', ta: 'NGO பற்றி' },
  ]

  return (
    <div className="scroll-area">
      {/* Language toggle */}
      <div style={{ padding: '16px 16px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ocean)' }}>
          {ta ? 'மேலும் சேவைகள்' : 'More Services'}
        </h2>
        <div style={{ display: 'flex', gap: 6 }}>
          {['en', 'ta'].map(l => (
            <button
              key={l}
              onClick={() => onLangChange(l)}
              style={{
                padding: '5px 12px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                cursor: 'pointer', border: '1px solid',
                background: lang === l ? 'var(--ocean)' : 'var(--card)',
                color: lang === l ? '#fff' : 'var(--text-sub)',
                borderColor: lang === l ? 'var(--ocean)' : 'var(--border)',
                fontFamily: 'var(--font)'
              }}
            >
              {l === 'en' ? 'English' : 'தமிழ்'}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-tabs */}
      <div style={{ display: 'flex', gap: 7, padding: '0 14px 14px' }}>
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setSection(s.id)}
            style={{
              padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 500,
              cursor: 'pointer', border: '1px solid',
              background: section === s.id ? 'var(--ocean)' : 'var(--card)',
              color: section === s.id ? '#fff' : 'var(--text-sub)',
              borderColor: section === s.id ? 'var(--ocean)' : 'var(--border)',
              fontFamily: 'var(--font)'
            }}
          >
            {ta ? s.ta : s.en}
          </button>
        ))}
      </div>

      {section === 'training' && <TrainingSection ta={ta} />}
      {section === 'hospitals' && <HospitalsSection ta={ta} />}
      {section === 'about' && <AboutSection ta={ta} />}
    </div>
  )
}

function TrainingSection({ ta }) {
  return (
    <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ background: 'var(--safe-pale)', borderRadius: 10, padding: '8px 12px', fontSize: 12, color: '#27500A', marginBottom: 2 }}>
        ✅ {ta ? 'அனைத்து பயிற்சி திட்டங்களும் இலவசம்' : 'All training programs are 100% free for fishermen'}
      </div>
      {TRAINING.map((t, i) => (
        <div key={t.id} className="fade-up" style={{ background: 'var(--card)', border: '1px solid var(--border-light)', borderRadius: 14, padding: '13px 14px', animationDelay: `${i * 0.06}s` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
                {ta ? t.titleTa : t.title}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-sub)', marginTop: 3 }}>
                📍 {t.location}
              </div>
            </div>
            <span className="badge badge-green" style={{ flexShrink: 0, marginTop: 0, marginLeft: 8 }}>
              {ta ? 'இலவசம்' : 'Free'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <div style={{ fontSize: 11, color: 'var(--text-hint)' }}>
              📅 {t.date}
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-hint)' }}>
              ⏱ {t.duration}
            </div>
            <div style={{ fontSize: 11, color: 'var(--ocean-light)', fontWeight: 600 }}>
              {ta ? `${t.seats} இடங்கள் உள்ளன` : `${t.seats} seats available`}
            </div>
          </div>
          <button style={{
            marginTop: 10, width: '100%', padding: '8px', borderRadius: 9,
            border: '1px solid var(--ocean-mid)', background: 'transparent',
            color: 'var(--ocean-mid)', fontSize: 12, fontWeight: 600,
            cursor: 'pointer', fontFamily: 'var(--font)'
          }}>
            {ta ? 'பதிவு செய்யவும்' : 'Register for free'}
          </button>
        </div>
      ))}
    </div>
  )
}

function HospitalsSection({ ta }) {
  return (
    <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ background: 'var(--danger-pale)', borderRadius: 10, padding: '8px 12px', fontSize: 12, color: '#7F1D1D', marginBottom: 2 }}>
        🚨 {ta ? 'மருத்துவ அவசரநிலையில் 108 என்ற எண்ணை அழைக்கவும்' : 'In medical emergency, call 108 immediately'}
      </div>
      {HOSPITALS.map((h, i) => (
        <div key={h.id} className="fade-up" style={{ background: 'var(--card)', border: '1px solid var(--border-light)', borderRadius: 14, padding: '12px 14px', animationDelay: `${i * 0.06}s` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{h.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-hint)', marginTop: 3 }}>📍 {h.distance} away</div>
            </div>
            {h.emergency && (
              <span style={{ background: 'var(--danger-pale)', color: 'var(--danger)', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 20, flexShrink: 0, marginLeft: 8 }}>
                24/7
              </span>
            )}
          </div>
          <a
            href={`tel:${h.phone}`}
            style={{
              display: 'flex', alignItems: 'center', gap: 6, marginTop: 10,
              background: 'var(--safe-pale)', borderRadius: 9, padding: '8px 12px',
              textDecoration: 'none', color: 'var(--safe)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--safe)" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span style={{ fontSize: 13, fontWeight: 600 }}>{h.phone}</span>
          </a>
        </div>
      ))}
    </div>
  )
}

function AboutSection({ ta }) {
  return (
    <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ background: 'var(--ocean)', borderRadius: 14, padding: '18px', color: '#fff', textAlign: 'center' }}>
        <div style={{ fontSize: 32, marginBottom: 8 }}>🌊</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{ta ? 'கடல்வழி NGO' : 'Kadalvazhi NGO'}</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
          {ta
            ? 'சென்னை கடலோர மீனவர்களுக்கு சேவை செய்யும் தன்னார்வ தொண்டு நிறுவனம்'
            : 'Serving the fishing communities of Chennai coastline since 2015'}
        </div>
      </div>

      {[
        { icon: '👥', en: '12,000+ Fishermen served', ta: '12,000+ மீனவர்களுக்கு சேவை' },
        { icon: '📋', en: '₹45 Cr schemes facilitated', ta: '₹45 கோடி திட்டங்கள் உதவி' },
        { icon: '🚨', en: '380+ SOS rescues assisted', ta: '380+ மீட்பு நடவடிக்கைகள்' },
        { icon: '📚', en: '2,800+ trained in 5 years', ta: '5 ஆண்டுகளில் 2,800+ பயிற்சி' },
      ].map(s => (
        <div key={s.en} style={{ background: 'var(--card)', border: '1px solid var(--border-light)', borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 22 }}>{s.icon}</span>
          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{ta ? s.ta : s.en}</span>
        </div>
      ))}

      <div style={{ background: 'var(--card)', border: '1px solid var(--border-light)', borderRadius: 14, padding: '14px' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 10 }}>
          {ta ? 'எங்களை தொடர்பு கொள்ளவும்' : 'Contact us'}
        </div>
        {[
          { label: 'Phone', val: '+91 44 2852 3366', href: 'tel:+914428523366' },
          { label: 'Email', val: 'help@kadalvazhi.org', href: 'mailto:help@kadalvazhi.org' },
          { label: 'Office', val: 'Kasimedu Harbor Rd, Chennai – 600013', href: null },
        ].map(c => (
          <div key={c.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: 11, color: 'var(--text-hint)' }}>{c.label}</span>
            {c.href
              ? <a href={c.href} style={{ fontSize: 12, fontWeight: 500, color: 'var(--ocean-light)', textDecoration: 'none' }}>{c.val}</a>
              : <span style={{ fontSize: 12, color: 'var(--text-sub)', maxWidth: '60%', textAlign: 'right' }}>{c.val}</span>
            }
          </div>
        ))}
      </div>
    </div>
  )
}
