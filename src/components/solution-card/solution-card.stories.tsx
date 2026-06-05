import type { Meta, StoryObj } from '@storybook/react-vite'
import SolutionCard from '@/components/solution-card/solution-card'
import '@/landing/landing.css'

const meta = {
  title: 'Landing/Cards/SolutionCard',
  component: SolutionCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: 'smartphone',
    title: 'Plataforma Inteligente de Crédito',
    description: 'Automatiza y evalúa solicitudes en segundos reduciendo riesgos operativos.',
    href: '#',
  },
} satisfies Meta<typeof SolutionCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
