import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Icon from '@/components/icon/icon'

describe('Icon', () => {
  it('renders an internal svg icon from name', () => {
    const { container } = render(<Icon name="globe" size="3rem" />)
    const svg = container.querySelector('svg')

    expect(svg).not.toBeNull()
    expect(svg?.style.width).toBe('3rem')
    expect(svg?.style.height).toBe('3rem')
  })

  it('renders a cloud url as an image from src', () => {
    render(<Icon alt="Cloud icon" height="5.25rem" src="https://cdn.example.com/icon.svg" width="7.4375rem" />)
    const image = screen.getByRole('img', { name: 'Cloud icon' })

    expect(image.getAttribute('src')).toBe('https://cdn.example.com/icon.svg')
    expect(image.style.width).toBe('7.4375rem')
    expect(image.style.height).toBe('5.25rem')
  })

  it('returns null without name or src', () => {
    const { container } = render(<Icon />)

    expect(container.firstChild).toBeNull()
  })
})
