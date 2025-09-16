import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Rocket, Layout, Globe, Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import './MissionSection.css';

// Types
interface Feature {
  title: string;
  desc: string;
}

interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  features: Feature[];
}

// Données des services
const servicesData: Service[] = [
  {
    id: "production",
    number: "01",
    title: "Production",
    subtitle: "De l'idée à la scène",
    description: "Une approche globale de la production artistique. Nous transformons vos idées en spectacles vivants mémorables avec une expertise technique et créative sans faille.",
    icon: Star,
    features: [
      { title: "Direction artistique", desc: "Vision créative unique" },
      { title: "Production exécutive", desc: "Gestion complète du projet" },
      { title: "Mise en scène", desc: "Scénographie professionnelle" },
      { title: "Gestion technique", desc: "Support son, lumière, vidéo" }
    ]
  },
  {
    id: "management",
    number: "02",
    title: "Management",
    subtitle: "Votre carrière entre de bonnes mains",
    description: "Un accompagnement sur mesure pour propulser votre carrière. Nous gérons tous les aspects administratifs et stratégiques pour que vous puissiez vous concentrer sur votre art.",
    icon: Shield,
    features: [
      { title: "Développement carrière", desc: "Stratégie à long terme" },
      { title: "Négociations", desc: "Contrats et partenariats" },
      { title: "Gestion administrative", desc: "Paperasse simplifiée" },
      { title: "Relations pro", desc: "Réseau d'experts" }
    ]
  },
  {
    id: "digital",
    number: "03",
    title: "Digital",
    subtitle: "Votre présence en ligne",
    description: "Maîtrisez les enjeux du numérique avec une stratégie digitale complète. Nous créons et gérons votre image en ligne pour maximiser votre impact et votre audience.",
    icon: Rocket,
    features: [
      { title: "Réseaux sociaux", desc: "Instagram, TikTok, YouTube" },
      { title: "Création contenus", desc: "Photos, vidéos, stories" },
      { title: "Community management", desc: "Engagement des fans" },
      { title: "Marketing digital", desc: "Campagnes ciblées" }
    ]
  },
  {
    id: "communication",
    number: "04",
    title: "Communication",
    subtitle: "Votre image, notre expertise",
    description: "Développez une image forte et cohérente. Nous créons une identité visuelle unique qui vous distingue et raconte votre histoire dans l'univers du spectacle vivant.",
    icon: Layout,
    features: [
      { title: "Relations presse", desc: "Médias nationaux" },
      { title: "Identité visuelle", desc: "Logo, charte graphique" },
      { title: "Com événementielle", desc: "Lancement de spectacles" },
      { title: "Relations publiques", desc: "Image de marque" }
    ]
  },
  {
    id: "diffusion",
    number: "05",
    title: "Diffusion & Tournées",
    subtitle: "Rayonnez sur toutes les scènes",
    description: "Portez votre spectacle partout en France. Organisation millimétrée, réseau de salles partenaires et support technique pour des tournées réussies.",
    icon: Globe,
    features: [
      { title: "Booking national", desc: "300+ salles partenaires" },
      { title: "Gestion tournées", desc: "Logistique complète" },
      { title: "Relations salles", desc: "Négociation, contrats" },
      { title: "Support technique", desc: "Équipe sur place" }
    ]
  },
  {
    id: "evenements",
    number: "06",
    title: "Événements Spéciaux",
    subtitle: "Des moments uniques",
    description: "Créez des moments inoubliables pour vos événements privés ou corporatifs. Production sur mesure, coordination complète et expertise événementielle premium.",
    icon: Calendar,
    features: [
      { title: "Conception sur mesure", desc: "Événements uniques" },
      { title: "Production complète", desc: "Clé en main" },
      { title: "Coordination", desc: "Gestion A à Z" },
      { title: "Technique premium", desc: "Équipement haut de gamme" }
    ]
  }
];

// Composant ServicePanel
interface ServicePanelProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

const ServicePanel: React.FC<ServicePanelProps> = ({ service, isActive, onClick }) => {
  const Icon = service.icon;
  
  return (
    <div 
      className={`service-panel ${isActive ? 'active' : ''}`}
      data-service={service.id}
    >
      <div className="panel-container">
        {/* Header cliquable */}
        <div className="panel-header" onClick={onClick}>
          {/* Badge numéro visible */}
          <div className="panel-number">{service.number}</div>
          
          {/* Numéro géant en arrière-plan */}
          <div className="panel-number-bg">{service.number}</div>
          
          {/* Icône */}
          <div className="panel-icon-wrapper">
            <div className="panel-icon">
              <Icon />
            </div>
          </div>
          
          {/* Infos */}
          <div className="panel-info">
            <h3 className="panel-title">{service.title}</h3>
            <p className="panel-subtitle">{service.subtitle}</p>
          </div>
          
          {/* Toggle button */}
          <div className="panel-toggle">
            <ChevronDown />
          </div>
        </div>
        
        {/* Contenu expansible */}
        {isActive && (
          <div className="panel-content">
            <div className="content-inner">
              <p className="panel-description">{service.description}</p>
              
              {/* Grille de features */}
              <div className="features-grid">
                {service.features.map((feature, i) => (
                  <div key={i} className="feature-card">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-desc">{feature.desc}</p>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Link to={`/services/${service.id}`} className="panel-cta">
                <span>En savoir plus</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Composant principal
export const MissionSection: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  
  const togglePanel = useCallback((serviceId: string) => {
    setActivePanel(prevActive => prevActive === serviceId ? null : serviceId);
  }, []);
  
  // Génération des étoiles de fond
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.3
  }));
  
  return (
    <section className="mission-section">
      {/* Effets de fond */}
      <div className="mission-background">
        <div className="bg-gradient-overlay" />
        
        {/* Étoiles statiques */}
        <div className="stars-container">
          {stars.map(star => (
            <div
              key={star.id}
              className="star"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                opacity: star.opacity
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Header spectaculaire */}
      <div className="mission-header">
        <div className="title-container">
          <div className="title-glow" />
          <h2 className="main-title">
            <span className="title-word-1">Nos</span>
            <span className="title-word-2">Services</span>
          </h2>
        </div>
        
        <p className="subtitle">
          Six expertises pour propulser votre talent
        </p>
      </div>
      
      {/* CASCADE de services */}
      <div className="services-cascade">
        {servicesData.map((service) => (
          <ServicePanel
            key={service.id}
            service={service}
            isActive={activePanel === service.id}
            onClick={() => togglePanel(service.id)}
          />
        ))}
      </div>
      
      {/* Footer avec CTA */}
      <div className="section-footer">
        <Link to="/services" className="footer-cta">
          <span>Découvrir tous nos services</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};