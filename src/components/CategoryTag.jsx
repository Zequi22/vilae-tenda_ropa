import { Link } from 'react-router-dom'
import { ArrowIcon, HangerIcon } from './Icons.jsx'

export default function CategoryTag({ category, count = 0, className = '' }) {
  return (
    <Link
      to={`/categoria/${category.slug}`}
      className={`group relative block pt-9 ${className}`}
      aria-label={`${category.name}: ${count} artículos`}
    >
      <HangerIcon className="absolute left-1/2 top-0 h-10 w-16 -translate-x-1/2 text-ink/80" />
      <div
        className="hang relative border-2 border-ink bg-paper-light p-4 shadow-hard transition-shadow duration-200 group-hover:shadow-hard-lg sm:p-5"
        style={{ rotate: category.tilt }}
      >
        <div className="kicker flex items-start justify-between gap-2 border-b-2 border-ink pb-2 text-[9px]">
          <span>Talla {category.letter}</span>
          <span className="text-right text-ink-soft">{category.note}</span>
        </div>
        <div className="mt-5 flex items-end justify-between gap-3">
          <span className="font-display text-[4.6rem] leading-[0.68] text-signal">{category.letter}</span>
          <span className="font-display max-w-[8ch] text-right text-xl uppercase leading-[0.94] sm:text-2xl">
            {category.name}
          </span>
        </div>
        <p className="mt-4 font-serif text-sm leading-relaxed text-ink-soft">{category.description}</p>
        <div className="kicker mt-5 flex items-center justify-between border-t-2 border-dashed border-ink/40 pt-3 text-[9px]">
          <span>{count} artículos</span>
          <span className="transition-transform group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  )
}
