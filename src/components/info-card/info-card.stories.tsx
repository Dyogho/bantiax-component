import type { Meta, StoryObj } from '@storybook/react-vite'
import InfoCard, { INFO_CARD_ORIENTATION, INFO_CARD_SIZE, INFO_CARD_STATUS } from '@/components/info-card/info-card'
import '@/landing/landing.css'

const meta = {
  title: 'Landing/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'InfoCard es un componente independiente para contenido informativo: icono opcional, title y description opcional. No representa estadísticas; para métricas usa StatsCard.',
      },
    },
  },
  args: {
    icon: 'lightbulb',
    title: 'Automatización inteligente',
    description: 'Conecta procesos, datos y decisiones en una experiencia operativa más eficiente.',
    size: 'medium',
    orientation: 'horizontal',
    status: 'default',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: [undefined, 'lightbulb', 'lock', 'zap', 'layers', 'check-circle'],
      description: 'Icono opcional del bloque informativo.',
      table: { category: 'Content' },
    },
    title: {
      control: 'text',
      description: 'Título principal del bloque.',
      table: { category: 'Content' },
    },
    description: {
      control: 'text',
      description: 'Descripción opcional del bloque.',
      table: { category: 'Content' },
    },
    orientation: {
      control: 'select',
      options: Object.values(INFO_CARD_ORIENTATION),
      description: '`horizontal` coloca icono y texto en fila; `vertical` apila el contenido.',
      table: { category: 'Layout', defaultValue: { summary: 'horizontal' } },
    },
    size: {
      control: 'select',
      options: Object.values(INFO_CARD_SIZE),
      description: 'Tamaño del bloque: `small`, `medium` o `large`.',
      table: { category: 'Layout', defaultValue: { summary: 'medium' } },
    },
    status: {
      control: 'select',
      options: Object.values(INFO_CARD_STATUS),
      description: 'Estado visual para el color de acento del icono.',
      table: { category: 'State', defaultValue: { summary: 'default' } },
    },
    className: {
      control: false,
      description: 'Clase adicional para composición externa.',
      table: { category: 'Advanced' },
    },
  },
} satisfies Meta<typeof InfoCard>

export default meta

type Story = StoryObj<typeof meta>

export const WithDescription: Story = {}

export const TitleOnly: Story = {
  args: {
    icon: 'check-circle',
    title: 'Validación automática',
    description: undefined,
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
}

export const Warning: Story = {
  args: {
    status: 'warning',
    icon: 'zap',
    title: 'Atención operativa',
  },
}
