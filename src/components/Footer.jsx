import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Code, Sparkles } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { navigateTo } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    navigateTo('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 animate-float">
        <Sparkles className="w-8 h-8 text-blue-400/30" />
      </div>
      <div className="absolute bottom-10 left-10 animate-float" style={{ animationDelay: '2s' }}>
        <Code className="w-6 h-6 text-purple-400/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Code className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">
                Hocine<span className="text-gradient">.dev</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Développeur web passionné, créateur d'expériences numériques modernes 
              et performantes pour l'ère digitale.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-6 text-white uppercase tracking-wider">
              Navigation
            </h4>
            <div className="space-y-3">
              {[
                { id: 'accueil', label: 'Accueil', action: () => navigateTo('home') },
                { id: 'a-propos', label: 'À propos', action: () => scrollToSection('a-propos') },
                { id: 'projets', label: 'Projets', action: () => navigateTo('projects') },
                { id: 'contact', label: 'Contact', action: () => scrollToSection('contact') }
              ].map(({ id, label, action }) => (
                <button
                  key={id}
                  onClick={action}
                  className="block w-full text-gray-400 hover:text-blue-400 transition-colors hover:translate-x-2 transform duration-300"
                >
                  <span className="text-blue-400 mr-2">&gt;</span>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-6 text-white uppercase tracking-wider">
              Suivez-moi
            </h4>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              {[
                { icon: Github, href: "https://github.com", color: "hover:bg-gray-700" },
                { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-600" },
                { icon: Mail, href: "mailto:contact@Hocine-dev.fr", color: "hover:bg-green-600" }
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : "_blank"}
                  rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className={`p-3 rounded-lg ${color} transform hover:scale-110 transition-all duration-300 text-gray-400 hover:text-white`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors uppercase tracking-wider flex items-center gap-2 mx-auto md:ml-auto md:mr-0"
            >
              <ArrowUp size={16} />
              Retour en haut
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2 mb-2">
              © {currentYear} Hocine kebci. Développé avec
              <Heart size={16} className="text-red-500 animate-pulse" />
              et beaucoup de café
              <span className="text-yellow-400">☕</span>
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Site en ligne
              </span>
              <span>|</span>
              <span>Version 2.0.{currentYear}</span>
              <span>|</span>
              <span>Fait avec React & Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;