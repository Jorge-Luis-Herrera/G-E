import '../styles/hero.css';

/**
 * Hero Section — Primera impresión visual
 * 
 * Principios HCI aplicados:
 * - Efecto Estética-Usabilidad: Diseño limpio → percepción de fiabilidad (Trust Stack)
 * - Von Restorff: El CTA "Reservar Cita" destaca del resto por contraste cromático
 * - Fitts's Law: Botón CTA grande (48px alto) y fácilmente alcanzable
 * - Trust Stack: Indicadores sociales (años, clientes, rating) cerca del CTA
 * 
 * Nota: Se forma impresión visual en ~50ms — por eso se prioriza
 * blanco + espacio + tipografía premium + mínimo ruido visual
 */

const Hero = () => {
  const scrollToBooking = (e) => {
    e.preventDefault();
    const target = document.querySelector('#reservar');
    if (target) {
      const headerOffset = 72;
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    const target = document.querySelector('#servicios');
    if (target) {
      const headerOffset = 72;
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        {/* Label with activity indicator */}
        <div className="hero__label">
          <span className="hero__label-dot" aria-hidden="true" />
          <span>Estudio de Estilismo</span>
        </div>

        {/* Main Heading — Single H1 per page (SEO) */}
        <h1 id="hero-title" className="hero__title">
          Tu estilo,{' '}
          <span className="hero__title-accent">
            nuestra pasión
          </span>
        </h1>

        <p className="hero__description">
          Expertos en cortes clásicos, coloración vanguardista y tratamientos
          capilares de alta gama. Cada visita es una experiencia personalizada
          diseñada para ti.
        </p>

        {/* CTAs — Von Restorff: Primary button contrasts strongly */}
        <div className="hero__actions">
          <a
            href="#reservar"
            className="btn btn--primary"
            onClick={scrollToBooking}
            role="button"
          >
            {/* Calendar icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Reservar Cita
          </a>
          <a
            href="#servicios"
            className="btn btn--outline"
            onClick={scrollToServices}
            role="button"
          >
            Ver Servicios
          </a>
        </div>

        {/* Trust Indicators — Trust Stack: social proof numbers */}
        <div className="hero__trust" aria-label="Indicadores de confianza">
          <div className="hero__trust-item">
            <span className="hero__trust-number">8+</span>
            <span className="hero__trust-text">Años</span>
          </div>
          <div className="hero__trust-divider" aria-hidden="true" />
          <div className="hero__trust-item">
            <span className="hero__trust-number">2K+</span>
            <span className="hero__trust-text">Clientes</span>
          </div>
          <div className="hero__trust-divider" aria-hidden="true" />
          <div className="hero__trust-item">
            <span className="hero__trust-number">4.9</span>
            <span className="hero__trust-text">Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator — visual affordance */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
