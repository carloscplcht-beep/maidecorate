# Maidecorate Farmasi Web

Nueva versión estática de la web de Maidecorate Farmasi, construida con React + Vite para poder desplegarse en GitHub Pages, Vercel o Netlify sin backend ni base de datos.

## Qué incluye

- Rutas limpias para Inicio, Nuestra filosofía, Cosmética natural, Mis recomendaciones, Cómo comprar, Asesor IA, Contacto y Sobre Maite.
- Contenidos editables en archivos JavaScript.
- Recomendaciones y enlaces Farmasi editables en `src/data/products.js`.
- SEO por página con `title`, `description`, Open Graph, Twitter cards, canonical y JSON-LD.
- `sitemap.xml`, `robots.txt`, `favicon.svg`, `social-share.svg` y páginas legales base.
- Asesor IA local basado en preguntas y respuestas, sin API externa.
- Botones visibles en móvil para comprar en Farmasi y consultar por email.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Vite mostrará una URL local, normalmente `http://localhost:5173/`.

## Build de producción

```bash
npm run build
```

El resultado se genera en `dist/`.

## Vista previa del build

```bash
npm run preview
```

## Cómo cambiar textos y SEO

Edita `src/data/site.js`.

Ahí encontrarás:

- Nombre de marca, dominio, redes y enlaces principales.
- Navegación principal y páginas legales.
- Textos de cada hero, secciones, FAQs y llamadas a la acción.
- SEO de cada página.
- Aviso de afiliación.
- Prompts sugeridos para nuevas imágenes.

Después de editar páginas o SEO, ejecuta:

```bash
npm run sync:pages
```

Este comando regenera los HTML estáticos de cada ruta con sus metadatos.

## Cómo cambiar productos

Edita `src/data/products.js`.

Cada producto tiene estos campos:

- `name`: nombre visible.
- `category`: categoría principal.
- `filters`: filtros en los que aparece.
- `audience`: para quién puede ser útil.
- `reason`: por qué lo recomienda Maite.
- `productUrl`: enlace individual de producto o tienda Farmasi general si no hay enlace confirmado.
- `imageKey`: clave de imagen usada desde `src/data/media.js`.
- `alt`: texto alternativo SEO y accesible.

Para cambiar todos los enlaces de compra, busca `https://www.farmasi.es/` y sustitúyelo por el enlace personal definitivo.

## Cómo cambiar imágenes

Las imágenes activas se gestionan en `src/data/media.js`.

Carpetas importantes:

- `src/assets/images/placeholders/`: placeholders premium usados por defecto.
- `src/assets/images/current/`: carpeta opcional para copias locales de imágenes públicas detectadas en la web WordPress actual. No se versiona por defecto para evitar subir una caché pesada de imágenes.
- `src/assets/images/brand/`: carpeta preparada para recursos propios de marca.

Para sustituir una imagen:

1. Añade el archivo nuevo a `src/assets/images/`.
2. Importa ese archivo en `src/data/media.js`.
3. Cambia el `src` de la clave correspondiente.
4. Revisa que el `alt` de cada uso siga describiendo bien la imagen.

Los prompts para generar nuevas imágenes están en `IMAGE_PROMPTS.md`.

## Cómo cambiar enlaces Farmasi, email e Instagram

Edita `siteConfig.links` en `src/data/site.js`.

Campos habituales:

- `farmasiStore`: enlace principal a la tienda oficial Farmasi.
- `contactEmailUrl`: enlace `mailto:` principal para consultas.
- `email`: correo usado por el formulario estático.
- `instagram`: perfil social si existe una URL real confirmada.
- `instagramStatus`: marca si el enlace de Instagram está confirmado o pendiente.

El email definitivo de contacto se configura en `src/data/site.js`, en `siteConfig.contactEmail`, `siteConfig.contactEmailUrl` y `siteConfig.links.contactEmailUrl`.

## Despliegue en Vercel

1. Sube el proyecto a GitHub.
2. Crea un proyecto en Vercel e importa el repositorio.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Cuando el dominio esté listo, añade `maidecoratefarmasi.com` en Project Settings > Domains.

## Despliegue en Netlify

1. Sube el proyecto a GitHub.
2. Crea un nuevo sitio desde el repositorio.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Añade el dominio en Domain management.

## Despliegue en GitHub Pages

Si se publica con dominio propio en la raíz, no hace falta cambiar `base`.

Si se publica bajo una ruta tipo `usuario.github.io/repositorio/`, crea un archivo `.env.production` con:

```bash
VITE_BASE_PATH=/nombre-del-repositorio/
```

Después ejecuta:

```bash
npm run build
```

Publica la carpeta `dist/` en GitHub Pages. Si usas el dominio `maidecoratefarmasi.com`, añade un archivo `CNAME` con ese dominio dentro de `public/` cuando ya quieras activar el dominio.

## Integración con la web WordPress actual

Hay dos caminos recomendados:

1. Sustituir WordPress por la nueva web estática.

Apunta el dominio `maidecoratefarmasi.com` al hosting elegido, por ejemplo Vercel o Netlify. Mantén el WordPress antiguo temporalmente en `maidecoratefarmasi.wordpress.com` mientras revisas que todas las rutas y enlaces funcionan.

2. Mantener WordPress y enlazar esta web como complemento.

Despliega esta web en un subdominio como `nueva.maidecoratefarmasi.com` o `web.maidecoratefarmasi.com`. Desde WordPress, añade botones hacia las páginas clave: recomendaciones, cómo comprar, asesor IA y contacto.

## Rutas incluidas

- `/`
- `/nuestra-filosofia/`
- `/cosmetica-natural/`
- `/mis-recomendaciones/`
- `/como-comprar/`
- `/asesor-ia-de-productos/`
- `/contacto/`
- `/sobre-maite/`
- `/aviso-legal/`
- `/privacidad/`
- `/cookies/`
- `/afiliacion/`

También se crean redirecciones estáticas para:

- `/inicio/` hacia `/`
- `/about/` hacia `/sobre-maite/`

## Checklist antes de publicar

- Revisar que el email de contacto definitivo está configurado en `src/data/site.js`.
- Sustituir enlaces Farmasi por los enlaces personales definitivos.
- Completar aviso legal, privacidad, cookies y afiliación con datos reales.
- Sustituir placeholders por fotos definitivas si se dispone de ellas.
- Ejecutar `npm run build`.
- Revisar móvil, tablet y escritorio.
- Revisar Lighthouse en la URL desplegada.
