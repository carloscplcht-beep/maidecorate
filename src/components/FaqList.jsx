export function FaqList({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="faq-section">
      <div className="section-copy section-copy-center">
        <h2>Preguntas frecuentes</h2>
        <p>Un bloque pensado para reforzar claridad, SEO natural y confianza de compra.</p>
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
