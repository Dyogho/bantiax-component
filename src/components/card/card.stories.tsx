import type { Meta, StoryObj } from '@storybook/react-vite'
import Card, { CARD_INTERACTION, CARD_ORIENTATION, CARD_SIZE, CARD_STATUS, CARD_VARIANT } from '@/components/card/card'
import '@/landing/landing.css'

const demoContent = (
  <>
    <strong>Card title</strong>
    <span>Contenido de ejemplo para validar tamaños, variantes, orientación e interacción.</span>
  </>
)

const meta = {
  title: 'Landing/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Card reutilizable con variantes visuales, tamaños responsivos, orientación vertical/horizontal, interacción opcional, estados `default`, `select` o `disabled`, y color dinámico mediante `themeColor`.',
      },
    },
  },
  args: {
    children: demoContent,
    variant: 'outlined-filled',
    size: 'medium',
    interaction: 'none',
    orientation: 'vertical',
    status: 'default',
    themeColor: 'var(--color-primary)',
  },
  argTypes: {
    children: {
      control: false,
      description: 'Contenido renderizado dentro del card.',
      table: { category: 'Content' },
    },
    variant: {
      control: 'select',
      options: Object.values(CARD_VARIANT),
      description:
        '`minimal` sin bordes ni fondo; `outlined-filled` con border y bg; `outlined` con border sin bg; `filled` sin border y con bg.',
      table: { category: 'Appearance', defaultValue: { summary: 'minimal' } },
    },
    size: {
      control: 'select',
      options: Object.values(CARD_SIZE),
      description: 'Tamaño responsivo del card: `small`, `medium` o `large`.',
      table: { category: 'Layout', defaultValue: { summary: 'medium' } },
    },
    interaction: {
      control: 'select',
      options: Object.values(CARD_INTERACTION),
      description: '`none` mantiene el card estático; `active` eleva el card en hover/focus.',
      table: { category: 'Behavior', defaultValue: { summary: 'none' } },
    },
    orientation: {
      control: 'select',
      options: Object.values(CARD_ORIENTATION),
      description: '`vertical` apila contenido; `horizontal` apila en mobile y organiza al lado en desktop.',
      table: { category: 'Layout', defaultValue: { summary: 'vertical' } },
    },
    status: {
      control: 'select',
      options: Object.values(CARD_STATUS),
      description: 'Estado del card: `default`, `select` o `disabled`.',
      table: { category: 'State', defaultValue: { summary: 'default' } },
    },
    themeColor: {
      control: 'text',
      description:
        'Token CSS o color directo usado por el card. Ejemplos: `var(--color-primary)`, `var(--color-secondary)`, `#ff007f`.',
      table: { category: 'Style tokens', defaultValue: { summary: 'var(--border-cyan)' } },
    },
    as: {
      control: false,
      description: 'Elemento HTML o componente usado como raíz del card.',
      table: { category: 'Advanced' },
    },
    className: {
      control: false,
      description: 'Clase adicional para extender estilos desde el consumidor.',
      table: { category: 'Advanced' },
    },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Minimal: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante sin borde, sin background y con radio de borde en 0.',
      },
    },
  },
  args: {
    variant: 'minimal',
  },
}

export const OutlinedFilled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante con borde, background y borde redondeado. El borde usa `themeColor`.',
      },
    },
  },
  args: {
    variant: 'outlined-filled',
  },
}

export const Outlined: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante con borde y borde redondeado, sin background. El borde usa `themeColor`.',
      },
    },
  },
  args: {
    variant: 'outlined',
  },
}

export const Filled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante con background y borde redondeado, sin border.',
      },
    },
  },
  args: {
    variant: 'filled',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    variant: 'outlined-filled',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    variant: 'outlined-filled',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    variant: 'outlined-filled',
  },
}

export const Active: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interacción activa: el card se levanta ligeramente en hover o focus visible usando `themeColor` para la sombra.',
      },
    },
  },
  args: {
    interaction: 'active',
    variant: 'outlined-filled',
  },
}

export const Horizontal: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Layout horizontal: se muestra apilado en mobile y lado a lado desde desktop.',
      },
    },
  },
  args: {
    orientation: 'horizontal',
    variant: 'outlined-filled',
    children: (
      <>
        <div aria-hidden="true" style={{ background: 'var(--color-primary)', borderRadius: '0.75rem', minHeight: '5rem', minWidth: '5rem' }} />
        <span>
          <strong>Horizontal card</strong>
          <br />
          En mobile el contenido queda arriba/abajo; en desktop queda lado a lado.
        </span>
      </>
    ),
  },
}

export const PrimaryThemeColor: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Usa un token global primario sin agregar clases nuevas al CSS del componente.',
      },
    },
  },
  args: {
    themeColor: 'var(--color-primary)',
    variant: 'outlined-filled',
  },
}

export const SecondaryThemeColor: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Usa un token global secundario reutilizando la misma API dinámica `themeColor`.',
      },
    },
  },
  args: {
    themeColor: 'var(--color-secondary)',
    variant: 'outlined',
  },
}

export const CustomThemeColor: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con color directo. Permite tokens nuevos como warning/success o HEX temporales sin tocar Card.',
      },
    },
  },
  args: {
    themeColor: '#ff007f',
    variant: 'outlined-filled',
  },
}

export const Selected: Story = {
  args: {
    status: 'select',
    variant: 'outlined-filled',
  },
}

export const Disabled: Story = {
  args: {
    status: 'disabled',
    variant: 'outlined-filled',
  },
}
