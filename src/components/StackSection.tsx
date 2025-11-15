import type { StackStep } from '../content'
import { techIllustration3, techIllustrationMobile3 } from '../content'
import SoftSurfacePanel from './SoftSurfacePanel'
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
    <p className="font-mono-custom text-dark-neutral-400 text-sm leading-5 tracking-[0.04em] whitespace-nowrap">
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
  <section className="bg-dark-neutral-950">
    <TechnicalPanel
      alt="Sig.Network data flow"
      src={techIllustration3}
      srcMobile={techIllustrationMobile3}
    />
    <SoftSurfacePanel className="text-dark-neutral-600 mt-0 px-4 py-12 md:px-0 md:py-[60px]">
      <h2 className="text-clam-shell-400 text-[clamp(48px,8vw,110px)] leading-[clamp(43px,7.13vw,98px)] font-bold tracking-[-2.2px] md:text-[110px] md:leading-[98px]">
        Built on a proven stack:
      </h2>
      <div className="mt-10 ml-0 flex flex-col gap-8 md:mx-[60px] md:mt-[35px] md:gap-10">
        <div className="hidden md:block">
          <StackDivider label="Request" />
        </div>

        <div className="flex gap-5 md:hidden">
          <StackDivider label="Request" vertical />
          <div className="grid flex-1 grid-cols-1 gap-5">
            {steps.map((step) => (
              <div
                key={step.title}
                className={`text-dark-neutral-400 flex flex-col gap-3 border border-white/20 p-5 ${step.tone}`}
              >
                <h3 className="text-base leading-6 font-bold">{step.title}</h3>
                <p className="font-mono-custom text-dark-neutral-400 text-sm leading-5 opacity-85">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          <StackDivider direction="left" label="Response" vertical />
        </div>

        <div className="hidden md:grid md:grid-cols-5 md:gap-0">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`text-dark-neutral-400 flex flex-col gap-3 border-r border-white/20 p-5 last:border-r-0 ${step.tone}`}
            >
              <h3 className="text-base leading-6 font-bold">{step.title}</h3>
              <p className="font-mono-custom text-dark-neutral-400 text-sm leading-5 opacity-85">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <StackDivider direction="left" label="Response" />
        </div>
      </div>
    </SoftSurfacePanel>
  </section>
)

export default StackSection
