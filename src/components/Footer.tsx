import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Linkedin, Music2, Youtube, Heart } from 'lucide-react';
import './Footer.css';

// Configuration des liens
const footerNavigation = [
  {
    title: 'Services',
    links: [
      { label: 'Production', href: '/services#production' },
      { label: 'Management', href: '/services#management' },
      { label: 'Digital', href: '/services#digital' },
      { label: 'Communication', href: '/services#communication' },
      { label: 'Diffusion & Tournées', href: '/services#diffusion' },
      { label: 'Événements Spéciaux', href: '/services#evenements' },
    ],
  },
  {
    title: 'Navigation',
    links: [
      { label: 'Nos artistes', href: '/artistes' },
      { label: 'Nos services', href: '/services' },
      { label: 'À propos', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Espace Pro',
    links: [
      { label: 'Artistes', href: '/artiste' },
      { label: 'Programmateurs', href: '/programmateur' },
      { label: 'Marques', href: '/marque' },
      { label: 'Partenaires', href: '/partenaires' },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-ultra">
      {/* Ligne néon supérieure */}
      <div className="footer-neon-line" />
      
      {/* Effets de fond */}
      <div className="footer-bg-effects">
        <div className="footer-glow footer-glow-1" />
        <div className="footer-glow footer-glow-2" />
      </div>
      
      {/* Container principal */}
      <div className="footer-container">
        
        {/* Hero Section */}
        <motion.div 
          className="footer-hero"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="footer-logo-section">
            <Link to="/" className="footer-logo-link">
              <img 
                src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png"
                alt="Tiny Team"
                className="footer-logo-img"
              />
            </Link>
          </div>
          
          {/* Tagline */}
          <div className="footer-tagline">
            <h2 className="tagline-line-1">Révélons ensemble</h2>
            <h3 className="tagline-line-2">Votre potentiel créatif</h3>
          </div>
          
          <p className="footer-subtitle">
            Nous accompagnons les artistes du spectacle vivant avec passion et 
            expertise. Une équipe dédiée pour transformer vos rêves en succès.
          </p>
        </motion.div>
        
        {/* Navigation Grid */}
        <motion.div 
          className="footer-nav-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="footer-nav-grid">
            {footerNavigation.map((section, index) => (
              <div key={section.title} className="footer-nav-column">
                <h4 className="nav-column-title">{section.title}</h4>
                <ul className="footer-nav-list">
                  {section.links.map((link) => (
                    <li key={link.label} className="footer-nav-item">
                      <Link to={link.href} className="footer-nav-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="footer-cta-section"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="footer-cta-card">
            <h3 className="cta-title">Prêt à révéler votre talent ?</h3>
            <p className="cta-subtitle">
              Contactez-nous pour discuter de votre projet artistique
            </p>
            <Link to="/contact" className="footer-cta-button">
              <span>Parlons de votre projet</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          className="footer-social-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="social-links-row">
            <motion.a
              href="https://www.instagram.com/latinyteam/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              data-network="instagram"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/bénédicte-lecoq-426083138/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              data-network="linkedin"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin />
            </motion.a>
            
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              data-network="tiktok"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Music2 />
            </motion.a>
            
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              data-network="youtube"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Youtube />
            </motion.a>
          </div>
        </motion.div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Tiny Team. Tous droits réservés.
            </p>
            
            <div className="footer-legal">
              <Link to="/mentions-legales" className="footer-legal-link">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="footer-legal-link">
                Confidentialité
              </Link>
              <Link to="/cookies" className="footer-legal-link">
                Cookies
              </Link>
            </div>
            
            <a 
              href="https://www.instagram.com/alex______kid/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit"
            >
              <span>Made with</span>
              <Heart size={14} />
              <span>by</span>
              <span className="footer-credit-name">alexkid</span>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};