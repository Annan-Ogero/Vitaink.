import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import sellerPhoto from '../data/sellerPhoto'

const milestones = [
  { year: '1958', title: 'Founded in California', desc: 'NeoLife started with a mission to bring whole-food nutrition to families.' },
  { year: '1970s', title: 'First international markets', desc: 'Expanded beyond the US, bringing science-backed nutrition to the world.' },
  { year: '1990s', title: 'Africa expansion', desc: 'NeoLife entered African markets, changing lives across the continent.' },
  { year: '2000s', title: 'Organic skincare launched', desc: 'The Nutriance Organic line brought certified marine botanicals to the range.' },
  { year: '2010s', title: '50+ countries', desc: 'NeoLife became one of the most globally distributed nutrition brands.' },
  { year: 'Today', title: 'Trusted by millions', desc: 'Generations of families rely on NeoLife for daily wellness worldwide.' },
]

const values = [
  { icon: '🔬', title: 'Science-backed', desc: 'Every formula is developed with leading research institutions and peer-reviewed for efficacy.' },
  { icon: '🌱', title: 'Whole-food sourced', desc: 'NeoLife uses real food concentrates — not synthetic isolates — wherever possible.' },
  { icon: '🚫', title: 'Non-GMO', desc: 'No genetically modified ingredients. No artificial colours, sweeteners, or preservatives.' },
  { icon: '🌍', title: 'Global trust', desc: 'Operating in over 50 countries for 65+ years — the kind of track record that speaks for itself.' },
]

export default function AboutPage() {
  return (
    <div>
      <SEO
        title="About VitaLink — Authorised NeoLife Distributor in Kenya"
        description="VitaLink is an authorised NeoLife Independent Promoter in Kenya. Learn about NeoLife's 65-year history, science-backed formulas, and why we bring genuine nutrition products to Kenyan households."
        path="/about"
      />
      {/* Header */}
      <section style={{ padding: '72px 0 56px', background: 'linear-gradient(135deg, var(--teal-50), #fff)', borderBottom: '1px solid var(--neutral-100)' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <p className="section-label">Our story</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 52px)', marginBottom: 20 }}>
            Bringing world-class nutrition to Kenya
          </h1>
          <p style={{ fontSize: 17, color: 'var(--neutral-600)', lineHeight: 1.8 }}>
            VitaLink is an authorised NeoLife Independent Promoter based in Kenya. Our mission is simple — 
            to make genuine, science-backed nutrition accessible to every Kenyan household, 
            with honest information, reliable delivery, and real customer support.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <p className="section-label">Who we are</p>
            <h2 className="section-title">A real person. A real business.</h2>
            <p style={{ fontSize: 16, color: 'var(--neutral-600)', lineHeight: 1.8, marginBottom: 16 }}>
              VitaLink is founded and run by Annan Ogero — an authorised NeoLife Independent Promoter
              based in Kenya. Every product you order comes directly through the official NeoLife network,
              at genuine prices, with full product authenticity guaranteed.
            </p>
            <p style={{ fontSize: 16, color: 'var(--neutral-600)', lineHeight: 1.8, marginBottom: 28 }}>
              Annan personally uses and believes in the products sold through VitaLink. The goal is simple —
              to make world-class nutrition accessible to every Kenyan household, with honest information,
              reliable delivery, and real support before and after every order.
            </p>
            <Link to="/contact" className="btn-primary">Get in touch</Link>
          </div>

          {/* Seller photo */}
          <div style={{
            borderRadius: 20, overflow: 'hidden', height: 380,
            border: '1px solid var(--neutral-200)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}>
            <img
              src={sellerPhoto}
              alt="VitaLink founder"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </section>

      {/* NeoLife values */}
      <section style={{ padding: '72px 0', background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p className="section-label">Why NeoLife</p>
            <h2 className="section-title">What makes these products different</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {values.map((v, i) => (
              <div key={v.title} className="card fade-up" style={{ padding: '28px 24px', animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <span style={{ fontSize: 32, display: 'block', marginBottom: 14 }}>{v.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--neutral-600)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NeoLife timeline */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p className="section-label">65 years of history</p>
            <h2 className="section-title">The NeoLife story</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Six decades of consistent science, integrity, and global growth.
            </p>
          </div>

          <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: 'var(--teal-100)' }} />

            {milestones.map((m, i) => (
              <div key={m.year} className="fade-up" style={{ display: 'flex', gap: 28, marginBottom: 36, animationDelay: `${i * 0.1}s`, opacity: 0, position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--teal-500)', border: '3px solid var(--teal-100)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1,
                }}>
                  <span style={{ fontSize: 10, color: '#fff', fontWeight: 700 }}>{m.year.slice(0, 2)}</span>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--teal-600)' }}>{m.year}</span>
                    <h3 style={{ fontSize: 16, fontFamily: 'var(--font-display)' }}>{m.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--neutral-600)', lineHeight: 1.65 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--neutral-900)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: 16 }}>
            Ready to experience NeoLife?
          </h2>
          <p style={{ color: 'var(--neutral-400)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Browse our full product catalogue and place your first order today. Delivery anywhere in Kenya.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn-primary">Browse products</Link>
            <Link to="/join" className="btn-outline" style={{ color: 'var(--teal-400)', borderColor: 'var(--teal-400)' }}>Join our team</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
