import Button, { BUTTON_COLOR, BUTTON_SIZE } from '@/components/button/button'
import InfoCard, { INFO_CARD_SIZE } from '@/components/info-card/info-card'
import StatsCard, { STATS_CARD_ORIENTATION, STATS_CARD_SIZE } from '@/components/stats-card/stats-card'
import { services, servicesHighlightCards, servicesHighlightImages, servicesSectionData } from '@/landing/legacy/data'

function ServicesSection() {
  return (
    <section id={servicesSectionData.id} className="services-section">
      <div className="services-heading">
        <h2 className="section-title section-title-primary">{servicesSectionData.title}</h2>
      </div>

      <div className="services-info-list">
        {services.map((service) => (
          <InfoCard icon={service.icon} iconColor="primary" key={service.title} size={INFO_CARD_SIZE.LARGE} title={service.title} titleColor="main" />
        ))}
      </div>

      <article className="services-highlight-card">
        <div className="services-highlight-images">
          {servicesHighlightImages.map((image) => (
            <img alt={image.alt} key={image.src} src={image.src} />
          ))}
        </div>

        <div className="services-highlight-content">
          <InfoCard
            icon={servicesSectionData.highlight.icon}
            iconColor="main"
            size={INFO_CARD_SIZE.LARGE}
            title={servicesSectionData.highlight.title}
            titleColor="main"
          />

          <div className="services-highlight-intro">
            <h3>{servicesSectionData.highlight.heading}</h3>
            <p>{servicesSectionData.highlight.description}</p>
          </div>

          <div className="services-highlight-list">
            {servicesHighlightCards.map((card) => (
              <InfoCard
                description={card.description}
                descriptionColor="muted"
                icon={card.icon}
                iconColor="main"
                key={card.title}
                size={INFO_CARD_SIZE.LARGE}
                title={card.title}
                titleColor="main"
              />
            ))}
          </div>

          <div className="services-highlight-footer">
            <Button
              color={BUTTON_COLOR.PRIMARY}
              icon={servicesSectionData.highlight.cta.icon}
              size={BUTTON_SIZE.LARGE}
              text={servicesSectionData.highlight.cta.label}
            />
            <StatsCard
              className="services-experience-stat"
              orientation={STATS_CARD_ORIENTATION.HORIZONTAL}
              size={STATS_CARD_SIZE.LARGE}
              title={servicesSectionData.highlight.stat.title}
              titleColor="main"
              value={servicesSectionData.highlight.stat.value}
              valueColor="main"
            />
          </div>
        </div>
      </article>
    </section>
  )
}

export default ServicesSection
