import React, { useState, useEffect } from 'react';
import './ArtistStoryPage.css';

const ArtistStoryPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sectionHeight = window.innerHeight;
      setCurrentSection(Math.floor(window.scrollY / sectionHeight));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const frustrations = [
    { time: "8h00", task: "Répondre aux 47 mails en retard", emoji: "📧" },
    { time: "10h00", task: "Négocier un contrat (c'est quoi une clause de non-concurrence?)", emoji: "📄" },
    { time: "12h00", task: "Post Instagram obligatoire pour rester visible", emoji: "📱" },
    { time: "14h00", task: "Cette marque veut un partenariat... bon pour mon image?", emoji: "🤔" },
    { time: "16h00", task: "Excel budget tournée (pourquoi ça colle jamais?)", emoji: "💸" },
    { time: "18h00", task: "Stress billetterie: seulement 40% vendus", emoji: "😰" },
    { time: "22h00", task: "Enfin sur scène... mais épuisé", emoji: "😴" },
    { time: "00h00", task: "Au lit: 'Pourquoi je fais tout ça?'", emoji: "💭" }
  ];

  // Génération des particules
  const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className="floating-particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }}
      />
    ));
  };

  return (
    <div className="artist-story-page">
      {/* Section 1: Le Miroir */}
      <section className="story-section mirror-section">
        <div className="mirror-content">
          <h1 className="mirror-title">
            <span className="mirror-title-line-1">Vous vous souvenez pourquoi</span>
            <span className="mirror-title-line-2">vous avez commencé?</span>
          </h1>
          <p className="mirror-subtitle">
            C'était pour les likes Instagram
            <br />
            ou pour les applaudissements?
          </p>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-text">Scrollez</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Section 2: La journée type */}
      <section className="story-section timeline-section">
        <div className="timeline-content">
          <h2 className="timeline-title">
            Votre journée type d'artiste moderne
          </h2>
          
          <div className="timeline-container">
            <div className="timeline-line" />

            {frustrations.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-time">
                  {item.time}
                </div>
                <div className="timeline-dot">
                  {item.emoji}
                </div>
                <div className="timeline-content">
                  {item.task}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Le rappel */}
      <section className="story-section recall-section">
        <div className="recall-content">
          <h2 className="recall-intro">
            Pourtant...
          </h2>
          <p className="recall-main-text">
            Vous vous souvenez de ce
            <span className="recall-highlight">frisson?</span>
          </p>
          <div className="recall-description">
            Les yeux qui brillent dans le public.
            <br />
            Ce silence juste avant les applaudissements.
            <br />
            Cette connexion unique.
            <br />
            <br />
            <span className="highlight-text">
              C'est pour ça que vous avez commencé.
            </span>
          </div>
        </div>
      </section>

      {/* Section 4: La révélation */}
      <section className="story-section revelation-section">
        <div className="revelation-content">
          <div className="revelation-title">
            <span className="revelation-title-line-1">Et si quelqu'un</span>
            <span className="revelation-title-line-2">s'occupait de tout le reste?</span>
          </div>

          <div className="strike-grid">
            <div className="strike-item">Plus de stress admin</div>
            <div className="strike-item">Plus de négo interminables</div>
            <div className="strike-item">Plus de doutes sur votre image</div>
            <div className="strike-item">Plus d'Excel à 2h du matin</div>
          </div>

          <p className="revelation-question">
            Et si vous pouviez juste...
            <span className="revelation-answer">CRÉER?</span>
          </p>
        </div>
      </section>

      {/* Section 5: L'invitation */}
      <section className="story-section invitation-section">
        <div className="invitation-content">
          <div className="company-logo">
            <span className="company-logo-text">TT</span>
          </div>

          <h2 className="invitation-title">
            <span className="invitation-title-line-1">Nous gérons le business.</span>
            <span className="invitation-title-line-2">Vous gérez l'art.</span>
          </h2>

          <p className="invitation-description">
            Tiny Team, c'est une équipe qui comprend.
            <br />
            Qui a vécu vos galères.
            <br />
            Et qui sait exactement comment vous en libérer.
          </p>

          <button
            className="cta-primary"
            onClick={() => window.location.href = '/contact?type=artiste'}
          >
            <span>Libérez-vous</span>
          </button>

          <p className="cta-subtitle">
            Première discussion sans engagement.
            <br />
            Juste pour comprendre vos besoins.
          </p>
        </div>

        {/* Particules flottantes */}
        {generateParticles(8)}
      </section>
    </div>
  );
};

export default ArtistStoryPage;