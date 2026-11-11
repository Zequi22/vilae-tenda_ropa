import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, getArticle } from '../data/articles.js'
import { formatPrice } from '../lib/format.js'
import { useFavorites } from '../hooks/useFavorites.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import ArticleCard from '../components/ArticleCard.jsx'
import { ArrowIcon, HangerIcon } from '../components/Icons.jsx'
import PriceTag from '../components/PriceTag.jsx'

export default function Favorites() {
  usePageMeta('Mi perchero', 'Los looks que has guardado en tu perchero de Calle Corta.')
  const { favorites, clearFavorites } = useFavorites()
  const [confirming, setConfirming] = useState(false)

  const savedArticles = favorites.map((slug) => getArticle(slug)).filter(Boolean)
  const total = savedArticles.reduce((sum, article) => sum + article.budget, 0)
  const average = savedArticles.length ? Math.round(total / savedArticles.length) : 0

  return (
    <>
      <section className="mx-auto max-w-[1560px] px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="kicker text-signal-deep">Tu selección personal</p>
            <h1 className="mt-4 font-display text-6xl uppercase leading-[0.94] sm:text-8xl">Mi perchero</h1>
            <p className="mt-5 max-w-[50ch] font-serif text-xl leading-snug text-ink-soft">
              Los looks que te has guardado viven aquí, en este navegador. Sin cuenta, sin correo y
              sin que nadie más los vea.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:col-span-4 lg:justify-end">
            <div className="border-2 border-ink bg-paper-light px-4 py-3 shadow-hard-sm">
              <p className="kicker text-[9px] text-ink-soft">Looks guardados</p>
              <p className="font-display text-4xl leading-none">{savedArticles.length}</p>
            </div>
            {savedArticles.length > 0 ? (
              <PriceTag total={average} label="MEDIA" size="md" rotate="4deg" />
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-paper-light">
        <div className="mx-auto max-w-[1560px] px-4 py-12 sm:px-6 lg:px-8">
          {savedArticles.length ? (
            <>
              <div className="flex flex-col gap-3 border-b-2 border-ink pb-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="kicker text-[9px] text-ink-soft">
                  Presupuesto medio: {formatPrice(average)} / sin contar envíos, porque no hay envíos
                </p>
                {confirming ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="kicker text-[9px]">¿Seguro?</span>
                    <button
                      type="button"
                      onClick={() => {
                        clearFavorites()
                        setConfirming(false)
                      }}
                      className="btn-hard btn-hard--signal px-2 py-1 text-[9px]"
                    >
                      Sí, vaciar
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirming(false)}
                      className="btn-hard btn-hard--paper px-2 py-1 text-[9px]"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirming(true)}
                    className="kicker self-start border-b-2 border-ink pb-0.5 text-[9px] hover:text-signal-deep sm:self-auto"
                  >
                    Vaciar perchero
                  </button>
                )}
              </div>

              <div className="mt-10 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {savedArticles.map((article, index) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    tilt={index % 3 === 0 ? '-1deg' : index % 3 === 1 ? '1.5deg' : '-0.5deg'}
                    className={index % 3 === 1 ? 'lg:mt-8' : ''}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-2xl py-8 text-center sm:py-16">
              <HangerIcon className="mx-auto h-16 w-24 text-ink/30" />
              <p className="mt-6 font-display text-5xl uppercase leading-[0.93] sm:text-6xl">
                Perchero vacío
              </p>
              <p className="mx-auto mt-4 max-w-md font-serif text-lg leading-snug text-ink-soft">
                Aquí no hay nada colgado. Cuando veas un look que te sirva, pulsa “Guardar en el
                perchero” y aparece aquí. Fácil, gratis y sin registro.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link to="/" className="btn-hard btn-hard--ink">
                  Ver la portada
                </Link>
                <Link to="/categorias" className="btn-hard btn-hard--paper">
                  Explorar categorías
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink pb-3">
          <h2 className="font-display text-3xl uppercase leading-none">Por si te falta inspiración</h2>
          <Link to="/categorias" className="kicker text-[9px] hover:text-signal-deep">
            Todas las secciones →
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/categoria/${category.slug}`}
              className="group inline-flex items-center gap-2 border-2 border-ink bg-paper-light px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] shadow-hard-sm transition-all hover:-translate-y-0.5 hover:bg-signal"
            >
              {category.name}
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowIcon className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
