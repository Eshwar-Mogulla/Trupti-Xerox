import { motion } from 'framer-motion'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const CTASection = () => {
  const actions = [
    {
      icon: <FiPhone />,
      label: 'Call Now',
      description: 'Get instant answers to your questions',
      link: 'tel:+918691917227',
      color: 'bg-accent',
    },
    {
      icon: <FiMapPin />,
      label: 'Get Directions',
      description: 'Visit our center in your area',
      link: 'https://www.google.com/maps/place/TRUPTI+ENTERPRISES/@19.1863664,73.0394328,712m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7bfa98d4a59c7:0x9c4b14930000000!8m2!3d19.1863664!4d73.0420077!16s%2Fg%2F11rdx438p8?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D',
      color: 'bg-blue-500',
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      description: 'Message us for quick assistance',
      link: 'https://wa.me/918691917227',
      color: 'bg-green-500',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Reach out to us today and experience premium service delivery
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, idx) => (
            <motion.a
              key={idx}
              href={action.link}
              target={action.link.startsWith('https') ? '_blank' : undefined}
              rel={action.link.startsWith('https') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-8 ${action.color} text-white rounded-xl shadow-lg hover:shadow-2xl transition text-center group`}
            >
              <motion.div className="text-5xl mb-4 group-hover:scale-110 transition" whileHover={{ rotate: 10 }}>
                {action.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">{action.label}</h3>
              <p className="text-white/80">{action.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-gray-400 mb-2">Working Hours</p>
              <p className="text-white font-bold">Mon - Sat: 10 AM - 7 PM</p>
              <p className="text-gray-300">Sun: 12 PM - 6 PM</p>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Phone</p>
              <a href="tel:+918691917227" className="text-primary font-bold hover:text-yellow-400 transition text-lg">
                +91 86919 17227
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Location</p>
              <p className="text-white font-bold">CSHOP NO 12, SIDDHIVINAYAK PLAZA, Diva Shil Rd, behind GOPAL DAIRY, Samdhan Nagar, Prashant Nagar, Sadguru Nagar, Diva</p>
              <p className="text-gray-300">Thane, Maharashtra 400612</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
