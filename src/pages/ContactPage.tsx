import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  // IMPORTANT : Remplace cette URL par ton endpoint Formspree
  const FORMSPREE_URL = "https://formspree.io/f/TON_ID_ICI"; // ← CHANGE ICI !

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Réinitialiser le message de succès après 5 secondes
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false });
        }, 5000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Pré-remplir le sujet selon le type d'utilisateur
  const setUserType = (type) => {
    const subjects = {
      artist: "Je suis artiste - Demande d'accompagnement",
      programmer: "Je suis programmateur - Recherche d'artistes",
      brand: "Je représente une marque - Collaboration"
    };
    
    setFormData({
      ...formData,
      subject: subjects[type]
    });
  };

  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background simple */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Parlons de </span>
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                votre projet
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Une question ? Un projet ? Une collaboration ? 
              Nous sommes là pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Informations de contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Contactez-nous
                  </h2>
                  <p className="text-white/70">
                    Notre équipe est à votre écoute pour répondre à toutes vos questions
                    et vous accompagner dans vos projets.
                  </p>
                </div>

                {/* Boutons pour pré-remplir le sujet */}
                <div>
                  <p className="text-white/60 text-sm mb-3">Vous êtes :</p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setUserType('artist')}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-all"
                    >
                      🎭 Artiste
                    </button>
                    <button
                      onClick={() => setUserType('programmer')}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-all"
                    >
                      🎪 Programmateur
                    </button>
                    <button
                      onClick={() => setUserType('brand')}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-all"
                    >
                      🚀 Marque
                    </button>
                  </div>
                </div>

                {/* Informations de contact */}
                <div className="space-y-4">
                  <a
                    href="mailto:contact@tinyteam.fr"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white group-hover:text-pink-400 transition-colors">
                        contact@tinyteam.fr
                      </p>
                    </div>
                  </a>
                </div>

                {/* Réseaux sociaux (optionnel) */}
                <div>
                  <p className="text-white/60 text-sm mb-3">Suivez-nous</p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/tinyteam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                    >
                      <span className="text-sm">IG</span>
                    </a>
                    <a
                      href="https://linkedin.com/company/tinyteam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                    >
                      <span className="text-sm">IN</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Formulaire */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="glass-card rounded-2xl p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nom */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                        Votre nom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none text-white placeholder-white/30 transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                        Votre email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none text-white placeholder-white/30 transition-all"
                        placeholder="jean@example.com"
                      />
                    </div>

                    {/* Sujet */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none text-white placeholder-white/30 transition-all"
                        placeholder="L'objet de votre message"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none text-white placeholder-white/30 transition-all resize-none"
                        placeholder="Parlez-nous de votre projet..."
                      />
                    </div>

                    {/* Bouton Submit */}
                    <button
                      type="submit"
                      disabled={status.submitting || status.submitted}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-400 hover:to-purple-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status.submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : status.submitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message envoyé !
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </button>

                    {/* Messages d'état */}
                    {status.submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                      >
                        <p className="text-green-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Merci ! Nous vous répondrons dans les plus brefs délais.
                        </p>
                      </motion.div>
                    )}

                    {status.error && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                      >
                        <p className="text-red-400 text-sm flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                        </p>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};