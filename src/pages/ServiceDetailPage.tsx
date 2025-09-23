import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './ServiceDetailPage.css';

const services = {
  production: {
    title: "Production de Spectacles",
    description: "De la conception à la réalisation, nous donnons vie à vos projets artistiques avec excellence et créativité.",
    longDescription: `Notre équipe de production accompagne chaque étape de votre projet artistique, de sa conception initiale jusqu'à sa réalisation sur scène. Nous mettons à votre disposition notre expertise technique, notre créativité et notre réseau pour faire de votre spectacle un moment d'exception.

    Nous croyons que chaque artiste est unique et mérite un accompagnement sur mesure. C'est pourquoi nous adaptons notre approche à vos besoins spécifiques, tout en maintenant les plus hauts standards de qualité.`,
    icon: "🎭",
    features: [
      "Direction artistique complète",
      "Mise en scène professionnelle",
      "Production technique de pointe",
      "Gestion logistique intégrale",
      "Coordination des équipes",
      "Suivi budgétaire détaillé"
    ],
    process: [
      { title: "Conception", description: "Définition du concept artistique et des besoins techniques" },
      { title: "Pré-production", description: "Planification détaillée et coordination des équipes" },
      { title: "Production", description: "Réalisation et suivi technique du spectacle" },
      { title: "Post-production", description: "Évaluation et optimisation pour les représentations futures" }
    ]
  },
  management: {
    title: "Management d'Artistes",
    description: "Un accompagnement complet et personnalisé pour développer votre carrière et maximiser votre potentiel.",
    longDescription: `Notre service de management d'artistes offre un accompagnement global pour développer votre carrière de manière stratégique et durable. Nous nous positionnons comme de véritables partenaires, investis dans votre réussite à long terme.

    Notre approche combine expertise artistique, vision stratégique et connaissance approfondie du marché pour vous permettre d'atteindre vos objectifs tout en préservant votre authenticité.`,
    icon: "🛡️",
    features: [
      "Développement de carrière",
      "Stratégie artistique",
      "Gestion administrative",
      "Négociation contrats",
      "Relations professionnelles",
      "Planning & organisation"
    ],
    process: [
      { title: "Analyse", description: "Évaluation de votre projet et de vos objectifs" },
      { title: "Stratégie", description: "Élaboration d'un plan de développement sur mesure" },
      { title: "Action", description: "Mise en œuvre des actions définies" },
      { title: "Suivi", description: "Évaluation continue et ajustements stratégiques" }
    ]
  },
  digital: {
    title: "Développement Digital",
    description: "Construisez votre présence en ligne et engagez votre communauté avec des stratégies innovantes.",
    longDescription: `Dans un monde de plus en plus connecté, votre présence digitale est devenue un élément clé de votre succès. Notre équipe digitale combine expertise technique et créativité pour développer votre image en ligne et créer une connexion authentique avec votre public.

    Nous développons des stratégies digitales sur mesure qui amplifient votre impact et renforcent votre marque personnelle.`,
    icon: "🚀",
    features: [
      "Stratégie réseaux sociaux",
      "Création de contenu",
      "Community management",
      "Marketing digital",
      "Analyse de performance",
      "Veille stratégique"
    ],
    process: [
      { title: "Audit", description: "Analyse de votre présence digitale actuelle" },
      { title: "Stratégie", description: "Définition des objectifs et du plan d'action" },
      { title: "Création", description: "Production de contenu et mise en place des actions" },
      { title: "Optimisation", description: "Suivi des performances et ajustements" }
    ]
  },
  communication: {
    title: "Communication & Image",
    description: "Développez une image forte et cohérente qui vous distingue dans l'univers du spectacle.",
    longDescription: `Votre image est votre signature dans l'industrie du spectacle. Notre expertise en communication vous aide à construire une identité forte et mémorable qui résonne avec votre public et renforce votre positionnement artistique.

    Nous créons des stratégies de communication sur mesure qui mettent en valeur votre unicité et amplifient votre message.`,
    icon: "📱",
    features: [
      "Relations presse",
      "Identité visuelle",
      "Stratégie de marque",
      "Communication événementielle",
      "Relations publiques",
      "Gestion de crise"
    ],
    process: [
      { title: "Analyse", description: "Étude de votre positionnement actuel" },
      { title: "Conception", description: "Création de votre stratégie de communication" },
      { title: "Déploiement", description: "Mise en œuvre des actions de communication" },
      { title: "Évaluation", description: "Mesure d'impact et optimisation" }
    ]
  },
  diffusion: {
    title: "Diffusion & Tournées",
    description: "Portez votre spectacle aux quatre coins de la France avec une organisation millimétrée.",
    longDescription: `La diffusion est l'art de faire voyager votre spectacle et de toucher de nouveaux publics. Notre expertise en tournées vous permet de vous concentrer sur votre performance pendant que nous gérons tous les aspects logistiques et organisationnels.

    Nous construisons des tournées optimisées qui maximisent votre impact tout en respectant vos besoins artistiques et personnels.`,
    icon: "🌍",
    features: [
      "Booking national",
      "Gestion de tournées",
      "Relations salles",
      "Support technique",
      "Logistique complète",
      "Planning tournées"
    ],
    process: [
      { title: "Planification", description: "Élaboration du plan de tournée" },
      { title: "Booking", description: "Négociation avec les salles et programmateurs" },
      { title: "Organisation", description: "Coordination logistique et technique" },
      { title: "Suivi", description: "Accompagnement pendant la tournée" }
    ]
  },
  evenements: {
    title: "Événements Spéciaux",
    description: "Créez des moments uniques et mémorables pour des occasions exceptionnelles.",
    longDescription: `Les événements spéciaux sont des moments uniques qui méritent une attention particulière. Notre expertise en organisation d'événements vous garantit des moments mémorables, parfaitement exécutés et alignés avec vos objectifs.

    Nous prenons en charge chaque détail pour transformer vos idées en expériences inoubliables.`,
    icon: "🎉",
    features: [
      "Conception événementielle",
      "Production sur mesure",
      "Coordination complète",
      "Gestion technique",
      "Logistique dédiée",
      "Suivi budgétaire"
    ],
    process: [
      { title: "Conception", description: "Définition du concept et des objectifs" },
      { title: "Planification", description: "Organisation détaillée de l'événement" },
      { title: "Production", description: "Mise en place et coordination" },
      { title: "Réalisation", description: "Exécution et suivi le jour J" }
    ]
  }
};

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return (
      <div className="service-detail-page">
        <Navigation />
        <div className="error-container">
          <h1>Service non trouvé</h1>
          <Link to="/services" className="back-link">
            ← Retour aux services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        
        <div className="service-container">
          <Link to="/services" className="back-link">
            ← Retour aux services
          </Link>
          
          <div className="hero-content">
            <div className="service-icon-large">{service.icon}</div>
            <h1 className="service-title">{service.title}</h1>
            <p className="service-description">{service.description}</p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="service-content">
        <div className="service-container">
          <div className="content-grid">
            
            {/* Left Column */}
            <div className="content-left">
              <div className="section-block">
                <h2>À propos du service</h2>
                <div className="long-description">
                  {service.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="section-block">
                <h2>Notre processus</h2>
                <div className="process-list">
                  {service.process.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="content-right">
              <div className="feature-card">
                <h2>Ce que nous offrons</h2>
                <ul className="feature-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="cta-card">
                <h3>Prêt à commencer ?</h3>
                <p>Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider.</p>
                <Link to="/contact" className="cta-button">
                  Parlons de votre projet →
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};