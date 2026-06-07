import Button, { BUTTON_COLOR, BUTTON_SIZE } from '@/components/button/button'
import InfoCard, { INFO_CARD_SIZE } from '@/components/info-card/info-card'
import StatsCard, { STATS_CARD_ORIENTATION, STATS_CARD_SIZE } from '@/components/stats-card/stats-card'
import { services } from '@/landing/data'

function ServicesSection() {
  return (
    <section id="servicios" className="services-section">
      <div className="services-heading">
        <h2 className="section-title section-title-primary">NUESTROS SERVICIOS</h2>
      </div>

      <div className="services-info-list">
        {services.map((service) => (
          <InfoCard icon={service.icon} iconColor="primary" key={service.title} size={INFO_CARD_SIZE.LARGE} title={service.title} titleColor="main" />
        ))}
      </div>

      <article className="services-highlight-card">
        <div className="services-highlight-images">
          <img src="/image2.png" alt="Equipo Bantiax colaborando" />
          <img src="/image3.png" alt="Planeación estratégica Bantiax" />
        </div>

        <div className="services-highlight-content">
          <InfoCard icon="briefcase" iconColor="main" size={INFO_CARD_SIZE.LARGE} title="CONSULTORÍA ESTRATÉGICA" titleColor="main" />

          <div className="services-highlight-intro">
            <h3>Transformamos empresas en potencias de financiamiento</h3>
            <p>Somos expertos creando y gestionando</p>
          </div>

          <div className="services-highlight-list">
            <InfoCard
              description="Creamos Fintech desde cero, con tecnología propia, generando ventajas competitivas."
              descriptionColor="muted"
              icon="lightbulb"
              iconColor="main"
              size={INFO_CARD_SIZE.LARGE}
              title="Creadores, innovadores y estrategas."
              titleColor="main"
            />
            <InfoCard
              description="Transformamos el riesgo en récords de rentabilidad."
              descriptionColor="muted"
              icon="trending-up"
              iconColor="main"
              size={INFO_CARD_SIZE.LARGE}
              title="Gestores de potencias de financiamiento"
              titleColor="main"
            />
            <InfoCard
              icon="clock"
              iconColor="main"
              size={INFO_CARD_SIZE.LARGE}
              title="Implementación ágil y cero fricción con el punto de venta"
              titleColor="main"
            />
          </div>

          <div className="services-highlight-footer">
            <Button color={BUTTON_COLOR.PRIMARY} icon="clock" size={BUTTON_SIZE.LARGE} text="Contactanos" />
            <StatsCard
              className="services-experience-stat"
              orientation={STATS_CARD_ORIENTATION.HORIZONTAL}
              size={STATS_CARD_SIZE.LARGE}
              title="Años de experiencia"
              titleColor="main"
              value="15"
              valueColor="main"
            />
          </div>
        </div>
      </article>
    </section>
  )
}

export default ServicesSection
