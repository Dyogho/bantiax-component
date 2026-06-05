import type { Meta, StoryObj } from '@storybook/react-vite'
import HeroCard from '@/components/hero-card/hero-card'
import '@/landing/landing.css'

const meta = {
  title: 'Landing/Cards/HeroCard',
  component: HeroCard,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  args: {
    icon: 'briefcase',
    title: 'Banca e Infraestructura',
    description: 'Creamos infraestructura financiera digital preparada para operar, escalar y proteger cada etapa del negocio.',
    imageSrc: '/image1.png',
  },
} satisfies Meta<typeof HeroCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
