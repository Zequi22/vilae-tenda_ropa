import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta.js'
import NewsletterForm from '../components/NewsletterForm.jsx'
import { ArrowIcon } from '../components/Icons.jsx'

const faqs = [
  {
    question: '¿Puedo comprar la ropa que sale en la revista?',
    answer:
      'No. Calle Corta no vende ropa ni tiene tienda. Los looks son propuestas editoriales para que busques piezas parecidas donde quieras.',
  },
  {
    question: '¿Las marcas pagan por aparecer?',
    answer:
      'No aparece ninguna marca real y no hay publicidad. Es un proyecto ficticio de diseño editorial, sin afiliaciones comerciales.',
  },
  {
    question: '¿Puedo usar las fotos?',
    answer:
      'Las imágenes vienen de Unsplash y Pexels bajo su licencia libre. Si las reutilizas, revisa siempre las condiciones de cada plataforma.',
  },
]

export default function Contact() {
  usePageMeta(
    'Contacto',
    'Escríbeme: dudas, ideas, looks o correcciones. Calle Corta es un proyecto ficticio sin tienda ni marcas.',
  )

  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: 'Un look', message: '' })

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    try {
      const stored = window.localStorage.getItem('calle-corta-mensajes')
      const list = stored ? JSON.parse(stored) : []
      const safeList = Array.isArray(list) ? list : []
      window.localStorage.setItem(
        'calle-corta-mensajes',
        JSON.stringify([...safeList, { ...form, date: new Date().toISOString() }]),
      )
    } catch {
      setSent(true)
    }
    setSent(true)
  }

  return (
    <>
      <section className="mx-auto max-w-[1560px] px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 border-b-2 border-ink pb-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker text-signal-deep">Contacto / Sin intermediarios</p>
            <h1 className="mt-4 text-balance font-display text-6xl uppercase leading-[0.94] sm:text-8xl">
              Escríbeme.
              <br />
              Leo todo.
            </h1>
            <p className="mt-5 max-w-[52ch] font-serif text-xl leading-snug text-ink-soft">
              ¿Un look que no te cuadra? ¿Una palabra que se ha colado? ¿Una idea para el próximo
              número? Este es el sitio. Aunque el buzón sea de mentira, la intención es real.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rotate-[0.8deg] border-2 border-ink bg-paper-light p-5 shadow-hard">
              <p className="kicker text-[9px] text-signal-deep">Datos de contacto</p>
              <p className="mt-2 font-mono text-sm font-bold">hola@callecorta.example</p>
              <p className="mt-3 font-serif text-sm leading-snug text-ink-soft">
                Proyecto ficticio. No hay oficina, no hay teléfono y no hay equipo comercial. Solo
                una mesa, un portátil y demasiadas perchas.
              </p>
              <p className="kicker mt-4 border-t-2 border-dashed border-ink/40 pt-3 text-[9px] text-ink-soft">
                Respuesta orientativa: cuando pueda, no prometo plazos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-paper-light">
        <div className="mx-auto max-w-[1560px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {sent ? (
                <div className="border-2 border-ink bg-signal p-6 shadow-hard sm:p-8">
                  <p className="font-display text-5xl uppercase leading-[0.94]">Mensaje recibido.</p>
                  <p className="mt-4 max-w-[46ch] font-serif text-lg leading-snug text-ink/85">
                    Bueno, recibido en este navegador. El formulario es de mentira, pero me ha hecho
                    ilusión. Puedes volver a escribir o seguir mirando looks.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button type="button" onClick={() => setSent(false)} className="btn-hard btn-hard--ink">
                      Escribir otro
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setForm({ name: '', email: '', subject: 'Un look', message: '' })
                        setSent(false)
                      }}
                      className="btn-hard btn-hard--paper"
                    >
                      Empezar de cero
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border-2 border-ink bg-paper p-5 shadow-hard sm:p-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="kicker mb-2 block text-[9px] text-ink-soft">
                        Tu nombre
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={updateField}
                        placeholder="Cómo te llamas"
                        className="field"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="kicker mb-2 block text-[9px] text-ink-soft">
                        Tu correo
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={updateField}
                        placeholder="tu@correo.com"
                        className="field"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="contact-subject" className="kicker mb-2 block text-[9px] text-ink-soft">
                      ¿De qué va?
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={updateField}
                      className="field appearance-none"
                    >
                      <option>Un look</option>
                      <option>Una corrección</option>
                      <option>Una colaboración (ficticia)</option>
                      <option>Solo saludar</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="contact-message" className="kicker mb-2 block text-[9px] text-ink-soft">
                      Tu mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows="6"
                      value={form.message}
                      onChange={updateField}
                      placeholder="Cuéntame. Sin prisa."
                      className="field resize-y"
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 border-t-2 border-dashed border-ink/40 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs font-serif text-xs leading-snug text-ink-soft">
                      Este formulario no envía correos: guarda el mensaje en tu navegador y se queda
                      ahí. Nada viaja a ningún servidor.
                    </p>
                    <button type="submit" className="btn-hard btn-hard--ink shrink-0">
                      Enviar mensaje
                      <ArrowIcon />
                    </button>
                  </div>
                </form>
              )}
            </div>

            <aside className="lg:col-span-5">
              <h2 className="border-b-2 border-ink pb-2 font-display text-3xl uppercase leading-none">
                Antes de escribir
              </h2>
              <div className="mt-4 divide-y-2 divide-dashed divide-ink/30">
                {faqs.map((faq, index) => (
                  <details key={faq.question} className="group py-3" open={index === 0}>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-serif text-base font-semibold leading-snug [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span className="mt-0.5 shrink-0 font-mono text-xs text-signal-deep transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-2 font-serif text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
                  </details>
                ))}
              </div>

              <div className="mt-8 border-2 border-ink bg-ink p-5 text-paper">
                <p className="kicker text-[9px] text-signal">Boletín de percha</p>
                <h2 className="mt-3 font-display text-3xl uppercase leading-none">Mándame los looks</h2>
                <NewsletterForm dark compact className="mt-4" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink pt-6">
          <p className="max-w-xl font-serif text-lg italic leading-snug text-ink-soft">
            “No hay preguntas tontas. Hay preguntas que se contestan con un look y preguntas que se
            contestan con un café.”
          </p>
          <p className="kicker text-[9px] text-ink-soft">Calle Corta / Proyecto ficticio / 2026</p>
        </div>
      </section>
    </>
  )
}
