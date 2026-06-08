import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CardOrientation } from '@/components/card/card'
import HeroCard from '@/components/hero-card/hero-card'
import type { IconName } from '@/components/icon/icon'
import '@/landing/legacy/legacy.css'

type HeroCardStoryProps = {
  icon: IconName
  title: string
  description: string
  orientation?: CardOrientation
  isActive?: boolean
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const meta = {
  title: 'Landing/Cards/HeroCard',
  component: HeroCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component:
          'HeroCard es una molécula basada en Card minimal. Puede renderizarse como `article` estático o como `button` interactivo cuando recibe `onClick`; delega orientación, interacción y estado activo al componente Card. La imagen activa del hero se maneja en la sección Hero, no dentro de HeroCard.',
      },
    },
  },
  args: {
    icon: 'briefcase',
    title: 'Banca e Infraestructura',
    description: 'Creamos infraestructura financiera digital preparada para operar, escalar y proteger cada etapa del negocio.',
    orientation: 'vertical',
    isActive: false,
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['briefcase', 'cpu', 'trending-up', 'globe', 'users', 'layers', 'zap', 'lock'],
      description: 'Icono principal del card.',
      table: { category: 'Content' },
    },
    title: {
      control: 'text',
      description: 'Título visible del HeroCard.',
      table: { category: 'Content' },
    },
    description: {
      control: 'text',
      description: 'Descripción revelada por el estado activo/hover del card.',
      table: { category: 'Content' },
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Orientación heredada de Card. `horizontal` apila en mobile y pasa a lado a lado en desktop.',
      table: { category: 'Layout', defaultValue: { summary: 'vertical' } },
    },
    isActive: {
      control: 'boolean',
      description: 'Marca el card como activo/seleccionado y usa `status="select"` con border primario.',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    onClick: {
      action: 'clicked',
      description: 'Si existe, HeroCard renderiza como `button` y activa interaction `active`.',
      table: { category: 'Events' },
    },
    onMouseEnter: {
      action: 'mouse entered',
      table: { category: 'Events' },
    },
    onMouseLeave: {
      action: 'mouse left',
      table: { category: 'Events' },
    },
  },
} satisfies Meta<HeroCardStoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Uso estático: al no recibir `onClick`, se renderiza como `article` y sin interacción de elevación.',
      },
    },
  },
}

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Uso interactivo: al recibir `onClick`, se renderiza como `button` y usa interaction `active`.',
      },
    },
  },
  args: {
    onClick: () => undefined,
  },
}

export const Selected: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estado activo/seleccionado. Delega `status="select"` y `border="primary"` al Card.',
      },
    },
  },
  args: {
    isActive: true,
    onClick: () => undefined,
  },
}

export const Horizontal: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Orientación horizontal delegada a Card. Mantiene comportamiento responsive.',
      },
    },
  },
  args: {
    orientation: 'horizontal',
  },
}
