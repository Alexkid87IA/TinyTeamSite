import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './ServicesPage.css';

const services = [
  {
    id: "production",
    title: "Production de Spectacles",
    description: "De la conception à la réalisation, nous donnons vie à vos projets artistiques avec excellence et créativité.",
    icon: "🎭",
    color: "service-pink"
  },
  {
    id: "diffusion",
    title: "Diffusion & Tournées",
    description: "Portez votre spectacle aux quatre coins de la France avec une organisation millimétrée.",
    icon: "🌍",
    color: "service-blue"
  },
  {
    id: "digital",
    title: "Développement Digital",
    description: "Construisez votre présence en ligne et engagez votre communauté avec des stratégies innovantes.",
    icon: "🚀",
    color: "service-purple"
  },
  {
    id: "communication",
    title: "Communication & Image",
    description: "Développez une image forte et cohérente qui vous distingue dans l'univers du spectacle.",
    icon: "📱",
    color: "service-cyan"
  },
  {
    id: "management",
    title: "Management d'Artistes",
    description: "Un accompagnement complet et personnalisé pour développer votre carrière et maximiser votre potentiel.",
    icon: "🛡️",
    color: "service-yellow"
  },
  {
    id: "evenements",
    title: "Événements Spéciaux",
    description: "Créez des moments uniques et mémorables pour des occasions exceptionnelles.",
    icon: "🎉",
    color: "service-green"
  }
];

export const ServicesPage = () => {
  return (
    <div className="services-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-particles">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="services-container">
          <div className="hero-content">
            <h1 className="services-title">
              <span className="title-line-1">Nos expertises</span>
              <span className="title-line-2">sur mesure</span>
            </h1>
            <p className="services-subtitle">
              Une expertise complète pour accompagner votre carrière artistique.
              Des solutions adaptées à chaque étape de votre développement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <Link 
                to={`/services/${service.id}`} 
                key={service.id}
                className={`service-card ${service.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-container">
          <h2 className="cta-title">Prêt à collaborer ?</h2>
          <p className="cta-subtitle">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider.
          </p>
          <Link to="/contact" className="cta-button">
            <span>Discutons de votre projet</span>
            <span className="button-arrow">→</span>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};