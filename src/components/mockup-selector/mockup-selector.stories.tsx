import type { Meta, StoryObj } from '@storybook/react-vite'
import MockupSelector, { MOCKUP_SELECTOR_SIZE } from '@/components/mockup-selector/mockup-selector'
import '@/landing/legacy/legacy.css'

const meta = {
  title: 'Landing/MockupSelector',
  component: MockupSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'MockupSelector es un selector tipo pill para cambiar el estado visual de un mockup desde la sección. No es CTA; usa `aria-pressed` para representar selección.',
      },
    },
  },
  args: {
    text: 'Solo con DNI',
    isActive: false,
    size: 'small',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto visible del selector.',
      table: { category: 'Content' },
    },
    isActive: {
      control: 'boolean',
      description: 'Estado seleccionado. Se refleja en `aria-pressed`.',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'select',
      options: Object.values(MOCKUP_SELECTOR_SIZE),
      description: 'Tamaño del selector: `small`, `medium` o `large`.',
      table: { category: 'Layout', defaultValue: { summary: 'small' } },
    },
    onClick: {
      action: 'clicked',
      description: 'Evento para que la sección cambie el mockup activo.',
      table: { category: 'Events' },
    },
    className: {
      control: false,
      table: { category: 'Advanced' },
    },
  },
} satisfies Meta<typeof MockupSelector>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Active: Story = {
  args: {
    isActive: true,
  },
}
