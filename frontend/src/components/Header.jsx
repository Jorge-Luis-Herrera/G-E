import { useState, useEffect } from 'react';
import '../styles/header.css';

/**
 * Header — Navegación principal (Mobile-First)
 * 
 * Principios HCI aplicados:
 * - WCAG 2.4.11: Indicadores de foco nunca obscurecidos
 * - WCAG 2.5.8: Todos los objetivos táctiles ≥ 44px
 * - Zona del Pulgar: Elementos de navegación accesibles en móvil
 */

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'galeria', label: 'Galería', href: '#galeria' },
  { id: 'equipo', label: 'Equipo', href: '#equipo' },
  { id: 'reservar', label: 'Reservar', href: '#reservar' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 72;
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      role="banner"
    >
      <div className="header__inner">
        {/* Logo */}
        <a
          href="#inicio"
          className="header__logo"
          aria-label="Glaymis Estilista — Ir al inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
        >
          <img
            src="/Resources/Logotype2.png"
            alt=""
            className="header__logo-img"
            width="44"
            height="44"
          />
          <span className="header__logo-text">Glaymis</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} role="listitem">
                <a
                  href={item.href}
                  className="header__nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button — WCAG 2.5.8: 44x44px target */}
        <button
          className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
        >
          <span className="header__menu-icon" aria-hidden="true">
            <span className="header__menu-line" />
            <span className="header__menu-line" />
            <span className="header__menu-line" />
          </span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <nav
        id="mobile-menu"
        className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}
        aria-label="Menú móvil"
        aria-hidden={!isMenuOpen}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="header__mobile-link"
            onClick={(e) => handleNavClick(e, item.href)}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;