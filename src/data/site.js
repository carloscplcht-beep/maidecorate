export const siteConfig = {
  brandName: 'Maidecorate Farmasi',
  siteUrl: 'https://maidecoratefarmasi.com',
  locale: 'es_ES',
  defaultDescription:
    'Web editorial y comercial sobre productos Farmasi, cosmética natural, recomendaciones honestas y acompañamiento cercano de Maite.',
  affiliateNotice:
    'Al comprar desde estos enlaces puedes apoyar este proyecto sin coste adicional para ti.',
  consultationNotice:
    'El asesor IA ofrece orientación general y no sustituye el consejo profesional, dermatológico o sanitario.',
  storeCta: 'Ir a mi tienda Farmasi',
  helpCta: 'Necesito ayuda para elegir',
  buyButtonLabel: 'Comprar en Farmasi',
  emailButtonLabel: 'Consultar por email',
  contactEmail: 'maite.taran@gmail.com',
  contactEmailUrl: 'mailto:maite.taran@gmail.com?subject=Consulta%20Maidecorate%20Farmasi',
  sameAs: [],
  person: {
    name: 'Maite García',
    handle: '@maidecorate',
    jobTitle: 'Creadora de contenido y recomendadora de productos Farmasi',
    description:
      'Maite comparte una mirada cercana sobre belleza natural, estética consciente, cuidado personal y selección honesta de productos Farmasi.',
    sameAs: []
  },
  links: {
    farmasiStore: 'https://www.farmasi.es/maite84',
    contactEmailUrl: 'mailto:maite.taran@gmail.com?subject=Consulta%20Maidecorate%20Farmasi',
    // Placeholder heredado: sustituir cuando exista una URL real confirmada.
    instagram: '',
    instagramStatus: 'placeholder-unconfirmed',
    email: 'mailto:maite.taran@gmail.com?subject=Consulta%20Maidecorate%20Farmasi',
    tiktok: '',
    cookies: '/cookies/',
    privacy: '/privacidad/',
    legal: '/aviso-legal/',
    affiliate: '/afiliacion/'
  },
  imagePrompts: [
    {
      id: 'hero-principal',
      label: 'Hero principal',
      prompt:
        'Fotografía editorial premium para web de belleza natural: tocador luminoso con envases elegantes inspirados en Farmasi, texturas nude y beige, luz cálida de mañana, flores suaves, composición vertical con espacio limpio para titular, estética femenina, serena y sofisticada.'
    },
    {
      id: 'cosmetica-natural',
      label: 'Cosmética natural',
      prompt:
        'Still life editorial de cosmética natural con sérums, crema y aceites sobre piedra clara, hojas botánicas sutiles, tonos blanco roto, beige y verde suave, iluminación difusa y sensación de belleza consciente.'
    },
    {
      id: 'rutina-facial',
      label: 'Rutinas de cuidado facial',
      prompt:
        'Escena lifestyle de rutina facial consciente: manos aplicando sérum frente a espejo luminoso, textiles de lino, toallas crema, envases elegantes, ambiente cálido y minimalista, look premium y cercano.'
    },
    {
      id: 'maquillaje-elegante',
      label: 'Maquillaje elegante',
      prompt:
        'Composición de maquillaje elegante y natural con labiales rosados, brochas suaves y acabado satinado, fondo editorial nude con detalles dorados sutiles, alta gama, femenino y nada recargado.'
    },
    {
      id: 'productos-premium',
      label: 'Productos Farmasi en ambiente premium',
      prompt:
        'Fotografía publicitaria premium de productos Farmasi en entorno cálido y editorial, mármol crema, reflejos suaves, vegetación sutil, sensación de selección cuidada y compra de confianza.'
    },
    {
      id: 'maite-cercana',
      label: 'Maite como figura cercana de recomendación',
      prompt:
        'Retrato lifestyle editorial de mujer cercana y elegante en ambiente cálido de belleza y decoración, luz natural, tonos crema y rosa empolvado, mirada amable, sensación de confianza y recomendación honesta.'
    }
  ]
};

const sharedKeywords = [
  'Farmasi España',
  'productos Farmasi',
  'cosmética natural Farmasi',
  'maquillaje Farmasi',
  'comprar Farmasi',
  'recomendaciones Farmasi',
  'belleza natural',
  'rutina facial',
  'cuidado consciente',
  'Maidecorate Farmasi'
];

export const pages = {
  home: {
    key: 'home',
    file: 'index.html',
    path: '/',
    navLabel: 'Inicio',
    shortLabel: 'Inicio',
    changefreq: 'weekly',
    priority: '1.0',
    seo: {
      title: 'Belleza natural, cuidado consciente y recomendaciones con alma | Maidecorate Farmasi',
      description:
        'Descubre la nueva experiencia Maidecorate Farmasi: recomendaciones honestas, cosmética natural, cómo comprar en la tienda oficial y acompañamiento cercano de Maite.',
      keywords: sharedKeywords
    },
    hero: {
      title: 'Belleza natural, cuidado consciente y recomendaciones con alma',
      subtitle:
        'Una nueva forma de descubrir productos Farmasi desde la estética, la calma y la recomendación honesta. Aquí encontrarás selección personal, compra guiada y apoyo cercano para elegir con criterio.',
      ctas: [
        { label: 'Ver recomendaciones', path: '/mis-recomendaciones/' },
        { label: 'Cómo comprar', path: '/como-comprar/' },
        { label: 'Consultar por email', href: siteConfig.links.contactEmailUrl }
      ],
      imageKey: 'hero-editorial'
    },
    introduction: [
      'La home actúa como puerta de entrada a un universo de cosmética consciente, compra acompañada y belleza tratada con cercanía.',
      'La propuesta conserva la esencia de la web actual, pero la transforma en una experiencia más visual, más premium y mucho más cómoda en móvil.'
    ],
    featureCards: [
      {
        title: 'Nuestra filosofía',
        description: 'Descubre la mirada humanista detrás de cada recomendación y el valor de elegir con calma.',
        path: '/nuestra-filosofia/',
        imageKey: 'philosophy-editorial'
      },
      {
        title: 'Cosmética natural',
        description: 'Ingredientes, rutinas y categorías pensadas desde la sensorialidad y la elección informada.',
        path: '/cosmetica-natural/',
        imageKey: 'natural-cosmetics'
      },
      {
        title: 'Mis recomendaciones',
        description: 'Una selección editable de productos y categorías Farmasi elegidas por afinidad real.',
        path: '/mis-recomendaciones/',
        imageKey: 'recommendations-grid'
      },
      {
        title: 'Cómo comprar',
        description: 'Paso a paso para acceder a la tienda oficial y apoyar el proyecto sin fricciones.',
        path: '/como-comprar/',
        imageKey: 'how-to-buy'
      },
      {
        title: 'Asesor IA',
        description: 'Una ayuda local y amable para orientarte según tu piel, tu objetivo y tu experiencia.',
        path: '/asesor-ia-de-productos/',
        imageKey: 'ai-advisor'
      },
      {
        title: 'Contacto',
        description: 'Email, Instagram y un formulario estático pensado para recibir consultas con facilidad.',
        path: '/contacto/',
        imageKey: 'contact-editorial'
      },
      {
        title: 'Sobre Maite',
        description: 'El lado personal, estético y humano que da sentido a todo el proyecto.',
        path: '/sobre-maite/',
        imageKey: 'maite-portrait'
      }
    ],
    trustPoints: [
      {
        title: 'Recomendación cercana',
        description: 'No se trata de vender por vender, sino de ayudarte a elegir lo que encaja contigo.'
      },
      {
        title: 'Productos seleccionados',
        description: 'La selección se presenta como una curaduría editorial, clara y fácil de actualizar.'
      },
      {
        title: 'Tienda oficial Farmasi',
        description: 'La compra final se realiza siempre a través de la tienda oficial, con una ruta transparente.'
      },
      {
        title: 'Ayuda personalizada',
        description: 'Puedes apoyarte tanto en el asesor local como en el contacto directo con Maite.'
      }
    ],
    quote:
      'Cuidarte puede ser un gesto estético, consciente y profundamente cotidiano. Cuando la recomendación tiene alma, se nota.',
    finalCta: {
      title: 'Empieza tu recorrido con una selección Farmasi más cuidada, clara y amable.',
      description:
        'Explora el catálogo oficial desde el enlace personal y apóyate en Maite si quieres una recomendación más afinada.',
      primaryLabel: 'Ir a mi tienda Farmasi',
      primaryHref: siteConfig.links.farmasiStore,
      secondaryLabel: 'Pedir consejo a Maite',
      secondaryHref: siteConfig.links.contactEmailUrl
    },
    faqs: []
  },
  philosophy: {
    key: 'philosophy',
    file: 'nuestra-filosofia/index.html',
    path: '/nuestra-filosofia/',
    navLabel: 'Nuestra filosofía',
    shortLabel: 'Filosofía',
    changefreq: 'monthly',
    priority: '0.9',
    seo: {
      title: 'Nuestra filosofía | Belleza natural y cuidado consciente en Maidecorate Farmasi',
      description:
        'Conoce la filosofía de Maidecorate Farmasi: belleza natural, cercanía, selección honesta y respeto por la piel dentro de una experiencia más humana.',
      keywords: [...sharedKeywords, 'nuestra filosofía Farmasi', 'recomendación honesta']
    },
    hero: {
      title: 'Una forma más humana de hablar de belleza',
      subtitle:
        'Maidecorate Farmasi no es solo una tienda: es un espacio donde la estética, el autocuidado y la recomendación cercana conviven sin prisas y sin promesas exageradas.',
      imageKey: 'philosophy-editorial'
    },
    values: [
      {
        title: 'Belleza natural',
        description: 'Elegimos una narrativa que invita a cuidar la piel desde la sencillez, la textura y la coherencia.'
      },
      {
        title: 'Cuidado consciente',
        description: 'Se prioriza la elección informada y el uso cotidiano de productos que encajan con tu estilo de vida.'
      },
      {
        title: 'Cercanía real',
        description: 'La voz del proyecto se mantiene cálida, honesta y disponible, como una recomendación entre personas.'
      },
      {
        title: 'Selección personal',
        description: 'Cada sugerencia se presenta como una curaduría con criterio, no como un escaparate indiscriminado.'
      },
      {
        title: 'Respeto por la piel',
        description: 'La comunicación evita exageraciones y se centra en experiencia, sensorialidad y constancia.'
      },
      {
        title: 'Recomendación honesta',
        description: 'Se cuida tanto el tono como la transparencia de la afiliación y la compra en tienda oficial.'
      }
    ],
    sections: [
      {
        title: 'Belleza con propósito',
        body:
          'Esta página traduce el enfoque humanista actual en un lenguaje editorial más sólido: una web donde cada bloque transmite calma, criterio y una forma más consciente de elegir.',
        imageKey: 'hero-editorial'
      },
      {
        title: 'Un proyecto que acompaña',
        body:
          'La recomendación se presenta como acompañamiento. El objetivo no es impresionar con tecnicismos, sino ayudarte a orientarte dentro del catálogo Farmasi con confianza.',
        imageKey: 'contact-editorial'
      },
      {
        title: 'El valor de una selección cuidada',
        body:
          'La nueva web pone más orden, mejor narrativa visual y una estructura más clara para que cada producto y cada página tengan un papel concreto dentro del recorrido.',
        imageKey: 'recommendations-grid'
      }
    ],
    quote:
      'Cuando la belleza se comunica desde la cercanía, la recomendación deja de sonar a venta y empieza a parecerse más a una conversación útil.',
    contextualLinks: [
      { label: 'Ver recomendaciones', path: '/mis-recomendaciones/' },
      { label: 'Cómo comprar en Farmasi', path: '/como-comprar/' }
    ],
    faqs: []
  },
  cosmetics: {
    key: 'cosmetics',
    file: 'cosmetica-natural/index.html',
    path: '/cosmetica-natural/',
    navLabel: 'Cosmética natural',
    shortLabel: 'Cosmética natural',
    changefreq: 'monthly',
    priority: '0.9',
    seo: {
      title: 'Cosmética natural | Ingredientes, rutinas y selección Farmasi consciente',
      description:
        'Explora la propuesta de cosmética natural de Maidecorate Farmasi: rutinas, categorías y una forma más consciente de elegir productos de cuidado y maquillaje.',
      keywords: [...sharedKeywords, 'cosmética natural', 'rutina de cuidado']
    },
    hero: {
      title: 'Cosmética natural desde la calma y la elección informada',
      subtitle:
        'Elegir mejor no significa complicarlo todo. Aquí hablamos de texturas, sensorialidad, ingredientes y constancia sin caer en promesas médicas ni discursos confusos.',
      imageKey: 'natural-cosmetics'
    },
    overview:
      'La nueva página plantea la cosmética como un ritual más amable y más claro: menos ruido, más contexto y categorías mejor presentadas.',
    categories: [
      {
        title: 'Cuidado facial',
        description: 'Rutinas suaves, texturas agradables y fórmulas pensadas para acompañar el día a día con constancia.',
        imageKey: 'facial-routine'
      },
      {
        title: 'Maquillaje',
        description: 'Acabados naturales, tonos elegantes y productos fáciles de integrar incluso si no te maquillas mucho.',
        imageKey: 'elegant-makeup'
      },
      {
        title: 'Cabello',
        description: 'Básicos funcionales con una lectura más limpia y sensorial del cuidado capilar.',
        imageKey: 'hair-ritual'
      },
      {
        title: 'Fragancias',
        description: 'Aromas como extensión del ritual personal, sin perder ligereza ni sofisticación.',
        imageKey: 'signature-fragrance'
      },
      {
        title: 'Bienestar',
        description: 'Pequeños gestos de confort que completan el universo de cuidado con coherencia estética.',
        imageKey: 'wellness-edit'
      },
      {
        title: 'Básicos de rutina',
        description: 'Selecciones sencillas para empezar, ordenar tu tocador o regalar con criterio.',
        imageKey: 'starter-edit'
      }
    ],
    ingredientNotes: [
      'Hablar de ingredientes se orienta a su sensorialidad, uso y contexto dentro de una rutina.',
      'La constancia y la experiencia de uso pesan más que las afirmaciones grandilocuentes.',
      'La categoría enlaza de forma natural con recomendaciones y con la guía de compra.'
    ],
    contextualLinks: [
      { label: 'Ir a Mis recomendaciones', path: '/mis-recomendaciones/' },
      { label: 'Ver Cómo comprar', path: '/como-comprar/' }
    ],
    faqs: [
      {
        question: '¿Esta página hace promesas sanitarias o médicas?',
        answer:
          'No. La redacción está pensada para hablar de experiencia, textura, constancia y elección informada sin atribuir beneficios sanitarios no demostrados.'
      },
      {
        question: '¿Puedo usar esta página como guía para empezar una rutina?',
        answer:
          'Sí. La idea es ayudarte a identificar categorías, hábitos y productos que pueden encajar con tu momento, y después decidir con más calma.'
      }
    ]
  },
  recommendations: {
    key: 'recommendations',
    file: 'mis-recomendaciones/index.html',
    path: '/mis-recomendaciones/',
    navLabel: 'Mis recomendaciones',
    shortLabel: 'Recomendaciones',
    changefreq: 'weekly',
    priority: '0.9',
    seo: {
      title: 'Mis recomendaciones | Productos Farmasi seleccionados por Maite',
      description:
        'Explora las recomendaciones Farmasi de Maite con filtros por facial, maquillaje, cabello, fragancias, favoritos e iniciación.',
      keywords: [...sharedKeywords, 'recomendaciones Farmasi', 'productos Farmasi recomendados']
    },
    hero: {
      title: 'Una selección Farmasi pensada para ver, entender y elegir mejor',
      subtitle:
        'Cada tarjeta combina imagen, contexto de uso, motivo de recomendación y llamadas a la acción claras para comprar o pedir consejo.',
      imageKey: 'recommendations-grid'
    },
    affiliateCopy:
      'Las fichas están preparadas para enlazar a afiliados Farmasi editables desde un solo archivo. Puedes sustituir cada enlace sin tocar el diseño ni la estructura.',
    faqs: [
      {
        question: '¿Puedo editar los productos y sus enlaces fácilmente?',
        answer:
          'Sí. Toda la selección vive en src/data/products.js para que puedas cambiar textos, categorías, imágenes y enlaces afiliados desde un solo lugar.'
      },
      {
        question: '¿Las recomendaciones sustituyen un diagnóstico profesional?',
        answer:
          'No. Son sugerencias editoriales y comerciales orientadas a facilitar la elección dentro del catálogo Farmasi.'
      }
    ]
  },
  buy: {
    key: 'buy',
    file: 'como-comprar/index.html',
    path: '/como-comprar/',
    navLabel: 'Cómo comprar',
    shortLabel: 'Cómo comprar',
    changefreq: 'monthly',
    priority: '0.8',
    seo: {
      title: 'Cómo comprar en Farmasi | Guía visual paso a paso de Maidecorate Farmasi',
      description:
        'Aprende cómo comprar productos Farmasi desde la tienda oficial con el enlace personal de Maite y cómo recibir ayuda para elegir mejor.',
      keywords: [...sharedKeywords, 'cómo comprar Farmasi', 'tienda oficial Farmasi']
    },
    hero: {
      title: 'Comprar en Farmasi con claridad, orden y acompañamiento',
      subtitle:
        'La nueva página explica el proceso sin fricción y refuerza la transparencia del modelo de afiliación con una presentación mucho más visual.',
      imageKey: 'how-to-buy'
    },
    steps: [
      {
        title: 'Haz clic en los botones de compra',
        description:
          'Encontrarás accesos directos en recomendaciones, bloques destacados y llamadas a la acción repartidas por toda la web.'
      },
      {
        title: 'Accede a la tienda oficial Farmasi',
        description:
          'El enlace personal te lleva al entorno oficial de compra, donde la navegación y el pago se realizan con normalidad.'
      },
      {
        title: 'Explora el catálogo',
        description:
          'Puedes revisar categorías, productos y variantes con calma antes de decidir qué añadir a tu cesta.'
      },
      {
        title: 'Regístrate o inicia sesión',
        description:
          'Si es tu primera vez, la página te guía hacia un acceso claro y rápido; si ya tienes cuenta, solo tendrás que entrar.'
      },
      {
        title: 'Finaliza tu compra',
        description:
          'El sistema reconoce que llegas desde el enlace personal sin aumentar el precio de tu pedido.'
      },
      {
        title: 'Si tienes dudas, consulta con Maite',
        description:
          'Puedes pedir orientación antes o después de explorar el catálogo para confirmar si una propuesta encaja contigo.'
      }
    ],
    supportPoints: [
      'Aviso de afiliación visible y explicado en lenguaje claro.',
      'Doble CTA para comprar o pedir ayuda sin competir de forma agresiva.',
      'Zona FAQ optimizada para SEO y confianza.'
    ],
    faqs: [
      {
        question: '¿Comprar desde estos enlaces cambia el precio para mí?',
        answer:
          'No. El precio final para ti no cambia. La compra se hace en la tienda oficial y el enlace solo permite atribuir la recomendación a este proyecto.'
      },
      {
        question: '¿Dónde se realiza la compra?',
        answer:
          'Siempre en la tienda oficial de Farmasi, no dentro de esta web.'
      },
      {
        question: '¿Puedo pedir ayuda antes de decidir?',
        answer:
          'Sí. Puedes usar el asesor local o escribir directamente a Maite para resolver dudas sobre categorías, textura o enfoque de rutina.'
      }
    ]
  },
  advisor: {
    key: 'advisor',
    file: 'asesor-ia-de-productos/index.html',
    path: '/asesor-ia-de-productos/',
    navLabel: 'Asesor IA de productos',
    shortLabel: 'Asesor IA',
    changefreq: 'monthly',
    priority: '0.8',
    seo: {
      title: 'Asesor IA de productos | Orientación local para elegir productos Farmasi',
      description:
        'Utiliza un asesor IA local para orientar tu elección de productos Farmasi según tipo de piel, objetivo, preferencia y nivel de experiencia.',
      keywords: [...sharedKeywords, 'asesor IA Farmasi', 'elegir productos Farmasi']
    },
    hero: {
      title: 'Un asesor local para orientarte antes de comprar',
      subtitle:
        'Esta versión no depende de APIs externas: funciona con preguntas guiadas y reglas claras para sugerir categorías, selecciones iniciales y próximos pasos.',
      imageKey: 'ai-advisor'
    },
    questions: [
      {
        id: 'skinType',
        label: 'Tipo de piel',
        options: ['Normal', 'Seca', 'Mixta', 'Grasa', 'Sensible']
      },
      {
        id: 'goal',
        label: 'Objetivo principal',
        options: ['Luminosidad', 'Confort', 'Rutina sencilla', 'Acabado natural', 'Regalo o iniciación']
      },
      {
        id: 'productFocus',
        label: 'Producto que buscas',
        options: ['Cuidado facial', 'Maquillaje', 'Cabello', 'Fragancia', 'Aún no lo sé']
      },
      {
        id: 'preference',
        label: 'Preferencia de maquillaje o cuidado',
        options: ['Muy natural', 'Ligero pero pulido', 'Sensorial y confortable', 'Práctico y rápido', 'Quiero explorar']
      },
      {
        id: 'experience',
        label: 'Nivel de experiencia',
        options: ['Estoy empezando', 'Ya tengo rutina', 'Quiero afinar elecciones']
      }
    ],
    disclaimer: siteConfig.consultationNotice,
    faqs: []
  },
  contact: {
    key: 'contact',
    file: 'contacto/index.html',
    path: '/contacto/',
    navLabel: 'Contacto',
    shortLabel: 'Contacto',
    changefreq: 'monthly',
    priority: '0.7',
    seo: {
      title: 'Contacto | Habla con Maite sobre productos Farmasi y belleza consciente',
      description:
        'Escríbele a Maite por email para recibir ayuda personalizada al elegir productos Farmasi.',
      keywords: [...sharedKeywords, 'contacto Farmasi', 'consultar con Maite']
    },
    hero: {
      title: 'Cuéntame qué necesitas y te ayudo a elegir',
      subtitle:
        'La página de contacto se rediseña como una zona clara y cercana, con accesos directos y un formulario estático pensado para convertir dudas en conversación.',
      imageKey: 'contact-editorial'
    },
    methods: [
      {
        title: 'Email directo',
        description: 'El acceso más directo para pedir consejo sobre categorías, texturas o ideas de regalo.',
        href: siteConfig.links.contactEmailUrl,
        label: 'Enviar consulta'
      },
      {
        title: 'Instagram',
        description: 'Perfecto si ya sigues a Maite y quieres mantener la conversación en el canal más cercano a su comunidad.',
        href: siteConfig.links.instagram,
        label: 'Ir a Instagram'
      },
      {
        title: 'Correo',
        description: 'Una alternativa cómoda si prefieres explicar tu caso con más detalle y dejarlo listo para responder.',
        href: siteConfig.links.email,
        label: 'Enviar correo'
      }
    ],
    faqs: []
  },
  about: {
    key: 'about',
    file: 'sobre-maite/index.html',
    path: '/sobre-maite/',
    navLabel: 'About / Sobre Maite',
    shortLabel: 'Sobre Maite',
    changefreq: 'monthly',
    priority: '0.8',
    seo: {
      title: 'Sobre Maite | Maidecorate Farmasi, belleza, decoración y recomendación cercana',
      description:
        'Conoce a Maite, la persona detrás de Maidecorate Farmasi: estética, decoración, cuidado consciente y una forma honesta de recomendar productos.',
      keywords: [...sharedKeywords, 'Sobre Maite', 'Maidecorate']
    },
    hero: {
      title: 'El proyecto también habla de quien lo cuida',
      subtitle:
        'Sobre Maite reúne el lado más personal del universo Maidecorate: gusto por la estética, la decoración cálida, el orden emocional y una forma cercana de recomendar.',
      imageKey: 'maite-portrait'
    },
    storySections: [
      {
        title: 'De la decoración al cuidado personal',
        body:
          'La web mantiene el vínculo entre el amor por los espacios bonitos y la forma de cuidar el cuerpo con la misma coherencia. La narrativa une belleza, hogar y bienestar cotidiano.',
        imageKey: 'hero-editorial'
      },
      {
        title: 'Recomendar con honestidad',
        body:
          'La recomendación se plantea como criterio compartido: si algo no aporta, no ocupa espacio. Eso hace que la página respire confianza desde el diseño y desde el texto.',
        imageKey: 'recommendations-grid'
      },
      {
        title: 'Una presencia más humana',
        body:
          'El retrato de Maite, el tono de voz y las llamadas a la acción ayudan a que la marca personal se perciba próxima sin perder elegancia.',
        imageKey: 'contact-editorial'
      }
    ],
    promises: [
      'Recomendaciones reales y comprensibles.',
      'Acompañamiento cercano si quieres ayuda para elegir.',
      'Estética cuidada sin perder claridad comercial.',
      'Un proyecto que conecta belleza, hogar y forma de vivir.'
    ],
    faqs: []
  },
  legal: {
    key: 'legal',
    file: 'aviso-legal/index.html',
    path: '/aviso-legal/',
    navLabel: 'Aviso legal',
    shortLabel: 'Aviso legal',
    changefreq: 'yearly',
    priority: '0.4',
    seo: {
      title: 'Aviso legal | Maidecorate Farmasi',
      description:
        'Página base de aviso legal para la web de Maidecorate Farmasi, lista para completar con los datos definitivos del proyecto.',
      keywords: ['aviso legal Maidecorate Farmasi', 'información legal web']
    },
    hero: {
      title: 'Aviso legal',
      subtitle:
        'Página base editable para incorporar la identificación definitiva de la titular, condiciones de uso y datos de contacto legales del proyecto.',
      imageKey: 'legal-paper'
    },
    sections: [
      {
        title: 'Titular del sitio',
        body:
          'Sustituye este bloque por el nombre completo o razón social, NIF, domicilio profesional y datos de contacto legales que correspondan al proyecto.'
      },
      {
        title: 'Objeto de la web',
        body:
          'Este sitio presenta información editorial y comercial sobre productos Farmasi, recomendaciones personales y enlaces de referencia o afiliación.'
      },
      {
        title: 'Responsabilidad',
        body:
          'Los contenidos se ofrecen con fines informativos y comerciales generales. Conviene revisar y adaptar este texto con asesoramiento jurídico antes de publicar.'
      }
    ],
    faqs: []
  },
  privacy: {
    key: 'privacy',
    file: 'privacidad/index.html',
    path: '/privacidad/',
    navLabel: 'Privacidad',
    shortLabel: 'Privacidad',
    changefreq: 'yearly',
    priority: '0.4',
    seo: {
      title: 'Privacidad | Maidecorate Farmasi',
      description:
        'Página base de privacidad para la web de Maidecorate Farmasi, preparada para adaptar textos sobre tratamiento de datos y formularios.',
      keywords: ['privacidad Maidecorate Farmasi', 'política de privacidad web']
    },
    hero: {
      title: 'Privacidad',
      subtitle:
        'Página base para documentar cómo se tratan los datos en formularios, analítica, mensajería y cualquier integración futura.',
      imageKey: 'legal-paper'
    },
    sections: [
      {
        title: 'Datos recogidos',
        body:
          'Si mantienes el formulario estático por correo, explica aquí qué datos se solicitan y con qué finalidad se usarán.'
      },
      {
        title: 'Base jurídica y conservación',
        body:
          'Añade la base legitimadora, el tiempo de conservación y los mecanismos de ejercicio de derechos según tu caso real.'
      },
      {
        title: 'Terceros y plataformas',
        body:
          'Incluye referencias a proveedores de hosting, correo, analítica o redes sociales si intervienen en el tratamiento.'
      }
    ],
    faqs: []
  },
  cookies: {
    key: 'cookies',
    file: 'cookies/index.html',
    path: '/cookies/',
    navLabel: 'Cookies',
    shortLabel: 'Cookies',
    changefreq: 'yearly',
    priority: '0.4',
    seo: {
      title: 'Cookies | Maidecorate Farmasi',
      description:
        'Página base de cookies para la nueva web de Maidecorate Farmasi, lista para detallar herramientas y finalidades reales.',
      keywords: ['cookies Maidecorate Farmasi', 'política de cookies']
    },
    hero: {
      title: 'Cookies',
      subtitle:
        'Bloque inicial preparado para documentar las cookies técnicas, de analítica o de terceros que quieras activar al publicar.',
      imageKey: 'legal-paper'
    },
    sections: [
      {
        title: 'Cookies técnicas',
        body:
          'Detalla aquí las cookies necesarias para navegación, seguridad o recordatorios básicos si finalmente se utilizan.'
      },
      {
        title: 'Analítica y medición',
        body:
          'Si añades herramientas de medición o etiquetas de marketing, especifica nombre, duración y finalidad de cada una.'
      },
      {
        title: 'Cómo gestionar el consentimiento',
        body:
          'Explica el sistema de consentimiento elegido y cómo retirar o cambiar la preferencia de cookies.'
      }
    ],
    faqs: []
  },
  affiliate: {
    key: 'affiliate',
    file: 'afiliacion/index.html',
    path: '/afiliacion/',
    navLabel: 'Afiliación',
    shortLabel: 'Afiliación',
    changefreq: 'yearly',
    priority: '0.5',
    seo: {
      title: 'Afiliación y referidos | Maidecorate Farmasi',
      description:
        'Página base para explicar con transparencia cómo funcionan los enlaces de afiliación y referidos de Maidecorate Farmasi.',
      keywords: ['afiliación Farmasi', 'referidos Maidecorate Farmasi']
    },
    hero: {
      title: 'Afiliación y referidos',
      subtitle:
        'Espacio pensado para explicar de forma clara la relación entre recomendaciones, enlaces personales y apoyo económico al proyecto.',
      imageKey: 'legal-paper'
    },
    sections: [
      {
        title: 'Cómo funciona la afiliación',
        body:
          'Puedes explicar que algunas compras realizadas desde los enlaces de esta web generan una comisión para sostener el proyecto, sin aumentar el precio de la compra.'
      },
      {
        title: 'Qué se recomienda y por qué',
        body:
          'Este texto refuerza que la selección parte de una curaduría personal y no de un catálogo completo ni de promesas garantizadas.'
      },
      {
        title: 'Transparencia editorial',
        body:
          'Se recomienda mantener visible el aviso de afiliación tanto aquí como en las páginas de recomendaciones y de compra.'
      }
    ],
    faqs: []
  }
};

export const pageKeys = [
  'home',
  'philosophy',
  'cosmetics',
  'recommendations',
  'buy',
  'advisor',
  'contact',
  'about',
  'legal',
  'privacy',
  'cookies',
  'affiliate'
];

export const primaryNavigationKeys = [
  'home',
  'philosophy',
  'cosmetics',
  'recommendations',
  'buy',
  'advisor',
  'contact',
  'about'
];

export const legalNavigationKeys = ['legal', 'privacy', 'cookies', 'affiliate'];
