import { startTransition, useState } from 'react';
import { MediaFrame } from '../components/MediaFrame.jsx';
import { SmartLink } from '../components/SmartLink.jsx';
import { products } from '../data/products.js';
import { pages, siteConfig } from '../data/site.js';
import { createAdviceHref } from '../utils.js';

const initialAnswers = {
  skinType: 'Normal',
  goal: 'Luminosidad',
  productFocus: 'Cuidado facial',
  preference: 'Muy natural',
  experience: 'Estoy empezando'
};

function buildAdvisorResult(answers) {
  const requestedCategory =
    answers.productFocus === 'Aún no lo sé'
      ? answers.goal === 'Acabado natural'
        ? 'maquillaje'
        : 'facial'
      : answers.productFocus.toLowerCase().includes('cabello')
        ? 'cabello'
        : answers.productFocus.toLowerCase().includes('fragancia')
          ? 'fragancias'
          : answers.productFocus.toLowerCase().includes('maquillaje')
            ? 'maquillaje'
            : 'facial';

  const focusFilter = answers.experience === 'Estoy empezando' ? 'iniciacion' : 'favoritos';

  const recommendedProducts = [...products]
    .filter(
      (product) =>
        product.category === requestedCategory ||
        product.filters.includes(requestedCategory) ||
        product.filters.includes(focusFilter)
    )
    .sort((a, b) => {
      const aMatchesCategory = a.category === requestedCategory ? 0 : 1;
      const bMatchesCategory = b.category === requestedCategory ? 0 : 1;

      return aMatchesCategory - bMatchesCategory;
    })
    .slice(0, 3);

  const summaryMap = {
    facial:
      'Tu combinación apunta a una rutina facial amable, luminosa y fácil de sostener en el tiempo.',
    maquillaje:
      'Todo indica que te encajan mejor propuestas de maquillaje natural, pulido y cómodas de aplicar.',
    cabello:
      'La mejor puerta de entrada para ti parece estar en básicos capilares claros y sin complicaciones.',
    fragancias:
      'Tu perfil encaja con una elección sensorial y personal dentro de fragancias ligeras y elegantes.'
  };

  return {
    category: requestedCategory,
    summary: summaryMap[requestedCategory],
    nextStep:
      recommendedProducts.length > 0
        ? 'Puedes revisar estas sugerencias y, si quieres afinar, escribir directamente a Maite.'
        : 'Lo ideal es revisar primero la selección general y comentar con Maite qué sensaciones buscas.'
        ,
    recommendedProducts
  };
}

export function AdvisorPage() {
  const page = pages.advisor;
  const [answers, setAnswers] = useState(initialAnswers);
  const [result, setResult] = useState(buildAdvisorResult(initialAnswers));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    startTransition(() => {
      setResult(buildAdvisorResult(answers));
    });
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
            <p className="affiliate-note">{page.disclaimer}</p>
          </div>
          <MediaFrame imageKey={page.hero.imageKey} alt={page.hero.title} priority />
        </div>
      </section>

      <section className="advisor-grid">
        <form className="advisor-form" onSubmit={handleSubmit}>
          <h2>Responde en menos de un minuto</h2>
          {page.questions.map((question) => (
            <label key={question.id} className="field">
              <span>{question.label}</span>
              <select name={question.id} value={answers[question.id]} onChange={handleChange}>
                {question.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button type="submit" className="button button-primary">
            Ver orientación
          </button>
        </form>

        <article className="advisor-result">
          <span className="card-tag">Categoría sugerida: {result.category}</span>
          <h2>Orientación para tu momento</h2>
          <p>{result.summary}</p>
          <p>{result.nextStep}</p>

          <div className="advisor-products">
            {result.recommendedProducts.map((product) => (
              <article key={product.id} className="advisor-product">
                <h3>{product.name}</h3>
                <p>{product.shortReason}</p>
                <div className="card-actions">
                  <SmartLink href={product.productUrl} className="text-link">
                    Ver producto
                  </SmartLink>
                  <SmartLink href={createAdviceHref(product.name)} className="text-link">
                    Consultar con Maite
                  </SmartLink>
                </div>
              </article>
            ))}
          </div>

          <div className="action-row">
            <SmartLink href="/mis-recomendaciones/" className="button button-soft">
              Ir a recomendaciones
            </SmartLink>
            <SmartLink href={siteConfig.links.contactEmailUrl} className="button button-primary">
              Consultar por email
            </SmartLink>
          </div>
        </article>
      </section>
    </>
  );
}
