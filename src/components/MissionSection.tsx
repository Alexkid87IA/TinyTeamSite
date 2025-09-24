import React, { useState } from 'react';
import './MissionSection.css';

// Types
interface Service {
  id: string;
  acte: string;
  title: string;
  subtitle: string;
  story: string;
  color: string;
}

// Services data
const servicesData = [
  {
    id: "production",
    acte: "Acte I",
    title: "Production",
    subtitle: "Donner vie aux idées",
    story: "Imaginez une idée qui prend forme. Un rêve griffonné sur un coin de table qui devient un spectacle époustouflant. C'est notre première magie : transformer l'invisible en inoubliable. Nous sculptons vos visions pour qu'elles touchent les cœurs.",
    color: "#ffff00"
  },
  {
    id: "management",
    acte: "Acte II",
    title: "Management",
    subtitle: "Guider les talents",
    story: "Chaque artiste est unique, chaque parcours singulier. Nous devenons les architectes silencieux de carrières extraordinaires. Avec bienveillance et expertise, nous traçons la route vers les sommets.",
    color: "#00ffff"
  },
  {
    id: "digital",
    acte: "Acte III",
    title: "Digital",
    subtitle: "Rayonner dans le monde",
    story: "Dans l'océan numérique, nous créons des phares. Vos histoires traversent les écrans, touchent des milliers d'âmes. Nous orchestrons votre présence digitale comme une symphonie.",
    color: "#a855f7"
  },
  {
    id: "communication",
    acte: "Acte IV",
    title: "Communication",
    subtitle: "Créer l'émotion",
    story: "Les mots ont le pouvoir de créer des mondes. Nous façonnons votre image avec la précision d'un orfèvre et l'âme d'un poète. Chaque message devient une invitation au voyage.",
    color: "#ff00ff"
  },
  {
    id: "diffusion",
    acte: "Acte V",
    title: "Diffusion",
    subtitle: "Conquérir les scènes",
    story: "De théâtre en théâtre, de ville en ville, nous écrivons votre odyssée. Notre réseau devient votre constellation : 300 salles, autant d'étoiles où briller.",
    color: "#00ff88"
  },
  {
    id: "evenements",
    acte: "Final",
    title: "Événements",
    subtitle: "Marquer les esprits",
    story: "Pour les moments qui comptent, nous créons l'exceptionnel. Chaque événement devient une œuvre d'art totale, une expérience qui transcende le temps.",
    color: "#ff8800"
  }
];

// Composants d'icônes simplifiés
const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 11l3-3 3 3M12 8v13M7 20h10l-5-5-5 5z" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 11l18-8v18l-18-8v8l4-4-4-4z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ArrowRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// Map des icônes
const iconMap = {
  production: StarIcon,
  management: ShieldIcon,
  digital: RocketIcon,
  communication: MegaphoneIcon,
  diffusion: GlobeIcon,
  evenements: CalendarIcon
};

export const MissionSection = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const togglePanel = (serviceId: string) => {
    setActivePanel(prevActive => prevActive === serviceId ? null : serviceId);
  };

  return (
    <section className="mission-section">
      {/* Effets de fond spectaculaires (desktop uniquement) */}
      <div className="mission-background">
        {/* Grille animée */}
        <div className="mission-grid" />
        
        {/* Orbes de lumière */}
        <div className="mission-orb mission-orb-1" />
        <div className="mission-orb mission-orb-2" />
        <div className="mission-orb mission-orb-3" />
        
        {/* Étoiles scintillantes */}
        <div className="mission-stars">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="mission-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="mission-main-content">
        
        {/* Header épique - Tous les textes conservés */}
        <div className="mission-header">
          <div className="mission-title-glow" />
          
          <h2 className="mission-title">
            <span className="mission-title-line-1">Comment nous</span>
            <span className="mission-title-line-2">Créons la magie</span>
          </h2>
          
          <p className="mission-subtitle">
            De l'idée au rideau final, chaque étape est une œuvre
          </p>
        </div>

        {/* Services accordéon */}
        <div className="mission-services">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.id];
            
            return (
              <div
                key={service.id}
                className={`mission-service-panel mission-panel-${service.id} ${activePanel === service.id ? 'active' : ''}`}
                style={{ 
                  '--panel-color': service.color,
                  animationDelay: `${index * 0.1}s`
                } as React.CSSProperties}
              >
                <div 
                  className="mission-panel-header"
                  onClick={() => togglePanel(service.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activePanel === service.id}
                >
                  {/* Badge d'acte */}
                  <div className="mission-acte-badge">
                    {service.acte}
                  </div>
                  
                  {/* Titre et sous-titre */}
                  <div className="mission-service-info">
                    <h3 className="mission-service-title">{service.title}</h3>
                    <p className="mission-service-subtitle">{service.subtitle}</p>
                  </div>
                  
                  {/* Icône */}
                  <div className="mission-service-icon">
                    <Icon />
                  </div>
                  
                  {/* Chevron (desktop uniquement) */}
                  <ChevronDown className={`mission-chevron ${activePanel === service.id ? 'rotated' : ''}`} />
                </div>
                
                {/* Contenu expansible */}
                <div className={`mission-panel-content ${activePanel === service.id ? 'expanded' : ''}`}>
                  <div className="mission-content-inner">
                    <p className="mission-service-story">{service.story}</p>
                    
                    <a href={`services/${service.id}`} className="mission-service-link">
                      <span>Découvrir ce service</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section finale */}
        <footer className="mission-outro">
          <p className="mission-outro-quote">
            "Six expertises, une vision : sublimer votre talent"
          </p>
          
          <a href="services" className="mission-cta-button">
            <span>Explorer tous nos services</span>
            <ArrowRight />
          </a>
        </footer>
      </div>
    </section>
  );
};