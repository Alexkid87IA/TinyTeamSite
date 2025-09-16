import React, { useState, useEffect } from 'react';
import './HeroSection.css';

export const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowreelClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  // Pause animation on hover pour améliorer les performances
  useEffect(() => {
    const tracks = document.querySelectorAll('.carousel-track');
    if (!tracks.length) return;

    const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.animationPlayState = 'paused';
    };
    
    const handleMouseLeave = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.animationPlayState = 'running';
    };

    tracks.forEach(track => {
      track.addEventListener('mouseenter', handleMouseEnter);
      track.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      tracks.forEach(track => {
        track.removeEventListener('mouseenter', handleMouseEnter);
        track.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Liste des artistes avec leurs images
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

  // Générer les affiches pour la rangée du haut (ordre normal, doublé pour l'animation infinie)
  const topRowPosters = [...artistPosters, ...artistPosters];
  
  // Générer les affiches pour la rangée du bas (ordre mélangé, doublé pour l'animation infinie)
  const bottomRowPosters = [
    artistPosters[8], // Djamel Comedy Club
    artistPosters[9], // Sophie & Alex
    artistPosters[5], // Lucie Carbone
    artistPosters[0], // Urbain
    artistPosters[4], // Thomas Angelvy
    artistPosters[2], // D'Jal
    artistPosters[1], // Marc-Antoine Le Bret
    artistPosters[3], // Morgane Berling
    artistPosters[7], // Edouard Deloignon
    artistPosters[6], // Julien Santini
    // Duplication pour l'animation infinie
    artistPosters[8], // Djamel Comedy Club
    artistPosters[9], // Sophie & Alex
    artistPosters[5], // Lucie Carbone
    artistPosters[0], // Urbain
    artistPosters[4], // Thomas Angelvy
    artistPosters[2], // D'Jal
    artistPosters[1], // Marc-Antoine Le Bret
    artistPosters[3], // Morgane Berling
    artistPosters[7], // Edouard Deloignon
    artistPosters[6], // Julien Santini
  ];

  return (
    <section className="hero-section">
      {/* Carrousel d'affiches en arrière-plan */}
      <div className="background-carousel">
        <div className="carousel-rows">
          {/* Rangée du haut - défile vers la gauche */}
          <div className="carousel-track top-row">
            {topRowPosters.map((artist, index) => (
              <div key={`top-${index}`} className="poster-card">
                <img src={artist.img} alt={artist.name} />
              </div>
            ))}
          </div>

          {/* Rangée du bas - défile vers la droite */}
          <div className="carousel-track bottom-row">
            {bottomRowPosters.map((artist, index) => (
              <div key={`bottom-${index}`} className="poster-card">
                <img src={artist.img} alt={artist.name} />
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
          <span className="badge-text">Production de spectacles vivants</span>
        </div>

        {/* Titres */}
        <div className="titles-container">
          <h1 className="title-tiny">TINY TEAM,</h1>
          <h1 className="title-big">BIG DREAMS</h1>
        </div>

        {/* Boutons avec effet glow */}
        <div className="buttons">
          <a href="/artistes" className="btn btn-primary">
            <span>
              <span className="desktop-text">Découvrir nos </span>
              Artistes →
            </span>
          </a>
          <a href="#" onClick={handleShowreelClick} className="btn btn-secondary">
            <span>▶ Showreel</span>
          </a>
        </div>

        {/* Cartes */}
        <div className="cards-wrapper">
          <div className="cards">
            <a href="/artiste" className="card">
              <p className="card-label">Vous êtes</p>
              <h3 className="card-title">Artiste</h3>
            </a>
            
            <a href="/programmateur" className="card">
              <p className="card-label">Vous êtes</p>
              <h3 className="card-title">Programmateur</h3>
            </a>
            
            <a href="/entreprise" className="card">
              <p className="card-label">Vous êtes une</p>
              <h3 className="card-title">Entreprise</h3>
            </a>
          </div>
        </div>
      </div>

      {/* Popup "Bientôt disponible" */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
          color: 'white',
          padding: '1.5rem 3rem',
          borderRadius: '1rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          zIndex: 1000,
          fontSize: '1.1rem',
          fontWeight: '600',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          🎬 Showreel bientôt disponible !
        </div>
      )}
    </section>
  );
};