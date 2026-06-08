import { useState } from 'react'
import Button from '@/components/button/button'
import Card from '@/components/card/card'
import DeviceMockup from '@/components/device-mockup/device-mockup'
import InfoCard from '@/components/info-card/info-card'
import MockupSelector from '@/components/mockup-selector/mockup-selector'
import { fintechTurnkeySectionData, mockupOptions, turnkeyBenefits } from '@/landing/legacy/data'

function FintechTurnkeySection() {
  const [activeMockupIndex, setActiveMockupIndex] = useState(0)
  const activeMockup = mockupOptions[activeMockupIndex]?.mockup ?? mockupOptions[0].mockup

  return (
    <section id={fintechTurnkeySectionData.id} className="multiplier-section">
      <Card as="div" bg="secondary" className="multiplier-box" text="main" variant="filled">
        <div className="multiplier-header">
          <InfoCard
            icon={fintechTurnkeySectionData.eyebrowIcon}
            iconColor="primary"
            title={fintechTurnkeySectionData.eyebrowTitle}
            titleColor="main"
          />
          <a className="multiplier-link" href={fintechTurnkeySectionData.cta.href}>
            <Button color="primary" size="medium" text={fintechTurnkeySectionData.cta.label} />
          </a>
        </div>

        <div className="multiplier-summary">
          <h2 className="multiplier-title">{fintechTurnkeySectionData.title}</h2>
          <p className="multiplier-desc">{fintechTurnkeySectionData.description}</p>
        </div>

        <div className="multiplier-main">
          <div className="multiplier-info-list">
            {turnkeyBenefits.map((benefit) => (
              <InfoCard
                description={benefit.description}
                descriptionColor="muted"
                icon="check-circle"
                iconColor="primary"
                key={benefit.title}
                size="small"
                title={benefit.title}
                titleColor="main"
              />
            ))}
          </div>
          <div className="multiplier-actions">
            {mockupOptions.map((option, index) => (
              <MockupSelector
                isActive={index === activeMockupIndex}
                key={option.label}
                onClick={() => setActiveMockupIndex(index)}
                text={option.label}
              />
            ))}
          </div>
          <div className="multiplier-mockup">
            <DeviceMockup caption={fintechTurnkeySectionData.mockupCaption} {...activeMockup} />
          </div>
        </div>
      </Card>
    </section>
  )
}

export default FintechTurnkeySection
