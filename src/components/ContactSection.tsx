import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="relative py-32 bg-[#0A0F29] overflow-hidden">
      {/* Background simple */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-pink-500/10" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Prêt à </span>
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                faire vibrer
              </span>
              <span className="text-white"> les scènes ?</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Que vous soyez artiste, programmateur ou marque, 
              nous sommes là pour donner vie à vos projets les plus ambitieux.
            </p>
          </motion.div>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Bouton principal */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:scale-110" />
              <span className="relative text-white font-semibold text-lg">
                Discutons de votre projet
              </span>
              <ArrowRight className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Bouton secondaire */}
            <Link
              to="/artistes"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all"
            >
              <Sparkles className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              <span className="text-white/70 group-hover:text-white font-medium transition-colors">
                Découvrir nos artistes
              </span>
            </Link>
          </motion.div>

          {/* Info de contact rapide */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/50 text-sm">
              Ou contactez-nous directement : 
              <a 
                href="mailto:contact@tinyteam.fr" 
                className="text-pink-400 hover:text-pink-300 ml-2 transition-colors"
              >
                contact@tinyteam.fr
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};