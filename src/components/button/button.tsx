import type { ButtonHTMLAttributes } from 'react'
import Icon, { type IconName } from '@/components/icon/icon'

type ButtonColor = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  color?: ButtonColor
  icon?: IconName
}

function Button({ text, color = 'primary', icon, className = '', type = 'button', ...props }: ButtonProps) {
  const classes = ['btx-button', `btx-button--${color}`, className].filter(Boolean).join(' ')

  return (
    <button className={classes} type={type} {...props}>
      {icon ? <Icon name={icon} size={18} /> : null}
      <span>{text}</span>
    </button>
  )
}

export default Button
export type { ButtonColor, ButtonProps }
