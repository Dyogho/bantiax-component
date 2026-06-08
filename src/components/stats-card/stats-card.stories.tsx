import type { Meta, StoryObj } from '@storybook/react-vite'
import StatsCard, {
  STATS_CARD_COLOR,
  STATS_CARD_ORIENTATION,
  STATS_CARD_SIZE,
  STATS_CARD_STATUS,
} from '@/components/stats-card/stats-card'
import '@/landing/legacy/legacy.css'

const meta = {
  title: 'Landing/StatsCard',
  component: StatsCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'StatsCard es un componente independiente para métricas: valor estadístico + title, con icono opcional. Usa `icon` para iconos internos o `iconSrc` para imágenes externas/locales; no se deben mezclar. El layout se controla con `orientation`, los tamaños son `small | medium | large`, no tiene hover/interacciones y permite editar color de icono, valor y title con tokens limitados.',
      },
    },
  },
  args: {
    icon: 'globe',
    value: '+ 20',
    title: 'Países',
    size: 'medium',
    status: 'default',
    orientation: 'horizontal',
    iconColor: 'default',
    valueColor: 'default',
    titleColor: 'default',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: [undefined, 'globe', 'users', 'dollar-sign', 'trending-up', 'check-circle'],
      description: 'Icono interno opcional. No usar junto con `iconSrc`.',
      table: { category: 'Content' },
    },
    iconSrc: {
      control: 'text',
      description: 'URL/path para icono externo o local. No usar junto con `icon`.',
      table: { category: 'Content' },
    },
    iconAlt: {
      control: 'text',
      description: 'Texto alternativo para `iconSrc`. Si está vacío, la imagen es decorativa.',
      table: { category: 'Content' },
    },
    iconWidth: {
      control: 'text',
      description: 'Ancho del icono con unidades modernas, por ejemplo `3rem`.',
      table: { category: 'Layout' },
    },
    iconHeight: {
      control: 'text',
      description: 'Alto del icono con unidades modernas, por ejemplo `3rem`.',
      table: { category: 'Layout' },
    },
    value: {
      control: 'text',
      description: 'Valor estadístico principal.',
      table: { category: 'Content' },
    },
    title: {
      control: 'text',
      description: 'Título descriptivo de la métrica.',
      table: { category: 'Content' },
    },
    orientation: {
      control: 'select',
      options: Object.values(STATS_CARD_ORIENTATION),
      description: '`horizontal` acomoda icono y contenido en fila; `vertical` apila el contenido para métricas protagonistas.',
      table: { category: 'Layout', defaultValue: { summary: 'horizontal' } },
    },
    size: {
      control: 'select',
      options: Object.values(STATS_CARD_SIZE),
      description: 'Tamaño/layout responsivo del stat: `small`, `medium` o `large`.',
      table: { category: 'Layout', defaultValue: { summary: 'medium' } },
    },
    status: {
      control: 'select',
      options: Object.values(STATS_CARD_STATUS),
      description: 'Estado visual base basado en tokens: `default`, `success`, `danger` o `warning`.',
      table: { category: 'State', defaultValue: { summary: 'default' } },
    },
    iconColor: {
      control: 'select',
      options: Object.values(STATS_CARD_COLOR),
      description: 'Override de color del icono usando tokens limitados.',
      table: { category: 'Palette tokens', defaultValue: { summary: 'default' } },
    },
    valueColor: {
      control: 'select',
      options: Object.values(STATS_CARD_COLOR),
      description: 'Override de color del valor estadístico usando tokens limitados.',
      table: { category: 'Palette tokens', defaultValue: { summary: 'default' } },
    },
    titleColor: {
      control: 'select',
      options: Object.values(STATS_CARD_COLOR),
      description: 'Override de color del title usando tokens limitados.',
      table: { category: 'Palette tokens', defaultValue: { summary: 'default' } },
    },
    className: {
      control: false,
      description: 'Clase adicional para composición externa.',
      table: { category: 'Advanced' },
    },
  },
} satisfies Meta<typeof StatsCard>

export default meta

type Story = StoryObj<typeof meta>

export const HorizontalWithIcon: Story = {
  parameters: {
    controls: { exclude: ['iconSrc', 'iconAlt'] },
    docs: {
      description: {
        story: 'Layout horizontal usando un icono interno mediante `icon`.',
      },
    },
  },
  args: {
    icon: 'globe',
    value: '+ 20',
    title: 'Países',
    orientation: 'horizontal',
  },
}

export const HorizontalWithImageIcon: Story = {
  parameters: {
    controls: { exclude: ['icon'] },
    docs: {
      description: {
        story: 'Layout horizontal usando una imagen externa mediante `iconSrc`.',
      },
    },
  },
  args: {
    icon: undefined,
    iconAlt: 'Aliados',
    iconHeight: '5.25rem',
    iconSrc: 'https://doinperu.com/bantiax/wp-content/themes/BantiaxTheme/images/aliados.svg',
    iconWidth: '7.4375rem',
    value: '+ 500',
    title: 'Socios Comerciales',
    orientation: 'horizontal',
  },
}


export const VerticalWithoutIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Layout vertical sin icono: útil para métricas protagonistas como años de experiencia.',
      },
    },
  },
  args: {
    icon: undefined,
    value: '+15',
    title: 'Años de Experiencia',
    orientation: 'vertical',
    size: 'large',
  },
}

export const CustomColors: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo editando color de icono, valor y title de forma independiente con tokens limitados.',
      },
    },
  },
  args: {
    icon: 'trending-up',
    value: '+ 90M',
    title: 'Créditos monitoreados',
    iconColor: 'warning',
    valueColor: 'success',
    titleColor: 'main',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    orientation: 'horizontal',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    orientation: 'horizontal',
  },
}

export const Large: Story = {
  args: {
    icon: undefined,
    size: 'large',
    value: '+15',
    title: 'Años de Experiencia',
    orientation: 'vertical',
  },
}

export const Success: Story = {
  args: {
    status: 'success',
    icon: 'check-circle',
    value: '+ 98%',
    title: 'Procesos exitosos',
    orientation: 'horizontal',
  },
}

export const Danger: Story = {
  args: {
    status: 'danger',
    icon: 'trending-up',
    value: '- 30%',
    title: 'Riesgo reducido',
    orientation: 'horizontal',
  },
}

export const Warning: Story = {
  args: {
    status: 'warning',
    icon: 'dollar-sign',
    value: '+ 90M',
    title: 'Créditos monitoreados',
    orientation: 'horizontal',
  },
}
