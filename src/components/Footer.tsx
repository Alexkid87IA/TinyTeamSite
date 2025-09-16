import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      {/* Effets de fond subtils */}
      <div className="footer-bg">
        <div className="footer-gradient"></div>
        <div className="footer-glow-1"></div>
        <div className="footer-glow-2"></div>
      </div>

      <div className="footer-container">
        {/* Section principale */}
        <div className="footer-top">
          {/* Colonne logo et description */}
          <div className="footer-brand">
            <a href="/" className="footer-logo-link">
              <img 
                src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png" 
                alt="Tiny Team" 
                className="footer-logo"
              />
            </a>
            <p className="footer-tagline">
              Production, management & diffusion<br/>
              <span>L'expertise du spectacle vivant</span>
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" className="social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="social-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation en 3 colonnes */}
          <div className="footer-nav">
            <div className="footer-column">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                <li><a href="/production">Production artistique</a></li>
                <li><a href="/management">Management d'artistes</a></li>
                <li><a href="/strategie">Stratégie digitale</a></li>
                <li><a href="/communication">Communication</a></li>
                <li><a href="/diffusion">Diffusion & Booking</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">L'Agence</h4>
              <ul className="footer-list">
                <li><a href="/notre-histoire">Notre histoire</a></li>
                <li><a href="/equipe">L'équipe</a></li>
                <li><a href="/artistes">Nos artistes</a></li>
                <li><a href="/actualites">Actualités</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Espace Pro</h4>
              <ul className="footer-list">
                <li><a href="/artiste">Devenir artiste</a></li>
                <li><a href="/programmateur">Programmateurs</a></li>
                <li><a href="/marque">Entreprises</a></li>
                <li><a href="/partenaires">Partenariats</a></li>
                <li><a href="/espace-presse">Espace presse</a></li>
              </ul>
            </div>
          </div>

          {/* Contact direct */}
          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <a href="mailto:contact@tinyteam.fr" className="contact-email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 5L2 7"/>
              </svg>
              contact@tinyteam.fr
            </a>
            <a href="tel:+33123456789" className="contact-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72"/>
              </svg>
              +33 1 23 45 67 89
            </a>
            <p className="contact-address">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Paris, France
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="footer-separator"></div>

        {/* Bottom avec copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Tiny Team. Tous droits réservés.
          </p>
          <div className="footer-legal">
            <a href="/mentions-legales">Mentions légales</a>
            <span>•</span>
            <a href="/politique-confidentialite">Confidentialité</a>
            <span>•</span>
            <a href="/cgv">CGV</a>
          </div>
          <p className="footer-credit">
            Fait avec <span className="heart">♥</span> par Tiny Team
          </p>
        </div>
      </div>
    </footer>
  );
};