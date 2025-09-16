import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Shield, 
  Rocket, 
  Layout, 
  Globe, 
  Calendar, 
  ChevronDown, 
  ArrowRight,
  Megaphone
} from 'lucide-react';
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
    description: "Une approche globale de la production artistique. Nous transformons vos idées en spectacles vivants mémorables avec une expertise technique et créative inégalée.",
    icon: Star,
    features: [
      { title: "Direction artistique", desc: "Vision créative unique" },
      { title: "Production exécutive", desc: "Gestion complète A-Z" },
      { title: "Mise en scène", desc: "Scénographie innovante" },
      { title: "Gestion technique", desc: "Son, lumière, vidéo HD" }
    ]
  },
  {
    id: "management",
    number: "02",
    title: "Management",
    subtitle: "Votre carrière entre de bonnes mains",
    description: "Un accompagnement sur mesure pour propulser votre carrière artistique. Nous gérons tous les aspects pour que vous puissiez vous concentrer sur votre art.",
    icon: Shield,
    features: [
      { title: "Développement carrière", desc: "Stratégie long terme" },
      { title: "Négociations premium", desc: "Contrats optimisés" },
      { title: "Gestion administrative", desc: "Paperasse simplifiée" },
      { title: "Relations professionnelles", desc: "Réseau d'experts" }
    ]
  },
  {
    id: "digital",
    number: "03",
    title: "Digital",
    subtitle: "Votre présence en ligne",
    description: "Stratégie digitale complète pour maximiser votre impact. Nous créons une présence en ligne qui captive et engage votre audience.",
    icon: Rocket,
    features: [
      { title: "Réseaux sociaux", desc: "Multi-plateformes" },
      { title: "Création de contenus", desc: "Photos, vidéos, lives" },
      { title: "Community management", desc: "Engagement optimal" },
      { title: "Marketing digital", desc: "Campagnes ciblées ROI" }
    ]
  },
  {
    id: "communication",
    number: "04",
    title: "Communication",
    subtitle: "Votre image, notre expertise",
    description: "Développez une image forte et cohérente. Notre équipe de communication crée des stratégies qui font résonner votre message.",
    icon: Megaphone,
    features: [
      { title: "Relations presse", desc: "Médias nationaux" },
      { title: "Identité visuelle", desc: "Branding complet" },
      { title: "Com événementielle", desc: "Lancements mémorables" },
      { title: "Relations publiques", desc: "Image de marque forte" }
    ]
  },
  {
    id: "diffusion",
    number: "05",
    title: "Diffusion & Tournées",
    subtitle: "Rayonnez sur toutes les scènes",
    description: "Organisation millimétrée et réseau étendu pour des tournées réussies. Nous vous ouvrons les portes des plus grandes salles.",
    icon: Globe,
    features: [
      { title: "Booking national", desc: "300+ salles partenaires" },
      { title: "Gestion tournées", desc: "Logistique complète" },
      { title: "Relations salles", desc: "Négociations expertes" },
      { title: "Support technique", desc: "Équipe dédiée 24/7" }
    ]
  },
  {
    id: "evenements",
    number: "06",
    title: "Événements Spéciaux",
    subtitle: "Des moments uniques",
    description: "Production sur mesure pour créer des moments inoubliables. Chaque événement est une œuvre d'art unique, conçue pour marquer les esprits.",
    icon: Calendar,
    features: [
      { title: "Conception sur mesure", desc: "Événements uniques" },
      { title: "Production complète", desc: "Solution clé en main" },
      { title: "Coordination globale", desc: "Gestion intégrale" },
      { title: "Technique premium", desc: "Équipement haut de gamme" }
    ]
  }
];

// Composant pour les particules flottantes
const FloatingParticles: React.FC = () => {
  return (
    <div className="floating-particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

// Composant ServicePanel
interface ServicePanelProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const ServicePanel: React.FC<ServicePanelProps> = ({ service, isActive, onClick, index }) => {
  const Icon = service.icon;
  
  return (
    <div 
      className={`service-panel ${isActive ? 'active' : ''}`}
      data-service={service.id}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="panel-container">
        {/* Header cliquable */}
        <div 
          className="panel-header" 
          onClick={onClick}
          role="button"
          tabIndex={0}
          aria-expanded={isActive}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick();
            }
          }}
        >
          {/* Badge numéro */}
          <div className="panel-number">
            {service.number}
          </div>
          
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
        <div className="panel-content">
          <div className="content-inner">
            <p className="panel-description">{service.description}</p>
            
            {/* Grille de features */}
            <div className="features-grid">
              {service.features.map((feature, i) => (
                <div 
                  key={i} 
                  className="feature-card"
                  style={{ 
                    animationDelay: isActive ? `${i * 0.1}s` : '0s' 
                  }}
                >
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <Link to={`/services/${service.id}`} className="panel-cta">
              <span>En savoir plus</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant principal
export const MissionSection: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const togglePanel = useCallback((serviceId: string) => {
    setActivePanel(prevActive => prevActive === serviceId ? null : serviceId);
  }, []);
  
  return (
    <section className="mission-section">
      {/* Effets de fond animés */}
      <div className="mission-background">
        <div className="bg-gradient-overlay" />
        <FloatingParticles />
      </div>
      
      {/* Header avec titre corrigé */}
      <header className="mission-header">
        <div className="title-container">
          <h2 className="main-title">
            <span className="title-word-1">Nos</span>
            <span className="title-word-2">Services</span>
          </h2>
        </div>
        
        <p className="subtitle">
          Six expertises pour propulser votre talent
        </p>
      </header>
      
      {/* Services en cascade */}
      <div className="services-cascade">
        {servicesData.map((service, index) => (
          <ServicePanel
            key={service.id}
            service={service}
            isActive={activePanel === service.id}
            onClick={() => togglePanel(service.id)}
            index={index}
          />
        ))}
      </div>
      
      {/* Footer avec CTA amélioré */}
      <footer className="section-footer">
        <Link to="/services" className="footer-cta">
          <span>Découvrir tous nos services</span>
          <ArrowRight />
        </Link>
      </footer>
    </section>
  );
};

export default MissionSection;