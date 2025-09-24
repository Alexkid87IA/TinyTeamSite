import React from 'react';
import { Clock, Users, Calendar, Star, ExternalLink } from 'lucide-react';
import './ShowSection.css';

interface Artist {
  id: string;
  name: string;
  posterImage: string;
  showName: string;
  showDescription: string;
  longDescription?: string;
  websiteUrl?: string;
}

interface ShowSectionProps {
  artist: Artist;
}

export const ShowSection: React.FC<ShowSectionProps> = ({ artist }) => {
  return (
    <section className="artist-show-section">
      {/* Effets de fond */}
      <div className="show-background">
        <div className="show-grid" />
        <div className="show-orb orb-left" />
        <div className="show-orb orb-right" />
      </div>

      {/* Contenu principal */}
      <div className="show-container">
        <div className="show-content">
          {/* Colonne gauche - Affiche */}
          <div className="poster-wrapper">
            <div className="poster-container">
              <img
                src={artist.posterImage}
                alt={`Affiche du spectacle ${artist.showName}`}
                className="poster-image"
              />
              <div className="poster-shine" />
              <span className="availability-badge">Disponible</span>
            </div>
          </div>

          {/* Colonne droite - Détails */}
          <div className="show-details">
            {/* Header */}
            <div className="show-header">
              <div className="show-label">
                <span className="label-dot" />
                <span className="label-text">Spectacle en tournée</span>
              </div>
              <h2 className="show-title">
                <span className="title-highlight">{artist.showName}</span>
              </h2>
            </div>

            {/* Description */}
            <div className="show-description">
              <p className="description-main">
                {artist.showDescription}
              </p>
              {artist.longDescription && (
                <p className="description-detail">
                  {artist.longDescription}
                </p>
              )}
            </div>

            {/* Features */}
            <div className="show-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <Clock size={20} />
                </div>
                <h3 className="feature-title">Durée</h3>
                <p className="feature-desc">1h30 de spectacle</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <Users size={20} />
                </div>
                <h3 className="feature-title">Public</h3>
                <p className="feature-desc">Tout public, dès 12 ans</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <Calendar size={20} />
                </div>
                <h3 className="feature-title">Disponibilité</h3>
                <p className="feature-desc">Dates flexibles</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <Star size={20} />
                </div>
                <h3 className="feature-title">Succès</h3>
                <p className="feature-desc">Plus de 300 représentations</p>
              </div>
            </div>

            {/* CTA */}
            <div className="show-cta">
              <h3 className="cta-title">Intéressé par ce spectacle ?</h3>
              <p className="cta-subtitle">
                Découvrez toutes les dates et réservez vos places
              </p>
              {artist.websiteUrl && (
                <a
                  href={artist.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  <span>Voir les dates</span>
                  <ExternalLink size={20} className="cta-arrow" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};