// Image assets from Figma
const arrowIcon = 'http://localhost:3845/assets/e9d121b1a235e50685cb6d4042e9ec0b43ce4377.svg'
const logoSvg = 'http://localhost:3845/assets/6ffc0199380384fbe10302c13937d395f917dd67.svg'
const footerLogoSvg = 'http://localhost:3845/assets/7b3e148f8d52ff047f454a6015696ea00b865438.svg'

// Technical illustrations
const techIllustration1 = 'http://localhost:3845/assets/f7458158f16514e8aaaa99bac2cd2d1750d7e98c.png'

// Decorative line patterns
const heroLinesSvg = 'http://localhost:3845/assets/9fed433daa0a6ae3edaf6235b885481ecc115069.svg'
const footerLinesSvg = 'http://localhost:3845/assets/f65310ad09de06dd5fda56bd6d8dd9f2b8a0904e.svg'

// Technical illustration overlays
const blueOverlay = 'http://localhost:3845/assets/fd8b2608bb44e5c321b01723d3a8bded9000767f.svg'
const greenOverlay = 'http://localhost:3845/assets/88a8cde02d078569e1875a0fc82f168ae81731e1.svg'
const redOverlay = 'http://localhost:3845/assets/45bb9550d8a24564e70ceee126fae11a0bb7375b.svg'

const App = () => (
  <div className="min-h-screen bg-[#111111]">
    {/* Live Banner */}
    <div className="relative h-[30px] bg-[#111111]">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 mix-blend-screen">
        <div className="h-2 w-2 rounded bg-[#27ed02] mix-blend-screen" />
        <p className="font-bold text-[14px] uppercase tracking-[1.4px] text-[#27ed02] mix-blend-screen">
          MAINNET IS LIVE!
        </p>
      </div>
    </div>

    {/* Menu */}
    <nav className="flex h-[180px] border-b border-[#cbb7ad] bg-[#f5f0ee]">
      <div className="flex h-full flex-1 items-center justify-center border-r border-[#cbb7ad] px-[60px]">
        <img
          src={logoSvg}
          alt="Sig.Network"
          className="h-[34px] w-[200px]"
        />
      </div>
      <div className="flex h-full w-[180px] items-center justify-center border-r border-[#cbb7ad]">
        <p className="font-medium text-[14px] leading-[20px] text-[#625757]">What?</p>
      </div>
      <div className="flex h-full w-[180px] items-center justify-center border-r border-[#cbb7ad]">
        <p className="font-medium text-[14px] leading-[20px] text-[#625757]">Roadmap</p>
      </div>
      <div className="flex h-full w-[180px] items-center justify-center border-r border-[#cbb7ad]">
        <p className="font-medium text-[14px] leading-[20px] text-[#625757]">Blog</p>
      </div>
      <div className="flex h-full w-[180px] items-center justify-center border-[#cbb7ad]">
        <button className="flex items-center gap-[6px] rounded-[2px] border border-[#786767] bg-[#f2fcfb] px-[18px] py-[12px] font-semibold text-[16px] leading-[24px] text-[#786767] transition hover:opacity-90">
          Start building
          <img src={arrowIcon} alt="" className="h-5 w-5" />
        </button>
      </div>
    </nav>

    {/* Hero Section with gradient and lines */}
    <section className="relative h-[509px] overflow-hidden bg-gradient-to-b from-[#020617] via-[#1e293b] to-[#334155]">
      {/* Background gradient with noise effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 h-[220.82px] w-full">
        <img src={heroLinesSvg} alt="" className="h-full w-full object-cover opacity-30" />
      </div>

      <h1 className="relative px-16 pt-[156px] font-bold text-[139px] leading-[90px] tracking-[-2.78px] text-[#4c4646]">
        DeFi without borders.
      </h1>

      <div className="relative px-16 pt-8">
        <p className="font-['Söhne_Mono'] text-[16px] leading-[24px] text-[#4c4646]">
          DeFi is siloed today, but it doesn't need to be.
        </p>
        <p className="mt-4 max-w-[632px] font-['Söhne_Mono'] text-[16px] leading-[24px] text-[#4c4646]">
          For the first time, deploy on the chain you use and execute natively
          on every chain without restriction.
        </p>
        <div className="mt-[15px] flex gap-[18px]">
          <button className="flex items-center gap-[6px] rounded-[2px] border border-[#786767] bg-[#f2ddc4] px-[18px] py-[12px] font-semibold text-[16px] leading-[24px] text-[#786767] transition hover:opacity-90">
            Launch demo
            <img src={arrowIcon} alt="" className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-[6px] rounded-[2px] border border-[#786767] bg-[#eaeec9] px-[18px] py-[12px] font-semibold text-[16px] leading-[24px] text-[#786767] transition hover:opacity-90">
            Start building
            <img src={arrowIcon} alt="" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>

    {/* Content Section 1 - Technical illustration with text */}
    <section className="bg-[#111111] px-16 py-[60px]">
      <div className="relative mx-auto h-[482px] w-full">
        <div className="absolute inset-0 bg-[#4c4646]">
          <img
            src={techIllustration1}
            alt="Technical illustration"
            className="h-full w-full object-cover opacity-75"
          />
          {/* Overlays for mix-blend effects */}
          <div className="absolute inset-0 mix-blend-screen">
            <img src={blueOverlay} alt="" className="absolute h-full w-full object-contain opacity-50" />
          </div>
        </div>
        {/* Figure caption */}
        <p className="absolute bottom-[24px] left-[576px] font-['Söhne_Mono'] font-medium text-[20px] leading-[30px] text-white">
          Figure 1. DEX
        </p>
        <p className="absolute left-[115px] top-[232px] font-['Söhne_Mono'] text-[16px] leading-[24px] text-white">
          Deposit native BTC directly
        </p>
        <p className="absolute bottom-[112px] right-[116px] max-w-[328px] font-['Söhne_Mono'] text-[16px] leading-[24px] text-white">
          Tap Uniswap and Curve liquidity on Ethereum
        </p>
      </div>
      <div className="mx-auto mt-[60px] max-w-full text-center">
        <h2 className="font-bold text-[110px] leading-[98px] tracking-[-2.2px] text-[#d5c4bb]">
          Sig.Network is a universal layer that makes apps native across chains.
        </h2>
        <p className="mx-auto mt-10 max-w-[520px] font-['Söhne_Mono'] text-[18px] leading-[28px] text-[#a28b8a]">
          We enable smart contracts on different chains to interact directly,
          quickly, and securely by signing native messages with decentralized
          private keys.
        </p>
      </div>
    </section>

    {/* Content Section 2 */}
    <section className="bg-[#111111] px-16 py-[60px]">
      <div className="relative mx-auto h-[482px] w-full">
        <div className="absolute inset-0 bg-[#4c4646]">
          <img
            src={techIllustration1}
            alt="Technical illustration"
            className="h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 mix-blend-screen">
            <img src={greenOverlay} alt="" className="absolute h-full w-full object-contain opacity-50" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[60px] max-w-full text-center">
        <h2 className="font-bold text-[110px] leading-[98px] tracking-[-2.2px] text-[#d5c4bb]">
          Sig.Network synchronizes state and execution across ecosystems.
        </h2>
        <p className="mx-auto mt-10 max-w-[520px] font-['Söhne_Mono'] text-[18px] leading-[28px] text-[#a28b8a]">
          Cross-chain communication happens through native signed transactions,
          not wrapped tokens or bridge contracts. Your contracts maintain full
          sovereignty while gaining cross-chain reach.
        </p>
      </div>
    </section>

    {/* Built on a proven stack */}
    <section className="bg-[#111111] px-16 py-[60px]">
      <div className="relative mx-auto h-[482px] w-full">
        <div className="absolute inset-0 bg-[#4c4646]">
          <img
            src={techIllustration1}
            alt="Technical illustration"
            className="h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 mix-blend-screen">
            <img src={redOverlay} alt="" className="absolute h-full w-full object-contain opacity-50" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[60px] max-w-[1320px]">
        <h2 className="font-bold text-[110px] leading-[98px] tracking-[-2.2px] text-[#d5c4bb]">
          Built on a proven stack:
        </h2>
        <div className="mt-[40px] space-y-[56px]">
          <div className="flex items-center">
            <p className="font-['Söhne_Mono'] text-[16px] leading-[16.5px] text-[#d5c4bb]">Request</p>
            <div className="ml-6 h-px flex-1 bg-[#d5c4bb]/20" />
          </div>
          <div className="grid grid-cols-5 gap-0 border-t border-[#d5c4bb]/10">
            {[
              {
                title: 'Your Application',
                text: 'Deploy contracts and infrastructure normally. Integrate with the Sig.Network SDK to gain cross-chain reach.',
              },
              {
                title: 'Sig.Network SDK',
                text: 'Chain-specific libraries convert your cross-contract calls into unsigned native transactions for any target chain.',
              },
              {
                title: 'MPC Signer Network',
                text: 'A decentralized MPC validator set collects those transactions and produces secure threshold signatures.',
              },
              {
                title: 'Cross-chain Message Router',
                text: "Native signed transactions are sent to the destination chain's mempool or execution layer.",
              },
              {
                title: 'Native Chain Execution',
                text: 'The target chain runs them as standard transactions from an external account owned by your contract, with results returned to your application.',
              },
            ].map((item) => (
              <div key={item.title} className="h-[200px] border-l border-[#d5c4bb]/10 p-5">
                <h3 className="mb-3 font-semibold text-[16px] leading-[24px] text-[#d5c4bb]">
                  {item.title}
                </h3>
                <p className="font-['Söhne_Mono'] text-[14px] leading-[20px] text-[#a28b8a]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <p className="font-['Söhne_Mono'] text-[16px] leading-[16.5px] text-[#d5c4bb]">Response</p>
            <div className="ml-6 h-px flex-1 bg-[#d5c4bb]/20" />
          </div>
        </div>
      </div>
    </section>

    {/* Principles */}
    <section className="bg-[#111111] px-16 py-[60px]">
      <div className="relative mx-auto h-[482px] w-full">
        <div className="absolute inset-0 bg-[#4c4646]">
          <img
            src={techIllustration1}
            alt="Technical illustration"
            className="h-full w-full object-cover opacity-75"
          />
        </div>
      </div>
      <div className="mx-auto mt-[60px] max-w-[1320px]">
        <h2 className="mb-[40px] font-bold text-[110px] leading-[98px] tracking-[-2.2px] text-[#d5c4bb]">
          We built Sig.Network around three principles:
        </h2>
        <div className="grid grid-cols-3 gap-16">
          {[
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
          ].map((principle) => (
            <div key={principle.number}>
              <p className="font-bold text-[28px] leading-[28px] text-[#d5c4bb]">
                {principle.number}
              </p>
              <h3 className="mt-5 font-bold text-[30px] leading-[38px] text-[#d5c4bb]">
                {principle.title}
              </h3>
              <p className="mt-5 font-['Söhne_Mono'] text-[16px] leading-[24px] text-[#a28b8a]">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Releases */}
    <section className="bg-[#111111] px-16 py-[60px]">
      <div className="relative mx-auto h-[482px] w-full">
        <div className="absolute inset-0 bg-[#4c4646]">
          <img
            src={techIllustration1}
            alt="Technical illustration"
            className="h-full w-full object-cover opacity-75"
          />
        </div>
      </div>
      <div className="mx-auto mt-[60px] max-w-[1320px]">
        <h2 className="mb-[50px] font-bold text-[110px] leading-[98px] tracking-[-2.2px] text-[#d5c4bb]">
          Releases
        </h2>
        <div className="space-y-0">
          {[
            {
              badge: 'MARCH',
              date: 'March 2025',
              title: 'Ethereum → Any Network',
              description:
                'Execute transactions on any blockchain from Ethereum contracts.',
            },
            {
              badge: 'AUGUST',
              date: 'August 2025',
              title: 'Solana → Any Network',
              description:
                'Execute transactions on any blockchain from Solana contracts.',
            },
            {
              badge: 'OCTOBER',
              date: 'October 2025',
              title: 'Ethereum ↔ Solana',
              description:
                'Full bidirectional communication with response handling.',
            },
            {
              badge: 'NOVEMBER',
              date: 'November 2025',
              title: '+Bitcoin',
              description: 'Use native Bitcoin liquidity anywhere',
            },
            {
              badge: 'JANUARY',
              date: 'January 2026',
              title: '+Hyperliquid',
              description:
                'Additional blockchain integrations and protocol enhancements.',
            },
          ].map((release, index) => (
            <div
              key={release.date}
              className={`grid grid-cols-[200px_400px_1fr] gap-10 py-6 ${
                index === 0 ? '' : 'border-t border-[#d5c4bb]/10'
              }`}
            >
              <div>
                <div className="inline-block rounded-[2px] bg-[#d5c4bb]/10 px-2 py-1">
                  <p className="font-['Söhne_Mono'] text-[12px] leading-[14px] text-[#d5c4bb]">
                    {release.badge}
                  </p>
                </div>
                <p className="mt-2 font-semibold text-[20px] leading-[24px] text-[#d5c4bb]">
                  {release.date}
                </p>
              </div>
              <h3 className="font-bold text-[30px] leading-[38px] text-[#d5c4bb]">
                {release.title}
              </h3>
              <p className="font-['Söhne_Mono'] text-[16px] leading-[24px] text-[#a28b8a]">
                {release.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="relative bg-[#f5f0ee] px-16 pb-16 pt-12">
      <h2 className="mb-[18px] font-bold text-[110px] leading-[98px] tracking-[-2.2px] text-[#625757]">
        Ready to make your Dapp cross-chain?
      </h2>

      <div className="mb-10 flex justify-center">
        <button className="flex h-[38px] items-center justify-center gap-[6px] rounded-[2px] border border-[#786767] bg-[#f2fcfb] px-5 font-['Arial'] text-[13.3px] leading-normal text-[#625757] transition hover:opacity-90">
          Start Building
          <img src={arrowIcon} alt="" className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-[60px] border-t border-[#cbb7ad] pt-10">
        <div>
          <h3 className="font-bold text-[30px] leading-[38px] text-[#4c4646]">Learn</h3>
          <p className="mt-3 font-['Söhne_Mono'] text-[14px] leading-[20px] text-[#4c4646]">About</p>
          <p className="mt-3 font-['Söhne_Mono'] text-[14px] leading-[20px] text-[#4c4646]">Blog</p>
        </div>
        <div>
          <h3 className="font-bold text-[30px] leading-[38px] text-[#4c4646]">Build</h3>
          <p className="mt-3 font-['Söhne_Mono'] text-[14px] leading-[20px] text-[#4c4646]">Docs</p>
          <p className="mt-3 font-['Söhne_Mono'] text-[14px] leading-[20px] text-[#4c4646]">Demo</p>
        </div>
        <div>
          <h3 className="font-bold text-[30px] leading-[38px] text-[#4c4646]">Connect</h3>
          <p className="mt-3 font-['Söhne_Mono'] text-[14px] leading-[20px] text-[#4c4646]">Careers</p>
          <p className="mt-3 font-['Söhne_Mono'] text-[14px] leading-[20px] text-[#4c4646]">Twitter</p>
        </div>
        <div className="space-y-2 pt-2">
          <img src={footerLogoSvg} alt="Sig.Network" className="h-[34px] w-[200px]" />
          <p className="font-semibold text-[14px] leading-[20px] text-[#4c4646] opacity-80">
            2025 Sig.Network
          </p>
        </div>
      </div>

      {/* Footer decorative lines */}
      <div className="absolute bottom-0 left-0 h-[220.82px] w-full">
        <img src={footerLinesSvg} alt="" className="h-full w-full object-cover opacity-20" />
      </div>
    </footer>
  </div>
)

export default App