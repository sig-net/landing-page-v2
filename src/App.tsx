import type { CSSProperties } from 'react'

import linesTop from './assets/lines-top.svg'
import linesBottom from './assets/lines-bottom.svg'
import signetworkLogo from './assets/signetwork-logo.svg'
import arrowIcon from './assets/arrow-up-right.svg'
import techIllustration1 from './assets/technical-illustration-1.svg'
import techIllustration2 from './assets/technical-illustration-2.svg'
import techIllustration3 from './assets/technical-illustration-3.svg'
import techIllustration4 from './assets/technical-illustration-4.svg'
import techIllustration5 from './assets/technical-illustration-5.svg'

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
    tone: '#f2ddc4',
  },
  {
    title: 'Sig.Network SDK',
    text: 'Chain-specific libraries convert your cross-contract calls into unsigned native transactions for any target chain.',
    tone: '#f1e4c6',
  },
  {
    title: 'MPC Signer Network',
    text: 'A decentralized MPC validator set collects those transactions and produces secure threshold signatures.',
    tone: '#f0ebc7',
  },
  {
    title: 'Cross-chain Message Router',
    text: "Native signed transactions are sent to the destination chain's mempool or execution layer.",
    tone: '#efefc8',
  },
  {
    title: 'Native Chain Execution',
    text: 'The target chain runs them as standard transactions from an external account owned by your contract, with results returned to your application.',
    tone: '#eaeec9',
  },
]

const principles = [
  {
    number: '1.',
    title: 'Build where you are.',
    text: 'Deploy on the chain you already use. Keep your contracts, tooling, and addresses. No regressions on anything your app already does.',
  },
  {
    number: '2.',
    title: 'Build where you are.',
    text: 'Proven cryptographic primitives and native transaction formats. No magic contracts and no exotic cryptography.',
  },
  {
    number: '3.',
    title: 'Build where you are.',
    text: 'Add one function call, the rest is your contract. No migrations and no new dependencies.',
  },
]

const releases = [
  {
    badge: 'MARCH',
    date: 'March 2025',
    title: 'Ethereum → Any Network',
    description: 'Execute transactions on any blockchain from Ethereum contracts.',
  },
  {
    badge: 'AUGUST',
    date: 'August 2025',
    title: 'Solana → Any Network',
    description: 'Execute transactions on any blockchain from Solana contracts.',
  },
  {
    badge: 'OCTOBER',
    date: 'October 2025',
    title: 'Ethereum ↔ Solana',
    description: 'Full bidirectional communication with response handling.',
  },
  {
    badge: 'NOVEMBER',
    date: 'November 2025',
    title: '+Bitcoin',
    description: 'Use native Bitcoin liquidity anywhere.',
  },
  {
    badge: 'JANUARY',
    date: 'January 2026',
    title: '+Hyperliquid',
    description: 'Additional blockchain integrations and protocol enhancements.',
  },
]

const footerColumns = [
  { heading: 'Learn', links: ['About', 'Blog'] },
  { heading: 'Build', links: ['Docs', 'Demo'] },
  { heading: 'Connect', links: ['Careers', 'Twitter'] },
]

const ArrowIcon = () => (
  <img src={arrowIcon} alt="" className="h-5 w-5" aria-hidden="true" />
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
    className={`flex ${vertical ? 'flex-row items-start gap-[12px]' : 'flex-col items-center gap-4 sm:flex-row'}`}
  >
    <p className="font-mono-custom text-dark-neutral-400 text-[16px] tracking-[0.6em] whitespace-nowrap uppercase">
      {label}
    </p>
    <span
      className={`stack-divider ${vertical ? 'vertical' : ''}`}
      data-direction={direction}
    />
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

const App = () => (
  <div className="bg-dark-neutral-950 min-h-screen text-white">
    {/* Live Banner with RGB Effect */}
    <div className="bg-dark-neutral-950 relative h-[30px] overflow-hidden">
      {/* Red dot */}
      <span className="bg-error-600 absolute top-1/2 left-[calc(50%+8.92px-66.58px)] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-[4px] mix-blend-screen" />
      {/* Red text */}
      <p className="text-error-600 absolute top-[15.5px] left-[calc(50%+16.92px)] w-[143px] -translate-x-1/2 -translate-y-1/2 text-center text-[14px] leading-[18px] font-bold tracking-[1.4px] whitespace-nowrap uppercase mix-blend-screen">
        MAINNET IS LIVE!
      </p>
      {/* Green dot */}
      <span className="bg-crt-green-500 absolute top-1/2 left-[calc(50%+9.92px-65.58px)] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-[4px] mix-blend-screen" />
      {/* Green text */}
      <p className="text-crt-green-500 absolute top-[15.5px] left-[calc(50%+17.92px)] w-[143px] -translate-x-1/2 -translate-y-1/2 text-center text-[14px] leading-[18px] font-bold tracking-[1.4px] whitespace-nowrap uppercase mix-blend-screen">
        MAINNET IS LIVE!
      </p>
      {/* Blue dot */}
      <span className="bg-crt-blue-400 absolute top-1/2 left-[calc(50%+10.92px-64.58px)] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-[4px] mix-blend-screen" />
      {/* Blue text */}
      <p className="text-crt-blue-400 absolute top-[15.5px] left-[calc(50%+18.92px)] w-[143px] -translate-x-1/2 -translate-y-1/2 text-center text-[14px] leading-[18px] font-bold tracking-[1.4px] whitespace-nowrap uppercase mix-blend-screen">
        MAINNET IS LIVE!
      </p>
    </div>

    {/* Navigation Menu - 180px height matching Figma desktop, responsive for mobile */}
    <nav className="border-clam-shell-500 bg-clam-shell-50 border-b">
      <div className="flex flex-col items-stretch md:h-[180px] md:flex-row md:items-center">
        {/* Logo */}
        <div className="border-clam-shell-500 flex h-[74px] shrink-0 items-center border-b border-l px-4 md:h-[180px] md:border-t md:border-b-0 md:px-[60px]">
          <img src={signetworkLogo} alt="Sig.Network" className="h-[34px] w-[200px]" />
        </div>
        {/* Menu Items and CTA - pushed to the right */}
        <div className="flex flex-col md:ml-auto md:flex-row md:items-stretch">
          {navItems.map((item) => (
            <div
              key={item}
              className="border-clam-shell-500 flex h-[74px] shrink-0 items-center border-b px-4 md:h-[180px] md:w-[180px] md:border-r md:border-b-0 md:px-[60px]"
            >
              <span className="text-dark-neutral-500 text-[14px] leading-[20px] font-medium">
                {item}
              </span>
            </div>
          ))}
          {/* CTA Button */}
          <div className="border-clam-shell-500 flex h-[74px] shrink-0 items-center px-4 md:h-[180px] md:border-r md:px-[60px]">
            <button className="border-dark-neutral-400 bg-pastels-polar-200 text-dark-neutral-400 flex items-center gap-[6px] rounded-[2px] border px-[18px] py-[12px] text-[16px] font-semibold transition hover:opacity-90">
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
      <div className="relative mx-auto max-w-[1440px] px-[60px] pt-[203px] pb-[359px] md:px-4 md:pt-16 md:pb-24">
        <h1 className="text-dark-neutral-600 text-[clamp(60px,9.65vw,139px)] leading-[0.647] font-bold tracking-[-2.78px]">
          DeFi without borders.
        </h1>
        <div className="font-mono-custom text-dark-neutral-600 mt-[21px] max-w-[632px] space-y-[15px] text-[16px] leading-[24px]">
          <p>DeFi is siloed today, but it doesn&apos;t need to be.</p>
          <p>
            For the first time, deploy on the chain you use and execute natively on every
            chain without restriction.
          </p>
        </div>
        <div className="mt-[39px] flex flex-wrap items-center gap-[18px]">
          <button className="border-dark-neutral-400 bg-brand-50 text-dark-neutral-400 flex h-[48px] items-center gap-[6px] rounded-[2px] border px-[18px] py-[12px] text-[16px] font-semibold transition hover:opacity-90">
            Launch demo
            <ArrowIcon />
          </button>
          <button className="border-dark-neutral-400 bg-brand-950 text-dark-neutral-400 flex h-[48px] items-center gap-[6px] rounded-[2px] border px-[18px] py-[12px] text-[16px] font-semibold transition hover:opacity-90">
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
        <h2 className="text-clam-shell-400 text-[clamp(48px,8vw,110px)] leading-[clamp(43px,7.13vw,98px)] font-bold tracking-[-2.2px]">
          Built on a proven stack:
        </h2>
        <div className="mt-[40px] ml-[60px] space-y-[40px] md:mt-10 md:ml-0 md:space-y-8">
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
                  className="text-dark-neutral-400 flex flex-col gap-3 border border-white/20 p-5"
                  style={{ backgroundColor: step.tone }}
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
                className="text-dark-neutral-400 flex flex-col gap-3 border-r border-white/20 p-5 last:border-r-0"
                style={{ backgroundColor: step.tone }}
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
        className="soft-surface text-dark-neutral-600 mt-0 py-[236px] pr-[60px] pl-0 max-md:px-4 max-md:py-12"
        style={{ ...softSurfaceStyle, borderLeft: 'none' }}
      >
        <h2 className="text-clam-shell-500 text-[clamp(48px,8vw,110px)] leading-[0.71] font-bold tracking-[-2.2px]">
          We built Sig.Network around three principles:
        </h2>
        <div className="mt-[236px] ml-[61px] grid grid-cols-3 gap-[62px] md:mt-12 md:ml-0 md:grid-cols-1 md:gap-[38px]">
          {principles.map((principle) => (
            <div key={principle.number}>
              <p className="text-dark-neutral-400 text-[28px] font-bold">
                {principle.number}
              </p>
              <h3 className="text-dark-neutral-600 mt-[20px] text-[38px] leading-[38px] font-bold">
                {principle.title}
              </h3>
              <p className="font-mono-custom text-dark-neutral-500 mt-[24px] text-[16px] leading-[24px]">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-dark-neutral-950">
      <TechnicalPanel src={techIllustration5} alt="Sig.Network future roadmap" />
      <div
        className="soft-surface text-dark-neutral-600 mt-0 py-[148px] pr-[60px] pl-0 max-md:px-4 max-md:py-12"
        style={{ ...softSurfaceStyle, borderLeft: 'none' }}
      >
        <h2 className="text-clam-shell-500 text-[clamp(48px,8vw,110px)] leading-[0.89] font-bold tracking-[-2.2px]">
          Releases
        </h2>
        <div className="mt-[148px] ml-[60px] space-y-0 md:mt-10 md:ml-0 md:space-y-8">
          {releases.map((release, index) => (
            <div
              key={release.date}
              className={`border-clam-shell-500/30 grid grid-cols-[200px_400px_1fr] gap-[40px] pb-[24px] md:grid-cols-1 md:gap-4 md:pb-8 ${index === releases.length - 1 ? '' : 'border-b'}`}
            >
              <div className="flex flex-col gap-[8px]">
                <span className="font-mono-custom text-dark-neutral-400 inline-flex h-[22px] w-fit items-center rounded-[4px] bg-[#d5c4bb]/15 px-[12px] text-[12px] tracking-[0.3em]">
                  {release.badge}
                </span>
                <p className="text-dark-neutral-600 text-[24px] font-semibold">
                  {release.date}
                </p>
              </div>
              <h3 className="text-dark-neutral-600 text-[38px] leading-[38px] font-bold md:text-[28px] md:leading-[36px]">
                {release.title}
              </h3>
              <p className="font-mono-custom text-dark-neutral-500 text-[16px] leading-[24px]">
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
      <div className="relative mx-auto max-w-[1440px] px-[60px] pt-[214px] pb-[270px] md:px-4 md:pt-14 md:pb-16">
        <h2 className="text-dark-neutral-600 text-[clamp(48px,8vw,110px)] leading-[0.71] font-bold tracking-[-2.2px]">
          Ready to make your Dapp cross-chain?
        </h2>
        <div className="mt-[38px] flex flex-wrap gap-4 md:mt-8">
          <button className="border-dark-neutral-400 bg-pastels-polar-200 text-dark-neutral-500 flex h-[38px] items-center gap-[6px] rounded-[2px] border px-[19px] py-[11px] text-[16px] font-semibold transition hover:opacity-90">
            Start Building
            <ArrowIcon />
          </button>
        </div>
        <div className="border-clam-shell-500 mt-[182px] grid grid-cols-4 gap-[60px] border-t pt-[40px] md:mt-12 md:grid-cols-1 md:gap-8 md:pt-10">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-dark-neutral-600 text-[38px] leading-[38px] font-bold md:text-[26px]">
                {column.heading}
              </h3>
              <ul className="font-mono-custom text-dark-neutral-600 mt-[12px] space-y-[12px] text-[20px] md:mt-4 md:space-y-3 md:text-[15px]">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <img src={signetworkLogo} alt="Sig.Network" className="h-[34px] w-[200px]" />
            <p className="text-dark-neutral-600/80 mt-[18px] text-[20px] font-semibold md:mt-3 md:text-[15px]">
              2025 Sig.Network
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default App
