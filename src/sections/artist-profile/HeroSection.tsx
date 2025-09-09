import { motion } from 'framer-motion';
import { Instagram, Music, Youtube, ArrowDown, Star } from 'lucide-react';

const SocialIcon = ({ platform, href }) => {
  const icons = {
    instagram: Instagram,
    tiktok: Music,
    youtube: Youtube
  };
  const Icon = icons[platform] || Music;
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20">
        <Icon className="w-5 h-5 text-white" />
      </div>
    </motion.a>
  );
};

export const HeroSection = ({ artist }) => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background avec image en parallax */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={artist.posterImage || artist.image}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Overlay gradient plus prononcé */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F29] via-[#0A0F29]/80 to-[#0A0F29]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Type d'artiste */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 font-medium">{artist.type}</span>
            </motion.div>

            {/* Nom de l'artiste */}
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block text-white">
                {artist.name}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-2xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {artist.tagline}
            </motion.p>

            {/* Show name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-4"
            >
              <p className="text-white/60 mb-2">Actuellement en tournée avec</p>
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {artist.showName}
              </h2>
            </motion.div>

            {/* Social Links & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-3">
                <SocialIcon platform="instagram" href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`} />
                <SocialIcon platform="tiktok" href={`https://tiktok.com/${artist.social.tiktok.replace('@', '')}`} />
                <SocialIcon platform="youtube" href={`https://youtube.com/${artist.social.youtube.replace('@', '')}`} />
              </div>

              {artist.stats && (
                <div className="flex items-center gap-6 text-white/60">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{artist.stats.shows}+</div>
                    <div className="text-xs">spectacles</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{artist.stats.cities}+</div>
                    <div className="text-xs">villes</div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-white/40" />
      </motion.div>
    </section>
  );
};