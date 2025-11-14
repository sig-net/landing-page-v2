type TechnicalPanelProps = {
  src: string
  srcMobile: string
  alt: string
}

const TechnicalPanel = ({ alt, src, srcMobile }: TechnicalPanelProps) => (
  <div className="border-dark-neutral-950/50 bg-dark-neutral-950 relative w-full overflow-hidden border">
    <picture>
      <source media="(max-width: 767px)" srcSet={srcMobile} />
      <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" />
    </picture>
  </div>
)

export default TechnicalPanel
