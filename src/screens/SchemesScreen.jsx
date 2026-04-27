import { useState } from 'react'
import { SCHEMES } from '../data'

export default function SchemesScreen({ lang }) {
  const ta = lang === 'ta'
  const [expanded, setExpanded] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Central Govt', 'TN State', 'TN Fisheries', 'Bank of India', 'TN Online']
  const filtered = filter === 'All' ? SCHEMES : SCHEMES.filter(s => s.category === filter)

  return (
    <div className="scroll-area">
      {/* Header */}
      <div style={{ padding: '16px 16px 8px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ocean)', marginBottom: 4 }}>
          {ta ? 'அரசு திட்டங்கள்' : 'Government Schemes'}
        </h2>
        <p style={{ fontSize: 12, color: 'var(--text-sub)' }}>
          {ta ? 'மீனவர்களுக்கான அனைத்து இலவச அரசு சேவைகள்' : 'All free government services for fishermen'}
        </p>
      </div>

      {/* Filter chips */}
      <div style={{ display: 'flex', gap: 7, padding: '0 14px 12px', overflowX: 'auto' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '5px 12px', borderRadius: 20, fontSize: 11, fontWeight: 500,
              whiteSpace: 'nowrap', cursor: 'pointer', border: '1px solid',
              background: filter === cat ? 'var(--ocean)' : 'var(--card)',
              color: filter === cat ? '#fff' : 'var(--text-sub)',
              borderColor: filter === cat ? 'var(--ocean)' : 'var(--border)',
              fontFamily: 'var(--font)', flexShrink: 0
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Scheme cards */}
      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.map((scheme, i) => {
          const isOpen = expanded === scheme.id
          return (
            <div
              key={scheme.id}
              className="fade-up"
              style={{
                background: 'var(--card)', border: `1px solid ${isOpen ? 'var(--ocean-light)' : 'var(--border-light)'}`,
                borderRadius: 14, overflow: 'hidden', animationDelay: `${i * 0.05}s`, transition: 'border-color 0.2s'
              }}
            >
              <button
                onClick={() => setExpanded(isOpen ? null : scheme.id)}
                style={{
                  width: '100%', padding: '12px 14px', display: 'flex', alignItems: 'flex-start',
                  gap: 12, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font)', textAlign: 'left'
                }}
              >
                <div style={{ width: 42, height: 42, background: 'var(--ocean-pale)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ocean-mid)" strokeWidth="1.8">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
                    {ta ? scheme.titleTa : scheme.title}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-sub)', marginTop: 3, lineHeight: 1.4 }}>
                    {ta ? scheme.descTa : scheme.desc}
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className={`badge ${scheme.badge}`} style={{ marginTop: 0 }}>{scheme.category}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--safe)' }}>{scheme.amount}</span>
                    {scheme.deadline !== 'Open' && (
                      <span style={{ fontSize: 10, color: 'var(--danger)', fontWeight: 600 }}>⏰ {scheme.deadline}</span>
                    )}
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none', flexShrink: 0, marginTop: 2 }}>
                  <path d="M6 9l6 6 6-6" stroke="var(--text-hint)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              {isOpen && (
                <div style={{ padding: '0 14px 14px', borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ paddingTop: 12 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-sub)', marginBottom: 6 }}>
                      {ta ? 'தேவையான ஆவணங்கள்' : 'Required documents'}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                      {scheme.docs.map(doc => (
                        <span key={doc} style={{ fontSize: 11, padding: '3px 8px', background: 'var(--surface)', borderRadius: 20, color: 'var(--text-sub)', border: '1px solid var(--border)' }}>{doc}</span>
                      ))}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-sub)', marginBottom: 4 }}>
                      {ta ? 'எப்படி விண்ணப்பிப்பது' : 'How to apply'}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text)', lineHeight: 1.6, marginBottom: 12, background: 'var(--surface)', padding: '8px 10px', borderRadius: 8 }}>
                      {scheme.how}
                    </div>
                    <a
                      href={scheme.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block', textAlign: 'center', background: 'var(--ocean)', color: '#fff',
                        padding: '10px', borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: 'none'
                      }}
                    >
                      {ta ? 'இப்போது விண்ணப்பிக்கவும் →' : 'Apply Now →'}
                    </a>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
