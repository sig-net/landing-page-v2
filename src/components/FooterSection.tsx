import linesBottom from '../assets/lines-bottom.svg'
import type { FooterColumn } from '../content'
import { ctaButtons } from '../content'
import ArrowButton from './ArrowButton'
import Logo from './Logo'

type FooterSectionProps = {
  columns: FooterColumn[]
}

const FooterSection = ({ columns }: FooterSectionProps) => (
  <footer className="text-dark-neutral-600">
    <div className="flex flex-col items-start pb-16 md:pt-10">
      <h2 className="text-dark-neutral-500 font-sans text-[48px] leading-[50px] font-bold -tracking-[0.98px] md:text-[110px] md:leading-[98px] md:-tracking-[2.2px]">
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
      <div className="border-clam-shell-500 text-dark-neutral-600 grid w-full grid-cols-1 gap-5 border-t pt-3 text-center md:grid-cols-4 md:gap-15 md:px-15 md:pt-10 md:text-left">
        {columns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-dark-neutral-600 font-sans text-[14px] leading-[20px] font-bold md:text-[30px] md:leading-[38px]">
              {column.heading}
            </h3>
            <ul className="text-dark-neutral-600 mt-1 flex flex-col gap-1 text-[12px] leading-[18px] md:mt-3 md:gap-3 md:text-[14px] md:leading-[20px]">
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
          <Logo className="text-dark-neutral-600 h-[40px] w-[237px] md:h-[34px] md:w-[200px]" />
          <p className="mt-3 text-sm leading-5 font-semibold opacity-80 md:mt-5">
            2025 Sig.Network
          </p>
        </div>
      </div>
    </div>
    <img src={linesBottom} alt="" className="w-full" aria-hidden />
  </footer>
)

export default FooterSection
