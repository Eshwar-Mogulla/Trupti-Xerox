import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingButtons from './components/layout/FloatingButtons'
import HomePage from './pages/HomePage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import SplashScreen from './components/common/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Unconditionally show the splash screen for 6.5 seconds on every load/reload
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 6500)

    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <div className="bg-white text-black overflow-hidden relative min-h-screen">
        <AnimatePresence mode="wait" onExitComplete={() => window.dispatchEvent(new Event('splashComplete'))}>
          {showSplash && <SplashScreen key="splash" />}
        </AnimatePresence>

        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:id" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App
