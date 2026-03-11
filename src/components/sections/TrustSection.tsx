import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiLock, FiZap, FiCamera, FiCheckCircle, FiUsers, FiX, FiDownload } from 'react-icons/fi'
import { MdGavel } from 'react-icons/md'

interface Certificate {
  id: number
  title: string
  image: string
}

const TrustSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

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

  const certificates: Certificate[] = [
    { id: 1, title: 'MSME Udyam Registration', image: '/1.png' },
    { id: 2, title: 'PAY1 Money Transfer Authorization', image: '/2.png' },
    { id: 3, title: 'Business Certification', image: '/3.png' }
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
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

        {/* Certificates Section */}
        <div className="mt-12 rounded-3xl bg-black p-8 sm:p-12 border border-yellow-400/20 relative overflow-hidden">
          {/* Futuristic Background Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Certificates Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 relative z-10"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Verified & Authorized Business</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Official registrations and certifications that ensure reliability and trust.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]"
              >
                {/* Image Preview Container */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-white/5 p-4 flex items-center justify-center">
                  <motion.div
                    className="w-full h-full relative rounded-lg overflow-hidden shadow-lg border border-white/10 group-hover:border-yellow-400/30 transition-colors"
                  >
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain filter drop-shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-white mb-4 flex-grow line-clamp-2">
                    {cert.title}
                  </h4>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-3 px-4 bg-primary/10 text-primary hover:bg-primary hover:text-black font-semibold rounded-xl text-sm transition-colors border border-primary/20 hover:border-primary flex items-center justify-center space-x-2"
                  >
                    <span>View Certificate</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Controls */}
              <div className="absolute -top-12 sm:-top-16 right-0 left-0 flex justify-between items-center w-full px-2">
                <h4 className="text-white font-semibold text-lg sm:text-xl truncate pr-4 drop-shadow-md">
                  {selectedCert.title}
                </h4>
                <div className="flex items-center space-x-3">
                  <a
                    href={selectedCert.image}
                    download={`${selectedCert.title.replace(/\s+/g, '-').toLowerCase()}.png`}
                    className="p-3 bg-white/10 hover:bg-primary hover:text-black text-white rounded-full transition-colors backdrop-blur-md border border-white/20 hover:border-primary shadow-lg"
                    title="Download Certificate"
                  >
                    <FiDownload className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-3 bg-white/10 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-md border border-white/20 hover:border-red-500 shadow-lg"
                    title="Close Viewer"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Built Image */}
              <div className="bg-white/5 p-2 sm:p-4 rounded-2xl w-full flex justify-center items-center shadow-2xl border border-white/10 overflow-hidden relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 cursor-zoom-in"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default TrustSection
