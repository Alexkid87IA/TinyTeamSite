import React, { useState, useEffect } from 'react';
import './ProducerArtistsGrid.css';

export const ProducerArtistsGrid = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/contact';
  };

  // Pause animation on hover (desktop uniquement)
  useEffect(() => {
    if (isMobile) return; // Pas d'effet hover sur mobile
    
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
  }, [isMobile]);

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
    artistPosters[8], artistPosters[9], artistPosters[5], 
    artistPosters[0], artistPosters[4], artistPosters[2],
    artistPosters[1], artistPosters[3], artistPosters[7], 
    artistPosters[6],
    // Duplication pour l'animation infinie
    artistPosters[8], artistPosters[9], artistPosters[5], 
    artistPosters[0], artistPosters[4], artistPosters[2],
    artistPosters[1], artistPosters[3], artistPosters[7], 
    artistPosters[6],
  ];

  return (
    <section className="producer-hero-section">
      {/* Carrousel d'affiches en arrière-plan */}
      <div className="background-carousel">
        <div className="carousel-rows">
          {/* Rangée du haut - défile vers la gauche */}
          <div className="carousel-track top-row">
            {topRowPosters.map((artist, index) => (
              <div key={`top-${index}`} className="poster-card">
                <img 
                  src={artist.img} 
                  alt={artist.name} 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Rangée du bas - défile vers la droite */}
          <div className="carousel-track bottom-row">
            {bottomRowPosters.map((artist, index) => (
              <div key={`bottom-${index}`} className="poster-card">
                <img 
                  src={artist.img} 
                  alt={artist.name} 
                  loading="lazy"
                  decoding="async"
                />
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
          <span className="badge-text">Artistes confirmés pour vos événements</span>
        </div>

        {/* Titres */}
        <div className="titles-container">
          <h1 className="title-tiny">DES SALLES</h1>
          <h1 className="title-big">PLEINES</h1>
        </div>

        {/* Boutons avec effet glow */}
        <div className="buttons">
          <a href="#artists-list" className="btn btn-primary">
            <span>Voir nos artistes →</span>
          </a>
          <a href="/contact" onClick={handleContactClick} className="btn btn-secondary">
            <span>📞 Programmer</span>
          </a>
        </div>

        {/* Cartes pour desktop */}
        <div className="cards-wrapper desktop-only">
          <div className="cards">
            <a href="#artists-list" className="card">
              <p className="card-label">Découvrir</p>
              <h3 className="card-title">
                <span>Nos artistes</span>
                <span className="card-arrow">→</span>
              </h3>
            </a>
            
            <a href="#reality" className="card">
              <p className="card-label">Voir</p>
              <h3 className="card-title">
                <span>Nos succès</span>
                <span className="card-arrow">→</span>
              </h3>
            </a>
            
            <a href="#contact" className="card">
              <p className="card-label">Demander</p>
              <h3 className="card-title">
                <span>Un devis</span>
                <span className="card-arrow">→</span>
              </h3>
            </a>
          </div>
        </div>

        {/* Cartes mobile */}
        <div className="mobile-cards mobile-only">
          <a href="#artists-list" className="mobile-card">
            <div className="mobile-card-content">
              <span className="mobile-card-title">Nos artistes</span>
              <span className="mobile-card-desc">Talents confirmés</span>
            </div>
            <span className="mobile-card-arrow">→</span>
          </a>
          
          <a href="#reality" className="mobile-card">
            <div className="mobile-card-content">
              <span className="mobile-card-title">Nos succès</span>
              <span className="mobile-card-desc">Salles combles garanties</span>
            </div>
            <span className="mobile-card-arrow">→</span>
          </a>
          
          <a href="#contact" className="mobile-card">
            <div className="mobile-card-content">
              <span className="mobile-card-title">Un devis</span>
              <span className="mobile-card-desc">Réponse sous 24h</span>
            </div>
            <span className="mobile-card-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};