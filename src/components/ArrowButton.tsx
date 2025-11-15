import type { PropsWithChildren } from 'react'
import { ArrowUpRight } from 'lucide-react'

type ArrowButtonProps = PropsWithChildren<{
  variant: 'brandLight' | 'brandDark' | 'pastel'
  className?: string
}>

const variantClasses: Record<ArrowButtonProps['variant'], string> = {
  brandLight: 'bg-brand-50 text-dark-neutral-400',
  brandDark: 'bg-brand-950 text-dark-neutral-400',
  pastel: 'bg-pastels-polar-200 text-dark-neutral-400',
}

const ArrowButton = ({ children, className = '', variant }: ArrowButtonProps) => (
  <button
    type="button"
    className={`border-dark-neutral-400 flex items-center gap-1.5 rounded-[2px] border px-5 py-[12px] text-base leading-6 font-semibold transition hover:opacity-90 ${variantClasses[variant]} ${className}`.trim()}
  >
    {children}
    <ArrowUpRight aria-hidden className="h-5 w-5" />
  </button>
)

export default ArrowButton
