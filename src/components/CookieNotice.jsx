import { useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'calle-corta-aviso'

export default function CookieNotice() {
  const [visible, setVisible] = useState(() => {
    try {
      return !window.localStorage.getItem(STORAGE_KEY)
    } catch {
      return true
    }
  })

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'visto')
    } catch {
      setVisible(false)
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside
      aria-label="Aviso sobre datos y cookies"
      className="fixed bottom-3 left-3 z-[60] w-[calc(100%-1.5rem)] max-w-sm border-2 border-ink bg-paper-light p-4 shadow-hard sm:w-auto"
    >
      <span aria-hidden="true" className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
      <p className="kicker text-[9px] text-signal-deep">Aviso de cookies (de los de verdad, no)</p>
      <p className="mt-2 font-serif text-sm leading-snug text-ink-soft">
        Aquí solo se guardan tus favoritos y el correo que me dejes en este navegador. Nada de
        rastreo, nada de anuncios y nada de terceros.
      </p>
      <div className="mt-3 flex items-center gap-4">
        <button type="button" onClick={accept} className="btn-hard btn-hard--ink px-3 py-1.5 text-[9px]">
          Vale, solo lo justo
        </button>
        <Link to="/legal/cookies" className="kicker border-b-2 border-signal pb-0.5 text-[9px] hover:text-signal-deep">
          Qué guardo
        </Link>
      </div>
    </aside>
  )
}
