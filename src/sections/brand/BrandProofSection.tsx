import React, { useEffect, useState, useRef } from 'react';
import './BrandProofSection.css';

interface ProofCard {
  company: string;
  eventType: string;
  stat1Value: string | number;
  stat1Label: string;
  stat2Value: string | number;
  stat2Label: string;
  outcome: string;
  emoji: string;
}

interface BrandProofSectionProps {
  userPath?: 'content' | 'event' | null;
}

export const BrandProofSection: React.FC<BrandProofSectionProps> = ({ userPath }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // Observer pour déclencher les animations
  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation des nombres
  useEffect(() => {
    if (!isVisible) return;

    const targets: { [key: string]: number } = {
      views1: 5.2,
      views2: 3.8,
      downloads: 125,
      roi: 12,
      attendees: 1200,
      satisfaction: 100,
      presence: 98,
      deals: 45
    };

    const intervals: NodeJS.Timeout[] = [];

    Object.keys(targets).forEach((key) => {
      let current = 0;
      const target = targets[key];
      const increment = target / 40;
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setAnimatedNumbers(prev => ({ ...prev, [key]: current }));
      }, 30);
      
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  // Données pour contenu créateur
  const contentCards: ProofCard[] = [
    {
      company: "Groupe Retail Premium",
      eventType: "Campagne TikTok virale",
      stat1Value: `${animatedNumbers.views1?.toFixed(1) || '0'}M`,
      stat1Label: "Vues",
      stat2Value: "+420%",
      stat2Label: "Engagement",
      outcome: "Viral absolu",
      emoji: "🚀"
    },
    {
      company: "Marque Food & Beverage",
      eventType: "Collab YouTube exclusive",
      stat1Value: `${animatedNumbers.views2?.toFixed(1) || '0'}M`,
      stat1Label: "Vues",
      stat2Value: "x15",
      stat2Label: "Ventes",
      outcome: "Rupture stock",
      emoji: "🔥"
    },
    {
      company: "App Fintech Innovante",
      eventType: "Challenge Instagram",
      stat1Value: `${Math.floor(animatedNumbers.downloads || 0)}K`,
      stat1Label: "Downloads",
      stat2Value: "#1",
      stat2Label: "AppStore",
      outcome: "Trending mondial",
      emoji: "📈"
    },
    {
      company: "E-commerce Fashion",
      eventType: "Stories & Reels",
      stat1Value: `x${Math.floor(animatedNumbers.roi || 0)}`,
      stat1Label: "ROI",
      stat2Value: "5K+",
      stat2Label: "Commandes",
      outcome: "Record battu",
      emoji: "💎"
    }
  ];

  // Données pour événements
  const eventCards: ProofCard[] = [
    {
      company: "Fortune 500 Tech",
      eventType: "Convention internationale",
      stat1Value: Math.floor(animatedNumbers.attendees || 0),
      stat1Label: "Participants",
      stat2Value: "+68",
      stat2Label: "NPS Score",
      outcome: "Standing ovation",
      emoji: "👏"
    },
    {
      company: "Scale-up Innovante",
      eventType: "Team building créatif",
      stat1Value: `${Math.floor(animatedNumbers.satisfaction || 0)}%`,
      stat1Label: "Satisfaction",
      stat2Value: "100%",
      stat2Label: "Présence",
      outcome: "Équipe galvanisée",
      emoji: "⚡"
    },
    {
      company: "Groupe Pharmaceutique",
      eventType: "Séminaire stratégique",
      stat1Value: `${Math.floor(animatedNumbers.presence || 0)}%`,
      stat1Label: "Engagement",
      stat2Value: "5★",
      stat2Label: "Rating",
      outcome: "Transformation",
      emoji: "✨"
    },
    {
      company: "Cabinet Conseil Big 4",
      eventType: "Soirée clients VIP",
      stat1Value: Math.floor(animatedNumbers.deals || 0),
      stat1Label: "Deals",
      stat2Value: "100%",
      stat2Label: "Reco",
      outcome: "Pipeline doublé",
      emoji: "🎯"
    }
  ];

  // Sélection des cartes selon le parcours
  const mixedCards = [contentCards[0], eventCards[0], contentCards[1], eventCards[1]];
  
  const cards = userPath === 'content' ? contentCards :
                userPath === 'event' ? eventCards :
                mixedCards;

  // Titre adaptatif
  const title = userPath === 'content' ? "Ils ont explosé leurs metrics" :
                userPath === 'event' ? "Ils ont marqué les esprits" :
                "Résultats qui parlent";

  const subtitle = userPath === 'content' ? "Des créations qui transforment les marques" :
                   userPath === 'event' ? "Des événements qui restent gravés" :
                   "Des succès concrets, des clients ravis";

  return (
    <section className="proof-section" ref={sectionRef}>
      {/* Background animé */}
      <div className="proof-bg-gradient" />
      
      {/* Particules flottantes */}
      <div className="particle-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="proof-content">
        {/* En-tête */}
        <div className="proof-heading">
          <h2 className="proof-main-title">
            <span className="title-gradient">{title}</span>
          </h2>
          <p className="proof-description">{subtitle}</p>
        </div>

        {/* Grille de cartes */}
        <div className="proof-cards-grid">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="proof-card"
              style={{ '--card-delay': `${index * 0.15}s` } as React.CSSProperties}
            >
              {/* Header de carte */}
              <div className="card-company">{card.company}</div>
              <div className="card-event-type">{card.eventType}</div>

              {/* Statistiques */}
              <div className="card-stats">
                <div className="stat-item">
                  <span className="stat-number">{card.stat1Value}</span>
                  <span className="stat-label">{card.stat1Label}</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-number">{card.stat2Value}</span>
                  <span className="stat-label">{card.stat2Label}</span>
                </div>
              </div>

              {/* Résultat */}
              <div className="card-outcome">
                <span className="outcome-emoji">{card.emoji}</span>
                <span className="outcome-label">{card.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="proof-disclaimer">
          <p className="disclaimer-text">
            * Résultats réels de nos clients, détails anonymisés par confidentialité
          </p>
        </div>
      </div>
    </section>
  );
};