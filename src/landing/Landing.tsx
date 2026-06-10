import { useEffect } from 'react'
import LegacyLayout from '@/landing/layout/legacy-layout'
import AlliesSection from '@/landing/pages/allies-section/allies-section'
import FintechTurnkeySection from '@/landing/pages/fintech-turnkey-section/fintech-turnkey-section'
import Hero from '@/landing/pages/hero/hero'
import ServicesSection from '@/landing/pages/services-section/services-section'
import StrategicConsultingSection from '@/landing/pages/strategic-consulting-section/strategic-consulting-section'
import TechSolutionsSection from '@/landing/pages/tech-solutions-section/tech-solutions-section'
import SolutionsSection from '@/landing/pages/solutions-section/solutions-section'
import '@/landing/landing.css'

export default function Landing() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <LegacyLayout>
      {/* Section 1: Hero */}
      <Hero />
      {/* Section 2: Aliados */}
      <AlliesSection />
      {/* Section 3: Fintech Llave en Mano */}
      <FintechTurnkeySection />
      {/* Section 4: Soluciones Tecnológicas Financieras */}
      <TechSolutionsSection />
      {/* Section 5: Nuestros Servicios */}
      <ServicesSection />
      {/* Section 6: Strategic Consulting */}
      <StrategicConsultingSection />
      {/* Section 7: Detalle de Soluciones */}
      <SolutionsSection />
    </LegacyLayout>
  )
}
