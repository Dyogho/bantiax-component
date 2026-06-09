import { useEffect } from 'react'
import LegacyLayout from '@/landing/legacy/layout/legacy-layout'
import AlliesSection from '@/landing/legacy/pages/allies-section/allies-section'
import FintechTurnkeySection from '@/landing/legacy/pages/fintech-turnkey-section/fintech-turnkey-section'
import Hero from '@/landing/legacy/pages/hero/hero'
import ServicesSection from '@/landing/legacy/pages/services-section/services-section'
import StrategicConsultingSection from '@/landing/legacy/pages/strategic-consulting-section/strategic-consulting-section'
import TechSolutionsSection from '@/landing/legacy/pages/tech-solutions-section/tech-solutions-section'
import '@/landing/legacy/legacy.css'

export default function LegacyLanding() {
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
    </LegacyLayout>
  )
}
