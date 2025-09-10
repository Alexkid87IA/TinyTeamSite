import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Les 11 vrais artistes de Tiny Team
const artists = [
  { id: 1, name: "Urbain", image: "https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg" },
  { id: 2, name: "Marc-Antoine Le Bret", image: "https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg" },
  { id: 3, name: "Adel Fugazi", image: "https://static.eno.do/x/fs-200361-default/ce4d47f8d131e7971b4f3fc0de45b470/media.jpg" },
  { id: 4, name: "D'Jal", image: "https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg" },
  { id: 5, name: "Morgane Berling", image: "https://i.imgur.com/munE7s3.jpeg" },
  { id: 6, name: "Thomas Angelvy", image: "https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg" },
  { id: 7, name: "Lucie Carbone", image: "https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg" },
  { id: 8, name: "Edouard Deloignon", image: "https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg" },
  { id: 9, name: "Julien Santini", image: "https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg" },
  { id: 10, name: "Djamel Comedy Club", image: "https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg" },
  { id: 11, name: "Sophie & Alex", image: "https://i.imgur.com/ht3EucF.jpeg" }
];

// Dupliquer pour créer une boucle infinie
const topRow = [...artists.slice(0, 6), ...artists.slice(0, 6)];
const bottomRow = [...artists.slice(6, 11), ...artists.slice(6, 11), ...artists.slice(6, 11)];

// Composant pour une rangée d'artistes
const ArtistRow = ({ artists, direction = 'left', speed = 50 }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }
        }}
      >
        {artists.map((artist, index) => (
          <div
            key={`${artist.id}-${index}`}
            className="relative flex-shrink-0 w-[140px] h-[200px] sm:w-[180px] sm:h-[260px] md:w-[220px] md:h-[320px] rounded-lg overflow-hidden"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-lg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const audiences = [
    {
      title: "ARTISTE",
      headline: "Développez votre carrière",
      description: "Production • Tournées • Communication",
      link: "/artiste",
    },
    {
      title: "PROGRAMMATEUR", 
      headline: "Des spectacles qui cartonnent",
      description: "Humour • Stand-up • One-man shows",
      link: "/programmateur",
    },
    {
      title: "ENTREPRISE",
      headline: "Événements mémorables",
      description: "Soirées • Conventions • Team building",
      link: "/marque",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A1F]">
      
      {/* ARRIÈRE-PLAN : Rivière d'artistes */}
      <div className="absolute inset-0">
        {/* Overlay gradient pour assurer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1F]/50 via-[#0A0A1F]/40 to-[#0A0A1F]/50 z-10" />
        
        {/* Les deux rangées d'artistes */}
        <div className="absolute inset-0 flex flex-col justify-center gap-6 opacity-60">
          <ArtistRow artists={topRow} direction="left" speed={60} />
          <ArtistRow artists={bottomRow} direction="right" speed={50} />
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <motion.div 
        className="relative z-20 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto w-full text-center">
          
          {/* TITRE PRINCIPAL - TINY TEAM, BIG DREAMS avec fade in simple */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* TINY TEAM - PLUS PETIT */}
            <div className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black italic leading-tight pb-2">
              <span className="text-white" style={{ 
                textShadow: '0 0 20px rgba(168,85,247,0.8), 0 0 40px rgba(168,85,247,0.4), 0 4px 20px rgba(0,0,0,0.9)'
              }}>
                TINY TEAM,
              </span>
            </div>
            
            {/* BIG DREAMS - PLUS GRAND */}
            <div className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black italic leading-tight pt-2">
              <span className="text-white" style={{
                textShadow: '0 0 40px rgba(168,85,247,0.9), 0 0 80px rgba(168,85,247,0.5), 0 4px 20px rgba(0,0,0,0.9)'
              }}>
                BIG DREAMS
              </span>
            </div>
          </motion.div>

          {/* SOUS-TITRE - La scène vous attend */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
               style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}>
              La scène vous attend
            </p>
          </motion.div>

          {/* SOUS-TITRE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto"
            style={{ textShadow: '0 2px 15px rgba(0,0,0,0.9)' }}
          >
            Production de spectacles vivants qui remplissent les salles
          </motion.p>

          {/* LES 3 CARTES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {audiences.map((audience, index) => (
              <Link
                key={index}
                to={audience.link}
                className={`group ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <motion.div
                  className="p-6 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 hover:border-pink-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.7)' }}
                >
                  <p className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-2">
                    VOUS ÊTES {audience.title} ?
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {audience.headline}
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    {audience.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-white group-hover:text-pink-400 transition-colors">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* INDICATEUR DE SCROLL */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/40"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};