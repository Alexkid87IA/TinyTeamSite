import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Star, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
  { 
    value: "10+", 
    label: "artistes disponibles",
    icon: Users,
    gradient: "from-pink-400 to-pink-500",
    delay: 0.1
  },
  { 
    value: "95%", 
    label: "spectacles complets",
    icon: TrendingUp,
    gradient: "from-purple-400 to-purple-500",
    delay: 0.2
  },
  { 
    value: "50+", 
    label: "villes partenaires",
    icon: Globe,
    gradient: "from-blue-400 to-blue-500",
    delay: 0.3
  }
];

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      duration: 0.6, 
      delay: stat.delay,
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      y: -8,
      scale: 1.05,
      transition: { duration: 0.3 }
    }}
    className="group relative"
  >
    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative glass-card rounded-2xl p-6 h-full overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative flex flex-col items-center text-center space-y-4">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
          <stat.icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-glow transition-all duration-300">
          {stat.value}
        </div>
        
        <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
          {stat.label}
        </div>
      </div>
    </div>
  </motion.div>
);

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-3xl"
        style={{
          width: Math.random() * 300 + 150,
          height: Math.random() * 300 + 150,
          background: `radial-gradient(circle, ${
            ['rgba(236,72,153,0.15)', 'rgba(168,85,247,0.15)', 'rgba(59,130,246,0.15)', 'rgba(34,197,94,0.15)'][i % 4]
          } 0%, transparent 70%)`,
          left: `${Math.random() * 120 - 10}%`,
          top: `${Math.random() * 120 - 10}%`,
        }}
        animate={{
          x: [0, Math.random() * 300 - 150, 0],
          y: [0, Math.random() * 300 - 150, 0],
          scale: [1, Math.random() * 0.5 + 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

const GeometricShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Triangles */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`triangle-${i}`}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() * 60 + 20,
          height: Math.random() * 60 + 20,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div 
          className="w-full h-full"
          style={{
            background: `linear-gradient(45deg, ${
              ['rgba(236,72,153,0.2)', 'rgba(168,85,247,0.2)', 'rgba(59,130,246,0.2)'][i % 3]
            }, transparent)`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
      </motion.div>
    ))}
    
    {/* Circles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`circle-${i}`}
        className="absolute rounded-full border border-white/10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: Math.random() * 25 + 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

const GlowingText = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={`relative ${className}`}
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut", delay }}
  >
    <motion.div
      className="absolute inset-0 blur-3xl"
      animate={{
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

export const ProducerHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Base gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F29] via-[#1a1f3a] to-[#0A0F29]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.3),transparent_70%)]" />
        
        {/* Dynamic background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(236,72,153,0.2), transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(168,85,247,0.2), transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.2), transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(236,72,153,0.2), transparent 50%)"
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated elements */}
        <FloatingOrbs />
        <GeometricShapes />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title with spectacular effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative px-2 md:px-0 mb-20"
          >
            {/* Background glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute -inset-x-12 -inset-y-20 md:-inset-y-32"
            >
              <motion.div
                className="w-full h-full rounded-[80px] bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-blue-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.9, 0.5],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Pulsating dots around title */}
            <GlowingText delay={0.3}>
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9]">
                <motion.span 
                  className="inline-block bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
                  initial={{ y: 100, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                >
                  Nos artistes,
                </motion.span>
                <br />
                <motion.span 
                  className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent mt-4"
                  initial={{ y: 100, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                >
                  votre prochain succès
                </motion.span>
              </h1>
            </GlowingText>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="relative mb-20"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-500/5 via-purple-500/10 to-blue-500/5 blur-xl" />
            <p className="relative text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto font-light">
              Tiny Team accompagne des humoristes talentueux avec exigence, écoute et créativité.
              <br className="hidden md:block" />
              <span className="text-gradient from-pink-300 via-pink-200 to-pink-300 font-medium">
                Nous vous offrons une programmation fluide, fiable et amplifiée pour faire rayonner vos événements.
              </span>
            </p>
          </motion.div>

          {/* Enhanced Stats with 3D effects */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="#artists"
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
              
              <span className="relative font-bold text-white text-lg">Découvrir nos artistes</span>
              <motion.div
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.div>
            </Link>
            
            <Link
              to="#contact"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
            >
              <span className="font-semibold text-white group-hover:text-glow transition-all duration-300">Programmer un artiste</span>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </motion.div>

          {/* Scroll indicator with premium animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.5 }}
            className="flex flex-col items-center gap-6 mt-16"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/40 text-xs uppercase tracking-[0.3em] font-medium"
            >
              Découvrir nos talents
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, delay: 2 }}
      />
    </section>
  );
};