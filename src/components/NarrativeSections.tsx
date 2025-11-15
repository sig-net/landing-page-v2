import type { NarrativeSlice } from '../content'
import SectionContent from './SectionContent'
import TechnicalPanel from './TechnicalPanel'

type NarrativeSectionsProps = {
  slices: NarrativeSlice[]
}

const NarrativeSections = ({ slices }: NarrativeSectionsProps) => (
  <>
    {slices.map((slice, index) => (
      <section key={slice.title} id={index === 0 ? 'what' : undefined}>
        <TechnicalPanel alt={slice.alt} src={slice.image} srcMobile={slice.imageMobile} />
        <SectionContent
          title={slice.title}
          bodyClassName="flex flex-col items-center mt-5 md:mt-[40px] md:items-start"
        >
          <div className="text-dark-neutral-200 mx-auto max-w-[200px] text-xs leading-4 md:max-w-[520px] md:text-lg md:leading-7">
            {slice.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-5' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </SectionContent>
      </section>
    ))}
  </>
)

export default NarrativeSections
