import React from 'react';
import './ContactSection.css';

export const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Effets de fond spectaculaires */}
      <div className="contact-background">
        <div className="grid-bg"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="stars">
          {[...Array(20)].map((_, i) => (
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

      {/* Contenu principal */}
      <div className="contact-content">
        {/* Header avec titre épique */}
        <div className="contact-header">
          <div className="title-main">
            <div className="title-glow"></div>
            <h2 className="title-text">
              <span className="line-1">ON DISCUTE ?</span>
            </h2>
          </div>
          <p className="subtitle">
            Discutons de vos ambitions artistiques autour d'un café. 
            Choisissez votre profil pour une expérience sur mesure.
          </p>
        </div>

        {/* Cartes de contact - LIENS CORRIGÉS */}
        <div className="contact-cards">
          {/* Carte Artiste */}
          <a href="/artiste" className="contact-card card-artiste">
            <div className="card-shine"></div>
            <div className="card-badge">
              <span className="card-badge-text">Pour les talents</span>
            </div>
            <h3 className="card-title">Vous êtes</h3>
            <div className="card-subtitle">Artiste</div>
            <p className="card-description">
              Développez votre carrière avec notre expertise en production et management
            </p>
            <div className="card-link">
              <span>Démarrer l'aventure</span>
              <span className="card-link-arrow">→</span>
            </div>
          </a>

          {/* Carte Programmateur */}
          <a href="/programmateur" className="contact-card card-programmateur">
            <div className="card-shine"></div>
            <div className="card-badge">
              <span className="card-badge-text">Pour les salles</span>
            </div>
            <h3 className="card-title">Vous êtes</h3>
            <div className="card-subtitle">Programmateur</div>
            <p className="card-description">
              Trouvez les spectacles parfaits pour votre public et votre lieu
            </p>
            <div className="card-link">
              <span>Voir nos artistes</span>
              <span className="card-link-arrow">→</span>
            </div>
          </a>

          {/* Carte Entreprise */}
          <a href="/marque" className="contact-card card-entreprise">
            <div className="card-shine"></div>
            <div className="card-badge">
              <span className="card-badge-text">Pour les marques</span>
            </div>
            <h3 className="card-title">Vous êtes une</h3>
            <div className="card-subtitle">Entreprise</div>
            <p className="card-description">
              Créez des événements uniques avec nos talents du spectacle vivant
            </p>
            <div className="card-link">
              <span>Créer un événement</span>
              <span className="card-link-arrow">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};