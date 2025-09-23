import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Send, Sparkles } from 'lucide-react';
import './ContactPage.css';

export const ContactPage = () => {
  return (
    <main className="contact-page">
      <Navigation />

      {/* Hero Section */}
      <section className="contact-hero">
        {/* Effets de fond */}
        <div className="hero-effects">
          <div className="contact-grid-overlay" />
          <div className="contact-glow-orb contact-glow-1" />
          <div className="contact-glow-orb contact-glow-2" />
          <div className="contact-glow-orb contact-glow-3" />
          
          {/* Particules légères */}
          <div className="contact-floating-elements">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="contact-floating-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 20}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Contenu principal */}
        <div className="contact-hero-container">
          <div className="contact-hero-badge">
            <Sparkles size={20} />
            <span>TINY TEAM × BIG DREAMS</span>
          </div>

          <h1 className="contact-hero-title">
            <span className="contact-title-main">CRÉONS</span>
            <span className="contact-title-gradient">L'EXTRAORDINAIRE</span>
            <span className="contact-title-together">ENSEMBLE</span>
          </h1>

          {/* Simple bouton centré */}
          <a href="mailto:contact@tinyteam.fr" className="contact-hero-cta-button">
            <span>RESTONS EN CONTACT</span>
            <Send size={18} />
          </a>
        </div>
      </section>

      {/* Section Contact Direct */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <h2 className="contact-section-title">
            <span className="contact-title-small">PLUSIEURS FAÇONS DE</span>
            <span className="contact-title-big">NOUS CONTACTER</span>
          </h2>

          <div className="contact-cards-grid">
            {/* Email Card */}
            <a href="mailto:contact@tinyteam.fr" className="contact-card contact-email-card">
              <div className="contact-card-icon">
                <Send size={28} />
              </div>
              <h3 className="contact-card-title">PAR EMAIL</h3>
              <p className="contact-card-value">contact@tinyteam.fr</p>
              <p className="contact-card-description">Pour toute question ou projet</p>
              <div className="contact-card-glow" />
            </a>

            {/* Social Card */}
            <div className="contact-card contact-social-card">
              <div className="contact-card-icon">
                <Sparkles size={28} />
              </div>
              <h3 className="contact-card-title">SUR LES RÉSEAUX</h3>
              <div className="contact-social-links">
                <a 
                  href="https://www.instagram.com/latinyteam/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-social-link"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/in/bénédicte-lecoq-426083138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  LinkedIn
                </a>
              </div>
              <p className="contact-card-description">Suivez nos actualités</p>
              <div className="contact-card-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Stats */}
      <section className="contact-stats-section">
        <div className="contact-stats-wrapper">
          <div className="contact-stats-grid">
            <div className="contact-stat-item">
              <h3 className="contact-stat-number">24h</h3>
              <p className="contact-stat-label">Réponse garantie</p>
            </div>
            <div className="contact-stat-item">
              <h3 className="contact-stat-number">100%</h3>
              <p className="contact-stat-label">À votre écoute</p>
            </div>
            <div className="contact-stat-item">
              <h3 className="contact-stat-number">15+</h3>
              <p className="contact-stat-label">Artistes accompagnés</p>
            </div>
            <div className="contact-stat-item">
              <h3 className="contact-stat-number">∞</h3>
              <p className="contact-stat-label">Possibilités créatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="contact-final-cta">
        <div className="contact-cta-background">
          <div className="contact-cta-gradient" />
          <div className="contact-cta-lines" />
        </div>
        
        <div className="contact-cta-content">
          <h2 className="contact-cta-title">
            <span className="contact-cta-ready">PRÊT À</span>
            <span className="contact-cta-action">BRILLER ?</span>
          </h2>
          
          <a href="mailto:contact@tinyteam.fr" className="contact-cta-button">
            <span>LANCEZ VOTRE PROJET</span>
            <Sparkles size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};