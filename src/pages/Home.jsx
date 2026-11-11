import { Link, useSearchParams } from 'react-router-dom'
import {
  categories,
  featuredArticle,
  getCategoryCount,
  getLatest,
  weekLook,
} from '../data/articles.js'
import { formatPrice } from '../lib/format.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import ArticleCard from '../components/ArticleCard.jsx'
import BudgetFilter from '../components/BudgetFilter.jsx'
import CategoryTag from '../components/CategoryTag.jsx'
import DuotoneImage from '../components/DuotoneImage.jsx'
import FavoriteButton from '../components/FavoriteButton.jsx'
import NewsletterForm from '../components/NewsletterForm.jsx'
import PriceTag from '../components/PriceTag.jsx'
import { ArrowIcon, StarIcon } from '../components/Icons.jsx'

const spans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-6']
const tilts = ['-1deg', '1.4deg', '-1.8deg', '0.8deg', '-1.2deg', '1.6deg']

export default function Home() {
  usePageMeta(null, 'Calle Corta es una revista ficticia de moda joven, asequible y de calle. Looks que se ven caros y cuestan poco.')

  const [params] = useSearchParams()
  const max = Number(params.get('max')) || 0
  const latest = getLatest(7, featuredArticle.slug)
  const filtered = max ? latest.filter((article) => article.budget <= max) : latest
  const quickPicks = latest.slice(0, 3)

  return (
    <>
      <a
        href="#look-semana"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 border-2 border-r-0 border-ink bg-signal px-2 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.14em] shadow-[-4px_4px_0_0_#17140f] transition-transform hover:-translate-y-[52%] lg:block [writing-mode:vertical-rl]"
      >
        Look de la semana ↓
      </a>

      <section className="mx-auto max-w-[1560px] px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-2 border-b-2 border-ink pb-2">
          <p className="kicker">Nº 01 / Otoño 2026</p>
          <p className="kicker text-ink-soft">Moda de calle / 16–28 / sin marcas / sin humo</p>
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <span className="stamp absolute -left-2 top-10 z-30 hidden sm:inline-flex">Look principal</span>
            <Link to={`/articulo/${featuredArticle.slug}`} aria-label={featuredArticle.title} className="group block">
              <div className="relative border-2 border-ink bg-paper-light p-2 shadow-hard-lg">
                <DuotoneImage
                  src={featuredArticle.image}
                  srcSet={`${featuredArticle.imageSmall} 480w, ${featuredArticle.image} 900w`}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  alt={featuredArticle.imageAlt}
                  className="h-[420px] w-full sm:h-[540px] lg:h-[620px]"
                  priority
                />
                <span aria-hidden="true" className="tape -right-4 top-10 rotate-6" />
                <span aria-hidden="true" className="tape -left-5 bottom-24 -rotate-6" />
              </div>
            </Link>

            <div className="relative z-20 -mt-20 ml-auto w-[94%] rotate-[-0.8deg] border-2 border-ink bg-paper p-5 shadow-hard sm:-mt-28 sm:p-7 lg:w-[88%]">
              <div className="kicker flex items-center justify-between gap-3 border-b-2 border-ink pb-2 text-[9px]">
                <span className="bg-signal px-1.5 py-0.5 text-ink">Looks</span>
                <span className="text-ink-soft">Tiempo de lectura: 7 min</span>
              </div>
              <Link to={`/articulo/${featuredArticle.slug}`} className="group/title block">
                <h1 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.94] tracking-[-0.005em] transition-colors group-hover/title:text-signal-deep sm:text-5xl lg:text-6xl">
                  {featuredArticle.title}
                </h1>
              </Link>
              <p className="mt-3 max-w-[52ch] font-serif text-base leading-snug text-ink-soft sm:text-lg">
                {featuredArticle.subtitle}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-ink/40 pt-4">
                <p className="kicker text-[9px] text-ink-soft">Por {featuredArticle.author}</p>
                <div className="flex items-center gap-3">
                  <Link
                    to={`/articulo/${featuredArticle.slug}`}
                    className="group/link inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:text-signal-deep"
                  >
                    Ver el look
                    <span className="transition-transform group-hover/link:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </Link>
                  <FavoriteButton
                    slug={featuredArticle.slug}
                    title={featuredArticle.title}
                    variant="icon"
                  />
                </div>
              </div>
            </div>

            <PriceTag
              total={featuredArticle.budget}
              size="lg"
              className="absolute right-4 top-4 z-30 sm:right-8 sm:top-8"
              rotate="-5deg"
            />
          </div>

          <aside className="lg:col-span-5">
            <div className="flex items-center justify-between border-b-2 border-ink pb-2">
              <h2 className="font-display text-3xl uppercase leading-none">En este número</h2>
              <span className="kicker text-[9px] text-ink-soft">03 lecturas rápidas</span>
            </div>

            <div className="mt-6 space-y-7">
              {quickPicks.map((article, index) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  variant="row"
                  tilt={index === 1 ? '1.5deg' : index === 2 ? '-1.5deg' : '0deg'}
                />
              ))}
            </div>

            <div className="relative mt-9 rotate-[0.8deg] border-2 border-ink bg-signal p-5 shadow-hard">
              <span aria-hidden="true" className="tape -top-2.5 left-8 -rotate-3" />
              <StarIcon className="h-5 w-5" />
              <p className="mt-3 font-display text-2xl uppercase leading-[0.94]">
                La promesa de la casa
              </p>
              <p className="mt-2 font-serif text-sm leading-snug text-ink/85">
                Si un look no se puede pagar con lo que llevas en la cartera un viernes, no entra.
                Así de simple.
              </p>
              <Link
                to="/sobre-nosotros"
                className="kicker mt-4 inline-flex items-center gap-1.5 border-b-2 border-ink pb-0.5 text-[9px] font-bold hover:opacity-70"
              >
                Cómo trabajamos <ArrowIcon className="h-3 w-3" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-paper-light">
        <div className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 border-b-2 border-ink pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker text-signal-deep">Recién colgado</p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.94] sm:text-6xl">
                Lo último
              </h2>
            </div>
            <BudgetFilter />
          </div>

          {filtered.length ? (
            <div className="mt-10 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
              {filtered.map((article, index) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  tilt={tilts[index % tilts.length]}
                  className={`${spans[index % spans.length]} ${index % 3 === 1 ? 'lg:mt-10' : ''}`}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 border-2 border-dashed border-ink/50 p-8 text-center sm:p-12">
              <p className="font-display text-4xl uppercase leading-none">Nada por ese precio.</p>
              <p className="mx-auto mt-3 max-w-md font-serif text-ink-soft">
                Prueba con un presupuesto más alto o quita el filtro. Los chollos existen, pero no
                siempre están donde los buscas.
              </p>
              <Link to="/" className="btn-hard btn-hard--ink mt-5">
                Quitar filtro
              </Link>
            </div>
          )}
        </div>
      </section>

      <section id="look-semana" className="scroll-mt-32 border-b-[3px] border-ink bg-ink text-paper lg:scroll-mt-36">
        <div className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b-2 border-paper/30 pb-2">
            <p className="kicker text-signal">Sección fija / Nº 01</p>
            <p className="kicker text-[9px] text-paper/50">Cambia cada semana</p>
          </div>

          <div className="mt-9 grid items-center gap-10 lg:grid-cols-12">
            <div className="relative lg:col-span-6">
              <div className="relative rotate-[-1.2deg] border-2 border-paper bg-paper-light p-2 shadow-[8px_8px_0_0_#ff4d1c]">
                <DuotoneImage
                  src={weekLook.image}
                  srcSet={`${weekLook.imageSmall} 480w, ${weekLook.image} 900w`}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  alt={weekLook.imageAlt}
                  tone="ink"
                  className="aspect-[4/5] w-full"
                />
                <span aria-hidden="true" className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
                <span aria-hidden="true" className="tape -bottom-3 right-8 rotate-3" />
              </div>
              <PriceTag
                total={weekLook.budget}
                size="lg"
                tone="signal"
                className="absolute -right-2 top-8 z-30 sm:right-4"
                rotate="6deg"
              />
            </div>

            <div className="lg:col-span-6 lg:pl-4">
              <p className="kicker text-[9px] text-signal">Look de la semana</p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.94] sm:text-7xl">
                Bomber +
                <br />
                vaqueros rotos
              </h2>
              <p className="mt-4 max-w-[48ch] font-serif text-lg leading-snug text-paper/70">
                {weekLook.excerpt}
              </p>

              <ul className="mt-6 max-w-md space-y-2.5">
                {weekLook.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-2 font-mono text-xs">
                    <span className="text-paper/85">{item.name}</span>
                    <span aria-hidden="true" className="flex-1 border-b border-dotted border-paper/35" />
                    <span className="font-bold text-paper">{formatPrice(item.price)}</span>
                  </li>
                ))}
                <li className="flex items-baseline justify-between border-t-2 border-paper/40 pt-2 font-mono text-xs font-bold uppercase tracking-[0.08em]">
                  <span>Total</span>
                  <span className="text-signal">{formatPrice(weekLook.budget)}</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to={`/articulo/${weekLook.slug}`} className="btn-hard btn-hard--signal">
                  Ver el look completo
                </Link>
                <FavoriteButton
                  slug={weekLook.slug}
                  title={weekLook.title}
                  className="!border-paper !bg-ink !text-paper hover:!bg-signal hover:!text-ink"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker text-signal-deep">Seis maneras de entrar</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-[0.94] sm:text-6xl">
              Encuentra
              <br />
              tu talla
            </h2>
            <p className="mt-4 max-w-[34ch] font-serif text-lg leading-snug text-ink-soft">
              Las categorías son etiquetas colgantes. Elige la que te quede mejor hoy, no la que
              diga la revista.
            </p>
            <div className="mt-6 border-2 border-ink bg-paper-light p-3 shadow-hard-sm">
              <p className="kicker text-[9px] text-ink-soft">Talla única / sin código de barras</p>
              <p className="mt-1 font-serif text-sm italic text-ink">
                “La ropa no tiene talla de personalidad.”
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {categories.map((category, index) => (
              <CategoryTag
                key={category.slug}
                category={category}
                count={getCategoryCount(category.slug)}
                className={index % 3 === 1 ? 'sm:mt-8' : index % 3 === 2 ? 'sm:mt-3' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-paper-deep">
        <div className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="kicker text-signal-deep">Boletín de percha</p>
              <h2 className="mt-3 text-balance font-display text-5xl uppercase leading-[0.94] sm:text-6xl lg:text-7xl">
                No te vendo nada.
                <br />
                <span className="scribble">Te cuento dónde mirar.</span>
              </h2>
              <p className="mt-5 max-w-[48ch] font-serif text-lg leading-snug text-ink-soft">
                Un correo al mes con los looks que hemos encontrado, los precios reales y las
                tiendas que no nos patrocinan. Porque no hay tiendas.
              </p>
            </div>
            <div className="relative rotate-[-1deg] border-2 border-ink bg-paper-light p-5 shadow-hard lg:col-span-5">
              <span aria-hidden="true" className="tape -top-3 left-10 -rotate-3" />
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
