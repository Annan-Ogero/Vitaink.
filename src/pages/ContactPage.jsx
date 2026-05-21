import { useState } from 'react'
import SEO from '../components/SEO'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleWhatsApp = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(`Hi VitaLink!\n\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`)
    window.open(`https://wa.me/254143276663?text=${msg}`, '_blank') // Replace at launch
  }

  return (
    <div>
      <SEO
        title="Contact VitaLink — Order NeoLife Products or Get Support"
        description="Contact VitaLink to place a NeoLife product order, ask questions, or get delivery information. Reach us on WhatsApp for the fastest response. Delivering across Kenya."
        path="/contact"
      />
      {/* Header */}
      <section style={{ padding: '72px 0 56px', background: 'linear-gradient(135deg, var(--teal-50), #fff)', borderBottom: '1px solid var(--neutral-100)' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <p className="section-label">Reach us</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 52px)', marginBottom: 16 }}>Contact us</h1>
          <p style={{ fontSize: 17, color: 'var(--neutral-600)', lineHeight: 1.8 }}>
            Have a question about a product, your order, or anything else? We are reachable and responsive. 
            The fastest way to reach us is WhatsApp.
          </p>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 32 }}>Ways to reach us</h2>

            {[
              { icon: '💬', label: 'WhatsApp (fastest)', value: '+254 143 276 663', note: 'Typically responds within a few hours', action: () => window.open('https://wa.me/254143276663', '_blank') },
              { icon: '📧', label: 'Email', value: 'annanogero@gmail.com', note: 'For non-urgent enquiries', action: () => window.location.href = 'mailto:annanogero@gmail.com' },
            ].map(c => (
              <div key={c.label} onClick={c.action} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                padding: '20px', borderRadius: 14, border: '1px solid var(--neutral-200)',
                cursor: 'pointer', marginBottom: 14, transition: 'border-color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal-300)'; e.currentTarget.style.background = 'var(--teal-50)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.background = '#fff' }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 4 }}>{c.label}</p>
                  <p style={{ fontWeight: 500, fontSize: 16, color: 'var(--neutral-900)', marginBottom: 2 }}>{c.value}</p>
                  <p style={{ fontSize: 13, color: 'var(--neutral-400)' }}>{c.note}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 28, padding: '18px 20px', background: 'var(--neutral-50)', borderRadius: 12, border: '1px solid var(--neutral-200)' }}>
              <p style={{ fontWeight: 500, fontSize: 14, marginBottom: 8 }}>Delivery coverage</p>
              <p style={{ fontSize: 14, color: 'var(--neutral-600)', lineHeight: 1.7 }}>
                We deliver across Kenya. Nairobi customers receive same-day or next-day delivery. 
                Upcountry orders are dispatched via bus parcel within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Quick message form */}
          <div style={{ background: 'var(--neutral-50)', borderRadius: 20, padding: '32px', border: '1px solid var(--neutral-200)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 24 }}>Send a quick message</h3>
            <form onSubmit={handleWhatsApp}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Your name</label>
                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Your full name"
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 10, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none', background: '#fff' }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Phone number</label>
                <input required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  placeholder="07XX XXX XXX"
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 10, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none', background: '#fff' }} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Message</label>
                <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="What would you like to ask or order?"
                  rows={4}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 10, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none', resize: 'vertical', background: '#fff' }} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '13px' }}>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
