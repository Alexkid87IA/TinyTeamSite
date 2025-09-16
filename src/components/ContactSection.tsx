import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  Briefcase, 
  Building, 
  Mail, 
  Phone,
  MapPin 
} from 'lucide-react';
import './ContactSection.css';

export const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Effets de fond spectaculaires */}
      <div className="contact-background">
        {/* Grille animée */}
        <div className="grid-bg" />
        
        {/* Orbes de lumière */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        
        {/* Étoiles scintillantes */}
        <div className="stars">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="contact-content">
        {/* Header épique */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="title-main">
            <div className="title-glow" />
            <h2 className="title-text">
              <span className="line-1">Prêt à</span>
              <span className="line-2">Collaborer ?</span>
            </h2>
          </div>
          
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Que vous soyez artiste, programmateur ou marque, 
            nous sommes là pour donner vie à vos projets les plus ambitieux
          </motion.p>
        </motion.div>

        {/* Cartes de contact */}
        <motion.div 
          className="contact-cards"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Carte Artiste */}
          <div className="contact-card card-artiste">
            <div className="card-shine" />
            
            <div className="card-icon-wrapper">
              <div className="card-icon-bg" />
              <div className="card-icon">
                <Star />
              </div>
            </div>
            
            <h3 className="card-title">Artiste</h3>
            <p className="card-description">
              Propulsez votre carrière avec notre expertise en production et management
            </p>
            
            <Link to="/artiste" className="card-button">
              <span>En savoir plus</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Carte Programmateur */}
          <div className="contact-card card-programmateur">
            <div className="card-shine" />
            
            <div className="card-icon-wrapper">
              <div className="card-icon-bg" />
              <div className="card-icon">
                <Briefcase />
              </div>
            </div>
            
            <h3 className="card-title">Programmateur</h3>
            <p className="card-description">
              Découvrez nos spectacles et enrichissez votre programmation culturelle
            </p>
            
            <Link to="/programmateur" className="card-button">
              <span>Nos spectacles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Carte Entreprise */}
          <div className="contact-card card-entreprise">
            <div className="card-shine" />
            
            <div className="card-icon-wrapper">
              <div className="card-icon-bg" />
              <div className="card-icon">
                <Building />
              </div>
            </div>
            
            <h3 className="card-title">Entreprise</h3>
            <p className="card-description">
              Créez des événements inoubliables pour vos équipes et vos clients
            </p>
            
            <Link to="/entreprise" className="card-button">
              <span>Événements pro</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* CTA Principal */}
        <motion.div 
          className="main-cta-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contact" className="main-cta">
            <Sparkles size={24} />
            <span>Discutons de votre projet</span>
            <ArrowRight size={24} />
          </Link>
        </motion.div>

        {/* Footer de contact */}
        <motion.div 
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="footer-text">
            Ou contactez-nous directement
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <Mail />
              <a href="mailto:contact@tinyteam.fr" className="contact-link">
                contact@tinyteam.fr
              </a>
            </div>
            
            <div className="contact-item">
              <Phone />
              <a href="tel:+33612345678" className="contact-link">
                +33 6 12 34 56 78
              </a>
            </div>
            
            <div className="contact-item">
              <MapPin />
              <span className="contact-link">
                Cagnes-sur-Mer, France
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};