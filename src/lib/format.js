export function formatPrice(value) {
  return `${new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(value)} €`
}

export function formatDate(value, options = {}) {
  const date = new Date(`${value}T12:00:00`)
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    ...options,
  })
    .format(date)
    .replace('.', '')
    .toUpperCase()
}

export function formatShortDate(value) {
  return formatDate(value, { year: undefined })
}

export function itemTotal(items = []) {
  return items.reduce((total, item) => total + item.price, 0)
}
