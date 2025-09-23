import React from 'react';
import { ChevronRight, Zap, Star } from 'lucide-react';
import './CTASection.css';

export const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        {/* Message principal */}
        <div className="cta-message">
          <h2 className="cta-line-1">Votre prochain</h2>
          <h2 className="cta-line-2">succès est ici.</h2>
        </div>
        
        {/* Ligne de séparation animée */}
        <div className="cta-divider"></div>
        
        {/* Punchline */}
        <p className="cta-punchline">
          Programmez l'excellence.
        </p>
        
        {/* Boutons CTA */}
        <div className="cta-buttons">
          <a href="/contact?type=programmateur" className="cta-button primary">
            <Zap className="button-icon-left" size={20} />
            <span className="button-text">PROGRAMMER UN ARTISTE</span>
            <Zap className="button-icon-right" size={20} />
          </a>
          
          <a href="/marque" className="cta-button secondary">
            <Star className="button-icon" size={18} />
            <span className="button-text">ÉVÉNEMENT PRIVÉ</span>
          </a>
        </div>
        
        {/* Indicateur de confiance */}
        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-number">500+</span>
            <span className="trust-text">spectacles réalisés</span>
          </div>
          <div className="trust-separator">•</div>
          <div className="trust-item">
            <span className="trust-number">100%</span>
            <span className="trust-text">satisfaction client</span>
          </div>
        </div>
      </div>
    </section>
  );
};