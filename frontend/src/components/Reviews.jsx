import '../styles/reviews.css';

/**
 * Reviews — Testimonios y Prueba Social
 * 
 * Principios HCI aplicados:
 * - Prominencia-Interpretación de Fogg: Testimonios ubicados estratégicamente
 *   cerca del flujo de reserva para maximizar la percepción de credibilidad
 * - Trust Stack Emocional: El 85% de los consumidores confía en reseñas
 *   tanto como en recomendaciones personales
 * - WCAG 1.4.3: Contraste mínimo 4.5:1 en todo el texto
 */

const REVIEWS_DATA = [
  {
    id: 1,
    text: 'Glaymis transformó completamente mi look. El balayage que me hizo es exactamente lo que quería. Profesional, limpio y con un resultado increíble.',
    author: 'María G.',
    service: 'Balayage Artístico',
    rating: 5,
  },
  {
    id: 2,
    text: 'Llevo años buscando alguien que entienda mi tipo de cabello. Desde el primer corte supe que había encontrado mi estilista de confianza.',
    author: 'Carlos R.',
    service: 'Corte Ejecutivo',
    rating: 5,
  },
  {
    id: 3,
    text: 'El tratamiento de keratina fue increíble. Mi cabello se siente completamente diferente. Se nota que usan productos de primera calidad.',
    author: 'Ana L.',
    service: 'Keratina Alisadora',
    rating: 5,
  },
  {
    id: 4,
    text: 'Me prepararon para mi boda y quedé absolutamente perfecta. El peinado duró toda la noche. Mil gracias por hacer de ese día algo aún más especial.',
    author: 'Valentina P.',
    service: 'Peinado de Novia',
    rating: 5,
  },
  {
    id: 5,
    text: 'La atención al detalle es impresionante. Cada vez que salgo del salón, recibo cumplidos. No podría estar más contenta.',
    author: 'Sofía M.',
    service: 'Color Completo',
    rating: 5,
  },
  {
    id: 6,
    text: 'Excelente ambiente, muy limpio y profesional. Me explicaron todo el proceso antes de empezar y el resultado superó mis expectativas.',
    author: 'Diego A.',
    service: 'Corte con Diseño',
    rating: 5,
  },
];

const StarIcon = () => (
  <svg className="reviews__star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const Reviews = () => {
  return (
    <section id="resenas" className="reviews section" aria-labelledby="reviews-title">
      <div className="container">
        {/* Section Header */}
        <header className="reviews__header">
          <span className="section__label">Testimonios</span>
          <h2 id="reviews-title" className="section__title">
            Lo que dicen nuestros clientes
          </h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            La confianza de nuestra comunidad es nuestro mayor logro.
          </p>
        </header>

        {/* Reviews Grid */}
        <div className="reviews__grid" role="list" aria-label="Reseñas de clientes">
          {REVIEWS_DATA.map((review) => (
            <article
              key={review.id}
              className="reviews__card"
              role="listitem"
            >
              {/* Stars */}
              <div className="reviews__stars" aria-label={`${review.rating} de 5 estrellas`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="reviews__text">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="reviews__author">
                <div className="reviews__avatar" aria-hidden="true">
                  {review.author.charAt(0)}
                </div>
                <div className="reviews__author-info">
                  <span className="reviews__author-name">
                    {review.author}
                  </span>
                  <span className="reviews__author-service">
                    {review.service}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Overall Rating Summary — Trust Stack amplifier */}
        <div className="reviews__summary" aria-label="Puntuación general">
          <div className="reviews__summary-score">4.9</div>
          <div className="reviews__summary-details">
            <div className="reviews__summary-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="reviews__summary-count">
              Basado en 200+ reseñas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
