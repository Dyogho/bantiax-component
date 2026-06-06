import type { Meta, StoryObj } from '@storybook/react-vite'
import DeviceMockup from '@/components/device-mockup/device-mockup'
import '@/landing/landing.css'

const meta = {
  title: 'Landing/DeviceMockup',
  component: DeviceMockup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component:
          'DeviceMockup es un componente presentacional para simular un celular con un título superior y una imagen dentro del marco. La sección dueña controla qué imagen se muestra.',
      },
    },
  },
  args: {
    src: '/image1.png',
    alt: '',
    loading: 'lazy',
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Imagen renderizada dentro del borde del celular. Hereda la prop nativa `src` de img.',
      table: { category: 'Image props' },
    },
    alt: {
      control: 'text',
      description: 'Alt de la imagen. Puede quedar vacío si es decorativa. Hereda la prop nativa `alt` de img.',
      table: { category: 'Accessibility' },
    },
    loading: {
      control: 'select',
      options: ['eager', 'lazy'],
      description: 'Prop nativa de img para estrategia de carga.',
      table: { category: 'Image props' },
    },
    containerClassName: { control: false, table: { category: 'Advanced' } },
    className: { control: false, table: { category: 'Advanced' } },
  },
} satisfies Meta<typeof DeviceMockup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FastApproval: Story = {
  args: {
    src: '/image2.png',
  },
}
