import React, { useState, useEffect } from 'react';
import './RevelationSection.css';

export const RevelationSection: React.FC = () => {
  const [transferredTasks, setTransferredTasks] = useState<number[]>([]);

  useEffect(() => {
    // Transférer les tâches une par une
    const timers = [
      setTimeout(() => setTransferredTasks(prev => [...prev, 0]), 1000),
      setTimeout(() => setTransferredTasks(prev => [...prev, 1]), 1300),
      setTimeout(() => setTransferredTasks(prev => [...prev, 2]), 1600),
      setTimeout(() => setTransferredTasks(prev => [...prev, 3]), 1900),
      setTimeout(() => setTransferredTasks(prev => [...prev, 4]), 2200),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const adminTasks = [
    "Négocier les contrats",
    "Gérer la comptabilité",
    "Faire le marketing",
    "Organiser la logistique",
    "Gérer l'administratif"
  ];

  return (
    <section className="story-section revelation-section">
      <div className="section-content">
        <div className="revelation-header">
          <h2 className="revelation-title">Et si on inversait les rôles ?</h2>
        </div>
        
        <div className="columns-container">
          <div className="column left-column">
            <h3 className="column-title">Vous</h3>
            <div className="task-list">
              {adminTasks.map((task, index) => (
                <div 
                  key={index} 
                  className={`task-item ${transferredTasks.includes(index) ? 'transferred' : ''}`}
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
          
          <div className="transfer-arrows">
            {adminTasks.map((_, index) => (
              <div
                key={index}
                className={`arrow ${transferredTasks.includes(index) ? 'active' : ''}`}
              >
                →
              </div>
            ))}
          </div>
          
          <div className="column right-column">
            <h3 className="column-title">Nous</h3>
            <div className="task-list">
              {adminTasks.map((task, index) => (
                <div 
                  key={index} 
                  className={`task-item ${transferredTasks.includes(index) ? 'visible' : ''}`}
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="revelation-result">
          <p className="result-text">Résultat :</p>
          <p className="result-highlight">
            VOUS CRÉEZ.
          </p>
        </div>
      </div>
    </section>
  );
};