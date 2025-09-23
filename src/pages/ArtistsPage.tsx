import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { HeroSection } from '../sections/artists-page-v2/HeroSection';
import { ArtistsGridSection } from '../sections/artists-page-v2/ArtistsGridSection';
import { CTASection } from '../sections/artists-page-v2/CTASection';

export const ArtistsPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero avec les images d'artistes en fond */}
      <HeroSection />
      
      {/* Grille d'artistes avec rivière qui défile */}
      <ArtistsGridSection 
        selectedCategory="Tous"
        searchTerm=""
      />
      
      {/* Call to action final */}
      <CTASection />
      
      <Footer />
    </main>
  );
};