const sections = [
  {
    title: 'Wallet agnostic',
    copy: 'Deep wallet support powered by the latest EIP standards and WalletConnect v2.',
  },
  {
    title: 'Gas aware UX',
    copy: 'Surface live gas insights and sponsorships so users never guess transaction costs.',
  },
  {
    title: 'Audit ready',
    copy: 'Security-first stack with typed contracts, linting, and automated preview builds.',
  },
]

const App = () => (
  <div className="min-h-screen bg-slate-950 text-slate-50">
    <header className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:py-28">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-cyan-300/80 uppercase">
            dApp launchpad
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-white md:text-6xl">
            Launch modern blockchain experiences lightning fast.
          </h1>
          <p className="text-base text-slate-300 md:text-lg">
            A minimal Vite + Tailwind starter that ships production-ready tooling,
            accessible components, and the flexibility to grow into any landing page or
            marketing site.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300">
              Deploy demo
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60">
              View docs
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center md:justify-end">
          <div className="w-full max-w-sm rounded-3xl border border-white/5 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <p className="text-sm text-slate-300">Featured integration</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Seemless wallet flows
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Hook up your preferred wallet stack without heavy boilerplate.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs tracking-wide text-slate-400 uppercase">
                  Next steps
                </p>
                <ol className="mt-2 space-y-2 text-sm text-slate-200">
                  <li>1. Drop ABI files</li>
                  <li>2. Configure RPC endpoints</li>
                  <li>3. Launch with confidence</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
      {sections.map((section) => (
        <article
          key={section.title}
          className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-lg shadow-black/20"
        >
          <h3 className="text-lg font-semibold text-white">{section.title}</h3>
          <p className="mt-3 text-sm text-slate-300">{section.copy}</p>
        </article>
      ))}
    </section>
    <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
      Built with Vite, React, Tailwind CSS, ESLint, and Prettier.
    </footer>
  </div>
)

export default App
