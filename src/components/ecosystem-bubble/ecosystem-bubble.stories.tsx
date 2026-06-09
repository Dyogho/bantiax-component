import type { Meta, StoryObj } from '@storybook/react-vite'
import EcosystemBubble from '@/components/ecosystem-bubble/ecosystem-bubble'
import '@/landing/legacy/legacy.css'

const meta = {
  title: 'Landing/EcosystemBubble',
  component: EcosystemBubble,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Burbuja visual de ecosistema para mostrar el hogar como centro y los servicios auxiliares alrededor con animación de ondas e interacción hover/focus.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="ecosystem-bubble-story">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EcosystemBubble>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
