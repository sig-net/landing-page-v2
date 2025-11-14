import { useState, type CSSProperties } from 'react'

import linesTop from './assets/lines-top.svg'
import linesBottom from './assets/lines-bottom.svg'
import signetworkLogo from './assets/signetwork-logo.svg'
import arrowUpRight from './assets/arrow-up-right.svg'
import liveMainnet from './assets/live-mainnet.svg'
import burgerMenu from './assets/burger-menu.svg'
import techIllustration1 from './assets/technical-illustration-1.svg'
import techIllustration2 from './assets/technical-illustration-2.svg'
import techIllustration3 from './assets/technical-illustration-3.svg'
import techIllustration4 from './assets/technical-illustration-4.svg'
import techIllustration5 from './assets/technical-illustration-5.svg'
import stackDividerArrowRight from './assets/stack-divider-arrow-right.svg'
import stackDividerArrowLeft from './assets/stack-divider-arrow-left.svg'

const softSurfaceStyle: CSSProperties = {
  background: 'linear-gradient(180deg, #f5f0ee 0%, #edf5d6 100%)',
}

const navItems = ['What?', 'Roadmap', 'Blog']

const narrativeSlices = [
  {
    image: techIllustration1,
    alt: 'Technical diagram showing cross-chain DEX connectivity',
    title: 'Sig.Network is a universal layer that makes apps native across chains.',
    description:
      'We enable smart contracts on different chains to interact directly, quickly, and securely by signing native messages with decentralized private keys.',
  },
  {
    image: techIllustration2,
    alt: 'Technical diagram showing synchronized execution',
    title: 'Sig.Network synchronizes state and execution across ecosystems.',
    description: `When your contract calls Sig.Network's SDK, unsigned transactions are generated for the target chain.\n\nThe MPC signers validate and execute these transactions, returning the results to your original contract.`,
  },
]

const stackSteps = [
  {
    title: 'Your Application',
    text: 'Deploy contracts and infrastructure normally. Integrate with the Sig.Network SDK to gain cross-chain reach.',
    tone: 'bg-brand-50',
  },
  {
    title: 'Sig.Network SDK',
    text: 'Chain-specific libraries convert your cross-contract calls into unsigned native transactions for any target chain.',
    tone: 'bg-brand-300',
  },
  {
    title: 'MPC Signer Network',
    text: 'A decentralized MPC validator set collects those transactions and produces secure threshold signatures.',
    tone: 'bg-brand-600',
  },
  {
    title: 'Cross-chain Message Router',
    text: "Native signed transactions are sent to the destination chain's mempool or execution layer.",
    tone: 'bg-brand-800',
  },
  {
    title: 'Native Chain Execution',
    text: 'The target chain runs them as standard transactions from an external account owned by your contract, with results returned to your application.',
    tone: 'bg-brand-950',
  },
]

const principles = [
  {
    number: '1.',
    title: 'Build where you are.',
    paragraphs: [
      'Deploy on the chain you already use. Keep your contracts, tooling, and addresses.',
      'No regressions on anything your app already does.',
    ],
  },
  {
    number: '2.',
    title: 'Standard technologies.',
    paragraphs: [
      'Proven cryptographic primitives and native transaction formats.',
      'No magic contracts and no exotic cryptography.',
    ],
  },
  {
    number: '3.',
    title: 'Minimal footprint.',
    paragraphs: [
      'Add one function call, the rest is your contract.',
      'No migrations and no new dependencies.',
    ],
  },
]

const releases = [
  {
    badge: 'Mainnet',
    badgeType: 'mainnet' as const,
    date: 'March 2025',
    title: 'Ethereum → Any Network',
    description: 'Execute transactions on any blockchain from Ethereum contracts.',
  },
  {
    badge: 'Mainnet',
    badgeType: 'mainnet' as const,
    date: 'August 2025',
    title: 'Solana → Any Network',
    description: 'Execute transactions on any blockchain from Solana contracts.',
  },
  {
    badge: 'Testnet',
    badgeType: 'testnet' as const,
    date: 'October 2025',
    title: 'Ethereum ↔ Solana',
    description: 'Full bidirectional communication with response handling.',
  },
  {
    badge: 'Development',
    badgeType: 'development' as const,
    date: 'November 2025',
    title: '+Bitcoin',
    description: 'Use native Bitcoin liquidity anywhere',
  },
  {
    badge: 'Development',
    badgeType: 'development' as const,
    date: 'January 2026',
    title: '+Hyperliquid',
    description: 'Additional blockchain integrations and protocol enhancements.',
  },
]

const getBadgeStyles = (type: 'mainnet' | 'testnet' | 'development') => {
  switch (type) {
    case 'mainnet':
      return 'bg-[#deffd6] border-[#27ed02] text-[#1a8d07]'
    case 'testnet':
      return 'bg-[#ffe8d9] border-[#f48a38] text-[#d16310]'
    case 'development':
      return 'bg-[#e9e8f0] border-[#d7d5e2] text-[#6c657d]'
  }
}

const footerColumns = [
  { heading: 'Learn', links: ['About', 'Blog'] },
  { heading: 'Build', links: ['Docs', 'Demo'] },
  { heading: 'Connect', links: ['Careers', 'Twitter'] },
]

const ArrowIcon = () => (
  <img src={arrowUpRight} alt="" className="h-5 w-5" aria-hidden="true" />
)

const StackDivider = ({
  label,
  direction = 'right',
  vertical = false,
}: {
  label: string
  direction?: 'left' | 'right'
  vertical?: boolean
}) => (
  <div
    className={`flex ${vertical ? 'flex-row items-start gap-[12px]' : 'flex-row items-center gap-[25px]'}`}
  >
    <p className="font-mono-custom text-dark-neutral-400 text-[14px] leading-[20px] tracking-[0.6em] whitespace-nowrap uppercase">
      {label}
    </p>
    {!vertical && (
      <div className="relative h-[1px] flex-1">
        <img
          src={direction === 'left' ? stackDividerArrowLeft : stackDividerArrowRight}
          alt=""
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
      </div>
    )}
    {vertical && (
      <div className="relative w-[1px] flex-1">
        <div className="h-full w-full bg-gradient-to-b from-[rgba(197,183,173,0.15)] to-[rgba(197,183,173,0.6)]" />
      </div>
    )}
  </div>
)

const TechnicalPanel = ({ src, alt }: { src: string; alt: string }) => (
  <div className="border-dark-neutral-950/50 bg-dark-neutral-950 relative w-full overflow-hidden border">
    <img
      src={src}
      alt={alt}
      className="block min-h-[320px] w-full object-cover"
      loading="lazy"
    />
  </div>
)

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="bg-dark-neutral-950 min-h-screen text-white">
      {/* Live Banner with RGB Effect */}
      <img src={liveMainnet} alt="Mainnet is live" className="h-[30px] w-full object-cover" />

    {/* Navigation Menu - Desktop: 180px height, Mobile: 74px height */}
    <nav className="border-clam-shell-500 bg-clam-shell-50 border-b">
      {/* Mobile: Logo + Hamburger */}
      <div className="flex h-[74px] items-center justify-between border-clam-shell-500 border-b xl:hidden">
        <div className="flex items-center px-[20px]">
          <img src={signetworkLogo} alt="Sig.Network" className="h-[34px] w-[200px]" />
        </div>
        <button
          className="flex items-center px-[20px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <img src={burgerMenu} alt="Menu" className="h-[32px] w-[32px]" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop - only covers content below header (30px banner + 74px header = 104px) */}
          <div
            className="fixed top-[104px] left-0 right-0 bottom-0 bg-black/50 z-40 xl:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Menu Drawer */}
          <div className="border-clam-shell-500 bg-clam-shell-50 fixed top-[104px] left-0 right-0 z-50 shadow-lg xl:hidden">
            {navItems.map((item) => (
              <div
                key={item}
                className="border-clam-shell-500 flex h-[74px] items-center border-b px-[20px]"
              >
                <span className="text-dark-neutral-500 text-[14px] leading-[20px] font-medium">
                  {item}
                </span>
              </div>
            ))}
            <div className="flex h-[74px] items-center px-[20px] border-b border-clam-shell-500">
              <button className="border-dark-neutral-400 bg-pastels-polar-200 text-dark-neutral-400 flex items-center gap-[6px] rounded-[2px] border px-[18px] py-[12px] text-[16px] leading-[24px] font-semibold transition hover:opacity-90">
                Start building
                <ArrowIcon />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Desktop: Full Navigation */}
      <div className="hidden h-[180px] items-center xl:flex">
        {/* Logo */}
        <div className="border-clam-shell-500 flex h-[180px] shrink-0 items-center border-l border-t px-[60px]">
          <img src={signetworkLogo} alt="Sig.Network" className="h-[34px] w-[200px]" />
        </div>
        {/* Menu Items and CTA - pushed to the right */}
        <div className="ml-auto flex h-[180px] items-stretch">
          {navItems.map((item) => (
            <div
              key={item}
              className="border-clam-shell-500 flex h-[180px] w-[180px] shrink-0 items-center border-t border-l border-r px-[60px]"
            >
              <span className="text-dark-neutral-500 text-[14px] leading-[20px] font-medium">
                {item}
              </span>
            </div>
          ))}
          {/* CTA Button */}
          <div className="border-clam-shell-500 flex h-[180px] shrink-0 items-center border-t border-l border-r px-[60px]">
            <button className="border-dark-neutral-400 bg-pastels-polar-200 text-dark-neutral-400 flex items-center gap-[6px] rounded-[2px] border px-[18px] py-[12px] text-[16px] leading-[24px] font-semibold transition hover:opacity-90">
              Start building
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="border-clam-shell-500 bg-clam-shell-50 text-dark-neutral-600 relative overflow-hidden border-b">
      <img
        src={linesTop}
        alt=""
        className="pointer-events-none absolute top-0 left-0 w-full opacity-60"
      />
      <div className="relative mx-auto max-w-[1440px] px-[60px] pt-[156px] pb-[82px] max-md:px-[20px] max-md:pt-[34px] max-md:pb-[27px]">
        <h1 className="text-dark-neutral-600 text-[clamp(60px,9.65vw,139px)] leading-[0.647] font-bold tracking-[-2.78px]">
          DeFi without borders.
        </h1>
        <div className="font-mono-custom text-dark-neutral-600 mt-[21px] max-w-[632px] space-y-[15px] text-[16px] leading-[24px] max-md:mt-[33px] max-md:text-[12px] max-md:leading-[14px] max-md:space-y-[9px]">
          <p>DeFi is siloed today, but it doesn&apos;t need to be.</p>
          <p>
            For the first time, deploy on the chain you use and execute natively on every
            chain without restriction.
          </p>
        </div>
        <div className="mt-[15px] flex flex-wrap items-center gap-[18px] max-md:mt-[9px] max-md:gap-[11px]">
          <button className="border-dark-neutral-400 bg-brand-50 text-dark-neutral-400 flex h-[48px] items-center gap-[6px] rounded-[2px] border px-[18px] py-[12px] text-[16px] font-semibold transition hover:opacity-90 max-md:h-[31px] max-md:px-[11px] max-md:py-[8px] max-md:text-[10px]">
            Launch demo
            <ArrowIcon />
          </button>
          <button className="border-dark-neutral-400 bg-brand-950 text-dark-neutral-400 flex h-[48px] items-center gap-[6px] rounded-[2px] border px-[18px] py-[12px] text-[16px] font-semibold transition hover:opacity-90 max-md:h-[31px] max-md:px-[11px] max-md:py-[8px] max-md:text-[10px]">
            Start building
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>

    {narrativeSlices.map((slice) => (
      <section key={slice.title} className="bg-dark-neutral-950">
        <TechnicalPanel src={slice.image} alt={slice.alt} />
        <div
          className="soft-surface mt-0 py-[124px] pr-[60px] pl-0 max-md:py-12 max-md:pr-4"
          style={{ ...softSurfaceStyle, borderLeft: 'none' }}
        >
          <div className="flex flex-col items-start gap-[40px] max-md:items-center max-md:gap-6 max-md:px-4 max-md:text-center">
            <h2 className="text-clam-shell-400 text-[clamp(48px,7.64vw,110px)] leading-[0.891] font-bold tracking-[-2.2px] max-md:leading-[1.042] max-md:tracking-[-0.96px]">
              {slice.title}
            </h2>
            {slice.description && slice.description !== slice.title && (
              <div className="font-mono-custom text-dark-neutral-200 ml-[460px] max-w-[520px] text-[18px] leading-[28px] max-md:ml-0 max-md:max-w-[200px] max-md:text-[12px] max-md:leading-[14px]">
                {slice.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-[18px]' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    ))}

    <section className="bg-dark-neutral-950">
      <TechnicalPanel src={techIllustration3} alt="Sig.Network data flow" />
      <div
        className="soft-surface text-dark-neutral-600 mt-0 py-[133px] pr-[60px] pl-0 max-md:px-4 max-md:py-12"
        style={{ ...softSurfaceStyle, borderLeft: 'none' }}
      >
        <h2 className="text-clam-shell-400 text-[110px] leading-[98px] font-bold tracking-[-2.2px] max-md:text-[clamp(48px,8vw,110px)] max-md:leading-[clamp(43px,7.13vw,98px)]">
          Built on a proven stack:
        </h2>
        <div className="mt-[35px] ml-[60px] flex flex-col gap-[40px] max-md:mt-10 max-md:ml-0 max-md:gap-8">
          {/* Desktop: Horizontal dividers */}
          <div className="hidden md:block">
            <StackDivider label="Request" />
          </div>

          {/* Mobile: Vertical layout with Request label */}
          <div className="flex gap-[20px] md:hidden">
            <StackDivider label="Request" vertical={true} />
            <div className="grid flex-1 grid-cols-1 gap-[20px]">
              {stackSteps.map((step) => (
                <div
                  key={step.title}
                  className={`text-dark-neutral-400 flex flex-col gap-3 border border-white/20 p-5 ${step.tone}`}
                >
                  <h3 className="text-[16px] leading-[24px] font-bold">{step.title}</h3>
                  <p className="font-mono-custom text-dark-neutral-400 text-[14px] leading-[20px] opacity-85">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
            <StackDivider label="Response" direction="left" vertical={true} />
          </div>

          {/* Desktop: Horizontal cards */}
          <div className="hidden md:grid md:grid-cols-5 md:gap-0">
            {stackSteps.map((step) => (
              <div
                key={step.title}
                className={`text-dark-neutral-400 flex flex-col gap-3 border-r border-white/20 p-5 last:border-r-0 ${step.tone}`}
              >
                <h3 className="text-[16px] leading-[24px] font-bold">{step.title}</h3>
                <p className="font-mono-custom text-dark-neutral-400 text-[14px] leading-[20px] opacity-85">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal divider */}
          <div className="hidden md:block">
            <StackDivider label="Response" direction="left" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-dark-neutral-950">
      <TechnicalPanel src={techIllustration4} alt="Sig.Network architectural principle" />
      <div
        className="soft-surface text-dark-neutral-600 mt-0 py-[133px] pr-[60px] pl-0 max-md:px-4 max-md:py-12"
        style={{ ...softSurfaceStyle, borderLeft: 'none' }}
      >
        <h2 className="text-clam-shell-400 text-[110px] leading-[98px] font-bold tracking-[-2.2px] max-md:text-[clamp(48px,8vw,110px)] max-md:leading-[0.71]">
          We built Sig.Network around three principles:
        </h2>
        <div className="mt-[40px] ml-[60px] grid grid-cols-3 gap-[62px] max-md:mt-12 max-md:ml-0 max-md:grid-cols-1 max-md:gap-[38px]">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="border-t border-dark-neutral-200 pt-0 flex flex-col gap-[20px]"
            >
              <p className="font-mono-custom text-dark-neutral-200 text-[18px] leading-[28px]">
                {principle.number}
              </p>
              <h3 className="text-dark-neutral-200 text-[30px] leading-[38px] font-bold">
                {principle.title}
              </h3>
              <div className="font-mono-custom text-dark-neutral-500 text-[16px] leading-[24px]">
                {principle.paragraphs.map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-[16px]' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-dark-neutral-950">
      <TechnicalPanel src={techIllustration5} alt="Sig.Network future roadmap" />
      <div
        className="soft-surface text-dark-neutral-600 mt-0 py-[133px] pr-[60px] pl-0 max-md:px-4 max-md:py-12"
        style={{ ...softSurfaceStyle, borderLeft: 'none' }}
      >
        <h2 className="text-clam-shell-400 text-[110px] leading-[98px] font-bold tracking-[-2.2px] max-md:text-[clamp(48px,8vw,110px)] max-md:leading-[0.89]">
          Releases
        </h2>
        <div className="mt-[50px] ml-[60px] flex flex-col gap-[4px] max-md:mt-10 max-md:ml-0 max-md:gap-8">
          {releases.map((release, index) => (
            <div
              key={release.date}
              className={`flex gap-[40px] pt-[24px] pb-[40px] max-md:flex-col max-md:gap-4 max-md:pb-8 ${index === 0 ? 'border-t-[4px] border-b border-[#c6b3b2]' : 'border-b border-[#c6b3b2]'}`}
            >
              <div className="flex flex-col gap-[10px] shrink-0 items-start">
                <span
                  className={`inline-flex items-center rounded-[4px] border px-[6px] py-[2px] text-[14px] leading-[18px] font-bold tracking-[1.4px] uppercase ${getBadgeStyles(release.badgeType)}`}
                >
                  {release.badge}
                </span>
                <p className="font-mono-custom text-dark-neutral-500 text-[16px] leading-[24px] opacity-80 w-[200px]">
                  {release.date}
                </p>
              </div>
              <h3 className="text-dark-neutral-200 text-[30px] leading-[38px] font-semibold w-[400px] shrink-0 max-md:w-full max-md:text-[28px]">
                {release.title}
              </h3>
              <p className="font-mono-custom text-dark-neutral-500 text-[16px] leading-[24px] opacity-85 flex-1">
                {release.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <footer className="border-clam-shell-500 bg-clam-shell-50 text-dark-neutral-600 relative overflow-hidden border-t">
      <img
        src={linesBottom}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 w-full opacity-40"
      />
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-[18px] items-start px-[60px] pt-0 pb-[270px] max-md:px-4 max-md:pt-0 max-md:pb-16">
        <h2 className="text-left text-[#625757] text-[110px] leading-[98px] font-bold tracking-[-2.2px] w-full max-md:text-[clamp(48px,8vw,110px)] max-md:leading-[0.891] max-md:text-center">
          Ready to make your Dapp cross-chain?
        </h2>
        <div className="w-full flex items-center justify-center gap-[20px]">
          <button className="border-dark-neutral-400 bg-pastels-polar-200 text-[#625757] flex h-[38px] w-[145.29px] items-center justify-center gap-[6px] rounded-[2px] border text-[13.3px] font-normal transition hover:opacity-90" style={{ fontFamily: 'Arial, sans-serif' }}>
            Start Building
            <ArrowIcon />
          </button>
        </div>
        <div className="border-clam-shell-500 w-full grid grid-cols-4 gap-[60px] border-t pt-[40px] max-md:grid-cols-1 max-md:gap-8 max-md:pt-10">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-dark-neutral-600 text-[30px] leading-[38px] font-bold max-md:text-[26px]">
                {column.heading}
              </h3>
              <ul className="font-mono-custom text-dark-neutral-600 mt-[12px] space-y-[12px] text-[14px] leading-[20px] max-md:mt-4 max-md:space-y-3 max-md:text-[15px]">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <img
              src={signetworkLogo}
              alt="Sig.Network"
              className="h-[34px] w-[200px] max-md:h-[40px] max-md:w-[237px]"
            />
            <p className="text-dark-neutral-600/80 mt-[18px] text-[14px] leading-[20px] font-semibold max-md:mt-3 max-md:text-[15px]">
              2025 Sig.Network
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default App
