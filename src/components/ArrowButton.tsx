import type { PropsWithChildren } from 'react'
import { ArrowUpRight } from 'lucide-react'

import { cn } from '../lib/utils'

type ArrowButtonProps = PropsWithChildren<{
  variant: 'brandLight' | 'brandDark' | 'pastel'
  href: string
  external?: boolean
  className?: string
}>

const variantClasses: Record<ArrowButtonProps['variant'], string> = {
  brandLight: 'bg-brand-50 text-dark-neutral-400',
  brandDark: 'bg-brand-950 text-dark-neutral-400',
  pastel: 'bg-pastels-polar-200 text-dark-neutral-400',
}

const ArrowButton = ({
  children,
  className = '',
  variant,
  href,
  external,
}: ArrowButtonProps) => (
  <a
    href={href}
    className={cn(
      'border-dark-neutral-400 flex items-center gap-1.5 rounded-[2px] border px-3 py-2 font-sans text-[10px] leading-[15px] font-semibold md:px-[18px] md:py-[12px] md:text-[16px] md:leading-[24px]',
      variantClasses[variant],
      className
    )}
    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
  >
    {children}
    <ArrowUpRight aria-hidden className="h-5 w-5" />
  </a>
)

export default ArrowButton
