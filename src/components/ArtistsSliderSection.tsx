import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { artists } from '../data/artists';

// Diviser les artistes en 2 rangées
const topRow = [...artists.slice(0, 6), ...artists.slice(0, 6)]; // Dupliquer pour boucle infinie
const bottomRow = [...artists.slice(6), ...artists.slice(6)]; // Dupliquer pour boucle infinie

const ArtistCard = ({ artist, direction = 'left' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/artiste/${artist.id}`} className="block">
        <div className="relative w-[280px] md:w-[320px] h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
          {/* Affiche */}
          <img
            src={artist.posterImage || artist.image}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay au hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          />
          
          {/* Contenu au hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col justify-end p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-3">{artist.name}</h3>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold self-start hover:scale-105 transition-transform duration-200">
              <span>Découvrir</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Bordure élégante */}
          <div className={`absolute inset-0 rounded-2xl ring-1 transition-all duration-300 ${
            isHovered ? 'ring-white/30' : 'ring-white/10'
          }`} />
          
          {/* Effet de brillance au hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: isHovered ? '100%' : '-100%'
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

const RiverRow = ({ artists, direction = 'left', speed = 30 }) => {
  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }
        }}
        style={{ width: 'fit-content' }}
      >
        {artists.map((artist, index) => (
          <ArtistCard 
            key={`${artist.id}-${index}`} 
            artist={artist} 
            direction={direction}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ArtistsSliderSection = () => {
  return (
    <section id="artists" className="relative min-h-screen py-20 md:py-32 bg-[#0A0F29] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        
        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [null, `${Math.random() * 100}%`],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Header */}
        <div className="container mx-auto px-4 text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative px-2 md:px-0"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative"
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                  Nos artistes
                </span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 md:mt-10 space-y-3"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span>11 artistes, 11 univers, une seule passion : vous émerveiller</span>
              <Sparkles className="w-5 h-5 text-pink-400" />
            </p>
            <p className="text-sm md:text-base text-white/60">
              Survolez les affiches pour découvrir chaque artiste
            </p>
          </motion.div>
        </div>

        {/* River Flow - Desktop */}
        <div className="hidden md:block">
          {/* Gradient masks pour les bords */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0F29] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0F29] to-transparent z-10 pointer-events-none" />
            
            {/* Première rangée - va vers la droite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <RiverRow artists={topRow} direction="right" speed={40} />
            </motion.div>
            
            {/* Deuxième rangée - va vers la gauche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <RiverRow artists={bottomRow} direction="left" speed={35} />
            </motion.div>
          </div>
        </div>

        {/* Version Mobile - Carrousel simple */}
        <div className="md:hidden">
          <div className="relative">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0A0F29] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0A0F29] to-transparent z-10 pointer-events-none" />
            
            {/* Une seule rangée sur mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <RiverRow artists={[...artists, ...artists]} direction="left" speed={50} />
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container mx-auto px-4 text-center mt-16 md:mt-20"
        >
          <Link
            to="/artistes"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 transition-all duration-300 shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105"
          >
            <span className="font-bold text-black text-lg">Explorer tous nos artistes</span>
            <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Instructions d'interaction - Desktop uniquement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden md:block text-center mt-8"
        >
          <p className="text-white/40 text-sm flex items-center justify-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👆
            </motion.span>
            <span>Survolez une affiche pour en savoir plus</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};