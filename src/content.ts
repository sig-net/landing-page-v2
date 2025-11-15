import techIllustration1 from './assets/technical-illustration-1.png'
import techIllustration2 from './assets/technical-illustration-2.png'
import techIllustration3 from './assets/technical-illustration-3.png'
import techIllustration4 from './assets/technical-illustration-4.png'
import techIllustration5 from './assets/technical-illustration-5.png'
import techIllustrationMobile1 from './assets/technical-illustration-mobile-1.png'
import techIllustrationMobile2 from './assets/technical-illustration-mobile-2.png'
import techIllustrationMobile3 from './assets/technical-illustration-mobile-3.png'
import techIllustrationMobile4 from './assets/technical-illustration-mobile-4.png'
import techIllustrationMobile5 from './assets/technical-illustration-mobile-5.png'

export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export const navItems: NavItem[] = [
  { label: 'What?', href: '#what' },
  { label: 'Roadmap', href: '#roadmap' },
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
    title: 'Sig.Network is a universal layer that makes apps native across chains.',
    description:
      'We enable smart contracts on different chains to interact directly, quickly, and securely by signing native messages with decentralized private keys.',
  },
  {
    image: techIllustration2,
    imageMobile: techIllustrationMobile2,
    alt: 'Technical diagram showing synchronized execution',
    title: 'Sig.Network synchronizes state and execution across ecosystems.',
    description:
      "When your contract calls Sig.Network's SDK, unsigned transactions are generated for the target chain.\n\nThe MPC signers validate and execute these transactions, returning the results to your original contract.",
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
    badge: 'Testnet',
    badgeType: 'testnet',
    date: 'October 2025',
    title: 'Ethereum ↔ Solana',
    description: 'Full bidirectional communication with response handling.',
  },
  {
    badge: 'Development',
    badgeType: 'development',
    date: 'November 2025',
    title: '+Bitcoin',
    description: 'Use native Bitcoin liquidity anywhere',
  },
  {
    badge: 'Development',
    badgeType: 'development',
    date: 'January 2026',
    title: '+Hyperliquid',
    description: 'Additional blockchain integrations and protocol enhancements.',
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
      { label: 'Demo', href: 'https://solana-contract-examples.vercel.app/', external: true },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Careers', href: 'https://djinni.co/jobs/company-sig-network/', external: true },
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
