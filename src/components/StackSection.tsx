import type { StackStep } from '../content'
import { techIllustration3, techIllustrationMobile3 } from '../content'
import SectionContent from './SectionContent'
import TechnicalPanel from './TechnicalPanel'

type StackSectionProps = {
  steps: StackStep[]
}

const StackDivider = ({
  direction = 'right',
  label,
  vertical = false,
}: {
  direction?: 'left' | 'right'
  label: string
  vertical?: boolean
}) => (
  <div
    className={`flex ${vertical ? 'flex-col items-center gap-3' : 'flex-row items-center gap-[25px]'}`}
  >
    {vertical && direction === 'left' && (
      <div className="relative w-3 flex-1">
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 12 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <polygon points="6,0 0,10 12,10" fill="#C6B3B2" />
          <rect x="5" y="10" width="2" height="990" fill="#C6B3B2" />
        </svg>
      </div>
    )}
    <p className="text-dark-neutral-400 text-xs leading-4 font-medium whitespace-nowrap md:text-sm md:leading-5">
      {label}
    </p>
    {!vertical && (
      <div className="relative h-3 flex-1">
        {direction === 'right' ? (
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 1000 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <rect x="0" y="5" width="990" height="2" fill="#C6B3B2" />
            <polygon points="990,0 990,12 1000,6" fill="#C6B3B2" />
          </svg>
        ) : (
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 1000 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <polygon points="0,6 10,0 10,12" fill="#C6B3B2" />
            <rect x="10" y="5" width="990" height="2" fill="#C6B3B2" />
          </svg>
        )}
      </div>
    )}
    {vertical && direction === 'right' && (
      <div className="relative w-3 flex-1">
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 12 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <rect x="5" y="0" width="2" height="990" fill="#C6B3B2" />
          <polygon points="6,1000 0,990 12,990" fill="#C6B3B2" />
        </svg>
      </div>
    )}
  </div>
)

const StackSection = ({ steps }: StackSectionProps) => (
  <section>
    <TechnicalPanel
      alt="Sig.Network data flow"
      src={techIllustration3}
      srcMobile={techIllustrationMobile3}
    />
    <SectionContent
      className="text-dark-neutral-600"
      title="Built on a proven stack:"
      bodyClassName="mx-auto mt-5 flex flex-col gap-8 md:mt-[35px] md:gap-10"
    >
      <div className="hidden md:block">
        <StackDivider label="Request" />
      </div>

      <div className="mx-auto flex gap-3 md:hidden">
        <StackDivider label="Request" vertical />
        <div className="grid flex-1 grid-cols-1">
          {steps.map((step) => (
            <div key={step.title} className={`text-dark-neutral-400 p-5 ${step.tone}`}>
              <h3 className="font-sans text-[14px] leading-[20px] font-bold">
                {step.title}
              </h3>
              <p className="text-[12px] leading-[14px]">{step.text}</p>
            </div>
          ))}
        </div>
        <StackDivider direction="left" label="Response" vertical />
      </div>

      <div className="hidden md:grid md:grid-cols-5">
        {steps.map((step) => (
          <div
            key={step.title}
            className={`text-dark-neutral-400 flex flex-col gap-3 border-r border-white/20 p-5 last:border-r-0 ${step.tone}`}
          >
            <h3 className="font-sans text-[16px] leading-[24px] font-bold">
              {step.title}
            </h3>
            <p className="text-[14px] leading-[20px]">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <StackDivider direction="left" label="Response" />
      </div>
    </SectionContent>
  </section>
)

export default StackSection
