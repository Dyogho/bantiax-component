import type { CSSProperties, ReactNode } from 'react'
import styles from './icon.module.css'

const ICON_SIZE = {
  DEFAULT: '1.5rem',
} as const

const ICON_NAME = {
  CLOCK: 'clock',
  KEY: 'key',
  LIGHTBULB: 'lightbulb',
  BRAIN: 'brain',
  ARROW_RIGHT: 'arrow-right',
  PHONE: 'phone',
  MAIL: 'mail',
  MAP_PIN: 'map-pin',
  BRIEFCASE: 'briefcase',
  CPU: 'cpu',
  TRENDING_UP: 'trending-up',
  GLOBE: 'globe',
  USERS: 'users',
  DOLLAR_SIGN: 'dollar-sign',
  CHECK_CIRCLE: 'check-circle',
  LAYERS: 'layers',
  SMARTPHONE: 'smartphone',
  ZAP: 'zap',
  BAR_CHART: 'bar-chart',
  LOCK: 'lock',
  LOADING: 'loading',
  BENEFIT_STEP: 'benefit-step',
  BENEFIT_CLOCK: 'benefit-clock',
  BENEFIT_HEART: 'benefit-heart',
  BENEFIT_DATABASE: 'benefit-database',
  BENEFIT_ZAP: 'benefit-zap',
} as const

type IconName = (typeof ICON_NAME)[keyof typeof ICON_NAME]
type IconLength = number | string

type IconBaseProps = {
  className?: string
  size?: IconLength
  width?: IconLength
  height?: IconLength
  style?: CSSProperties
}

type IconInternalProps = IconBaseProps & {
  name: IconName
  src?: never
  alt?: never
}

type IconImageProps = IconBaseProps & {
  src: string
  alt?: string
  name?: never
}

type IconEmptyProps = IconBaseProps & {
  name?: undefined
  src?: undefined
  alt?: never
}

type IconProps = IconInternalProps | IconImageProps | IconEmptyProps

const ICON_PATHS: Record<IconName, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  key: (
    <>
      <circle cx="7.5" cy="14.5" r="3.5" />
      <path d="M10 12l8-8 3 3-2 2 2 2-2 2-2-2-4 4" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.4 1 2h6c0-.6.3-1.4 1-2a7 7 0 0 0-4-12Z" />
      <path d="M4 4l1.5 1.5M20 4l-1.5 1.5M2 12h2M20 12h2" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 2A3.5 3.5 0 0 0 6 5.5v.2A3.5 3.5 0 0 0 4 12a3.5 3.5 0 0 0 2 6.3v.2A3.5 3.5 0 0 0 9.5 22H12V2Z" />
      <path d="M14.5 2A3.5 3.5 0 0 1 18 5.5v.2A3.5 3.5 0 0 1 20 12a3.5 3.5 0 0 1-2 6.3v.2a3.5 3.5 0 0 1-3.5 3.5H12V2Z" />
      <path d="M8 8h4M12 14H8M16 8h-4M12 17h4" />
    </>
  ),
  'arrow-right': <path d="M5 12h14M13 5l7 7-7 7" />,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.47-1.13a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z" />,
  mail: <path d="M4 4h16v16H4zM4 6l8 7 8-7" />,
  'map-pin': (
    <>
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  briefcase: (
    <>
      <path d="M10 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <path d="M3 7h18v13H3z" />
      <path d="M3 13h18" />
    </>
  ),
  cpu: (
    <>
      <rect x="8" y="8" width="8" height="8" rx="1" />
      <path d="M4 10h4M4 14h4M16 10h4M16 14h4M10 4v4M14 4v4M10 16v4M14 16v4" />
    </>
  ),
  'trending-up': <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  'dollar-sign': <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />,
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  layers: <path d="M12 2l9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5" />,
  smartphone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />,
  'bar-chart': <path d="M3 3v18h18M7 16v-5M12 16V7M17 16v-8" />,
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  loading: <path d="M21 12a9 9 0 1 1-6.22-8.56" />,
  'benefit-step': <path fill="currentColor" stroke="none" d="M476 480h-152c-19.88 0-36-16.12-36-36v-348H192v156c0 19.88-16.12 36-36 36H31.1C14.33 288 0 273.7 0 256s14.33-31.1 31.1-31.1H128v-156c0-19.88 16.12-36 36-36h152c19.88 0 36 16.12 36 36v348h96v-156c0-19.88 16.12-36 36-36h124C625.7 224 640 238.3 640 256s-14.33 32-31.1 32H512v156C512 463.9 495.9 480 476 480z" />,
  'benefit-clock': <path fill="currentColor" stroke="none" d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />,
  'benefit-heart': <path fill="currentColor" stroke="none" d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />,
  'benefit-database': <path fill="currentColor" stroke="none" d="M448 80V128C448 172.2 347.7 208 224 208C100.3 208 0 172.2 0 128V80C0 35.82 100.3 0 224 0C347.7 0 448 35.82 448 80zM393.2 214.7C413.1 207.3 433.1 197.8 448 186.1V288C448 332.2 347.7 368 224 368C100.3 368 0 332.2 0 288V186.1C14.93 197.8 34.02 207.3 54.85 214.7C99.66 230.7 159.5 240 224 240C288.5 240 348.3 230.7 393.2 214.7V214.7zM54.85 374.7C99.66 390.7 159.5 400 224 400C288.5 400 348.3 390.7 393.2 374.7C413.1 367.3 433.1 357.8 448 346.1V432C448 476.2 347.7 512 224 512C100.3 512 0 476.2 0 432V346.1C14.93 357.8 34.02 367.3 54.85 374.7z" />,
  'benefit-zap': <path fill="currentColor" stroke="none" d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z" />,
}

const ICON_VIEW_BOXES: Partial<Record<IconName, string>> = {
  'benefit-step': '0 0 640 512',
  'benefit-clock': '0 0 512 512',
  'benefit-heart': '0 0 512 512',
  'benefit-database': '0 0 448 512',
  'benefit-zap': '0 0 384 512',
}

function getClassName(className: string | undefined, variantClassName: string) {
  return [styles.icon, variantClassName, className].filter(Boolean).join(' ')
}

function Icon(props: IconProps) {
  const { className, size = ICON_SIZE.DEFAULT, width, height, style } = props

  if (!props.name && !props.src) {
    return null
  }

  const resolvedWidth = width ?? size
  const resolvedHeight = height ?? size
  const iconStyle: CSSProperties = {
    width: resolvedWidth,
    height: resolvedHeight,
    ...style,
  }

  if (props.name) {
    return (
      <svg
        aria-hidden="true"
        className={getClassName(className, styles.svg)}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        style={iconStyle}
        viewBox={ICON_VIEW_BOXES[props.name] ?? '0 0 24 24'}
      >
        {ICON_PATHS[props.name]}
      </svg>
    )
  }

  return (
    <img
      alt={props.alt ?? ''}
      aria-hidden={props.alt ? undefined : true}
      className={getClassName(className, styles.image)}
      src={props.src}
      style={iconStyle}
    />
  )
}

export default Icon
export { ICON_NAME, ICON_SIZE }
export type { IconLength, IconName, IconProps }
