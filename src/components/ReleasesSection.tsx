import type { Release } from '../content'
import { techIllustration5, techIllustrationMobile5 } from '../content'
import SectionContent from './SectionContent'
import TechnicalPanel from './TechnicalPanel'

type ReleasesSectionProps = {
  releases: Release[]
}

const badgeTone: Record<Release['badgeType'], string> = {
  development: 'bg-[#e9e8f0] border-[#d7d5e2] text-[#6c657d]',
  mainnet: 'bg-[#deffd6] border-[#27ed02] text-[#1a8d07]',
  testnet: 'bg-[#ffe8d9] border-[#f48a38] text-[#d16310]',
}

const ReleasesSection = ({ releases }: ReleasesSectionProps) => (
  <section>
    <TechnicalPanel
      alt="Sig.Network future roadmap"
      src={techIllustration5}
      srcMobile={techIllustrationMobile5}
    />
    <SectionContent
      className="text-dark-neutral-600"
      header={
        <h2 className="section-heading leading-[0.89]">
          Releases
        </h2>
      }
      bodyClassName="mt-10 flex flex-col gap-8 md:mt-[50px] md:gap-1"
    >
        {releases.map((release, index) => (
          <div
            key={release.date}
            className={`flex flex-col gap-4 pt-6 pb-8 md:flex-row md:gap-10 md:pb-10 ${index === 0 ? 'border-t-4 border-b border-border-divider' : 'border-b border-border-divider'}`}
          >
            <div className="flex shrink-0 flex-col items-start gap-2.5">
              <span
                className={`inline-flex items-center rounded-[4px] border px-[6px] py-[2px] text-sm leading-5 font-bold tracking-[1.4px] uppercase ${badgeTone[release.badgeType]}`}
              >
                {release.badge}
              </span>
              <p className="font-mono-custom text-dark-neutral-500 w-[200px] text-base leading-6 opacity-80">
                {release.date}
              </p>
            </div>
            <h3 className="text-dark-neutral-200 w-full shrink-0 text-[28px] leading-[38px] font-semibold md:w-[400px] md:text-3xl">
              {release.title}
            </h3>
            <p className="font-mono-custom text-dark-neutral-500 flex-1 text-base leading-6 opacity-85">
              {release.description}
            </p>
          </div>
        ))}
    </SectionContent>
  </section>
)

export default ReleasesSection
