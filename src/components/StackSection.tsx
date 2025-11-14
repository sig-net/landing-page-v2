import type { StackStep } from '../content'
import {
  techIllustration3,
  techIllustrationMobile3,
} from '../content'
import stackDividerArrowLeft from '../assets/stack-divider-arrow-left.svg'
import stackDividerArrowRight from '../assets/stack-divider-arrow-right.svg'
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
  <div className={`flex ${vertical ? 'flex-row items-start gap-3' : 'flex-row items-center gap-[25px]'}`}>
    <p className="font-mono-custom text-dark-neutral-400 text-sm leading-5 tracking-[0.6em] whitespace-nowrap uppercase">
      {label}
    </p>
    {!vertical && (
      <div className="relative h-px flex-1">
        <img
          src={direction === 'left' ? stackDividerArrowLeft : stackDividerArrowRight}
          alt=""
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
      </div>
    )}
    {vertical && (
      <div className="relative w-px flex-1">
        <div className="h-full w-full bg-gradient-to-b from-[rgba(197,183,173,0.15)] to-[rgba(197,183,173,0.6)]" />
      </div>
    )}
  </div>
)

const StackSection = ({ steps }: StackSectionProps) => (
  <section className="bg-dark-neutral-950">
    <TechnicalPanel alt="Sig.Network data flow" src={techIllustration3} srcMobile={techIllustrationMobile3} />
    <SoftSurfacePanel className="text-dark-neutral-600 mt-0 py-[133px] pr-[60px] pl-0 max-md:px-4 max-md:py-12">
      <h2 className="text-clam-shell-400 text-[110px] leading-[98px] font-bold tracking-[-2.2px] max-md:text-[clamp(48px,8vw,110px)] max-md:leading-[clamp(43px,7.13vw,98px)]">
        Built on a proven stack:
      </h2>
      <div className="mt-[35px] ml-[60px] flex flex-col gap-10 max-md:mt-10 max-md:ml-0 max-md:gap-8">
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
