import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const StatItem = ({ label, value, symbol }: { label: string; value: number; symbol: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setInterval>
    const animate = () => {
      setCount((prev) => {
        if (prev < value) {
          const increment = Math.ceil(value / 50)
          return Math.min(prev + increment, value)
        }
        return prev
      })
    }

    timeout = setInterval(animate, 30)
    return () => clearInterval(timeout)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <motion.div className="text-5xl sm:text-6xl font-bold text-primary mb-2">
        {count}{symbol}
      </motion.div>
      <p className="text-xl text-gray-600 font-semibold">{label}</p>
    </motion.div>
  )
}

const StatsSection = () => {
  const stats = [
    { label: 'Documents Processed', value: 50000, symbol: '+' },
    { label: 'Years of Experience', value: 15, symbol: '+' },
    { label: 'Happy Customers', value: 10000, symbol: '+' },
    { label: 'Services Offered', value: 11, symbol: '' },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Our Impact</h2>
          <p className="text-xl text-gray-300">Trusted by thousands of satisfied customers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <StatItem key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
