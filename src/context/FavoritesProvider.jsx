import { useCallback, useEffect, useMemo, useState } from 'react'
import { FavoritesContext } from './favorites-context.js'

const STORAGE_KEY = 'calle-corta-perchero'

function readFavorites() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(readFavorites)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      return
    }
  }, [favorites])

  const toggleFavorite = useCallback((slug) => {
    setFavorites((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    )
  }, [])

  const clearFavorites = useCallback(() => {
    setFavorites([])
  }, [])

  const isFavorite = useCallback((slug) => favorites.includes(slug), [favorites])

  const value = useMemo(
    () => ({
      favorites,
      count: favorites.length,
      toggleFavorite,
      clearFavorites,
      isFavorite,
    }),
    [favorites, toggleFavorite, clearFavorites, isFavorite],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
