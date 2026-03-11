import { motion } from 'framer-motion'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingButtons() {
  const actions = [
    {
      icon: <FiPhone />,
      label: 'Call',
      link: 'tel:+918691917227',
      color: 'bg-accent',
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      link: 'https://wa.me/918691917227',
      color: 'bg-green-500',
    },
    {
      icon: <FiMapPin />,
      label: 'Directions',
      link: 'https://www.google.com/maps/place/TRUPTI+ENTERPRISES/@19.1863664,73.0394328,712m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7bfa98d4a59c7:0x9c4b14930000000!8m2!3d19.1863664!4d73.0420077!16s%2Fg%2F11rdx438p8?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D',
      color: 'bg-blue-500',
    },
  ]

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-black/10 shadow-2xl z-40">
        <div className="flex items-center justify-around px-4 py-3">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.link}
              target={action.link.startsWith('https') ? '_blank' : undefined}
              rel={action.link.startsWith('https') ? 'noopener noreferrer' : undefined}
              className={`flex flex-col items-center space-y-1 ${action.color} text-white px-4 py-2 rounded-lg font-medium text-sm transition hover:opacity-90`}
            >
              <span className="text-xl">{action.icon}</span>
              <span className="text-xs">{action.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/918691917227"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="hidden md:flex fixed bottom-8 right-8 w-14 h-14 bg-green-500 text-white rounded-full items-center justify-center text-2xl shadow-2xl hover:shadow-3xl z-40 cursor-pointer"
      >
        <FaWhatsapp />
      </motion.a>

      {/* Desktop Call Floating Button */}
      <motion.a
        href="tel:+918691917227"
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="hidden md:flex fixed bottom-28 right-8 w-14 h-14 bg-accent text-white rounded-full items-center justify-center text-2xl shadow-2xl hover:shadow-3xl z-40 cursor-pointer"
      >
        <FiPhone />
      </motion.a>
    </>
  )
}
