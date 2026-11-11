import { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from './Icons.jsx'

export default function SearchBar({
  value,
  initialValue = '',
  large = false,
  autoFocus = false,
  onSearch,
  onQueryChange,
  className = '',
}) {
  const [internalQuery, setInternalQuery] = useState(initialValue)
  const query = value !== undefined ? value : internalQuery
  const navigate = useNavigate()
  const inputId = useId()

  function changeQuery(next) {
    setInternalQuery(next)
    onQueryChange?.(next)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const clean = query.trim()
    if (onSearch) {
      onSearch(clean)
      return
    }
    navigate(clean ? `/buscar?q=${encodeURIComponent(clean)}` : '/buscar')
  }

  return (
    <form role="search" onSubmit={handleSubmit} className={`w-full ${className}`}>
      <label htmlFor={inputId} className="sr-only">
        Buscar looks, artículos o prendas
      </label>
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => changeQuery(event.target.value)}
          autoFocus={autoFocus}
          placeholder={large ? 'Busca un look, una prenda, una duda...' : 'Buscar en la revista'}
          className={`field pl-9 pr-[5.6rem] ${large ? 'py-3.5 text-base sm:text-sm' : 'py-2 text-base sm:text-[11px]'}`}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 flex h-full items-center border-l-2 border-ink bg-ink px-3 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:bg-signal hover:text-ink"
        >
          Buscar
        </button>
      </div>
    </form>
  )
}
