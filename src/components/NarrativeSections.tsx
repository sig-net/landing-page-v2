import type { NarrativeSlice } from '../content'
import SoftSurfacePanel from './SoftSurfacePanel'
import TechnicalPanel from './TechnicalPanel'

type NarrativeSectionsProps = {
  slices: NarrativeSlice[]
}

const NarrativeSections = ({ slices }: NarrativeSectionsProps) => (
  <>
    {slices.map((slice) => (
      <section key={slice.title} className="bg-dark-neutral-950">
        <TechnicalPanel alt={slice.alt} src={slice.image} srcMobile={slice.imageMobile} />
        <SoftSurfacePanel className="py-12 pl-0 md:py-[60px]">
          <div className="flex flex-col items-center gap-6 px-4 md:items-start md:gap-[40px] md:px-0">
            <h2 className="text-clam-shell-400 pr-[60px] text-[clamp(48px,7.64vw,110px)] leading-[1.042] font-bold tracking-[-0.96px] md:leading-[0.891] md:tracking-[-2.2px]">
              {slice.title}
            </h2>
            {slice.description && slice.description !== slice.title && (
              <div className="font-mono-custom text-dark-neutral-200 mx-auto max-w-[200px] text-[12px] leading-[14px] md:max-w-[520px] md:text-lg md:leading-7">
                {slice.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-[18px]' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </SoftSurfacePanel>
      </section>
    ))}
  </>
)

export default NarrativeSections
