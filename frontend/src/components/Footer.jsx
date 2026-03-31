import '../styles/footer.css';

/**
 * Footer — Información de contacto y enlaces
 * Trust Stack Sistémica: Consistencia de marca en todos los puntos de contacto
 */

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <img src="/Resources/Logotype2.png" alt="" className="footer__brand-logo" width="120" height="48" />
            <p className="footer__brand-description">
              Estudio de estilismo capilar de alta gama. Cada visita es una
              experiencia personalizada diseñada para transformar tu imagen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer__column-title">Navegación</h3>
            <nav className="footer__links" aria-label="Enlaces del pie de página">
              <a href="#inicio" className="footer__link">Inicio</a>
              <a href="#servicios" className="footer__link">Servicios</a>
              <a href="#galeria" className="footer__link">Galería</a>
              <a href="#equipo" className="footer__link">Equipo</a>
              <a href="#reservar" className="footer__link">Reservar</a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer__column-title">Servicios</h3>
            <div className="footer__links">
              <span className="footer__link">Cortes Clásicos</span>
              <span className="footer__link">Coloración</span>
              <span className="footer__link">Tratamientos</span>
              <span className="footer__link">Peinados</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer__column-title">Contacto</h3>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Tu Ciudad, Venezuela</span>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+58 412 000 0000</span>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Lun — Sáb: 9am — 7pm</span>
            </div>
          </div>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} Glaymis Estilista. Todos los derechos reservados.
          </p>
          <div className="footer__socials" aria-label="Redes sociales">
            <a href="#" className="footer__social" aria-label="Instagram" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="WhatsApp" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Facebook" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
