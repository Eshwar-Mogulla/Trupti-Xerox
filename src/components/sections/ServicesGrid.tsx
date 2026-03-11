import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../../utils/services'

const ServicesGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-heading">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your document and service needs, delivered with excellence and professionalism.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <Link key={service.id} to={`/service/${service.id}`}>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(195, 38, 27, 0.2)',
                }}
                whileTap={{ scale: 0.98 }}
                className="h-full p-6 bg-white border-2 border-black/10 rounded-xl hover:border-primary/50 transition cursor-pointer group"
              >
                <motion.div
                  className="w-full h-48 mb-4 overflow-hidden rounded-lg"
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-primary transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.shortDesc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs bg-primary text-black px-3 py-1 rounded-full font-medium">
                    {service.charges && service.charges.length > 0 ? service.charges[0] : 'Contact for pricing'}
                  </span>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-primary font-bold"
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid
