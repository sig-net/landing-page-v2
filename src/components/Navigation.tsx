import { useState } from 'react'

import burgerMenu from '../assets/burger-menu.svg'
import signetworkLogo from '../assets/signetwork-logo.svg'
import ArrowButton from './ArrowButton'

type NavigationProps = {
  navItems: readonly string[]
}

const Navigation = ({ navItems }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen((open) => !open)

  return (
    <nav className="border-clam-shell-500 bg-clam-shell-50 border-b">
      <div className="border-clam-shell-500 flex h-[74px] items-center justify-between border-b px-5 xl:hidden">
        <img src={signetworkLogo} alt="Sig.Network" className="h-[34px] w-[200px]" />
        <button
          type="button"
          className="flex items-center"
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          <img src={burgerMenu} alt="Menu" className="h-8 w-8" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed right-0 bottom-0 left-0 z-40 bg-black/50 xl:hidden"
            style={{ top: 'var(--header-offset)' }}
            onClick={toggleMenu}
          />
          <div
            className="border-clam-shell-500 bg-clam-shell-50 fixed right-0 left-0 z-50 shadow-lg xl:hidden"
            style={{ top: 'var(--header-offset)' }}
          >
            {navItems.map((item) => (
              <div key={item} className="border-clam-shell-500 flex h-[74px] items-center border-b px-5">
                <span className="text-dark-neutral-500 text-sm leading-5 font-medium">{item}</span>
              </div>
            ))}
            <div className="border-clam-shell-500 flex h-[74px] items-center border-b px-5">
              <ArrowButton variant="pastel">Start building</ArrowButton>
            </div>
          </div>
        </>
      )}

      <div className="hidden h-[180px] items-center xl:flex">
        <div className="border-clam-shell-500 flex h-[180px] shrink-0 items-center border-t border-l px-[60px]">
          <img src={signetworkLogo} alt="Sig.Network" className="h-[34px] w-[200px]" />
        </div>
        <div className="ml-auto flex h-[180px] items-stretch">
          {navItems.map((item) => (
            <div
              key={item}
              className="border-clam-shell-500 flex h-[180px] w-[180px] shrink-0 items-center border-t border-r border-l px-[60px]"
            >
              <span className="text-dark-neutral-500 text-sm leading-5 font-medium">{item}</span>
            </div>
          ))}
          <div className="border-clam-shell-500 flex h-[180px] shrink-0 items-center border-t border-r border-l px-[60px]">
            <ArrowButton variant="pastel">Start building</ArrowButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
