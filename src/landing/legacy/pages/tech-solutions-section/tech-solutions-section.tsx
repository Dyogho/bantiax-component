import Card, { CARD_TEXT, CARD_VARIANT } from '@/components/card/card'
import InfoCard, { INFO_CARD_SIZE } from '@/components/info-card/info-card'
import SolutionCard from '@/components/solution-card/solution-card'
import { techSolutionCards, techSolutionsSectionData } from '@/landing/legacy/data'

function TechSolutionsSection() {
  return (
    <section id={techSolutionsSectionData.id} className="risk-section">
      <div className="section-heading-left">
        <InfoCard
          className="highlight-text"
          icon={techSolutionsSectionData.eyebrowIcon}
          size={INFO_CARD_SIZE.SMALL}
          title={techSolutionsSectionData.eyebrowTitle}
          titleColor="primary"
        />
        <h2 className="section-title section-title-primary">{techSolutionsSectionData.title}</h2>
        <p className="section-description section-description-left">{techSolutionsSectionData.description}</p>
      </div>

      <div className="risk-grid">
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
