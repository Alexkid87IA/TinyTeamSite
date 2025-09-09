import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export const BookingSection = ({ artist }) => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#080C20] to-[#0A0F29]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Programmer {artist.name}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Pour vos événements, festivals ou soirées privées, notre équipe vous accompagne dans la mise en place du spectacle
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 rounded-full text-white font-semibold transition-all group"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="mailto:booking@tinyteam.fr"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white font-semibold transition-all border border-white/20"
              >
                <Mail className="w-5 h-5" />
                <span>booking@tinyteam.fr</span>
              </a>
            </div>
            
            <p className="text-sm text-white/50">
              Réponse sous 48h
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};