import { useState } from 'react';
import '../styles/gallery.css';

/**
 * Gallery — Portafolio de Trabajos
 * 
 * Principios HCI aplicados:
 * - Prueba Social Visual: Las imágenes de trabajos realizados son el factor
 *   que más impulsa las reservas según estudios de eye-tracking
 * - Trust Stack Emocional: Antes/después reduce la incertidumbre
 * - WCAG 2.5.8: Filtros con objetivos táctiles ≥ 44px
 * 
 * Nota: Las imágenes se muestran como placeholders con SVG ya que
 * el salón proporcionará sus propias fotos de portafolio
 */

const FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'cortes', label: 'Cortes' },
  { id: 'color', label: 'Coloración' },
  { id: 'peinados', label: 'Peinados' },
];

const GALLERY_ITEMS = [
  { id: 1, category: 'cortes', style: 'Corte Texturizado', artist: 'Por Glaymis' },
  { id: 2, category: 'color', style: 'Balayage Caramelo', artist: 'Por Glaymis' },
  { id: 3, category: 'peinados', style: 'Ondas Elegantes', artist: 'Por Glaymis' },
  { id: 4, category: 'cortes', style: 'Fade Clásico', artist: 'Por Glaymis' },
  { id: 5, category: 'color', style: 'Rubio Platino', artist: 'Por Glaymis' },
  { id: 6, category: 'peinados', style: 'Recogido Novia', artist: 'Por Glaymis' },
  { id: 7, category: 'cortes', style: 'Bob Moderno', artist: 'Por Glaymis' },
  { id: 8, category: 'color', style: 'Mechas Fantasy', artist: 'Por Glaymis' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="gallery section--alt" aria-labelledby="gallery-title">
      <div className="container">
        {/* Section Header */}
        <header className="gallery__header">
          <span className="section__label">Portafolio</span>
          <h2 id="gallery-title" className="section__title">
            Nuestro trabajo habla
          </h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Cada transformación es una historia única de estilo y confianza.
          </p>
        </header>

        {/* Filter Tabs — WCAG 2.5.8: min 44px touch target */}
        <div className="gallery__filters" role="tablist" aria-label="Filtrar por categoría">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              className={`gallery__filter ${activeFilter === filter.id ? 'gallery__filter--active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              role="tab"
              aria-selected={activeFilter === filter.id}
              aria-controls="gallery-grid"
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          id="gallery-grid"
          className="gallery__grid"
          role="tabpanel"
          aria-label="Galería de trabajos"
        >
          {filteredItems.map((item) => (
            <article key={item.id} className="gallery__item">
              {/* Placeholder — el salón reemplazará con fotos reales */}
              <div className="gallery__item-placeholder" aria-label={item.style}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>{item.style}</span>
              </div>
              
              {/* Hover overlay with info */}
              <div className="gallery__item-overlay">
                <div className="gallery__item-style">{item.style}</div>
                <div className="gallery__item-artist">{item.artist}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
