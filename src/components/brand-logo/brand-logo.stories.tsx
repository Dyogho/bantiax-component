import type { Meta, StoryObj } from '@storybook/react-vite'
import BrandLogo from '@/components/brand-logo/brand-logo'
import '@/landing/legacy/legacy.css'

const meta = {
  title: 'Landing/Brand/BrandLogo',
  component: BrandLogo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} satisfies Meta<typeof BrandLogo>

export default meta

type Story = StoryObj<typeof meta>

export const Facephi: Story = {
  args: {
    src: 'https://doinperu.com/bantiax/wp-content/themes/BantiaxTheme/images/facephi.svg',
    alt: 'Facephi',
  },
}
