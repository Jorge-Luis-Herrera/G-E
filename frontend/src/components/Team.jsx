import '../styles/team.css';

/**
 * Team — Perfiles del Equipo de Estilistas
 * 
 * Principios HCI aplicados:
 * - Trust Stack: Crea conexión personal pre-visita, reduciendo la ansiedad
 *   de ir con un estilista desconocido
 * - Prominencia-Interpretación de Fogg: Credenciales y especialidades
 *   visibles junto a cada perfil
 * - WCAG 1.4.3: Texto con contraste ≥ 4.5:1 sobre fondo blanco/gris
 */

const TEAM_DATA = [
  {
    id: 1,
    name: 'Glaymis',
    initials: 'GE',
    role: 'Estilista Principal',
    bio: 'Más de 8 años de experiencia en transformaciones capilares. Especialista en técnicas de color y cortes personalizados.',
    specialties: ['Balayage', 'Corte Creativo', 'Color'],
  },
  {
    id: 2,
    name: 'Laura M.',
    initials: 'LM',
    role: 'Colorista Senior',
    bio: 'Apasionada por la colorimetría avanzada y las tendencias internacionales. Cada color es una obra única.',
    specialties: ['Mechas', 'Fantasy Color', 'Rubios'],
  },
  {
    id: 3,
    name: 'Andrés P.',
    initials: 'AP',
    role: 'Barbero & Estilista',
    bio: 'Combina técnicas clásicas de barbería con las tendencias actuales para un look impecable.',
    specialties: ['Fade', 'Barba', 'Diseño'],
  },
];

const Team = () => {
  return (
    <section id="equipo" className="team section--alt" aria-labelledby="team-title">
      <div className="container">
        {/* Section Header */}
        <header className="team__header">
          <span className="section__label">Nuestro Equipo</span>
          <h2 id="team-title" className="section__title">
            Artistas del cabello
          </h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Profesionales certificados dedicados a hacer realidad tu visión.
          </p>
        </header>

        {/* Team Grid */}
        <div className="team__grid" role="list" aria-label="Equipo de estilistas">
          {TEAM_DATA.map((member) => (
            <article key={member.id} className="team__card" role="listitem">
              {/* Avatar */}
              <div className="team__avatar">
                <span className="team__avatar-initials" aria-hidden="true">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <h3 className="team__name">{member.name}</h3>
              <p className="team__role">{member.role}</p>
              <p className="team__bio">{member.bio}</p>

              {/* Specialties — credenciales visibles (Fogg) */}
              <div className="team__specialties" aria-label={`Especialidades de ${member.name}`}>
                {member.specialties.map((specialty) => (
                  <span key={specialty} className="team__specialty">
                    {specialty}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
