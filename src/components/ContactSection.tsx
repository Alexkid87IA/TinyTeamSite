import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@tinyteam.fr",
    href: "mailto:contact@tinyteam.fr",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
];

const steps = [
  {
    id: 'role',
    question: "Qui êtes-vous ?",
    options: [
      { id: 'artist', label: 'Je suis artiste', description: 'Je souhaite développer ma carrière' },
      { id: 'producer', label: 'Je suis programmateur', description: 'Je cherche des artistes pour ma programmation' },
      { id: 'brand', label: 'Je représente une marque', description: 'Je souhaite collaborer avec des artistes' }
    ]
  },
  {
    id: 'goal',
    question: {
      artist: "Quel est votre objectif principal ?",
      producer: "Quel type de spectacle recherchez-vous ?",
      brand: "Quel type de collaboration souhaitez-vous ?"
    },
    options: {
      artist: [
        { id: 'develop', label: 'Développer mon spectacle', description: 'Production et mise en scène' },
        { id: 'tour', label: 'Partir en tournée', description: 'Diffusion et booking' },
        { id: 'career', label: 'Gérer ma carrière', description: 'Management complet' }
      ],
      producer: [
        { id: 'comedy', label: 'Stand-up', description: 'Humour et comédie' },
        { id: 'onemanshow', label: 'One man/woman show', description: 'Spectacle solo' },
        { id: 'special', label: 'Événement spécial', description: 'Festival ou soirée thématique' }
      ],
      brand: [
        { id: 'event', label: 'Événement privé', description: 'Show ou animation' },
        { id: 'content', label: 'Création de contenu', description: 'Digital et réseaux sociaux' },
        { id: 'ambassador', label: 'Programme ambassadeur', description: 'Partenariat long terme' }
      ]
    }
  },
  {
    id: 'timeline',
    question: "Quel est votre horizon de temps ?",
    options: [
      { id: 'immediate', label: 'Immédiat', description: 'Dans le mois' },
      { id: 'soon', label: '3-6 mois', description: 'Moyen terme' },
      { id: 'future', label: '6+ mois', description: 'Long terme' }
    ]
  }
];

const ContactInfoCard = ({ info }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <a
      href={info.href}
      target={info.href.startsWith('http') ? '_blank' : undefined}
      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="block"
    >
      <div className="relative glass-card rounded-2xl p-8 overflow-hidden hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="relative text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 mx-auto rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <info.icon className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white/70 mb-2">{info.title}</h3>
            <p className="text-xl text-white group-hover:text-glow transition-all duration-300 font-medium">{info.value}</p>
          </div>
        </div>
      </div>
    </a>
  </motion.div>
);

const QuestionStep = ({ step, answers, onAnswer, onBack, onRestart }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="w-full max-w-2xl mx-auto"
  >
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold text-white">
          {typeof step.question === 'object' ? step.question[answers.role] : step.question}
        </h3>
        {Object.keys(answers).length > 0 && (
          <button
            onClick={onRestart}
            className="text-sm text-white/60 hover:text-white flex items-center gap-1.5 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Recommencer</span>
          </button>
        )}
      </div>
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 to-pink-500"
          initial={{ width: '0%' }}
          animate={{ width: `${(Object.keys(answers).length / 3) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>

    <div className="grid gap-4">
      {(typeof step.options === 'object' && !Array.isArray(step.options) 
        ? step.options[answers.role] 
        : step.options
      ).map((option) => (
        <motion.button
          key={option.id}
          onClick={() => onAnswer(option.id)}
          className="relative group text-left"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 glass-card rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 to-pink-500/0 group-hover:from-pink-400/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300" />
          <div className="relative p-6">
            <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-glow transition-all duration-300">
              {option.label}
            </h4>
            <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
              {option.description}
            </p>
          </div>
          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
            initial={false}
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <ArrowRight className="w-5 h-5 text-pink-400" />
          </motion.div>
        </motion.button>
      ))}
    </div>

    {Object.keys(answers).length > 0 && (
      <motion.button
        onClick={onBack}
        className="mt-6 flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Retour</span>
      </motion.button>
    )}
  </motion.div>
);

const getFormLink = (answers) => {
  if (answers.role === 'artist') {
    if (answers.goal === 'develop') {
      return 'https://forms.tinyteam.fr/artiste/developpement';
    } else if (answers.goal === 'tour') {
      return 'https://forms.tinyteam.fr/artiste/tournee';
    } else {
      return 'https://forms.tinyteam.fr/artiste/management';
    }
  } else if (answers.role === 'producer') {
    if (answers.goal === 'comedy') {
      return 'https://forms.tinyteam.fr/programmateur/standup';
    } else if (answers.goal === 'onemanshow') {
      return 'https://forms.tinyteam.fr/programmateur/onemanshow';
    } else {
      return 'https://forms.tinyteam.fr/programmateur/special';
    }
  } else {
    if (answers.goal === 'event') {
      return 'https://forms.tinyteam.fr/marque/evenement';
    } else if (answers.goal === 'content') {
      return 'https://forms.tinyteam.fr/marque/contenu';
    } else {
      return 'https://forms.tinyteam.fr/marque/ambassadeur';
    }
  }
};

const ContactForm = ({ answers }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  let messageTemplate = "";
  if (answers.role === 'artist') {
    messageTemplate = `Je suis artiste et je souhaite ${
      answers.goal === 'develop' ? 'développer mon spectacle' :
      answers.goal === 'tour' ? 'partir en tournée' :
      'être accompagné(e) dans ma carrière'
    }. Je cherche à démarrer ${
      answers.timeline === 'immediate' ? 'dès que possible' :
      answers.timeline === 'soon' ? 'dans les 3-6 mois' :
      'dans plus de 6 mois'
    }.`;
  } else if (answers.role === 'producer') {
    messageTemplate = `Je suis programmateur et je recherche ${
      answers.goal === 'comedy' ? 'un spectacle de stand-up' :
      answers.goal === 'onemanshow' ? 'un one man/woman show' :
      'un événement spécial'
    } pour une date ${
      answers.timeline === 'immediate' ? 'très proche' :
      answers.timeline === 'soon' ? 'dans 3-6 mois' :
      'dans plus de 6 mois'
    }.`;
  } else {
    messageTemplate = `Je représente une marque et je souhaite ${
      answers.goal === 'event' ? 'organiser un événement privé' :
      answers.goal === 'content' ? 'créer du contenu' :
      'mettre en place un programme ambassadeur'
    }. Le projet démarrerait ${
      answers.timeline === 'immediate' ? 'immédiatement' :
      answers.timeline === 'soon' ? 'dans 3-6 mois' :
      'dans plus de 6 mois'
    }.`;
  }

  const formLink = getFormLink(answers);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
        <h4 className="text-lg font-semibold text-white mb-2">Formulaire spécialisé disponible</h4>
        <p className="text-white/70 mb-4">
          Pour un traitement plus rapide de votre demande, nous vous recommandons d'utiliser notre formulaire dédié.
        </p>
        <a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-black font-semibold hover:from-pink-300 hover:to-pink-400 transition-all duration-300 group"
        >
          <span>Accéder au formulaire spécialisé</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 text-sm text-white/40 bg-[#0A0F29]">ou</span>
        </div>
      </div>

      <motion.form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = formLink;
        }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Nom</label>
            <input
              type="text"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className={`w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:ring-2 transition-all duration-300 ${
                errors.name ? 'ring-2 ring-red-500/50' : 'ring-pink-500/0 focus:ring-pink-500/50'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
            <input
              type="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className={`w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:ring-2 transition-all duration-300 ${
                errors.email ? 'ring-2 ring-red-500/50' : 'ring-pink-500/0 focus:ring-pink-500/50'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Téléphone (optionnel)</label>
          <input
            type="tel"
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            className="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:ring-2 ring-pink-500/0 focus:ring-pink-500/50 transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
          <textarea
            value={formState.message || messageTemplate}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            rows={6}
            className={`w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:ring-2 transition-all duration-300 ${
              errors.message ? 'ring-2 ring-red-500/50' : 'ring-pink-500/0 focus:ring-pink-500/50'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 p-px focus:outline-none"
        >
          <div className="relative rounded-xl bg-[#0A0F29] px-8 py-3.5 transition-all duration-300 group-hover:bg-transparent">
            <div className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Message envoyé !</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="text-white font-medium">Envoyer le message</span>
                </>
              )}
            </div>
          </div>
        </button>
      </motion.form>
    </motion.div>
  );
};

export const ContactSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers };
    
    if (currentStep === 0) newAnswers.role = answer;
    else if (currentStep === 1) newAnswers.goal = answer;
    else if (currentStep === 2) newAnswers.timeline = answer;
    
    setAnswers(newAnswers);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    const newAnswers = { ...answers };
    if (currentStep === 1) delete newAnswers.role;
    else if (currentStep === 2) delete newAnswers.goal;
    else if (currentStep === 3) delete newAnswers.timeline;
    
    setAnswers(newAnswers);
    setCurrentStep(currentStep - 1);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
  };

  return (
    <section className="relative min-h-screen py-32 bg-[#0A0F29] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative px-2 md:px-0"
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
                  On discute
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                  de votre projet ?
                </span>
              </h2>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <div className="flex justify-center mb-20">
          {contactInfo.map((info) => (
            <ContactInfoCard key={info.title} info={info} />
          ))}
        </div>

        {/* Interactive Form */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative glass-card rounded-2xl p-8 md:p-12">
              <AnimatePresence mode="wait">
                {currentStep < 3 ? (
                  <QuestionStep
                    key={currentStep}
                    step={steps[currentStep]}
                    answers={answers}
                    onAnswer={handleAnswer}
                    onBack={handleBack}
                    onRestart={handleRestart}
                  />
                ) : (
                  <div>
                    <div className="flex justify-end mb-8">
                      <button
                        onClick={handleRestart}
                        className="text-sm text-white/60 hover:text-white flex items-center gap-1.5 transition-colors duration-300"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Recommencer</span>
                      </button>
                    </div>
                    <ContactForm answers={answers} />
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};