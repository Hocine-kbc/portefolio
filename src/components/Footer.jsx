import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Code, Sparkles } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import logo from '../images/logo_portfolio-hocine.svg';
import '../styles/footer.scss'; // <- Nouveau

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { navigateTo } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <img src={logo} alt="Logo" className="footer__logo" />
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
