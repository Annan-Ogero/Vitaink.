import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// Shipping logic
const calculateShipping = (location) => {
  const nairobi = ['nairobi', 'westlands', 'karen', 'kilimani', 'lavington', 'parklands', 'kasarani', 'embakasi', 'langata', 'ruaka', 'kiambu', 'rongai']
  if (nairobi.some(n => location.toLowerCase().includes(n))) {
    return { fee: 250, method: 'Motorbike rider — same-day / next-day' }
  }
  return { fee: 450, method: 'Bus parcel service — 24–48 hours' }
}

const EMAILJS_SERVICE_ID  = 'service_ltgs5dv'   // Replace at launch
const EMAILJS_TEMPLATE_ID = 'template_t4x2459'  // Replace at launch
const EMAILJS_PUBLIC_KEY  = 'gMPjngKnm0diVJ8iV'   // Replace at launch

export default function CartPage() {
  const { items, removeFromCart, updateQty, total, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', phone: '', location: '', notes: '' })
  const [shipping, setShipping] = useState(null)
  const [step, setStep] = useState('cart') // 'cart' | 'checkout' | 'success'
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleLocationBlur = () => {
    if (form.location.trim()) setShipping(calculateShipping(form.location))
  }

  const orderTotal = total + (shipping?.fee || 0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.location) { setError('Please fill in all required fields.'); return }
    if (!shipping) { setError('Please enter your location to calculate shipping.'); return }
    setError('')
    setSubmitting(true)

    const orderLines = items.map(i => `• ${i.name} x${i.qty} = KES ${(i.price * i.qty).toLocaleString()}`).join('\n')
    const orderText = `
NEW ORDER — VitaLink

Customer: ${form.name}
Phone: ${form.phone}
Location: ${form.location}
Notes: ${form.notes || 'None'}

ORDER ITEMS:
${orderLines}

Subtotal:  KES ${total.toLocaleString()}
Shipping:  KES ${shipping.fee} (${shipping.method})
TOTAL:     KES ${orderTotal.toLocaleString()}

Date: ${new Date().toLocaleString('en-KE')}
    `.trim()

    try {
      // Send via EmailJS — replace service/template/key at launch
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          customer_name:  form.name,
          customer_phone: form.phone,
          customer_location: form.location,
          order_summary:  orderText,
          order_total:    `KES ${orderTotal.toLocaleString()}`,
          shipping_method: shipping.method,
        },
        EMAILJS_PUBLIC_KEY
      )
      clearCart()
      setStep('success')
    } catch (err) {
      setError('Failed to send order. Please try again or contact us directly on WhatsApp.')
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  // Empty cart
  if (items.length === 0 && step !== 'success') return (
    <div style={{ padding: '80px 0', textAlign: 'center' }}>
      <p style={{ fontSize: 48, marginBottom: 16 }}>🛒</p>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 12 }}>Your cart is empty</h2>
      <p style={{ color: 'var(--neutral-600)', marginBottom: 28 }}>Browse our products and add items to your cart.</p>
      <Link to="/products" className="btn-primary">Browse products</Link>
    </div>
  )

  // Success screen
  if (step === 'success') return (
    <div style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 560 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--teal-50)', border: '2px solid var(--teal-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 36 }}>✓</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 36, marginBottom: 16, color: 'var(--teal-600)' }}>Order received!</h1>
        <p style={{ fontSize: 16, color: 'var(--neutral-600)', lineHeight: 1.8, marginBottom: 32 }}>
          Thank you, <strong>{form.name}</strong>. Your order has been received and we will reach you on <strong>{form.phone}</strong> to confirm and arrange delivery.
        </p>
        <div style={{ background: 'var(--neutral-50)', borderRadius: 12, padding: '20px 24px', marginBottom: 32, textAlign: 'left', border: '1px solid var(--neutral-200)' }}>
          <p style={{ fontWeight: 500, marginBottom: 8 }}>Delivery info</p>
          <p style={{ fontSize: 14, color: 'var(--neutral-600)' }}>📍 {form.location}</p>
          <p style={{ fontSize: 14, color: 'var(--neutral-600)', marginTop: 4 }}>🚚 {shipping?.method}</p>
        </div>
        <Link to="/products" className="btn-primary">Continue shopping</Link>
      </div>
    </div>
  )

  return (
    <div style={{ padding: '48px 0 80px', background: 'var(--neutral-50)', minHeight: '80vh' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32, alignItems: 'start' }}>

        {/* Left: Items + Form */}
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, marginBottom: 28 }}>Your cart</h1>

          {/* Cart items */}
          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--neutral-200)', marginBottom: 28, overflow: 'hidden' }}>
            {items.map((item, i) => (
              <div key={item.id} style={{
                display: 'flex', gap: 16, padding: '20px 24px', alignItems: 'center',
                borderBottom: i < items.length - 1 ? '1px solid var(--neutral-100)' : 'none',
              }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: 'var(--teal-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 }}>
                  {item.placeholder}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 500, fontSize: 15, marginBottom: 2 }}>{item.name}</p>
                  <p style={{ fontSize: 13, color: 'var(--neutral-400)' }}>KES {item.price.toLocaleString()} / {item.unit}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--neutral-200)', background: 'none', cursor: 'pointer', fontSize: 16 }}>−</button>
                  <span style={{ width: 24, textAlign: 'center', fontWeight: 500 }}>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--neutral-200)', background: 'none', cursor: 'pointer', fontSize: 16 }}>+</button>
                </div>
                <p style={{ minWidth: 96, textAlign: 'right', fontWeight: 500 }}>KES {(item.price * item.qty).toLocaleString()}</p>
                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--neutral-400)', fontSize: 18, padding: 4 }}>×</button>
              </div>
            ))}
          </div>

          {/* Checkout form */}
          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--neutral-200)', padding: '28px 28px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 24 }}>Delivery details</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Full name *</label>
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your full name"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Phone number *</label>
                  <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="07XX XXX XXX"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none' }} />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Delivery location (town / estate) *</label>
                <input value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                  onBlur={handleLocationBlur}
                  placeholder="e.g. Westlands, Nairobi or Nakuru"
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none' }} />
                {shipping && (
                  <p style={{ marginTop: 6, fontSize: 13, color: 'var(--teal-600)' }}>
                    ✓ {shipping.method} — KES {shipping.fee}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--neutral-700)', display: 'block', marginBottom: 6 }}>Order notes (optional)</label>
                <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  placeholder="Any specific instructions for your order..."
                  rows={3}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid var(--neutral-200)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none', resize: 'vertical' }} />
              </div>

              {error && <p style={{ color: '#dc2626', fontSize: 14, marginBottom: 16, background: '#fef2f2', padding: '10px 14px', borderRadius: 8 }}>{error}</p>}

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '15px', opacity: submitting ? 0.7 : 1 }} disabled={submitting}>
                {submitting ? 'Placing order...' : `Place order — KES ${orderTotal.toLocaleString()}`}
              </button>

              <p style={{ fontSize: 12, color: 'var(--neutral-400)', textAlign: 'center', marginTop: 12 }}>
                We will call or WhatsApp you to confirm your order before dispatch.
              </p>
            </form>
          </div>
        </div>

        {/* Right: Order summary */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--neutral-200)', padding: '24px', position: 'sticky', top: 90 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 20 }}>Order summary</h3>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 10, color: 'var(--neutral-700)' }}>
              <span>{item.name} ×{item.qty}</span>
              <span style={{ fontWeight: 500 }}>KES {(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--neutral-100)', marginTop: 16, paddingTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 8, color: 'var(--neutral-600)' }}>
              <span>Subtotal</span>
              <span>KES {total.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 16, color: 'var(--neutral-600)' }}>
              <span>Shipping</span>
              <span>{shipping ? `KES ${shipping.fee}` : 'Enter location'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 16 }}>
              <span>Total</span>
              <span style={{ color: 'var(--teal-600)' }}>KES {orderTotal.toLocaleString()}</span>
            </div>
          </div>
          <div style={{ marginTop: 20, padding: '12px 14px', background: 'var(--teal-50)', borderRadius: 10, fontSize: 13, color: 'var(--teal-700)' }}>
            <p style={{ fontWeight: 500, marginBottom: 4 }}>Payment on delivery</p>
            <p>Pay cash or M-Pesa when your order arrives.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
