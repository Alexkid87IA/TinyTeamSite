import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { HookSection } from '../sections/for-artist-page/HookSection';
import { RealitySection } from '../sections/for-artist-page/RealitySection';
import { ReminderSection } from '../sections/for-artist-page/ReminderSection';
import { RevelationSection } from '../sections/for-artist-page/RevelationSection';
import { SocialProofSection } from '../sections/for-artist-page/SocialProofSection';
import { FinalCTASection } from '../sections/for-artist-page/FinalCTASection';

export const ForArtistPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HookSection />
      <RealitySection />
      <ReminderSection />
      <RevelationSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};