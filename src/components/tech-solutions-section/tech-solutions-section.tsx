import { techSolutionCards } from '@/landing/data'
import Icon from '@/components/icon/icon'
import SolutionCard from '@/components/solution-card/solution-card'

function TechSolutionsSection() {
  return (
    <section id="riesgo" className="risk-section">
      <div className="section-heading-left">
        <span className="highlight-text eyebrow eyebrow-with-icon">
          <Icon name="lightbulb" size={18} />
          Soluciones Tecnológicas Financieras
        </span>
        <h2 className="section-title section-title-primary">Transformamos el Riesgo en Rentabilidad</h2>
        <p className="section-description section-description-left">Implementamos capas de inteligencia tecnológica para blindar cada etapa crítica del ciclo de crédito de tu organización.</p>
      </div>

      <div className="risk-grid">
        {techSolutionCards.map((card) => (
          <SolutionCard description={card.desc} icon={card.icon} key={card.title} title={card.title} />
        ))}
        <article className="risk-card risk-card-outline">
          <p>Somos creadores de tecnología e infraestructura propia y escalable.</p>
        </article>
      </div>
    </section>
  )
}

export default TechSolutionsSection
