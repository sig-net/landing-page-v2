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
        <SoftSurfacePanel className="mt-0 py-[124px] pr-[60px] pl-0 max-md:py-12 max-md:pr-4">
          <div className="flex flex-col items-start gap-[40px] max-md:items-center max-md:gap-6 max-md:px-4 max-md:text-center">
            <h2 className="text-clam-shell-400 text-[clamp(48px,7.64vw,110px)] leading-[0.891] font-bold tracking-[-2.2px] max-md:leading-[1.042] max-md:tracking-[-0.96px]">
              {slice.title}
            </h2>
            {slice.description && slice.description !== slice.title && (
              <div className="font-mono-custom text-dark-neutral-200 ml-[460px] max-w-[520px] text-lg leading-7 max-md:ml-0 max-md:max-w-[200px] max-md:text-[12px] max-md:leading-[14px]">
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
