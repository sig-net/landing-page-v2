import type { Principle } from '../content'
import { techIllustration4, techIllustrationMobile4 } from '../content'
import SectionContent from './SectionContent'
import TechnicalPanel from './TechnicalPanel'

type PrinciplesSectionProps = {
  principles: Principle[]
}

const PrinciplesSection = ({ principles }: PrinciplesSectionProps) => (
  <section>
    <TechnicalPanel
      alt="Sig.Network architectural principle"
      src={techIllustration4}
      srcMobile={techIllustrationMobile4}
    />
    <SectionContent
      className="text-dark-neutral-600"
      header={
        <h2 className="section-heading leading-[0.71]">
          We built Sig.Network around three principles:
        </h2>
      }
      bodyClassName="mx-auto mt-12 grid grid-cols-1 gap-[38px] md:mt-[40px] md:grid-cols-3 md:gap-[62px]"
    >
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="border-dark-neutral-200 flex flex-col gap-5 border-t pt-0"
          >
            <p className="font-mono-custom text-dark-neutral-200 text-lg leading-7">
              {principle.number}
            </p>
            <h3 className="text-dark-neutral-200 text-3xl leading-[38px] font-bold">
              {principle.title}
            </h3>
            <div className="font-mono-custom text-dark-neutral-500 text-base leading-6">
              {principle.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index > 0 ? 'mt-4' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
    </SectionContent>
  </section>
)

export default PrinciplesSection
