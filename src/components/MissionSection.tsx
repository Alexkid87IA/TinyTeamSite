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
    description: "Une approche globale de la production artistique. Nous transformons vos idées en spectacles vivants mémorables.",
    icon: Star,
    features: [
      { title: "Direction artistique", desc: "Vision créative" },
      { title: "Production exécutive", desc: "Gestion complète" },
      { title: "Mise en scène", desc: "Scénographie pro" },
      { title: "Gestion technique", desc: "Son, lumière, vidéo" }
    ]
  },
  {
    id: "management",
    number: "02",
    title: "Management",
    subtitle: "Votre carrière entre de bonnes mains",
    description: "Un accompagnement sur mesure pour propulser votre carrière artistique au niveau supérieur.",
    icon: Shield,
    features: [
      { title: "Développement carrière", desc: "Stratégie long terme" },
      { title: "Négociations", desc: "Contrats optimisés" },
      { title: "Gestion administrative", desc: "Paperasse simplifiée" },
      { title: "Relations pro", desc: "Réseau d'experts" }
    ]
  },
  {
    id: "digital",
    number: "03",
    title: "Digital",
    subtitle: "Votre présence en ligne",
    description: "Stratégie digitale complète pour maximiser votre impact et développer votre audience.",
    icon: Rocket,
    features: [
      { title: "Réseaux sociaux", desc: "Multi-plateformes" },
      { title: "Création contenus", desc: "Photos, vidéos" },
      { title: "Community management", desc: "Engagement fans" },
      { title: "Marketing digital", desc: "Campagnes ciblées" }
    ]
  },
  {
    id: "communication",
    number: "04",
    title: "Communication",
    subtitle: "Votre image, notre expertise",
    description: "Développez une image forte et cohérente qui vous distingue dans le spectacle vivant.",
    icon: Layout,
    features: [
      { title: "Relations presse", desc: "Médias nationaux" },
      { title: "Identité visuelle", desc: "Charte graphique" },
      { title: "Com événementielle", desc: "Lancements" },
      { title: "Relations publiques", desc: "Image de marque" }
    ]
  },
  {
    id: "diffusion",
    number: "05",
    title: "Diffusion & Tournées",
    subtitle: "Rayonnez sur toutes les scènes",
    description: "Organisation millimétrée et réseau de salles partenaires pour des tournées réussies.",
    icon: Globe,
    features: [
      { title: "Booking national", desc: "300+ salles" },
      { title: "Gestion tournées", desc: "Logistique A-Z" },
      { title: "Relations salles", desc: "Négociations" },
      { title: "Support technique", desc: "Équipe dédiée" }
    ]
  },
  {
    id: "evenements",
    number: "06",
    title: "Événements Spéciaux",
    subtitle: "Des moments uniques",
    description: "Production sur mesure pour créer des moments inoubliables lors d'événements exceptionnels.",
    icon: Calendar,
    features: [
      { title: "Conception sur mesure", desc: "Événements uniques" },
      { title: "Production complète", desc: "Clé en main" },
      { title: "Coordination", desc: "Gestion globale" },
      { title: "Technique premium", desc: "Équipement pro" }
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
        <div 
          className="panel-header" 
          onClick={onClick}
          role="button"
          tabIndex={0}
          aria-expanded={isActive}
        >
          {/* Badge numéro */}
          <div className="panel-number">{service.number}</div>
          
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
                <ArrowRight size={16} />
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
  
  return (
    <section className="mission-section">
      {/* Effets de fond simples */}
      <div className="mission-background">
        <div className="bg-gradient-overlay" />
      </div>
      
      {/* Header */}
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
      <footer className="section-footer">
        <Link to="/services" className="footer-cta">
          <span>Découvrir tous nos services</span>
          <ArrowRight />
        </Link>
      </footer>
    </section>
  );
};