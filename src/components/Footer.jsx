import { Link } from 'react-router-dom'
import { categories } from '../data/articles.js'
import { ArrowIcon } from './Icons.jsx'
import Logo from './Logo.jsx'
import NewsletterForm from './NewsletterForm.jsx'

const magazineLinks = [
  { to: '/sobre-nosotros', label: 'Sobre nosotras' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/categorias', label: 'Todas las categorías' },
  { to: '/perchero', label: 'Mi perchero' },
  { to: '/buscar', label: 'Buscador' },
]

const legalLinks = [
  { to: '/legal/aviso-legal', label: 'Aviso legal' },
  { to: '/legal/privacidad', label: 'Privacidad' },
  { to: '/legal/cookies', label: 'Cookies' },
]

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto max-w-[1560px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo footer inverted />
            <p className="mt-5 max-w-sm font-serif text-lg italic leading-snug text-paper/75">
              Looks que se ven caros y cuestan poco. Moda de calle, sin marcas y sin humo.
            </p>

            <div className="mt-8 max-w-md">
              <p className="kicker text-[9px] text-signal">Boletín de percha</p>
              <h2 className="mt-3 font-display text-3xl uppercase leading-none">Mándame los looks</h2>
              <NewsletterForm dark className="mt-4" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
            <div>
              <h2 className="kicker border-b-2 border-paper/30 pb-2 text-[9px] text-paper/60">Secciones</h2>
              <ul className="mt-3 space-y-2">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      to={`/categoria/${category.slug}`}
                      className="group inline-flex items-center gap-1.5 font-serif text-sm text-paper/85 transition-colors hover:text-signal"
                    >
                      {category.name}
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        <ArrowIcon className="h-3 w-3" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="kicker border-b-2 border-paper/30 pb-2 text-[9px] text-paper/60">Revista</h2>
              <ul className="mt-3 space-y-2">
                {magazineLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="font-serif text-sm text-paper/85 transition-colors hover:text-signal">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="kicker border-b-2 border-paper/30 pb-2 text-[9px] text-paper/60">Legal</h2>
              <ul className="mt-3 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="font-serif text-sm text-paper/85 transition-colors hover:text-signal">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border-2 border-paper/40 p-4">
              <p className="kicker inline-block bg-signal px-2 py-1 text-[9px] text-ink">Proyecto ficticio</p>
              <p className="mt-3 font-serif text-sm leading-relaxed text-paper/75">
                Calle Corta es un proyecto de diseño editorial. No vendemos ropa, no somos una tienda
                y no estamos afiliados a ninguna marca. Las imágenes proceden de Unsplash y Pexels
                bajo licencia libre; cualquier logo visible es casualidad.
              </p>
              <p className="mt-3 font-serif text-sm leading-relaxed text-paper/75">
                Precios orientativos, looks inventados y ninguna intención de venderte humo.
              </p>
            </div>
            <p className="kicker mt-4 text-[9px] leading-relaxed text-paper/45">
              Contacto: hola@callecorta.example
            </p>
          </div>
        </div>

        <div className="kicker mt-12 flex flex-col gap-2 border-t-2 border-paper/25 pt-5 text-[9px] text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Calle Corta. Proyecto ficticio.</p>
          <p>Hecho con papel, tinta y poco presupuesto.</p>
        </div>
      </div>
    </footer>
  )
}
