import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import './HeroTransition.css';

// Composant de transition
const TransitionOverlay: React.FC<{
  isVisible: boolean;
  pathType: string;
  onComplete?: () => void;
}> = ({ isVisible, pathType, onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isVisible && onComplete) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 500);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  const getContent = () => {
    switch (pathType) {
      case 'artiste':
        return {
          icon: '🎭',
          text: 'Espace Artiste',
          subtext: 'Chargement de votre espace...'
        };
      case 'programmateur':
        return {
          icon: '🎪',
          text: 'Espace Pro',
          subtext: 'Accès programmateur...'
        };
      case 'entreprise':
        return {
          icon: '🏢',
          text: 'Espace Entreprise',
          subtext: 'Solutions sur mesure...'
        };
      default:
        return {
          icon: '⭐',
          text: 'Chargement',
          subtext: 'Préparation...'
        };
    }
  };

  const content = getContent();

  return (
    <div className={`hero-transition-overlay ${pathType} ${fadeOut ? 'fade-out' : ''}`}>
      <div className="hero-loader-container">
        <div className="hero-loader-circle">
          <div className="hero-loader-ring"></div>
          <div className="hero-loader-ring"></div>
          <div className="hero-loader-ring"></div>
          <div className="hero-loader-icon">{content.icon}</div>
        </div>
        <div className="hero-loader-text">{content.text}</div>
        <div className="hero-loader-subtext">{content.subtext}</div>
        <div className="hero-progress-bar">
          <div className="hero-progress-fill"></div>
        </div>
      </div>
      <div className="hero-particles">
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedPath, setSelectedPath] = useState('');

  const handleCardClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setIsTransitioning(true);
    setSelectedPath(path.replace('/', ''));
    
    // Navigation après l'animation
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };

  const handleShowreelClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  // Pause animation on hover pour améliorer les performances
  useEffect(() => {
    const tracks = document.querySelectorAll('.carousel-track');
    if (!tracks.length) return;

    const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.animationPlayState = 'paused';
    };
    
    const handleMouseLeave = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.animationPlayState = 'running';
    };

    tracks.forEach(track => {
      track.addEventListener('mouseenter', handleMouseEnter);
      track.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      tracks.forEach(track => {
        track.removeEventListener('mouseenter', handleMouseEnter);
        track.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Liste des artistes avec leurs images
  const artistPosters = [
    { name: "Urbain", img: "https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg" },
    { name: "Marc-Antoine Le Bret", img: "https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg" },
    { name: "D'Jal", img: "https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg" },
    { name: "Morgane Berling", img: "https://i.imgur.com/munE7s3.jpeg" },
    { name: "Thomas Angelvy", img: "https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg" },
    { name: "Lucie Carbone", img: "https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg" },
    { name: "Julien Santini", img: "https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg" },
    { name: "Edouard Deloignon", img: "https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg" },
    { name: "Djamel Comedy Club", img: "https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg" },
    { name: "Sophie & Alex", img: "https://i.imgur.com/ht3EucF.jpeg" }
  ];

  // Générer les affiches pour les rangées
  const topRowPosters = [...artistPosters, ...artistPosters];
  const bottomRowPosters = [
    artistPosters[8], artistPosters[9], artistPosters[5], 
    artistPosters[0], artistPosters[4], artistPosters[2],
    artistPosters[1], artistPosters[3], artistPosters[7], 
    artistPosters[6],
    artistPosters[8], artistPosters[9], artistPosters[5], 
    artistPosters[0], artistPosters[4], artistPosters[2],
    artistPosters[1], artistPosters[3], artistPosters[7], 
    artistPosters[6],
  ];

  return (
    <>
      <section className="hero-section">
        {/* Carrousel d'affiches en arrière-plan */}
        <div className="background-carousel">
          <div className="carousel-rows">
            {/* Rangée du haut - défile vers la gauche */}
            <div className="carousel-track top-row">
              {topRowPosters.map((artist, index) => (
                <div key={`top-${index}`} className="poster-card">
                  <img src={artist.img} alt={artist.name} loading="lazy" />
                </div>
              ))}
            </div>

            {/* Rangée du bas - défile vers la droite */}
            <div className="carousel-track bottom-row">
              {bottomRowPosters.map((artist, index) => (
                <div key={`bottom-${index}`} className="poster-card">
                  <img src={artist.img} alt={artist.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay gradient pour la lisibilité */}
        <div className="overlay"></div>

        {/* Contenu principal */}
        <div className="main-content">
          {/* Badge */}
          <div className="badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Production de spectacles vivants</span>
          </div>

          {/* Titres */}
          <div className="titles-container">
            <h1 className="title-tiny">TINY TEAM,</h1>
            <h1 className="title-big">BIG DREAMS</h1>
          </div>

          {/* Boutons avec effet glow */}
          <div className="buttons">
            <a href="/artistes" className="btn btn-primary">
              <span>Découvrir nos artistes →</span>
            </a>
            <a href="#" onClick={handleShowreelClick} className="btn btn-secondary">
              <span>▶ Showreel</span>
            </a>
          </div>

          {/* Cartes pour desktop avec animation */}
          <div className="cards-wrapper desktop-only">
            <div className="cards">
              <a 
                href="/artiste" 
                className="card"
                onClick={(e) => handleCardClick(e, '/artiste')}
              >
                <p className="card-label">Vous êtes</p>
                <h3 className="card-title">
                  <span>Artiste</span>
                  <span className="card-arrow">→</span>
                </h3>
              </a>
              
              <a 
                href="/programmateur" 
                className="card"
                onClick={(e) => handleCardClick(e, '/programmateur')}
              >
                <p className="card-label">Vous êtes</p>
                <h3 className="card-title">
                  <span>Programmateur</span>
                  <span className="card-arrow">→</span>
                </h3>
              </a>
              
              <a 
                href="/marque" 
                className="card"
                onClick={(e) => handleCardClick(e, '/marque')}
              >
                <p className="card-label">Vous êtes une</p>
                <h3 className="card-title">
                  <span>Entreprise</span>
                  <span className="card-arrow">→</span>
                </h3>
              </a>
            </div>
          </div>

          {/* Cartes mobile avec animation */}
          <div className="mobile-cards mobile-only">
            <a 
              href="/artiste" 
              className="mobile-card"
              onClick={(e) => handleCardClick(e, '/artiste')}
            >
              <div className="mobile-card-content">
                <span className="mobile-card-title">Artiste</span>
                <span className="mobile-card-desc">Rejoignez notre famille</span>
              </div>
              <span className="mobile-card-arrow">→</span>
            </a>
            
            <a 
              href="/programmateur" 
              className="mobile-card"
              onClick={(e) => handleCardClick(e, '/programmateur')}
            >
              <div className="mobile-card-content">
                <span className="mobile-card-title">Programmateur</span>
                <span className="mobile-card-desc">Découvrez nos talents</span>
              </div>
              <span className="mobile-card-arrow">→</span>
            </a>
            
            <a 
              href="/marque" 
              className="mobile-card"
              onClick={(e) => handleCardClick(e, '/marque')}
            >
              <div className="mobile-card-content">
                <span className="mobile-card-title">Entreprise</span>
                <span className="mobile-card-desc">Events sur mesure</span>
              </div>
              <span className="mobile-card-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Popup "Bientôt disponible" */}
        {showPopup && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
            color: 'white',
            padding: '1.5rem 3rem',
            borderRadius: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            zIndex: 1000,
            fontSize: '1.1rem',
            fontWeight: '600',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            🎬 Showreel bientôt disponible !
          </div>
        )}
      </section>

      {/* Overlay de transition */}
      <TransitionOverlay 
        isVisible={isTransitioning}
        pathType={selectedPath}
        onComplete={() => setIsTransitioning(false)}
      />
    </>
  );
};