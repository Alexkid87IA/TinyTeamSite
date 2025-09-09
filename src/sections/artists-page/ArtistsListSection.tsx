import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Import des données depuis le fichier existant
import { artists } from '../../data/artists';

interface ArtistsListSectionProps {
  selectedCategory: string;
  searchTerm?: string;
}

export const ArtistsListSection: React.FC<ArtistsListSectionProps> = ({
  selectedCategory,
  searchTerm = ''
}) => {
  // Filtrage des artistes
  const filteredArtists = artists.filter(artist => {
    const matchesCategory = selectedCategory === 'Tous' || 
                           artist.type === selectedCategory;
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.showName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center md:text-left"
        >
          {selectedCategory === 'Tous' ? 'Tous nos artistes' : selectedCategory}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut"
              }}
              className="group relative"
            >
              <Link to={`/artiste/${artist.id}`} className="block">
                {/* Container avec aspect ratio 4/5 pour les affiches */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Image de l'affiche */}
                  <img 
                    src={artist.posterImage || artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay gradient au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Informations au hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {artist.name}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-1">
                      {artist.showName}
                    </p>
                    
                    {/* Bouton Profil */}
                    <div className="flex items-center gap-1 mt-3 text-white/90 text-sm">
                      <span>Voir le profil</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Informations sous l'image */}
              <div className="mt-3 px-1">
                <Link to={`/artiste/${artist.id}`}>
                  <h3 className="text-white font-semibold text-base md:text-lg hover:text-pink-400 transition-colors line-clamp-1">
                    {artist.name}
                  </h3>
                </Link>
                <p className="text-white/60 text-sm mt-1 line-clamp-1">
                  {artist.type}
                </p>
                
                {/* Bouton Billetterie si disponible */}
                {artist.dates && artist.dates.length > 0 && artist.dates[0].link && (
                  <a
                    href={artist.dates[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 px-3 py-1.5 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg text-pink-400 text-xs transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Billetterie
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message si aucun artiste trouvé */}
        {filteredArtists.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/50 text-lg mb-4">
              Aucun artiste trouvé pour cette recherche
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};