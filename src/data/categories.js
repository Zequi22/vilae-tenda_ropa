export const categories = [
  {
    slug: 'tendencias',
    name: 'Tendencias',
    letter: 'S',
    description: 'Lo que se lleva ahora, pasado por el filtro de "¿me lo pondría en marzo?".',
    note: 'Sin obligación',
    tilt: '-1.5deg',
  },
  {
    slug: 'looks',
    name: 'Looks',
    letter: 'M',
    description: 'Combinaciones completas, con precio desglosado y cero drama.',
    note: 'Fácil de copiar',
    tilt: '1.2deg',
  },
  {
    slug: 'under-50',
    name: 'Under 50 €',
    letter: 'L',
    description: 'Looks enteros por menos de lo que cuesta una cena con amigos.',
    note: 'Precio total',
    tilt: '-2deg',
  },
  {
    slug: 'streetwear',
    name: 'Streetwear',
    letter: 'S',
    description: 'Sudadera, cargo y calle. Sin ir disfrazada de anuncio.',
    note: 'Cómodo de verdad',
    tilt: '1.8deg',
  },
  {
    slug: 'segunda-mano',
    name: 'Segunda mano',
    letter: 'M',
    description: 'Chollos con historia, etiquetas gastadas y mucho criterio.',
    note: 'Menos de 30 €',
    tilt: '-1deg',
  },
  {
    slug: 'guias',
    name: 'Guías',
    letter: 'L',
    description: 'Cómo combinar, qué mirar y qué no pagar. Sin humo.',
    note: 'Nivel básico',
    tilt: '2.1deg',
  },
]

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug)
}
