import { useState } from 'react'
import Card from '@/components/card/card'
import type { IconName } from '@/components/icon/icon'
import Icon from '@/components/icon/icon'

type HeroCardProps = {
  icon: IconName
  title: string
  description: string
}

function HeroCard({ icon, title, description }: HeroCardProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <Card
      as="button"
      aria-expanded={isActive}
      className={`hero-badge-card ${isActive ? 'is-active' : ''}`}
      onClick={() => setIsActive((current) => !current)}
      type="button"
      variant="transparent"
    >
      <span className="hero-card-content">
        <span className="hero-icon-wrap">
          <Icon name={icon} className="hero-icon" size={48} />
        </span>
        <span className="hero-card-line" aria-hidden="true" />
        <span className="hero-badge-text">{title}</span>
        <span className="hero-card-desc">{description}</span>
      </span>
    </Card>
  )
}

export default HeroCard
export type { HeroCardProps }
