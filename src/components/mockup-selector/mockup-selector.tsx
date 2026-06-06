import styles from './mockup-selector.module.css'

const MOCKUP_SELECTOR_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

type MockupSelectorSize = (typeof MOCKUP_SELECTOR_SIZE)[keyof typeof MOCKUP_SELECTOR_SIZE]

type MockupSelectorProps = {
  text: string
  isActive?: boolean
  size?: MockupSelectorSize
  className?: string
  onClick?: () => void
}

function MockupSelector({ text, isActive = false, size = MOCKUP_SELECTOR_SIZE.SMALL, className = '', onClick }: MockupSelectorProps) {
  const classes = [styles.selector, styles[size], isActive ? styles.active : '', className].filter(Boolean).join(' ')

  return (
    <button aria-pressed={isActive} className={classes} onClick={onClick} type="button">
      {text}
    </button>
  )
}

export default MockupSelector
export { MOCKUP_SELECTOR_SIZE }
export type { MockupSelectorProps, MockupSelectorSize }
