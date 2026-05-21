import { Link } from 'react-router-dom'
import { getFeatured } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import SEO from '../components/SEO'
import siteImages from '../data/siteImages'

const trustStats = [
  { value: '65+', label: 'Years in business' },
  { value: '50+', label: 'Countries worldwide' },
  { value: '250M+', label: 'Estimated revenue' },
  { value: '100%', label: 'Non-GMO ingredients' },
]

const niches = [
  { id: 'energy',   icon: '⚡', title: 'Energy & Wellness',        desc: 'Daily nutrition for sustained energy and vitality' },
  { id: 'weight',   icon: '🥤', title: 'Weight Management',        desc: 'Meal replacements and body composition support' },
  { id: 'immunity', icon: '🛡️', title: 'Immunity & Gut Health',    desc: 'Whole-food antioxidants and digestive support' },
  { id: 'skin',     icon: '✨', title: 'Skin & Personal Care',      desc: 'Certified organic skincare from marine botanicals' },
]

const steps = [
  { num: '01', title: 'Browse products',   desc: 'Explore our full catalogue by category or scroll through featured picks.' },
  { num: '02', title: 'Place your order',  desc: 'Add products to your cart and check out. Shipping is calculated automatically.' },
  { num: '03', title: 'We deliver to you', desc: 'Same-day or next-day in Nairobi. Upcountry within 24–48 hours via bus parcel.' },
]

const testimonials = [
  {
    name: 'Amara W.',
    role: 'Nairobi',
    quote: 'I have been using Pro Vitality+ for three months and my energy levels are completely different. I no longer need three cups of tea to get through the afternoon.',
    photo: 'amara',
  },
  {
    name: 'Brian O.',
    role: 'Mombasa',
    quote: 'The NeoLifeShake helped me drop 6kg in six weeks without feeling hungry all the time. It actually tastes good — which I did not expect from a meal replacement.',
    photo: 'brian',
  },
  {
    name: 'Cynthia M.',
    role: 'Nairobi',
    quote: 'My skin has visibly improved after two months on Omega-3 and the Nutriance moisturizer. People keep asking what I changed in my routine.',
    photo: 'cynthia',
  },
  {
    name: 'David K.',
    role: 'Kisumu',
    quote: 'Ordering was easy and delivery came in two days. The Super 10 cleaner is incredibly concentrated — one bottle has lasted my whole household for months.',
    photo: 'david',
  },
]

export default function HomePage() {
  const featured = getFeatured()

  return (
    <div>
      <SEO
        title="Genuine NeoLife Products in Kenya — Nutrition, Skincare & Wellness"
        description="Buy genuine NeoLife nutrition, weight management, immunity, and skincare products in Kenya. Fast delivery across Nairobi and upcountry. Science-backed supplements trusted for 65+ years in 50+ countries."
        path="/"
      />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{
        paddingTop: 120, paddingBottom: 80,
        background: 'linear-gradient(135deg, var(--teal-50) 0%, #fff 60%)',
        borderBottom: '1px solid var(--neutral-100)',
      }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div className="fade-up">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--teal-100)', borderRadius: 100,
              padding: '6px 14px', marginBottom: 24,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal-500)', display: 'inline-block' }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--teal-800)' }}>Genuine NeoLife Products — Kenya</span>
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: 20, color: 'var(--neutral-900)' }}>
              Real nutrition.<br />
              <span style={{ color: 'var(--teal-500)' }}>Real results.</span>
            </h1>

            <p style={{ fontSize: 17, color: 'var(--neutral-600)', lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
              VitaLink brings you the full range of NeoLife's science-backed nutrition, 
              skincare, and home care products — delivered to your door anywhere in Kenya.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/products" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
                Shop Products
              </Link>
              <Link to="/about" className="btn-outline" style={{ fontSize: 16, padding: '14px 32px' }}>
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="fade-up delay-2" style={{
            borderRadius: 24, overflow: 'hidden', height: 420,
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
          }}>
            <img
              src={siteImages['hero']}
              alt="Wellness and natural nutrition"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>

        {/* Mobile hero layout */}
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--neutral-900)', padding: '32px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, textAlign: 'center' }}>
          {trustStats.map(s => (
            <div key={s.value}>
              <p style={{ fontSize: 28, fontFamily: 'var(--font-display)', color: 'var(--teal-400)', marginBottom: 4 }}>{s.value}</p>
              <p style={{ fontSize: 13, color: 'var(--neutral-400)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NICHE CATEGORIES ──────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="section-label">What we offer</p>
            <h2 className="section-title">Products for every health goal</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              NeoLife's range covers every aspect of daily wellness — from the inside out.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {niches.map((n, i) => (
              <Link key={n.id} to={`/products?niche=${n.id}`} className="card fade-up" style={{ padding: '28px 24px', animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <span style={{ fontSize: 36, display: 'block', marginBottom: 16 }}>{n.icon}</span>
                <h3 style={{ fontSize: 17, fontFamily: 'var(--font-display)', marginBottom: 8 }}>{n.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--neutral-600)', lineHeight: 1.6 }}>{n.desc}</p>
                <p style={{ marginTop: 16, fontSize: 14, fontWeight: 500, color: 'var(--teal-500)' }}>View products →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p className="section-label">Hand-picked</p>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Featured products</h2>
            </div>
            <Link to="/products" className="btn-outline">View all products</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-label">Simple process</p>
            <h2 className="section-title">How to order</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40 }}>
            {steps.map((s, i) => (
              <div key={s.num} className="fade-up" style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'var(--teal-50)', border: '1px solid var(--teal-100)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--teal-600)' }}>{s.num}</span>
                </div>
                <h3 style={{ fontSize: 18, fontFamily: 'var(--font-display)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--neutral-600)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-label">Real people, real results</p>
            <h2 className="section-title">What our customers say</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Over 1,000 customers across Kenya trust VitaLink for their daily nutrition needs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {testimonials.map((t, i) => (
              <div key={t.name} className="card fade-up" style={{ padding: '28px 24px', animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                {/* Stars */}
                <div style={{ marginBottom: 16, display: 'flex', gap: 3 }}>
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: 15, color: 'var(--neutral-700)', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  {t.photo ? (
                    <img
                      src={siteImages[t.photo]}
                      alt={t.name}
                      style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0, border: '2px solid var(--neutral-100)' }}
                    />
                  ) : (
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: t.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 600, fontSize: 14, color: t.textColor, flexShrink: 0,
                    }}>
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <p style={{ fontWeight: 500, fontSize: 15, color: 'var(--neutral-900)' }}>{t.name}</p>
                    <p style={{ fontSize: 13, color: 'var(--neutral-400)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEOLIFE HISTORY ───────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--neutral-900)', color: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p className="section-label" style={{ color: 'var(--teal-400)' }}>Our foundation</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: 20 }}>
              65 years of science-backed nutrition
            </h2>
            <p style={{ fontSize: 16, color: 'var(--neutral-400)', lineHeight: 1.8, marginBottom: 20 }}>
              NeoLife was founded in 1958 in California with a single belief — that whole-food nutrition, 
              backed by rigorous science, could transform lives. Over six decades later, that mission has never changed.
            </p>
            <p style={{ fontSize: 16, color: 'var(--neutral-400)', lineHeight: 1.8, marginBottom: 32 }}>
              Today, NeoLife operates in over 50 countries, with formulas developed in partnership with leading 
              research institutions. Every product is non-GMO, free from artificial additives, and manufactured 
              to pharmaceutical-grade quality standards.
            </p>
            <Link to="/about" className="btn-primary">Learn more about NeoLife</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { year: '1958', event: 'Founded in California' },
              { year: '1970s', event: 'Expanded to first international markets' },
              { year: '1990s', event: 'Entered African markets' },
              { year: '2000s', event: 'Organic skincare range launched' },
              { year: '2010s', event: 'Reached 50+ countries globally' },
              { year: 'Today', event: 'Trusted by millions of families worldwide' },
            ].map(item => (
              <div key={item.year} style={{
                background: 'rgba(255,255,255,0.05)', borderRadius: 12,
                padding: '20px 18px', border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--teal-400)', marginBottom: 6 }}>{item.year}</p>
                <p style={{ fontSize: 13, color: 'var(--neutral-400)', lineHeight: 1.5 }}>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--teal-500)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', color: '#fff', marginBottom: 16 }}>
            Ready to start your wellness journey?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
            Browse our full range and place your order today. We deliver anywhere in Kenya.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" style={{ background: '#fff', color: 'var(--teal-600)', padding: '14px 32px', borderRadius: 10, fontWeight: 600, fontSize: 16, display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'opacity 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.92'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Shop Now
            </Link>
            <Link to="/join" style={{ background: 'transparent', color: '#fff', padding: '13px 32px', borderRadius: 10, fontWeight: 500, fontSize: 16, border: '1.5px solid rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
