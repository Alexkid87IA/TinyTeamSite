import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProducerArtistsGrid } from '../sections/producer-page/ProducerArtistsGrid';
import { ProducerArtistsShowcase } from '../sections/producer-page/ProducerArtistsShowcase';
import { ProducerRealitySection } from '../sections/producer-page/ProducerRealitySection';
import { ProducerProofSection } from '../sections/producer-page/ProducerProofSection';
import { ProducerFinalCTA } from '../sections/producer-page/ProducerFinalCTA';

export const ProducerPage = () => {
  return (
    <main className="min-h-screen bg-[#000]">
      <Navigation />
      <ProducerArtistsGrid />
      <ProducerArtistsShowcase />
      <ProducerRealitySection />
      <ProducerProofSection />
      <ProducerFinalCTA />
      <Footer />
    </main>
  );
};