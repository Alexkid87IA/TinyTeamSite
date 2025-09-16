import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './StorySection.css';

const teamMembers = [
  {
    name: "Bénédicte",
    lastName: "Lecoq",
    role: "Fondatrice & Directrice",
    image: "https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg",
    color: "#ff00ff"
  },
  {
    name: "Isabelle",
    lastName: "Sabatier", 
    role: "Diffusion & Tournées",
    image: "https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg",
    color: "#a855f7"
  },
  {
    name: "Elodie",
    lastName: "Biffi",
    role: "Administration",
    image: "https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg",
    color: "#00ffff"
  },
  {
    name: "Jérémy",
    lastName: "Dravigny",
    role: "Communication & Prod",
    image: "https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg",
    color: "#ffff00"
  },
  {
    name: "Margaux",
    lastName: "Morel",
    role: "Production & Events",
    image: "https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg",
    color: "#14b8a6"
  }
];

export const StorySection = () => {
  return (
    <section className="story-section">
      {/* Effets de fond */}
      <div className="story-bg-effects">
        <div className="gradient-mesh"></div>
        <div className="gradient-radial-1"></div>
        <div className="gradient-radial-2"></div>
        <div className="gradient-radial-3"></div>
        
        {/* Orbes flottants */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                ['rgba(236,72,153,0.15)', 'rgba(168,85,247,0.15)', 'rgba(59,130,246,0.15)'][i % 3]
              } 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(60px)'
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        {/* Titre principal */}
        <div className="hero-title-wrapper">
          <div className="hero-title-glow"></div>
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="title-line-1">Notre Force,</span>
            <span className="title-line-2">Notre Team</span>
          </motion.h2>
        </div>

        {/* Cartes d'équipe en grille 3-2 */}
        <div className="team-cards-container">
          {/* Première ligne - 3 cartes */}
          <div className="team-cards-grid">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.name}
                className={`team-card team-card-${index}`}
                initial={{ opacity: 0, y: 50, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  zIndex: 100,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={member.image}
                  alt={`${member.name} ${member.lastName}`}
                  className="team-card-image"
                />
                <div className="team-card-overlay"></div>
                
                <Sparkles 
                  className="sparkle-icon" 
                  style={{ color: member.color }}
                  size={24}
                />
                
                <div className="team-card-content">
                  <h3 className="team-member-name">{member.name}</h3>
                  <h4 className="team-member-lastname">{member.lastName}</h4>
                  <div className="team-member-role">
                    {member.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deuxième ligne - 2 cartes */}
          <div className="team-cards-grid row-two">
            {teamMembers.slice(3, 5).map((member, index) => (
              <motion.div
                key={member.name}
                className={`team-card team-card-${index + 3}`}
                initial={{ opacity: 0, y: 50, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: (index + 3) * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  zIndex: 100,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={member.image}
                  alt={`${member.name} ${member.lastName}`}
                  className="team-card-image"
                />
                <div className="team-card-overlay"></div>
                
                <Sparkles 
                  className="sparkle-icon" 
                  style={{ color: member.color }}
                  size={24}
                />
                
                <div className="team-card-content">
                  <h3 className="team-member-name">{member.name}</h3>
                  <h4 className="team-member-lastname">{member.lastName}</h4>
                  <div className="team-member-role">
                    {member.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fin de section épique SANS rayons rotatifs */}
        <div className="section-finale">
          {/* Particules flottantes */}
          <div className="finale-particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="finale-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  '--x': `${(Math.random() - 0.5) * 200}px`,
                  '--y': `${(Math.random() - 0.5) * 200}px`,
                  animationDelay: `${Math.random() * 15}s`
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Titre final */}
          <motion.div 
            className="finale-title"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
          >
            <h3 className="finale-line-1">Ensemble, nous créons</h3>
            <h3 className="finale-line-2">L'EXCELLENCE</h3>
          </motion.div>

          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="/equipe" className="cta-button">
              <span className="cta-text">DÉCOUVRIR NOTRE HISTOIRE</span>
              <ArrowRight className="cta-icon" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};