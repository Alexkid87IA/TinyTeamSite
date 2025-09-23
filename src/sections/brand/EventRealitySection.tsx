import React, { useEffect, useState } from 'react';
import './EventRealitySection.css';

export const EventRealitySection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.event-reality-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    // Auto-flip cards in a loop
    const interval = setInterval(() => {
      setFlippedCards(prev => {
        if (prev.length === 4) {
          // All flipped, reset to start
          return [];
        } else {
          // Add next card
          return [...prev, prev.length];
        }
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isInView]);

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const comparisons = [
    {
      before: "PowerPoint soporifique",
      after: "Show interactif mémorable",
      icon: "▣"
    },
    {
      before: "Buffet networking forcé",
      after: "Moments de rire authentiques",
      icon: "◆"
    },
    {
      before: "Photos crispées",
      after: "Souvenirs inoubliables",
      icon: "▲"
    },
    {
      before: '"C\'était sympa"',
      after: '"C\'était dingue!"',
      icon: "●"
    }
  ];

  return (
    <section className="event-reality-section">
      <div className="event-container">
        {/* Header */}
        <div className="event-header">
          <h2 className="event-title">
            <span className="title-line-1">VOS ÉVÉNEMENTS</span>
            <span className="title-line-2">MÉRITENT MIEUX</span>
          </h2>
          <p className="event-subtitle">
            Transformez l'obligation en expérience inoubliable.
          </p>
        </div>

        {/* Click Instruction */}
        <div className="click-instruction">
          <span className="instruction-text">↓ Cliquez sur les cartes pour comparer ↓</span>
        </div>

        {/* Comparison Cards */}
        <div className="comparison-grid">
          {comparisons.map((item, index) => (
            <div 
              key={index}
              className={`flip-card ${flippedCards.includes(index) ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="flip-card-inner">
                {/* Front - Sans nous */}
                <div className="flip-card-front">
                  <div className="card-icon-bad">✕</div>
                  <h3 className="card-label">SANS NOUS</h3>
                  <p className="card-text">{item.before}</p>
                  <div className="card-mood">😴</div>
                </div>
                
                {/* Back - Avec nous */}
                <div className="flip-card-back">
                  <div className="card-icon-good">✓</div>
                  <h3 className="card-label">AVEC NOUS</h3>
                  <p className="card-text">{item.after}</p>
                  <div className="card-mood">🎉</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-block">
            <div className="stat-number">95%</div>
            <div className="stat-desc">de satisfaction</div>
          </div>
          <div className="stat-separator"></div>
          <div className="stat-block">
            <div className="stat-number">100%</div>
            <div className="stat-desc">veulent revenir</div>
          </div>
          <div className="stat-separator"></div>
          <div className="stat-block">
            <div className="stat-number">0</div>
            <div className="stat-desc">qui s'endorment</div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="bottom-message">
          <h2 className="message-title">
            <span className="line-1">Fini les événements</span>
            <span className="line-2">qu'on subit.</span>
          </h2>
          <p className="message-subtitle">
            Place aux moments qu'on attend avec impatience.
          </p>
        </div>
      </div>
    </section>
  );
};