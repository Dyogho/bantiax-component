import Icon, { type IconName } from '@/components/icon/icon'
import styles from './stats-card.module.css'

const STATS_CARD_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

const STATS_CARD_STATUS = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
} as const

const STATS_CARD_ORIENTATION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const

const STATS_CARD_COLOR = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  MAIN: 'main',
  MUTED: 'muted',
  DARK: 'dark',
  BLACK: 'black',
} as const

type StatsCardSize = (typeof STATS_CARD_SIZE)[keyof typeof STATS_CARD_SIZE]
type StatsCardStatus = (typeof STATS_CARD_STATUS)[keyof typeof STATS_CARD_STATUS]
type StatsCardOrientation = (typeof STATS_CARD_ORIENTATION)[keyof typeof STATS_CARD_ORIENTATION]
type StatsCardColor = (typeof STATS_CARD_COLOR)[keyof typeof STATS_CARD_COLOR]

type StatsCardProps = {
  value: string
  title: string
  icon?: IconName
  iconSrc?: string
  iconAlt?: string
  iconWidth?: string
  iconHeight?: string
  size?: StatsCardSize
  status?: StatsCardStatus
  orientation?: StatsCardOrientation
  iconColor?: StatsCardColor
  valueColor?: StatsCardColor
  titleColor?: StatsCardColor
  className?: string
}

function StatsCard({
  icon,
  iconSrc,
  iconAlt = '',
  iconWidth,
  iconHeight,
  value,
  title,
  size = STATS_CARD_SIZE.MEDIUM,
  status = STATS_CARD_STATUS.DEFAULT,
  orientation = STATS_CARD_ORIENTATION.HORIZONTAL,
  iconColor = STATS_CARD_COLOR.DEFAULT,
  valueColor = STATS_CARD_COLOR.DEFAULT,
  titleColor = STATS_CARD_COLOR.DEFAULT,
  className = '',
}: StatsCardProps) {
  const classes = [
    styles.statsCard,
    styles[orientation],
    styles[size],
    styles[status],
    styles[`icon-${iconColor}`],
    styles[`value-${valueColor}`],
    styles[`title-${titleColor}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {icon || iconSrc ? (
        <span className={styles.iconWrap}>
          {iconSrc ? (
            <Icon alt={iconAlt} className={styles.icon} height={iconHeight} src={iconSrc} width={iconWidth} />
          ) : icon ? (
            <Icon className={styles.icon} height={iconHeight} name={icon} width={iconWidth} />
          ) : null}
        </span>
      ) : null}
      <div className={styles.content}>
        <p className={styles.value}>{value}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  )
}

export default StatsCard
export { STATS_CARD_COLOR, STATS_CARD_ORIENTATION, STATS_CARD_SIZE, STATS_CARD_STATUS }
export type { StatsCardColor, StatsCardOrientation, StatsCardProps, StatsCardSize, StatsCardStatus }
