import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import LocationsSection from '@/components/sections/LocationsSection'
import TestimonialsSection from '@/components/sections/TestimonialSection'
import ContactSection from '@/components/sections/ContactSection'
import AboutSection from '@/components/sections/AboutSection'

export default function Page() {
  return (
    <main>
      <Hero />
      <ServicesSection/>
      <LocationsSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <AboutSection/>
    </main>
  )
}
