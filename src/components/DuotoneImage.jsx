export default function DuotoneImage({
  src,
  srcSet,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  tone = 'signal',
}) {
  const toneClass = tone === 'ink' ? 'duotone--ink' : tone === 'lime' ? 'duotone--lime' : ''

  return (
    <div className={`duotone ${toneClass} ${className}`}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width="900"
        height="1200"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
