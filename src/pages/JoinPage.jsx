import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const perks = [
  { icon: '💰', title: 'Earn on every sale', desc: 'Receive a commission on every product you sell. No ceiling on earnings.' },
  { icon: '📦', title: 'No holding stock', desc: 'Products are ordered on demand. No need to pre-purchase or store inventory.' },
  { icon: '📱', title: 'Sell from anywhere', desc: 'WhatsApp, Instagram, in person — sell however works for your lifestyle.' },
  { icon: '🌍', title: 'Trusted global brand', desc: '65 years of NeoLife behind you. Customers trust what they already know.' },
  { icon: '📈', title: 'Build a team', desc: 'Recruit others and earn from their sales too. Your network, your income.' },
  { icon: '🎓', title: 'Full support', desc: 'We guide you through every step — product knowledge, selling, and logistics.' },
]

export default function JoinPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens WhatsApp with the form details pre-filled for now
    const msg = encodeURIComponent(
      `Hi, I am interested in joining the VitaLink team as a NeoLife distributor.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.open(`https://wa.me/254143276663?text=${msg}`, '_blank') // Replace phone number at launch
    setSent(true)
  }

  return (
    <div>
      <SEO
        title="Join the VitaLink Team — Become a NeoLife Distributor in Kenya"
        description="Become an authorised NeoLife distributor through VitaLink. Sell genuine wellness products, earn commissions on every sale, and build your own income across Kenya. No stock holding required."
        path="/join"
      />
      {/* Header */}
      <section style={{ padding: '72px 0 56px', background: 'linear-gradient(135deg, var(--teal-50), #fff)', borderBottom: '1px solid var(--neutral-100)' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <p className="section-label">Opportunity</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 52px)', marginBottom: 20 }}>
            Join the VitaLink team
          </h1>
          <p style={{ fontSize: 17, color: 'var(--neutral-600)', lineHeight: 1.8 }}>
            Become an authorised NeoLife distributor through VitaLink. 
            Sell genuine products, build your own income, and be part of a global wellness network 
            that has been trusted for over 65 years.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p className="section-label">What you get</p>
            <h2 className="section-title">Why join as a distributor</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {perks.map((p, i) => (
              <div key={p.title} className="card fade-up" style={{ padding: '26px 22px', animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <span style={{ fontSize: 30, display: 'block', marginBottom: 12 }}>{p.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--neutral-600)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest form */}
      <section style={{ padding: '72px 0', background: 'var(--neutral-50)' }}>
        <div className="container" style={{ maxWidth: 580 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p className="section-label">Get started</p>
            <h2 className="section-title">Express your interest</h2>
            <p style={{ fontSize: 15, color: 'var(--neutral-600)' }}>
              Fill in your details and we will get back to you within 24 hours to walk you through the next steps.
            </p>
          </div>

          {sent ? (
            <div style={{ background: '#fff', borderRadius: 20, padding: '40px', textAlign: 'center', border: '1px solid var(--neutral-200)' }}>
              <span style={{ fontSize: 48, display: 'block', marginBottom: 16 }}>✓</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginBottom: 12, color: 'var(--teal-600)' }}>Interest sent!</h3>
              <p style={{ color: 'var(--neutral-600)', marginBottom: 24 }}>We have opened WhatsApp with your message. We will be in touch shortly.</p>
              <Link to="/" className="btn-outline">Back to home</Link>
            </div>
          ) : (
            <div style={{ background: '#fff', borderRadius: 20, padding: '36px', border: '1px solid var(--neutral-200)' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Full name *</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your full name"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none' }} />
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Phone number *</label>
                  <input required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="07XX XXX XXX"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none' }} />
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Email address</label>
                  <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com" type="email"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none' }} />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Tell us about yourself (optional)</label>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Why are you interested? Do you have a sales background? Any questions?"
                    rows={4}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none', resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '14px' }}>
                  Send via WhatsApp
                </button>
                <p style={{ fontSize: 12, color: 'var(--neutral-400)', textAlign: 'center', marginTop: 10 }}>
                  This will open WhatsApp with your details pre-filled.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
