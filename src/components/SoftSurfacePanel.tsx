import type { PropsWithChildren } from 'react'

type SoftSurfacePanelProps = PropsWithChildren<{
  className?: string
}>

const SoftSurfacePanel = ({ children, className = '' }: SoftSurfacePanelProps) => (
  <div className={`soft-surface soft-surface-panel ${className}`.trim()}>{children}</div>
)

export default SoftSurfacePanel
