import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
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

describe('Button', () => {
  it('renders the primary button fixture', () => {
    render(renderPrimaryButtonFixture())

    expect(screen.getByRole('button', { name: 'Contáctanos' })).not.toBeNull()
  })

  it('renders the secondary button fixture with icon', () => {
    const { container } = render(renderSecondaryButtonWithIconFixture())

    expect(screen.getByRole('button', { name: 'Ver solución' })).not.toBeNull()
    expect(container.querySelector('svg')).not.toBeNull()
  })
})
