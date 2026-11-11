import { Link, useParams, useSearchParams } from 'react-router-dom'
import { getArticlesByCategory, getCategory, categories } from '../data/articles.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import ArticleCard from '../components/ArticleCard.jsx'
import BudgetFilter from '../components/BudgetFilter.jsx'
import { HangerIcon } from '../components/Icons.jsx'
import NotFound from './NotFound.jsx'

export default function Category() {
  const { slug } = useParams()
  const [params] = useSearchParams()
  const category = getCategory(slug)
  const max = Number(params.get('max')) || 0

  usePageMeta(
    category ? `${category.name}` : 'Sección no encontrada',
    category ? `${category.name} en Calle Corta. ${category.description}` : undefined,
  )

  if (!category) {
    return <NotFound title="Esa sección no existe" />
  }

  const articles = getArticlesByCategory(category.slug)
  const filtered = max ? articles.filter((article) => article.budget <= max) : articles
  const otherCategories = categories.filter((item) => item.slug !== category.slug)

  return (
    <>
      <section className="mx-auto max-w-[1560px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="kicker text-signal-deep">Sección / Taller de etiquetas</p>
            <h1 className="mt-4 text-balance font-display text-6xl uppercase leading-[0.94] sm:text-8xl">
              {category.name}
            </h1>
            <p className="mt-5 max-w-[52ch] font-serif text-xl leading-snug text-ink-soft">
              {category.description}
            </p>
            <p className="kicker mt-5 text-[9px] text-ink-soft">
              {articles.length} artículos / actualizado en otoño de 2026
            </p>
          </div>

          <div className="relative pt-10 lg:col-span-4">
            <HangerIcon className="absolute left-1/2 top-0 h-10 w-16 -translate-x-1/2 text-ink/80" />
            <div className="rotate-[1.5deg] border-2 border-ink bg-signal p-5 shadow-hard">
              <div className="kicker flex items-start justify-between border-b-2 border-ink pb-2 text-[9px]">
                <span>Talla {category.letter}</span>
                <span>{category.note}</span>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <span className="font-display text-8xl leading-[0.7]">{category.letter}</span>
                <span className="kicker text-right text-[9px] leading-relaxed">
                  Hecho para
                  <br />
                  mezclar
                </span>
              </div>
              <p className="mt-4 border-t-2 border-dashed border-ink/40 pt-3 font-serif text-sm italic leading-snug text-ink/80">
                Se lleva con lo que ya tienes. No con lo que te falta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-paper-light">
        <div className="mx-auto max-w-[1560px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 border-b-2 border-ink pb-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="kicker">
              {filtered.length} {filtered.length === 1 ? 'artículo' : 'artículos'}
              {max ? ` / hasta ${max} €` : ' / todos los presupuestos'}
            </p>
            <BudgetFilter />
          </div>

          {filtered.length ? (
            <div className="mt-10 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article, index) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  tilt={index % 3 === 0 ? '-1deg' : index % 3 === 1 ? '1.5deg' : '-0.6deg'}
                  className={index % 3 === 1 ? 'lg:mt-10' : ''}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 border-2 border-dashed border-ink/50 p-8 sm:p-14">
              <p className="font-display text-4xl uppercase leading-none">Cero resultados.</p>
              <p className="mt-3 max-w-lg font-serif text-ink-soft">
                No tenemos ningún look de {category.name.toLowerCase()} por debajo de {max} €. Sube
                el presupuesto o vuelve a la sección completa: hay más de lo que parece.
              </p>
              <Link to={`/categoria/${category.slug}`} className="btn-hard btn-hard--ink mt-5">
                Quitar filtro
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink pb-3">
          <h2 className="font-display text-3xl uppercase leading-none">Otras tallas</h2>
          <Link to="/categorias" className="kicker text-[9px] hover:text-signal-deep">
            Ver todas las categorías →
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {otherCategories.map((item) => (
            <Link
              key={item.slug}
              to={`/categoria/${item.slug}`}
              className="inline-flex items-center gap-2 border-2 border-ink bg-paper-light px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] shadow-hard-sm transition-all hover:-translate-y-0.5 hover:bg-signal"
            >
              <span className="flex h-6 w-6 items-center justify-center border border-ink bg-signal font-display text-base leading-none">
                {item.letter}
              </span>
              {item.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
