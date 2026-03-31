import '../styles/floating-cta.css';

/**
 * FloatingCTA — Botón fijo de reserva (Mobile-First)
 * 
 * Principios HCI aplicados:
 * - Zona del Pulgar: Posicionado en la parte inferior central de la pantalla,
 *   dentro del alcance natural del dedo pulgar en dispositivos móviles
 * - Fitts's Law: Botón grande (48px alto) que reduce el tiempo de adquisición
 * - Von Restorff (Efecto de Aislamiento): El único elemento fijo con color
 *   Midnight Blue (#191970) sobre fondo blanco, haciéndolo memorable
 * - WCAG 2.5.8: Objetivo táctil de 48x200px, muy superior al mínimo de 24x24px
 */

const FloatingCTA = () => {
  const scrollToBooking = () => {
    const target = document.querySelector('#reservar');
    if (target) {
      const headerOffset = 72;
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="floating-cta" role="complementary" aria-label="Acción rápida">
      <button
        className="floating-cta__btn"
        onClick={scrollToBooking}
        aria-label="Reservar cita ahora"
      >
        {/* Calendar icon — flat vector */}
        <svg
          className="floating-cta__btn-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Reservar Cita
        {/* Pulse animation — Von Restorff attention draw */}
        <span className="floating-cta__pulse" aria-hidden="true" />
      </button>
    </div>
  );
};

export default FloatingCTA;
