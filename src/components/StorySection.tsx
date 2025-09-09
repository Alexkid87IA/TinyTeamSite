import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Heart, Mic, Film, Lightbulb, PenTool, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Bénédicte",
    lastName: "Lecoq",
    role: "Fondatrice & Directrice Artistique",
    image: "https://26.staticbtf.eno.do/v1/51-default/f5464f128894d97aa54f8b509c878258/media.jpg",
    gradient: "from-pink-500/20 to-purple-500/20",
    zIndex: 50
  },
  {
    name: "Isabelle",
    lastName: "Sabatier", 
    role: "Responsable Diffusion & Tournées",
    image: "https://26.staticbtf.eno.do/v1/50-default/72327cba31187ae50845f74005e56b82/media.jpg",
    gradient: "from-purple-500/20 to-blue-500/20",
    zIndex: 40
  },
  {
    name: "Elodie",
    lastName: "Biffi",
    role: "Responsable Administrative",
    image: "https://i.imgur.com/VIvzDfN.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
    zIndex: 30
  },
  {
    name: "Jérémy",
    lastName: "Dravigny",
    role: "Responsable Communication & Production",
    image: "https://i.imgur.com/VwHcPJF.png",
    gradient: "from-cyan-500/20 to-teal-500/20",
    zIndex: 20
  },
  {
    name: "Margaux",
    lastName: "Morel",
    role: "Chargée de Production & Événementiel",
    image: "https://i.imgur.com/IKLr6Zq.png",
    gradient: "from-teal-500/20 to-green-500/20",
    zIndex: 10
  }
];

const expertises = [
  {
    icon: Mic,
    title: "Production de Spectacles",
    description: "De la conception à la réalisation, nous donnons vie à vos projets artistiques avec excellence et créativité.",
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Shield,
    title: "Management d'Artistes",
    description: "Un accompagnement complet et personnalisé pour développer votre carrière et maximiser votre potentiel.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Rocket,
    title: "Développement Digital",
    description: "Construisez votre présence en ligne et engagez votre communauté avec des stratégies innovantes.",
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  {
    icon: PenTool,
    title: "Communication & Image",
    description: "Développez une image forte et cohérente qui vous distingue dans l'univers du spectacle.",
    gradient: "from-teal-500/20 to-green-500/20"
  },
  {
    icon: Film,
    title: "Diffusion & Tournées",
    description: "Portez votre spectacle aux quatre coins de la France avec une organisation millimétrée.",
    gradient: "from-green-500/20 to-yellow-500/20"
  },
  {
    icon: Lightbulb,
    title: "Événements Spéciaux",
    description: "Créez des moments uniques et mémorables pour des occasions exceptionnelles.",
    gradient: "from-yellow-500/20 to-purple-500/20"
  }
];

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateY: -15 }}
    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.15,
      type: "spring",
      stiffness: 80
    }}
    whileHover={{ 
      y: -12,
      scale: 1.02,
      zIndex: 100,
      transition: { duration: 0.4, type: "spring", stiffness: 200 }
    }}
    className="group relative"
    style={{ zIndex: member.zIndex }}
  >
    <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative w-80 h-[500px] rounded-3xl overflow-hidden glass-card group-hover:ring-2 group-hover:ring-white/30 transition-all duration-500">
      <div className="absolute inset-0">
        <img
          src={member.image}
          alt={`${member.name} ${member.lastName}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} mix-blend-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
              {member.name}
            </h3>
            <h4 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
              {member.lastName}
            </h4>
          </div>
          
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300">
            <span className="text-sm text-white/90 group-hover:text-white transition-colors duration-300 font-medium">
              {member.role}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  </motion.div>
);

const ExpertiseCard = ({ expertise, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative h-full glass-card rounded-2xl p-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative">
        <div className="mb-6">
          <div className="relative w-16 h-16 rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <expertise.icon className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-glow transition-all duration-300">
          {expertise.title}
        </h3>
        <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
          {expertise.description}
        </p>
      </div>
    </div>
  </motion.div>
);

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: `radial-gradient(circle, ${
            ['rgba(236,72,153,0.1)', 'rgba(168,85,247,0.1)', 'rgba(59,130,246,0.1)', 'rgba(34,197,94,0.1)'][i % 4]
          } 0%, transparent 70%)`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 200 - 100, 0],
          y: [0, Math.random() * 200 - 100, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

export const StorySection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#0A0F29] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        <FloatingOrbs />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-16"
          >
            <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />
            
            <h2 className="relative text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
              <span className="block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                La Team
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            Une équipe passionnée qui met son expertise au service de votre talent.
            Découvrez les visages et les compétences qui font la force de Tiny Team.
          </motion.p>
        </div>

        {/* Team Section */}
        <div className="relative mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h3 className="text-3xl md:text-6xl font-bold mb-6">
              <span className="block text-gradient from-white via-blue-100 to-white">
                L'équipe qui fait
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
                la différence
              </span>
            </h3>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Cinq expertises complémentaires, cinq personnalités uniques,
              une passion commune pour l'excellence artistique.
            </p>
          </motion.div>

          {/* Team Cards - Overlapping Layout */}
          <div className="flex justify-center items-center overflow-x-auto pb-8">
            <div className="flex -space-x-16 px-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />
            <h3 className="relative text-3xl md:text-5xl font-bold">
              <span className="block text-gradient from-white via-blue-100 to-white">
                Ces talents se traduisent par
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
                des expertises concrètes
              </span>
            </h3>
          </div>
        </motion.div>

        {/* Expertises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {expertises.map((expertise, index) => (
            <ExpertiseCard key={expertise.title} expertise={expertise} index={index} />
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center space-y-8"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-gradient from-pink-300 via-pink-200 to-pink-300">
            Prêt à écrire votre succès avec nous ?
          </h4>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="#contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden"
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
              
              <span className="relative font-bold text-white text-lg">Commencer l'aventure</span>
              <motion.div
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.div>
            </Link>
            
            <Link
              to="/equipe"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
            >
              <Heart className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
              <span className="font-semibold text-white group-hover:text-glow transition-all duration-300">En savoir plus sur nous</span>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};