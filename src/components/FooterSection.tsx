import linesBottom from '../assets/lines-bottom.svg'
import signetworkLogo from '../assets/signetwork-logo.svg'
import type { FooterColumn } from '../content'
import ArrowButton from './ArrowButton'

type FooterSectionProps = {
  columns: FooterColumn[]
}

const FooterSection = ({ columns }: FooterSectionProps) => (
  <footer className="border-clam-shell-500 bg-clam-shell-50 text-dark-neutral-600 relative overflow-hidden border-t">
    <img
      src={linesBottom}
      alt=""
      className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-40"
      aria-hidden
    />
    <div className="relative flex flex-col items-start py-[133px] pr-[60px] pl-0 pb-[270px] max-md:px-4 max-md:pt-12 max-md:pb-16">
      <h2 className="text-left text-[110px] leading-[98px] font-bold tracking-[-2.2px] text-[#625757] max-md:text-center max-md:text-[clamp(48px,8vw,110px)] max-md:leading-[0.891]">
        Ready to make your Dapp cross-chain?
      </h2>
      <div className="mt-10 ml-[60px] flex w-full items-center justify-center max-md:mt-10 max-md:ml-0">
        <ArrowButton variant="pastel">Start building</ArrowButton>
      </div>
      <div className="border-clam-shell-500 mt-10 ml-[60px] grid w-full grid-cols-4 gap-[60px] border-t pt-10 max-md:mt-10 max-md:ml-0 max-md:grid-cols-1 max-md:gap-8 max-md:pt-10">
        {columns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-dark-neutral-600 text-[30px] leading-[38px] font-bold max-md:text-[26px]">
              {column.heading}
            </h3>
            <ul className="font-mono-custom text-dark-neutral-600 mt-3 space-y-3 text-sm leading-5 max-md:mt-4 max-md:space-y-3 max-md:text-[15px]">
              {column.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="max-md:flex max-md:flex-col max-md:items-center">
          <img src={signetworkLogo} alt="Sig.Network" className="h-[34px] w-[200px] max-md:h-[40px] max-md:w-[237px]" />
          <p className="text-dark-neutral-600/80 mt-[18px] text-[14px] leading-[20px] font-semibold max-md:mt-3 max-md:text-[15px]">
            2025 Sig.Network
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterSection
