import { usePageMeta } from '../hooks/usePageMeta.js'
import { categories, getCategoryCount } from '../data/articles.js'
import CategoryTag from '../components/CategoryTag.jsx'
import { Link } from 'react-router-dom'

export default function Categories() {
  usePageMeta('Categorías', 'Todas las secciones de Calle Corta: tendencias, looks, under 50 €, streetwear, segunda mano y guías.')

  return (
    <section className="mx-auto max-w-[1560px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 border-b-2 border-ink pb-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="kicker text-signal-deep">Mapa de la revista</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-[0.94] sm:text-8xl">Todas las tallas</h1>
          <p className="mt-5 max-w-[54ch] font-serif text-xl leading-snug text-ink-soft">
            Seis maneras de entrar a la revista. No hay orden correcto: empieza por la que te pique
            la curiosidad y sigue por donde te lleve el presupuesto.
          </p>
        </div>
        <div className="self-end lg:col-span-4">
          <div className="border-2 border-ink bg-signal p-4 shadow-hard">
            <p className="kicker text-[9px]">Nota de la casa</p>
            <p className="mt-2 font-serif text-base italic leading-snug">
              Las etiquetas de talla son una excusa visual. Ninguna categoría te va a decir cómo
              tienes que vestir.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <CategoryTag
            key={category.slug}
            category={category}
            count={getCategoryCount(category.slug)}
            className={index % 3 === 1 ? 'sm:mt-10' : index % 3 === 2 ? 'sm:mt-4' : ''}
          />
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t-2 border-ink pt-6 sm:flex-row sm:items-center">
        <p className="font-serif text-lg italic text-ink-soft">
          ¿No sabes por dónde empezar? El look de la semana siempre es una buena excusa.
        </p>
        <Link to="/#look-semana" className="btn-hard btn-hard--ink">
          Ir al look de la semana
        </Link>
      </div>
    </section>
  )
}
