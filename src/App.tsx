import LegacyLanding from '@/landing/legacy/LegacyLanding'
import LandingV2 from '@/landing/v2/LandingV2'

function App() {
  const landingVersion = new URLSearchParams(window.location.search).get('landing')

  return landingVersion === 'v2' ? <LandingV2 /> : <LegacyLanding />
}

export default App
