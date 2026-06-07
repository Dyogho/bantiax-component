import Card, { CARD_TEXT, CARD_VARIANT } from '@/components/card/card'
import InfoCard, { INFO_CARD_SIZE } from '@/components/info-card/info-card'
import SolutionCard from '@/components/solution-card/solution-card'
import { techSolutionCards } from '@/landing/data'

function TechSolutionsSection() {
  return (
    <section id="riesgo" className="risk-section">
      <div className="section-heading-left">
        <InfoCard
          className="highlight-text"
          icon="lightbulb"
          size={INFO_CARD_SIZE.SMALL}
          title="Soluciones Tecnológicas Financieras"
          titleColor="primary"
        />
        <h2 className="section-title section-title-primary">Transformamos el Riesgo en Rentabilidad</h2>
        <p className="section-description section-description-left">Implementamos capas de inteligencia tecnológica para blindar cada etapa crítica del ciclo de crédito de tu organización.</p>
      </div>

      <div className="risk-grid">
        {techSolutionCards.map((card) => (
          <SolutionCard description={card.desc} icon={card.icon} key={card.title} title={card.title} />
        ))}
      </div>

      <Card className="risk-summary-card" text={CARD_TEXT.MAIN} variant={CARD_VARIANT.OUTLINED}>
        <p>Somos creadores de tecnología e infraestructura propia y escalable.</p>
      </Card>
    </section>
  )
}

export default TechSolutionsSection
