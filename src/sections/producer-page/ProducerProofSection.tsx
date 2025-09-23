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
      { threshold: 0.2 }
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

  return (
    <section className="producer-proof-section" id="proof">
      <div className="proof-container">
        <div className="proof-header">
          <h2 className="proof-title">
            <span className="title-line-1">On élimine</span>
            <span className="title-line-2">vos problèmes.</span>
          </h2>
        </div>

        <div className="comparison-list">
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className={`comparison-item ${isInView ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
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

        <div className="proof-footer">
          <p className="footer-message">
            <span className="message-main">100% de votre énergie sur votre salle.</span>
            <span className="message-sub">0% sur la logistique.</span>
          </p>
          
          <a href="/contact" className="proof-cta">
            <span className="cta-text">Simplifiez-vous la vie</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};