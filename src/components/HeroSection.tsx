import linesTop from '../assets/lines-top.svg'

import ArrowButton from './ArrowButton'

const HeroSection = () => (
  <section className="border-clam-shell-500 text-dark-neutral-600 relative border-b">
    <img
      src={linesTop}
      alt=""
      className="absolute inset-x-0 top-0 w-full opacity-60"
      aria-hidden
    />
    <div className="relative mx-auto pt-[34px] pb-[27px] md:pt-[156px] md:pb-[82px]">
      <h1 className="text-dark-neutral-600 text-[clamp(60px,9.65vw,139px)] leading-[0.8] font-bold tracking-[-2.78px]">
        DeFi without borders.
      </h1>
      <div className="px-5 md:px-15">
        <div className="font-mono-custom text-dark-neutral-600 mt-[33px] space-y-[9px] text-[12px] leading-[14px] md:mt-[21px] md:max-w-[632px] md:space-y-[15px] md:text-[16px] md:leading-[24px]">
          <p>DeFi is siloed today, but it doesn&apos;t need to be.</p>
          <p>
            For the first time, deploy on the chain you use and execute natively on every
            chain without restriction.
          </p>
        </div>
        <div className="mt-[9px] flex flex-wrap items-center gap-[11px] md:mt-[15px] md:gap-5">
          <ArrowButton
            variant="brandLight"
            className="h-[31px] px-[11px] py-[8px] text-[10px] md:h-[48px] md:px-5 md:py-[12px] md:text-base"
          >
            Launch demo
          </ArrowButton>
          <ArrowButton
            variant="brandDark"
            className="h-[31px] px-[11px] py-[8px] text-[10px] md:h-[48px] md:px-5 md:py-[12px] md:text-base"
          >
            Start building
          </ArrowButton>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
