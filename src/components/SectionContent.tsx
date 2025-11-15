import type { PropsWithChildren, ReactNode } from 'react'

type SectionContentProps = PropsWithChildren<{
  header: ReactNode
  bodyClassName?: string
  className?: string
}>

const SectionContent = ({
  header,
  children,
  bodyClassName = '',
  className = '',
}: SectionContentProps) => (
  <div className={`py-[30px] md:py-15 ${className}`.trim()}>
    {header}
    <div className={`px-5 md:px-15 ${bodyClassName}`.trim()}>{children}</div>
  </div>
)

export default SectionContent
