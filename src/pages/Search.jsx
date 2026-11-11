import { useSearchParams } from 'react-router-dom'
import { searchArticles } from '../data/articles.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import ArticleCard from '../components/ArticleCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { SearchIcon } from '../components/Icons.jsx'

const suggestions = ['otoño', 'vaqueros', 'segunda mano', 'básicos', 'sudadera']

export default function Search() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const results = searchArticles(query)

  usePageMeta(
    query ? `Buscar: ${query}` : 'Buscador',
    'Busca looks, prendas, categorías y artículos en la revista Calle Corta.',
  )

  function updateQuery(value) {
    const next = new URLSearchParams(params)
    if (value.trim()) {
      next.set('q', value)
    } else {
      next.delete('q')
    }
    setParams(next, { replace: true })
  }

  return (
    <>
      <section className="mx-auto max-w-[1560px] px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 border-b-2 border-ink pb-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker text-signal-deep">Buscar en la revista</p>
            <h1 className="mt-4 font-display text-6xl uppercase leading-[0.94] sm:text-8xl">
              ¿Qué buscas?
            </h1>
            <p className="mt-4 max-w-[48ch] font-serif text-lg leading-snug text-ink-soft">
              Un look, una prenda, una duda existencial. Menos “ropa barata”, que eso ya lo sabemos.
            </p>
          </div>
          <div className="lg:col-span-5">
            <SearchBar value={query} large autoFocus onQueryChange={updateQuery} />
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="kicker text-[9px] text-ink-soft">Prueba con:</span>
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => updateQuery(suggestion)}
                  className="border border-ink bg-paper-light px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] transition-colors hover:bg-signal"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-paper-light">
        <div className="mx-auto max-w-[1560px] px-4 py-12 sm:px-6 lg:px-8">
          {query ? (
            <>
              <p className="kicker border-b-2 border-ink pb-3 text-[9px] text-ink-soft">
                {results.length} {results.length === 1 ? 'resultado' : 'resultados'} para “{query}”
              </p>
              {results.length ? (
                <div className="mt-10 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((article, index) => (
                    <ArticleCard
                      key={article.slug}
                      article={article}
                      tilt={index % 3 === 0 ? '-1deg' : index % 3 === 1 ? '1.4deg' : '-0.5deg'}
                      className={index % 3 === 1 ? 'lg:mt-8' : ''}
                    />
                  ))}
                </div>
              ) : (
                <div className="mx-auto max-w-xl py-10 text-center">
                  <SearchIcon className="mx-auto h-12 w-12 text-ink/30" />
                  <p className="mt-5 font-display text-4xl uppercase leading-none">
                    Nada con eso.
                  </p>
                  <p className="mt-3 font-serif text-lg text-ink-soft">
                    Ni marcas, ni milagros. Prueba con otra palabra o quita la búsqueda y explora
                    por categorías.
                  </p>
                  <button type="button" onClick={() => updateQuery('')} className="btn-hard btn-hard--ink mt-6">
                    Limpiar búsqueda
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="mx-auto max-w-xl py-8 text-center sm:py-14">
              <p className="font-display text-4xl uppercase leading-none">Todo empieza con una palabra</p>
              <p className="mt-3 font-serif text-lg leading-snug text-ink-soft">
                Escribe arriba y los artículos aparecen solos. Sin filtros raros ni resultados
                patrocinados: aquí no hay quien nos pague.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
