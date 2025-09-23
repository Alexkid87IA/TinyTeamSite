import React from 'react';
import './TeamHeroSection.css';

export const TeamHeroSection: React.FC = () => {
  return (
    <section className="team-hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
        
        {/* Particules */}
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <h1 className="team-title">
          <span className="title-line-1">UNE ÉQUIPE QUI</span>
          <span className="title-line-2">PÉTILLE !</span>
        </h1>
        <p className="team-subtitle">
          Plus qu'une équipe, une famille de passionnés
          <span className="subtitle-emphasis">
            au service de vos projets artistiques
          </span>
        </p>
      </div>
    </section>
  );
};