import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      {/* Effets de fond animés */}
      <div className="footer-background">
        <div className="footer-glow-orb footer-glow-orb-1"></div>
        <div className="footer-glow-orb footer-glow-orb-2"></div>
        <div className="footer-mesh"></div>
      </div>

      <div className="footer-container">
        {/* Section principale */}
        <div className="footer-main">
          {/* Colonne Marque */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-wrapper">
              <img 
                src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png" 
                alt="Tiny Team" 
                className="footer-logo"
              />
            </Link>
            <p className="footer-tagline">
              Production, management & diffusion
              <span className="footer-tagline-accent">L'expertise du spectacle vivant</span>
            </p>
            <div className="footer-social-links">
              <a 
                href="https://www.instagram.com/latinyteam/" 
                className="social-link" 
                aria-label="Instagram" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/bénédicte-lecoq-426083138/" 
                className="social-link" 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Grille de navigation */}
          <div className="footer-nav-grid">
            <div className="footer-nav-column">
              <h3 className="footer-nav-title">Services</h3>
              <nav className="footer-nav">
                <Link to="/services/production">Production artistique</Link>
                <Link to="/services/management">Management d'artistes</Link>
                <Link to="/services/digital">Stratégie digitale</Link>
                <Link to="/services/communication">Communication</Link>
                <Link to="/services/diffusion">Diffusion & Booking</Link>
              </nav>
            </div>

            <div className="footer-nav-column">
              <h3 className="footer-nav-title">L'Agence</h3>
              <nav className="footer-nav">
                <Link to="/equipe">L'équipe</Link>
                <Link to="/artistes">Nos artistes</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>

            <div className="footer-nav-column">
              <h3 className="footer-nav-title">Espace Pro</h3>
              <nav className="footer-nav">
                <Link to="/je-cherche-une-production">Je cherche une production</Link>
                <Link to="/programmateur">Programmateurs</Link>
                <Link to="/entreprises">Entreprises</Link>
              </nav>
            </div>
          </div>

          {/* Colonne Contact */}
          <div className="footer-contact">
            <h3 className="footer-nav-title">Contact</h3>
            <a href="mailto:contact@tinyteam.fr" className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 5L2 7"/>
              </svg>
              <span>contact@tinyteam.fr</span>
            </a>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Paris, France</span>
            </div>
          </div>
        </div>

        {/* Séparateur animé */}
        <div className="footer-divider"></div>

        {/* Section bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Tiny Team. Tous droits réservés.
          </p>
          
          <nav className="footer-legal-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politique-confidentialite">Confidentialité</Link>
            <Link to="/cgv">CGV</Link>
          </nav>

          <p className="footer-credits">
            Fait avec <span className="footer-heart">♥</span> par{' '}
            <a 
              href="https://www.instagram.com/alex______kid/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-credits-link"
            >
              alexkid
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};