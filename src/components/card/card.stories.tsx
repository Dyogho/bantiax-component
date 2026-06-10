import type { Meta, StoryObj } from '@storybook/react-vite'
import Card, {
  CARD_BG,
  CARD_BORDER,
  CARD_INTERACTION,
  CARD_ORIENTATION,
  CARD_SIZE,
  CARD_STATUS,
  CARD_TEXT,
  CARD_VARIANT,
} from '@/components/card/card'
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
          'Card reutilizable neutral con variantes visuales, tamaños responsivos, orientación vertical/horizontal, interacción opcional, estados y tokens limitados de paleta para bg, border y text. Los tamaños controlan spacing interno, no max-width; el contenedor padre o el componente compuesto define restricciones de ancho. Nota: `bg` es un override pensado principalmente para variantes con fondo (`filled` y `outlined-filled`); usarlo en `minimal` u `outlined` rompe intencionalmente la semántica base de esas variantes.'
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
    bg: 'default',
    border: 'default',
    text: 'default',
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
        '`minimal` sin bordes ni fondo; `outlined-filled` con border y bg; `outlined` con border sin bg; `filled` sin border y con bg primary/text black por defecto.',
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
    bg: {
      control: 'select',
      options: Object.values(CARD_BG),
      description: 'Token limitado de background. `default` respeta la variante. Uso recomendado: `filled` y `outlined-filled`. En `minimal` u `outlined` funciona como override explícito y rompe la semántica “sin bg”.',
      table: { category: 'Palette tokens', defaultValue: { summary: 'default' } },
    },
    border: {
      control: 'select',
      options: Object.values(CARD_BORDER),
      description: 'Token limitado de border. `default` respeta la variante; los demás sobrescriben `--card-border`.',
      table: { category: 'Palette tokens', defaultValue: { summary: 'default' } },
    },
    text: {
      control: 'select',
      options: Object.values(CARD_TEXT),
      description: 'Token limitado de color de texto. `default` respeta la variante.',
      table: { category: 'Palette tokens', defaultValue: { summary: 'default' } },
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
        story: 'Variante con borde, background y borde redondeado.',
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
        story: 'Variante con borde y borde redondeado, sin background. Si se usa `bg`, se considera un override explícito que rompe esta semántica.'
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
        story: 'Variante con background primary y texto black por defecto, sin border.',
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
        story: 'Interacción activa: el card se levanta ligeramente en hover o focus visible, sin shadow base.',
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

export const PrimaryBorder: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Token de border primario sobre variante outlined-filled.',
      },
    },
  },
  args: {
    border: 'primary',
    variant: 'outlined-filled',
  },
}

export const SecondaryFilled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Card solo con background secondary usando `variant="filled"`. Como secondary es oscuro, se usa `text="main"` para contraste.'
      },
    },
  },
  args: {
    bg: 'secondary',
    text: 'main',
    variant: 'filled',
  },
}

export const DangerOutlined: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo usando token danger en border, sin agregar valores libres ni HEX.',
      },
    },
  },
  args: {
    border: 'danger',
    variant: 'outlined',
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
