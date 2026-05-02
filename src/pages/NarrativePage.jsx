import { FaqList } from '../components/FaqList.jsx';
import { MediaFrame } from '../components/MediaFrame.jsx';
import { SmartLink } from '../components/SmartLink.jsx';

export function NarrativePage({ page }) {
  const sections = page.sections || page.storySections || [];

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
          </div>
          <MediaFrame imageKey={page.hero.imageKey} alt={page.hero.title} priority />
        </div>
      </section>

      {page.values?.length ? (
        <section className="value-grid">
          {page.values.map((value) => (
            <article key={value.title} className="value-card">
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </article>
          ))}
        </section>
      ) : null}

      {sections.length ? (
        <section className="story-stack">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className={`story-panel ${index % 2 === 1 ? 'story-panel-reverse' : ''}`}
            >
              <div className="section-copy">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
              {section.imageKey ? <MediaFrame imageKey={section.imageKey} alt={section.title} /> : null}
            </article>
          ))}
        </section>
      ) : null}

      {page.promises?.length ? (
        <section className="list-panel">
          <div className="section-copy">
            <h2>Lo que transmite esta nueva versión</h2>
          </div>
          <ul className="check-list">
            {page.promises.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {page.quote ? (
        <section className="quote-band">
          <p>{page.quote}</p>
        </section>
      ) : null}

      {page.contextualLinks?.length ? (
        <section className="link-cluster">
          {page.contextualLinks.map((link) => (
            <SmartLink key={link.label} href={link.path} className="button button-soft">
              {link.label}
            </SmartLink>
          ))}
        </section>
      ) : null}

      <FaqList items={page.faqs} />
    </>
  );
}
