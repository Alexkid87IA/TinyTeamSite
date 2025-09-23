import React, { useState } from 'react';
import './MissionSection.css';

// Types
interface Service {
  id: string;
  acte: string;
  title: string;
  subtitle: string;
  story: string;
  iconPath: string;
  color: string;
}

// Services data
const servicesData: Service[] = [
  {
    id: "production",
    acte: "Acte I",
    title: "Production",
    subtitle: "Donner vie aux idées",
    story: "Imaginez une idée qui prend forme. Un rêve griffonné sur un coin de table qui devient un spectacle époustouflant. C'est notre première magie : transformer l'invisible en inoubliable. Nous sculptons vos visions pour qu'elles touchent les cœurs.",
    iconPath: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    color: "#ffff00"
  },
  {
    id: "management",
    acte: "Acte II",
    title: "Management",
    subtitle: "Guider les talents",
    story: "Chaque artiste est unique, chaque parcours singulier. Nous devenons les architectes silencieux de carrières extraordinaires. Avec bienveillance et expertise, nous traçons la route vers les sommets.",
    iconPath: "M9 12.75L11.25 15 15 9.75m-3-8.625a14.25 14.25 0 00-10.057 4.193A14.25 14.25 0 005.625.125h.008a14.25 14.25 0 0010.057 4.193z",
    color: "#00ffff"
  },
  {
    id: "digital",
    acte: "Acte III",
    title: "Digital",
    subtitle: "Rayonner dans le monde",
    story: "Dans l'océan numérique, nous créons des phares. Vos histoires traversent les écrans, touchent des milliers d'âmes. Nous orchestrons votre présence digitale comme une symphonie.",
    iconPath: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.2.058-.3.08a15.009 15.009 0 01-2.28-5.88",
    color: "#a855f7"
  },
  {
    id: "communication",
    acte: "Acte IV",
    title: "Communication",
    subtitle: "Créer l'émotion",
    story: "Les mots ont le pouvoir de créer des mondes. Nous façonnons votre image avec la précision d'un orfèvre et l'âme d'un poète. Chaque message devient une invitation au voyage.",
    iconPath: "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46",
    color: "#ff00ff"
  },
  {
    id: "diffusion",
    acte: "Acte V",
    title: "Diffusion",
    subtitle: "Conquérir les scènes",
    story: "De théâtre en théâtre, de ville en ville, nous écrivons votre odyssée. Notre réseau devient votre constellation : 300 salles, autant d'étoiles où briller.",
    iconPath: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    color: "#00ff88"
  },
  {
    id: "evenements",
    acte: "Final",
    title: "Événements",
    subtitle: "Marquer les esprits",
    story: "Pour les moments qui comptent, nous créons l'exceptionnel. Chaque événement devient une œuvre d'art totale, une expérience qui transcende le temps.",
    iconPath: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z",
    color: "#ff8800"
  }
];

// Icônes SVG simples
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

const ChevronDown = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      {/* Effets de fond spectaculaires */}
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
        
        {/* Header épique - NOUVELLES CLASSES */}
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
                  
                  {/* Icône */}
                  <div className="mission-service-icon">
                    <Icon />
                  </div>
                  
                  {/* Titre et sous-titre */}
                  <div className="mission-service-info">
                    <h3 className="mission-service-title">{service.title}</h3>
                    <p className="mission-service-subtitle">{service.subtitle}</p>
                  </div>
                  
                  {/* Chevron */}
                  <ChevronDown className={`mission-chevron ${activePanel === service.id ? 'rotated' : ''}`} />
                </div>
                
                {/* Contenu expansible */}
                <div className={`mission-panel-content ${activePanel === service.id ? 'expanded' : ''}`}>
                  <div className="mission-content-inner">
                    <p className="mission-service-story">{service.story}</p>
                    
                    <a href={`/services/${service.id}`} className="mission-service-link">
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
          
          <a href="/services" className="mission-cta-button">
            <span>Explorer tous nos services</span>
            <ArrowRight />
          </a>
        </footer>
      </div>
    </section>
  );
};