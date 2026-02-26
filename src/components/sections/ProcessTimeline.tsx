import { motion } from 'framer-motion'

const ProcessTimeline = () => {
  const steps = [
    {
      number: '1',
      title: 'Submit Documents',
      description: 'Provide all necessary documents and information required for your service.'
    },
    {
      number: '2',
      title: 'Verification',
      description: 'Our team verifies all documents for accuracy and compliance.'
    },
    {
      number: '3',
      title: 'Processing',
      description: 'We process your request through proper channels efficiently.'
    },
    {
      number: '4',
      title: 'Completion',
      description: 'Receive your completed service within the promised timeframe.'
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-heading">Our Process</h2>
          <p className="text-xl text-gray-600">Simple, transparent, and efficient service delivery</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className={`${idx % 2 === 0 ? 'md:pt-0' : 'md:pt-32'}`}
              >
                {/* Step Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 mx-auto mb-6 bg-primary text-black rounded-full flex items-center justify-center font-bold text-3xl shadow-lg hover:shadow-xl transition"
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-black">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
