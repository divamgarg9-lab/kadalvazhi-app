import { FISH_PRICES } from '../data'

export default function MarketScreen({ lang }) {
  const ta = lang === 'ta'

  return (
    <div className="scroll-area">
      <div style={{ padding: '16px 16px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ocean)', marginBottom: 2 }}>
            {ta ? 'கசிமேட்டு சந்தை' : 'Kasimedu Market'}
          </h2>
          <p style={{ fontSize: 12, color: 'var(--text-sub)' }}>
            {ta ? 'இன்றைய மீன் விலை' : "Today's fish prices · Updated 6:00 AM"}
          </p>
        </div>
        <span style={{ background: 'var(--safe-pale)', color: 'var(--safe)', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>
          {ta ? 'நேரடி' : 'LIVE'}
        </span>
      </div>

      {/* Summary stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, padding: '0 14px 14px' }}>
        {[
          { val: `₹${Math.round(FISH_PRICES.reduce((s,f)=>s+f.price,0)/FISH_PRICES.length)}`, label: ta ? 'சராசரி/கிலோ' : 'Avg/kg' },
          { val: `${FISH_PRICES.filter(f=>f.price>f.prev).length}`, label: ta ? 'விலை ஏறின' : 'Price up' },
          { val: `${FISH_PRICES.filter(f=>f.price<f.prev).length}`, label: ta ? 'விலை இறங்கின' : 'Price down' }
        ].map(s => (
          <div key={s.label} style={{ background: 'var(--card)', border: '1px solid var(--border-light)', borderRadius: 10, padding: '8px 10px', textAlign: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ocean)' }}>{s.val}</div>
            <div style={{ fontSize: 10, color: 'var(--text-hint)', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Price list */}
      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {FISH_PRICES.map((fish, i) => {
          const change = fish.price - fish.prev
          const pct = Math.abs(Math.round((change / fish.prev) * 100))
          const up = change >= 0
          return (
            <div
              key={fish.id}
              className="fade-up"
              style={{
                background: 'var(--card)', border: '1px solid var(--border-light)', borderRadius: 12,
                padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 12,
                animationDelay: `${i * 0.04}s`
              }}
            >
              <div style={{ width: 38, height: 38, background: 'var(--ocean-pale)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                🐟
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
                  {ta ? fish.nameTa : fish.name}
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-hint)' }}>{fish.eng} · {fish.grade}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ocean)' }}>
                  ₹{fish.price}/{fish.unit}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: up ? 'var(--safe)' : 'var(--danger)' }}>
                  {up ? '▲' : '▼'} {pct}%
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Disclaimer */}
      <div style={{ margin: '14px', background: 'var(--surface)', borderRadius: 10, padding: '8px 12px' }}>
        <p style={{ fontSize: 11, color: 'var(--text-hint)', lineHeight: 1.5 }}>
          {ta
            ? '⚠️ விலைகள் மதிப்பீட்டு அடிப்படையில் உள்ளன. உண்மையான விலைக்கு சந்தையை தொடர்பு கொள்ளவும்.'
            : '⚠️ Prices are indicative based on Kasimedu harbor trends. Contact the market directly for exact rates.'}
        </p>
      </div>
    </div>
  )
}
