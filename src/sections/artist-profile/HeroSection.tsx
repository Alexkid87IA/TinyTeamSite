import { motion } from 'framer-motion';
import { Instagram, Music, Youtube, ArrowDown, Sparkles, ExternalLink, Play } from 'lucide-react';

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
        {/* Overlay gradient amélioré avec plus de profondeur */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F29] via-[#0A0F29]/85 to-[#0A0F29]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-[#0A0F29]/40 to-transparent" />
        {/* Effet de vignette subtil */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />
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
            {/* Nom de l'artiste avec effet glow */}
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-white drop-shadow-2xl">
                {artist.name}
              </span>
            </motion.h1>

            {/* Tagline avec style amélioré */}
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl font-light italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-pink-400">«</span> {artist.tagline} <span className="text-pink-400">»</span>
            </motion.p>

            {/* Show name avec animation de brillance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <p className="text-white/70 text-sm uppercase tracking-wider">Actuellement en tournée</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {artist.showName}
              </h2>
            </motion.div>

            {/* Description courte */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-white/80 text-lg leading-relaxed max-w-3xl"
            >
              {artist.description}
            </motion.p>

            {/* Social Links & Stats améliorés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-3">
                <SocialIcon platform="instagram" href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`} />
                <SocialIcon platform="tiktok" href={`https://tiktok.com/@${artist.social.tiktok.replace('@', '')}`} />
                <SocialIcon platform="youtube" href={`https://youtube.com/${artist.social.youtube.replace('@', '')}`} />
              </div>

              {artist.stats && (
                <div className="flex items-center gap-6">
                  <div className="glass-card px-4 py-2 rounded-full">
                    <div className="flex items-center gap-2">
                      <div className="text-xl font-bold text-white">{artist.stats.shows}+</div>
                      <div className="text-xs text-white/60">spectacles</div>
                    </div>
                  </div>
                  <div className="glass-card px-4 py-2 rounded-full">
                    <div className="flex items-center gap-2">
                      <div className="text-xl font-bold text-white">{artist.stats.cities}+</div>
                      <div className="text-xs text-white/60">villes</div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* CTA Buttons améliorés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {artist.websiteUrl && (
                <a
                  href={artist.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all group-hover:scale-110" />
                  <span className="relative">Voir les dates</span>
                  <ExternalLink className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              
              {artist.videoUrl && (
                <button
                  onClick={() => {
                    const videoSection = document.querySelector('#video-section');
                    if (videoSection) {
                      videoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white font-semibold transition-all border border-white/20"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Regarder le teaser</span>
                </button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator amélioré */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-white/40 uppercase tracking-wider">Découvrir</span>
        <ArrowDown className="w-6 h-6 text-white/40" />
      </motion.div>

      {/* Style pour l'animation de gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};