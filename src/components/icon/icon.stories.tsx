import type { Meta, StoryObj } from '@storybook/react-vite'
import Icon, { ICON_NAME } from '@/components/icon/icon'
import '@/landing/legacy/legacy.css'

const CLOUD_ICON_URL = 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg'

const meta = {
  title: 'Landing/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Icon separa explícitamente dos casos: `name` para iconos internos desde `ICON_NAME`, y `src` para imágenes locales/remotas. No se mezcla lista con URL en la misma prop.',
      },
    },
  },
  args: {
    name: 'globe',
    size: '3rem',
  },
  argTypes: {
    name: {
      control: 'select',
      options: [undefined, ...Object.values(ICON_NAME)],
      description: 'Nombre del icono interno desde la lista controlada `ICON_NAME`.',
      table: { category: 'Internal icon list' },
    },
    src: {
      control: 'text',
      description: 'URL/path de imagen local o nube. No se usa junto con `name`.',
      table: { category: 'Image source' },
    },
    size: {
      control: 'text',
      description: 'Tamaño cuadrado usando unidades modernas, por ejemplo `3rem`.',
      table: { category: 'Layout', defaultValue: { summary: '1.5rem' } },
    },
    width: {
      control: 'text',
      description: 'Ancho explícito cuando el icono no es cuadrado.',
      table: { category: 'Layout' },
    },
    height: {
      control: 'text',
      description: 'Alto explícito cuando el icono no es cuadrado.',
      table: { category: 'Layout' },
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para iconos por URL. Si está vacío se trata como decorativo.',
      table: { category: 'Accessibility' },
    },
    className: {
      control: false,
      table: { category: 'Advanced' },
    },
    style: {
      control: false,
      table: { category: 'Advanced' },
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const FromInternalList: Story = {
  parameters: {
    controls: { exclude: ['src', 'alt'] },
    docs: {
      description: {
        story: 'Uso con icono interno: solo se usa `name` desde la lista controlada `ICON_NAME`.',
      },
    },
  },
  args: {
    name: 'globe',
    size: '3rem',
  },
}

export const FromCloudUrl: Story = {
  parameters: {
    controls: { exclude: ['name'] },
    docs: {
      description: {
        story: 'Uso con imagen externa/local: solo se usa `src`, no `name`.',
      },
    },
  },
  args: {
    name: undefined,
    src: CLOUD_ICON_URL,
    alt: 'React',
    size: '3rem',
  },
}
