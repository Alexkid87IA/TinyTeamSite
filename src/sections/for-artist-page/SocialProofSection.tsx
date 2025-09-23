import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SocialProofSection.css';

export const SocialProofSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = sectionRef.current?.querySelectorAll(
      '.artist-proof-card, .proof-message'
    );
    animatedElements?.forEach(el => observer.observe(el));

    return () => {
      animatedElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Utiliser les vrais artistes avec lesquels vous travaillez
  const currentArtists = [
    {
      id: "djal",
      name: "D'Jal",
      type: "Humoriste",
      status: "En tournée",
      image: "https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg"
    },
    {
      id: "marc-antoine",
      name: "Marc-Antoine Le Bret",
      type: "Imitateur",
      status: "Nouveau spectacle",
      image: "https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg"
    },
    {
      id: "urbain",
      name: "Urbain",
      type: "Humoriste",
      status: "Collaboration active",
      image: "https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg"
    },
    {
      id: "thomas",
      name: "Thomas Angelvy",
      type: "Humoriste",
      status: "En développement",
      image: "https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg"
    },
    {
      id: "lucie",
      name: "Lucie Carbone",
      type: "Humoriste",
      status: "Tournée 2025",
      image: "https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg"
    },
    {
      id: "julien",
      name: "Julien Santini",
      type: "Humoriste",
      status: "Production en cours",
      image: "https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg"
    },
    {
      id: "morgane",
      name: "Morgane Berling",
      type: "Humoriste",
      status: "Spectacle solo",
      image: "https://i.imgur.com/munE7s3.jpeg"
    },
    {
      id: "edouard",
      name: "Edouard Deloignon",
      type: "Humoriste",
      status: "En création",
      image: "https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg"
    },
    {
      id: "sophie-alex",
      name: "Sophie & Alex",
      type: "Duo comique",
      status: "Tournée duo",
      image: "https://i.imgur.com/ht3EucF.jpeg"
    },
    {
      id: "djamel",
      name: "Djamel Comedy Club",
      type: "Comedy Club",
      status: "Shows hebdomadaires",
      image: "https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg"
    }
  ];

  return (
    <section className="story-section social-proof-section">
      <div className="section-content">
        <div className="proof-header">
          <h2 className="proof-title">Ce n'est pas une théorie.</h2>
          <p className="proof-subtitle">C'est notre quotidien.</p>
        </div>
        
        <div className="artists-showcase">
          {currentArtists.map((artist, index) => (
            <Link
              key={index}
              to={`/artiste/${artist.id}`}
              className="artist-proof-card"
            >
              <img 
                src={artist.image} 
                alt={artist.name}
                className="artist-image"
              />
              <div className="artist-overlay"></div>
              <div className="artist-status">{artist.status}</div>
              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-type">{artist.type}</p>
                <span className="artist-cta">Découvrir →</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="proof-message">
          <p className="message-text">
            10 artistes. Des milliers de spectateurs.
            <span className="message-highlight">Un seul objectif : leur succès.</span>
          </p>
        </div>
      </div>
    </section>
  );
};