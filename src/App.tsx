import type { CSSProperties } from 'react'

import linesTop from './assets/lines-top.svg'
import linesBottom from './assets/lines-bottom.svg'
import signetworkLogo from './assets/signetwork-logo.svg'
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
    description:
      'Cross-chain communication happens through native signed transactions, not wrapped tokens or brittle bridge contracts. Your contracts keep sovereign execution while gaining reach everywhere.',
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
    title: 'Use proven tech.',
    text: 'Native transaction formats and transparent cryptography. No magic contracts, no exotic trust assumptions.',
  },
  {
    number: '3.',
    title: 'Keep your flow.',
    text: 'Add one function call, the rest remains your contract. No migrations and no new dependencies.',
  },
]

const releases = [
  { badge: 'MARCH', date: 'March 2025', title: 'Ethereum → Any Network', description: 'Execute transactions on any blockchain from Ethereum contracts.' },
  { badge: 'AUGUST', date: 'August 2025', title: 'Solana → Any Network', description: 'Execute transactions on any blockchain from Solana contracts.' },
  { badge: 'OCTOBER', date: 'October 2025', title: 'Ethereum ↔ Solana', description: 'Full bidirectional communication with response handling.' },
  { badge: 'NOVEMBER', date: 'November 2025', title: '+Bitcoin', description: 'Use native Bitcoin liquidity anywhere.' },
  { badge: 'JANUARY', date: 'January 2026', title: '+Hyperliquid', description: 'Additional blockchain integrations and protocol enhancements.' },
]

const footerColumns = [
  { heading: 'Learn', links: ['About', 'Blog'] },
  { heading: 'Build', links: ['Docs', 'Demo'] },
  { heading: 'Connect', links: ['Careers', 'Twitter'] },
]

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    className="h-5 w-5 stroke-current"
    fill="none"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 10h10" />
    <path d="M11 6l4 4-4 4" />
  </svg>
)

const StackDivider = ({ label, direction = 'right' }: { label: string; direction?: 'left' | 'right' }) => (
  <div className="flex flex-col items-center gap-4 sm:flex-row">
    <p className="font-mono-custom text-[16px] uppercase tracking-[0.6em] text-[#786767]">{label}</p>
    <span className="stack-divider" data-direction={direction} />
  </div>
)

const TechnicalPanel = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative left-1/2 w-[min(1440px,_100vw)] -translate-x-1/2 overflow-hidden rounded-[32px] border border-[#2a1f1f]/50 bg-[#1b1515] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
    <img src={src} alt={alt} className="block w-full min-h-[320px] object-cover" loading="lazy" />
  </div>
)

const App = () => (
  <div className="min-h-screen bg-[#111111] text-white">
    <div className="relative h-[30px] bg-[#111111]">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#27ed02]" />
        <p className="font-bold text-[14px] uppercase tracking-[1.4px] text-[#27ed02]">Mainnet is live!</p>
      </div>
    </div>

    <nav className="border-b border-[#cbb7ad] bg-[#f5f0ee] px-4 text-[#625757] sm:px-8">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 py-6 md:flex-nowrap md:gap-8">
        <img src={signetworkLogo} alt="Sig.Network" className="h-[34px] w-[200px]" />
        <div className="flex flex-1 items-center justify-around gap-6 text-[14px] font-medium uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <span key={item} className="text-[#625757]">
              {item}
            </span>
          ))}
        </div>
        <button className="flex items-center gap-2 rounded border border-[#786767] bg-[#f2fcfb] px-5 py-3 text-[15px] font-semibold text-[#786767] transition hover:opacity-90">
          Start building
          <ArrowIcon />
        </button>
      </div>
    </nav>

    <section className="relative overflow-hidden border-b border-[#cbb7ad] bg-[#f5f0ee] px-4 py-16 text-[#4c4646] sm:px-8 lg:px-16">
      <img src={linesTop} alt="" className="pointer-events-none absolute left-0 top-0 w-full opacity-60" />
      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.35em] text-[#8e7b7b]">Sig.Network</p>
        <h1 className="max-w-[1100px] text-[clamp(48px,10vw,139px)] font-bold leading-[0.7] tracking-[-2.5px] text-[#4c4646]">
          DeFi without borders.
        </h1>
        <div className="space-y-4 font-mono-custom text-[16px] leading-[26px] text-[#7a6b6b] md:max-w-[640px]">
          <p>DeFi is siloed today, but it doesn&apos;t need to be.</p>
          <p>Deploy on the chain you use and execute natively on every chain without restriction.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 rounded border border-[#786767] bg-[#f2ddc4] px-5 py-3 text-[16px] font-semibold text-[#786767] transition hover:opacity-90">
            Launch demo
            <ArrowIcon />
          </button>
          <button className="flex items-center gap-2 rounded border border-[#786767] bg-[#eaeec9] px-5 py-3 text-[16px] font-semibold text-[#786767] transition hover:opacity-90">
            Start building
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>

    {narrativeSlices.map((slice) => (
      <section key={slice.title} className="bg-[#111111] px-4 py-16 sm:px-8">
        <TechnicalPanel src={slice.image} alt={slice.alt} />
        <div
          className="soft-surface mx-auto mt-10 max-w-[1100px] px-8 py-12 text-center"
          style={softSurfaceStyle}
        >
          <h2 className="font-bold text-[clamp(48px,8vw,110px)] leading-[1] tracking-[-2.2px] text-[#cbb7ad]">{slice.title}</h2>
          <p className="mx-auto mt-8 max-w-[620px] font-mono-custom text-[18px] leading-[28px] text-[#625757]">{slice.description}</p>
        </div>
      </section>
    ))}

    <section className="bg-[#111111] px-4 py-16 sm:px-8">
      <TechnicalPanel src={techIllustration3} alt="Sig.Network data flow" />
      <div
        className="soft-surface mx-auto mt-10 max-w-[1320px] px-8 py-12 text-[#4c4646]"
        style={softSurfaceStyle}
      >
        <h2 className="text-center font-bold text-[clamp(48px,8vw,110px)] leading-[1] tracking-[-2.2px] text-[#cbb7ad]">
          Built on a proven stack:
        </h2>
        <div className="mt-10 space-y-8">
          <StackDivider label="Request" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {stackSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/20 px-5 py-6 text-[#4c4646] shadow-sm"
                style={{ backgroundColor: step.tone }}
              >
                <h3 className="font-semibold text-[16px] leading-[24px]">{step.title}</h3>
                <p className="mt-3 font-mono-custom text-[14px] leading-[20px] text-[#625757]">{step.text}</p>
              </div>
            ))}
          </div>
          <StackDivider label="Response" direction="left" />
        </div>
      </div>
    </section>

    <section className="bg-[#111111] px-4 py-16 sm:px-8">
      <TechnicalPanel src={techIllustration4} alt="Sig.Network architectural principle" />
      <div
        className="soft-surface mx-auto mt-10 max-w-[1320px] px-8 py-12 text-[#4c4646]"
        style={softSurfaceStyle}
      >
        <h2 className="text-center font-bold text-[clamp(48px,8vw,110px)] leading-[1] tracking-[-2.2px] text-[#cbb7ad]">
          We built Sig.Network around three principles:
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.number}>
              <p className="font-bold text-[32px] text-[#786767]">{principle.number}</p>
              <h3 className="mt-4 font-bold text-[30px] leading-[36px] text-[#4c4646]">{principle.title}</h3>
              <p className="mt-4 font-mono-custom text-[16px] leading-[24px] text-[#625757]">{principle.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#111111] px-4 py-16 sm:px-8">
      <TechnicalPanel src={techIllustration5} alt="Sig.Network future roadmap" />
      <div
        className="soft-surface mx-auto mt-10 max-w-[1320px] px-8 py-12 text-[#4c4646]"
        style={softSurfaceStyle}
      >
        <h2 className="text-center font-bold text-[clamp(48px,8vw,110px)] leading-[1] tracking-[-2.2px] text-[#cbb7ad]">Releases</h2>
        <div className="mt-10 space-y-8">
          {releases.map((release, index) => (
            <div
              key={release.date}
              className={`grid gap-8 border-[#cbb7ad]/30 pb-8 lg:grid-cols-[200px_420px_1fr] ${index === releases.length - 1 ? '' : 'border-b'}`}
            >
              <div>
                <span className="inline-flex rounded-[4px] bg-[#d5c4bb]/15 px-3 py-1 font-mono-custom text-[12px] tracking-[0.3em] text-[#786767]">
                  {release.badge}
                </span>
                <p className="mt-2 text-[20px] font-semibold text-[#4c4646]">{release.date}</p>
              </div>
              <h3 className="text-[28px] font-bold leading-[36px] text-[#4c4646]">{release.title}</h3>
              <p className="font-mono-custom text-[16px] leading-[24px] text-[#625757]">{release.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <footer className="relative overflow-hidden border-t border-[#cbb7ad] bg-[#f5f0ee] px-4 pb-16 pt-14 text-[#4c4646] sm:px-10 lg:px-16">
      <img src={linesBottom} alt="" className="pointer-events-none absolute bottom-0 left-0 w-full opacity-40" />
      <div className="relative mx-auto max-w-[1320px]">
        <h2 className="text-[clamp(48px,8vw,110px)] font-bold leading-[1] tracking-[-2.2px]">Ready to make your Dapp cross-chain?</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="flex h-[42px] items-center gap-2 rounded border border-[#786767] bg-[#f2fcfb] px-6 font-semibold text-[#625757] transition hover:opacity-90">
            Start building
            <ArrowIcon />
          </button>
        </div>
        <div className="mt-12 grid gap-8 border-t border-[#cbb7ad] pt-10 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-[26px] font-bold">{column.heading}</h3>
              <ul className="mt-4 space-y-3 font-mono-custom text-[15px] text-[#4c4646]">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <img src={signetworkLogo} alt="Sig.Network" className="h-[34px] w-[200px]" />
            <p className="mt-3 text-[15px] font-semibold text-[#4c4646]/80">2025 Sig.Network</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default App
