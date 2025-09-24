import React from 'react';
import './TeamCTASection.css';

export const TeamCTASection: React.FC = () => {
  return (
    <section className="team-cta">
      {/* Fond animé */}
      <div className="cta-background">
        <div className="cta-pattern"></div>
        <div className="cta-glow"></div>
        {/* Étoiles flottantes */}
        <div className="cta-stars">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >⭐</div>
          ))}
        </div>
      </div>

      <div className="cta-content">
        {/* Titre principal */}
        <h2 className="cta-title">
          <span className="cta-line-1">Prêt à nous rejoindre dans</span>
          <span className="cta-line-2">L'Aventure ?</span>
        </h2>
        
        {/* Divider animé */}
        <div className="cta-divider">
          <div className="divider-line left"></div>
          <div className="divider-star">✨</div>
          <div className="divider-line right"></div>
        </div>
        
        {/* Texte d'accroche */}
        <p className="cta-description">
          Transformons ensemble vos rêves artistiques en réalité spectaculaire.
          <span className="cta-subtitle">Une approche unique développée depuis 2014</span>
        </p>
        
        {/* Boutons d'action */}
        <div className="cta-buttons">
          <a href="/contact" className="cta-button primary">
            <span className="button-bg"></span>
            <span className="button-content">
              <span className="button-icon">🎭</span>
              <span className="button-text">Discutons de votre projet</span>
              <span className="button-arrow">→</span>
            </span>
          </a>
          
          <a href="/services" className="cta-button secondary">
            <span className="button-bg"></span>
            <span className="button-content">
              <span className="button-icon">🌟</span>
              <span className="button-text">Découvrir nos services</span>
              <span className="button-arrow">→</span>
            </span>
          </a>
        </div>
        
        {/* Stats rapides */}
        <div className="cta-stats">
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">années</span>
          </div>
          <div className="stat-separator">•</div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">artistes</span>
          </div>
          <div className="stat-separator">•</div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">spectacles</span>
          </div>
        </div>
      </div>
    </section>
  );
};