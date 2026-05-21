import { Link } from 'react-router-dom'

export default function ProductCard({ product: p, delay = 0 }) {
  return (
    <Link
      to={`/products/${p.id}`}
      className="card fade-up"
      style={{ display: 'block', animationDelay: `${delay * 0.08}s`, opacity: 0, cursor: 'pointer' }}
    >
      {/* Product image / placeholder */}
      <div style={{
        height: 200,
        background: p.image
          ? `url(${p.image}) center/cover no-repeat`
          : 'linear-gradient(135deg, var(--teal-50), var(--teal-100))',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        {!p.image && (
          <span style={{ fontSize: 56 }}>{p.placeholder}</span>
        )}
        {p.image && (
          <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}

        {/* Badge */}
        {p.badge && (
          <span style={{
            position: 'absolute', top: 12, left: 12,
            background: 'var(--teal-500)', color: '#fff',
            fontSize: 11, fontWeight: 600, padding: '4px 10px',
            borderRadius: 100,
          }}>
            {p.badge}
          </span>
        )}

        {/* Stock indicator */}
        {!p.inStock && (
          <span style={{
            position: 'absolute', top: 12, right: 12,
            background: '#fef2f2', color: '#dc2626',
            fontSize: 11, fontWeight: 500, padding: '4px 10px',
            borderRadius: 100, border: '1px solid #fecaca',
          }}>
            Out of stock
          </span>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '18px 20px 22px' }}>
        {/* Niche label */}
        <p style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'var(--teal-500)', marginBottom: 6,
        }}>
          {nicheLabel(p.niche)}
        </p>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 6, color: 'var(--neutral-900)' }}>
          {p.name}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--neutral-600)', marginBottom: 16, lineHeight: 1.55 }}>
          {p.tagline}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--neutral-900)' }}>
              KES {p.price.toLocaleString()}
            </span>
            <span style={{ fontSize: 12, color: 'var(--neutral-400)', marginLeft: 4 }}>/ {p.unit}</span>
          </div>
          <span style={{
            background: 'var(--teal-50)', color: 'var(--teal-600)',
            fontSize: 13, fontWeight: 500, padding: '7px 14px', borderRadius: 8,
          }}>
            View →
          </span>
        </div>
      </div>
    </Link>
  )
}

function nicheLabel(niche) {
  const map = { energy: 'Energy & Wellness', weight: 'Weight Management', immunity: 'Immunity & Gut', skin: 'Skin Care', home: 'Home Care' }
  return map[niche] || niche
}
