import React, { useEffect, useState } from 'react';
import './EventProcessSection.css';

export const EventProcessSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

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

    const section = document.querySelector('.event-process-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    // Animate checklist items one by one
    const timeouts: NodeJS.Timeout[] = [];
    
    [0, 1, 2, 3, 4].forEach((index) => {
      const timeout = setTimeout(() => {
        setCheckedItems(prev => [...prev, index]);
        setProgress((index + 1) * 20);
      }, 500 + index * 400);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [isInView]);

  const steps = [
    {
      icon: "○",
      title: "ANALYSE",
      description: "On comprend vos objectifs",
      detail: "Brief complet de vos attentes"
    },
    {
      icon: "◐",
      title: "CASTING",
      description: "On sélectionne l'artiste parfait",
      detail: "Match avec votre audience"
    },
    {
      icon: "◑",
      title: "ADAPTATION",
      description: "On personnalise le show",
      detail: "Contenu sur-mesure"
    },
    {
      icon: "◕",
      title: "LOGISTIQUE",
      description: "On coordonne tout",
      detail: "Zéro stress pour vous"
    },
    {
      icon: "●",
      title: "SHOWTIME",
      description: "On assure le spectacle",
      detail: "Standing ovation garantie"
    }
  ];

  return (
    <section className="event-process-section">
      <div className="process-container">
        {/* Header */}
        <div className="process-header">
          <h2 className="process-title">
            <span className="title-line-1">NOTRE MÉTHODE</span>
            <span className="title-line-2">5 ÉTAPES VERS LE SUCCÈS</span>
          </h2>
          <p className="process-subtitle">
            Un processus rodé pour des événements mémorables.
          </p>
        </div>

        {/* Main Content */}
        <div className="process-content">
          {/* Progress Bar */}
          <div className="progress-bar-vertical">
            <div 
              className="progress-fill-vertical"
              style={{ height: `${progress}%` }}
            ></div>
          </div>

          {/* Checklist */}
          <div className="checklist-container">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`checklist-item ${checkedItems.includes(index) ? 'checked' : ''}`}
              >
                <div className="checkbox-container">
                  <div className="checkbox">
                    {checkedItems.includes(index) && (
                      <span className="checkmark">✓</span>
                    )}
                  </div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <p className="step-detail">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="process-footer">
          <div className="guarantee-box">
            <div className="guarantee-icon">★</div>
            <div className="guarantee-text">
              <p className="guarantee-title">SATISFACTION GARANTIE</p>
              <p className="guarantee-subtitle">Ou on revient gratuitement*</p>
            </div>
          </div>
          
          <p className="disclaimer-text">
            * Offre soumise à conditions. Nos artistes sont tellement bons que personne n'a jamais demandé.
          </p>
        </div>
      </div>
    </section>
  );
};