import type { ReactNode } from 'react'
import LegacyHeader from '@/landing/legacy/components/legacy-header/legacy-header'
import Footer from '@/landing/legacy/pages/footer/footer'

type LegacyLayoutProps = {
  children: ReactNode
}

function LegacyLayout({ children }: LegacyLayoutProps) {
  return (
    <div id="top" className="landing-container legacy-landing">
      <LegacyHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default LegacyLayout
export type { LegacyLayoutProps }
