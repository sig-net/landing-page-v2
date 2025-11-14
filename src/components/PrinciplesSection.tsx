import type { Principle } from '../content'
import {
  techIllustration4,
  techIllustrationMobile4,
} from '../content'
import SoftSurfacePanel from './SoftSurfacePanel'
import TechnicalPanel from './TechnicalPanel'

type PrinciplesSectionProps = {
  principles: Principle[]
}

const PrinciplesSection = ({ principles }: PrinciplesSectionProps) => (
  <section className="bg-dark-neutral-950">
    <TechnicalPanel
      alt="Sig.Network architectural principle"
      src={techIllustration4}
      srcMobile={techIllustrationMobile4}
    />
    <SoftSurfacePanel className="text-dark-neutral-600 mt-0 py-[133px] pr-[60px] pl-0 max-md:px-4 max-md:py-12">
      <h2 className="text-clam-shell-400 text-[110px] leading-[98px] font-bold tracking-[-2.2px] max-md:text-[clamp(48px,8vw,110px)] max-md:leading-[0.71]">
        We built Sig.Network around three principles:
      </h2>
      <div className="mt-[40px] ml-[60px] grid grid-cols-3 gap-[62px] max-md:mt-12 max-md:ml-0 max-md:grid-cols-1 max-md:gap-[38px]">
        {principles.map((principle) => (
          <div key={principle.number} className="border-dark-neutral-200 flex flex-col gap-5 border-t pt-0">
            <p className="font-mono-custom text-dark-neutral-200 text-lg leading-7">
              {principle.number}
            </p>
            <h3 className="text-dark-neutral-200 text-3xl leading-[38px] font-bold">{principle.title}</h3>
            <div className="font-mono-custom text-dark-neutral-500 text-base leading-6">
              {principle.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index > 0 ? 'mt-4' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SoftSurfacePanel>
  </section>
)

export default PrinciplesSection
