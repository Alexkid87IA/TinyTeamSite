import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Users, ArrowRight } from 'lucide-react';

export const ArtistsCTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Pour les programmateurs */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Vous êtes programmateur ?
              </h3>
              
              <p className="text-white/70 mb-6">
                Découvrez nos artistes pour vos événements. 
                Nous vous accompagnons dans la sélection et la mise en place de spectacles adaptés à votre public.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white font-semibold transition-all group"
              >
                Contactez-nous
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Pour booker un artiste */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Envie de booker un artiste ?
              </h3>
              
              <p className="text-white/70 mb-6">
                Pour organiser un spectacle privé, un événement d'entreprise ou tout autre projet, 
                notre équipe est à votre écoute pour créer un moment unique.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 rounded-full text-white font-semibold transition-all group"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};