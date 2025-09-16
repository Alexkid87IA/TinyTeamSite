import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Rocket, Layout, Globe, Calendar, ArrowRight } from 'lucide-react';
import './MissionSection.css';

// Types
interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

// Données des services
const servicesData: Service[] = [
  {
    id: "production",
    number: "01",
    title: "Production",
    subtitle: "De l'idée à la scène",
    description: "Une approche globale de la production artistique pour transformer vos idées en spectacles mémorables.",
    icon: Star,
    features: ["Direction artistique", "Production exécutive", "Mise en scène", "Gestion technique"]
  },
  {
    id: "management",
    number: "02",
    title: "Management",
    subtitle: "Votre carrière entre de bonnes mains",
    description: "Accompagnement personnalisé pour développer votre carrière et maximiser votre potentiel artistique.",
    icon: Shield,
    features: ["Développement carrière", "Négociations", "Gestion admin", "Relations pro"]
  },
  {
    id: "digital",
    number: "03",
    title: "Digital",
    subtitle: "Votre présence en ligne",
    description: "Stratégie digitale complète pour maximiser votre impact et développer votre audience.",
    icon: Rocket,
    features: ["Réseaux sociaux", "Création contenus", "Community management", "Marketing digital"]
  },
  {
    id: "communication",
    number: "04",
    title: "Communication",
    subtitle: "Votre image, notre expertise",
    description: "Développez une image forte et cohérente qui vous distingue dans le spectacle vivant.",
    icon: Layout,
    features: ["Relations presse", "Identité visuelle", "Com événementielle", "Relations publiques"]
  },
  {
    id: "diffusion",
    number: "05",
    title: "Diffusion & Tournées",
    subtitle: "Rayonnez sur toutes les scènes",
    description: "Organisation millimétrée et réseau de salles partenaires pour des tournées réussies.",
    icon: Globe,
    features: ["Booking national", "Gestion tournées", "Relations salles", "Support technique"]
  },
  {
    id: "evenements",
    number: "06",
    title: "Événements Spéciaux",
    subtitle: "Des moments uniques",
    description: "Production sur mesure et expertise événementielle pour créer des moments inoubliables.",
    icon: Calendar,
    features: ["Conception sur mesure", "Production complète", "Coordination", "Technique premium"]
  }
];

// Composant ServiceCard
interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  
  return (
    <Link 
      to={`/services/${service.id}`} 
      className="service-card" 
      data-service={service.id}
    >
      {/* Numéro du service */}
      <div className="service-number">
        {service.number}
      </div>
      
      {/* Icône principale */}
      <Icon className="service-icon" />
      
      {/* Contenu textuel */}
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-subtitle">{service.subtitle}</p>
        <p className="service-description">{service.description}</p>
      </div>
      
      {/* Liste des features */}
      <div className="service-features">
        {service.features.map((feature, index) => (
          <span key={index} className="feature-pill">
            {feature}
          </span>
        ))}
      </div>
      
      {/* Bouton flèche */}
      <div className="service-cta">
        <ArrowRight />
      </div>
    </Link>
  );
};

// Composant principal MissionSection
export const MissionSection: React.FC = () => {
  // Génération des particules
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.3,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 5
  }));

  return (
    <section className="mission-section">
      {/* Effets de fond */}
      <div className="mission-background">
        <div className="bg-gradient" />
        <div className="bg-particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                opacity: particle.opacity,
                animation: `float ${particle.duration}s linear infinite`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* En-tête de section */}
      <header className="mission-header">
        <h2 className="mission-title">
          <span className="title-line-1">Une team au service</span>
          <span className="title-line-2">de votre carrière</span>
        </h2>
        <p className="mission-subtitle">
          Six expertises complémentaires pour propulser votre talent
        </p>
      </header>
      
      {/* Conteneur principal */}
      <div className="services-container">
        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
            />
          ))}
        </div>
      </div>
      
      {/* Call to action final */}
      <footer className="mission-footer">
        <Link to="/services" className="main-cta">
          <span>Découvrir tous nos services</span>
          <ArrowRight size={20} />
        </Link>
      </footer>
    </section>
  );
};