import React from 'react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  // Liste des artistes avec leurs images (même liste que la page d'accueil)
  const artistPosters = [
    { name: "Urbain", img: "https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg" },
    { name: "Marc-Antoine Le Bret", img: "https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg" },
    { name: "D'Jal", img: "https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg" },
    { name: "Morgane Berling", img: "https://i.imgur.com/munE7s3.jpeg" },
    { name: "Thomas Angelvy", img: "https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg" },
    { name: "Lucie Carbone", img: "https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg" },
    { name: "Julien Santini", img: "https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg" },
    { name: "Edouard Deloignon", img: "https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg" },
    { name: "Djamel Comedy Club", img: "https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg" },
    { name: "Sophie & Alex", img: "https://i.imgur.com/ht3EucF.jpeg" }
  ];

  // Générer les affiches pour les rangées - tripler pour une boucle parfaite
  const topRowPosters = [...artistPosters, ...artistPosters, ...artistPosters];
  const bottomRowPosters = [...artistPosters.reverse(), ...artistPosters, ...artistPosters];

  return (
    <section className="artists-hero-section">
      {/* Carrousel d'affiches en arrière-plan */}
      <div className="background-carousel">
        <div className="carousel-rows">
          {/* Rangée du haut - défile vers la gauche */}
          <div className="carousel-track top-row">
            {topRowPosters.map((artist, index) => (
              <div key={`top-${index}`} className="poster-card">
                <img src={artist.img} alt={artist.name} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Rangée du bas - défile vers la droite */}
          <div className="carousel-track bottom-row">
            {bottomRowPosters.map((artist, index) => (
              <div key={`bottom-${index}`} className="poster-card">
                <img src={artist.img} alt={artist.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay gradient pour la lisibilité */}
      <div className="overlay"></div>

      {/* Contenu principal */}
      <div className="main-content">
        {/* Badge */}
        <div className="badge">
          <span className="badge-dot"></span>
          <span className="badge-text">Nos artistes de la scène française</span>
        </div>

        {/* Titres */}
        <div className="titles-container">
          <h1 className="title-tiny">NOS TALENTS,</h1>
          <h1 className="title-big">VOS ÉMOTIONS</h1>
        </div>

        {/* Sous-titre */}
        <div className="hero-subtitle">
          <span className="subtitle-line">La nouvelle génération de la scène française</span>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Artistes</span>
          </div>
          <div className="stat-separator">•</div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Spectacles</span>
          </div>
          <div className="stat-separator">•</div>
          <div className="stat-item">
            <span className="stat-number">100K+</span>
            <span className="stat-label">Spectateurs</span>
          </div>
        </div>
      </div>
    </section>
  );
};