import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { services } from '../utils/services'

function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const service = services.find((s) => s.id === id)
  const [activeTab, setActiveTab] = useState<'documents' | 'faq'>('documents')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-yellow-400 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-black mb-2"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-black/80"
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{service.fullDesc}</p>
        </motion.div>

        {/* Key Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="p-6 bg-primary/10 border-2 border-primary/30 rounded-lg">
            <h3 className="text-sm font-bold text-primary mb-2">PROCESSING TIME</h3>
            <p className="text-2xl font-bold text-black">{service.processingTime}</p>
          </div>
          {service.charges && service.charges.length > 0 && (
            <div className="p-6 bg-accent/10 border-2 border-accent/30 rounded-lg">
              <h3 className="text-sm font-bold text-accent mb-2">CHARGES</h3>
              <div className="space-y-1">
                {service.charges.slice(0, 1).map((charge, idx) => (
                  <p key={idx} className="text-lg font-bold text-black">
                    {charge}
                  </p>
                ))}
              </div>
              {service.charges.length > 1 && <p className="text-xs text-gray-500 mt-2">and more...</p>}
            </div>
          )}
          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg">
            <h3 className="text-sm font-bold text-blue-600 mb-2">GET STARTED</h3>
            <a
              href="tel:+918691917227"
              className="text-2xl font-bold text-black hover:text-blue-600 transition"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex gap-4 border-b-2 border-gray-200 mb-8">
            {['documents', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`pb-4 px-4 font-bold text-lg transition relative ${activeTab === tab ? 'text-primary' : 'text-gray-600 hover:text-black'
                  }`}
              >
                {tab === 'documents' ? 'Required Documents' : 'FAQ'}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'documents' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {service.documents.map((doc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg border-l-4 border-primary flex items-center"
                >
                  <span className="text-xl mr-3">📄</span>
                  <span className="text-black font-medium">{doc}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {service.faq.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-black hover:bg-primary/10 transition flex items-center justify-between"
                  >
                    {item.question}
                    <motion.span
                      animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                      className="text-primary"
                    >
                      ▼
                    </motion.span>
                  </button>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 py-3 bg-white text-gray-600 border-t border-gray-200"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 p-8 bg-black text-white rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918691917227"
              className="px-8 py-3 bg-primary text-black font-bold rounded-lg hover:bg-yellow-400 transition"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918691917227"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Back Button */}
      <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition"
        >
          ← Back to Services
        </button>
      </motion.div>
    </div>
  )
}

export default ServiceDetailPage
