import { benefits } from '@/landing/data'
import Icon from '@/components/icon/icon'

function FintechTurnkeySection() {
  return (
    <section id="beneficios" className="multiplier-section">
      <div className="multiplier-box">
        <div className="multiplier-content">
          <div className="multiplier-header">
            <div>
              <span className="highlight-text eyebrow eyebrow-with-icon">
                <Icon name="key" size={18} />
                Fintech Llave en Mano
              </span>
              <h2 className="multiplier-title">Efecto Multiplicador de Beneficios: incrementas rentabilidad, blindas tu ecosistema y más.</h2>
            </div>
            <a className="btn-primary multiplier-cta" href="#servicios">Contáctanos</a>
          </div>
          <div className="benefits-list">
            {benefits.map((item) => (
              <div key={item.title} className="benefit-item">
                <Icon name="check-circle" className="highlight-text benefit-icon" size={20} />
                <div>
                  <h4 className="benefit-title">{item.title}</h4>
                  <p className="benefit-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="multiplier-mockup">
          <div className="phone-card">
            <div className="phone-notch" />
            <p className="phone-muted">Crédito Comercial</p>
            <p className="phone-greeting">Hola, Socio Bantiax</p>
            <p className="phone-balance">$4,500.20</p>
            <div className="phone-divider" />
            <div className="phone-stats">
              <div className="phone-row"><span>Línea aprobada</span><span className="highlight-text">95% de éxito</span></div>
              <div className="phone-row"><span>Tasa Base</span><span>12.5%</span></div>
            </div>
            <button className="btn-block" type="button">Ver Métricas Avanzadas</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FintechTurnkeySection
