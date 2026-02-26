import HeroSection from '../components/sections/HeroSection'
import ServiceRibbon from '../components/sections/ServiceRibbon'
import ServicesGrid from '../components/sections/ServicesGrid'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import TrustSection from '../components/sections/TrustSection'
import StatsSection from '../components/sections/StatsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServiceRibbon />
      <ServicesGrid />
      <ProcessTimeline />
      <TrustSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default HomePage
