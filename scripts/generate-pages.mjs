import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pageKeys, pages, siteConfig } from '../src/data/site.js';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);
const projectRoot = join(currentDir, '..');
const publicDir = join(projectRoot, 'public');

const ensureDir = async (targetPath) => {
  await mkdir(dirname(targetPath), { recursive: true });
};

const toAbsoluteUrl = (path) => {
  if (path === '/') {
    return siteConfig.siteUrl;
  }

  return `${siteConfig.siteUrl}${path}`;
};

const createBreadcrumbStructuredData = (page) => {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: siteConfig.siteUrl
    }
  ];

  if (page.path !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: page.navLabel,
      item: toAbsoluteUrl(page.path)
    });
  }

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
};

const createStructuredData = (page) => {
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.siteUrl}#organization`,
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/social-share.svg`,
      sameAs: siteConfig.sameAs.filter(Boolean)
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.siteUrl}#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.brandName,
      inLanguage: siteConfig.locale,
      description: siteConfig.defaultDescription
    },
    {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}#person`,
      name: siteConfig.person.name,
      alternateName: siteConfig.person.handle,
      description: siteConfig.person.description,
      jobTitle: siteConfig.person.jobTitle,
      url: toAbsoluteUrl(pages.about.path),
      image: `${siteConfig.siteUrl}/social-share.svg`,
      sameAs: siteConfig.person.sameAs.filter(Boolean)
    },
    {
      '@type': 'WebPage',
      '@id': `${toAbsoluteUrl(page.path)}#webpage`,
      url: toAbsoluteUrl(page.path),
      name: page.seo.title,
      description: page.seo.description,
      isPartOf: {
        '@id': `${siteConfig.siteUrl}#website`
      },
      about: {
        '@id': `${siteConfig.siteUrl}#organization`
      },
      inLanguage: siteConfig.locale
    },
    createBreadcrumbStructuredData(page)
  ];

  if (page.key === 'recommendations') {
    graph.push({
      '@type': 'ItemList',
      name: 'Recomendaciones Farmasi de Maite',
      itemListOrder: 'https://schema.org/ItemListUnordered',
      numberOfItems: 6,
      url: toAbsoluteUrl(page.path)
    });
  }

  if (page.key === 'buy') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
};

const renderHead = (page) => {
  const canonical = toAbsoluteUrl(page.path);
  const structuredData = JSON.stringify(createStructuredData(page), null, 2);

  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.seo.title}</title>
    <meta name="description" content="${page.seo.description}" />
    <meta name="keywords" content="${page.seo.keywords.join(', ')}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta name="theme-color" content="#f4ede6" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${siteConfig.locale}" />
    <meta property="og:site_name" content="${siteConfig.brandName}" />
    <meta property="og:title" content="${page.seo.title}" />
    <meta property="og:description" content="${page.seo.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteConfig.siteUrl}/social-share.svg" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${page.seo.title}" />
    <meta property="twitter:description" content="${page.seo.description}" />
    <meta property="twitter:image" content="${siteConfig.siteUrl}/social-share.svg" />
    <script type="application/ld+json">
${structuredData}
    </script>`;
};

const renderHtml = (page) => `<!doctype html>
<html lang="es">
  <head>
${renderHead(page)}
  </head>
  <body>
    <div id="root" data-page="${page.key}"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

const renderRedirect = ({ targetPath, title, description }) => `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=${targetPath}" />
    <meta name="robots" content="noindex,follow" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${toAbsoluteUrl(targetPath)}" />
  </head>
  <body>
    <p>Redirigiendo a <a href="${targetPath}">${targetPath}</a>...</p>
  </body>
</html>
`;

const renderRobots = () => `User-agent: *
Allow: /

Sitemap: ${siteConfig.siteUrl}/sitemap.xml
`;

const renderSitemap = () => {
  const urls = pageKeys.map((key) => {
    const page = pages[key];

    return `  <url>
    <loc>${toAbsoluteUrl(page.path)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
};

const renderNotFound = () => renderRedirect({
  targetPath: '/',
  title: 'Redirigiendo a Inicio | Maidecorate Farmasi',
  description: 'La página solicitada ya no existe. Te llevamos a la nueva experiencia de Maidecorate Farmasi.'
});

const writeGeneratedFile = async (relativePath, contents) => {
  const targetPath = join(projectRoot, relativePath);
  await ensureDir(targetPath);
  await writeFile(targetPath, contents, 'utf8');
};

const writePublicFile = async (relativePath, contents) => {
  const targetPath = join(publicDir, relativePath);
  await ensureDir(targetPath);
  await writeFile(targetPath, contents, 'utf8');
};

for (const key of pageKeys) {
  const page = pages[key];
  await writeGeneratedFile(page.file, renderHtml(page));
}

await writePublicFile(
  'inicio/index.html',
  renderRedirect({
    targetPath: '/',
    title: 'Inicio | Maidecorate Farmasi',
    description: 'La página Inicio se ha trasladado a la raíz del nuevo sitio de Maidecorate Farmasi.'
  })
);

await writePublicFile(
  'about/index.html',
  renderRedirect({
    targetPath: '/sobre-maite/',
    title: 'Sobre Maite | Maidecorate Farmasi',
    description: 'La antigua ruta About redirige a la nueva página Sobre Maite.'
  })
);

await writePublicFile('robots.txt', renderRobots());
await writePublicFile('sitemap.xml', renderSitemap());
await writePublicFile('404.html', renderNotFound());
