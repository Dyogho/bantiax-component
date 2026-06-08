import type { Meta, StoryObj } from '@storybook/react-vite'
import Button, { BUTTON_COLOR, BUTTON_SIZE, BUTTON_STATE } from '@/components/button/button'
import '@/landing/legacy/legacy.css'

const meta = {
  title: 'Landing/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Botón reutilizable de Bantiax. Usa tokens globales de paleta mediante variables locales del componente: primary usa fondo primario/text black; secondary usa fondo secundario/text main. Los estados documentados son `default`, `danger`, `disabled` y `loading`.'
      },
    },
  },
  args: {
    text: 'Contáctanos',
    color: 'primary',
    size: 'medium',
    state: 'default',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto visible del botón.',
      table: { category: 'Content' },
    },
    color: {
      control: 'select',
      options: Object.values(BUTTON_COLOR),
      description: '`primary` usa `--color-primary` con `--text-black`; `secondary` usa `--color-secondary` con `--text-main`.',
      table: { category: 'Appearance', defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: Object.values(BUTTON_SIZE),
      description: 'Tamaño de layout consumido por componentes: `small`, `medium` o `large`.',
      table: { category: 'Layout', defaultValue: { summary: 'medium' } },
    },
    state: {
      control: 'select',
      options: Object.values(BUTTON_STATE),
      description: 'Estado funcional/visual del botón. Valores permitidos: `default`, `danger`, `disabled` y `loading`.',
      table: { category: 'State', defaultValue: { summary: 'default' } },
    },
    icon: {
      control: 'select',
      options: [undefined, 'clock', 'arrow-right', 'key', 'lightbulb', 'loading'],
      description: 'Icono opcional. En estado `loading` se fuerza el icono de carga.',
      table: { category: 'Content' },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el botón de forma nativa. Visualmente equivale al estado `disabled`.',
      table: { category: 'State' },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante principal. Usa token `--color-primary` como fondo y `--text-black` como texto.'
      },
    },
  },
  args: {
    text: 'Contáctanos',
    color: 'primary',
    size: 'medium',
    state: 'default',
    icon: 'clock',
  },
}

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante secundaria. Usa token `--color-secondary` como fondo y `--text-main` como texto.'
      },
    },
  },
  args: {
    text: 'Ver solución',
    color: 'secondary',
    size: 'medium',
    state: 'default',
    icon: 'arrow-right',
  },
}

export const Danger: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estado destructivo. Usa `--brand-danger`/`--color-danger` y `--text-main` mediante variables locales del botón.'
      },
    },
  },
  args: {
    text: 'Eliminar',
    color: 'primary',
    size: 'medium',
    state: 'danger',
  },
}

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estado de carga. Renderiza automáticamente el icono `loading`, activa `aria-busy` y deshabilita el botón.',
      },
    },
  },
  args: {
    text: 'Cargando',
    color: 'primary',
    size: 'medium',
    state: 'loading',
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estado deshabilitado. Mantiene la apariencia primary con opacidad reducida y bloquea interacción.',
      },
    },
  },
  args: {
    text: 'Deshabilitado',
    color: 'primary',
    size: 'medium',
    state: 'disabled',
  },
}

export const Large: Story = {
  args: {
    text: 'Botón grande',
    color: 'primary',
    size: 'large',
    state: 'default',
  },
}

export const Mediun: Story = {
  args: {
    text: 'Boton mediano',
    color: 'primary',
    size: 'medium',
    state: 'default',
  },
}

export const Small: Story = {
  args: {
    text: 'Botón pequeño',
    color: 'secondary',
    size: 'small',
    state: 'default',
  },
}
