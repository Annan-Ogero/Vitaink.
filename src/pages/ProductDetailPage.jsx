import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getById, products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ui/ProductCard'
import SEO from '../components/SEO'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = getById(id)
  const { addToCart, count } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const navigate = useNavigate()

  if (!product) return (
    <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h2>Product not found</h2>
      <Link to="/products" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>Back to products</Link>
    </div>
  )

  const related = products.filter(p => p.niche === product.niche && p.id !== product.id).slice(0, 3)

  const handleAdd = () => {
    addToCart(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const nicheLabel = { energy: 'Energy & Wellness', weight: 'Weight Management', immunity: 'Immunity & Gut Health', skin: 'Skin & Personal Care', home: 'Home Care' }

  return (
    <div>
      <SEO
        title={`${product.name} — ${product.tagline}`}
        description={`Buy ${product.name} in Kenya. ${product.tagline}. Genuine NeoLife product. ${product.benefits[0]}. Fast delivery across Kenya — KES ${product.price.toLocaleString()} per ${product.unit}.`}
        path={`/products/${product.id}`}
        type="product"
        product={product}
      />
      {/* Breadcrumb */}
      <div style={{ background: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-200)', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 14, color: 'var(--neutral-400)' }}>
          <Link to="/" style={{ color: 'var(--neutral-400)' }} onMouseEnter={e => e.currentTarget.style.color='var(--teal-500)'} onMouseLeave={e => e.currentTarget.style.color='var(--neutral-400)'}>Home</Link>
          <span>/</span>
          <Link to="/products" style={{ color: 'var(--neutral-400)' }} onMouseEnter={e => e.currentTarget.style.color='var(--teal-500)'} onMouseLeave={e => e.currentTarget.style.color='var(--neutral-400)'}>Products</Link>
          <span>/</span>
          <span style={{ color: 'var(--neutral-700)' }}>{product.name}</span>
        </div>
      </div>

      {/* Main section */}
      <section style={{ padding: '48px 0 64px', background: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* Left: Image */}
          <div>
            <div style={{
              borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3',
              background: product.image ? `url(${product.image}) center/cover` : 'linear-gradient(135deg, var(--teal-50), var(--teal-100))',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--neutral-200)',
            }}>
              {!product.image && <span style={{ fontSize: 96 }}>{product.placeholder}</span>}
              {product.image && <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              {['Non-GMO', 'Science-backed', 'Since 1958', '50+ Countries'].map(b => (
                <span key={b} style={{
                  background: 'var(--teal-50)', color: 'var(--teal-700)',
                  border: '1px solid var(--teal-100)',
                  fontSize: 12, fontWeight: 500, padding: '5px 12px', borderRadius: 100,
                }}>✓ {b}</span>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--teal-500)', marginBottom: 10 }}>
              {nicheLabel[product.niche]}
            </p>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: 8 }}>{product.name}</h1>
            <p style={{ fontSize: 16, color: 'var(--neutral-600)', marginBottom: 24 }}>{product.tagline}</p>

            <div style={{ marginBottom: 28 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--neutral-900)' }}>KES {product.price.toLocaleString()}</span>
              <span style={{ fontSize: 14, color: 'var(--neutral-400)', marginLeft: 8 }}>per {product.unit}</span>
            </div>

            <p style={{ fontSize: 15, color: 'var(--neutral-700)', lineHeight: 1.8, marginBottom: 28 }}>{product.description}</p>

            {/* Benefits */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontWeight: 500, fontSize: 15, marginBottom: 12, color: 'var(--neutral-800)' }}>Key benefits</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {product.benefits.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--neutral-700)' }}>
                    <span style={{ color: 'var(--teal-500)', flexShrink: 0, marginTop: 2 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who it's for */}
            <div style={{ background: 'var(--neutral-50)', borderRadius: 12, padding: '16px 18px', marginBottom: 28, border: '1px solid var(--neutral-200)' }}>
              <p style={{ fontWeight: 500, fontSize: 14, marginBottom: 6, color: 'var(--neutral-800)' }}>Who this is for</p>
              <p style={{ fontSize: 14, color: 'var(--neutral-600)', lineHeight: 1.65 }}>{product.whoFor}</p>
            </div>

            {/* Add to cart */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--neutral-200)', borderRadius: 10, overflow: 'hidden' }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 40, height: 48, background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--neutral-600)' }}>−</button>
                <span style={{ width: 40, textAlign: 'center', fontWeight: 500 }}>{qty}</span>
                <button onClick={() => setQty(q => q + 1)} style={{ width: 40, height: 48, background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--neutral-600)' }}>+</button>
              </div>

              <button onClick={handleAdd} className="btn-primary" style={{ flex: 1, justifyContent: 'center', background: added ? 'var(--teal-600)' : 'var(--teal-500)' }} disabled={!product.inStock}>
                {added ? '✓ Added to cart' : product.inStock ? 'Add to cart' : 'Out of stock'}
              </button>
            </div>

            {count > 0 && (
              <button onClick={() => navigate('/cart')} style={{
                width: '100%', padding: '12px', borderRadius: 10,
                border: '1.5px solid var(--teal-300)', background: 'var(--teal-50)',
                color: 'var(--teal-700)', fontFamily: 'var(--font-body)', fontWeight: 500,
                fontSize: 15, cursor: 'pointer',
              }}>
                View cart ({count} item{count !== 1 ? 's' : ''}) →
              </button>
            )}

            {/* Ingredients */}
            <p style={{ marginTop: 20, fontSize: 13, color: 'var(--neutral-400)' }}>
              <strong style={{ color: 'var(--neutral-600)' }}>Key ingredients: </strong>{product.ingredients}
            </p>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section style={{ padding: '60px 0', background: 'var(--neutral-50)' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 32 }}>More in {nicheLabel[product.niche]}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
              {related.map((p, i) => <ProductCard key={p.id} product={p} delay={i} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
