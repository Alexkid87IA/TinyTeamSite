import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArtistsHeroSection } from '../sections/artists-page/HeroSection';
import { ArtistsListSection } from '../sections/artists-page/ArtistsListSection';
import { ArtistsCTASection } from '../sections/artists-page/CTASection';

export const ArtistsPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />
      
      {/* Hero simple - Présentation */}
      <ArtistsHeroSection />
      
      {/* Catalogue des artistes - Le cœur de la page */}
      <ArtistsListSection 
        selectedCategory="Tous"
        searchTerm=""
      />
      
      {/* CTA pour programmateurs et bookings */}
      <ArtistsCTASection />
      
      <Footer />
    </main>
  );
};