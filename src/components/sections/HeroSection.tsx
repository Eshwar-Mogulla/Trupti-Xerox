import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const handleSplashComplete = () => setIsReady(true)
    window.addEventListener('splashComplete', handleSplashComplete)

    // Fallback just in case
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 16000)

    return () => {
      window.removeEventListener('splashComplete', handleSplashComplete)
      clearTimeout(timer)
    }
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const charVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 10,
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] pt-20">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Animated Glowing Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 md:left-1/4 w-[500px] h-[500px] bg-yellow-300/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/4 -right-1/4 md:right-1/4 w-[600px] h-[600px] bg-red-200/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center relative">
        {/* Centered Glassmorphism Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="pt-10 flex flex-col items-center bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Shine effect on container */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-white/10 opacity-50" />

          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 relative z-10 drop-shadow-sm flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isReady ? "visible" : "hidden"}
          >
            <div className="flex flex-wrap justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 bg-clip-text text-transparent pb-2">
              {"TRUPTI".split('').map((char, idx) => (
                <motion.span key={`line1-${idx}`} variants={charVariants} className="inline-block hover:text-yellow-500 transition-colors duration-300">
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center mt-2 lg:mt-4 text-[0.8em] sm:text-[0.7em] bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              {"ENTERPRISES".split('').map((char, idx) => (
                <motion.span key={`line2-${idx}`} variants={charVariants} className="inline-block tracking-tight text-yellow-500">
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl text-center font-medium relative z-10"
          >
            Your Premium Partner for <span className="text-yellow-600 font-bold">Document Services</span>, Government Assistance & Professional Solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center relative z-10 w-full sm:w-auto"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 215, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-black font-bold rounded-2xl shadow-lg transition text-center flex items-center justify-center gap-2 group"
            >
              Explore Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
            <motion.a
              href="tel:+918691917227"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-lg hover:bg-black transition text-center flex items-center justify-center gap-2"
            >
              Contact Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
