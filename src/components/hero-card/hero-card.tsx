import { useState } from 'react'
import Card from '@/components/card/card'
import type { IconName } from '@/components/icon/icon'
import Icon from '@/components/icon/icon'
import styles from './hero-card.module.css'

type HeroCardProps = {
  icon: IconName
  title: string
  description: string
  imageSrc?: string
}

function HeroCard({ icon, title, description, imageSrc }: HeroCardProps) {
  const [isActive, setIsActive] = useState(false)
  const classes = [styles.card, isActive ? styles.active : ''].filter(Boolean).join(' ')

  return (
    <Card
      as="button"
      aria-expanded={isActive}
      className={classes}
      onClick={() => setIsActive((current) => !current)}
      type="button"
      variant="minimal"
    >
      {imageSrc ? <span aria-hidden="true" className={styles.image} style={{ backgroundImage: `url(${imageSrc})` }} /> : null}
      <span className={styles.content}>
        <span className={styles.iconWrap}>
          <Icon name={icon} className={styles.icon} size={48} />
        </span>
        <span className={styles.line} aria-hidden="true" />
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
    </Card>
  )
}

export default HeroCard
export type { HeroCardProps }
