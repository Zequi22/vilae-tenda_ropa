const phrases = [
  'Nuevo look',
  'Menos de 50 €',
  'Otoño 2026',
  'Sin marcas',
  'Segunda mano',
  'Total 47 €',
  'Looks que se ven caros',
  'Precios cortos',
]

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[0, 1].map((group) => (
          <div className="marquee__group" key={group} aria-hidden={group === 1}>
            {phrases.map((phrase) => (
              <span className="marquee__item" key={`${group}-${phrase}`}>
                {phrase}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
