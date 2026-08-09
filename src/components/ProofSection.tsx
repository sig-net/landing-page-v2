import { proofClients, proofPoints } from '../content'

const ProofSection = () => (
  <section
    aria-label="Traction and credibility"
    className="border-clam-shell-500 bg-clam-shell-50 text-dark-neutral-600 border-b"
  >
    <div className="md:grid md:grid-cols-3">
      {proofPoints.map((point, index) => (
        <div
          key={point.title}
          className={`border-clam-shell-500 border-b p-5 md:border-b-0 md:px-15 md:py-10 ${index > 0 ? 'md:border-l' : ''}`}
        >
          <h3 className="font-sans text-[16px] leading-[24px] font-bold md:text-[20px] md:leading-[28px]">
            {point.title}
          </h3>
          <p className="text-dark-neutral-500 mt-2 text-[12px] leading-[16px] md:text-[14px] md:leading-[22px]">
            {point.text}
            {point.link && (
              <>
                {' '}
                <a
                  href={point.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  {point.link.label}
                </a>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
    <div className="border-clam-shell-500 flex flex-col gap-3 border-t px-5 py-5 md:flex-row md:items-baseline md:gap-10 md:px-15">
      <p className="text-dark-neutral-400 shrink-0 text-[10px] leading-4 tracking-[1px] uppercase md:text-[12px] md:leading-5 md:tracking-[1.2px]">
        Teams building on Sig.Network
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {proofClients.map((name) => (
          <li
            key={name}
            className="text-dark-neutral-500 font-sans text-[14px] leading-5 font-semibold md:text-[16px] md:leading-6"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default ProofSection
