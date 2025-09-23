import React, { useEffect, useState } from 'react';
import './ContentProcessSection.css';

export const ContentProcessSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

    const section = document.querySelector('.content-process-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 4) return 0;
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  const steps = [
    {
      day: "J+0",
      title: "BRIEF",
      description: "On écoute votre besoin",
      icon: "○"
    },
    {
      day: "J+3",
      title: "CONCEPT",
      description: "On propose des idées folles",
      icon: "◐"
    },
    {
      day: "J+10",
      title: "PRODUCTION",
      description: "On tourne avec nos artistes",
      icon: "◑"
    },
    {
      day: "J+15",
      title: "DIFFUSION",
      description: "On lance et on optimise",
      icon: "◕"
    },
    {
      day: "J+30",
      title: "ANALYSE",
      description: "On mesure le succès",
      icon: "●"
    }
  ];

  return (
    <section className="content-process-section">
      <div className="process-container">
        {/* Header */}
        <div className="process-header">
          <h2 className="process-title">
            <span className="title-line-1">NOTRE PROCESS</span>
            <span className="title-line-2">30 JOURS POUR CARTONNER</span>
          </h2>
          <p className="process-subtitle">
            De l'idée à la viralité, on gère tout.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {/* Progress bar */}
          <div className="timeline-progress">
            <div 
              className="timeline-progress-fill"
              style={{ width: `${(activeStep / 4) * 100}%` }}
            ></div>
          </div>

          {/* Steps */}
          <div className="timeline-steps">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`timeline-step ${index <= activeStep ? 'active' : ''} ${index === activeStep ? 'current' : ''}`}
              >
                <div className="step-marker">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-line"></div>
                </div>
                
                <div className="step-content">
                  <div className="step-day">{step.day}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="process-footer">
          <div className="footer-stats">
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Transparent</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">0</div>
              <div className="stat-label">Prise de tête</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">∞</div>
              <div className="stat-label">Créativité</div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="disclaimer">
            <p className="disclaimer-text">
              * Délais sous réserve de disponibilité de nos artistes. 
              Les meilleurs partent vite, contactez-nous au plus tôt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};