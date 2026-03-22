import { LandingHero }          from '@/components/marketing/LandingHero'
import { ModulesSection }       from '@/components/marketing/ModulesSection'
import { PerformanceSection }   from '@/components/marketing/PerformanceSection'
import { TestimonialsSection }  from '@/components/marketing/TestimonialsSection'
import { FAQSection }           from '@/components/marketing/FAQSection'

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <ModulesSection />
      <PerformanceSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}
