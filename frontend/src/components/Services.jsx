import { useState } from 'react';
import '../styles/services.css';

/**
 * Services — Menú de Servicios con Divulgación Progresiva
 * 
 * Principios HCI aplicados:
 * - Ley de Hick: Se agrupan ~15 servicios en 4 categorías lógicas.
 *   Esto reduce las opciones iniciales de 15+ a solo 4, reduciendo
 *   el tiempo de decisión logarítmicamente (T = a + b·log₂(n+1))
 * - Divulgación Progresiva: Los servicios se revelan solo al expandir cada categoría
 * - WCAG 2.5.8: Todos los botones de categoría ≥ 44px de alto
 * - WCAG 3.3.7: Sin entrada redundante en el flujo hacia reserva
 * - Prominencia-Interpretación de Fogg: Insignia de higiene ubicada
 *   estratégicamente al final de la sección, cerca del flujo de reserva
 */

const SERVICES_DATA = [
  {
    id: 'classic',
    title: 'Cortes Clásicos',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>
    ),
    services: [
      { name: 'Corte Ejecutivo', duration: '30 min', price: '$15' },
      { name: 'Corte con Diseño', duration: '45 min', price: '$20' },
      { name: 'Corte + Barba Perfilada', duration: '50 min', price: '$22' },
      { name: 'Corte Infantil', duration: '25 min', price: '$10' },
    ],
  },
  {
    id: 'color',
    title: 'Coloración Vanguardista',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
    services: [
      { name: 'Color Completo', duration: '90 min', price: '$45' },
      { name: 'Mechas / Highlights', duration: '120 min', price: '$60' },
      { name: 'Balayage Artístico', duration: '150 min', price: '$75' },
      { name: 'Retoque de Raíz', duration: '60 min', price: '$30' },
    ],
  },
  {
    id: 'treatments',
    title: 'Tratamientos Capilares',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    services: [
      { name: 'Hidratación Profunda', duration: '45 min', price: '$25' },
      { name: 'Keratina Alisadora', duration: '120 min', price: '$80' },
      { name: 'Tratamiento Anticaída', duration: '40 min', price: '$30' },
      { name: 'Mascarilla Nutritiva', duration: '30 min', price: '$18' },
    ],
  },
  {
    id: 'styling',
    title: 'Peinados y Estilismo',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    services: [
      { name: 'Peinado para Evento', duration: '60 min', price: '$35' },
      { name: 'Peinado de Novia', duration: '90 min', price: '$65' },
      { name: 'Ondas y Rizos', duration: '45 min', price: '$25' },
      { name: 'Recogido Elegante', duration: '75 min', price: '$45' },
    ],
  },
];

const Services = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const scrollToBooking = () => {
    const target = document.querySelector('#reservar');
    if (target) {
      const headerOffset = 72;
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="services section" aria-labelledby="services-title">
      <div className="container">
        {/* Section Header */}
        <header className="services__header">
          <span className="section__label">Nuestros Servicios</span>
          <h2 id="services-title" className="section__title">
            Cada detalle, perfeccionado
          </h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Servicios diseñados para tu estilo único. Desde lo clásico
            hasta lo más innovador.
          </p>
        </header>

        {/* Categories Accordion — Ley de Hick: 4 opciones, no 16 */}
        <div className="services__grid" role="list" aria-label="Categorías de servicios">
          {SERVICES_DATA.map((category) => {
            const isOpen = openCategory === category.id;
            
            return (
              <div
                key={category.id}
                className={`services__category ${isOpen ? 'services__category--open' : ''}`}
                role="listitem"
              >
                {/* Category Toggle — acts as accordion header */}
                <button
                  className="services__category-header"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isOpen}
                  aria-controls={`services-${category.id}`}
                  id={`services-header-${category.id}`}
                >
                  <div className="services__category-header-left">
                    <div className="services__category-icon">
                      {category.icon}
                    </div>
                    <div>
                      <div className="services__category-title">
                        {category.title}
                      </div>
                      <div className="services__category-count">
                        {category.services.length} servicios
                      </div>
                    </div>
                  </div>
                  
                  {/* Chevron */}
                  <div className="services__category-chevron" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {/* Category Content — Divulgación Progresiva */}
                <div
                  id={`services-${category.id}`}
                  className="services__category-content"
                  role="region"
                  aria-labelledby={`services-header-${category.id}`}
                  aria-hidden={!isOpen}
                >
                  <div className="services__list">
                    {category.services.map((service, index) => (
                      <div key={index} className="services__item">
                        <div className="services__item-info">
                          <span className="services__item-name">
                            {service.name}
                          </span>
                          <span className="services__item-duration">
                            {service.duration}
                          </span>
                        </div>
                        <div className="services__item-right">
                          <span className="services__item-price">
                            {service.price}
                          </span>
                          <button
                            className="services__item-book"
                            onClick={scrollToBooking}
                            aria-label={`Reservar ${service.name}`}
                          >
                            Reservar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hygiene Badge — Trust Stack: near transaction flow */}
        {/* Prominencia-Interpretación de Fogg: insignia de certificación visible */}
        <div className="services__hygiene-badge" role="status">
          <div className="services__hygiene-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
          </div>
          <p className="services__hygiene-text">
            <strong>Protocolo de Higiene Certificado</strong> — Todos nuestros
            instrumentos son esterilizados antes de cada servicio. Tu salud es
            nuestra prioridad absoluta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
