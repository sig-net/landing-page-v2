import techIllustration1 from './assets/technical-illustration-1.webp'
import techIllustration2 from './assets/technical-illustration-2.webp'
import techIllustration3 from './assets/technical-illustration-3.webp'
import techIllustration4 from './assets/technical-illustration-4.webp'
import techIllustration5 from './assets/technical-illustration-5.webp'
import techIllustrationMobile1 from './assets/technical-illustration-mobile-1.webp'
import techIllustrationMobile2 from './assets/technical-illustration-mobile-2.webp'
import techIllustrationMobile3 from './assets/technical-illustration-mobile-3.webp'
import techIllustrationMobile4 from './assets/technical-illustration-mobile-4.webp'
import techIllustrationMobile5 from './assets/technical-illustration-mobile-5.webp'

export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export const navItems: NavItem[] = [
  { label: 'How it works', href: '#what' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Docs', href: 'https://docs.sig.network/', external: true },
  { label: 'Blog', href: 'https://mirror.xyz/signetwork.eth', external: true },
]

export type NarrativeSlice = {
  image: string
  imageMobile: string
  alt: string
  title: string
  description: string
}

export const narrativeSlices: NarrativeSlice[] = [
  {
    image: techIllustration1,
    imageMobile: techIllustrationMobile1,
    alt: 'Technical diagram showing cross-chain DEX connectivity',
    title:
      "Sig.Network gives your application direct access to every chain's assets and markets.",
    description:
      'Your contracts control assets on every chain, and the ETH your app holds still swaps on Uniswap and can borrow on Aave.',
  },
  {
    image: techIllustration2,
    imageMobile: techIllustrationMobile2,
    alt: 'Technical diagram showing synchronized execution',
    title: 'Onboard users from any wallet, exchange, or chain.',
    description:
      'Deposits arrive natively and pool privately. The ledger sees a valid transaction, not who, how much, or where.',
  },
]

export type StackStep = {
  title: string
  text: string
  tone: string
}

export const stackSteps: StackStep[] = [
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
    title: 'Transaction Router',
    text: "Native signed transactions are sent to the destination chain's mempool or execution layer.",
    tone: 'bg-brand-800',
  },
  {
    title: 'Native Chain Execution',
    text: 'The target chain runs them as standard transactions from an external account owned by your contract, with results returned to your application.',
    tone: 'bg-brand-950',
  },
]

export type Principle = {
  number: string
  title: string
  paragraphs: string[]
}

export const principles: Principle[] = [
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

export type Release = {
  badge: string
  badgeType: 'mainnet' | 'testnet' | 'development'
  date: string
  title: string
  description: string
}

export const releases: Release[] = [
  {
    badge: 'Mainnet',
    badgeType: 'mainnet',
    date: 'March 2025',
    title: 'Ethereum → Any Network',
    description: 'Execute transactions on any blockchain from Ethereum contracts.',
  },
  {
    badge: 'Mainnet',
    badgeType: 'mainnet',
    date: 'August 2025',
    title: 'Solana → Any Network',
    description: 'Execute transactions on any blockchain from Solana contracts.',
  },
  {
    badge: 'Mainnet',
    badgeType: 'mainnet',
    date: 'December 2025',
    title: 'Ethereum ↔ Solana',
    description: 'Full bidirectional communication with response handling.',
  },
  {
    badge: 'Testnet',
    badgeType: 'testnet',
    date: 'June 2026',
    title: '+Canton',
    description:
      'Access institutional-grade financial applications and tokenized assets on Canton.',
  },
  {
    badge: 'Development',
    badgeType: 'development',
    date: 'August 2026',
    title: '+BNB',
    description: "Access Asia's largest DeFi ecosystem and Binance-native liquidity.",
  },
  {
    badge: 'Development',
    badgeType: 'development',
    date: 'September 2026',
    title: '+Polygon',
    description: 'Access the most liquid prediction markets in the world.',
  },
  {
    badge: 'Development',
    badgeType: 'development',
    date: 'October 2026',
    title: '+Bitcoin',
    description: 'Use native Bitcoin liquidity.',
  },
  {
    badge: 'Development',
    badgeType: 'development',
    date: 'Q1 2027',
    title: 'Atomic cross-chain calls',
    description:
      'Partner chains extend their sequencers so a single transaction settles atomically across chains.',
  },
]

export type FooterLink = {
  label: string
  href: string
  external?: boolean
}

export type FooterColumn = {
  heading: string
  links: FooterLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Learn',
    links: [
      { label: 'About', href: '#what' },
      { label: 'Blog', href: 'https://mirror.xyz/signetwork.eth', external: true },
    ],
  },
  {
    heading: 'Build',
    links: [
      { label: 'Docs', href: 'https://docs.sig.network/', external: true },
      {
        label: 'Demo',
        href: 'https://solana-contract-examples.vercel.app/',
        external: true,
      },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Contact', href: 'mailto:pitches@sig.network' },
      {
        label: 'Careers',
        href: 'https://djinni.co/jobs/company-sig-network/',
        external: true,
      },
      { label: 'Twitter', href: 'https://x.com/Sig_Network', external: true },
    ],
  },
]

export type CTAButton = {
  label: string
  href: string
  external?: boolean
}

export const ctaButtons = {
  demo: {
    label: 'Launch demo',
    href: 'https://solana-contract-examples.vercel.app/',
    external: true,
  },
  contact: {
    label: 'Talk to us',
    href: 'mailto:pitches@sig.network',
    external: false,
  },
  docs: {
    label: 'Start building',
    href: 'https://docs.sig.network/',
    external: true,
  },
} as const

export {
  techIllustration3,
  techIllustration4,
  techIllustration5,
  techIllustrationMobile3,
  techIllustrationMobile4,
  techIllustrationMobile5,
}
