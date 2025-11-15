import type { PropsWithChildren } from 'react'
import { ArrowUpRight } from 'lucide-react'

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

const ArrowButton = ({ children, className = '', variant, href, external }: ArrowButtonProps) => (
  <a
    href={href}
    className={`border-dark-neutral-400 flex items-center gap-1.5 rounded-[2px] border px-3 py-2 font-sans text-xs leading-4 font-semibold transition hover:opacity-90 md:px-5 md:py-3 md:text-base md:leading-6 ${variantClasses[variant]} ${className}`.trim()}
    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
  >
    {children}
    <ArrowUpRight aria-hidden className="h-5 w-5" />
  </a>
)

export default ArrowButton
