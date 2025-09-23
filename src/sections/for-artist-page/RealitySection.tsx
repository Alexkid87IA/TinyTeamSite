import React from 'react';
import './RealitySection.css';

export const RealitySection: React.FC = () => {
  const dayTasks = [
    { time: "9h", task: "Négocier un cachet" },
    { time: "11h", task: "Relire un contrat" },
    { time: "14h", task: "Répondre aux DMs" },
    { time: "16h", task: "Faire la compta" },
    { time: "18h", task: "Gérer la billetterie" },
    { time: "20h", task: "Créer (si il reste du temps)" }
  ];

  return (
    <section className="story-section reality-section">
      <div className="section-content">
        <div className="reality-header">
          <h2 className="reality-title">24 heures dans votre vie.</h2>
        </div>
        
        <div className="task-list">
          {dayTasks.map((item, index) => (
            <div key={index} className="task-line">
              <span className="task-time">{item.time}</span>
              <span className="task-separator">—</span>
              <span className="task-name">{item.task}</span>
            </div>
          ))}
        </div>
        
        <div className="reality-punchline">
          <p className="punchline-text">
            Ça vous inspire <span className="question-mark">?</span>
          </p>
        </div>
      </div>
    </section>
  );
};