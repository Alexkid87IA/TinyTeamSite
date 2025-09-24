import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MousePointer2 } from 'lucide-react';
import './ProducerArtistsShowcase.css';

interface Artist {
  id: string;
  name: string;
  image: string;
  genre?: string;
  availability?: string;
}

const artistsData: Artist[] = [
  {
    id: "urbain",
    name: "Urbain",
    image: "https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg",
    genre: "Stand-up",
    availability: "Disponible"
  },
  {
    id: "marc-antoine",
    name: "Marc-Antoine Le Bret",
    image: "https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg",
    genre: "Imitations",
    availability: "Tournée 2025"
  },
  {
    id: "djal",
    name: "D'Jal",
    image: "https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg",
    genre: "Humour visuel",
    availability: "Disponible"
  },
  {
    id: "morgane",
    name: "Morgane Berling",
    image: "https://i.imgur.com/munE7s3.jpeg",
    genre: "Stand-up",
    availability: "Dates limitées"
  },
  {
    id: "thomas",
    name: "Thomas Angelvy",
    image: "https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg",
    genre: "One-man-show",
    availability: "Disponible"
  },
  {
    id: "lucie",
    name: "Lucie Carbone",
    image: "https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg",
    genre: "Stand-up",
    availability: "Disponible"
  },
  {
    id: "edouard",
    name: "Edouard Deloignon",
    image: "https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg",
    genre: "Humour",
    availability: "Disponible"
  },
  {
    id: "julien",
    name: "Julien Santini",
    image: "https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg",
    genre: "Stand-up",
    availability: "Tournée 2025"
  },
  {
    id: "sophie-alex",
    name: "Sophie & Alex",
    image: "https://i.imgur.com/ht3EucF.jpeg",
    genre: "Duo comique",
    availability: "Disponible"
  },
  {
    id: "djamel",
    name: "Djamel Comedy Club",
    image: "https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg",
    genre: "Comedy Club",
    availability: "Dates limitées"
  }
];

// Créer les rangées pour la rivière (dupliquer pour l'animation infinie)
const topRow = [...artistsData.slice(0, 5), ...artistsData.slice(0, 5), ...artistsData.slice(0, 5)];
const bottomRow = [...artistsData.slice(5, 10), ...artistsData.slice(5, 10), ...artistsData.slice(5, 10)];

export const ProducerArtistsShowcase: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="artists-showcase" className="producer-artists-showcase">
      {/* Effets de fond spectaculaires */}
      {!isMobile && (
        <div className="showcase-background">
          {/* Grille animée */}
          <div className="showcase-grid" />
          
          {/* Orbes de lumière */}
          <div className="showcase-orb orb-1" />
          <div className="showcase-orb orb-2" />
          <div className="showcase-orb orb-3" />
          
          {/* Étoiles scintillantes */}
          <div className="showcase-particles">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div className="showcase-content">
        {/* Header épique */}
        <div className="showcase-header">
          <div className="title-glow" />
          
          {/* Badge animé */}
          <div className="showcase-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">Talents exclusifs pour vos événements</span>
          </div>

          {/* Titres avec animation */}
          <h2 className="showcase-titles">
            <span className="title-small">NOS</span>
            <span className="title-large">ARTISTES</span>
          </h2>

          {/* Sous-titre */}
          <p className="showcase-subtitle">
            Des artistes confirmés, des spectacles rodés, des salles combles garanties
          </p>

          {!isMobile && (
            <p className="section-hint">
              Survolez les affiches pour découvrir chaque artiste
            </p>
          )}
        </div>

        {/* Rivière d'artistes pour desktop */}
        {!isMobile && (
          <div className="artists-river">
            {/* Masques de dégradé */}
            <div className="mask-left" />
            <div className="mask-right" />
            
            {/* Rangée du haut - défile vers la droite */}
            <div className="river-row row-right">
              {topRow.map((artist, index) => (
                <Link
                  key={`top-${index}`}
                  to={`/artiste/${artist.id}`}
                  className="poster-card"
                >
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="poster-image"
                    loading="lazy"
                  />
                  <div className="poster-overlay" />
                  <div className="poster-content">
                    <div className="card-info">
                      <span className="card-availability">{artist.availability}</span>
                    </div>
                    <h3 className="poster-name">{artist.name}</h3>
                    <span className="poster-button">
                      Découvrir
                      <ChevronRight size={16} />
                    </span>
                  </div>
                  <div className="poster-shine" />
                </Link>
              ))}
            </div>
            
            {/* Rangée du bas - défile vers la gauche */}
            <div className="river-row row-left">
              {bottomRow.map((artist, index) => (
                <Link
                  key={`bottom-${index}`}
                  to={`/artiste/${artist.id}`}
                  className="poster-card"
                >
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="poster-image"
                    loading="lazy"
                  />
                  <div className="poster-overlay" />
                  <div className="poster-content">
                    <div className="card-info">
                      <span className="card-availability">{artist.availability}</span>
                    </div>
                    <h3 className="poster-name">{artist.name}</h3>
                    <span className="poster-button">
                      Découvrir
                      <ChevronRight size={16} />
                    </span>
                  </div>
                  <div className="poster-shine" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* VERSION MOBILE : Grille verticale extraordinaire */}
        {isMobile && (
          <div className="mobile-vertical-grid">
            <div className="mobile-grid-container">
              {artistsData.map((artist) => (
                <Link
                  key={artist.id}
                  to={`/artiste/${artist.id}`}
                  className="mobile-artist-card"
                >
                  <div className="mobile-image-container">
                    {artist.availability && (
                      <div className="mobile-availability-badge">
                        {artist.availability}
                      </div>
                    )}
                    <img 
                      src={artist.image} 
                      alt={artist.name} 
                      className="mobile-card-image"
                      loading="lazy"
                    />
                    <div className="mobile-card-overlay" />
                    {/* Bouton Découvrir flottant - PAS de nom d'artiste */}
                    <button 
                      className="mobile-card-button"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Découvrir
                      <ChevronRight size={16} />
                    </button>
                    <div className="mobile-card-shine" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="showcase-cta">
          <Link to="/contact" className="main-cta-button">
            <span>Discuter de vos besoins</span>
            <ChevronRight size={20} />
          </Link>
          <p className="cta-subtitle">Réponse garantie sous 24h</p>
        </div>

        {/* Indicateur d'interaction (desktop uniquement) */}
        {!isMobile && (
          <div className="interaction-indicator">
            <MousePointer2 className="indicator-icon" />
            <span>Survolez une affiche pour en savoir plus</span>
          </div>
        )}
      </div>
    </section>
  );
};