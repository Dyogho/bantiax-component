import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from '@/components/button/button'
import '@/landing/landing.css'

const meta = {
  title: 'Landing/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    color: { control: 'select', options: ['primary', 'secondary'] },
    icon: {
      control: 'select',
      options: [undefined, 'clock', 'arrow-right', 'key', 'lightbulb'],
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Contáctanos',
    color: 'primary',
    icon: 'clock',
  },
}

export const Secondary: Story = {
  args: {
    text: 'Ver solución',
    color: 'secondary',
    icon: 'arrow-right',
  },
}
