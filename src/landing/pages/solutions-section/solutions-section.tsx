import InfoCard, { INFO_CARD_SIZE } from '@/components/info-card/info-card'
import EcosystemBubble from '@/components/ecosystem-bubble/ecosystem-bubble'
import Card from '@/components/card/card'
import { solutionsSectionData } from './data'
import './solutions-section.css'

function SolutionsSection() {
  return (
    <section id={solutionsSectionData.id} className="solutions-section">
      <div className="solutions-container">

        <div className="solutions-left-panel">
          <div className="solutions-header">
            <InfoCard
              className="solutions-eyebrow"
              icon={solutionsSectionData.eyebrowIcon}
              iconColor="main"
              size={INFO_CARD_SIZE.SMALL}
              title={solutionsSectionData.eyebrowTitle}
              titleColor="main"
            />
            <h2 className="solutions-title">
              {solutionsSectionData.title}
            </h2>
            <p className="solutions-description">
              {solutionsSectionData.description}
            </p>
          </div>

          <Card variant="filled" className="solutions-badge-highlight">
            <p>{solutionsSectionData.badgeText}</p>
          </Card>
        </div>

        <div className="solutions-right-panel">
          <div className="solutions-bubble-container">
            <EcosystemBubble />
          </div>
        </div>

      </div>
    </section>
  )
}

export default SolutionsSection
