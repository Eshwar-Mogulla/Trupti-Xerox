import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (sectionId: string | null) => {
    setIsOpen(false)

    const scrollToSection = (id: string | null) => {
      if (id) {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return
        }
      }
      // fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (location.pathname !== '/') {
      navigate('/')
      // wait for route change then scroll
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 300)
    } else {
      scrollToSection(sectionId)
    }
  }

  const navItems = [
    { name: 'Home', id: null },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-yellow-200/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-black group-hover:scale-110 transition">
              T
            </div>
            <span className="font-bold text-xl text-black hidden sm:inline">TRUPTI XEROX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="text-black hover:text-primary font-medium transition duration-300 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+919999999999"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-primary text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Call Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <div className={`h-0.5 w-6 bg-black transition transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`h-0.5 w-6 bg-black transition ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 w-6 bg-black transition transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-black/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-primary/10 rounded-lg transition cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="tel:+919999999999"
                className="block w-full px-4 py-2 bg-primary text-black font-bold rounded-lg text-center transition"
                onClick={() => setIsOpen(false)}
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
