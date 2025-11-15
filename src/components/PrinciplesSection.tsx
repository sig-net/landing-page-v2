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
    <SoftSurfacePanel className="text-dark-neutral-600 mt-0 px-4 py-12 md:px-0 md:py-[133px] md:pr-[60px] md:pl-0">
      <h2 className="text-clam-shell-400 text-[clamp(48px,8vw,110px)] leading-[0.71] font-bold tracking-[-2.2px] md:text-[110px] md:leading-[98px]">
        We built Sig.Network around three principles:
      </h2>
      <div className="mt-12 ml-0 grid grid-cols-1 gap-[38px] md:mt-[40px] md:ml-[60px] md:grid-cols-3 md:gap-[62px]">
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
