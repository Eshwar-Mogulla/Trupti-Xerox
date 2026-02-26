import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-black text-white py-16"
    >
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <h2 className="text-9xl font-bold text-white/5 whitespace-nowrap">TRUPTI XEROX</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">TRUPTI</h3>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for premium document and professional services with excellence and integrity.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiPhone />, link: 'tel:+919999999999' },
                { icon: <FaWhatsapp />, link: 'https://wa.me/919999999999' },
                { icon: <FiMail />, link: 'mailto:info@trupti-xerox.com' },
                { icon: <FiMapPin />, link: '#' },
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
              {['Home', 'Services', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-primary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Xerox & Printing', 'PAN & Aadhar', 'Lamination', 'Passport Photo'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-primary transition">
                    {service}
                  </a>
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
                <a href="tel:+919999999999" className="hover:text-primary transition">
                  +91 9999 999 999
                </a>
              </div>
              <div>
                <p className="text-primary font-semibold mb-1">Hours</p>
                <p>Mon - Sat: 10 AM - 7 PM</p>
                <p>Sun: 12 PM - 6 PM</p>
              </div>
              <div>
                <p className="text-primary font-semibold mb-1">Address</p>
                <p>City Center, Main Street</p>
                <p>Your City, PIN Code</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} TRUPTI XEROX. All rights reserved.
            </p>
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
