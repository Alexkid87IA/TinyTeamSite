import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowDown, ArrowRight, Star, Heart, Coffee, Book, Palette, Linkedin, Mail, Shield, Rocket, Layout, Globe, Users, Sparkles } from 'lucide-react';

const teamMembers = [
  {
    name: "Bénédicte Lecoq",
    role: "Fondatrice",
    description: "Visionnaire et passionnée, Bénédicte a créé Tiny Team avec la conviction que chaque artiste mérite un accompagnement aussi unique que son talent.",
    skills: ["Direction stratégique", "Production artistique", "Développement de talents"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1024",
    contact: {
      linkedin: "benedicte-lecoq",
      email: "benedicte@tinyteam.fr"
    }
  },
  {
    name: "Isabelle Sabatier",
    role: "Responsable Diffusion",
    description: "Experte en diffusion artistique, Isabelle transforme les spectacles en succès nationaux grâce à sa connaissance approfondie du secteur.",
    skills: ["Programmation culturelle", "Gestion de tournées", "Relations publiques"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1024",
    contact: {
      linkedin: "isabelle-sabatier",
      email: "isabelle@tinyteam.fr"
    }
  },
  {
    name: "Elodie Biffi",
    role: "Responsable Administrative",
    description: "Gardienne de l'excellence opérationnelle, Elodie assure une gestion irréprochable permettant aux artistes de se concentrer sur leur art.",
    skills: ["Gestion administrative", "Optimisation des process", "Veille juridique"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1024",
    contact: {
      linkedin: "elodie-biffi",
      email: "elodie@tinyteam.fr"
    }
  },
  {
    name: "Jérémy Dravigny",
    role: "Responsable Communication",
    description: "Stratège digital, Jérémy crée des narratifs percutants qui connectent les artistes à leur public de manière authentique et innovante.",
    skills: ["Communication digitale", "Marketing artistique", "Relations presse"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1024",
    contact: {
      linkedin: "jeremy-dravigny",
      email: "jeremy@tinyteam.fr"
    }
  },
  {
    name: "Margaux Morel",
    role: "Chargée de Production",
    description: "Créative et méthodique, Margaux donne vie aux projets les plus ambitieux en conjuguant vision artistique et excellence opérationnelle.",
    skills: ["Production artistique", "Direction technique", "Gestion de projet"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1024",
    contact: {
      linkedin: "margaux-morel",
      email: "margaux@tinyteam.fr"
    }
  }
];

const expertises = [
  {
    id: "production",
    title: "Production de Spectacles",
    description: "De la conception à la réalisation, nous donnons vie à vos projets artistiques avec excellence et créativité.",
    icon: Star,
    gradient: "from-pink-500/20 to-pink-300/20",
    features: [
      "Direction artistique complète",
      "Mise en scène professionnelle",
      "Production technique",
      "Gestion logistique"
    ]
  },
  {
    id: "diffusion",
    title: "Diffusion & Tournées",
    description: "Portez votre spectacle aux quatre coins de la France avec une organisation millimétrée.",
    icon: Globe,
    gradient: "from-pink-400/20 to-pink-600/20",
    features: [
      "Booking",
      "Gestion de tournées",
      "Relations salles",
      "Support technique"
    ]
  },
  {
    id: "digital",
    title: "Développement Digital",
    description: "Construisez votre présence en ligne et engagez votre communauté avec des stratégies innovantes.",
    icon: Rocket,
    gradient: "from-pink-300/20 to-pink-500/20",
    features: [
      "Stratégie réseaux sociaux",
      "Création de contenu",
      "Community management",
      "Marketing digital"
    ]
  },
  {
    id: "communication",
    title: "Communication & Image",
    description: "Développez une image forte et cohérente qui vous distingue dans l'univers du spectacle.",
    icon: Layout,
    gradient: "from-pink-500/20 to-purple-500/20",
    features: [
      "Relations presse",
      "Identité visuelle",
      "Communication événementielle",
      "Relations publiques"
    ]
  },
  {
    id: "management",
    title: "Management d'Artistes",
    description: "Un accompagnement complet et personnalisé pour développer votre carrière et maximiser votre potentiel.",
    icon: Shield,
    gradient: "from-purple-500/20 to-pink-500/20",
    features: [
      "Développement de carrière",
      "Stratégie artistique",
      "Gestion administrative",
      "Relations professionnelles"
    ]
  },
  {
    id: "evenements",
    title: "Événements Spéciaux",
    description: "Créez des moments uniques et mémorables pour des occasions exceptionnelles.",
    icon: Users,
    gradient: "from-pink-400/20 to-pink-600/20",
    features: [
      "Conception événementielle",
      "Production sur mesure",
      "Coordination complète",
      "Gestion technique"
    ]
  }
];

const history = {
  title: "Notre Histoire",
  description: "Depuis notre création en 2020, Tiny Team s'est donné pour mission de révolutionner l'accompagnement des artistes dans le monde du spectacle vivant.",
  milestones: [
    {
      year: "2020",
      title: "La naissance",
      description: "Création de Tiny Team avec une vision claire : offrir un accompagnement sur mesure aux artistes émergents."
    },
    {
      year: "2021",
      title: "Premiers succès",
      description: "Accompagnement de nos premiers artistes et développement de notre approche unique."
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Élargissement de notre équipe et de notre réseau de partenaires."
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Développement de nouvelles approches pour la production et la diffusion de spectacles."
    },
    {
      year: "2024",
      title: "Aujourd'hui",
      description: "Une équipe passionnée au service des artistes, avec des succès qui parlent d'eux-mêmes."
    }
  ]
};

const TeamMemberSection = ({ member, index, setCurrentIndex }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentIndex(index);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [index, setCurrentIndex]);

  return (
    <section ref={sectionRef} className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-300 to-pink-100 bg-clip-text text-transparent">
                {member.name}
              </h2>
              <p className="text-lg md:text-xl text-white/80 mt-2">{member.role}</p>
            </div>

            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              {member.description}
            </p>

            <div>
              <h3 className="text-white/90 font-semibold mb-4">Compétences</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 text-white/70 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white/90 font-semibold mb-4">Contact</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://linkedin.com/in/${member.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">LinkedIn</span>
                </a>
                <a
                  href={`mailto:${member.contact.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">{member.contact.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ expertise, index }) => {
  const Icon = expertise.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full glass-card rounded-2xl p-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="relative">
          {/* Icon */}
          <div className="mb-6">
            <div className="relative w-16 h-16 rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {expertise.title}
          </h3>

          {/* Description */}
          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
            {expertise.description}
          </p>

          {/* Features */}
          <div className="space-y-3 pt-4">
            {expertise.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400/40" />
                <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-6">
            <Link
              to={`/services/${expertise.id}`}
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 group/link"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HistorySection = () => (
  <section className="py-32 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="block text-gradient from-white via-blue-100 to-white">
            {history.title}
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          {history.description}
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {history.milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0"
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/50 to-transparent" />
            <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-pink-500" />
            
            <div className="glass-card rounded-xl p-6">
              <div className="text-pink-400 font-bold mb-2">{milestone.year}</div>
              <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
              <p className="text-white/70">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ScrollIndicator = ({ currentIndex, totalMembers, onSelect }) => {
  return (
    <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 space-y-4">
      {Array.from({ length: totalMembers }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            currentIndex === index ? 'bg-pink-300' : 'bg-white/20 hover:bg-white/40'
          }`}
        />
      ))}
    </div>
  );
};

export default function TeamPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToMember = (index) => {
    setCurrentIndex(index);
    const element = document.getElementById(`member-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative px-2 md:px-0"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                  <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                    La
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                    Team
                  </span>
                </h1>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mt-6 md:mt-8 mb-12 md:mb-16 px-4"
            >
              Une équipe passionnée qui donne vie à vos projets artistiques.
              Des expertises complémentaires unies par l'amour du spectacle vivant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToMember(0)}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <span>Découvrir l'équipe</span>
                <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-pink-300 transition-colors duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Sections */}
      {teamMembers.map((member, index) => (
        <div key={member.name} id={`member-${index}`}>
          <TeamMemberSection
            member={member}
            index={index}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      ))}

      {/* Expertises Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative px-2 md:px-0 mb-12"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                  <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                    Ces talents se traduisent par
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                    des expertises concrètes
                  </span>
                </h2>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
            >
              Une expertise complète pour accompagner votre carrière artistique.
              Des solutions adaptées à chaque étape de votre développement.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {expertises.map((expertise, index) => (
              <ExpertiseCard key={expertise.id} expertise={expertise} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <HistorySection />

      {/* Scroll Indicator - Only visible on desktop */}
      <ScrollIndicator
        currentIndex={currentIndex}
        totalMembers={teamMembers.length}
        onSelect={scrollToMember}
      />

      <Footer />
    </main>
  );
}

export { TeamPage };