import type { Release } from '../content'
import {
  techIllustration5,
  techIllustrationMobile5,
} from '../content'
import SoftSurfacePanel from './SoftSurfacePanel'
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
  <section className="bg-dark-neutral-950">
    <TechnicalPanel alt="Sig.Network future roadmap" src={techIllustration5} srcMobile={techIllustrationMobile5} />
    <SoftSurfacePanel className="text-dark-neutral-600 mt-0 py-[133px] pr-[60px] pl-0 max-md:px-4 max-md:py-12">
      <h2 className="text-clam-shell-400 text-[110px] leading-[98px] font-bold tracking-[-2.2px] max-md:text-[clamp(48px,8vw,110px)] max-md:leading-[0.89]">
        Releases
      </h2>
      <div className="mt-[50px] ml-[60px] flex flex-col gap-1 max-md:mt-10 max-md:ml-0 max-md:gap-8">
        {releases.map((release, index) => (
          <div
            key={release.date}
            className={`flex gap-10 pt-6 pb-10 max-md:flex-col max-md:gap-4 max-md:pb-8 ${index === 0 ? 'border-t-[4px] border-b border-[#c6b3b2]' : 'border-b border-[#c6b3b2]'}`}
          >
            <div className="flex shrink-0 flex-col items-start gap-2.5">
              <span
                className={`inline-flex items-center rounded-[4px] border px-[6px] py-[2px] text-sm leading-[18px] font-bold tracking-[1.4px] uppercase ${badgeTone[release.badgeType]}`}
              >
                {release.badge}
              </span>
              <p className="font-mono-custom text-dark-neutral-500 w-[200px] text-base leading-6 opacity-80">
                {release.date}
              </p>
            </div>
            <h3 className="text-dark-neutral-200 w-[400px] shrink-0 text-3xl leading-[38px] font-semibold max-md:w-full max-md:text-[28px]">
              {release.title}
            </h3>
            <p className="font-mono-custom text-dark-neutral-500 flex-1 text-base leading-6 opacity-85">
              {release.description}
            </p>
          </div>
        ))}
      </div>
    </SoftSurfacePanel>
  </section>
)

export default ReleasesSection
