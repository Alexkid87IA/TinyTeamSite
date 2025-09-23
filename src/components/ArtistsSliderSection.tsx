import React, { useState, useEffect } from 'react';
import './ArtistsSliderSection.css';

// Liste des artistes avec leurs informations de diffusion (Urbain en dernier)
const artistsData = [
  {
    id: "marc-antoine",
    name: "Marc-Antoine Le Bret",
    image: "https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg",
    diffusion: "Doudou Production"
  },
  {
    id: "djal",
    name: "D'Jal",
    image: "https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg",
    diffusion: null
  },
  {
    id: "morgane",
    name: "Morgane Berling",
    image: "https://i.imgur.com/munE7s3.jpeg",
    diffusion: "Les Derniers couchés"
  },
  {
    id: "thomas",
    name: "Thomas Angelvy",
    image: "https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg",
    diffusion: "ProdVocation"
  },
  {
    id: "lucie",
    name: "Lucie Carbone",
    image: "https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg",
    diffusion: null
  },
  {
    id: "edouard",
    name: "Edouard Deloignon",
    image: "https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg",
    diffusion: "Dan Bolender Production"
  },
  {
    id: "julien",
    name: "Julien Santini",
    image: "https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg",
    diffusion: null
  },
  {
    id: "sophie-alex",
    name: "Sophie & Alex",
    image: "https://i.imgur.com/ht3EucF.jpeg",
    diffusion: null
  },
  {
    id: "djamel",
    name: "Djamel Comedy Club",
    image: "https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg",
    diffusion: null
  },
  {
    id: "urbain",
    name: "Urbain",
    image: "https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg",
    diffusion: null
  }
];

// Créer les rangées pour la rivière desktop (tripler pour l'animation infinie)
const topRow = [...artistsData.slice(0, 5), ...artistsData.slice(0, 5), ...artistsData.slice(0, 5)];
const bottomRow = [...artistsData.slice(5, 10), ...artistsData.slice(5, 10), ...artistsData.slice(5, 10)];

export const ArtistsSliderSection = () => {
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

  // Fonction pour naviguer vers la page artiste
  const handleArtistClick = (e, artistId) => {
    e.preventDefault();
    // Pour React Router, utilisez :
    // navigate(`/artiste/${artistId}`);
    
    // Pour une navigation simple :
    window.location.href = `/artiste/${artistId}`;
  };

  // Composant ChevronRight simplifié
  const ChevronRight = ({ size = 16 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  // Composant MousePointer2 simplifié
  const MousePointer2 = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="indicator-icon"
      style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}
    >
      <path d="M5 12l6-6v3h8v6h-8v3z"/>
    </svg>
  );

  return (
    <section className="artists-slider-section">
      {/* Effets de fond spectaculaires (desktop uniquement) */}
      {!isMobile && (
        <div className="artists-background">
          {/* Grille animée */}
          <div className="artists-grid" />
          
          {/* Orbes de lumière */}
          <div className="artists-orb orb-1" />
          <div className="artists-orb orb-2" />
          <div className="artists-orb orb-3" />
          
          {/* Étoiles scintillantes */}
          <div className="artists-stars">
            {[...Array(40)].map((_, i) => (
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
      )}

      {/* Contenu principal */}
      <div className="artists-main-content">
        
        {/* Header avec exactement le même texte que l'original */}
        <div className="section-header">
          <div className="title-glow" />
          
          <h2 className="section-title">
            <span className="artists-title-line-1">Nos</span>
            <span className="artists-title-line-2">Artistes</span>
          </h2>
          
          <div className="slogan-container">
            <span className="slogan-text">
              Des talents d'exception, des univers uniques, une seule passion :
            </span>
            <span className="slogan-emphasis">
              Vous émerveiller
            </span>
          </div>
          
          {!isMobile && (
            <p className="section-hint">
              Survolez les affiches pour découvrir chaque artiste
            </p>
          )}
        </div>

        {/* VERSION DESKTOP : Rivière d'artistes */}
        {!isMobile && (
          <div className="artists-river">
            {/* Masques de dégradé */}
            <div className="mask-left" />
            <div className="mask-right" />
            
            {/* Rangée du haut - défile vers la droite */}
            <div className="river-row row-right">
              {topRow.map((artist, index) => (
                <a
                  key={`top-${index}`}
                  href={`/artiste/${artist.id}`}
                  className="poster-card"
                  onClick={(e) => handleArtistClick(e, artist.id)}
                >
                  {artist.diffusion && (
                    <div className="diffusion-badge">
                      Diffusion : {artist.diffusion}
                    </div>
                  )}
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="poster-image"
                    loading="lazy"
                  />
                  <div className="poster-overlay" />
                  <div className="poster-content">
                    <h3 className="poster-name">{artist.name}</h3>
                    <span className="poster-button">
                      Découvrir
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Rangée du bas - défile vers la gauche */}
            <div className="river-row row-left">
              {bottomRow.map((artist, index) => (
                <a
                  key={`bottom-${index}`}
                  href={`/artiste/${artist.id}`}
                  className="poster-card"
                  onClick={(e) => handleArtistClick(e, artist.id)}
                >
                  {artist.diffusion && (
                    <div className="diffusion-badge">
                      Diffusion : {artist.diffusion}
                    </div>
                  )}
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="poster-image"
                    loading="lazy"
                  />
                  <div className="poster-overlay" />
                  <div className="poster-content">
                    <h3 className="poster-name">{artist.name}</h3>
                    <span className="poster-button">
                      Découvrir
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* VERSION MOBILE : Grille verticale extraordinaire */}
        {isMobile && (
          <div className="mobile-vertical-grid">
            <div className="mobile-grid-container">
              {artistsData.map((artist) => (
                <a
                  key={artist.id}
                  href={`/artiste/${artist.id}`}
                  className="mobile-artist-card"
                  onClick={(e) => handleArtistClick(e, artist.id)}
                >
                  <div className="mobile-image-container">
                    {artist.diffusion && (
                      <div className="mobile-diffusion-badge">
                        Diffusion : {artist.diffusion}
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
                        handleArtistClick(e, artist.id);
                      }}
                    >
                      Découvrir
                      <ChevronRight size={16} />
                    </button>
                    <div className="mobile-card-shine" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="section-cta">
          <a href="/artistes" className="main-cta-button">
            <span>Explorer tous nos artistes</span>
            <ChevronRight size={20} />
          </a>
        </div>

        {/* Indicateur d'interaction (desktop uniquement) */}
        {!isMobile && (
          <div className="interaction-indicator" style={{
            textAlign: 'center',
            marginTop: '2rem',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.875rem',
            fontWeight: '300',
            letterSpacing: '0.05em'
          }}>
            <MousePointer2 />
            <span>Survolez une affiche pour en savoir plus</span>
          </div>
        )}
      </div>
    </section>
  );
}