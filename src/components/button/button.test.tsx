import Button, { type ButtonProps } from './button'

function createButtonProps(overrides: Partial<ButtonProps> = {}): ButtonProps {
  return {
    text: 'Contáctanos',
    color: 'primary',
    ...overrides,
  }
}

export function renderPrimaryButtonFixture() {
  return <Button {...createButtonProps()} />
}

export function renderSecondaryButtonWithIconFixture() {
  return <Button {...createButtonProps({ color: 'secondary', icon: 'arrow-right', text: 'Ver solución' })} />
}
