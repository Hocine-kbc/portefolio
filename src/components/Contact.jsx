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
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background Elements */}
      <div className="decoration sparkle">
        <Sparkles className="sparkle-icon" />
      </div>
      <div className="decoration message">
        <MessageSquare className="message-icon" />
      </div>

      <div className="container">
        <div className="header">
          <h2>
            Contactez<span className="highlight">-moi</span>
          </h2>
          <div className="divider"></div>
          <p>
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter !
          </p>
        </div>

        <div className="grid">
          {/* Contact Info */}
          <div className="left-column">
            <div className="card contact-info">
              <h3>
                <User className="icon" />
                Parlons de votre projet
              </h3>
              <p className="description">
                Que vous soyez une entreprise, une startup ou un particulier, je suis disponible 
                pour discuter de vos besoins en développement web. Ensemble, nous pouvons créer 
                quelque chose d'exceptionnel !
              </p>
              
              <div className="contact-details">
                <div className="contact-item email">
                  <div className="icon-container">
                    <Mail className="icon" />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:kebcihocine94@gmail.com">
                      kebcihocine94@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item phone">
                  <div className="icon-container">
                    <Phone className="icon" />
                  </div>
                  <div>
                    <h4>Téléphone</h4>
                    <a href="tel:+33123456789">
                      +33 6 03 54 35 24
                    </a>
                  </div>
                </div>
                
                <div className="contact-item location">
                  <div className="icon-container">
                    <MapPin className="icon" />
                  </div>
                  <div>
                    <h4>Localisation</h4>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=06+Avenue+Salvador+Allende,+69100+Villeurbanne,+France"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      06 Avenue Salvador Allende, 69100 Villeurbanne, France
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card social">
              <h4>
                <MessageSquare className="icon" />
                Réseaux Sociaux
              </h4>
              <div className="social-links">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:kebcihocine94@gmail.com", label: "Email" }
                ].map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : "_blank"}
                    rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                    className="social-link"
                    aria-label={label}
                  >
                    <Icon className="social-icon" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="right-column">
            <div className="card contact-form">
              <h3>
                <Send className="icon" />
                Envoyez-moi un message
              </h3>
              
              {isSubmitted && (
                <div className="success-message">
                  <CheckCircle className="icon" />
                  <p>
                    Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <label htmlFor="name">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou posez votre question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="icon" />
                      Envoyer le message
                      <Sparkles className="sparkle" />
                    </>
                  )}
                </button>
              </form>

              <div className="response-time">
                <div className="indicator"></div>
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