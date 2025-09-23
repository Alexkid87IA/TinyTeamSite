import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { TeamHeroSection } from '../sections/team/TeamHeroSection';
import { TeamMembersSection } from '../sections/team/TeamMembersSection';
import { TeamCTASection } from '../sections/team/TeamCTASection';
import './TeamPage.css';

const TeamPage = () => {
  return (
    <div className="team-page">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <TeamHeroSection />
      
      {/* Team Members Section */}
      <TeamMembersSection />
      
      {/* CTA Section */}
      <TeamCTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamPage;