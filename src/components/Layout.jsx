import { useState } from 'react';
import { legalNavigationKeys, pages, primaryNavigationKeys, siteConfig } from '../data/site.js';
import { SmartLink } from './SmartLink.jsx';

function Navigation({ currentPath, onNavigate }) {
  return (
    <ul className="nav-list">
      {primaryNavigationKeys.map((key) => {
        const page = pages[key];
        const isActive = currentPath === page.path;

        return (
          <li key={page.key}>
            <SmartLink
              href={page.path}
              className={`nav-link ${isActive ? 'is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={onNavigate}
            >
              {page.navLabel}
            </SmartLink>
          </li>
        );
      })}
    </ul>
  );
}

function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar">
      <SmartLink href={siteConfig.links.farmasiStore} className="button button-primary button-compact">
        {siteConfig.buyButtonLabel}
      </SmartLink>
      <SmartLink href={siteConfig.links.contactEmailUrl} className="button button-soft button-compact">
        {siteConfig.emailButtonLabel}
      </SmartLink>
    </div>
  );
}

export function Layout({ currentPage, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`app-shell page-${currentPage.key}`}>
      <a className="skip-link" href="#contenido-principal">
        Ir al contenido
      </a>

      <header className="site-header">
        <div className="site-header-inner">
          <SmartLink href="/" className="brand-lockup" aria-label="Volver al inicio de Maidecorate Farmasi">
            <span className="brand-mark" aria-hidden="true">
              M
            </span>
            <span className="brand-copy">
              <strong>Maidecorate Farmasi</strong>
              <small>Belleza natural y recomendación cercana</small>
            </span>
          </SmartLink>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <Navigation currentPath={currentPage.path} />
          </nav>

          <div className="header-actions">
            <SmartLink href={siteConfig.links.farmasiStore} className="button button-primary button-compact desktop-only">
              {siteConfig.buyButtonLabel}
            </SmartLink>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              Menú
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <Navigation currentPath={currentPage.path} onNavigate={() => setIsMenuOpen(false)} />
        </div>
      </header>

      <main id="contenido-principal">{children}</main>

      <footer className="site-footer">
        <section className="footer-cta">
          <div>
            <h2>Una web más clara para recomendar, orientar y convertir sin perder cercanía.</h2>
            <p>{siteConfig.affiliateNotice}</p>
          </div>
          <div className="action-row">
            <SmartLink href={siteConfig.links.farmasiStore} className="button button-primary">
              {siteConfig.storeCta}
            </SmartLink>
            <SmartLink href={siteConfig.links.contactEmailUrl} className="button button-soft">
              Consultar por email
            </SmartLink>
          </div>
        </section>

        <div className="site-footer-grid">
          <div className="footer-about">
            <h3>Maidecorate Farmasi</h3>
            <p>
              Belleza consciente, productos Farmasi y una experiencia pensada para móvil, SEO y
              conversión sin backend.
            </p>
          </div>

          <div>
            <h3>Explorar</h3>
            <ul className="footer-links">
              {primaryNavigationKeys.map((key) => (
                <li key={key}>
                  <SmartLink href={pages[key].path}>{pages[key].navLabel}</SmartLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul className="footer-links">
              {legalNavigationKeys.map((key) => (
                <li key={key}>
                  <SmartLink href={pages[key].path}>{pages[key].navLabel}</SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="footer-note">
          Este sitio comunica recomendaciones generales de productos y no sustituye asesoramiento
          profesional o sanitario.
        </p>
      </footer>

      <MobileStickyBar />
    </div>
  );
}
