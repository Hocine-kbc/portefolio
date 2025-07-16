import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, User, MessageSquare, Sparkles } from 'lucide-react';
import '../styles/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="spacing-responsive-lg section-bg-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-blue-200 dark:text-blue-800" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '3s' }}>
        <MessageSquare className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-purple-200 dark:text-purple-800" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-6">
            Contactez<span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">-moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto mb-8"></div>
          <p className="text-responsive-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="creative-card spacing-responsive-sm">
              <h3 className="text-responsive-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <User className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600" />
                Parlons de votre projet
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-responsive-base mb-8 leading-relaxed">
                Que vous soyez une entreprise, une startup ou un particulier, je suis disponible 
                pour discuter de vos besoins en développement web. Ensemble, nous pouvons créer 
                quelque chose d'exceptionnel !
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 spacing-responsive-xs bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-responsive-sm">Email</h4>
                    <a 
                      href="mailto:kebcihocine94@gmail.com" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-responsive-xs"
                    >
                      kebcihocine94@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="bg-purple-600 p-2 rounded-lg">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Téléphone</h4>
                    <a 
                      href="tel:+33123456789" 
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      +33 6 03 54 35 24
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="bg-green-600 p-2 rounded-lg">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Localisation</h4>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=06+Avenue+Salvador+Allende,+69100+Villeurbanne,+France"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                    >
                      06 Avenue Salvador Allende, 69100 Villeurbanne, France
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="creative-card p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MessageSquare className="text-blue-600 w-6 h-6" />
                Réseaux Sociaux
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-100 dark:hover:bg-gray-700" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-100 dark:hover:bg-blue-900/30" },
                  { icon: Mail, href: "mailto:kebcihocine94@gmail.com", label: "Email", color: "hover:bg-green-100 dark:hover:bg-green-900/30" }
                ].map(({ icon: Icon, href, label, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : "_blank"}
                    rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                    className={`p-3 rounded-lg ${color} transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white`}
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="creative-card p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Send className="w-7 h-7 text-blue-600" />
              Envoyez-moi un message
            </h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                <CheckCircle className="text-green-600 w-6 h-6" />
                <p className="text-green-800 dark:text-green-200 font-medium">
                  Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Décrivez votre projet ou posez votre question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                    <Sparkles size={16} className="animate-pulse" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Réponse garantie sous 24h
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;