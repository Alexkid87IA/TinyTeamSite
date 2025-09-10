import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Sparkles,
  Star,
  Rocket,
  Camera,
  Globe,
  Calendar,
  Users,
  Building,
  Zap
} from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  // Configuration du menu
  const menuItems = [
    { 
      title: 'La Team', 
      href: '/equipe',
      glow: 'from-blue-400 to-cyan-400'
    },
    { 
      title: 'Artistes', 
      href: '/artistes',
      glow: 'from-purple-400 to-pink-400'
    },
    { 
      title: 'Services', 
      href: '/services',
      glow: 'from-pink-400 to-rose-400',
      hasDropdown: true,
      dropdownItems: [
        { 
          title: 'Production de Spectacles', 
          href: '/services/production',
          icon: Star,
          description: 'Création et mise en scène',
          color: 'from-yellow-400 to-orange-400'
        },
        { 
          title: 'Management d\'Artistes', 
          href: '/services/management',
          icon: Users,
          description: 'Accompagnement personnalisé',
          color: 'from-blue-400 to-indigo-400'
        },
        { 
          title: 'Développement Digital', 
          href: '/services/digital',
          icon: Rocket,
          description: 'Stratégie en ligne',
          color: 'from-purple-400 to-pink-400'
        },
        { 
          title: 'Communication & Image', 
          href: '/services/communication',
          icon: Camera,
          description: 'Identité visuelle forte',
          color: 'from-pink-400 to-rose-400'
        },
        { 
          title: 'Diffusion & Tournées', 
          href: '/services/diffusion',
          icon: Globe,
          description: 'Rayonnement national',
          color: 'from-green-400 to-teal-400'
        },
        { 
          title: 'Événements Spéciaux', 
          href: '/services/evenements',
          icon: Calendar,
          description: 'Moments uniques',
          color: 'from-orange-400 to-red-400'
        },
      ]
    },
    { 
      title: 'Espace Pro', 
      href: '#',
      glow: 'from-amber-400 to-yellow-400',
      hasDropdown: true,
      dropdownItems: [
        { 
          title: 'Programmateurs', 
          href: '/programmateur',
          icon: Building,
          description: 'Solutions sur mesure',
          color: 'from-slate-400 to-gray-400'
        },
        { 
          title: 'Marques & Entreprises', 
          href: '/marque',
          icon: Sparkles,
          description: 'Partenariats créatifs',
          color: 'from-violet-400 to-purple-400'
        },
      ]
    },
  ];

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Gestion du dropdown avec délai
  const handleMouseEnter = (itemTitle) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(itemTitle);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Logo Component avec taille augmentée
  const Logo = () => (
    <Link to="/" className="group relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
        <img 
          src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png" 
          alt="Tiny Team"
          className="h-20 sm:h-24 md:h-28 w-auto relative z-10"
        />
      </motion.div>
    </Link>
  );

  // Desktop Dropdown Component
  const DesktopDropdown = ({ items }) => (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] p-3"
      onMouseEnter={() => handleMouseEnter(activeDropdown)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Effet de lueur en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />
        
        <div className="relative grid grid-cols-2 gap-2 p-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.href}
                  className="group relative flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                  onClick={() => setActiveDropdown(null)}
                >
                  {/* Icône avec gradient */}
                  <div className={`relative mt-1`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
                    <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} p-0.5`}>
                      <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Texte */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text transition-all">
                        {item.title}
                      </span>
                      <ArrowRight className="w-3 h-3 text-white/0 group-hover:text-white/50 transition-all transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-white/40 text-xs mt-0.5 group-hover:text-white/60 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );

  // Desktop Navigation Item
  const NavItem = ({ item }) => {
    const isActive = location.pathname === item.href || activeDropdown === item.title;
    const isServicesPage = item.href === '/services';
    
    const handleClick = (e) => {
      if (item.hasDropdown && !isServicesPage) {
        e.preventDefault();
      }
    };

    const ItemContent = (
      <>
        <span className="relative z-10">{item.title}</span>
        {item.hasDropdown && (
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
        )}
      </>
    );

    const itemClasses = `
      relative flex items-center gap-1.5 px-5 py-2.5 rounded-full
      text-white/80 hover:text-white transition-all duration-300
      before:absolute before:inset-0 before:rounded-full
      before:bg-gradient-to-r ${item.glow || 'from-white/10 to-white/10'}
      before:opacity-0 hover:before:opacity-10 before:transition-opacity
      ${isActive ? 'text-white before:opacity-10' : ''}
    `;

    return (
      <div 
        className="relative"
        onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.title)}
        onMouseLeave={handleMouseLeave}
      >
        {item.hasDropdown && isServicesPage ? (
          <Link to={item.href} className={itemClasses} onClick={handleClick}>
            {ItemContent}
          </Link>
        ) : item.hasDropdown ? (
          <button className={itemClasses} onClick={handleClick}>
            {ItemContent}
          </button>
        ) : (
          <Link to={item.href} className={itemClasses}>
            {ItemContent}
          </Link>
        )}
        
        <AnimatePresence>
          {item.hasDropdown && activeDropdown === item.title && (
            <DesktopDropdown items={item.dropdownItems} />
          )}
        </AnimatePresence>
      </div>
    );
  };

  // Mobile Menu
  const MobileMenu = () => (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-[#0A0F29] to-gray-900"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <Logo />
        <button
          onClick={() => setIsMenuOpen(false)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Menu Items */}
      <div className="p-6 space-y-2 overflow-y-auto max-h-[calc(100vh-100px)]">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.hasDropdown ? (
              <>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                  className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium">{item.title}</span>
                  <ChevronDown className={`w-5 h-5 text-white/60 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                </button>
                
                {item.href === '/services' && (
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    → Voir tous les services
                  </Link>
                )}
                
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-2 space-y-2">
                        {item.dropdownItems.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                            >
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${subItem.color} p-0.5`}>
                                <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                              </div>
                              <div>
                                <div className="text-white text-sm font-medium">{subItem.title}</div>
                                <div className="text-white/40 text-xs">{subItem.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium">{item.title}</span>
              </Link>
            )}
          </div>
        ))}

        {/* CTA Mobile */}
        <div className="pt-6">
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-semibold">Discutons de votre projet</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-gray-900/80 backdrop-blur-2xl shadow-2xl border-b border-white/10' 
            : 'py-4 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {menuItems.map((item) => (
                <NavItem key={item.title} item={item} />
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="relative group flex items-center gap-2 px-6 py-3 rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all" />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <MessageSquare className="w-4 h-4 text-white relative z-10" />
                  <span className="font-semibold text-white relative z-10">Discutons</span>
                  <Zap className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 group-hover:right-2 transition-all duration-500" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && <MobileMenu />}
      </AnimatePresence>
    </>
  );
};