import { formatPrice } from '../lib/format.js'

const tones = {
  signal: 'border-ink bg-signal text-ink tag-notch--signal',
  paper: 'border-ink bg-paper-light text-ink tag-notch',
  ink: 'border-paper bg-ink text-paper tag-notch--ink',
}

const sizes = {
  sm: 'px-1.5 pb-1 pt-3.5',
  md: 'px-2.5 pb-1.5 pt-3.5',
  lg: 'px-4 pb-2 pt-5',
}

const labelSizes = {
  sm: 'text-[6px]',
  md: 'text-[7px]',
  lg: 'text-[9px]',
}

const valueSizes = {
  sm: 'text-[10px]',
  md: 'text-[12px]',
  lg: 'text-2xl',
}

export default function PriceTag({
  total,
  label = 'TOTAL',
  tone = 'signal',
  size = 'md',
  hanging = true,
  className = '',
  rotate = '-3deg',
}) {
  return (
    <span
      className={`inline-flex flex-col items-center ${className}`}
      aria-label={`${label}: ${formatPrice(total)}`}
    >
      {hanging ? <span aria-hidden="true" className="block h-4 w-px bg-ink" /> : null}
      <span
        className={`hang tag-notch block rounded-none border-2 font-mono font-bold shadow-hard-sm ${tones[tone]} ${sizes[size]} ${size === 'sm' ? 'tag-notch--sm' : ''}`}
        style={{ rotate }}
      >
        <span className={`block uppercase leading-none tracking-[0.14em] ${labelSizes[size]}`}>{label}</span>
        <span className={`mt-0.5 block leading-none ${valueSizes[size]}`}>{formatPrice(total)}</span>
      </span>
    </span>
  )
}
