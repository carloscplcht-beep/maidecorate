import { pages, siteConfig } from '../data/site.js';
import { MediaFrame } from '../components/MediaFrame.jsx';
import { SmartLink } from '../components/SmartLink.jsx';

export function HomePage() {
  const page = pages.home;

  return (
    <>
      <section className="hero hero-home">
        <div className="hero-copy">
          <h1>{page.hero.title}</h1>
          <p className="lead">{page.hero.subtitle}</p>
          <div className="action-row">
            {page.hero.ctas.map((cta) => (
              <SmartLink
                key={cta.label}
                href={cta.path || cta.href}
                className={`button ${cta.path ? 'button-primary' : 'button-soft'}`}
              >
                {cta.label}
              </SmartLink>
            ))}
          </div>
        </div>

        <div className="hero-media-stack">
          <MediaFrame
            imageKey={page.hero.imageKey}
            alt="Hero editorial de belleza natural con tocador elegante y estética consciente."
            priority
          />
          <article className="floating-note">
            <strong>Farmasi + Maidecorate</strong>
            <p>Selección honesta, compra oficial y apoyo cercano para elegir sin prisas.</p>
          </article>
        </div>
      </section>

      <section className="editorial-panel">
        <div className="section-copy">
          <h2>Una entrada visual a todo el ecosistema Maidecorate Farmasi</h2>
          {page.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="feature-grid">
        {page.featureCards.map((card) => (
          <article key={card.title} className="feature-card">
            <MediaFrame imageKey={card.imageKey} alt={card.title} />
            <div className="feature-card-copy">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <SmartLink href={card.path} className="text-link">
                Entrar en {card.title}
              </SmartLink>
            </div>
          </article>
        ))}
      </section>

      <section className="trust-section">
        <div className="section-copy section-copy-center">
          <h2>Confianza, claridad y una experiencia más cuidada</h2>
          <p>La conversión no depende de saturar la página, sino de hacer más legible cada decisión.</p>
        </div>
        <div className="trust-grid">
          {page.trustPoints.map((point) => (
            <article key={point.title} className="trust-card">
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <p>{page.quote}</p>
      </section>

      <section className="cta-band">
        <div className="cta-copy">
          <h2>{page.finalCta.title}</h2>
          <p>{page.finalCta.description}</p>
          <p className="affiliate-note">{siteConfig.affiliateNotice}</p>
        </div>
        <div className="action-row">
          <SmartLink href={page.finalCta.primaryHref} className="button button-primary">
            {page.finalCta.primaryLabel}
          </SmartLink>
          <SmartLink href={page.finalCta.secondaryHref} className="button button-soft">
            {page.finalCta.secondaryLabel}
          </SmartLink>
        </div>
      </section>
    </>
  );
}
