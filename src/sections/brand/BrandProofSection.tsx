import React, { useEffect, useState } from 'react';
import './BrandProofSection.css';

interface BrandProofSectionProps {
  userPath?: 'content' | 'event' | null;
}

export const BrandProofSection: React.FC<BrandProofSectionProps> = ({ userPath }) => {
  const [isInView, setIsInView] = useState(false);
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);

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

    const section = document.querySelector('.brand-proof-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    // Different targets based on path
    let targets = [0, 0, 0, 0];
    
    if (userPath === 'content') {
      targets = [5000000, 2000000, 50000, 8];
    } else if (userPath === 'event') {
      targets = [800, 100, 95, 30];
    } else {
      targets = [3000000, 500, 100, 10];
    }

    // Animate counters
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
  }, [isInView, userPath]);

  const contentCases = [
    {
      client: "Groupe retail",
      type: "Campagne TikTok",
      metric1: `${(counters[0] / 1000000).toFixed(1)}M`,
      metric1Label: "vues",
      metric2: "+300%",
      metric2Label: "engagement",
      result: "Viralité totale"
    },
    {
      client: "Marque food",
      type: "Collab YouTube",
      metric1: `${(counters[1] / 1000000).toFixed(1)}M`,
      metric1Label: "vues",
      metric2: "x10",
      metric2Label: "ventes",
      result: "Best seller"
    },
    {
      client: "App mobile",
      type: "Challenge viral",
      metric1: `${Math.floor(counters[2] / 1000)}K`,
      metric1Label: "téléchargements",
      metric2: "#1",
      metric2Label: "trending",
      result: "Data réelle"
    },
    {
      client: "E-commerce mode",
      type: "Stories Instagram",
      metric1: `x${Math.floor(counters[3])}`,
      metric1Label: "ROI",
      metric2: "2000",
      metric2Label: "commandes",
      result: "Best seller"
    }
  ];

  const eventCases = [
    {
      client: "Entreprise CAC40",
      type: "Convention annuelle",
      metric1: Math.floor(counters[0]),
      metric1Label: "personnes",
      metric2: "+45",
      metric2Label: "NPS",
      result: "Standing ovation"
    },
    {
      client: "Scale-up tech",
      type: "Team building",
      metric1: `${Math.floor(counters[1])}%`,
      metric1Label: "satisfaction",
      metric2: "0",
      metric2Label: "absents",
      result: "Équipe soudée"
    },
    {
      client: "Groupe pharma",
      type: "Séminaire annuel",
      metric1: `${Math.floor(counters[2])}%`,
      metric1Label: "présence",
      metric2: "5★",
      metric2Label: "notation",
      result: "Standing ovation"
    },
    {
      client: "Cabinet conseil",
      type: "Soirée clients",
      metric1: Math.floor(counters[3]),
      metric1Label: "deals",
      metric2: "100%",
      metric2Label: "recommandation",
      result: "Carnet plein"
    }
  ];

  const mixedCases = [
    contentCases[0],
    contentCases[1],
    eventCases[0],
    eventCases[1]
  ];

  let cases = userPath === 'content' ? contentCases : 
              userPath === 'event' ? eventCases : 
              mixedCases;

  const title = userPath === 'content' ? "ILS ONT TRANSFORMÉ LEUR CONTENT" :
                userPath === 'event' ? "ILS ONT MARQUÉ LEUR AUDIENCE" :
                "ILS NOUS FONT CONFIANCE";

  return (
    <section className="brand-proof-section">
      <div className="proof-container">
        {/* Header */}
        <div className="proof-header">
          <h2 className="proof-title">
            <span className="title-line">{title}</span>
          </h2>
          <p className="proof-subtitle">
            Des résultats concrets, des clients ravis.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className={`case-card ${isInView ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="case-header">
                <p className="case-client">{caseItem.client}</p>
                <p className="case-type">{caseItem.type}</p>
              </div>

              <div className="case-metrics">
                <div className="metric">
                  <div className="metric-value">{caseItem.metric1}</div>
                  <div className="metric-label">{caseItem.metric1Label}</div>
                </div>
                <div className="metric-separator">×</div>
                <div className="metric">
                  <div className="metric-value">{caseItem.metric2}</div>
                  <div className="metric-label">{caseItem.metric2Label}</div>
                </div>
              </div>

              <div className="case-result">
                <span className="result-icon">★</span>
                <span className="result-text">{caseItem.result}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="proof-footer">
          <p className="footer-note">
            * Résultats réels, clients anonymisés par confidentialité
          </p>
        </div>
      </div>
    </section>
  );
};