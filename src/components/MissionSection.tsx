import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Rocket, Layout, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const missions = [
  {
    id: "production",
    title: "Production",
    subtitle: "De l'idée à la scène",
    description: "Une approche globale de la production artistique. Nous gérons tous les aspects techniques et créatifs pour que vous puissiez vous concentrer sur votre art.",
    icon: Star,
    features: [
      "Direction artistique",
      "Production exécutive",
      "Mise en scène professionnelle",
      "Gestion technique"
    ],
    color: 'from-yellow-400 to-orange-400'
  },
  {
    id: "management",
    title: "Management",
    subtitle: "Votre carrière entre de bonnes mains",
    description: "Un accompagnement complet et personnalisé pour développer votre carrière et maximiser votre potentiel artistique.",
    icon: Shield,
    features: [
      "Développement de carrière",
      "Stratégie artistique",
      "Gestion administrative",
      "Relations professionnelles"
    ],
    color: 'from-blue-400 to-indigo-400'
  },
  {
    id: "digital",
    title: "Digital",
    subtitle: "Votre présence en ligne",
    description: "Maîtrisez les enjeux du numérique et développez votre présence en ligne. Une stratégie digitale complète pour maximiser votre impact.",
    icon: Rocket,
    features: [
      "Stratégie réseaux sociaux",
      "Création de contenus",
      "Community management",
      "Marketing digital"
    ],
    color: 'from-purple-400 to-pink-400'
  },
  {
    id: "communication",
    title: "Communication",
    subtitle: "Votre image, notre expertise",
    description: "Développez une image forte et cohérente qui vous distingue dans l'univers du spectacle vivant.",
    icon: Layout,
    features: [
      "Relations presse",
      "Identité visuelle",
      "Communication événementielle",
      "Relations publiques"
    ],
    color: 'from-pink-400 to-rose-400'
  },
  {
    id: "diffusion",
    title: "Diffusion & Tournées",
    subtitle: "Rayonnez sur toutes les scènes",
    description: "Portez votre spectacle aux quatre coins de la France avec une organisation millimétrée et un réseau de salles partenaires.",
    icon: Globe,
    features: [
      "Booking national",
      "Gestion de tournées",
      "Relations salles",
      "Support technique"
    ],
    color: 'from-green-400 to-teal-400'
  },
  {
    id: "evenements",
    title: "Événements Spéciaux",
    subtitle: "Des moments uniques",
    description: "Créez des moments inoubliables pour des occasions exceptionnelles avec notre expertise événementielle.",
    icon: Calendar,
    features: [
      "Conception événementielle",
      "Production sur mesure",
      "Coordination complète",
      "Gestion technique"
    ],
    color: 'from-orange-400 to-red-400'
  }
];

const MissionCard = ({ mission, index, isActive, onSelect }) => {
  const Icon = mission.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`min-h-[calc(100vh-6rem)] md:min-h-screen flex items-center justify-center py-12 md:py-20 transition-all duration-700 cursor-pointer ${
        isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
      }`}
      onClick={() => onSelect(index)}
    >
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="relative">
          <div className="relative">
            {/* Title Section with Icon */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${mission.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
                <div className={`relative w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br ${mission.color} p-0.5`}>
                  <div className="w-full h-full rounded-2xl md:rounded-3xl bg-gray-900 flex items-center justify-center">
                    <Icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight">
                  <span className="block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                    {mission.title}
                  </span>
                </h2>
                <span className="text-xl md:text-2xl lg:text-3xl block mt-2 md:mt-4 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                  {mission.subtitle}
                </span>
              </div>
            </div>

            <div className="mb-8 md:mb-12">
              <p className="text-base md:text-xl text-white/70 leading-relaxed">
                {mission.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              {mission.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative glass-card rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400/40" />
                      <span className="text-sm md:text-lg text-white/80 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - URL CORRIGÉE ICI */}
            <Link
              to={`/services/${mission.id}`}  // Changé de /mission/ à /services/
              className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-black font-semibold hover:from-pink-300 hover:to-pink-400 transition-all duration-300 group"
            >
              <span className="text-sm md:text-base">En savoir plus</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const MissionSection = () => {
  const [activeMission, setActiveMission] = React.useState(0);

  return (
    <section className="relative bg-[#0A0F29] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0
              }}
              animate={{
                y: [null, `${Math.random() * 30 - 15}%`],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative pt-20 md:pt-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative px-2 md:px-0"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
              <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Une team au service
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                de votre carrière
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Indicateurs de navigation */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {missions.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveMission(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeMission 
                  ? 'w-8 bg-gradient-to-r from-pink-400 to-purple-400' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            mission={mission}
            index={index}
            isActive={index === activeMission}
            onSelect={setActiveMission}
          />
        ))}
      </div>

      {/* CTA Section en bas */}
      <div className="relative text-center pb-20 md:pb-32">
        <Link
          to="/services"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 group"
        >
          <span>Découvrir tous nos services</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};