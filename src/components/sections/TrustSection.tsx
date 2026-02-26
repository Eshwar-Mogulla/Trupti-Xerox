import { motion } from 'framer-motion'
import { FiLock, FiZap, FiCamera, FiCheckCircle, FiUsers } from 'react-icons/fi'
import { MdGavel } from 'react-icons/md'

const TrustSection = () => {
  const trustPoints = [
    {
      icon: <FiLock className="w-8 h-8" />,
      title: 'Secure Data Handling',
      description: 'Your information is encrypted and protected with highest security standards.'
    },
    {
      icon: <MdGavel className="w-8 h-8" />,
      title: 'Government Service Assistance',
      description: 'Authorized assistance with government services and compliance requirements.'
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Fast Processing',
      description: 'Quick turnaround times without compromising on quality and accuracy.'
    },
    {
      icon: <FiCamera className="w-8 h-8" />,
      title: 'CCTV Monitored',
      description: 'Complete premises monitored for your peace of mind and security.'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Customer Confidentiality',
      description: 'Your privacy is our priority with strict confidentiality assurance.'
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Every service undergoes thorough quality check before delivery.'
    },
  ]

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-heading">Why Trust Us</h2>
          <p className="text-xl text-gray-600">Excellence, security, and reliability in every interaction</p>
        </motion.div>

        {/* Trust Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trustPoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-black/5 rounded-xl hover:border-primary/30 transition"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-primary mb-4 inline-block"
              >
                {point.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection
