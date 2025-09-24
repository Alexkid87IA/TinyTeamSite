import React from 'react';
import { Instagram, Music, Youtube, ExternalLink } from 'lucide-react';
import './HeroSection.css';

interface Artist {
  id: string;
  name: string;
  image: string;
  posterImage?: string;
  tagline: string;
  showName: string;
  description: string;
  websiteUrl?: string;
  social: {
    instagram: string;
    tiktok: string;
    youtube: string;
  };
  stats?: {
    shows: number;
    cities: number;
  };
  diffusion?: string;
}

interface HeroSectionProps {
  artist: Artist;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ artist }) => {
  const getSocialIcon = (platform: string) => {
    switch(platform) {
      case 'instagram': return <Instagram size={20} />;
      case 'tiktok': return <Music size={20} />;
      case 'youtube': return <Youtube size={20} />;
      default: return <Music size={20} />;
    }
  };

  return (
    <section className="artist-hero-section">
      {/* Background avec image */}
      <div className="hero-background">
        <img
          src={artist.posterImage || artist.image}
          alt={artist.name}
          className="hero-image"
        />
      </div>

      {/* Overlay sombre */}
      <div className="hero-overlay" />
      <div className="hero-vignette" />

      {/* Contenu principal */}
      <div className="hero-content">
        {/* Nom de l'artiste */}
        <h1 className="artist-name">
          {artist.name}
        </h1>

        {/* Tagline */}
        <p className="artist-tagline">
          <span className="tagline-quote">«</span>
          {' '}{artist.tagline}{' '}
          <span className="tagline-quote">»</span>
        </p>

        {/* Badge spectacle */}
        <div className="show-badge">
          <span className="show-badge-label">Spectacle</span>
          <h2 className="show-name">{artist.showName}</h2>
        </div>

        {/* Mention de diffusion */}
        {artist.diffusion && (
          <div className="diffusion-badge">
            Diffusion : {artist.diffusion}
          </div>
        )}

        {/* Description */}
        <p className="artist-description">
          {artist.description}
        </p>

        {/* Social & Stats */}
        <div className="social-stats">
          <div className="social-links">
            <a 
              href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              {getSocialIcon('instagram')}
            </a>
            <a 
              href={`https://tiktok.com/@${artist.social.tiktok.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="TikTok"
            >
              {getSocialIcon('tiktok')}
            </a>
            <a 
              href={`https://youtube.com/${artist.social.youtube.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="YouTube"
            >
              {getSocialIcon('youtube')}
            </a>
          </div>

          {artist.stats && (
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-value">{artist.stats.shows}+</span>
                <span className="stat-label">Spectacles</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{artist.stats.cities}+</span>
                <span className="stat-label">Villes</span>
              </div>
            </div>
          )}
        </div>

        {/* CTA principal */}
        {artist.websiteUrl && (
          <a
            href={artist.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            <span>Voir les dates</span>
            <ExternalLink size={20} />
          </a>
        )}
      </div>

      {/* Indicateur de scroll simple */}
      <div className="scroll-hint">
        <span className="scroll-text">Découvrir</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};