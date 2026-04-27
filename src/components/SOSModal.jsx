export default function SOSModal({ onClose }) {
  const contacts = [
    { name: 'Indian Coast Guard', nameTA: 'இந்திய கடலோர காவலர்', num: '1554', color: '#0B3D6E', icon: '🚢' },
    { name: 'Tamil Nadu Disaster Mgmt', nameTA: 'TN பேரிடர் மேலாண்மை', num: '1070', color: '#EF4444', icon: '🆘' },
    { name: 'Ambulance', nameTA: 'ஆம்புலன்ஸ்', num: '108', color: '#10B981', icon: '🚑' },
    { name: 'Police', nameTA: 'காவல்துறை', num: '100', color: '#1565C0', icon: '👮' },
    { name: 'TN Fisheries Control Room', nameTA: 'மீன்வளத் துறை', num: '044-28523366', color: '#F59E0B', icon: '🐟' },
  ]

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: '#fff', borderRadius: '24px 24px 0 0', padding: '20px 16px 36px', maxHeight: '85vh', overflowY: 'auto' }}
      >
        <div style={{ width: 40, height: 4, background: '#e5e7eb', borderRadius: 2, margin: '0 auto 16px' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, background: '#FEE2E2', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#0B1929' }}>Emergency Contacts</div>
            <div style={{ fontSize: 11, color: '#8FA8BC' }}>அவசர தொடர்பு எண்கள் · Tap to call</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {contacts.map(c => (
            <a
              key={c.num}
              href={`tel:${c.num}`}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                background: '#F8FAFC', borderRadius: 13, border: '1px solid #E8F0F8',
                textDecoration: 'none', transition: 'background 0.1s'
              }}
            >
              <div style={{ width: 42, height: 42, borderRadius: 11, background: c.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                {c.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#0B1929' }}>{c.name}</div>
                <div style={{ fontSize: 11, color: '#8FA8BC' }}>{c.nameTA}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: c.color }}>{c.num}</span>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <button
          onClick={onClose}
          style={{ width: '100%', marginTop: 16, padding: '12px', borderRadius: 12, border: '1px solid #E8F0F8', background: 'transparent', fontSize: 14, fontWeight: 500, color: '#4A6275', cursor: 'pointer', fontFamily: 'var(--font)' }}
        >
          Close
        </button>
      </div>
    </div>
  )
}
