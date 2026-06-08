import { useEffect } from 'react'
import AlliesSection from '@/landing/legacy/pages/allies-section/allies-section'
import FintechTurnkeySection from '@/landing/legacy/pages/fintech-turnkey-section/fintech-turnkey-section'
import Footer from '@/landing/legacy/pages/footer/footer'
import Hero from '@/landing/legacy/pages/hero/hero'
import Navbar from '@/landing/legacy/pages/navbar/navbar'
import ServicesSection from '@/landing/legacy/pages/services-section/services-section'
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
    <div id="top" className="landing-container legacy-landing">
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </div>
  )
}
