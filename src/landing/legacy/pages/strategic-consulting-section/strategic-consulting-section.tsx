import Button, { BUTTON_COLOR, BUTTON_SIZE } from '@/components/button/button'
import InfoCard, { INFO_CARD_SIZE } from '@/components/info-card/info-card'
import StatsCard, { STATS_CARD_ORIENTATION, STATS_CARD_SIZE } from '@/components/stats-card/stats-card'
import { servicesHighlightCards, servicesHighlightImages, servicesSectionData } from '@/landing/legacy/data'

function StrategicConsultingSection() {
  return (
    <section className="services-section services-highlight-section" aria-labelledby="services-highlight-title">
      <article className="services-highlight-card">
        <div className="services-highlight-images">
          {servicesHighlightImages.map((image, index) => (
            <img alt={image.alt} className={`services-highlight-image-${index + 1}`} key={image.src} src={image.src} />
          ))}
        </div>

        <div className="services-highlight-content">
          <InfoCard
            className="services-highlight-eyebrow"
            icon={servicesSectionData.highlight.icon}
            iconColor="main"
            size={INFO_CARD_SIZE.LARGE}
            title={servicesSectionData.highlight.title}
            titleColor="main"
          />

          <div className="services-highlight-intro">
            <h3 id="services-highlight-title">{servicesSectionData.highlight.heading}</h3>
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

export default StrategicConsultingSection
