import { FaqList } from '../components/FaqList.jsx';
import { MediaFrame } from '../components/MediaFrame.jsx';
import { SmartLink } from '../components/SmartLink.jsx';
import { pages, siteConfig } from '../data/site.js';

export function HowToBuyPage() {
  const page = pages.buy;

  return (
    <>
      <section className="page-hero">
        <div className="breadcrumb-row">
          <SmartLink href="/">Inicio</SmartLink>
          <span>/</span>
          <span>{page.shortLabel}</span>
        </div>
        <div className="page-hero-grid">
          <div className="section-copy">
            <h1>{page.hero.title}</h1>
            <p className="lead">{page.hero.subtitle}</p>
            <p className="affiliate-note">{siteConfig.affiliateNotice}</p>
          </div>
          <MediaFrame imageKey={page.hero.imageKey} alt={page.hero.title} priority />
        </div>
      </section>

      <section className="steps-grid">
        {page.steps.map((step, index) => (
          <article key={step.title} className="step-card">
            <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </article>
        ))}
      </section>

      <section className="cta-band cta-band-compact">
        <div className="cta-copy">
          <h2>Compra, registro y acompañamiento en una sola ruta clara</h2>
          <p>La página convierte el proceso actual en una experiencia más visual y más fácil de seguir desde móvil.</p>
        </div>
        <div className="action-row">
          <SmartLink href={siteConfig.links.farmasiStore} className="button button-primary">
            {siteConfig.storeCta}
          </SmartLink>
          <SmartLink href={siteConfig.links.contactEmailUrl} className="button button-soft">
            {siteConfig.helpCta}
          </SmartLink>
        </div>
      </section>

      <section className="list-panel">
        <div className="section-copy">
          <h2>Qué gana esta página con el rediseño</h2>
        </div>
        <ul className="check-list">
          {page.supportPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <FaqList items={page.faqs} />
    </>
  );
}
