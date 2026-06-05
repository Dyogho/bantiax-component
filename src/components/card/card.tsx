import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import styles from './card.module.css'

type CardVariant = 'transparent' | 'full' | 'border' | 'secondary'

type CardProps<TElement extends ElementType = 'article'> = {
  as?: TElement
  children: ReactNode
  className?: string
  variant?: CardVariant
} & Omit<ComponentPropsWithoutRef<TElement>, 'as' | 'children' | 'className'>

function Card<TElement extends ElementType = 'article'>({
  as,
  children,
  variant = 'transparent',
  className = '',
  ...props
}: CardProps<TElement>) {
  const Component = as ?? 'article'
  const classes = [styles.card, styles[variant], className].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Card
export type { CardProps, CardVariant }
