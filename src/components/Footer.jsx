// Importation de React
import React from 'react';
// Importation des icônes Lucide React pour l'interface utilisateur
import { Heart, Github, Linkedin, Mail, ArrowUp, Code, Sparkles } from 'lucide-react';
// Importation du contexte de navigation pour la gestion des pages
import { useNavigation } from '../contexts/NavigationContext';
// Importation des styles spécifiques au composant Footer
import '../styles/Footer.scss';

/**
 * Composant Footer - Pied de page du portfolio
 * Affiche les informations de contact, la navigation et les réseaux sociaux
 * @returns {JSX.Element} Le pied de page complet
 */
const Footer = () => {
  // Récupération de l'année courante pour le copyright
  const currentYear = new Date().getFullYear();
  // Récupération de la fonction de navigation depuis le contexte
  const { navigateTo } = useNavigation();

  /**
   * Fonction pour faire défiler vers le haut de la page
   * Utilisée par le bouton "Retour en haut"
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Fonction pour faire défiler vers une section spécifique
   * Navigue d'abord vers la page d'accueil puis vers la section
   * @param {string} sectionId - L'ID de la section vers laquelle faire défiler
   */
  const scrollToSection = sectionId => {
    navigateTo('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer__bg-icons">
        <Sparkles className="footer__icon-sparkles" />
        <Code className="footer__icon-code" />
      </div>

      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo-group" onClick={() => navigateTo('home')}>
              <img src="/logo_portfolio-hocine.svg" alt="Logo" className="footer__logo" />
            </div>
            <p className="footer__description">
              Développeur web passionné, créateur d'expériences numériques modernes et performantes
              pour l'ère digitale.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__nav">
            <h4 className="footer__title">Navigation</h4>
            <div className="footer__links">
              {[
                { id: 'accueil', label: 'Accueil', action: () => navigateTo('home') },
                { id: 'a-propos', label: 'À propos', action: () => scrollToSection('a-propos') },
                { id: 'projets', label: 'Projets', action: () => navigateTo('projects') },
                { id: 'contact', label: 'Contact', action: () => scrollToSection('contact') },
              ].map(({ id, label, action }) => (
                <button key={id} onClick={action} className="footer__link">
                  <span className="footer__link-arrow">&gt;</span>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="footer__socials">
            <h4 className="footer__title">Suivez-moi</h4>
            <div className="footer__icons">
              {[
                { icon: Github, href: 'https://github.com', class: 'github' },
                { icon: Linkedin, href: 'https://linkedin.com', class: 'linkedin' },
                { icon: Mail, href: 'mailto:contact@Hocine-dev.fr', class: 'mail' },
              ].map(({ icon: Icon, href, class: color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer__icon ${color}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <button onClick={scrollToTop} className="footer__back-top-btn">
              <ArrowUp size={18} className="footer__back-top-icon" />
              Retour en haut
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__credit">
            © {currentYear} Hocine kebci. Développé avec <Heart size={16} className="heart" /> et
            beaucoup de café <span className="coffee">☕</span>
          </p>

          <div className="footer__meta">
            <span className="online">
              <span className="dot" /> Site en ligne
            </span>
            <span>|</span>
            <span>Version 2.0.{currentYear}</span>
            <span>|</span>
            <span>Fait avec React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
