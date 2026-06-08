import Card, { type CardOrientation } from '@/components/card/card'
import type { IconName } from '@/components/icon/icon'
import Icon from '@/components/icon/icon'
import styles from './hero-card.module.css'

type HeroCardProps = {
  icon: IconName
  title: string
  description: string
  orientation?: CardOrientation
  isActive?: boolean
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function HeroCard({
  icon,
  title,
  description,
  orientation = 'vertical',
  isActive = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: HeroCardProps) {
  const interaction = 'none'
  const status = isActive ? 'select' : 'default'
  const classes = [styles.card, isActive ? styles.active : ''].filter(Boolean).join(' ')
  const content = (
    <span className={styles.content}>
      <span className={styles.iconWrap}>
        <Icon name={icon} className={styles.icon} size="4rem" />
      </span>
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </span>
  )

  if (onClick) {
    return (
      <Card
        as="button"
        aria-expanded={isActive}
        className={classes}
        interaction={interaction}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        orientation={orientation}
        status={status}
        type="button"
        variant="minimal"
      >
        {content}
      </Card>
    )
  }

  return (
    <Card
      as="article"
      className={classes}
      interaction={interaction}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      orientation={orientation}
      status={status}
      variant="minimal"
    >
      {content}
    </Card>
  )
}

export default HeroCard
export type { HeroCardProps }
