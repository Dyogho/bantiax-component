import type { Meta, StoryObj } from '@storybook/react-vite'
import ScrollSpyMenu from '@/components/scroll-spy-menu/scroll-spy-menu'
import '@/landing/legacy/legacy.css'

const demoSections = [
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'core', label: 'Core' },
  { id: 'collections', label: 'Collections' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'cards', label: 'Cards' },
  { id: 'insurance', label: 'Insurance' },
]

const meta = {
  title: 'Landing/ScrollSpyMenu',
  component: ScrollSpyMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Menú sticky con scroll-spy. Marca como activa la sección visible y permite navegar con scroll suave.',
      },
    },
  },
  args: {
    sections: demoSections,
    offset: 110,
  },
  argTypes: {
    sections: {
      control: false,
      description: 'Lista de secciones que deben existir en el documento con el mismo `id`.',
      table: { category: 'Content' },
    },
    offset: {
      control: 'number',
      description: 'Offset superior para activar secciones y calcular el scroll.',
      table: { category: 'Behavior', defaultValue: { summary: '110' } },
    },
  },
  decorators: [
    (Story) => (
      <div className="scroll-spy-story">
        <Story />
        <main className="scroll-spy-story__content">
          {demoSections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-spy-story__section">
              <span className="scroll-spy-story__eyebrow">Sección {index + 1}</span>
              <h2>{section.label}</h2>
              <p>
                Contenido de ejemplo para validar el comportamiento sticky, el estado activo y el scroll suave del menú.
              </p>
            </section>
          ))}
        </main>
      </div>
    ),
  ],
} satisfies Meta<typeof ScrollSpyMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
