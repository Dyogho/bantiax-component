import AlliesSection from '@/components/allies-section/allies-section'
import FintechTurnkeySection from '@/components/fintech-turnkey-section/fintech-turnkey-section'
import Footer from '@/components/footer/footer'
import Hero from '@/components/hero/hero'
import Navbar from '@/components/navbar/navbar'
import ServicesSection from '@/components/services-section/services-section'
import TechSolutionsSection from '@/components/tech-solutions-section/tech-solutions-section'
import '@/landing/landing.css'

export default function Landing() {
  return (
    <div id="top" className="landing-container">
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
