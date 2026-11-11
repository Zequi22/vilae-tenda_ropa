import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { HangerIcon } from '../components/Icons.jsx'
import PriceTag from '../components/PriceTag.jsx'

export default function NotFound({ title = 'Esta página se ha ido de rebajas' }) {
  usePageMeta('Página no encontrada', 'La página que buscas no existe en Calle Corta.')

  return (
    <section className="mx-auto flex max-w-[1560px] flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
      <HangerIcon className="h-16 w-24 text-ink/25" />
      <p className="kicker mt-6 text-signal-deep">Error 404 / Fuera de stock</p>
      <h1 className="mt-3 max-w-3xl text-balance font-display text-6xl uppercase leading-[0.94] sm:text-8xl">
        {title}
      </h1>
      <p className="mx-auto mt-5 max-w-lg font-serif text-lg leading-snug text-ink-soft">
        Mira debajo de la percha, en el probador o en la sección de segunda mano. Si no aparece, es
        que nunca estuvo aquí.
      </p>
      <PriceTag total={404} label="ERROR" size="lg" rotate="5deg" className="mt-8" />

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-hard btn-hard--ink">
          Volver a la portada
        </Link>
        <Link to="/categorias" className="btn-hard btn-hard--paper">
          Ver categorías
        </Link>
        <Link to="/buscar" className="btn-hard btn-hard--paper">
          Buscar algo
        </Link>
      </div>
    </section>
  )
}
