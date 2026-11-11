import { useId, useState } from 'react'
import { StarIcon } from './Icons.jsx'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const STORAGE_KEY = 'calle-corta-newsletter'

export default function NewsletterForm({ compact = false, dark = false, className = '' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const inputId = useId()

  function handleSubmit(event) {
    event.preventDefault()
    if (!EMAIL.test(email.trim())) {
      setStatus('error')
      return
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      const list = stored ? JSON.parse(stored) : []
      const safeList = Array.isArray(list) ? list : []
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...safeList, email.trim()]))
    } catch {
      setStatus('ok')
    }

    setStatus('ok')
    setEmail('')
  }

  if (status === 'ok') {
    return (
      <div
        role="status"
        className={`border-2 border-ink p-4 shadow-hard-sm ${
          dark ? 'border-paper bg-paper text-ink' : 'border-ink bg-paper-light'
        } ${className}`}
      >
        <div className="flex items-start gap-3">
          <StarIcon className="mt-0.5 h-5 w-5 shrink-0 text-signal" />
          <div>
            <p className="font-display text-xl uppercase leading-none">Apuntado.</p>
            <p className="mt-2 font-serif text-sm leading-snug text-ink-soft">
              El formulario es de mentira, pero el estilo no. Cuando salga el próximo número, te
              enteras aquí primero.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="kicker mt-3 border-b-2 border-signal pb-0.5 text-[9px] text-ink hover:text-signal-deep"
            >
              Apuntar otro correo
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <label htmlFor={inputId} className={`kicker block text-[9px] ${dark ? 'text-paper/70' : 'text-ink-soft'}`}>
        Tu correo
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id={inputId}
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            if (status === 'error') setStatus('idle')
          }}
          placeholder="tu@correo.com"
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? `${inputId}-error` : undefined}
          className="field"
        />
        <button type="submit" className="btn-hard btn-hard--signal shrink-0">
          Mándame los looks
        </button>
      </div>
      {status === 'error' ? (
        <p id={`${inputId}-error`} role="alert" className="kicker mt-2 text-[9px] text-signal">
          Ese correo no parece un correo. Revísalo y volvemos a intentarlo.
        </p>
      ) : null}
      {!compact ? (
        <p className={`mt-2 font-serif text-xs leading-snug ${dark ? 'text-paper/60' : 'text-ink-soft'}`}>
          Un correo al mes, como mucho. Sin marcas, sin relleno y sin venderte nada.
        </p>
      ) : null}
    </form>
  )
}
