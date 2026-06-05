import { partnerLogos } from '@/landing/data'
import Icon from '@/components/icon/icon'

function AlliesSection() {
  return (
    <section className="social-proof" aria-labelledby="allies-title">
      <p id="allies-title" className="section-tag">
        <span className="highlight-text section-tag-highlight">Somos aliados</span>{' '}
        <span className="section-tag-white">de los mejores del mundo</span>
      </p>

      <div className="metrics-grid" aria-label="Métricas de presencia Bantiax">
        <div>
          <div className="metric-number"><Icon name="globe" size={20} className="metric-icon" /> +20</div>
          <p className="metric-label">Países</p>
        </div>
        <div>
          <div className="metric-number"><Icon name="users" size={20} className="metric-icon" /> +500</div>
          <p className="metric-label">Socios Comerciales</p>
        </div>
        <div>
          <div className="metric-number"><Icon name="dollar-sign" size={20} className="metric-icon" /> +90M</div>
          <p className="metric-label">Créditos Otorgados</p>
        </div>
      </div>

      <div className="logos-marquee" aria-label="Empresas colaboradoras">
        <div className="logos-track">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <span className="logo-item" key={`${logo}-${index}`}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AlliesSection
