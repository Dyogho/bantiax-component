import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react'
import styles from './card.module.css'

const CARD_VARIANT = {
  MINIMAL: 'minimal',
  OUTLINED_FILLED: 'outlined-filled',
  OUTLINED: 'outlined',
  FILLED: 'filled',
} as const

const CARD_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

const CARD_INTERACTION = {
  NONE: 'none',
  ACTIVE: 'active',
} as const

const CARD_ORIENTATION = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const

const CARD_STATUS = {
  DEFAULT: 'default',
  SELECT: 'select',
  DISABLED: 'disabled',
} as const

type CardVariant = (typeof CARD_VARIANT)[keyof typeof CARD_VARIANT]
type CardSize = (typeof CARD_SIZE)[keyof typeof CARD_SIZE]
type CardInteraction = (typeof CARD_INTERACTION)[keyof typeof CARD_INTERACTION]
type CardOrientation = (typeof CARD_ORIENTATION)[keyof typeof CARD_ORIENTATION]
type CardStatus = (typeof CARD_STATUS)[keyof typeof CARD_STATUS]
type CardStyle = CSSProperties & {
  '--card-theme-color'?: string
}

type CardProps<TElement extends ElementType = 'article'> = {
  as?: TElement
  children: ReactNode
  className?: string
  variant?: CardVariant
  size?: CardSize
  interaction?: CardInteraction
  orientation?: CardOrientation
  status?: CardStatus
  themeColor?: string
} & Omit<ComponentPropsWithoutRef<TElement>, 'as' | 'children' | 'className'>

function Card<TElement extends ElementType = 'article'>({
  as,
  children,
  variant = CARD_VARIANT.MINIMAL,
  size = CARD_SIZE.MEDIUM,
  interaction = CARD_INTERACTION.NONE,
  orientation = CARD_ORIENTATION.VERTICAL,
  status = CARD_STATUS.DEFAULT,
  themeColor,
  className = '',
  style,
  ...props
}: CardProps<TElement>) {
  const Component = as ?? 'article'
  const classes = [styles.card, styles[variant], styles[size], styles[interaction], styles[orientation], styles[status], className]
    .filter(Boolean)
    .join(' ')
  const customStyles: CardStyle = {
    ...style,
    ...(themeColor ? { '--card-theme-color': themeColor } : {}),
  }

  return (
    <Component aria-disabled={status === CARD_STATUS.DISABLED || undefined} className={classes} style={customStyles} {...props}>
      {children}
    </Component>
  )
}

export default Card
export { CARD_INTERACTION, CARD_ORIENTATION, CARD_SIZE, CARD_STATUS, CARD_VARIANT }
export type { CardInteraction, CardOrientation, CardProps, CardSize, CardStatus, CardVariant }
