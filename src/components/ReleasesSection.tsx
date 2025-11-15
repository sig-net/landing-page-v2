import type { Release } from '../content'
import { techIllustration5, techIllustrationMobile5 } from '../content'
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
    <TechnicalPanel
      alt="Sig.Network future roadmap"
      src={techIllustration5}
      srcMobile={techIllustrationMobile5}
    />
    <SoftSurfacePanel className="text-dark-neutral-600 py-[30px] md:py-15">
      <h2 className="text-clam-shell-400 text-[clamp(48px,8vw,110px)] leading-[0.89] font-bold tracking-[-2.2px] md:text-[110px] md:leading-[98px]">
        Releases
      </h2>
      <div className="mt-10 flex flex-col gap-8 px-5 md:mt-[50px] md:gap-1 md:px-15">
        {releases.map((release, index) => (
          <div
            key={release.date}
            className={`flex flex-col gap-4 pt-6 pb-8 md:flex-row md:gap-10 md:pb-10 ${index === 0 ? 'border-t-4 border-b border-[#c6b3b2]' : 'border-b border-[#c6b3b2]'}`}
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
      </div>
    </SoftSurfacePanel>
  </section>
)

export default ReleasesSection
