import Card, { CARD_TEXT, CARD_VARIANT } from '@/components/card/card'
import InfoCard, { INFO_CARD_SIZE } from '@/components/info-card/info-card'
import SolutionCard from '@/components/solution-card/solution-card'
import { techSolutionCards, techSolutionsSectionData } from '@/landing/legacy/data'

function TechSolutionsSection() {
  return (
    <section id={techSolutionsSectionData.id} className="risk-section tech-solutions-section">
      <div className="section-heading-left">
        <InfoCard
          className="tech-solutions-eyebrow"
          icon={techSolutionsSectionData.eyebrowIcon}
          iconColor="primary"
          size={INFO_CARD_SIZE.SMALL}
          title={techSolutionsSectionData.eyebrowTitle}
          titleColor="muted"
        />
        <h2 className="tech-solutions-title">{techSolutionsSectionData.title}</h2>
        <p className="tech-solutions-subtitle">{techSolutionsSectionData.description}</p>
      </div>

      <div className="risk-grid tech-solutions-grid">
        {techSolutionCards.map((card) => (
          <SolutionCard description={card.desc} icon={card.icon} key={card.title} title={card.title} />
        ))}
      </div>

      <Card className="risk-summary-card" text={CARD_TEXT.MAIN} variant={CARD_VARIANT.OUTLINED}>
        <p>{techSolutionsSectionData.summary}</p>
      </Card>
    </section>
  )
}

export default TechSolutionsSection
