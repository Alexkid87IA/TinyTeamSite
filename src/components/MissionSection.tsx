import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Shield, Rocket, Layout, Globe, Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import './MissionSection.css';

// Données des services
const servicesData = [
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

const ServicePanel = ({ service, index, isActive, onClick }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      className={`service-panel ${isActive ? 'active' : ''}`}
      data-service={service.id}
      style={{ '--index': index } as React.CSSProperties}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="panel-container">
        {/* Effet de lumière */}
        <div className="light-sweep" />
        
        {/* Header cliquable */}
        <div className="panel-header" onClick={onClick}>
          {/* Numéro en arrière-plan - AMÉLIORÉ */}
          <div className="panel-number-bg">{service.number}</div>
          
          {/* Icône animée */}
          <div className="panel-icon-wrapper">
            <div className="panel-icon-bg" />
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
        <AnimatePresence>
          {isActive && (
            <motion.div 
              className="panel-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="content-inner">
                <p className="panel-description">{service.description}</p>
                
                {/* Grille de features */}
                <div className="features-grid">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="feature-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-desc">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA */}
                <Link to={`/services/${service.id}`} className="panel-cta">
                  <span>En savoir plus</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const MissionSection = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  
  const togglePanel = (serviceId: string) => {
    setActivePanel(activePanel === serviceId ? null : serviceId);
  };
  
  return (
    <section className="mission-section">
      {/* Effets de fond */}
      <div className="mission-background">
        {/* Grille animée */}
        <div className="grid-lines" />
        
        {/* Vagues de couleur */}
        <div className="color-waves">
          {[
            { color: 'rgba(255, 0, 255, 0.3)', delay: '0s' },
            { color: 'rgba(0, 255, 255, 0.3)', delay: '10s' },
            { color: 'rgba(255, 255, 0, 0.3)', delay: '20s' }
          ].map((wave, i) => (
            <motion.div
              key={i}
              className="wave"
              style={{
                '--wave-color': wave.color,
                animationDelay: wave.delay
              } as React.CSSProperties}
            />
          ))}
        </div>
        
        {/* Étoiles scintillantes */}
        <div className="stars">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
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
        
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Six expertises pour propulser votre talent
        </motion.p>
      </div>
      
      {/* CASCADE de services */}
      <div className="services-cascade">
        {servicesData.map((service, index) => (
          <ServicePanel
            key={service.id}
            service={service}
            index={index}
            isActive={activePanel === service.id}
            onClick={() => togglePanel(service.id)}
          />
        ))}
      </div>
      
      {/* Footer avec CTA */}
      <motion.div 
        className="section-footer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/services" className="footer-cta">
          <span>Découvrir tous nos services</span>
          <ArrowRight size={24} />
        </Link>
      </motion.div>
    </section>
  );
};