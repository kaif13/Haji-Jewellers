import { useEffect, useLayoutEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Collections from './pages/Collections'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true })
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [lenisRef, pathname])

  return null
}

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      return () => {
        window.history.scrollRestoration = previousScrollRestoration
      }
    }

    const lenis = new Lenis({
      duration: 1.35,
      easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.75,
      touchMultiplier: 1,
    })
    lenisRef.current = lenis

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisRef.current = null
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-clip bg-ink text-ivory">
      <ScrollToTop lenisRef={lenisRef} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
