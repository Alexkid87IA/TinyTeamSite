import React, { useState, useEffect } from 'react';
import './BrandHeroSection.css';

interface BrandHeroSectionProps {
  onSelectPath: (path: 'content' | 'event') => void;
}

export const BrandHeroSection: React.FC<BrandHeroSectionProps> = ({ onSelectPath }) => {
  // Pause animation on hover
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

  // Images pour le carrousel - mix de contenus et événements
  const brandPosters = [
    { name: "TikTok Viral", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400" },
    { name: "Convention", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400" },
    { name: "Instagram Reels", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400" },
    { name: "Team Building", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400" },
    { name: "YouTube Collab", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
    { name: "Séminaire", img: "https://images.unsplash.com/photo-1511578314322-183afb3c8b5a?w=400" },
    { name: "Podcast", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400" },
    { name: "Soirée Corporate", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400" },
    { name: "Content Creator", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400" },
    { name: "Gala", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400" },
    { name: "Live Stream", img: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400" },
    { name: "Workshop", img: "https://images.unsplash.com/photo-1552581234-26160f608093?w=400" },
    { name: "Keynote", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400" },
    { name: "Brand Video", img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400" },
    { name: "Social Media", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400" }
  ];

  // Générer les affiches pour les trois rangées avec duplication pour boucle infinie
  // On duplique 2 fois le tableau pour que l'animation puisse se répéter sans coupure
  const topRowPosters = [...brandPosters, ...brandPosters];
  const middleRowPosters = [...brandPosters.slice().reverse(), ...brandPosters.slice().reverse()];
  const bottomRowPosters = [
    ...brandPosters.slice(7), ...brandPosters.slice(0, 7),
    ...brandPosters.slice(7), ...brandPosters.slice(0, 7)
  ];

  return (
    <section className="brand-hero-section">
      {/* Carrousel d'affiches en arrière-plan */}
      <div className="background-carousel">
        <div className="carousel-rows">
          {/* Rangée du haut - défile vers la gauche */}
          <div className="carousel-track top-row">
            {topRowPosters.map((poster, index) => (
              <div key={`top-${index}`} className="poster-card">
                <img src={poster.img} alt={poster.name} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Rangée du milieu - défile vers la gauche lentement */}
          <div className="carousel-track middle-row">
            {middleRowPosters.map((poster, index) => (
              <div key={`middle-${index}`} className="poster-card">
                <img src={poster.img} alt={poster.name} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Rangée du bas - défile vers la droite */}
          <div className="carousel-track bottom-row">
            {bottomRowPosters.map((poster, index) => (
              <div key={`bottom-${index}`} className="poster-card">
                <img src={poster.img} alt={poster.name} loading="lazy" />
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
          <span className="badge-text">Humoristes pro pour marques ambitieuses</span>
        </div>

        {/* Titres */}
        <div className="titles-container">
          <h1 className="title-tiny">ON FAIT RIRE</h1>
          <h1 className="title-big">VOS CLIENTS</h1>
        </div>

        {/* Sous-titre */}
        <p className="subtitle-text">Et ils achètent. C'est prouvé.</p>

        {/* Cartes de choix - Desktop */}
        <div className="choice-cards-wrapper desktop-only">
          <div className="choice-cards">
            <button 
              className="choice-card content-card" 
              onClick={() => onSelectPath('content')}
            >
              <h3 className="card-title">BRAND CONTENT</h3>
              <p className="card-subtitle">Créer du contenu viral</p>
              <div className="card-arrow">→</div>
            </button>
            
            <button 
              className="choice-card event-card" 
              onClick={() => onSelectPath('event')}
            >
              <h3 className="card-title">ÉVÉNEMENTIEL</h3>
              <p className="card-subtitle">Organiser un moment inoubliable</p>
              <div className="card-arrow">→</div>
            </button>
          </div>
        </div>

        {/* Cartes mobile */}
        <div className="mobile-cards mobile-only">
          <button 
            className="mobile-card" 
            onClick={() => onSelectPath('content')}
          >
            <div className="mobile-card-content">
              <span className="mobile-card-title">Brand Content</span>
              <span className="mobile-card-desc">Contenu viral garanti</span>
            </div>
            <span className="mobile-card-arrow">→</span>
          </button>
          
          <button 
            className="mobile-card" 
            onClick={() => onSelectPath('event')}
          >
            <div className="mobile-card-content">
              <span className="mobile-card-title">Événementiel</span>
              <span className="mobile-card-desc">Moments mémorables</span>
            </div>
            <span className="mobile-card-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};