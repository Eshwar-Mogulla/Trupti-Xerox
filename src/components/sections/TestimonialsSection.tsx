import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiUser, FiStar, FiSend } from 'react-icons/fi'

const TestimonialsSection = () => {
  const initialTestimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'Excellent service! The team was very professional and helped me complete all my government document work efficiently. Highly recommended!',
      rating: 5,
      avatar: <FiUser />,
    },
    {
      name: 'Priya Sharma',
      role: 'Student',
      content: 'Got my passport photos done perfectly. The staff was friendly and the quality was fantastic. Will definitely come back!',
      rating: 5,
      avatar: <FiUser />,
    },
    {
      name: 'Amit Patel',
      role: 'Freelancer',
      content: 'Used their banking services and document assistance. Everything was smooth and hassle-free. Great prices too!',
      rating: 5,
      avatar: <FiUser />,
    },
    {
      name: 'Sneha Gupta',
      role: 'Professional',
      content: 'Outstanding printing quality and quick turnaround time. They handled my brochure order perfectly. 5 stars!',
      rating: 5,
      avatar: <FiUser />,
    },
  ]

  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [current, setCurrent] = useState(0)
  const [formData, setFormData] = useState({ name: '', feedback: '', rating: 5 })
  const [submitted, setSubmitted] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    // Load saved feedback from localStorage
    const savedFeedback = localStorage.getItem('customerFeedback')
    if (savedFeedback) {
      try {
        const parsedFeedback = JSON.parse(savedFeedback)
        const feedbackTestimonials = parsedFeedback.map((fb: any) => ({
          name: fb.name,
          role: 'Customer',
          content: fb.feedback,
          rating: fb.rating,
          avatar: <FiUser />,
        }))
        setTestimonials([...initialTestimonials, ...feedbackTestimonials])
      } catch (e) {
        console.error('Error loading feedback:', e)
      }
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const handleDotClick = (idx: number) => {
    setCurrent(idx)
  }

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Save to localStorage
    const existingFeedback = JSON.parse(localStorage.getItem('customerFeedback') || '[]')
    const newFeedback = {
      name: formData.name,
      feedback: formData.feedback,
      rating: formData.rating,
      timestamp: new Date().toISOString(),
    }
    existingFeedback.push(newFeedback)
    localStorage.setItem('customerFeedback', JSON.stringify(existingFeedback))

    // Add to testimonials immediately
    const newTestimonial = {
      name: formData.name,
      role: 'Customer',
      content: formData.feedback,
      rating: formData.rating,
      avatar: <FiUser />,
    }
    setTestimonials([...testimonials, newTestimonial])

    // Show success message
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', feedback: '', rating: 5 })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-heading">Customer Feedback & Reviews</h2>
          <p className="text-xl text-gray-600 mb-8">Hear from our satisfied clients and share your experience</p>
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition"
          >
            {showAll ? 'Back to Carousel' : 'See All Feedback'}
          </motion.button>
        </motion.div>

        {showAll ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-lg border-2 border-primary/20 hover:border-primary/50 transition"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FiStar key={i} className="text-lg text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 line-clamp-4">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-black">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Testimonials Carousel */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-8 text-heading">What Customers Say</h3>

            {/* Single Testimonial Display */}
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 p-8 bg-white rounded-xl shadow-lg border-2 border-primary/20 hover:border-primary/50 transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <FiStar key={i} className="text-xl text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">"{testimonials[current].content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-3xl text-primary">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-bold text-lg text-black">{testimonials[current].name}</p>
                  <p className="text-gray-600">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full transition duration-300 ${
                    idx === current
                      ? 'w-10 h-3 bg-primary'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-8 text-heading">Share Your Feedback</h3>

            <form onSubmit={handleFeedbackSubmit} className="flex-1 p-8 bg-white rounded-xl shadow-lg border-2 border-primary/20 space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Rating Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="transition"
                    >
                      <FiStar
                        className={`text-3xl ${
                          star <= formData.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Textarea */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Feedback</label>
                <textarea
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition resize-none"
                  placeholder="Share your experience with us..."
                  rows={5}
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-primary text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
              >
                <FiSend className="text-lg" />
                {submitted ? 'Thank you!' : 'Submit Feedback'}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-600 font-semibold"
                >
                  Your feedback has been received!
                </motion.p>
              )}
            </form>
          </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsSection
