import type { ButtonHTMLAttributes } from 'react'
import Icon, { type IconName } from '@/components/icon/icon'
import styles from './button.module.css'

const BUTTON_COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const

const BUTTON_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

const BUTTON_STATE = {
  DEFAULT: 'default',
  DANGER: 'danger',
  DISABLED: 'disabled',
  LOADING: 'loading',
} as const

type ButtonColor = (typeof BUTTON_COLOR)[keyof typeof BUTTON_COLOR]
type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE]
type ButtonState = (typeof BUTTON_STATE)[keyof typeof BUTTON_STATE]

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  color?: ButtonColor
  size?: ButtonSize
  state?: ButtonState
  icon?: IconName
}

function Button({
  text,
  color = BUTTON_COLOR.PRIMARY,
  size = BUTTON_SIZE.MEDIUM,
  state = BUTTON_STATE.DEFAULT,
  icon,
  className = '',
  type = 'button',
  disabled,
  ...props
}: ButtonProps) {
  const isLoading = state === BUTTON_STATE.LOADING
  const isDisabled = disabled || isLoading || state === BUTTON_STATE.DISABLED
  const iconName = isLoading ? 'loading' : icon
  const classes = [styles.button, styles[color], styles[size], styles[state], className].filter(Boolean).join(' ')

  return (
    <button aria-busy={isLoading || undefined} className={classes} disabled={isDisabled} type={type} {...props}>
      {iconName ? <Icon className={isLoading ? styles.loadingIcon : undefined} name={iconName} size={18} /> : null}
      <span>{text}</span>
    </button>
  )
}

export default Button
export { BUTTON_COLOR, BUTTON_SIZE, BUTTON_STATE }
export type { ButtonColor, ButtonProps, ButtonSize, ButtonState }
