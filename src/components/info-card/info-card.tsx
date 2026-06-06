import type { IconName } from '@/components/icon/icon'
import Icon from '@/components/icon/icon'
import styles from './info-card.module.css'

const INFO_CARD_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

const INFO_CARD_ORIENTATION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const

const INFO_CARD_COLOR = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  MAIN: 'main',
  MUTED: 'muted',
  DARK: 'dark',
  BLACK: 'black',
} as const

type InfoCardSize = (typeof INFO_CARD_SIZE)[keyof typeof INFO_CARD_SIZE]
type InfoCardOrientation = (typeof INFO_CARD_ORIENTATION)[keyof typeof INFO_CARD_ORIENTATION]
type InfoCardColor = (typeof INFO_CARD_COLOR)[keyof typeof INFO_CARD_COLOR]

type InfoCardProps = {
  title: string
  description?: string
  icon?: IconName
  size?: InfoCardSize
  orientation?: InfoCardOrientation
  iconColor?: InfoCardColor
  titleColor?: InfoCardColor
  descriptionColor?: InfoCardColor
  className?: string
}

function InfoCard({
  icon,
  title,
  description,
  size = INFO_CARD_SIZE.MEDIUM,
  orientation = INFO_CARD_ORIENTATION.HORIZONTAL,
  iconColor = INFO_CARD_COLOR.DEFAULT,
  titleColor = INFO_CARD_COLOR.DEFAULT,
  descriptionColor = INFO_CARD_COLOR.DEFAULT,
  className = '',
}: InfoCardProps) {
  const classes = [
    styles.infoCard,
    styles[orientation],
    styles[size],
    styles[`icon-${iconColor}`],
    styles[`title-${titleColor}`],
    styles[`description-${descriptionColor}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {icon ? (
        <span className={styles.iconWrap}>
          <Icon name={icon} className={styles.icon} size={28} />
        </span>
      ) : null}
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
    </div>
  )
}

export default InfoCard
export { INFO_CARD_COLOR, INFO_CARD_ORIENTATION, INFO_CARD_SIZE }
export type { InfoCardColor, InfoCardOrientation, InfoCardProps, InfoCardSize }
