import type { PropsWithChildren } from 'react'

type SectionContentProps = PropsWithChildren<{
  title: string
  bodyClassName?: string
  className?: string
}>

const SectionContent = ({
  title,
  children,
  bodyClassName = '',
  className = '',
}: SectionContentProps) => (
  <div className={`py-[30px] md:py-15 ${className}`.trim()}>
    <h2 className="text-clam-shell-400 font-sans text-5xl leading-[50px] font-bold md:text-8xl md:leading-[98px]">
      {title}
    </h2>
    <div className={`px-5 md:px-15 ${bodyClassName}`.trim()}>{children}</div>
  </div>
)

export default SectionContent
