import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, NICHES, getByNiche } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import SEO from '../components/SEO'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeNiche, setActiveNiche] = useState(searchParams.get('niche') || 'all')

  useEffect(() => {
    const n = searchParams.get('niche')
    if (n) setActiveNiche(n)
  }, [searchParams])

  const filtered = getByNiche(activeNiche)

  const handleNiche = (id) => {
    setActiveNiche(id)
    setSearchParams(id === 'all' ? {} : { niche: id })
  }

  return (
    <div>
      <SEO
        title="All NeoLife Products in Kenya — Browse by Category"
        description="Shop the full range of NeoLife products in Kenya. Energy supplements, meal replacement shakes, immunity boosters, organic skincare, and eco-friendly home care. Delivered anywhere in Kenya."
        path="/products"
      />
      {/* Page header */}
      <section style={{ padding: '56px 0 40px', background: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-200)' }}>
        <div className="container">
          <p className="section-label">Full catalogue</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: 12 }}>All products</h1>
          <p style={{ fontSize: 16, color: 'var(--neutral-600)', maxWidth: 520 }}>
            Browse genuine NeoLife products across all categories. Click any product for full details, benefits, and ingredients.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--neutral-200)', padding: '0', position: 'sticky', top: 68, zIndex: 50 }}>
        <div className="container" style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '14px 24px', scrollbarWidth: 'none' }}>
          {NICHES.map(n => (
            <button key={n.id} onClick={() => handleNiche(n.id)} style={{
              padding: '8px 18px', borderRadius: 100, border: '1.5px solid',
              borderColor: activeNiche === n.id ? 'var(--teal-500)' : 'var(--neutral-200)',
              background: activeNiche === n.id ? 'var(--teal-500)' : '#fff',
              color: activeNiche === n.id ? '#fff' : 'var(--neutral-600)',
              fontSize: 14, fontFamily: 'var(--font-body)', fontWeight: activeNiche === n.id ? 500 : 400,
              cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s',
            }}>
              {n.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '48px 0 80px', background: '#fff' }}>
        <div className="container">
          <p style={{ fontSize: 14, color: 'var(--neutral-400)', marginBottom: 28 }}>
            Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {filtered.map((p, i) => <ProductCard key={p.id} product={p} delay={i} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
