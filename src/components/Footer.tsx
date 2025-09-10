import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Nos artistes', href: '/artistes' },
      { label: 'Nos services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Production', href: '/services#production' },
      { label: 'Diffusion & Tournées', href: '/services#diffusion' },
      { label: 'Digital', href: '/services#digital' },
      { label: 'Communication', href: '/services#communication' },
      { label: 'Management', href: '/services#management' },
      { label: 'Événements', href: '/services#evenements' },
    ],
  },
  {
    title: 'Espace Pro',
    links: [
      { label: 'Artistes', href: '/artiste' },
      { label: 'Programmateurs', href: '/programmateur' },
      { label: 'Marques', href: '/marque' },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0F29] overflow-hidden">
      {/* Ligne animée du haut */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Background effets */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-pink-500/5" />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Colonne Logo et Description */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <Link to="/" className="inline-block mb-8 group">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="https://res.cloudinary.com/diqco2njt/image/upload/v1746189362/Logo_TT_blanc_th9klb.png"
                  alt="Tiny Team"
                  className="relative h-24 md:h-28 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Tagline */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Révélons ensemble
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                votre potentiel créatif
              </span>
            </h2>
            
            <p className="text-white/60 leading-relaxed mb-8 max-w-md">
              Nous accompagnons les artistes du spectacle vivant avec passion et expertise. 
              Une équipe dédiée pour transformer vos rêves en succès.
            </p>

            {/* Email de contact */}
            <a
              href="mailto:contact@tinyteam.fr"
              className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm">contact@tinyteam.fr</span>
            </a>
          </motion.div>

          {/* Espacement */}
          <div className="lg:col-span-2" />

          {/* Colonnes de liens */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
            >
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group relative inline-flex items-center gap-1 text-white/60 hover:text-white transition-all duration-300 text-sm"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Section Réseaux Sociaux et Crédits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-white/10"
        >
          {/* Réseaux sociaux */}
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm">Suivez-nous</span>
            <div className="flex gap-3">
              {/* Instagram Tiny Team */}
              <motion.a
                href="https://www.instagram.com/latinyteam/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10 group-hover:border-white/20 flex items-center justify-center transition-all duration-300">
                  <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors duration-300">
                    IG
                  </span>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/b%C3%A9n%C3%A9dicte-lecoq-426083138/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10 group-hover:border-white/20 flex items-center justify-center transition-all duration-300">
                  <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors duration-300">
                    IN
                  </span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Made with love by alexkid */}
          <a 
            href="https://www.instagram.com/alex______kid/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
              Made with ❤️ by 
              <span className="text-pink-400 ml-1 font-semibold">alexkid</span>
            </span>
          </a>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs text-center md:text-left">
              © {currentYear} Tiny Team. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-6">
              <Link 
                to="/mentions-legales" 
                className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300"
              >
                Mentions légales
              </Link>
              <Link 
                to="/confidentialite" 
                className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300"
              >
                Confidentialité
              </Link>
              <Link 
                to="/cookies" 
                className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Ligne animée du bas */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      </div>
    </footer>
  );
};