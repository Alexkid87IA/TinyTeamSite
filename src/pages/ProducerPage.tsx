import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProducerHeroSection } from '../sections/producer-page/HeroSection';
import { ProducerArtistsSection } from '../sections/producer-page/ArtistsSection';
import { ProducerCommitmentsSection } from '../sections/producer-page/CommitmentsSection';
import { ProducerCTASection } from '../sections/producer-page/CTASection';

export const ProducerPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />
      <ProducerHeroSection />
      <ProducerArtistsSection />
      <ProducerCommitmentsSection />
      <ProducerCTASection />
      <Footer />
    </main>
  );
};