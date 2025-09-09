import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

export const VideoSection = ({ artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A0F29] to-[#080C20]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Extrait vidéo
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {artist.showName}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl">
            {/* Play button overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                <motion.button
                  onClick={() => setIsPlaying(true)}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/50 hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                  </div>
                </motion.button>
              </div>
            )}
            
            {/* YouTube iframe */}
            <iframe
              src={`${artist.videoUrl}${isPlaying ? '?autoplay=1' : ''}`}
              title={`Extrait du spectacle ${artist.showName}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};