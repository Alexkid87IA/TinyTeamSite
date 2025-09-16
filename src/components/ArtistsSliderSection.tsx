import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, MousePointer2 } from 'lucide-react';
import './ArtistsSliderSection.css';

// Liste des artistes
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
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
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

  // Gérer le scroll du carousel mobile
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;

    const handleScroll = () => {
      const container = carouselRef.current;
      if (!container) return;

      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85;
      const gap = 16; // 1rem en px
      const scrollUnit = cardWidth + gap;
      
      const newIndex = Math.round(scrollLeft / scrollUnit);
      setActiveIndex(newIndex);
    };

    const container = carouselRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  // Fonction pour scroller vers une carte spécifique
  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    
    const container = carouselRef.current;
    const cardWidth = container.offsetWidth * 0.85;
    const gap = 16;
    const scrollPosition = index * (cardWidth + gap);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="artists-slider-section">
      {/* Effets de fond spectaculaires */}
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

      {/* Contenu principal */}
      <div className="artists-main-content">
        
        {/* Header épique avec animations */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="title-glow" />
          
          <h2 className="section-title">
            <span className="title-line-1">Nos</span>
            <span className="title-line-2">Artistes</span>
          </h2>
          
          <motion.div 
            className="slogan-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="slogan-text">
              Des talents d'exception, des univers uniques, une seule passion :
            </span>
            <span className="slogan-emphasis">
              Vous émerveiller
            </span>
          </motion.div>
          
          <motion.p 
            className="section-hint"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Survolez les affiches pour découvrir chaque artiste
          </motion.p>
        </motion.div>

        {/* Rivière d'artistes pour desktop */}
        {!isMobile && (
          <motion.div 
            className="artists-river"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Masques de dégradé */}
            <div className="mask-left" />
            <div className="mask-right" />
            
            {/* Rangée du haut - défile vers la droite */}
            <div className="river-row row-right">
              {topRow.map((artist, index) => (
                <motion.div
                  key={`top-${index}`}
                  className={`poster-card ${hoveredCard === `top-${index}` ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(`top-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/artiste/${artist.id}`}>
                    <img 
                      src={artist.image} 
                      alt={artist.name} 
                      className="poster-image"
                      loading="lazy"
                    />
                    <div className="poster-overlay" />
                    <div className="poster-content">
                      <h3 className="poster-name">{artist.name}</h3>
                      <button className="poster-button">
                        Découvrir
                        <ChevronRight size={16} />
                      </button>
                    </div>
                    <div className="poster-shine" />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Rangée du bas - défile vers la gauche */}
            <div className="river-row row-left">
              {bottomRow.map((artist, index) => (
                <motion.div
                  key={`bottom-${index}`}
                  className={`poster-card ${hoveredCard === `bottom-${index}` ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(`bottom-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/artiste/${artist.id}`}>
                    <img 
                      src={artist.image} 
                      alt={artist.name} 
                      className="poster-image"
                      loading="lazy"
                    />
                    <div className="poster-overlay" />
                    <div className="poster-content">
                      <h3 className="poster-name">{artist.name}</h3>
                      <button className="poster-button">
                        Découvrir
                        <ChevronRight size={16} />
                      </button>
                    </div>
                    <div className="poster-shine" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Carousel mobile avec scroll horizontal */}
        {isMobile && (
          <motion.div 
            className="mobile-carousel"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div 
              className="carousel-container"
              ref={carouselRef}
            >
              {artistsData.map((artist, index) => (
                <div
                  key={artist.id}
                  className="carousel-card"
                >
                  <motion.div
                    className={`poster-card ${activeIndex === index ? 'active' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: activeIndex === index ? 1 : 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={`/artiste/${artist.id}`}>
                      <img 
                        src={artist.image} 
                        alt={artist.name} 
                        className="poster-image"
                        loading="lazy"
                      />
                      <div className="poster-overlay" />
                      <div className="poster-content">
                        <h3 className="poster-name">{artist.name}</h3>
                        <button className="poster-button">
                          Découvrir
                          <ChevronRight size={16} />
                        </button>
                      </div>
                      <div className="poster-shine" />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Indicateurs de pagination */}
            <div className="carousel-indicators">
              {artistsData.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => scrollToCard(index)}
                  aria-label={`Aller à l'artiste ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section avec animation */}
        <motion.div 
          className="section-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/artistes" className="main-cta-button">
            <span>Explorer tous nos artistes</span>
            <ChevronRight size={20} />
          </Link>
        </motion.div>

        {/* Indicateur d'interaction (desktop uniquement) */}
        <motion.div 
          className="interaction-indicator"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <MousePointer2 className="indicator-icon" />
          <span>Survolez une affiche pour en savoir plus</span>
        </motion.div>
      </div>
    </section>
  );
};