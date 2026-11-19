import { Link } from 'react-router-dom'
import { formatPrice } from '../lib/format.js'

export default function Logo({ footer = false, inverted = false, showTag = true }) {
  return (
    <Link
      to="/"
      aria-label="Calle Corta, ir a la portada"
      className="group inline-flex shrink-0 items-start gap-2"
    >
      <span
        className={
          footer
            ? `font-display text-[clamp(2.8rem,8vw,6rem)] uppercase leading-[0.76] tracking-[-0.02em] ${
                inverted ? 'text-paper' : 'text-ink'
              }`
            : 'font-display text-[1.7rem] uppercase leading-[0.78] tracking-[-0.015em] text-ink sm:text-[2rem]'
        }
      >
        Calle
        <br />
        Corta
      </span>
      {showTag ? (
        <span className="hang mt-1 inline-flex flex-col items-center">
          <span aria-hidden="true" className={`block h-3 w-px ${inverted ? 'bg-paper' : 'bg-ink'}`} />
          <span
            className={
              `tag-notch tag-notch--signal ${footer ? '' : 'tag-notch--sm'} border-2 bg-signal text-center font-mono text-ink ${
                inverted ? 'border-paper' : 'border-ink'
              } ` +
              (footer
                ? 'px-2 pb-1 pt-4'
                : 'px-1.5 pb-0.5 pt-3')
            }
          >
            <span className={footer ? 'block text-[8px] tracking-[0.14em]' : 'block text-[6px] tracking-[0.12em]'}>
              TOTAL
            </span>
            <span className={footer ? 'block text-sm font-bold leading-none' : 'block text-[10px] font-bold leading-none'}>
              {formatPrice(47)}
            </span>
          </span>
        </span>
      ) : null}
    </Link>
  )
}
