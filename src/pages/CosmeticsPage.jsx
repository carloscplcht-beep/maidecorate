import { FaqList } from '../components/FaqList.jsx';
import { MediaFrame } from '../components/MediaFrame.jsx';
import { SmartLink } from '../components/SmartLink.jsx';
import { pages } from '../data/site.js';

export function CosmeticsPage() {
  const page = pages.cosmetics;

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
            <p>{page.overview}</p>
          </div>
          <MediaFrame imageKey={page.hero.imageKey} alt={page.hero.title} priority />
        </div>
      </section>

      <section className="category-grid">
        {page.categories.map((category) => (
          <article key={category.title} className="category-card">
            <MediaFrame imageKey={category.imageKey} alt={category.title} />
            <div className="feature-card-copy">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="list-panel">
        <div className="section-copy">
          <h2>Cómo se cuenta la cosmética en esta nueva versión</h2>
        </div>
        <ul className="check-list">
          {page.ingredientNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="link-cluster">
        {page.contextualLinks.map((link) => (
          <SmartLink key={link.label} href={link.path} className="button button-soft">
            {link.label}
          </SmartLink>
        ))}
      </section>

      <FaqList items={page.faqs} />
    </>
  );
}
