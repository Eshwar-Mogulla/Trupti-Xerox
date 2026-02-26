import { motion } from 'framer-motion'
import { services } from '../../utils/services'

const ServiceRibbon = () => {
  const duplicatedServices = [...services, ...services, ...services]

  return (
    <section className="overflow-hidden bg-black py-12">
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-8 w-max"
      >
        {duplicatedServices.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 px-8 py-4 bg-primary/10 border border-primary/30 rounded-lg whitespace-nowrap min-w-max"
          >
            <span className="text-2xl text-white">{service.icon}</span>
            <span className="font-bold text-white text-lg">{service.title}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ServiceRibbon
