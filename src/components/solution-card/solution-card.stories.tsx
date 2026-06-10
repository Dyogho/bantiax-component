import type { Meta, StoryObj } from '@storybook/react-vite'
import SolutionCard from '@/components/solution-card/solution-card'
import '@/landing/landing.css'

const solutionIconOptions = ['smartphone', 'zap', 'bar-chart', 'layers', 'lock', 'users']

const meta = {
  title: 'Landing/Cards/SolutionCard',
  component: SolutionCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'SolutionCard representa una solución tecnológica dentro de TechSolutionsSection. Compone el Card base con `variant="filled"` e interacción active heredada, icono circular superpuesto al borde superior, título y descripción centrados, línea divisoria muted y flecha de redirección alineada a la izquierda bajo la línea.',
      },
    },
  },
  args: {
    icon: 'smartphone',
    title: 'Plataforma Inteligente de Crédito',
    description: 'Automatiza y evalúa solicitudes en segundos reduciendo riesgos operativos.',
    href: '#servicios',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: solutionIconOptions,
      description: 'Icono principal mostrado dentro del círculo superior del card.',
      table: { category: 'Content' },
    },
    title: {
      control: 'text',
      description: 'Título de la solución. Se renderiza centrado.',
      table: { category: 'Content' },
    },
    description: {
      control: 'text',
      description: 'Texto descriptivo corto de la solución. Se renderiza centrado.',
      table: { category: 'Content' },
    },
    href: {
      control: 'text',
      description: 'Destino del enlace de flecha ubicado debajo de la línea divisoria.',
      table: { category: 'Navigation', defaultValue: { summary: '#servicios' } },
    },
  },
} satisfies Meta<typeof SolutionCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estado base usado en la grilla de soluciones: card filled, hover activo, icono superior y CTA de flecha.',
      },
    },
  },
}

export const AiModels: Story = {
  args: {
    icon: 'zap',
    title: 'Modelos de Inteligencia Artificial',
    description: 'Predicciones precisas basadas en comportamiento transaccional e historiales.',
  },
}

export const PortfolioMonitoring: Story = {
  args: {
    icon: 'bar-chart',
    title: 'Monitoreo Continuo de Cartera',
    description: 'Alertas tempranas y analítica predictiva de salud financiera en tu ecosistema.',
  },
}
