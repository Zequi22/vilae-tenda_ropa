export function SearchIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  )
}

export function HeartIcon({ className = 'h-4 w-4', filled = false }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 20.2 4.6 13a4.6 4.6 0 0 1 6.5-6.5L12 7.4l.9-.9A4.6 4.6 0 0 1 19.4 13Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 12h17M14 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  )
}

export function MenuIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M2 5h20M2 12h20M2 19h13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
    </svg>
  )
}

export function PlusIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
    </svg>
  )
}

export function HangerIcon({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 64 40" fill="none" className={className} aria-hidden="true">
      <path d="M32 4c0-2 1.4-3.5 3.5-3.5S39 2.2 39 4c0 2.5-2 3.1-3.5 4.2L32 11" stroke="currentColor" strokeWidth="2" />
      <path d="M32 11 4 30h56L32 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="m12 2 2.7 7.2H22l-5.9 4.4 2.3 7.1L12 16.3l-6.4 4.4 2.3-7.1L2 9.2h7.3Z" fill="currentColor" />
    </svg>
  )
}
