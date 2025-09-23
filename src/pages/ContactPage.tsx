import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Mail, Send, CheckCircle, AlertCircle, Zap, Star } from 'lucide-react';
import './ContactPage.css';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  // IMPORTANT : Remplace cette URL par ton endpoint Formspree
  const FORMSPREE_URL = "https://formspree.io/f/TON_ID_ICI"; // ← CHANGE ICI !

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false });
        }, 5000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const setUserType = (type: string) => {
    const subjects: { [key: string]: string } = {
      artist: "Je suis artiste - Demande d'accompagnement",
      programmer: "Je suis programmateur - Recherche d'artistes",
      brand: "Je représente une marque - Collaboration"
    };
    
    setFormData({
      ...formData,
      subject: subjects[type]
    });
  };

  // Générer les particules de fond
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${15 + Math.random() * 10}s`
  }));

  return (
    <main className="contact-page">
      <Navigation />

      {/* Hero Section avec style spectaculaire */}
      <section className="contact-hero">
        {/* Effets de fond */}
        <div className="hero-background">
          <div className="hero-grid" />
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
          <div className="hero-particles">
            {particles.map(p => (
              <div
                key={p.id}
                className="particle"
                style={{
                  left: p.left,
                  top: p.top,
                  animationDelay: p.delay,
                  animationDuration: p.duration
                }}
              />
            ))}
          </div>
        </div>

        <div className="hero-content">
          <h1 className="contact-title">
            <span className="title-line-1">Parlons de</span>
            <span className="title-line-2">votre projet</span>
          </h1>
          <p className="contact-subtitle">
            Une question ? Un projet ? Une collaboration ?
            <span className="subtitle-emphasis">Nous sommes là pour vous.</span>
          </p>
        </div>
      </section>

      {/* Section Contact */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Colonne gauche - Informations */}
            <div className="contact-info">
              <div className="info-header">
                <h2 className="info-title">
                  <span className="info-title-1">Contactez</span>
                  <span className="info-title-2">Nous</span>
                </h2>
                <p className="info-description">
                  Notre équipe est à votre écoute pour répondre à toutes vos questions
                  et vous accompagner dans vos projets.
                </p>
              </div>

              {/* Sélecteurs de type */}
              <div className="user-type-selector">
                <p className="selector-label">Vous êtes :</p>
                <div className="selector-buttons">
                  <button
                    onClick={() => setUserType('artist')}
                    className="type-button"
                    data-type="artist"
                  >
                    <Star size={16} />
                    <span>Artiste</span>
                  </button>
                  <button
                    onClick={() => setUserType('programmer')}
                    className="type-button"
                    data-type="programmer"
                  >
                    <Zap size={16} />
                    <span>Programmateur</span>
                  </button>
                  <button
                    onClick={() => setUserType('brand')}
                    className="type-button"
                    data-type="brand"
                  >
                    <Star size={16} />
                    <span>Marque</span>
                  </button>
                </div>
              </div>

              {/* Informations de contact */}
              <div className="contact-details">
                <a
                  href="mailto:contact@tinyteam.fr"
                  className="contact-card"
                >
                  <div className="card-icon">
                    <Mail size={24} />
                  </div>
                  <div className="card-content">
                    <span className="card-label">Email</span>
                    <span className="card-value">contact@tinyteam.fr</span>
                  </div>
                  <div className="card-glow" />
                </a>
              </div>

              {/* Stats */}
              <div className="contact-stats">
                <div className="stat">
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Réponse garantie</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">À votre écoute</span>
                </div>
              </div>
            </div>

            {/* Colonne droite - Formulaire */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Nom */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Jean Dupont"
                  />
                  <div className="input-glow" />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Votre email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="jean@example.com"
                  />
                  <div className="input-glow" />
                </div>

                {/* Sujet */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="L'objet de votre message"
                  />
                  <div className="input-glow" />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Parlez-nous de votre projet..."
                  />
                  <div className="input-glow" />
                </div>

                {/* Bouton Submit */}
                <button
                  type="submit"
                  disabled={status.submitting || status.submitted}
                  className="submit-button"
                >
                  {status.submitting ? (
                    <>
                      <div className="spinner" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : status.submitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message envoyé !</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Envoyer le message</span>
                      <Send size={20} className="icon-right" />
                    </>
                  )}
                </button>

                {/* Messages d'état */}
                {status.submitted && (
                  <div className="status-message success">
                    <CheckCircle size={16} />
                    <span>Merci ! Nous vous répondrons dans les plus brefs délais.</span>
                  </div>
                )}

                {status.error && (
                  <div className="status-message error">
                    <AlertCircle size={16} />
                    <span>Une erreur est survenue. Veuillez réessayer.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="contact-cta">
        <div className="cta-content">
          <h2 className="cta-title">
            <span className="cta-line-1">Prêt à créer</span>
            <span className="cta-line-2">l'extraordinaire ?</span>
          </h2>
          <div className="cta-divider" />
        </div>
      </section>

      <Footer />
    </main>
  );
};