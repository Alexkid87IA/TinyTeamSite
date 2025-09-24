import React, { useEffect, useState } from 'react';
import './BrandFinalCTA.css';

interface BrandFinalCTAProps {
  userPath?: 'content' | 'event' | 'default';
  onCtaClick?: () => void;
}

export const BrandFinalCTA: React.FC<BrandFinalCTAProps> = ({ 
  userPath = 'default',
  onCtaClick 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Observer pour l'animation au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.final-cta-wrapper');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    // Effet de suivi de la souris pour les orbes
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Gestion du clic sur le bouton
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.location.href = '/contact';
    }
  };

  // Contenu adaptatif selon le parcours utilisateur
  const getContent = () => {
    switch (userPath) {
      case 'content':
        return {
          badge: "Places limitées",
          headline1: "Ne ratez pas le coche.",
          headline2: "Les meilleurs partent en premier.",
          subheadline: "Créons ensemble du contenu qui fait vraiment rire.",
          buttonText: "DISCUTONS MAINTENANT",
          guarantee: "Réponse garantie sous 24h"
        };
      case 'event':
        return {
          badge: "Agenda 2025 ouvert",
          headline1: "Réservez maintenant.",
          headline2: "Les dates partent vite.",
          subheadline: "Transformons votre événement en moment mémorable.",
          buttonText: "RÉSERVER UN SPECTACLE",
          guarantee: "Devis gratuit sous 24h"
        };
      default:
        return {
          badge: "Disponibilité limitée",
          headline1: "Ne ratez pas le coche.",
          headline2: "Les meilleurs partent en premier.",
          subheadline: "Les meilleurs partent en premier.",
          buttonText: "DISCUTONS MAINTENANT",
          guarantee: "Réponse garantie sous 24h"
        };
    }
  };

  const content = getContent();

  return (
    <section className="final-cta-wrapper">
      {/* Grille de fond animée */}
      <div className="background-grid" />
      
      {/* Orbes de lumière avec effet parallaxe */}
      <div 
        className="light-orb orb-1" 
        style={{ 
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
        }} 
      />
      <div 
        className="light-orb orb-2" 
        style={{ 
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` 
        }} 
      />
      <div 
        className="light-orb orb-3" 
        style={{ 
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` 
        }} 
      />
      
      {/* Contenu principal */}
      <div className="cta-main-container">
        {/* Badge d'urgence */}
        {isVisible && (
          <div className="urgency-badge">
            <span className="badge-dot" />
            <span className="badge-text">{content.badge}</span>
          </div>
        )}
        
        {/* Titre principal */}
        {isVisible && (
          <h2 className="main-headline">
            <div className="headline-top">{content.headline1}</div>
            <div className="headline-bottom">{content.headline2}</div>
          </h2>
        )}
        
        {/* Sous-titre */}
        {isVisible && (
          <p className="sub-headline">{content.subheadline}</p>
        )}
        
        {/* Bouton CTA */}
        {isVisible && (
          <button 
            className="mega-cta-button"
            onClick={handleCtaClick}
            aria-label={content.buttonText}
          >
            <span className="button-label">{content.buttonText}</span>
            <span className="button-icon">→</span>
          </button>
        )}
        
        {/* Garantie */}
        {isVisible && (
          <div className="guarantee-wrapper">
            <div className="guarantee-icon">✔</div>
            <p className="guarantee-text">
              <span className="guarantee-highlight">{content.guarantee}</span>
            </p>
          </div>
        )}
      </div>
      
      {/* Éléments flottants */}
      <div className="floating-elements">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="float-element" />
        ))}
      </div>
    </section>
  );
};