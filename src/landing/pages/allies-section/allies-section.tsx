import BrandLogo from '@/components/brand-logo/brand-logo'
import StatsCard from '@/components/stats-card/stats-card'
import { alliesMetrics, alliesSectionData, partnerBrands } from '@/landing/data'

function AlliesSection() {
  return (
    <section className="social-proof" aria-labelledby="allies-title">
      <p id="allies-title" className="section-tag allies-title">
        <span className="highlight-text section-tag-highlight">{alliesSectionData.titleHighlight}</span>{' '}
        <span className="section-tag-white">{alliesSectionData.title}</span>
      </p>

      <div className="metrics-grid" aria-label={alliesSectionData.metricsLabel}>
        {alliesMetrics.map((metric) => (
          <StatsCard
            className="allies-stat"
            icon={metric.icon}
            iconAlt={metric.iconAlt}
            iconColor="main"
            iconHeight={metric.iconHeight}
            iconSrc={metric.iconSrc}
            iconWidth={metric.iconWidth}
            key={metric.title}
            title={metric.title}
            titleColor="muted"
            value={metric.value}
            valueColor="main"
          />
        ))}
      </div>

      <div className="logos-panel">
        <div className="logos-marquee" aria-label={alliesSectionData.brandsLabel}>
          <div className="logos-track">
            {[...partnerBrands, ...partnerBrands].map((brand, index) => (
              <BrandLogo alt={brand.alt} key={`${brand.alt}-${index}`} src={brand.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlliesSection
