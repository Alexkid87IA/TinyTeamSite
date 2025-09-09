import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Star, Heart, Sparkles, Music, Camera, Coffee, Book, Palette } from 'lucide-react';

const teamStories = [
  {
    name: "Bénédicte Lecoq",
    role: "Fondatrice",
    story: "J'ai fait mes armes dans les grandes maisons du spectacle vivant entre Paris et Marseille. Après avoir côtoyé des artistes de renom et construit un solide réseau, une évidence s'est imposée : ce que j'aime par-dessus tout, c'est la proximité avec les artistes. C'est ainsi qu'est née Tiny Team.",
    passions: ["Direction artistique", "Production", "Management"],
    quote: "Liberté et confiance sont nos valeurs fondamentales.",
    image: "https://i.imgur.com/9Zdq7Qn.png",
    icons: [Star, Heart, Camera],
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    name: "Isabelle Sabatier",
    role: "Responsable Diffusion & Tournées",
    story: "Ma passion pour le spectacle vivant est l'énergie qui me pousse depuis toujours. J'ai développé de multiples compétences : planifier les tournées, structurer les projets artistiques, définir des stratégies personnalisées. Authenticité, proximité et professionnalisme guident mon travail quotidien.",
    passions: ["Spectacle vivant", "Organisation de tournées", "Développement artistique"],
    quote: "Chaque projet mérite une stratégie de développement unique.",
    image: "https://26.staticbtf.eno.do/v1/50-default/72327cba31187ae50845f74005e56b82/media.jpg",
    icons: [Music, Star, Heart],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Elodie Biffi",
    role: "Responsable Administrative",
    story: "La gestion administrative dans le spectacle vivant est un art en soi. Je veille à ce que nos artistes puissent se concentrer sur leur créativité en toute sérénité.",
    passions: ["Gestion administrative", "Organisation", "Excellence opérationnelle"],
    quote: "L'organisation est la clé de la liberté artistique.",
    image: "https://i.imgur.com/VIvzDfN.png",
    icons: [Book, Coffee, Palette],
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  {
    name: "Jérémy Dravigny",
    role: "Responsable Communication",
    story: "Dans le spectacle depuis bientôt 20 ans, j'ai créé un festival de musiques actuelles en 2006 et accompagné des artistes en développement. Tour à tour producteur, artiste et diffuseur, ces expériences complémentaires me permettent d'avoir une vision globale de nos métiers. Chez Tiny Team depuis 2 ans, j'apporte passion et bonne humeur.",
    passions: ["Production", "Communication digitale", "Festival"],
    quote: "Faire les choses sérieusement sans se prendre au sérieux.",
    image: "https://i.imgur.com/VwHcPJF.png",
    icons: [Sparkles, Star, Heart],
    gradient: "from-teal-500/20 to-green-500/20"
  },
  {
    name: "Margaux Morel",
    role: "Chargée de Production",
    story: "Nouvelle recrue au sein de l'équipe, j'apporte un vent de fraîcheur et un regard neuf. Curieuse, dynamique et créative, j'enrichis l'équipe de ma sensibilité organisationnelle acquise après plus de 10 ans d'expérience dans l'événementiel et de mon enthousiasme communicatif.",
    passions: ["Production artistique", "Événementiel", "Créativité"],
    quote: "Créativité et organisation au service de l'excellence.",
    image: "https://i.imgur.com/IKLr6Zq.png",
    icons: [Coffee, Star, Palette],
    gradient: "from-green-500/20 to-yellow-500/20"
  }
];

const StoryCard = ({ story, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="group"
  >
    <div className="relative glass-card rounded-2xl overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="relative h-64">
        <img
          src={story.image}
          alt={story.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${story.gradient} mix-blend-overlay opacity-40`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {story.name}
          </h3>
          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
            {story.role}
          </p>
        </div>

        {/* Story */}
        <p className="text-white/80 mb-6 leading-relaxed">
          {story.story}
        </p>

        {/* Passions */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-white/70 mb-3">Passions</h4>
          <div className="flex flex-wrap gap-2">
            {story.passions.map((passion, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/60 border border-white/10 group-hover:border-white/20 transition-colors duration-300"
              >
                {passion}
              </span>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
          <div className="flex gap-4 items-center">
            <div className="flex -space-x-2">
              {story.icons.map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full glass-effect flex items-center justify-center relative z-[${i}]"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
              ))}
            </div>
            <p className="text-sm text-white/80 italic">
              "{story.quote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: 0,
          opacity: 0
        }}
        animate={{
          y: [null, `${Math.random() * 30 - 15}%`],
          x: [null, `${Math.random() * 30 - 15}%`],
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          repeatDelay: Math.random() * 2
        }}
      />
    ))}
  </div>
);

export const TeamStoriesPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
          <FloatingParticles />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                <span className="block text-gradient from-white via-blue-100 to-white">
                  Les visages derrière
                </span>
                <span className="block text-gradient from-yellow-200 via-yellow-100 to-yellow-200">
                  les succès
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Découvrez les parcours inspirants de ceux qui font vivre Tiny Team au quotidien.
                Des histoires uniques, une passion commune.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {teamStories.map((story, index) => (
              <StoryCard key={story.name} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};