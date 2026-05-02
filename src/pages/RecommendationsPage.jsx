import { useState } from 'react';
import { FaqList } from '../components/FaqList.jsx';
import { MediaFrame } from '../components/MediaFrame.jsx';
import { SmartLink } from '../components/SmartLink.jsx';
import { productFilters, products } from '../data/products.js';
import { pages, siteConfig } from '../data/site.js';
import { createAdviceHref } from '../utils.js';

export function RecommendationsPage() {
  const page = pages.recommendations;
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.filters.includes(activeFilter) || product.category === activeFilter);

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
            <p>{page.affiliateCopy}</p>
          </div>
          <MediaFrame imageKey={page.hero.imageKey} alt={page.hero.title} priority />
        </div>
      </section>

      <section className="filter-panel">
        <div className="filter-row" role="tablist" aria-label="Filtros de recomendaciones">
          {productFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              className={`filter-chip ${activeFilter === filter.id ? 'is-active' : ''}`}
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="product-grid">
        {filteredProducts.map((product) => (
          <article key={product.id} className="product-card">
            <MediaFrame imageKey={product.imageKey} alt={product.alt} />
            <div className="product-card-copy">
              <span className="card-tag">{product.category}</span>
              <h2>{product.name}</h2>
              <p>
                <strong>Para quién puede ser útil:</strong> {product.audience}
              </p>
              <p>
                <strong>Por qué lo recomienda Maite:</strong> {product.reason}
              </p>
            </div>
            <div className="card-actions">
              <SmartLink href={product.affiliateUrl} className="button button-primary">
                Ver producto
              </SmartLink>
              <SmartLink href={createAdviceHref(product.name)} className="button button-soft">
                Pedir consejo
              </SmartLink>
            </div>
          </article>
        ))}
      </section>

      <section className="affiliate-strip">
        <p>{siteConfig.affiliateNotice}</p>
      </section>

      <FaqList items={page.faqs} />
    </>
  );
}
