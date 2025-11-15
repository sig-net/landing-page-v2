import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import LiveBanner from './components/LiveBanner'
import NarrativeSections from './components/NarrativeSections'
import Navigation from './components/Navigation'
import PrinciplesSection from './components/PrinciplesSection'
import ReleasesSection from './components/ReleasesSection'
import StackSection from './components/StackSection'
import {
  footerColumns,
  narrativeSlices,
  navItems,
  principles,
  releases,
  stackSteps,
} from './content'

const App = () => (
  <div className="page-gradient min-h-screen text-white">
    <LiveBanner />
    <Navigation navItems={navItems} />
    <HeroSection />
    <NarrativeSections slices={narrativeSlices} />
    <StackSection steps={stackSteps} />
    <PrinciplesSection principles={principles} />
    <ReleasesSection releases={releases} />
    <FooterSection columns={footerColumns} />
  </div>
)

export default App
