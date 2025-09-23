import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, TrendingUp, Calendar } from 'lucide-react';
import './ArtistsGridSection.css';

// Import des données depuis le fichier existant (à adapter selon votre structure)
const artists = [
  {
    id: "urbain",
    name: "Urbain",
    type: "Humoriste",
    showName: "Le Pire Humain",
    image: "https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg",
    posterImage: "https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg",
    status: "En tournée",
    isNew: false,
    dates: [{ link: "#" }]
  },
  {
    id: "marc-antoine",
    name: "Marc-Antoine Le Bret",
    type: "Imitateur",
    showName: "Solo",
    image: "https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg",
    posterImage: "https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg",
    status: "Nouveau spectacle",
    isNew: true,
    dates: []
  },
  {
    id: "djal",
    name: "D'Jal",
    type: "Humoriste",
    showName: "À Cœur Ouvert",
    image: "https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg",
    posterImage: "https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg",
    status: "Best-seller",
    isNew: false,
    dates: [{ link: "#" }]
  },
  {
    id: "morgane",
    name: "Morgane Berling",
    type: "Humoriste",
    showName: "Morgane Berling",
    image: "https://i.imgur.com/munE7s3.jpeg",
    posterImage: "https://i.imgur.com/munE7s3.jpeg",
    status: "Spectacle solo",
    isNew: false,
    dates: []
  },
  {
    id: "thomas",
    name: "Thomas Angelvy",
    type: "Humoriste",
    showName: "En développement",
    image: "https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg",
    posterImage: "https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg",
    status: "Rising star",
    isNew: true,
    dates: []
  },
  {
    id: "lucie",
    name: "Lucie Carbone",
    type: "Humoriste",
    showName: "Tournée 2025",
    image: "https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg",
    posterImage: "https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg",
    status: "Tournée 2025",
    isNew: false,
    dates: [{ link: "#" }]
  },
  {
    id: "edouard",
    name: "Edouard Deloignon",
    type: "Humoriste",
    showName: "En création",
    image: "https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg",
    posterImage: "https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg",
    status: "En création",
    isNew: false,
    dates: []
  },
  {
    id: "julien",
    name: "Julien Santini",
    type: "Humoriste",
    showName: "Production en cours",
    image: "https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg",
    posterImage: "https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg",
    status: "Production",
    isNew: false,
    dates: []
  },
  {
    id: "sophie-alex",
    name: "Sophie & Alex",
    type: "Duo comique",
    showName: "Tournée duo",
    image: "https://i.imgur.com/ht3EucF.jpeg",
    posterImage: "https://i.imgur.com/ht3EucF.jpeg",
    status: "Duo comique",
    isNew: false,
    dates: []
  },
  {
    id: "djamel",
    name: "Djamel Comedy Club",
    type: "Comedy Club",
    showName: "Shows hebdomadaires",
    image: "https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg",
    posterImage: "https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg",
    status: "Shows hebdo",
    isNew: false,
    dates: [{ link: "#" }]
  }
];

interface ArtistsGridSectionProps {
  selectedCategory: string;
  searchTerm: string;
}

export const ArtistsGridSection: React.FC<ArtistsGridSectionProps> = ({
  selectedCategory,
  searchTerm
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filtrage des artistes
  const filteredArtists = artists.filter(artist => {
    const matchesCategory = selectedCategory === 'Tous' || 
                           artist.type === selectedCategory;
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.showName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Créer les rangées pour l'animation infinie (tripler pour la boucle)
  const halfLength = Math.ceil(filteredArtists.length / 2);
  const topRowArtists = filteredArtists.slice(0, halfLength);
  const bottomRowArtists = filteredArtists.slice(halfLength);
  
  // Tripler pour l'animation infinie
  const topRowLoop = [...topRowArtists, ...topRowArtists, ...topRowArtists];
  const bottomRowLoop = [...bottomRowArtists, ...bottomRowArtists, ...bottomRowArtists];

  return (
    <section className="artists-grid-section">
      {/* Effets de fond */}
      <div className="grid-background">
        {/* Orbes de lumière */}
        <div className="grid-orb orb-1" />
        <div className="grid-orb orb-2" />
        <div className="grid-orb orb-3" />
        
        {/* Particules */}
        <div className="grid-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid-main-content">
        {/* Nombre d'artistes trouvés */}
        <div className="results-count">
          <span className="count-number">{filteredArtists.length}</span>
          <span className="count-text">artistes disponibles</span>
        </div>

        {/* VERSION DESKTOP : Rivière d'artistes */}
        {!isMobile && filteredArtists.length > 0 && (
          <div className="artists-river">
            {/* Masques de dégradé */}
            <div className="river-mask-left" />
            <div className="river-mask-right" />
            
            {/* Rangée du haut */}
            <div className="river-row row-scroll-right">
              {topRowLoop.map((artist, index) => (
                <Link
                  key={`top-${index}`}
                  to={`/artiste/${artist.id}`}
                  className="artist-river-card"
                >
                  <div className="card-image-wrapper">
                    <img 
                      src={artist.posterImage || artist.image} 
                      alt={artist.name} 
                      className="artist-river-image"
                      loading="lazy"
                    />
                    {artist.isNew && (
                      <div className="new-badge">
                        <Star size={12} />
                        <span>NEW</span>
                      </div>
                    )}

                  </div>
                  <div className="artist-river-overlay" />
                  <div className="artist-river-content">
                    <h3 className="artist-river-name">{artist.name}</h3>
                    <p className="artist-river-type">{artist.type}</p>
                    <span className="artist-river-button">
                      Découvrir
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Rangée du bas */}
            {bottomRowLoop.length > 0 && (
              <div className="river-row row-scroll-left">
                {bottomRowLoop.map((artist, index) => (
                  <Link
                    key={`bottom-${index}`}
                    to={`/artiste/${artist.id}`}
                    className="artist-river-card"
                  >
                    <div className="card-image-wrapper">
                      <img 
                        src={artist.posterImage || artist.image} 
                        alt={artist.name} 
                        className="artist-river-image"
                        loading="lazy"
                      />
                      {artist.isNew && (
                        <div className="new-badge">
                          <Star size={12} />
                          <span>NEW</span>
                        </div>
                      )}
                    </div>
                    <div className="artist-river-overlay" />
                    <div className="artist-river-content">
                      <h3 className="artist-river-name">{artist.name}</h3>
                      <p className="artist-river-type">{artist.type}</p>
                      <span className="artist-river-button">
                        Découvrir
                        <ChevronRight size={16} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VERSION MOBILE : Grille verticale */}
        {isMobile && filteredArtists.length > 0 && (
          <div className="mobile-grid">
            {filteredArtists.map((artist) => (
              <Link
                key={artist.id}
                to={`/artiste/${artist.id}`}
                className="mobile-artist-card"
              >
                <img 
                  src={artist.posterImage || artist.image} 
                  alt={artist.name} 
                  className="mobile-artist-image"
                  loading="lazy"
                />
                <div className="mobile-artist-content">
                  <h3 className="mobile-artist-name">{artist.name}</h3>
                  <p className="mobile-artist-type">{artist.type}</p>
                  <span className="mobile-artist-button">
                    Découvrir l'artiste
                    <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Message si aucun résultat */}
        {filteredArtists.length === 0 && (
          <div className="no-results">
            <p className="no-results-text">Aucun artiste trouvé</p>
            <button 
              onClick={() => window.location.reload()} 
              className="reset-btn"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
};