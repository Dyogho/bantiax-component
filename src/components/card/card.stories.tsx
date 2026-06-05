import type { Meta, StoryObj } from '@storybook/react-vite'
import Card from '@/components/card/card'
import '@/landing/landing.css'

const meta = {
  title: 'Landing/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Contenido de ejemplo',
  },
  argTypes: {
    variant: { control: 'select', options: ['transparent', 'full', 'border', 'secondary'] },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Transparent: Story = {
  args: {
    variant: 'transparent',
  },
}

export const Full: Story = {
  args: {
    variant: 'full',
  },
}

export const Border: Story = {
  args: {
    variant: 'border',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}
