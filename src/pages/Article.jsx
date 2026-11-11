import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getArticle, getCategory, getRelatedArticles } from '../data/articles.js'
import { formatDate, formatPrice } from '../lib/format.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import ArticleCard from '../components/ArticleCard.jsx'
import DuotoneImage from '../components/DuotoneImage.jsx'
import FavoriteButton from '../components/FavoriteButton.jsx'
import PriceTag from '../components/PriceTag.jsx'
import { ArrowIcon } from '../components/Icons.jsx'
import NotFound from './NotFound.jsx'

function BodyBlock({ block }) {
  if (block.type === 'h2') return <h2>{block.text}</h2>
  if (block.type === 'h3') return <h3>{block.text}</h3>
  if (block.type === 'quote') return <blockquote>{block.text}</blockquote>
  if (block.type === 'tip') {
    return (
      <div className="tip">
        <strong>{block.title}</strong>
        {block.text}
      </div>
    )
  }
  if (block.type === 'list') {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return <p className={block.dropcap ? 'dropcap' : undefined}>{block.text}</p>
}

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)
  const [copied, setCopied] = useState(false)

  usePageMeta(article?.title ?? 'Artículo no encontrado', article?.excerpt)

  if (!article) {
    return <NotFound title="Ese artículo no está en el perchero" />
  }

  const category = getCategory(article.category)
  const related = getRelatedArticles(article, 3)
  const initials = article.author
    .split(' ')
    .map((part) => part[0])
    .join('')

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <article>
        <section className="mx-auto max-w-[1560px] px-4 pt-6 sm:px-6 lg:px-8">
          <nav aria-label="Migas de pan" className="kicker flex flex-wrap items-center gap-2 text-[9px] text-ink-soft">
            <Link to="/" className="hover:text-signal-deep">
              Portada
            </Link>
            <span aria-hidden="true">/</span>
            <Link to={`/categoria/${category.slug}`} className="hover:text-signal-deep">
              {category.name}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="line-clamp-1 text-ink">{article.title}</span>
          </nav>

          <div className="mt-7 grid gap-8 border-b-2 border-ink pb-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Link
                to={`/categoria/${category.slug}`}
                className="kicker inline-flex items-center gap-2 border-2 border-ink bg-signal px-2 py-1 text-[9px] shadow-hard-sm transition-transform hover:-translate-y-0.5"
              >
                Talla {category.letter} / {category.name}
              </Link>
              <h1 className="mt-5 text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.005em] sm:text-6xl lg:text-7xl">
                {article.title}
              </h1>
              <p className="mt-4 max-w-[56ch] font-serif text-xl leading-snug text-ink-soft">
                {article.subtitle}
              </p>
            </div>

            <div className="flex flex-col items-start justify-end gap-4 lg:col-span-4 lg:items-end">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="kicker text-[9px] text-ink-soft">Presupuesto del look</p>
                  <p className="mt-1 font-mono text-xs text-ink-soft">Sin marcas incluidas</p>
                </div>
                <PriceTag total={article.budget} size="lg" rotate="4deg" />
              </div>
              <FavoriteButton slug={article.slug} title={article.title} />
            </div>
          </div>

          <div className="mt-8">
            <div className="relative rotate-[-0.4deg] border-2 border-ink bg-paper-light p-2 shadow-hard-lg">
              <DuotoneImage
                src={article.image}
                srcSet={`${article.imageSmall} 480w, ${article.image} 900w`}
                sizes="(min-width: 1560px) 1400px, 100vw"
                alt={article.imageAlt}
                className="h-[380px] w-full sm:h-[540px] lg:h-[680px]"
                priority
              />
              <span aria-hidden="true" className="tape -top-3 left-10 -rotate-3" />
              <span aria-hidden="true" className="tape -bottom-3 right-12 rotate-2" />
            </div>
            <div className="kicker mt-3 flex flex-wrap items-center justify-between gap-2 text-[9px] text-ink-soft">
              <span>Foto: Unsplash / Pexels · licencia libre</span>
              <span>Look inventado, precios orientativos</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1560px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-y-2 border-ink py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-ink font-display text-lg text-paper">
                    {initials}
                  </span>
                  <div>
                    <p className="kicker text-[9px] text-ink-soft">Escrito por</p>
                    <p className="font-serif text-base font-semibold leading-tight">{article.author}</p>
                  </div>
                </div>
                <p className="kicker text-[9px] text-ink-soft">{article.authorRole}</p>
                <p className="kicker text-[9px] text-ink-soft">{formatDate(article.date)}</p>
                <p className="kicker text-[9px] text-ink-soft">{article.readTime} min de lectura</p>
              </div>

              <div className="prose-zine mt-8">
                {article.body.map((block, index) => (
                  <BodyBlock block={block} key={`${block.type}-${index}`} />
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-2 border-t-2 border-ink pt-5">
                <span className="kicker mr-1 text-[9px] text-ink-soft">Etiquetas:</span>
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/buscar?q=${encodeURIComponent(tag)}`}
                    className="border-2 border-ink bg-paper-light px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.06em] transition-colors hover:bg-signal"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5 xl:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="relative rotate-[0.6deg] border-2 border-ink bg-paper-light p-5 shadow-hard">
                  <span aria-hidden="true" className="tape -top-3 left-8 -rotate-2" />
                  <div className="kicker flex items-center justify-between border-b-2 border-ink pb-2 text-[9px]">
                    <span>La etiqueta del look</span>
                    <span className="text-ink-soft">{article.items.length} piezas</span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {article.items.map((item) => (
                      <li key={item.name} className="flex items-baseline gap-2 font-mono text-xs">
                        <span className="text-ink-soft">{item.name}</span>
                        <span aria-hidden="true" className="flex-1 border-b border-dotted border-ink/35" />
                        <span className="font-bold">{formatPrice(item.price)}</span>
                      </li>
                    ))}
                    <li className="flex items-baseline justify-between border-t-2 border-ink pt-2.5 font-mono text-xs font-bold uppercase tracking-[0.08em]">
                      <span>Total</span>
                      <span className="bg-signal px-1.5 py-0.5">{formatPrice(article.budget)}</span>
                    </li>
                  </ul>
                  <p className="mt-4 font-serif text-xs italic leading-snug text-ink-soft">
                    Precios orientativos de segunda mano y tiendas de barrio. Si encuentras algo más
                    barato, mejor para ti.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <FavoriteButton slug={article.slug} title={article.title} className="w-full" />
                    <button
                      type="button"
                      onClick={copyLink}
                      className="btn-hard btn-hard--paper w-full"
                    >
                      {copied ? 'Enlace copiado' : 'Copiar enlace'}
                    </button>
                  </div>
                </div>

                <div className="mt-6 border-2 border-ink bg-ink p-4 text-paper">
                  <p className="kicker text-[9px] text-signal">Sigue el hilo</p>
                  <p className="mt-2 font-serif text-sm leading-snug text-paper/75">
                    Todo lo que lees aquí es ficción editorial. Las prendas, los precios y los looks
                    están inventados para que te sirvan de punto de partida.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="border-t-[3px] border-ink bg-paper-light">
        <div className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink pb-3">
            <h2 className="font-display text-4xl uppercase leading-none sm:text-5xl">Sigue el hilo</h2>
            <Link
              to={`/categoria/${category.slug}`}
              className="group inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] hover:text-signal-deep"
            >
              Más de {category.name}
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>

          <div className="mt-10 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedArticle, index) => (
              <ArticleCard
                key={relatedArticle.slug}
                article={relatedArticle}
                tilt={index % 3 === 0 ? '-1.2deg' : index % 3 === 1 ? '1.4deg' : '-0.5deg'}
                className={index === 1 ? 'lg:mt-8' : ''}
              />
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink pt-5">
            <Link
              to={`/categoria/${category.slug}`}
              className="group inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] hover:text-signal-deep"
            >
              <span className="rotate-180 transition-transform group-hover:-translate-x-1">
                <ArrowIcon />
              </span>
              Volver a {category.name}
            </Link>
            <Link to="/" className="kicker text-[9px] text-ink-soft hover:text-signal-deep">
              Ir a la portada
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
