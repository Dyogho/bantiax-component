import type { Meta, StoryObj } from '@storybook/react-vite'
import Header from '@/components/header/header'
import '@/landing/landing.css'

const meta = {
  title: 'Landing/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
