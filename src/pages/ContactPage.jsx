import { useState } from 'react';
import { MediaFrame } from '../components/MediaFrame.jsx';
import { SmartLink } from '../components/SmartLink.jsx';
import { pages } from '../data/site.js';
import { createMailtoHref } from '../utils.js';

export function ContactPage() {
  const page = pages.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = createMailtoHref(formData);
  };

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

      <section className="contact-grid">
        <div className="contact-methods">
          {page.methods.map((method) => (
            <article key={method.title} className="contact-card">
              <h2>{method.title}</h2>
              <p>{method.description}</p>
              <SmartLink href={method.href} className="button button-soft">
                {method.label}
              </SmartLink>
            </article>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Formulario estático</h2>
          <p>Este formulario abre tu cliente de correo con el mensaje preparado, sin depender de backend.</p>

          <label className="field">
            <span>Nombre</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label className="field">
            <span>Correo electrónico</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label className="field">
            <span>Mensaje</span>
            <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required />
          </label>

          <button type="submit" className="button button-primary">
            Preparar correo
          </button>
        </form>
      </section>
    </>
  );
}
