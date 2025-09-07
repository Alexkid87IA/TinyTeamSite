import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Users, Star } from 'lucide-react';
import { artists } from '../../data/artists';

const ArtistButton = ({ artist, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group"
  >
    <Link
      to={`/artiste/${artist.id}`}
      className="block relative"
    >
      <div className="relative glass-card rounded-xl p-6 overflow-hidden transition-all duration-300 group-hover:scale-105">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:to-pink-300/10 transition-all duration-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="relative flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="relative flex-shrink-0">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#0A0F29] animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white group-hover:text-glow transition-all duration-300 truncate">
                  {artist.name}
                </h3>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 truncate">
                  {artist.type}
                </p>
              </div>
            </div>
            
            {/* Stats */}
            {artist.stats && (
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1 text-xs text-white/50">
                  <Users className="w-3 h-3" />
                  <span>{artist.stats.followers?.toLocaleString()}+</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-white/50">
                  <Star className="w-3 h-3" />
                  <span>{artist.stats.shows} spectacles</span>
                </div>
              </div>
            )}
          </div>

          {/* Icon & Arrow */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400/20 to-pink-500/20 border border-pink-400/30 group-hover:from-pink-400/30 group-hover:to-pink-500/30 group-hover:border-pink-400/50 transition-all duration-300">
              <span className="text-sm font-medium text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
                En savoir plus
              </span>
            </div>
          </div>
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        />
      </div>
    </Link>
  </motion.div>
);

export const ProducerArtistsSection = () => {
  return (
    <section id="artists" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl" />
            <h2 className="relative text-4xl md:text-5xl font-bold tracking-tight">
              <span className="block text-gradient from-white via-blue-100 to-white">
                Tous nos talents
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
                disponibles
              </span>
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Découvrez notre roster complet d'artistes prêts à enrichir votre programmation.
            Cliquez sur un artiste pour voir son profil détaillé et ses disponibilités.
          </p>
        </motion.div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {artists.map((artist, index) => (
            <ArtistButton key={artist.id} artist={artist} index={index} />
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
            <div className="relative glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Besoin d'aide pour choisir ?
              </h3>
              <p className="text-white/70 mb-6">
                Notre équipe vous accompagne dans le choix de l'artiste parfait 
                pour votre événement et votre public.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="#contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)",
                        "linear-gradient(225deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)",
                        "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-transparent to-blue-500/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative font-bold text-white text-lg">Programmer un artiste</span>
                  <motion.div
                    className="relative"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.div>
                </Link>
                
                <Link
                  to="/artistes"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
                >
                  <span className="font-semibold text-white group-hover:text-glow transition-all duration-300">Voir la page artistes complète</span>
                  <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};