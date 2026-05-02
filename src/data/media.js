import heroEditorial from '../assets/images/placeholders/hero-editorial.svg';
import naturalCosmetics from '../assets/images/placeholders/natural-cosmetics.svg';
import recommendationsGrid from '../assets/images/placeholders/recommendations-grid.svg';
import howToBuy from '../assets/images/placeholders/how-to-buy.svg';
import aiAdvisor from '../assets/images/placeholders/ai-advisor.svg';
import contactEditorial from '../assets/images/placeholders/contact-editorial.svg';
import hairRitual from '../assets/images/placeholders/hair-ritual.svg';
import legalPaper from '../assets/images/placeholders/legal-paper.svg';
import productFaceCare from '../assets/images/placeholders/product-face-care.svg';
import productMakeup from '../assets/images/placeholders/product-makeup.svg';
import productFragrance from '../assets/images/placeholders/product-fragrance.svg';
import legacyMaitePortrait from '../assets/images/legacy/maite-portrait.webp';
import legacyLifestyleMirror from '../assets/images/legacy/lifestyle-mirror.webp';
import productVitaminCGlowSerum from '../assets/images/products/vitamin-c-glow-serum.webp';
import productBbCreamLight from '../assets/images/products/bb-cream-light.webp';
import productCalendulaBalm from '../assets/images/products/calendula-balm.webp';
import productRetroRose04 from '../assets/images/products/retro-rose-04.webp';
import productPinkTourmalineGloss from '../assets/images/products/ultimate-shine-lip-gloss-pink-tourmaline.webp';

export const mediaLibrary = {
  'hero-editorial': {
    src: heroEditorial,
    replacementNote: 'Sustituir por hero fotográfico principal si se dispone de imagen definitiva.'
  },
  'philosophy-editorial': {
    src: legacyLifestyleMirror,
    replacementNote: 'Imagen lifestyle recuperada de la web anterior y optimizada para el nuevo diseño.'
  },
  'natural-cosmetics': {
    src: naturalCosmetics,
    replacementNote: 'Sustituir por still life premium de cosmética natural y rutina.'
  },
  'recommendations-grid': {
    src: recommendationsGrid,
    replacementNote: 'Sustituir por collage editorial de productos Farmasi o categorías seleccionadas.'
  },
  'how-to-buy': {
    src: howToBuy,
    replacementNote: 'Sustituir por ilustración o captura de flujo de compra en la tienda oficial.'
  },
  'ai-advisor': {
    src: aiAdvisor,
    replacementNote: 'Sustituir por imagen de apoyo del asesor IA o mockup definitivo.'
  },
  'contact-editorial': {
    src: contactEditorial,
    replacementNote: 'Sustituir por foto cercana de contacto o detalle lifestyle de marca personal.'
  },
  'maite-portrait': {
    src: legacyMaitePortrait,
    replacementNote: 'Retrato real de Maite recuperado de la web anterior y optimizado para carga rápida.'
  },
  'hair-ritual': {
    src: hairRitual,
    replacementNote: 'Sustituir por escena capilar o set de básicos de rutina.'
  },
  'legal-paper': {
    src: legalPaper,
    replacementNote: 'Placeholder documental para páginas legales.'
  },
  'product-face-care': {
    src: productFaceCare,
    replacementNote: 'Sustituir por producto facial real o pack de rutina.'
  },
  'product-makeup': {
    src: productMakeup,
    replacementNote: 'Sustituir por producto de maquillaje real.'
  },
  'product-fragrance': {
    src: productFragrance,
    replacementNote: 'Sustituir por fragancia o composición premium.'
  },
  'facial-routine': {
    src: productFaceCare,
    replacementNote: 'Sustituir por escena de rutina facial.'
  },
  'elegant-makeup': {
    src: productMakeup,
    replacementNote: 'Sustituir por composición de maquillaje elegante.'
  },
  'wellness-edit': {
    src: naturalCosmetics,
    replacementNote: 'Sustituir por escena de bienestar o ritual de autocuidado.'
  },
  'serum-vitamin-c': {
    src: productVitaminCGlowSerum,
    replacementNote: 'Imagen real del sérum Vitamin C Glow Serum recuperada de la web anterior.'
  },
  'calendula-balm': {
    src: productCalendulaBalm,
    replacementNote: 'Imagen real del bálsamo de caléndula recuperada de la web anterior.'
  },
  'bb-cream': {
    src: productBbCreamLight,
    replacementNote: 'Imagen real de la BB Cream recuperada de la web anterior.'
  },
  'retro-rose-lipstick': {
    src: productRetroRose04,
    replacementNote: 'Imagen real del labial Retro Rose 04 recuperada de la web anterior.'
  },
  'pink-tourmaline-gloss': {
    src: productPinkTourmalineGloss,
    replacementNote: 'Imagen real del gloss Pink Tourmaline recuperada de la web anterior.'
  },
  'tea-tree-hair': {
    src: hairRitual,
    replacementNote: 'Sustituir por rutina capilar Tea Tree.'
  },
  'signature-fragrance': {
    src: productFragrance,
    replacementNote: 'Sustituir por fragancia Farmasi definitiva.'
  },
  'starter-edit': {
    src: recommendationsGrid,
    replacementNote: 'Sustituir por pack de iniciación o selección de básicos.'
  }
};

export const getMedia = (key) => mediaLibrary[key] || mediaLibrary['hero-editorial'];
