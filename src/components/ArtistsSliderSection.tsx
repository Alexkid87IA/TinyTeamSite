import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArtistsSliderSection.css';

// Liste des artistes SANS Adel
const artistsData = [
  {
    id: "urbain",
    name: "Urbain",
    image: "https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg"
  },
  {
    id: "marc-antoine",
    name: "Marc-Antoine Le Bret",
    image: "https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg"
  },
  {
    id: "djal",
    name: "D'Jal",
    image: "https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg"
  },
  {
    id: "morgane",
    name: "Morgane Berling",
    image: "https://i.imgur.com/munE7s3.jpeg"
  },
  {
    id: "thomas",
    name: "Thomas Angelvy",
    image: "https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg"
  },
  {
    id: "lucie",
    name: "Lucie Carbone",
    image: "https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg"
  },
  {
    id: "edouard",
    name: "Edouard Deloignon",
    image: "https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg"
  },
  {
    id: "julien",
    name: "Julien Santini",
    image: "https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg"
  },
  {
    id: "sophie-alex",
    name: "Sophie & Alex",
    image: "https://i.imgur.com/ht3EucF.jpeg"
  },
  {
    id: "djamel",
    name: "Djamel Comedy Club",
    image: "https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg"
  }
];

// Créer les rangées pour la rivière (tripler pour l'animation infinie)
const topRow = [...artistsData.slice(0, 5), ...artistsData.slice(0, 5), ...artistsData.slice(0, 5)];
const bottomRow = [...artistsData.slice(5, 10), ...artistsData.slice(5, 10), ...artistsData.slice(5, 10)];

export const ArtistsSliderSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="artists-slider-section">
      {/* Effets de fond */}
      <div className="artists-bg-layer">
        <div className="gradient-overlay-1"></div>
        <div className="gradient-overlay-2"></div>
        
        {/* Particules animées */}
        <div className="particles-container">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="artists-main-content">
        
        {/* En-tête de la section */}
        <div className="section-header">
          <h2 className="section-title">NOS ARTISTES</h2>
          
          <div className="slogan-container">
            <span className="slogan-text">Nos artistes,</span>
            <span className="slogan-text">leurs univers,</span>
            <span className="slogan-text">une seule passion :</span>
            <span className="slogan-emphasis">VOUS ÉMERVEILLER</span>
          </div>
          
          <p className="section-hint">
            Survolez les affiches pour découvrir chaque artiste
          </p>
        </div>

        {/* Rivière d'artistes */}
        <div className="artists-river">
          {/* Masques de dégradé */}
          <div className="mask-left"></div>
          <div className="mask-right"></div>
          
          {/* Rangée du haut - défile vers la droite */}
          <div className="river-row row-right">
            {topRow.map((artist, index) => (
              <div
                key={`top-${index}`}
                className={`poster-card ${hoveredCard === `top-${index}` ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(`top-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to={`/artiste/${artist.id}`}>
                  <img src={artist.image} alt={artist.name} className="poster-image" />
                  <div className="poster-overlay"></div>
                  <div className="poster-content">
                    <h3 className="poster-name">{artist.name}</h3>
                    <button className="poster-button">
                      Découvrir →
                    </button>
                  </div>
                  <div className="poster-shine"></div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Rangée du bas - défile vers la gauche */}
          <div className="river-row row-left">
            {bottomRow.map((artist, index) => (
              <div
                key={`bottom-${index}`}
                className={`poster-card ${hoveredCard === `bottom-${index}` ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(`bottom-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to={`/artiste/${artist.id}`}>
                  <img src={artist.image} alt={artist.name} className="poster-image" />
                  <div className="poster-overlay"></div>
                  <div className="poster-content">
                    <h3 className="poster-name">{artist.name}</h3>
                    <button className="poster-button">
                      Découvrir →
                    </button>
                  </div>
                  <div className="poster-shine"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton CTA */}
        <div className="section-cta">
          <Link to="/artistes" className="main-cta-button">
            Explorer tous nos artistes →
          </Link>
        </div>

        {/* Indicateur d'interaction (desktop uniquement) */}
        <div className="interaction-indicator">
          <span className="indicator-emoji">👆</span>
          <span>Survolez une affiche pour en savoir plus</span>
        </div>
      </div>
    </section>
  );
};