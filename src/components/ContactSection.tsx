import React from 'react';
import './ContactSection.css'; // Import du CSS

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
              <span className="line-1">Prêt à faire</span>
              <span className="line-2">vibrer les scènes ?</span>
            </h2>
          </div>
          <p className="subtitle">
            Discutons de vos ambitions artistiques autour d'un café. 
            Choisissez votre profil pour une expérience sur mesure.
          </p>
        </div>

        {/* Cartes de contact */}
        <div className="contact-cards">
          {/* Carte Artiste */}
          <a href="/contact?type=artiste" className="contact-card card-artiste">
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
          <a href="/contact?type=programmateur" className="contact-card card-programmateur">
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
          <a href="/contact?type=entreprise" className="contact-card card-entreprise">
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

        {/* Footer de contact avec infos */}
        <div className="contact-footer">
          <p className="footer-text">Besoin d'aide pour choisir ?</p>
          <div className="contact-info">
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:contact@tinyteam.fr" className="contact-link">
                contact@tinyteam.fr
              </a>
            </div>
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <a href="tel:+33123456789" className="contact-link">
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};