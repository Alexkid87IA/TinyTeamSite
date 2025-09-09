import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const ShowSection = ({ artist }) => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={artist.posterImage}
                  alt={`Affiche du spectacle ${artist.showName}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Titre du spectacle */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {artist.showName}
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-white/90 leading-relaxed">
                {artist.showDescription}
              </p>
              <p className="text-white/70 leading-relaxed">
                {artist.longDescription}
              </p>
            </div>

            {/* CTA vers le site officiel */}
            {artist.websiteUrl && (
              <div className="pt-8">
                <a
                  href={artist.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 rounded-full text-white font-semibold transition-all group"
                >
                  <span>Dates et billetterie</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-white/50 mt-4">
                  Retrouvez toutes les dates sur le site officiel
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};