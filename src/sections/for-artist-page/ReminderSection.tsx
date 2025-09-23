import React from 'react';
import './ReminderSection.css';

export const ReminderSection: React.FC = () => {
  return (
    <section className="story-section reminder-section">
      <div className="section-content">
        <div className="reminder-content">
          <div className="reminder-statement">
            <p className="statement-line-1">La scène vous manque.</p>
            <p className="statement-line-2">Les emails vous épuisent.</p>
          </div>
          
          <div className="reminder-choice">
            <span className="choice-text">Continuez à subir</span>
            <span className="choice-or">ou</span>
            <span className="choice-action">reprenez le contrôle.</span>
          </div>
        </div>
      </div>
    </section>
  );
};