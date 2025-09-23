import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BrandHeroSection } from '../sections/brand/BrandHeroSection';
import { ContentRealitySection } from '../sections/brand/ContentRealitySection';
import { ContentSolutionSection } from '../sections/brand/ContentSolutionSection';
import { ContentProcessSection } from '../sections/brand/ContentProcessSection';
import { EventRealitySection } from '../sections/brand/EventRealitySection';
import { EventSolutionSection } from '../sections/brand/EventSolutionSection';
import { EventProcessSection } from '../sections/brand/EventProcessSection';
import { BrandProofSection } from '../sections/brand/BrandProofSection';
import { BrandFinalCTA } from '../sections/brand/BrandFinalCTA';
import './BrandPage.css';

export const BrandPage = () => {
  const [userPath, setUserPath] = useState<'content' | 'event' | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const handlePathSelection = (path: 'content' | 'event') => {
    setIsTransitioning(true);
    setUserPath(path);
    
    // Démarrer l'animation
    setTimeout(() => {
      setShowSections(true);
      setIsTransitioning(false);
      
      // Scroll fluide vers les nouvelles sections
      setTimeout(() => {
        if (sectionsRef.current) {
          sectionsRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#000] brand-page">
      <Navigation />
      
      <BrandHeroSection onSelectPath={handlePathSelection} />
      
      {/* Overlay de transition */}
      {isTransitioning && (
        <div className="transition-overlay">
          <div className="transition-loader">
            <div className="loader-circle"></div>
            <p className="loader-text">
              {userPath === 'content' ? 'Chargement du parcours Content...' : 'Chargement du parcours Event...'}
            </p>
          </div>
        </div>
      )}
      
      {/* Container des sections avec animation */}
      {userPath && (
        <div 
          ref={sectionsRef}
          className={`sections-container ${showSections ? 'visible' : ''}`}
        >
          {/* Sections dynamiques selon le parcours choisi */}
          {userPath === 'content' && (
            <div className="content-sections">
              <ContentRealitySection />
              <ContentSolutionSection />
              <ContentProcessSection />
            </div>
          )}
          
          {userPath === 'event' && (
            <div className="event-sections">
              <EventRealitySection />
              <EventSolutionSection />
              <EventProcessSection />
            </div>
          )}
          
          {/* Sections communes */}
          <BrandProofSection userPath={userPath} />
          <BrandFinalCTA userPath={userPath} />
        </div>
      )}
      
      <Footer />
    </main>
  );
};