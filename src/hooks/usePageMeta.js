import { useEffect } from 'react'

export function usePageMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title ? `${title} — Calle Corta` : 'Calle Corta — Looks que se ven caros y cuestan poco'

    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content')
    if (meta && description) meta.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (meta && previousDescription) meta.setAttribute('content', previousDescription)
    }
  }, [title, description])
}
