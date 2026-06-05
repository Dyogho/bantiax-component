import { services } from '@/landing/data'
import ServiceCard from '@/components/service-card/service-card'
import StatsCard from '@/components/stats-card/stats-card'

function ServicesSection() {
  return (
    <section id="servicios" className="services-section">
      <div className="services-heading">
        <h2 className="section-title section-title-primary">Nuestros Servicios</h2>
      </div>

      <div className="services-simple-grid">
        {services.map((service) => (
          <ServiceCard description={service.desc} icon={service.icon} key={service.title} title={service.title} />
        ))}
      </div>

      <article className="services-highlight-card">
        <div className="services-highlight-images">
          <img src="/image2.png" alt="Equipo Bantiax colaborando" />
          <img src="/image3.png" alt="Planeación estratégica Bantiax" />
        </div>

        <div className="services-highlight-content">
          <span className="highlight-text eyebrow small">CONSULTORÍA ESTRATÉGICA</span>
          <h3>Transformamos empresas en potencias de financiamiento</h3>

          <div className="services-copy-block">
            <h4>Somos expertos creando y gestionando</h4>
            <p>Creadores, innovadores y estrategas.</p>
          </div>

          <div className="services-copy-block">
            <h4>Creamos Fintech desde cero, con tecnología propia, generando ventajas competitivas.</h4>
            <p>Gestores de potencias de financiamiento.</p>
          </div>

          <div className="services-copy-block">
            <h4>Transformamos el riesgo en récords de rentabilidad.</h4>
            <p>Implementación ágil y cero fricción con el punto de venta.</p>
          </div>

          <div className="services-highlight-footer">
            <a className="btn-primary btn-primary-large" href="#riesgo">Evaluar Ahora</a>
            <StatsCard label="Años de experiencia mínima" value="15+" />
          </div>
        </div>
      </article>
    </section>
  )
}

export default ServicesSection
