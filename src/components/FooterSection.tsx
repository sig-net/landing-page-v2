import linesBottom from '../assets/lines-bottom.svg'
import signetworkLogo from '../assets/signetwork-logo.svg'
import type { FooterColumn } from '../content'
import { ctaButtons } from '../content'
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
    <div className="relative flex flex-col items-start pb-16 md:pt-[32px] md:pb-[270px]">
      <h2 className="text-left text-5xl leading-[50px] font-bold tracking-[-2.2px] text-[#625757] md:text-8xl md:leading-[98px]">
        Ready to make your Dapp cross-chain?
      </h2>
      <div className="flex w-full items-center justify-center py-5">
        <ArrowButton
          variant="pastel"
          href={ctaButtons.docs.href}
          external={ctaButtons.docs.external}
        >
          {ctaButtons.docs.label}
        </ArrowButton>
      </div>
      <div className="border-clam-shell-500 grid w-full grid-cols-1 gap-5 border-t pt-3 text-center md:grid-cols-4 md:gap-15 md:px-15 md:pt-10 md:text-left">
        {columns.map((column) => (
          <div key={column.heading}>
            <h3 className="font-sans text-sm leading-5 font-bold md:text-3xl md:leading-9">
              {column.heading}
            </h3>
            <ul className="mt-1 flex flex-col gap-1 text-xs leading-4 md:mt-3 md:gap-3 md:text-sm md:leading-5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:opacity-80"
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    {link.label}
                  </a>
                </li>
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
          <p className="mt-3 text-sm leading-5 font-semibold opacity-80 md:mt-5">
            2025 Sig.Network
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterSection
