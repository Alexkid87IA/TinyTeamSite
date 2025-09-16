import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './ContactSection.css';

export const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Effets de fond animes */}
      <div className="contact-bg-effects">
        {/* Grille cyberpunk */}
        <div className="cyber-grid" />
        
        {/* Orbes flottants */}
        <div className="floating-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        
        {/* Particules brillantes */}
        <div className="sparkle-field">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header spectaculaire */}
        <div className="contact-header">
          <div className="header-container">
            <div className="title-glow-bg" />
            
            <motion.h2 
              className="contact-title"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="title-line-1">Pret a</span>
              <span className="title-line-2">faire vibrer</span>
              <span className="title-line-3">
                les scenes
                <span className="title-question" dangerouslySetInnerHTML={{ __html: '&nbsp;&#63;' }} />
              </span>
            </motion.h2>
          </div>
          
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Que vous soyez artiste, programmateur ou marque, 
            nous sommes la pour donner vie a vos projets les plus ambitieux.
          </motion.p>
        </div>

        {/* Boutons CTA spectaculaires */}
        <div className="cta-container">
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Bouton principal EXPLOSIF */}
            <a
              href="/contact"
              className="cta-primary group"
            >
              <span className="relative z-10 font-black">
                DISCUTONS DE VOTRE PROJET
              </span>
              <ArrowRight className="cta-icon relative z-10" />
            </a>

            {/* Bouton secondaire glassmorphism */}
            <a
              href="/artistes"
              className="cta-secondary group"
            >
              <Sparkles className="cta-icon" />
              <span>Decouvrir nos artistes</span>
            </a>
          </motion.div>

          {/* Info de contact rapide avec animation */}
          <motion.div 
            className="quick-contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="quick-contact-text">
              Ou contactez-nous directement :
            </p>
            <a 
              href="mailto:contact@tinyteam.fr" 
              className="contact-email group"
            >
              <span className="relative">
                contact@tinyteam.fr
              </span>
            </a>
          </motion.div>
        </div>

        {/* Elements decoratifs animes */}
        <motion.div 
          className="absolute -top-20 left-10 w-40 h-40"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full border-2 border-pink-500/20 rounded-full" />
        </motion.div>

        <motion.div 
          className="absolute -bottom-20 right-10 w-60 h-60"
          animate={{
            rotate: [0, -360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full border-2 border-cyan-500/20 rounded-full" />
        </motion.div>

        {/* Triangles flottants */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <div 
              className="w-0 h-0"
              style={{
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderBottom: `35px solid ${['rgba(236, 72, 153, 0.2)', 'rgba(168, 85, 247, 0.2)', 'rgba(0, 255, 255, 0.2)'][i]}`,
              }}
            />
          </motion.div>
        ))}

        {/* Lignes animees decoratives */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-0 w-full h-px"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.2 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </motion.div>

        {/* Effet de particules supplementaires */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};