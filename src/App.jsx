import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import JoinPage from './pages/JoinPage'
import ContactPage from './pages/ContactPage'
import { CartProvider } from './context/CartContext'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: 68 }}>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/"           element={<HomePage />} />
            <Route path="/products"   element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart"       element={<CartPage />} />
            <Route path="/about"      element={<AboutPage />} />
            <Route path="/join"       element={<JoinPage />} />
            <Route path="/contact"    element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
    </HelmetProvider>
  )
}
