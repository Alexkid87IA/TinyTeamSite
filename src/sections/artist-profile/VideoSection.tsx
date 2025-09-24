import React, { useState } from 'react';
import { Play } from 'lucide-react';
import './VideoSection.css';

interface Artist {
  id: string;
  name: string;
  showName: string;
  videoUrl?: string;
  videoThumbnail?: string;
  websiteUrl?: string;
}

interface VideoSectionProps {
  artist: Artist;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  // Extraire l'ID YouTube de l'URL si nécessaire
  const getYouTubeId = (url: string) => {
    const match = url?.match(/(?:youtube\.com\/embed\/|youtu\.be\/|watch\?v=)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const youtubeId = artist.videoUrl ? getYouTubeId(artist.videoUrl) : '';
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying ? 1 : 0}&rel=0`;

  return (
    <section id="video-section" className="artist-video-section">
      {/* Effets de fond */}
      <div className="video-background">
        <div className="dots-pattern" />
        <div className="scan-lines" />
        <div 
          className="video-orb orb-top" 
          style={{ '--tx': '-50%' } as React.CSSProperties} 
        />
        <div className="video-orb orb-bottom" />
      </div>

      {/* Conteneur principal */}
      <div className="video-container">
        {/* Header */}
        <div className="video-header">
          <div className="video-badge">
            <Play className="badge-icon" size={16} />
            <span className="badge-label">Extrait vidéo</span>
          </div>
          <h2 className="video-title">
            <span className="title-gradient">Découvrez un extrait</span>
          </h2>
          <p className="video-subtitle">{artist.showName}</p>
        </div>

        {/* Player vidéo */}
        {artist.videoUrl && (
          <div className="video-player-wrapper">
            <div className="video-player">
              <div className="video-frame" />
              
              {/* Thumbnail et bouton play */}
              {!isPlaying && (
                <>
                  <div className="video-thumbnail">
                    {artist.videoThumbnail ? (
                      <img
                        src={artist.videoThumbnail}
                        alt={`Aperçu de ${artist.showName}`}
                        className="thumbnail-image"
                      />
                    ) : (
                      <div 
                        className="thumbnail-image" 
                        style={{ 
                          background: 'linear-gradient(135deg, #1a1a2e, #16213e)'
                        }} 
                      />
                    )}
                  </div>
                  <div className="play-button-wrapper">
                    <div className="play-pulse" />
                    <button 
                      className="play-button"
                      onClick={handlePlayClick}
                      aria-label="Lire la vidéo"
                    >
                      <Play size={40} className="play-icon" fill="currentColor" />
                    </button>
                  </div>
                </>
              )}

              {/* iFrame YouTube */}
              {isPlaying && (
                <iframe
                  src={embedUrl}
                  title={`Extrait du spectacle ${artist.showName}`}
                  className="video-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              {/* Contrôles personnalisés (décoratif) */}
              <div className="video-controls">
                <span className="control-text">
                  Extrait officiel - {artist.showName}
                </span>
                <span className="control-text">
                  HD 1080p
                </span>
              </div>
            </div>
          </div>
        )}


      </div>
    </section>
  );
};