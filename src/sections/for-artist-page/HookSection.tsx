import React from 'react';
import './HookSection.css';

export const HookSection: React.FC = () => {
  return (
    <section className="story-section hook-section">
      <div className="section-content">
        <h1 className="hook-title">
          <span className="title-line-1">Première fois sur scène.</span>
          <span className="title-line-2">Première standing ovation.</span>
        </h1>
        <div className="hook-subtitle">
          <span className="subtitle-line-1">Vous étiez né pour ça...</span>
          <span className="subtitle-line-2">pas pour Excel.</span>
        </div>
      </div>
    </section>
  );
};