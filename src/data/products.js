export const productFilters = [
  { id: 'all', label: 'Todas' },
  { id: 'facial', label: 'Facial' },
  { id: 'maquillaje', label: 'Maquillaje' },
  { id: 'cabello', label: 'Cabello' },
  { id: 'fragancias', label: 'Fragancias' },
  { id: 'favoritos', label: 'Favoritos' },
  { id: 'iniciacion', label: 'Iniciación' }
];

export const FARMASI_GENERAL_STORE_URL = 'https://www.farmasi.es/maite84';

// Los enlaces proceden de la web antigua maidecoratefarmasi.com y deben revisarse periódicamente por si Farmasi cambia las URLs.
export const products = [
  {
    id: 'vitamin-c-glow-serum',
    name: 'Vitamin C Glow Serum',
    category: 'facial',
    filters: ['facial', 'favoritos'],
    audience: 'Pieles apagadas, con tono irregular o que buscan una rutina luminosa y sencilla.',
    reason: 'Maite lo recomienda cuando quieres aportar luz a la rutina sin complicarla ni recargar la piel.',
    shortReason: 'Luminosidad y gesto diario de cuidado consciente.',
    productUrl:
      'https://www.farmasi.es/maite84/product-detail/dr-c-tuna-vitamin-c-glow-serum?pid=1002167',
    linkStatus: 'confirmed-product-link',
    sourcePage: 'https://maidecoratefarmasi.com/mis-recomendaciones/',
    sourceNote: 'Producto oficial Farmasi localizado por nombre y pid 1002167',
    originalProductName: 'Vitamin C Glow Serum / Sérum Iluminador con Vitamina C - Dr. C. Tuna',
    imageKey: 'serum-vitamin-c',
    alt: 'Serum de vitamina C con textura ligera sobre bandeja de piedra en un entorno premium de cosmética natural.'
  },
  {
    id: 'calendula-balm',
    name: 'Bálsamo de Caléndula',
    category: 'facial',
    filters: ['facial', 'iniciacion'],
    audience: 'Pieles sensibles, secas o que buscan una sensación calmante dentro de la rutina.',
    reason: 'Es una opción amable para empezar a cuidarse con fórmulas reconfortantes y una experiencia muy sensorial.',
    shortReason: 'Calma, mimo y textura confortable.',
    productUrl:
      'https://www.farmasi.es/maite84/product-detail/dr-c-tuna-calendula-balsamo-crema?pid=1000286',
    linkStatus: 'confirmed-product-link',
    sourcePage: 'https://maidecoratefarmasi.com/mis-recomendaciones/',
    sourceNote: 'Producto oficial Farmasi localizado por nombre y pid 1000286',
    originalProductName: 'Bálsamo de Caléndula - Pieles Sensibles',
    imageKey: 'calendula-balm',
    alt: 'Bálsamo de caléndula con acabado suave, rodeado de pétalos crema y beige.'
  },
  {
    id: 'bb-cream-light-medium',
    name: 'BB Cream Light to Medium',
    category: 'maquillaje',
    filters: ['maquillaje', 'iniciacion'],
    audience: 'Quien quiere uniformidad ligera, acabado natural y una primera base fácil de integrar.',
    reason: 'Funciona muy bien cuando buscas verte arreglada con un maquillaje cómodo y nada pesado.',
    shortReason: 'Cobertura ligera con efecto piel bonita.',
    productUrl: 'https://farmasi.es/maite84/product-detail/bb-beauty-balm-light?pid=1001551',
    linkStatus: 'confirmed-product-link',
    sourcePage: 'https://maidecoratefarmasi.com/mis-recomendaciones/',
    sourceNote: 'Enlace procedente de la web antigua Maidecorate',
    originalProductName: 'BB Cream - Tono Light to Medium / BB Cream con SPF 15',
    imageKey: 'bb-cream',
    alt: 'BB cream de maquillaje natural junto a brocha suave y tonos nude.'
  },
  {
    id: 'retro-rose-lipstick',
    name: 'Labial Líquido Mate Retro Rose',
    category: 'maquillaje',
    filters: ['maquillaje', 'favoritos'],
    audience: 'Amantes de un look elegante, pulido y duradero con un tono rosa sofisticado.',
    reason: 'Es el toque final perfecto para elevar el gesto cotidiano sin perder naturalidad.',
    shortReason: 'Color elegante para un maquillaje con presencia serena.',
    productUrl:
      'https://www.farmasi.es/maite84/product-detail/labial-liquido-mate-retro-rose-04?pid=1001412',
    linkStatus: 'confirmed-product-link',
    sourcePage: 'https://maidecoratefarmasi.com/mis-recomendaciones/',
    sourceNote: 'Producto oficial Farmasi localizado por nombre y pid 1001412',
    originalProductName: 'Labial Líquido Mate - Retro Rose',
    imageKey: 'retro-rose-lipstick',
    alt: 'Labial líquido mate en tono rosa empolvado sobre superficie de mármol cálido.'
  },
  {
    id: 'ultimate-shine-lip-gloss',
    name: 'Ultimate Shine Lip Gloss Pink Tourmaline',
    category: 'maquillaje',
    filters: ['maquillaje'],
    audience: 'Quien prefiere brillo cómodo, labios jugosos y un efecto cuidado más que recargado.',
    reason: 'Maite lo recomienda para días de maquillaje rápido en los que aún quieres verte pulida.',
    shortReason: 'Brillo fácil con efecto fresco y bonito.',
    productUrl:
      'https://www.farmasi.es/maite84/product-detail/ultimate-shine-lip-gloss-shiny-cooperpink-tourmaline?pid=1001406',
    linkStatus: 'confirmed-product-link',
    sourcePage: 'https://maidecoratefarmasi.com/mis-recomendaciones/',
    sourceNote: 'Producto oficial Farmasi localizado por nombre y pid 1001406',
    originalProductName: 'Ultimate Shine Lip Gloss - Pink Tourmaline',
    imageKey: 'pink-tourmaline-gloss',
    alt: 'Lip gloss rosa brillante con reflejos suaves en un set de belleza femenino.'
  },
  {
    id: 'tea-tree-routine',
    name: 'Tea Tree Routine Essentials',
    category: 'cabello',
    filters: ['cabello'],
    audience: 'Personas que desean una rutina capilar ligera, fresca y fácil de mantener.',
    reason: 'Encaja muy bien como propuesta funcional cuando quieres empezar a ordenar tus básicos de cabello.',
    shortReason: 'Rutina limpia y práctica para el día a día.',
    productUrl: FARMASI_GENERAL_STORE_URL,
    linkStatus: 'fallback-general-store',
    sourcePage: 'sin enlace individual confirmado en maidecoratefarmasi.com',
    sourceNote: 'Sin enlace individual confirmado; se mantiene fallback a tienda general de Maite',
    originalProductName: 'Tea Tree Routine Essentials',
    imageKey: 'tea-tree-hair',
    alt: 'Rutina capilar con envases verdes suaves, peine de madera y toalla de lino.'
  },
  {
    id: 'signature-fragrance',
    name: 'Fragancia Signature Soft Bloom',
    category: 'fragancias',
    filters: ['fragancias', 'favoritos'],
    audience: 'Quien busca una fragancia femenina, ligera y fácil de llevar de mañana a noche.',
    reason: 'Es una forma muy bonita de cerrar la rutina con un gesto personal y elegante.',
    shortReason: 'Un aroma delicado para completar el ritual.',
    productUrl: FARMASI_GENERAL_STORE_URL,
    linkStatus: 'fallback-general-store',
    sourcePage: 'sin enlace individual confirmado en maidecoratefarmasi.com',
    sourceNote: 'Sin enlace individual confirmado; se mantiene fallback a tienda general de Maite',
    originalProductName: 'Fragancia Signature Soft Bloom',
    imageKey: 'signature-fragrance',
    alt: 'Frasco de fragancia femenina con flores suaves y luz cálida de tarde.'
  },
  {
    id: 'starter-beauty-edit',
    name: 'Beauty Starter Edit',
    category: 'facial',
    filters: ['facial', 'iniciacion'],
    audience: 'Quien quiere comenzar en Farmasi con una selección equilibrada y sin exceso de productos.',
    reason: 'Resume muy bien la filosofía de empezar con pocos pasos, buena sensorialidad y elección informada.',
    shortReason: 'Una puerta de entrada amable al universo Farmasi.',
    productUrl: FARMASI_GENERAL_STORE_URL,
    linkStatus: 'fallback-general-store',
    sourcePage: 'sin enlace individual confirmado en maidecoratefarmasi.com',
    sourceNote: 'Sin enlace individual confirmado; se mantiene fallback a tienda general de Maite',
    originalProductName: 'Beauty Starter Edit',
    imageKey: 'starter-edit',
    alt: 'Selección inicial de productos Farmasi en ambiente editorial de belleza natural.'
  }
];
