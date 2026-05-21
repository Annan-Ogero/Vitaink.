import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about',    label: 'About' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
        borderBottom: '1px solid var(--neutral-200)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'background 0.2s, box-shadow 0.2s',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', height: 68, gap: 32 }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'var(--teal-500)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 512 512" fill="none">
                <path d="M150 310 L256 140 L362 310" stroke="white" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M256 140 L256 390" stroke="white" strokeWidth="50" strokeLinecap="round" fill="none"/>
                <circle cx="362" cy="362" r="60" fill="white" opacity="0.92"/>
                <circle cx="362" cy="362" r="34" fill="#12a06a"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--neutral-900)', letterSpacing: '-0.01em' }}>
              VitaLink
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="nav-desktop" style={{ alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                padding: '8px 14px', borderRadius: 8, fontSize: 15,
                fontWeight: location.pathname === l.to ? 500 : 400,
                color: location.pathname === l.to ? 'var(--teal-600)' : 'var(--neutral-600)',
                background: location.pathname === l.to ? 'var(--teal-50)' : 'transparent',
                transition: 'background 0.15s, color 0.15s',
              }}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="nav-desktop" style={{ alignItems: 'center', gap: 10, flexShrink: 0, marginLeft: 16 }}>
            <Link to="/join" className="btn-outline" style={{ padding: '9px 20px', fontSize: 14 }}>
              Join Team
            </Link>

            {/* Cart button with badge */}
            <Link to="/cart" style={{
              position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 42, height: 42, borderRadius: 10,
              background: count > 0 ? 'var(--teal-50)' : 'transparent',
              border: `1.5px solid ${count > 0 ? 'var(--teal-300)' : 'var(--neutral-200)'}`,
              transition: 'all 0.15s',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={count > 0 ? 'var(--teal-600)' : 'var(--neutral-500)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {count > 0 && (
                <span style={{
                  position: 'absolute', top: -7, right: -7,
                  background: 'var(--teal-500)', color: '#fff',
                  fontSize: 10, fontWeight: 700,
                  width: 18, height: 18, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid #fff',
                }}>
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </Link>

            <Link to="/products" className="btn-primary" style={{ padding: '9px 20px', fontSize: 14 }}>
              Shop Now
            </Link>
          </div>

          {/* Mobile: cart badge + hamburger */}
          <div className="nav-mobile-btn" style={{ marginLeft: 'auto', alignItems: 'center', gap: 8 }}>
            <Link to="/cart" style={{
              position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 38, height: 38, borderRadius: 8,
              background: count > 0 ? 'var(--teal-50)' : 'transparent',
              border: `1.5px solid ${count > 0 ? 'var(--teal-300)' : 'var(--neutral-200)'}`,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={count > 0 ? 'var(--teal-600)' : 'var(--neutral-500)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {count > 0 && (
                <span style={{
                  position: 'absolute', top: -6, right: -6,
                  background: 'var(--teal-500)', color: '#fff',
                  fontSize: 9, fontWeight: 700,
                  width: 16, height: 16, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid #fff',
                }}>
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 8, display: 'flex', flexDirection: 'column', gap: 5,
              }}
            >
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--neutral-800)', borderRadius: 2, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--neutral-800)', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--neutral-800)', borderRadius: 2, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid var(--neutral-200)', padding: '16px 24px 24px' }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                display: 'block', padding: '12px 0',
                borderBottom: '1px solid var(--neutral-100)',
                fontSize: 16,
                color: location.pathname === l.to ? 'var(--teal-600)' : 'var(--neutral-800)',
                fontWeight: location.pathname === l.to ? 500 : 400,
              }}>
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link to="/join" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center' }}>Join Team</Link>
              <Link to="/products" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>Shop Now</Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
