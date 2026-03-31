import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

/**
 * App — Componente raíz
 * 
 * Arquitectura de secciones dispuestas según el Trust Stack:
 * 1. Header + Hero → Confianza Estética (primera impresión 50ms)
 * 2. Services → Confianza Funcional (información clara, precios transparentes)
 * 3. Gallery → Prueba Social Visual (resultados reales)
 * 4. Reviews → Confianza Emocional (testimonios)
 * 5. Team → Conexión Personal (reducir ansiedad pre-visita)
 * 6. Booking → Conversión (sistema tolerante a fallos)
 * 7. FloatingCTA → Von Restorff (CTA siempre accesible, Zona del Pulgar)
 */

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Team />
        <Booking />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;