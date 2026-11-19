import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { categories, getCategoryCount } from '../data/articles.js'
import { useFavorites } from '../hooks/useFavorites.js'
import { ArrowIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon } from './Icons.jsx'
import Logo from './Logo.jsx'
import SearchBar from './SearchBar.jsx'

export default function Header() {
  const { count } = useFavorites()
  const location = useLocation()
  const [menuState, setMenuState] = useState({ open: false, path: location.pathname })
  const open = menuState.open && menuState.path === location.pathname

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setMenuState((current) => ({ ...current, open: false }))
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
          <Logo showTag={false} />

          <div className="flex items-center gap-2 sm:gap-3">
            <SearchBar className="hidden w-56 xl:block" />
            <Link
              to="/buscar"
              aria-label="Ir al buscador"
              className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-paper-light shadow-hard-sm transition-colors hover:bg-signal xl:hidden"
            >
              <SearchIcon />
            </Link>
            <Link
              to="/perchero"
              aria-label={`Perchero con ${count} looks guardados`}
              className="group inline-flex h-10 items-center gap-2 border-2 border-ink bg-paper-light px-2.5 shadow-hard-sm transition-colors hover:bg-signal"
            >
              <HeartIcon filled={count > 0} />
              <span className="kicker hidden text-[10px] sm:inline">Perchero</span>
              <span className="flex h-5 min-w-5 items-center justify-center border border-ink bg-ink px-1 font-mono text-[9px] font-bold text-paper">
                {count}
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuState({ open: !open, path: location.pathname })}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-paper-light shadow-hard-sm transition-colors hover:bg-signal lg:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <nav aria-label="Secciones" className="hidden border-t-2 border-ink/15 py-2 lg:flex">
          <span className="kicker flex w-24 shrink-0 items-center text-[9px] text-ink-soft">
            Secciones
          </span>
          <div className="flex flex-1 items-stretch gap-1.5">
            {categories.map((category) => (
              <NavLink
                key={category.slug}
                to={`/categoria/${category.slug}`}
                className={({ isActive }) =>
                  `flex flex-1 items-center justify-center border-2 px-3 py-3 text-center font-mono text-xs font-bold uppercase leading-none tracking-[0.08em] transition-all ${
                    isActive
                      ? 'border-ink bg-signal text-ink shadow-hard-sm'
                      : 'border-transparent text-ink-soft hover:border-ink hover:bg-paper-light hover:text-ink'
                  }`
                }
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      {open ? (
        <div id="menu-movil" className="border-t-2 border-ink bg-paper-light lg:hidden">
          <div className="mx-auto max-w-[1560px] px-4 py-5 sm:px-6">
            <SearchBar />
            <nav aria-label="Secciones" className="mt-5 border-t-2 border-ink pt-2">
              <span className="kicker mt-2 block text-[9px] text-ink-soft">Secciones</span>
              <div className="mt-1 grid gap-x-6 min-[420px]:grid-cols-2">
                {categories.map((category) => (
                  <NavLink
                    key={category.slug}
                    to={`/categoria/${category.slug}`}
                    className={({ isActive }) =>
                      `flex items-center justify-between gap-3 border-b-2 border-ink/15 py-3 font-display text-2xl uppercase leading-none transition-colors ${
                        isActive ? 'text-signal-deep' : 'text-ink hover:text-signal-deep'
                      }`
                    }
                  >
                    <span>{category.name}</span>
                    <span className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.08em] text-ink-soft">
                      {String(getCategoryCount(category.slug)).padStart(2, '0')}
                      <ArrowIcon className="h-3 w-3" />
                    </span>
                  </NavLink>
                ))}
              </div>
            </nav>
            <div className="kicker mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t-2 border-dashed border-ink/40 pt-4 text-[10px] text-ink-soft">
              <Link to="/sobre-nosotros" className="hover:text-signal-deep">
                Sobre nosotras
              </Link>
              <Link to="/contacto" className="hover:text-signal-deep">
                Contacto
              </Link>
              <Link to="/categorias" className="hover:text-signal-deep">
                Todas las categorías
              </Link>
              <Link to="/perchero" className="hover:text-signal-deep">
                Mi perchero ({count})
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
