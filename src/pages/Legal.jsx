import { Link, useParams } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta.js'
import NotFound from './NotFound.jsx'

const legalPages = {
  'aviso-legal': {
    title: 'Aviso legal',
    intro:
      'Calle Corta es un proyecto editorial ficticio. Esta página existe para dejar claro quién está detrás, qué es (y qué no es) este sitio y cómo se puede usar.',
    updated: '1 de noviembre de 2026',
    sections: [
      {
        heading: 'Titularidad',
        paragraphs: [
          'Calle Corta es un proyecto ficticio de diseño editorial y contenido de moda. No constituye una sociedad, no realiza actividad comercial y no vende productos ni servicios.',
          'Para cualquier cuestión relacionada con el sitio se puede escribir a hola@callecorta.example. Es una dirección ficticia habilitada solo a efectos de este proyecto.',
        ],
      },
      {
        heading: 'Objeto del sitio',
        paragraphs: [
          'El sitio publica artículos de estilo, combinaciones de prendas, guías de compra responsables y contenido sobre moda de segunda mano. Todo el contenido tiene finalidad informativa y de entretenimiento.',
          'Los precios que aparecen son orientativos y ficticios. No corresponden a ofertas reales ni a ningún establecimiento concreto.',
        ],
      },
      {
        heading: 'Marcas y contenido',
        paragraphs: [
          'No se mencionan marcas reales ni se establece relación comercial con ninguna empresa. Cualquier parecido con nombres, prendas o precios reales es coincidencia.',
          'Los nombres del equipo editorial, los artículos y las situaciones descritas son inventados. La aclaración de proyecto ficticio se repite en el pie de página y en la página Sobre nosotras.',
        ],
      },
      {
        heading: 'Propiedad intelectual',
        paragraphs: [
          'Los textos, el diseño, la maquetación y los elementos gráficos propios de Calle Corta forman parte de un ejercicio de diseño editorial ficticio. Las fotografías proceden de Unsplash y Pexels y se utilizan bajo sus respectivas licencias libres.',
          'Si eres autor o autora de una imagen y consideras que su uso no es adecuado, puedes escribir al correo indicado para solicitar su retirada.',
        ],
      },
      {
        heading: 'Responsabilidad',
        paragraphs: [
          'La información se ofrece tal cual, sin garantía de exactitud, actualización o disponibilidad. Calle Corta no se responsabiliza del uso que se haga de los looks, precios o consejos publicados.',
          'Los enlaces externos, si los hubiera, se facilitan únicamente como referencia y no implican respaldo ni afiliación.',
        ],
      },
      {
        heading: 'Legislación aplicable',
        paragraphs: [
          'Este aviso se interpreta conforme a la legislación española. Al tratarse de un proyecto ficticio sin actividad comercial, no se derivan obligaciones contractuales de su uso.',
        ],
      },
    ],
  },
  privacidad: {
    title: 'Privacidad',
    intro:
      'No hay servidor, no hay base de datos y no hay anuncios. La mayor parte de lo que haces en Calle Corta se queda en tu propio navegador.',
    updated: '1 de noviembre de 2026',
    sections: [
      {
        heading: 'Quién trata tus datos',
        paragraphs: [
          'Calle Corta es un proyecto ficticio sin estructura empresarial. No existe un responsable de tratamiento con actividad real. El correo de contacto hola@callecorta.example es igualmente ficticio.',
        ],
      },
      {
        heading: 'Qué datos se guardan',
        paragraphs: [
          'El sitio no envía información a ningún servidor. Los datos que puedes introducir se almacenan exclusivamente en el almacenamiento local de tu navegador:',
        ],
        list: [
          'Tu perchero: los identificadores de los artículos que guardas como favoritos.',
          'Tu correo: si decides apuntarte a la newsletter simulada.',
          'Tus mensajes: si utilizas el formulario de contacto, que no envía correos.',
          'El aviso de cookies: para recordar que ya lo has visto.',
        ],
      },
      {
        heading: 'Para qué se usan',
        paragraphs: [
          'Únicamente para que la web funcione como esperas: recordar tus favoritos, mostrar un estado de suscripción y no repetirte el aviso. No se elaboran perfiles, no se mide audiencia y no se comparte nada con terceros.',
        ],
      },
      {
        heading: 'Base legal y conservación',
        paragraphs: [
          'Al no existir tratamiento en servidores, no hay una base legal asociada a una actividad comercial. Los datos permanecen en tu navegador hasta que borres el almacenamiento local o uses la opción de vaciar el perchero.',
        ],
      },
      {
        heading: 'Tus derechos',
        paragraphs: [
          'Puedes eliminar todos los datos guardados borrando el almacenamiento local de este sitio en tu navegador. También puedes vaciar el perchero desde la propia web. Al no haber servidor, no existe copia en ningún otro lugar.',
        ],
      },
      {
        heading: 'Cambios',
        paragraphs: [
          'Si el proyecto cambiara y pasara a recoger datos de otra forma, esta página se actualizaría antes de aplicar el cambio. Mientras tanto, la privacidad es sencilla: todo se queda en tu dispositivo.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookies',
    intro:
      'Calle Corta no usa cookies de seguimiento, publicidad ni analítica. Solo utiliza almacenamiento local para que tus favoritos sigan ahí al recargar.',
    updated: '1 de noviembre de 2026',
    sections: [
      {
        heading: 'Qué es el almacenamiento local',
        paragraphs: [
          'El almacenamiento local es una función del navegador que permite guardar información en tu dispositivo. A diferencia de las cookies tradicionales, no se envía automáticamente a ningún servidor.',
          'En este proyecto se usa únicamente para el funcionamiento básico de la web.',
        ],
      },
      {
        heading: 'Qué se guarda exactamente',
        paragraphs: ['Estas son las claves que puede crear el sitio en tu navegador:'],
        list: [
          'calle-corta-perchero: los artículos guardados como favoritos.',
          'calle-corta-newsletter: los correos introducidos en la suscripción simulada.',
          'calle-corta-mensajes: los mensajes escritos en el formulario de contacto.',
          'calle-corta-aviso: el aviso para no repetir el cartel de cookies.',
        ],
      },
      {
        heading: 'Cookies de terceros',
        paragraphs: [
          'No se cargan cookies de terceros, ni píxeles de seguimiento, ni herramientas de analítica. Las tipografías están alojadas en el propio sitio y las imágenes se sirven desde el propio proyecto.',
        ],
      },
      {
        heading: 'Cómo borrarlas',
        paragraphs: [
          'Puedes eliminar estos datos desde la configuración de privacidad de tu navegador: busca “almacenamiento local”, “datos de sitios” o “cookies y datos de sitios” y elimina los de Calle Corta.',
          'También puedes vaciar el perchero desde la página Mi perchero. Al borrar los datos, la web seguirá funcionando, pero perderás los favoritos y el estado del aviso.',
        ],
      },
      {
        heading: 'Aviso de cookies',
        paragraphs: [
          'El pequeño cartel que aparece al entrar es una pieza de diseño del proyecto, no un sistema de consentimiento comercial. Al pulsar “Vale, solo lo justo” se guarda una marca en tu navegador para no volver a mostrarlo.',
        ],
      },
    ],
  },
}

const legalOrder = [
  { slug: 'aviso-legal', label: 'Aviso legal' },
  { slug: 'privacidad', label: 'Privacidad' },
  { slug: 'cookies', label: 'Cookies' },
]

export default function Legal() {
  const { slug } = useParams()
  const page = legalPages[slug]

  usePageMeta(page?.title ?? 'Legal', page?.intro)

  if (!page) {
    return <NotFound title="Ese documento no existe" />
  }

  return (
    <section className="mx-auto max-w-[1560px] px-4 py-12 sm:px-6 lg:px-8">
      <nav aria-label="Migas de pan" className="kicker flex flex-wrap items-center gap-2 text-[9px] text-ink-soft">
        <Link to="/" className="hover:text-signal-deep">
          Portada
        </Link>
        <span aria-hidden="true">/</span>
        <span>Legal</span>
        <span aria-hidden="true">/</span>
        <span className="text-ink">{page.title}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <p className="kicker border-b-2 border-ink pb-2 text-[9px] text-ink-soft">Documentos</p>
            <ul className="mt-3 space-y-2">
              {legalOrder.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/legal/${item.slug}`}
                    className={`block border-b border-dashed border-ink/30 py-1.5 font-serif text-sm transition-colors hover:text-signal-deep ${
                      item.slug === slug ? 'font-semibold text-signal-deep' : 'text-ink-soft'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-2 border-ink bg-signal p-4 shadow-hard-sm">
              <p className="kicker text-[9px]">Proyecto ficticio</p>
              <p className="mt-2 font-serif text-xs leading-snug text-ink/85">
                Estos textos son parte del ejercicio editorial. No describen una actividad comercial
                real.
              </p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-9">
          <div className="border-b-2 border-ink pb-6">
            <p className="kicker text-signal-deep">Legal / Calle Corta</p>
            <h1 className="mt-4 font-display text-5xl uppercase leading-[0.94] sm:text-7xl">{page.title}</h1>
            <p className="mt-4 max-w-[62ch] font-serif text-lg leading-snug text-ink-soft">{page.intro}</p>
            <p className="kicker mt-4 text-[9px] text-ink-soft">Última actualización: {page.updated}</p>
          </div>

          <div className="prose-zine mt-8">
            {page.sections.map((section) => (
              <section key={section.heading} id={section.heading.toLowerCase().replaceAll(' ', '-')}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink pt-5">
            <p className="kicker text-[9px] text-ink-soft">Calle Corta / Documento ficticio / 2026</p>
            <Link to="/contacto" className="btn-hard btn-hard--paper">
              ¿Dudas? Escríbeme
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
