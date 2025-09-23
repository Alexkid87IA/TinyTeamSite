import React, { useEffect, useState } from 'react';
import './ContentSolutionSection.css';

export const ContentSolutionSection: React.FC = () => {
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
      { threshold: 0.2 }
    );

    const section = document.querySelector('.content-solution-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isInView]);

  const solutions = [
    {
      title: "TIKTOK & REELS",
      description: "Challenges viraux avec nos humoristes",
      stat: "2M+",
      statLabel: "vues moyennes",
      icon: "▶",
      gradient: "gradient-1"
    },
    {
      title: "YOUTUBE COLLAB",
      description: "Contenus longs qui captent",
      stat: "15 min",
      statLabel: "de watch time",
      icon: "■",
      gradient: "gradient-2"
    },
    {
      title: "PODCAST & LIVE",
      description: "Conversations authentiques",
      stat: "87%",
      statLabel: "de complétion",
      icon: "●",
      gradient: "gradient-3"
    },
    {
      title: "CORPORATE FUN",
      description: "LinkedIn mais drôle",
      stat: "10x",
      statLabel: "plus de partages",
      icon: "▲",
      gradient: "gradient-4"
    }
  ];

  return (
    <section className="content-solution-section">
      <div className="solution-container">
        {/* Header */}
        <div className="solution-header">
          <div className="solution-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">AVEC NOS HUMORISTES</span>
          </div>
          <h2 className="solution-title">
            <span className="title-line-1">LA SOLUTION</span>
            <span className="title-line-2">DES CRÉATEURS QUI SAVENT Y FAIRE</span>
          </h2>
        </div>

        {/* Grille de solutions */}
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`solution-card ${solution.gradient} ${isInView ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-icon-container">
                <div className="card-icon">{solution.icon}</div>
              </div>
              
              <h3 className="card-title">{solution.title}</h3>
              <p className="card-description">{solution.description}</p>
              
              <div className="card-stat">
                <div className="stat-number">{solution.stat}</div>
                <div className="stat-label">{solution.statLabel}</div>
              </div>
              
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Message du bas */}
        <div className="solution-footer">
          <p className="footer-text">
            Des formats qui matchent avec votre audience.<br/>
            Des résultats qui dépassent vos espérances.
          </p>
        </div>
      </div>
    </section>
  );
};