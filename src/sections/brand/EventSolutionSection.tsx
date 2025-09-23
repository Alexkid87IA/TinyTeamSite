import React, { useEffect, useState } from 'react';
import './EventSolutionSection.css';

export const EventSolutionSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

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

    const section = document.querySelector('.event-solution-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    // Animate counters
    const targets = [500, 100, 365, 200];
    const intervals: NodeJS.Timeout[] = [];

    targets.forEach((target, index) => {
      const increment = target / 30;
      const interval = setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < target) {
            newCounters[index] = Math.min(newCounters[index] + increment, target);
          } else {
            clearInterval(interval);
          }
          return newCounters;
        });
      }, 50);
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [isInView]);

  const solutions = [
    {
      title: "CONVENTION",
      description: "500 personnes captivées",
      icon: "▢",
      stat: Math.floor(counters[0]),
      statLabel: "participants",
      gradient: "gradient-1"
    },
    {
      title: "TEAM BUILDING",
      description: "Fédérer par le rire",
      icon: "◈",
      stat: Math.floor(counters[1]) + "%",
      statLabel: "cohésion d'équipe",
      gradient: "gradient-2"
    },
    {
      title: "SOIRÉE ANNUELLE",
      description: "Le highlight de l'année",
      icon: "◉",
      stat: Math.floor(counters[2]),
      statLabel: "jours mémorables",
      gradient: "gradient-3"
    },
    {
      title: "SÉMINAIRE",
      description: "Formation + Entertainment",
      icon: "▬",
      stat: Math.floor(counters[3]) + "%",
      statLabel: "d'attention",
      gradient: "gradient-4"
    }
  ];

  return (
    <section className="event-solution-section">
      <div className="solution-container">
        {/* Header */}
        <div className="solution-header">
          <div className="solution-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">NOS FORMATS D'ÉVÉNEMENTS</span>
          </div>
          <h2 className="solution-title">
            <span className="title-line-1">CHAQUE OCCASION</span>
            <span className="title-line-2">DEVIENT EXCEPTIONNELLE</span>
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

        {/* Footer */}
        <div className="solution-footer">
          <p className="footer-text">
            De la convention au team building.<br/>
            Chaque format a son artiste parfait.
          </p>
        </div>
      </div>
    </section>
  );
};