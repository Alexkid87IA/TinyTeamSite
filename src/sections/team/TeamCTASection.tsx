import React from 'react';
import './TeamCTASection.css';

export const TeamCTASection: React.FC = () => {
  return (
    <section className="team-cta">
      <div className="cta-background-pattern"></div>
      
      <div className="cta-content">
        <h2 className="cta-title">
          <span className="cta-line-1">Prêt à nous rejoindre dans</span>
          <span className="cta-line-2">L'Aventure ?</span>
        </h2>
        
        <div className="cta-divider"></div>
        
        <div className="cta-buttons">
          <a href="/contact" className="cta-button primary">
            <span className="button-text">Discutons de votre projet</span>
            <span className="button-arrow">→</span>
          </a>
          
          <a href="/services" className="cta-button secondary">
            <span className="button-text">Découvrir nos services</span>
            <span className="button-icon">⏱</span>
          </a>
        </div>
      </div>
    </section>
  );
};