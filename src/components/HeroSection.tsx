import linesTop from '../assets/lines-top.svg'
import gradientWithNoise from '../assets/gradient-with-noise.webp'

import { ctaButtons } from '../content'
import ArrowButton from './ArrowButton'

const HeroSection = () => (
  <section
    className="border-clam-shell-500 text-dark-neutral-600 relative border-b bg-cover bg-center"
    style={{ backgroundImage: `url(${gradientWithNoise})` }}
  >
    <img
      src={linesTop}
      alt=""
      className="absolute inset-x-0 top-0 h-[134px] w-full object-cover object-top sm:h-[84px] md:h-[246px]"
      aria-hidden
    />
    <div className="relative mx-auto pt-[34px] pb-[27px] md:pt-[156px] md:pb-[82px]">
      <h1 className="text-dark-neutral-600 font-sans text-[48px] leading-[50px] font-bold -tracking-[0.98px] md:text-[110px] md:leading-[98px] md:-tracking-[2.2px]">
        Blockchains without borders.
      </h1>
      <div className="px-5 md:px-15">
        <div className="mt-[33px] space-y-[9px] text-xs leading-4 md:mt-[22px] md:max-w-[632px] md:space-y-[15px] md:text-base md:leading-6">
          <p>DeFi is siloed today, but it doesn&apos;t need to be.</p>
          <p>
            For the first time, deploy on the chain you use and execute natively on every
            chain without restriction.
          </p>
        </div>
        <div className="mt-[9px] flex items-center gap-[11px] md:mt-[15px] md:gap-5">
          <ArrowButton
            variant="brandLight"
            href={ctaButtons.demo.href}
            external={ctaButtons.demo.external}
          >
            {ctaButtons.demo.label}
          </ArrowButton>
          <ArrowButton
            variant="brandDark"
            href={ctaButtons.docs.href}
            external={ctaButtons.docs.external}
          >
            {ctaButtons.docs.label}
          </ArrowButton>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
