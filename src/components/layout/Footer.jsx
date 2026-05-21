import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--neutral-900)', color: '#fff', paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--teal-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: 18 }}>V</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: '#fff' }}>VitaLink</span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--neutral-400)', lineHeight: 1.7, maxWidth: 260 }}>
              Your trusted source for genuine NeoLife nutritional products, delivered across Kenya.
            </p>
            <p style={{ fontSize: 12, color: 'var(--neutral-600)', marginTop: 16 }}>
              Authorised NeoLife Independent Promoter
            </p>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 16 }}>Products</p>
            {['Energy & Wellness', 'Weight Management', 'Immunity & Gut Health', 'Skin & Personal Care', 'Home Care'].map(cat => (
              <Link key={cat} to="/products" style={{ display: 'block', fontSize: 14, color: 'var(--neutral-400)', marginBottom: 10, transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--neutral-400)'}>
                {cat}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 16 }}>Company</p>
            {[['About Us', '/about'], ['Join Our Team', '/join'], ['Contact', '/contact']].map(([label, to]) => (
              <Link key={to} to={to} style={{ display: 'block', fontSize: 14, color: 'var(--neutral-400)', marginBottom: 10, transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--neutral-400)'}>
                {label}
              </Link>
            ))}
          </div>

          {/* Delivery info */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 16 }}>Delivery</p>
            <div style={{ fontSize: 14, color: 'var(--neutral-400)', lineHeight: 1.8 }}>
              <p>📍 Nairobi — KES 250</p>
              <p>🚌 Upcountry — KES 450</p>
              <p style={{ marginTop: 12, color: 'var(--neutral-600)', fontSize: 13 }}>
                Same-day / next-day for Nairobi.<br />
                24–48 hours upcountry via bus parcel.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'var(--neutral-600)' }}>
            © {new Date().getFullYear()} VitaLink. NeoLife products are distributed by an independent promoter.
          </p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: 'var(--teal-800)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, color: 'var(--teal-200)' }}>N</span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--neutral-600)' }}>Powered by NeoLife International — since 1958</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
