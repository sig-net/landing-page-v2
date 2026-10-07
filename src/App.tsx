import FooterSection from './components/FooterSection'
import LiveBanner from './components/LiveBanner'
import Navigation from './components/Navigation'
import {
  Ask,
  Compliance,
  Ecosystems,
  EveryChain,
  Experience,
  MovingTheLine,
  NightHero,
  WhatIs,
} from './components/NightModeSections'
import { footerColumns, navItems } from './content'
import './nightmode.css'

const App = () => (
  <div className="nm min-h-screen">
    <LiveBanner />
    <Navigation navItems={navItems} />
    <NightHero />
    <Ecosystems />
    <WhatIs />
    <Experience />
    <MovingTheLine />
    <EveryChain />
    <Compliance />
    <Ask />
    <div className="page-gradient">
      <FooterSection columns={footerColumns} />
    </div>
  </div>
)

export default App
