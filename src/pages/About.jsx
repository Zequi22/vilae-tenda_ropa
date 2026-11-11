import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta.js'
import DuotoneImage from '../components/DuotoneImage.jsx'
import NewsletterForm from '../components/NewsletterForm.jsx'
import PriceTag from '../components/PriceTag.jsx'
import { ArrowIcon, StarIcon } from '../components/Icons.jsx'

const team = [
  {
    name: 'Nora Peña',
    role: 'Editora de looks',
    note: 'Cree que un cinturón arregla más discusiones que una conversación.',
    initials: 'NP',
  },
  {
    name: 'Vera Montes',
    role: 'Segunda mano',
    note: 'Ha encontrado un abrigo de lana por 12 € y no piensa dejar de contarlo.',
    initials: 'VM',
  },
  {
    name: 'Tino Cruz',
    role: 'Streetwear',
    note: 'Dice que la comodidad es una tendencia que nunca pasa de moda.',
    initials: 'TC',
  },
]

const rules = [
  'Nada de marcas reales. Hablamos de prendas, no de tiendas.',
  'Los precios son orientativos y están pensados para un presupuesto real.',
  'Si un look no se puede llevar un martes por la mañana, no lo publicamos.',
  'La segunda mano no es un plan B: es una categoría con luz propia.',
]

export default function About() {
  usePageMeta(
    'Sobre nosotras',
    'Calle Corta es una revista ficticia de moda de calle, asequible y sin marcas. Conoce el proyecto, el equipo y cómo trabajamos.',
  )

  return (
    <>
      <section className="mx-auto max-w-[1560px] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker text-signal-deep">Manifiesto de percha / Nº 01</p>
            <h1 className="mt-3 text-balance font-display text-6xl uppercase leading-[0.94] sm:text-8xl">
              Esto no es
              <br />
              una tienda.
            </h1>
            <p className="mt-6 max-w-[54ch] font-serif text-xl leading-snug text-ink-soft">
              Es una revista de moda que nació de una pregunta muy poco glamurosa: “¿cómo me visto
              bien con lo que tengo?”. La respuesta no era comprar más. Era mirar mejor.
            </p>
            <p className="mt-4 max-w-[54ch] font-serif text-lg leading-relaxed text-ink-soft">
              Calle Corta es un proyecto ficticio de diseño editorial. No vendemos ropa, no tenemos
              tienda y no trabajamos con marcas. Solo montamos looks, hacemos cuentas y contamos lo
              que aprendemos por el camino.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/categorias" className="btn-hard btn-hard--ink">
                Ver las secciones
              </Link>
              <Link to="/contacto" className="btn-hard btn-hard--paper">
                Escríbeme
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto h-[430px] max-w-md sm:h-[520px]">
              <div className="absolute left-0 top-4 w-[58%] rotate-[-4deg] border-2 border-ink bg-paper-light p-1.5 shadow-hard">
                <DuotoneImage
                  src="/images/about-1-900.jpg"
                  srcSet="/images/about-1-480.jpg 480w, /images/about-1-900.jpg 900w"
                  sizes="(min-width: 1024px) 22vw, 55vw"
                  alt="Perchero con ropa de segunda mano."
                  className="aspect-[3/4] w-full"
                />
                <span aria-hidden="true" className="tape -top-2.5 left-1/2 -translate-x-1/2 -rotate-3" />
              </div>
              <div className="absolute bottom-0 right-0 z-20 w-[54%] rotate-[3deg] border-2 border-ink bg-paper-light p-1.5 shadow-hard">
                <DuotoneImage
                  src="/images/about-2-900.jpg"
                  srcSet="/images/about-2-480.jpg 480w, /images/about-2-900.jpg 900w"
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  alt="Camisetas básicas dobladas."
                  className="aspect-[3/4] w-full"
                  tone="lime"
                />
                <span aria-hidden="true" className="tape -bottom-2.5 right-6 rotate-2" />
              </div>
              <div className="absolute right-4 top-0 z-30 border-2 border-ink bg-signal px-3 py-2 shadow-hard-sm">
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.1em]">Ficticio</p>
                <p className="font-serif text-xs italic">pero con criterio</p>
              </div>
              <PriceTag total={47} size="lg" rotate="-6deg" className="absolute -right-2 bottom-24 z-30 sm:right-0" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-paper-light">
        <div className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="kicker text-signal-deep">Lo que hacemos</p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.94]">Menos ropa.<br />Más ideas.</h2>
              <p className="mt-5 font-serif text-lg leading-snug text-ink-soft">
                Cada look se monta con prendas que puedes encontrar en un mercadillo, en el fondo del
                armario de un familiar o en una tienda de barrio. Sin patrocinios y sin enlaces de
                afiliados, porque no hay nada que vender.
              </p>
              <p className="mt-4 font-serif text-lg leading-snug text-ink-soft">
                La promesa es sencilla: que puedas copiar el look con lo que tengas, o con menos de
                lo que crees.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="border-2 border-ink bg-paper p-5 shadow-hard-sm">
                <p className="kicker text-[9px] text-signal-deep">Sí</p>
                <ul className="mt-3 space-y-3">
                  {rules.map((rule) => (
                    <li key={rule} className="flex gap-2 font-serif text-sm leading-snug text-ink-soft">
                      <StarIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-signal" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-2 border-ink bg-ink p-5 text-paper">
                <p className="kicker text-[9px] text-signal">No</p>
                <ul className="mt-3 space-y-3 font-serif text-sm leading-snug text-paper/75">
                  <li>No te decimos que necesitas comprar algo nuevo.</li>
                  <li>No usamos tallas para decirte cómo tiene que ser tu cuerpo.</li>
                  <li>No hay “imprescindibles” que caducan a las dos semanas.</li>
                  <li>No hay anuncios, ni pop-ups, ni descuentos falsos.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink pb-3">
          <h2 className="font-display text-5xl uppercase leading-none">Cómo montamos un look</h2>
          <p className="kicker text-[9px] text-ink-soft">Sin fórmulas secretas</p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['01', 'Elegimos una base', 'Un vaquero, una falda, un pantalón cargo. Algo que ya exista en la mayoría de armarios.'],
            ['02', 'Buscamos el contraste', 'Una prenda que suba el nivel y otra que lo baje. La tensión es lo que hace el look.'],
            ['03', 'Hacemos las cuentas', 'Sumamos precios reales de segunda mano y de tienda de barrio. Si no cuadra, cambiamos la pieza.'],
            ['04', 'Lo probamos', 'Nos lo ponemos, nos sentamos, caminamos y comemos. Si no aguanta la vida real, no sale.'],
          ].map(([number, title, text]) => (
            <div key={number} className="border-t-2 border-ink pt-4">
              <p className="font-mono text-xs font-bold text-signal-deep">{number}</p>
              <h3 className="mt-3 font-display text-2xl uppercase leading-none">{title}</h3>
              <p className="mt-2 font-serif text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-paper-deep">
        <div className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="kicker text-signal-deep">El equipo</p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.94]">Gente que<br />se prueba la ropa.</h2>
              <p className="mt-5 font-serif text-base leading-relaxed text-ink-soft">
                Nombres inventados, opiniones reales sobre lo que funciona y lo que no. Aquí nadie
                va a una pasarela.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
              {team.map((person) => (
                <div key={person.name} className="border-2 border-ink bg-paper-light p-5 shadow-hard-sm">
                  <span className="flex h-12 w-12 items-center justify-center border-2 border-ink bg-signal font-display text-xl">
                    {person.initials}
                  </span>
                  <h3 className="mt-4 font-display text-2xl uppercase leading-none">{person.name}</h3>
                  <p className="kicker mt-2 text-[9px] text-ink-soft">{person.role}</p>
                  <p className="mt-3 font-serif text-sm italic leading-snug text-ink-soft">{person.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative rotate-[-0.5deg] border-2 border-ink bg-signal p-6 shadow-hard sm:p-8">
          <span aria-hidden="true" className="tape -top-3 left-12 -rotate-3" />
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="kicker text-[9px]">Aclaración importante</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-[0.94] sm:text-5xl">
                Calle Corta es un proyecto ficticio
              </h2>
              <p className="mt-3 max-w-[62ch] font-serif text-base leading-relaxed text-ink/85">
                No es una tienda, no vende ropa y no representa a ninguna marca real. Los artículos,
                los precios y los nombres del equipo son inventados. Las imágenes se usan con
                licencia libre de Unsplash y Pexels; si aparece algún logo, no implica relación
                comercial.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link to="/contacto" className="btn-hard btn-hard--ink">
                Hablar con la redacción
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t-2 border-ink pt-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker text-signal-deep">Una última cosa</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.94] sm:text-5xl">
              Si te ha servido, ya ha valido la pena.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}
