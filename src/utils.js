import { siteConfig } from './data/site.js';

export const isExternalHref = (href = '') => /^(https?:|mailto:|tel:)/i.test(href);

export const withBase = (path = '/') => {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  if (path === '/') {
    return normalizedBase;
  }

  return `${normalizedBase}${path.replace(/^\/+/, '')}`;
};

export const resolveHref = (href = '/') => (isExternalHref(href) ? href : withBase(href));

export const externalProps = (href = '') =>
  isExternalHref(href)
    ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {};

export const createAdviceHref = (productName = 'estos productos') => {
  const message = `Hola Maite, me gustaría tu consejo sobre ${productName} en Farmasi.`;

  return `${siteConfig.contactEmailUrl}&body=${encodeURIComponent(message)}`;
};

export const createMailtoHref = ({ name, email, message }) => {
  const subject = `Consulta desde la web de Maidecorate Farmasi: ${name}`;
  const body = `Nombre: ${name}%0D%0ACorreo: ${email}%0D%0A%0D%0AMensaje:%0D%0A${encodeURIComponent(
    message
  )}`;

  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
};
