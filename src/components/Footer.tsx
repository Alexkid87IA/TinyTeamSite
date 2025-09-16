import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Music2, 
  Youtube, 
  Heart,
  Sparkles 
} from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <footer className="footer">
      {/* Effets de fond spectaculaires */}
      <div className="footer-background">
        {/* Grille animée */}
        <div className="footer-grid" />
        
        {/* Orbes flottants */}
        <div className="footer-orb footer-orb-1" />
        <div className="footer-orb footer-orb-2" />
      </div>

      <div className="footer-wrapper">
        
        {/* Section principale */}
        <motion.div 
          className="footer-main"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
        >
          {/* Colonne Brand */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <div>
              <Link to="/" className="footer-logo">
                <img 
                  src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png"
                  alt="Tiny Team"
                />
              </Link>
              
              <h2 className="footer-headline">
                <span className="headline-line-1">L'excellence</span>
                <span className="headline-line-2">Créative</span>
              </h2>
              
              <p className="footer-description">
                Nous propulsons les talents du spectacle vivant vers de nouveaux sommets. 
                Production, management, diffusion : une expertise complète pour votre succès.
              </p>
            </div>
            
            <a href="mailto:contact@tinyteam.fr" className="footer-email">
              <Mail size={18} />
              contact@tinyteam.fr
            </a>
          </motion.div>
          
          {/* Navigation - Services */}
          <motion.div className="footer-column" variants={itemVariants}>
            <h3 className="footer-column-title">Nos Services</h3>
            <ul className="footer-links">
              <li>
                <Link to="/services#production" className="footer-link">
                  Production artistique
                </Link>
              </li>
              <li>
                <Link to="/services#management" className="footer-link">
                  Management d'artistes
                </Link>
              </li>
              <li>
                <Link to="/services#digital" className="footer-link">
                  Stratégie digitale
                </Link>
              </li>
              <li>
                <Link to="/services#communication" className="footer-link">
                  Communication
                </Link>
              </li>
              <li>
                <Link to="/services#diffusion" className="footer-link">
                  Diffusion & Booking
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Navigation - Entreprise */}
          <motion.div className="footer-column" variants={itemVariants}>
            <h3 className="footer-column-title">L'Agence</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about" className="footer-link">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link to="/team" className="footer-link">
                  L'équipe
                </Link>
              </li>
              <li>
                <Link to="/artistes" className="footer-link">
                  Nos artistes
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="footer-link">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Navigation - Espace Pro */}
          <motion.div className="footer-column" variants={itemVariants}>
            <h3 className="footer-column-title">Espace Pro</h3>
            <ul className="footer-links">
              <li>
                <Link to="/artiste" className="footer-link">
                  Devenir artiste
                </Link>
              </li>
              <li>
                <Link to="/programmateur" className="footer-link">
                  Programmateurs
                </Link>
              </li>
              <li>
                <Link to="/entreprise" className="footer-link">
                  Entreprises
                </Link>
              </li>
              <li>
                <Link to="/partenaires" className="footer-link">
                  Partenariats
                </Link>
              </li>
              <li>
                <Link to="/presse" className="footer-link">
                  Espace presse
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* CTA Section Néon */}
        <motion.div 
          className="footer-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="footer-cta-content">
            <h3>Prêt à faire vibrer les scènes ?</h3>
            <p>Discutons de vos ambitions artistiques autour d'un café</p>
          </div>
          <Link to="/contact" className="footer-cta-button">
            <span>Démarrer un projet</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
        
        {/* Bottom Section */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Social Links Néon */}
          <div className="footer-social">
            <motion.a
              href="https://www.instagram.com/latinyteam/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <Instagram />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/bénédicte-lecoq-426083138/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin />
            </motion.a>
            
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Spotify"
            >
              <Music2 />
            </motion.a>
            
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="YouTube"
            >
              <Youtube />
            </motion.a>
          </div>
          
          {/* Legal */}
          <div className="footer-legal">
            <p className="footer-copyright">
              © {currentYear} Tiny Team. Tous droits réservés.
            </p>
            
            <div className="footer-legal-links">
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/confidentialite">Confidentialité</Link>
              <Link to="/cgv">CGV</Link>
            </div>
            
            <div className="footer-credits">
              Crafted with 
              <Heart size={14} style={{ fill: 'currentColor' }} /> 
              by
              <a 
                href="https://www.instagram.com/alex______kid/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                alexkid
              </a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </footer>
  );
};