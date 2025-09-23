import React, { useEffect, useState } from 'react';
import './ProducerRealitySection.css';

export const ProducerRealitySection: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const successStories = [
    {
      venue: "Festival d'Avignon",
      artist: "D'Jal",
      result: "COMPLET 3 SOIRS",
      highlight: true
    },
    {
      venue: "Théâtre de Nîmes",
      artist: "Marc-Antoine",
      result: "+2 DATES AJOUTÉES",
      highlight: true
    },
    {
      venue: "Casino Barrière",
      artist: "Urbain",
      result: "400 PERSONNES",
      highlight: false
    },
    {
      venue: "Zénith de Lille",
      artist: "Thomas Angelvy",
      result: "STANDING OVATION",
      highlight: true
    },
    {
      venue: "Salle des Fêtes Grasse",
      artist: "Lucie Carbone",
      result: "SOLD OUT",
      highlight: true
    },
    {
      venue: "Théâtre de Cannes",
      artist: "Julien Santini",
      result: "95% REMPLISSAGE",
      highlight: false
    },
    {
      venue: "L'Olympia",
      artist: "Djamel Comedy Club",
      result: "2000 SPECTATEURS",
      highlight: true
    },
    {
      venue: "Festival du Rire",
      artist: "Sophie & Alex",
      result: "PRIX DU PUBLIC",
      highlight: true
    }
  ];

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

    const section = document.querySelector('.producer-reality-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= successStories.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [isInView, successStories.length]);

  return (
    <section className="producer-reality-section" id="reality">
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">RÉSULTATS_2024.log</div>
        </div>
        
        <div className="terminal-body">
          <div className="terminal-content">
            <p className="terminal-prompt">$ tiny_team --show-results</p>
            <p className="terminal-loading">Chargement des succès récents...</p>
            
            <div className="success-list">
              {successStories.map((story, index) => (
                <div 
                  key={index}
                  className={`success-line ${index < visibleLines ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="venue">{story.venue}</span>
                  <span className="separator">{'——————————'}</span>
                  <span className="artist">{story.artist}</span>
                  <span className="divider">/</span>
                  <span className={`result ${story.highlight ? 'highlight' : ''}`}>
                    {story.result}
                  </span>
                </div>
              ))}
            </div>
            
            {visibleLines >= successStories.length && (
              <div className="terminal-footer">
                <p className="stats-summary">
                  <span className="stat-label">Total événements:</span> 
                  <span className="stat-value">127</span>
                  <span className="stat-separator">|</span>
                  <span className="stat-label">Taux de satisfaction:</span> 
                  <span className="stat-value">98%</span>
                  <span className="stat-separator">|</span>
                  <span className="stat-label">Salles complètes:</span> 
                  <span className="stat-value">95%</span>
                </p>
                <div className="cursor-blink">_</div>
              </div>
            )}
          </div>
        </div>

        <div className="bottom-message">
          <h2 className="message-title">
            <span className="line-1">Vos spectateurs applaudissent.</span>
            <span className="line-2">Vos billets disparaissent.</span>
          </h2>
          <p className="message-subtitle">
            Programmez sans risque. Réussissez à coup sûr.
          </p>
        </div>
      </div>
    </section>
  );
};