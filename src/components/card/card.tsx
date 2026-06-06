import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
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

const CARD_BG = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  CARD: 'card',
  TRANSPARENT: 'transparent',
} as const

const CARD_BORDER = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  CYAN: 'cyan',
  TRANSPARENT: 'transparent',
} as const

const CARD_TEXT = {
  DEFAULT: 'default',
  MAIN: 'main',
  MUTED: 'muted',
  DARK: 'dark',
  BLACK: 'black',
} as const

type CardVariant = (typeof CARD_VARIANT)[keyof typeof CARD_VARIANT]
type CardSize = (typeof CARD_SIZE)[keyof typeof CARD_SIZE]
type CardInteraction = (typeof CARD_INTERACTION)[keyof typeof CARD_INTERACTION]
type CardOrientation = (typeof CARD_ORIENTATION)[keyof typeof CARD_ORIENTATION]
type CardStatus = (typeof CARD_STATUS)[keyof typeof CARD_STATUS]
type CardBg = (typeof CARD_BG)[keyof typeof CARD_BG]
type CardBorder = (typeof CARD_BORDER)[keyof typeof CARD_BORDER]
type CardText = (typeof CARD_TEXT)[keyof typeof CARD_TEXT]

type CardProps<TElement extends ElementType = 'article'> = {
  as?: TElement
  children: ReactNode
  className?: string
  variant?: CardVariant
  size?: CardSize
  interaction?: CardInteraction
  orientation?: CardOrientation
  status?: CardStatus
  bg?: CardBg
  border?: CardBorder
  text?: CardText
} & Omit<ComponentPropsWithoutRef<TElement>, 'as' | 'children' | 'className' | 'border'>

function Card<TElement extends ElementType = 'article'>({
  as,
  children,
  variant = CARD_VARIANT.MINIMAL,
  size = CARD_SIZE.MEDIUM,
  interaction = CARD_INTERACTION.NONE,
  orientation = CARD_ORIENTATION.VERTICAL,
  status = CARD_STATUS.DEFAULT,
  bg = CARD_BG.DEFAULT,
  border = CARD_BORDER.DEFAULT,
  text = CARD_TEXT.DEFAULT,
  className = '',
  ...props
}: CardProps<TElement>) {
  const Component = as ?? 'article'
  const classes = [
    styles.card,
    styles[variant],
    styles[size],
    styles[interaction],
    styles[orientation],
    styles[status],
    styles[`bg-${bg}`],
    styles[`border-${border}`],
    styles[`text-${text}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component aria-disabled={status === CARD_STATUS.DISABLED || undefined} className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Card
export { CARD_BG, CARD_BORDER, CARD_INTERACTION, CARD_ORIENTATION, CARD_SIZE, CARD_STATUS, CARD_TEXT, CARD_VARIANT }
export type { CardBg, CardBorder, CardInteraction, CardOrientation, CardProps, CardSize, CardStatus, CardText, CardVariant }
