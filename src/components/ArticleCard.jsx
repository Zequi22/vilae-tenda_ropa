import { Link } from 'react-router-dom'
import { formatDate } from '../lib/format.js'
import { getCategory } from '../data/articles.js'
import DuotoneImage from './DuotoneImage.jsx'
import FavoriteButton from './FavoriteButton.jsx'
import PriceTag from './PriceTag.jsx'

export default function ArticleCard({
  article,
  variant = 'default',
  tilt = '0deg',
  className = '',
  priority = false,
}) {
  const category = getCategory(article.category)
  const isRow = variant === 'row'
  const isCompact = variant === 'compact'
  const isFeature = variant === 'feature'

  const image = (
    <div className="relative">
      <Link to={`/articulo/${article.slug}`} aria-label={article.title} className="block">
        <div
          className="relative border-2 border-ink bg-paper-light p-1.5 shadow-hard-sm transition-shadow duration-200 group-hover:shadow-hard"
          style={{ rotate: tilt }}
        >
          <DuotoneImage
            src={article.imageSmall}
            srcSet={`${article.imageSmall} 480w, ${article.image} 900w`}
            sizes={
              isRow
                ? '160px'
                : isFeature
                  ? '(min-width: 1024px) 55vw, 100vw'
                  : '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw'
            }
            alt={article.imageAlt}
            className={isRow ? 'aspect-[4/5] w-full' : 'aspect-[3/4] w-full'}
            priority={priority}
          />
          <span
            aria-hidden="true"
            className="tape left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 -rotate-3"
          />
          <span className="kicker absolute left-2 top-2 z-20 border-2 border-ink bg-paper-light px-1.5 py-1 text-[9px] shadow-hard-sm">
            {category?.name}
          </span>
          <PriceTag
            total={article.budget}
            size="sm"
            hanging={false}
            rotate="3deg"
            className="absolute -bottom-4 right-2 z-20"
          />
        </div>
      </Link>
      <FavoriteButton
        slug={article.slug}
        title={article.title}
        variant="icon"
        className="absolute right-3.5 top-3.5 z-30"
      />
    </div>
  )

  const meta = (
    <p className="kicker mt-3 text-[9px] text-ink-soft">
      {formatDate(article.date)} / {article.readTime} MIN / {article.author}
    </p>
  )

  if (isRow) {
    return (
      <article className={`group relative grid grid-cols-[7rem_1fr] items-start gap-4 sm:grid-cols-[9rem_1fr] ${className}`}>
        {image}
        <div className="pt-1">
          <Link to={`/articulo/${article.slug}`}>
            <h3
              className={`font-display uppercase leading-[0.96] tracking-[0.01em] transition-colors group-hover:text-signal-deep ${
                isCompact ? 'text-xl' : 'text-2xl sm:text-3xl'
              }`}
            >
              {article.title}
            </h3>
          </Link>
          {!isCompact && (
            <p className="mt-2 hidden font-serif text-sm leading-relaxed text-ink-soft sm:block">
              {article.excerpt}
            </p>
          )}
          {meta}
        </div>
      </article>
    )
  }

  return (
    <article className={`group relative ${className}`}>
      {image}
      <div className="mt-6">
        <Link to={`/articulo/${article.slug}`}>
          <h3
            className={`font-display uppercase leading-[0.95] tracking-[0.005em] transition-colors group-hover:text-signal-deep ${
              isFeature ? 'text-4xl sm:text-5xl lg:text-6xl' : isCompact ? 'text-2xl sm:text-[1.7rem]' : 'text-2xl sm:text-3xl'
            }`}
          >
            {article.title}
          </h3>
        </Link>
        {isFeature && article.subtitle && (
          <p className="mt-3 max-w-[48ch] font-serif text-lg leading-snug text-ink-soft">
            {article.subtitle}
          </p>
        )}
        {!isFeature && !isCompact && (
          <p className="mt-2 max-w-[46ch] font-serif text-sm leading-relaxed text-ink-soft">
            {article.excerpt}
          </p>
        )}
        {meta}
      </div>
    </article>
  )
}
