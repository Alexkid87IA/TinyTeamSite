import React, { useEffect, useState } from 'react';
import './ProducerFinalCTA.css';

export const ProducerFinalCTA: React.FC = () => {
  const [filledSlots, setFilledSlots] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('.producer-final-cta-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isInView]);

  // Animation de remplissage progressif
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setFilledSlots(prev => {
        if (prev >= 75) { // S'arrête à 75%
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section className="producer-final-cta-section" id="contact">
      <div className="cta-container">
        <div className="urgency-header">
          <h2 className="urgency-title">
            <span className="title-line-1">Rejoignez les</span>
            <span className="title-line-2">programmateurs malins.</span>
          </h2>
        </div>

        <div className="availability-visual">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${filledSlots}%` }}
            />
            <div className="progress-text">
              <span className="percentage">{filledSlots}%</span>
              <span className="label">de nos artistes déjà bookés pour 2025</span>
            </div>
          </div>

          <div className="activity-indicators">
            <div className="activity-item pulse-1">
              <span className="dot"></span>
              <span className="text">Lille vient de réserver</span>
            </div>
            <div className="activity-item pulse-2">
              <span className="dot"></span>
              <span className="text">Lyon en discussion</span>
            </div>
            <div className="activity-item pulse-3">
              <span className="dot"></span>
              <span className="text">Nice a confirmé</span>
            </div>
          </div>
        </div>

        <div className="cta-footer">
          <p className="urgency-message">
            <span className="message-main">Ne ratez pas le coche.</span>
            <span className="message-sub">Les meilleurs partent en premier.</span>
          </p>
          
          <a href="/contact" className="final-cta-button">
            <span className="cta-text">Discutons maintenant</span>
            <span className="cta-arrow">→</span>
            <div className="cta-pulse"></div>
          </a>
          
          <p className="guarantee">
            <span className="guarantee-icon">✓</span>
            Réponse garantie sous 24h
          </p>
        </div>
      </div>
    </section>
  );
};