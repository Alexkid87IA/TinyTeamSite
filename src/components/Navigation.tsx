import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import './Navigation.css';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const menuItems = [
    { title: 'LA TEAM', href: '/equipe' },
    { title: 'ARTISTES', href: '/artistes' },
    { 
      title: 'SERVICES', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Production de Spectacles', href: '/services/production', color: '#ff00ff' },
        { title: 'Management d\'Artistes', href: '/services/management', color: '#00ffff' },
        { title: 'Développement Digital', href: '/services/digital', color: '#ffff00' },
        { title: 'Communication & Image', href: '/services/communication', color: '#ff00aa' },
        { title: 'Diffusion & Tournées', href: '/services/diffusion', color: '#00ff88' },
        { title: 'Événements Spéciaux', href: '/services/evenements', color: '#ff8800' },
      ]
    },
    { 
      title: 'PRO', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Programmateurs', href: '/programmateur', color: '#ff00ff' },
        { title: 'Marques & Entreprises', href: '/marque', color: '#00ffff' },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      const newTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      
      setScrollTimeout(newTimeout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 30,
          duration: 0.3
        }}
        className={`nav-container ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="nav-wrapper">
          <div className="nav-content">
            {/* Logo SPECTACULAIRE */}
            <Link to="/" className="logo-container">
              <div className="logo-wrapper">
                <img 
                  src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png" 
                  alt="Tiny Team"
                  className="logo-img"
                />
                {/* Effet de particules autour du logo */}
                <div className="logo-particles">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="particle" style={{
                      '--delay': `${i * 0.5}s`,
                      '--angle': `${i * 60}deg`
                    } as React.CSSProperties} />
                  ))}
                </div>
                {/* Halo pulsant */}
                <div className="logo-halo" />
              </div>
            </Link>

            {/* Desktop Menu ÉLECTRIQUE */}
            <div className="nav-menu">
              {menuItems.map((item) => (
                <div 
                  key={item.title}
                  className="nav-item"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button className="nav-link glitch" data-text={item.title}>
                      <span className="nav-text">{item.title}</span>
                      <ChevronDown className="nav-chevron" />
                    </button>
                  ) : (
                    <Link 
                      to={item.href}
                      className={`nav-link glitch ${location.pathname === item.href ? 'active' : ''}`}
                      data-text={item.title}
                    >
                      <span className="nav-text">{item.title}</span>
                    </Link>
                  )}
                  
                  {/* Dropdown NÉON */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        transition={{ duration: 0.3, type: 'spring' }}
                        className="dropdown-neon"
                      >
                        <div className="dropdown-grid">
                          {item.dropdownItems?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="dropdown-item"
                              style={{ '--item-color': subItem.color } as React.CSSProperties}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="dropdown-text">{subItem.title}</span>
                              <div className="dropdown-glow" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA EXPLOSIF */}
            <Link to="/contact" className="cta-explosive">
              <span className="cta-text">DISCUTONS</span>
              <div className="cta-lightning">
                <Sparkles className="cta-icon" />
              </div>
              <div className="cta-energy" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              <div className={`burger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu PSYCHÉDÉLIQUE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu"
          >
            <div className="mobile-bg-effects">
              <div className="mobile-gradient-1" />
              <div className="mobile-gradient-2" />
            </div>

            <div className="mobile-content">
              <nav className="mobile-nav">
                {menuItems.map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                          className="mobile-link"
                        >
                          <span className="mobile-link-text">{item.title}</span>
                          <ChevronDown className={`mobile-chevron ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mobile-dropdown"
                            >
                              {item.dropdownItems?.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  to={subItem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="mobile-sub-link"
                                  style={{ '--sub-color': subItem.color } as React.CSSProperties}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="mobile-link"
                      >
                        <span className="mobile-link-text">{item.title}</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-cta"
              >
                GO GO GO!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};