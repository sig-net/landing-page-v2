import linesBottom from '../assets/lines-bottom.svg'
import signetworkLogo from '../assets/signetwork-logo.svg'
import type { FooterColumn } from '../content'
import ArrowButton from './ArrowButton'

type FooterSectionProps = {
  columns: FooterColumn[]
}

const FooterSection = ({ columns }: FooterSectionProps) => (
  <footer className="text-dark-neutral-600 relative overflow-hidden">
    <img
      src={linesBottom}
      alt=""
      className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-40"
      aria-hidden
    />
    <div className="relative flex flex-col items-start pt-12 pb-16 pl-0 md:pt-[133px] md:pb-[270px]">
      <h2 className="text-left text-[clamp(48px,8vw,110px)] leading-[0.891] font-bold tracking-[-2.2px] text-[#625757] md:text-[110px] md:leading-[98px]">
        Ready to make your Dapp cross-chain?
      </h2>
      <div className="mt-10 ml-0 flex w-full items-center justify-center py-5">
        <ArrowButton variant="pastel">Start building</ArrowButton>
      </div>
      <div className="border-clam-shell-500 grid w-full grid-cols-1 gap-8 border-t p-16 pt-10 text-center md:grid-cols-4 md:gap-[60px] md:text-left">
        {columns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-dark-neutral-600 text-[26px] leading-[38px] font-bold md:text-[30px]">
              {column.heading}
            </h3>
            <ul className="font-mono-custom text-dark-neutral-600 mt-4 space-y-3 text-[15px] leading-5 md:mt-3 md:text-sm">
              {column.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col items-center md:block">
          <img
            src={signetworkLogo}
            alt="Sig.Network"
            className="h-[40px] w-[237px] md:h-[34px] md:w-[200px]"
          />
          <p className="text-dark-neutral-600/80 mt-3 text-[15px] leading-[20px] font-semibold md:mt-5 md:text-[14px]">
            2025 Sig.Network
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterSection
