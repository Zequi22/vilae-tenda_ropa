import { useFavorites } from '../hooks/useFavorites.js'
import { HeartIcon } from './Icons.jsx'

export default function FavoriteButton({ slug, title, variant = 'tag', className = '' }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const saved = isFavorite(slug)

  const label = saved ? `Quitar ${title} del perchero` : `Guardar ${title} en el perchero`

  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={() => toggleFavorite(slug)}
        aria-pressed={saved}
        aria-label={label}
        title={saved ? 'En el perchero' : 'Guardar en el perchero'}
        className={`flex h-9 w-9 items-center justify-center border-2 border-ink bg-paper-light shadow-hard-sm transition-transform hover:-translate-y-0.5 hover:bg-signal active:translate-y-0.5 active:shadow-none ${className}`}
      >
        <HeartIcon filled={saved} />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(slug)}
      aria-pressed={saved}
      aria-label={label}
      className={`btn-hard ${saved ? 'btn-hard--signal' : 'btn-hard--paper'} ${className}`}
    >
      <HeartIcon filled={saved} />
      <span>{saved ? 'En el perchero' : 'Guardar en el perchero'}</span>
    </button>
  )
}
