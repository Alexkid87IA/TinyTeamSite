import React, { useEffect, useState } from 'react';
import './ContentRealitySection.css';

export const ContentRealitySection: React.FC = () => {
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

    const section = document.querySelector('.content-reality-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isInView]);

  const expectationsData = [
    { icon: "👁", value: "1M+ vues", label: "Viralité garantie" },
    { icon: "❤️", value: "50%", label: "Taux d'engagement" },
    { icon: "💰", value: "ROI x10", label: "Retour sur investissement" },
    { icon: "🚀", value: "500%", label: "Croissance des ventes" }
  ];

  const realityData = [
    { icon: "👁", value: "127 vues", label: "Dont 100 bots" },
    { icon: "💔", value: "0.2%", label: "Engagement réel" },
    { icon: "📉", value: "-67%", label: "Argent perdu" },
    { icon: "💸", value: "15K€", label: "Budget cramé" }
  ];

  return (
    <section className="content-reality-section">
      <div className="reality-main-container">
        
        {/* Comparaison split screen */}
        <div className="comparison-split">
          
          {/* Panel gauche - Attentes */}
          <div className={`expectations-panel ${isInView ? 'visible' : ''}`}>
            <h3 className="panel-heading">CE QUE VOUS ESPÉREZ</h3>
            
            <div className="metrics-grid">
              {expectationsData.map((item, index) => (
                <div key={index} className="metric-box">
                  <span className="metric-icon">{item.icon}</span>
                  <div className="metric-number">{item.value}</div>
                  <div className="metric-desc">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Séparateur VS */}
          <div className="versus-separator">
            <div className="versus-line"></div>
            <div className="versus-badge">VS</div>
          </div>
          
          {/* Panel droit - Réalité */}
          <div className={`reality-panel ${isInView ? 'visible' : ''}`}>
            <h3 className="panel-heading">CE QUE VOUS OBTENEZ</h3>
            
            <div className="metrics-grid">
              {realityData.map((item, index) => (
                <div key={index} className="metric-box">
                  <span className="metric-icon">{item.icon}</span>
                  <div className="metric-number">{item.value}</div>
                  <div className="metric-desc">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Message footer */}
        <div className="bottom-section">
          <h2 className="bottom-title">
            <span className="bottom-line-1">Arrêtez de jeter</span>
            <span className="bottom-line-2">l'argent par les fenêtres.</span>
          </h2>
          <p className="bottom-text">
            Investissez dans des créateurs qui savent parler à votre audience.
          </p>
        </div>
        
      </div>
    </section>
  );
};