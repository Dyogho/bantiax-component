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

const INFO_CARD_STATUS = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
} as const

type InfoCardSize = (typeof INFO_CARD_SIZE)[keyof typeof INFO_CARD_SIZE]
type InfoCardOrientation = (typeof INFO_CARD_ORIENTATION)[keyof typeof INFO_CARD_ORIENTATION]
type InfoCardStatus = (typeof INFO_CARD_STATUS)[keyof typeof INFO_CARD_STATUS]

type InfoCardProps = {
  title: string
  description?: string
  icon?: IconName
  size?: InfoCardSize
  orientation?: InfoCardOrientation
  status?: InfoCardStatus
  className?: string
}

function InfoCard({
  icon,
  title,
  description,
  size = INFO_CARD_SIZE.MEDIUM,
  orientation = INFO_CARD_ORIENTATION.HORIZONTAL,
  status = INFO_CARD_STATUS.DEFAULT,
  className = '',
}: InfoCardProps) {
  const classes = [styles.infoCard, styles[orientation], styles[size], styles[status], className].filter(Boolean).join(' ')

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
export { INFO_CARD_ORIENTATION, INFO_CARD_SIZE, INFO_CARD_STATUS }
export type { InfoCardOrientation, InfoCardProps, InfoCardSize, InfoCardStatus }
