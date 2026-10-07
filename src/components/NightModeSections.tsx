import { ctaButtons } from '../content'

/* The Night Mode landing page sections. Content and visual grammar follow the Night Mode deck:
   the Midnight/Ethereum stack with the sig.network line, the privacy pool frame, the ladder, the chain row.
   Styles live in src/nightmode.css under the .nm scope. */

export const NightHero = () => (
  <section className="hero">
    <div className="wrap">
      <h1>Every app has a night mode.</h1>
      <p className="sub">
        Private positions, private deposits, private strategies, on the venue you already use.{' '}
        <b>Deploy on your chain, reach every market.</b>
      </p>
      <div className="cta">
        <a className="btn dark" href={ctaButtons.docs.href} target="_blank" rel="noopener noreferrer">
          {ctaButtons.docs.label}
        </a>
        <a className="btn light" href={ctaButtons.demo.href} target="_blank" rel="noopener noreferrer">
          {ctaButtons.demo.label}
        </a>
      </div>
      <div className="mode">
        <span className="switch">
          <i />
        </span>
        Night mode: on
      </div>
    </div>
  </section>
)

export const Ecosystems = () => (
  <section id="ecosystems">
    <div className="wrap">
      <p className="kicker">Ecosystems</p>
      <h2>Ecosystems are defined by what they lack.</h2>
      <p className="lead soft">
        Your chain has the privacy, or the logic, or the users. The deepest markets in the world are on
        Ethereum. And they are public. Nobody has to move.
      </p>
      <div className="boxes">
        <div className="box mid">
          <span>Privacy</span>
          <span className="cap">Your chain</span>
        </div>
        <div className="box gap">
          <span>Lacks privacy</span>
        </div>
        <div className="box gap">
          <span>Lacks markets</span>
        </div>
        <div className="box eth">
          <span>Markets</span>
          <span className="cap">Ethereum</span>
        </div>
      </div>
    </div>
  </section>
)

export const WhatIs = () => (
  <section id="what">
    <div className="wrap two">
      <div>
        <p className="kicker">What is Sig.Network</p>
        <h2>Your private app can act on any chain.</h2>
        <p className="lead">
          A signing network that gives your contract an account on any chain. Your contract decides what the
          account does. The chain sees an ordinary account doing ordinary things.
        </p>
        <div className="three">
          <div className="w">
            Liquidity<small>Ethereum&rsquo;s markets, from your chain.</small>
          </div>
          <div className="w">
            Protocols<small>Uniswap, Aave, Polymarket, the lot.</small>
          </div>
          <div className="w">
            Privacy<small>Logic and identity stay where you put them.</small>
          </div>
        </div>
      </div>
      <div className="stack">
        <div className="box mid">
          <span>Privacy</span>
          <span className="cap">Your chain</span>
        </div>
        <div className="sigbar">sig.network</div>
        <div className="box eth">
          <span>Markets</span>
          <span className="cap">Ethereum</span>
        </div>
      </div>
    </div>
  </section>
)

export const Experience = () => (
  <section id="experience">
    <div className="wrap">
      <p className="kicker">The user experience</p>
      <h2>Deposit. Swap. Lend. Send. Nobody&rsquo;s name on any of it.</h2>
      <div className="frame">
        <div className="lab">
          <span>Privacy pool</span>
          <span>Your app &middot; Your chain</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="t">
              Deposit ETH <span className="pill pend">Waiting for funds</span>
            </div>
            <div className="f">
              <span>Ethereum</span>
            </div>
            <div className="addr">0x71c24a90e3f7b1d806c52e9a77fb3c10e5d79e4b</div>
            <div className="b">Copy address</div>
          </div>
          <div className="card">
            <div className="t">
              Deposit received <span className="pill done">Complete</span>
            </div>
            <div className="f">
              <b>1.00 ETH</b>
              <span className="tk">ETH</span>
            </div>
            <div className="f">
              <span>Your balance</span>
              <b>1.00 ETH</b>
            </div>
          </div>
          <div className="card">
            <div className="t">
              Swap <span className="pill done">Uniswap</span>
            </div>
            <div className="f">
              <b>1</b>
              <span className="tk">ETH</span>
            </div>
            <div className="f">
              <b>3,200.00</b>
              <span className="tk">USDC</span>
            </div>
            <div className="b p">Swap</div>
          </div>
          <div className="card">
            <div className="t">
              Lend <span className="pill done">Aave</span>
            </div>
            <div className="f">
              <b>3,200</b>
              <span className="tk">USDC</span>
            </div>
            <div className="f">
              <span>Supply APY</span>
              <b>4.2%</b>
            </div>
            <div className="b p">Supply</div>
          </div>
        </div>
      </div>
      <div className="underframe">
        <div className="sigbar" style={{ margin: 0 }}>
          sig.network
        </div>
        <div className="box eth">
          <span>Markets</span>
          <span className="cap">Ethereum</span>
        </div>
      </div>
    </div>
  </section>
)

export const MovingTheLine = () => (
  <section id="line">
    <div className="wrap two">
      <div>
        <p className="kicker">Moving the line</p>
        <h2>Go private one layer at a time.</h2>
        <div className="notes">
          <p>
            <b>Day one.</b> The same trades, but with no leaked data. A private pool in front of an app people
            already use.
          </p>
          <p>
            <b>Then.</b> The strategy runs on your chain. Leverage, swaps and liquidations stay where the depth
            is.
          </p>
          <p>
            <b>Eventually.</b> Native assets are issued on their chain. They live their life on yours.
          </p>
          <p>
            <b>Out of step.</b> Nobody has to move at the same time. Every app draws its own line. They still
            trade with each other.
          </p>
        </div>
      </div>
      <div className="ladder">
        <div className="layer mid">
          <span>Privacy pool</span>
          <span className="role">normal users, but private</span>
          <span className="cap">Your chain</span>
        </div>
        <div className="layer mid">
          <span>Vault logic</span>
          <span className="role">the strategy</span>
          <span className="cap">Your chain</span>
        </div>
        <div className="sigbar">sig.network</div>
        <div className="layer">
          <span>Routing</span>
          <span className="role">aggregator, flash loans</span>
          <span className="cap">Ethereum</span>
        </div>
        <div className="layer">
          <span>Lending pool</span>
          <span className="role">the leverage</span>
          <span className="cap">Ethereum</span>
        </div>
        <div className="layer">
          <span>DEX liquidity</span>
          <span className="role">swaps, liquidations</span>
          <span className="cap">Ethereum</span>
        </div>
        <div className="layer">
          <span>Tokens</span>
          <span className="role">stETH, USDe, the dollar</span>
          <span className="cap">Ethereum</span>
        </div>
      </div>
    </div>
  </section>
)

export const EveryChain = () => (
  <section id="roadmap">
    <div className="wrap">
      <p className="kicker">Every chain</p>
      <h2>One pool, every chain.</h2>
      <p className="lead soft">
        Information leaks only where money crosses the line. Less crosses it with every chain.
      </p>
      <div className="stack" style={{ maxWidth: 'none' }}>
        <div className="box mid">
          <span>Your app</span>
          <span className="cap">Your chain</span>
        </div>
        <div className="sigbar">sig.network</div>
      </div>
      <div className="chainrow">
        <div className="chain eth">
          <span>Ethereum</span>
          <span className="cap">Live</span>
        </div>
        <div className="chain sol">
          <span>Solana</span>
          <span className="cap">Live</span>
        </div>
        <div className="chain mn">
          <span>Midnight</span>
          <span className="cap">Stagenet</span>
        </div>
        <div className="chain tron">
          <span>Tron</span>
          <span className="cap">December</span>
        </div>
        <div className="chain slot" />
      </div>
      <ul className="timeline">
        <li>
          <span className="tag live">Mainnet &middot; March 2025</span>
          <b>Ethereum &rarr; any network</b>
          Execute transactions on any blockchain from Ethereum contracts.
        </li>
        <li>
          <span className="tag live">Mainnet &middot; August 2025</span>
          <b>Solana &rarr; any network</b>
          Execute transactions on any blockchain from Solana contracts.
        </li>
        <li>
          <span className="tag live">Mainnet &middot; December 2025</span>
          <b>Ethereum &harr; Solana</b>
          Full bidirectional communication with response handling.
        </li>
        <li>
          <span className="tag">Stagenet &middot; 2026</span>
          <b>Midnight &rarr; Ethereum</b>
          Private apps on Midnight with real accounts on Ethereum. Tron in December.
        </li>
      </ul>
    </div>
  </section>
)

export const Compliance = () => (
  <section id="compliance">
    <div className="wrap">
      <p className="kicker">Compliance</p>
      <h2>Compliance, built in.</h2>
      <div className="four">
        <div className="c">
          <h3>Deposit rules</h3>
          <p>Contracts define what you accept, hold or return.</p>
        </div>
        <div className="c">
          <h3>Screening</h3>
          <p>Your pool is an ordinary Ethereum account. The tools regulated venues already use work.</p>
        </div>
        <div className="c">
          <h3>Segregation</h3>
          <p>Each app has its own accounts. Nothing sits in a shared pot with actors you don&rsquo;t trust.</p>
        </div>
        <div className="c">
          <h3>Disclosure</h3>
          <p>Define in your contracts what users have to share to participate in your application.</p>
        </div>
      </div>
    </div>
  </section>
)

export const Ask = () => (
  <section id="ask" className="ask">
    <div className="wrap">
      <p className="kicker">The ask</p>
      <h2>Pick the venue. We give you the pool.</h2>
      <a className="mail" href={ctaButtons.contact.href}>
        pitches@sig.network
      </a>
      <a
        className="repo"
        href="https://github.com/sig-net/midnight-examples"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/sig-net/midnight-examples
      </a>
    </div>
  </section>
)
