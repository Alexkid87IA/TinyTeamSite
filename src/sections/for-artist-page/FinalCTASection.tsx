import React from 'react';
import { Zap } from 'lucide-react';
import './FinalCTASection.css';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="story-section final-cta-section">
      <div className="section-content">
        <div className="cta-content">
          <div className="split-message">
            <h2 className="cta-line-1">Arrêtez de jouer</h2>
            <h2 className="cta-line-2">au comptable.</h2>
          </div>
          
          <div className="divider-line"></div>
          
          <p className="cta-punchline">
            Remontez sur scène.
          </p>
          
          <a href="/contact?type=artiste" className="cta-button">
            <Zap className="button-icon-left" size={20} />
            <span className="button-text">ON S'OCCUPE DE TOUT</span>
            <Zap className="button-icon-right" size={20} />
          </a>
          
          <div className="trust-indicator">
            <span className="trust-number">10</span>
            <span className="trust-text">artistes nous font déjà confiance</span>
          </div>
        </div>
      </div>
    </section>
  );
};