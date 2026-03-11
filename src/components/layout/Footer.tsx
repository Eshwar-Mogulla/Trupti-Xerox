import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (sectionId: string | null) => {
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

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-black text-white py-16"
    >
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <h2 className="text-9xl font-bold text-white/5 whitespace-nowrap">TRUPTI ENTERPRISES</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(null);
                }}
                className="inline-block"
              >
                <img
                  src="/logo.jpeg"
                  alt="Trupti Enterprises Logo"
                  className="h-16 w-auto object-contain rounded-lg hover:scale-105 transition"
                />
              </Link>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2 hidden">TRUPTI</h3>
            <p className="text-gray-300 text-sm mb-4 mt-4">
              Your trusted partner for premium document and professional services with excellence and integrity.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiPhone />, link: 'tel:+918691917227' },
                { icon: <FaWhatsapp />, link: 'https://wa.me/918691917227' },
                { icon: <FiMail />, link: 'mailto:[EMAIL_ADDRESS]' },
                { icon: <FiMapPin />, link: 'https://www.google.com/maps/place/TRUPTI+ENTERPRISES/@19.1863664,73.0394328,712m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7bfa98d4a59c7:0x9c4b14930000000!8m2!3d19.1863664!4d73.0420077!16s%2Fg%2F11rdx438p8?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-lg hover:bg-primary hover:text-black transition"
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: null },
                { name: 'Services', id: 'services' },
                { name: 'Process', id: 'process' },
                { name: 'Contact Us', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-gray-300 hover:text-primary transition bg-transparent border-none cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Xerox & Printing', href: '/service/xerox' },
                { name: 'PAN Card', href: '/service/pan-card' },
                { name: 'Aadhar Update', href: '/service/aadhar-update' },
                { name: 'Passport Photo', href: '/service/passport-photo' }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-300 hover:text-primary transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="text-primary font-semibold mb-1">Phone</p>
                <a href="tel:+918691917227" className="hover:text-primary transition">
                  +91 86919 17227
                </a>
              </div>
              <div>
                <p className="text-primary font-semibold mb-1">Hours</p>
                <p>Mon - Sat: 10 AM - 7 PM</p>
                <p>Sun: 12 PM - 6 PM</p>
              </div>
              <div>
                <p className="text-primary font-semibold mb-1">Address</p>
                <p>Shop No 12, Siddhivinayak Plaza, Diva Shil Rd, Behind Gopal Dairy, Samdhan Nagar, Prashant Nagar, Sadguru Nagar, Diva</p>
                <p>Thane, Maharashtra 400612</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm flex flex-col items-center md:items-start space-y-1">
              <p>
                &copy; {currentYear} TRUPTI ENTERPRISES. All rights reserved.
              </p>
              <p>
                Developed by <span className="text-primary font-medium tracking-wide">GP Tech</span>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
