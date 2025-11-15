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
  <section id="roadmap">
    <TechnicalPanel
      alt="Sig.Network future roadmap"
      src={techIllustration5}
      srcMobile={techIllustrationMobile5}
    />
    <SectionContent
      className="text-dark-neutral-600"
      title="Releases"
      bodyClassName="mt-4 flex flex-col md:mt-[50px]"
    >
      {releases.map((release, index) => (
        <div
          key={release.date}
          className={`border-border-divider flex flex-col gap-1 border-b pt-2 pb-3 md:flex-row md:gap-10 md:pt-6 md:pb-10 ${index === 0 ? 'border-t md:border-t-4' : ''}`}
        >
          <div className="flex shrink-0 flex-col items-start gap-1 md:gap-2.5">
            <span
              className={`rounded-[4px] border px-[6px] py-[2px] font-sans text-[10px] leading-[10px] font-bold tracking-wide uppercase md:text-sm md:leading-4 md:tracking-wider ${badgeTone[release.badgeType]}`}
            >
              {release.badge}
            </span>
            <p className="text-dark-neutral-500 w-[200px] text-xs leading-4 md:text-base">
              {release.date}
            </p>
          </div>
          <h3 className="text-dark-neutral-200 w-full shrink-0 font-sans text-xl leading-8 font-semibold md:w-[400px] md:text-3xl md:leading-9">
            {release.title}
          </h3>
          <p className="text-dark-neutral-400 flex-1 text-xs leading-4 opacity-85 md:text-base md:leading-6">
            {release.description}
          </p>
        </div>
      ))}
    </SectionContent>
  </section>
)

export default ReleasesSection
