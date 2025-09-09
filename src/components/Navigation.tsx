import React, { useState, useEffect } from 'react';
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
  Building
} from 'lucide-react';

const menuItems = [
  { title: 'La Team', href: '/equipe' },
  { title: 'Artistes', href: '/artistes' },
  { 
    title: 'Services', 
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { 
        title: 'Production de Spectacles', 
        href: '/services/production',
        icon: Star,
        description: 'Création et mise en scène'
      },
      { 
        title: 'Management d\'Artistes', 
        href: '/services/management',
        icon: Users,
        description: 'Accompagnement personnalisé'
      },
      { 
        title: 'Développement Digital', 
        href: '/services/digital',
        icon: Rocket,
        description: 'Stratégie en ligne'
      },
      { 
        title: 'Communication & Image', 
        href: '/services/communication',
        icon: Camera,
        description: 'Identité visuelle forte'
      },
      { 
        title: 'Diffusion & Tournées', 
        href: '/services/diffusion',
        icon: Globe,
        description: 'Rayonnement national'
      },
      { 
        title: 'Événements Spéciaux', 
        href: '/services/evenements',
        icon: Calendar,
        description: 'Moments uniques'
      },
    ]
  },
  { 
    title: 'Espace Pro', 
    href: '#',
    hasDropdown: true,
    dropdownItems: [
      { 
        title: 'Programmateurs', 
        href: '/programmateur',
        icon: Building,
        description: 'Solutions sur mesure'
      },
      { 
        title: 'Marques & Entreprises', 
        href: '/marque',
        icon: Sparkles,
        description: 'Partenariats créatifs'
      },
    ]
  },
];

const Logo = () => (
  <Link to="/" className="block">
    <img 
      src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png" 
      alt="Tiny Team"
      className="h-16 sm:h-20 md:h-24 w-auto"
    />
  </Link>
);

// Desktop Dropdown
const DesktopDropdown = ({ items, isOpen, onClose, parentRef }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-30" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 mt-2 w-64 lg:w-80 bg-[#1a1f3a] rounded-xl shadow-2xl border border-white/10 p-2 z-40"
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Icon className="w-5 h-5 text-pink-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">
                  {item.title}
                </div>
                <div className="text-white/50 text-xs">
                  {item.description}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          );
        })}
      </motion.div>
    </>
  );
};

const NavItem = ({ item, isActive }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const itemRef = React.useRef(null);

  if (item.hasDropdown) {
    return (
      <div 
        ref={itemRef}
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button
          className={`flex items-center gap-1 px-4 py-2 rounded-full transition-colors ${
            isActive || isDropdownOpen
              ? 'bg-white/10 text-white'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="text-sm lg:text-base">{item.title}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isDropdownOpen && (
            <DesktopDropdown 
              items={item.dropdownItems} 
              isOpen={isDropdownOpen}
              onClose={() => setIsDropdownOpen(false)}
              parentRef={itemRef}
            />
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      className={`px-4 py-2 rounded-full transition-colors ${
        isActive
          ? 'bg-white/10 text-white'
          : 'text-white/70 hover:text-white hover:bg-white/5'
      }`}
    >
      <span className="text-sm lg:text-base">{item.title}</span>
    </Link>
  );
};

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Détermine si on a scrollé
      setIsScrolled(currentScrollY > 10);
      
      // Logique pour cacher/montrer la navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas - cache la navbar
        setIsVisible(false);
      } else {
        // Scroll vers le haut - montre la navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'py-2 bg-[#0A0F29]/80 backdrop-blur-xl border-b border-white/10' 
            : 'py-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {menuItems.map((item) => (
                <NavItem
                  key={item.href}
                  item={item}
                  isActive={location.pathname === item.href}
                />
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span className="font-semibold text-white">Discutons</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[100] bg-[#0A0F29] pt-20"
          >
            <div className="h-full overflow-y-auto p-6">
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div key={item.href}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setExpandedItem(expandedItem === item.title ? null : item.title)}
                          className="flex items-center justify-between w-full p-3 text-left text-white text-lg font-medium"
                        >
                          {item.title}
                          <ChevronDown 
                            className={`w-5 h-5 transition-transform ${
                              expandedItem === item.title ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {expandedItem === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-2 mt-2">
                                {item.dropdownItems.map((subItem) => {
                                  const Icon = subItem.icon;
                                  return (
                                    <Link
                                      key={subItem.href}
                                      to={subItem.href}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                                    >
                                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-pink-400" />
                                      </div>
                                      <div>
                                        <div className="text-white font-medium">
                                          {subItem.title}
                                        </div>
                                        <div className="text-white/50 text-sm">
                                          {subItem.description}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block p-3 text-lg font-medium ${
                          location.pathname === item.href
                            ? 'text-white'
                            : 'text-white/70'
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Discutons de votre projet</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};