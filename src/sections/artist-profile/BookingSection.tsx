import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';
import './BookingSection.css';

interface Artist {
  id: string;
  name: string;
}

interface BookingSectionProps {
  artist: Artist;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ artist }) => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Créer des particules de fond
    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-dot';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
        particle.style.setProperty('--ty', `${(Math.random() - 0.5) * 100}px`);
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="artist-booking-section">
      {/* Particules de fond */}
      <div className="booking-particles" ref={particlesRef} />

      {/* Conteneur principal */}
      <div className="booking-container">
        <div className="booking-card">
          <div className="card-glow" />
          
          {/* Titre */}
          <h2 className="booking-title">
            Discutons de votre projet
          </h2>

          {/* Boutons */}
          <div className="booking-buttons">
            <a href="/contact" className="btn-contact">
              <span>Nous contacter</span>
              <ArrowRight size={20} />
            </a>

            <a href="mailto:booking@tinyteam.fr" className="btn-email">
              <Mail size={20} />
              <span>booking@tinyteam.fr</span>
            </a>
          </div>

          {/* Garantie */}
          <div className="booking-guarantee">
            <div className="guarantee-glow" />
            <div className="guarantee-icon">
              <CheckCircle size={16} />
            </div>
            <span>Réponse garantie sous 48h</span>
          </div>
        </div>
      </div>
    </section>
  );
};