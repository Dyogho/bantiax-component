import InfoCard, { INFO_CARD_SIZE } from '@/components/info-card/info-card'
import { services, servicesSectionData } from '@/landing/legacy/data'

function ServicesSection() {
  return (
    <section id={servicesSectionData.id} className="services-section services-overview-section">
      <div className="services-heading">
        <h2 className="services-title">{servicesSectionData.title}</h2>
      </div>

      <div className="services-info-list">
        {services.map((service) => (
          <InfoCard
            className="services-info-card"
            icon={service.icon}
            iconColor="primary"
            key={service.title}
            size={INFO_CARD_SIZE.LARGE}
            title={service.title}
            titleColor="main"
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
