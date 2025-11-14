import linesTop from '../assets/lines-top.svg'

import ArrowButton from './ArrowButton'

const HeroSection = () => (
  <section className="border-clam-shell-500 bg-clam-shell-50 text-dark-neutral-600 relative overflow-hidden border-b">
    <img
      src={linesTop}
      alt=""
      className="pointer-events-none absolute inset-x-0 top-0 w-full opacity-60"
      aria-hidden
    />
    <div className="relative mx-auto max-w-[1440px] px-[60px] pt-[156px] pb-[82px] max-md:px-5 max-md:pt-[34px] max-md:pb-[27px]">
      <h1 className="text-dark-neutral-600 text-[clamp(60px,9.65vw,139px)] leading-[0.647] font-bold tracking-[-2.78px]">
        DeFi without borders.
      </h1>
      <div className="font-mono-custom text-dark-neutral-600 mt-[21px] max-w-[632px] space-y-[15px] text-[16px] leading-[24px] max-md:mt-[33px] max-md:space-y-[9px] max-md:text-[12px] max-md:leading-[14px]">
        <p>DeFi is siloed today, but it doesn&apos;t need to be.</p>
        <p>
          For the first time, deploy on the chain you use and execute natively on every chain without
          restriction.
        </p>
      </div>
      <div className="mt-[15px] flex flex-wrap items-center gap-[18px] max-md:mt-[9px] max-md:gap-[11px]">
        <ArrowButton
          variant="brandLight"
          className="h-[48px] max-md:h-[31px] max-md:px-[11px] max-md:py-[8px] max-md:text-[10px]"
        >
          Launch demo
        </ArrowButton>
        <ArrowButton
          variant="brandDark"
          className="h-[48px] max-md:h-[31px] max-md:px-[11px] max-md:py-[8px] max-md:text-[10px]"
        >
          Start building
        </ArrowButton>
      </div>
    </div>
  </section>
)

export default HeroSection
