import { Link, useLocation, useSearchParams } from 'react-router-dom'

const options = [
  { value: '', label: 'Todo' },
  { value: '30', label: '≤ 30 €' },
  { value: '50', label: '≤ 50 €' },
  { value: '100', label: '≤ 100 €' },
]

export default function BudgetFilter({ className = '' }) {
  const [params] = useSearchParams()
  const location = useLocation()
  const active = params.get('max') ?? ''

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`} role="group" aria-label="Filtrar por presupuesto">
      <span className="kicker mr-1 text-[9px] text-ink-soft">Presupuesto</span>
      {options.map((option) => {
        const nextParams = new URLSearchParams(params)
        if (option.value) {
          nextParams.set('max', option.value)
        } else {
          nextParams.delete('max')
        }
        const query = nextParams.toString()
        const to = `${location.pathname}${query ? `?${query}` : ''}`
        const isActive = active === option.value

        return (
          <Link
            key={option.label}
            to={to}
            aria-current={isActive ? 'true' : undefined}
            className={`border-2 border-ink px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.08em] transition-all ${
              isActive
                ? 'bg-ink text-paper'
                : 'bg-paper-light shadow-hard-sm hover:-translate-y-0.5 hover:bg-signal'
            }`}
          >
            {option.label}
          </Link>
        )
      })}
    </div>
  )
}
