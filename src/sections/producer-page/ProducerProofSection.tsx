import React, { useEffect, useState } from 'react';
import './ProducerProofSection.css';

export const ProducerProofSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.producer-proof-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const comparisons = [
    {
      problem: "Négociations interminables",
      solution: "Un interlocuteur unique"
    },
    {
      problem: "Annulations dernière minute",
      solution: "Artistes fiables à 100%"
    },
    {
      problem: "Marketing à gérer seul",
      solution: "Promo clé en main"
    },
    {
      problem: "Billetterie incertaine",
      solution: "Salles pleines garanties"
    },
    {
      problem: "Logistique cauchemar",
      solution: "On s'occupe de tout"
    },
    {
      problem: "Stress permanent",
      solution: "Tranquillité absolue"
    }
  ];

  // Fonction pour gérer les liens
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = window.location.origin + '/contact';
  };

  return (
    <section className="producer-proof-section" id="proof">
      <div className="proof-container">
        {/* UN SEUL TITRE - PAS DE DUPLICATION */}
        <div className="proof-header">
          <h2 className="proof-title">
            <span className="title-line-1">Vos spectateurs applaudissent.</span>
            <span className="title-line-2">Vos billets disparaissent.</span>
          </h2>
          <p className="proof-subtitle">
            Programmez sans risque. Réussissez à coup sûr.
          </p>
        </div>

        {/* Liste de comparaisons */}
        <div className="comparison-list">
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className={`comparison-item ${isInView ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="problem-side">
                <span className="problem-text">{item.problem}</span>
                <div className="cross-icon">✕</div>
              </div>
              
              <div className="arrow-container">
                <span className="arrow">→</span>
              </div>
              
              <div className="solution-side">
                <div className="check-icon">✓</div>
                <span className="solution-text">{item.solution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer avec message et CTA */}
        <div className="proof-footer">
          <p className="footer-message">
            <span className="message-main">100% de votre énergie sur votre salle.</span>
            <span className="message-sub">0% sur la logistique.</span>
          </p>
          
          <a 
            href="/contact" 
            className="proof-cta"
            onClick={handleCtaClick}
          >
            <span className="cta-text">Simplifiez-vous la vie</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};