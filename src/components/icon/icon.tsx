import type { CSSProperties, ReactNode } from 'react'
import styles from './icon.module.css'

const ICON_SIZE = {
  DEFAULT: '1.5rem',
} as const

const ICON_NAME = {
  CLOCK: 'clock',
  KEY: 'key',
  LIGHTBULB: 'lightbulb',
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
        viewBox="0 0 24 24"
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
