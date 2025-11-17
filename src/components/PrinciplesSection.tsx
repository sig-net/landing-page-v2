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
      title="We built Sig.Network around three principles:"
      bodyClassName="mx-auto mt-5 grid grid-cols-1 gap-[27px] md:mt-[40px] md:grid-cols-3 md:gap-[62px]"
    >
      {principles.map((principle) => (
        <div
          key={principle.number}
          className="border-dark-neutral-200/40 flex flex-col gap-1 border-t-[0.31px] md:gap-5"
        >
          <p className="text-dark-neutral-200 text-[14px] leading-[20px] md:text-[18px] md:leading-[28px]">
            {principle.number}
          </p>
          <h3 className="text-dark-neutral-200 font-sans text-[18px] leading-[28px] font-bold md:text-[30px] md:leading-[38x]">
            {principle.title}
          </h3>
          <div className="text-dark-neutral-500 text-[12px] leading-[14px] md:text-[16px] md:leading-[24px]">
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
