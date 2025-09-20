// Importation de React et des hooks nécessaires
import React, { useState, useEffect } from 'react';
// Importation des icônes Lucide React pour l'interface utilisateur
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Home,
  FolderOpen,
  User,
  MessageCircle,
} from 'lucide-react';
// Importation des contextes pour la gestion du thème et de la navigation
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '../contexts/NavigationContext';
// Importation des styles spécifiques au composant Header
import '../styles/Header.scss';

/**
 * Composant Header - En-tête de navigation du portfolio
 * Gère la navigation, le thème, les réseaux sociaux et le menu mobile
 * @returns {JSX.Element} L'en-tête de navigation complet
 */
const Header = () => {
  // État pour contrôler l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // État pour détecter si la page a été scrollée (pour changer l'apparence du header)
  const [isScrolled, setIsScrolled] = useState(false);
  // Récupération des fonctions et états du contexte thème
  const { isDark, toggleTheme } = useTheme();
  // Récupération des fonctions et états du contexte navigation
  const { currentPage, navigateTo } = useNavigation();

  /**
   * Effet pour détecter le scroll et changer l'apparence du header
   * Ajoute une ombre et change le style quand l'utilisateur scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Ajout de l'écouteur d'événement de scroll
    window.addEventListener('scroll', handleScroll);
    // Nettoyage : suppression de l'écouteur lors du démontage
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Fonction pour faire défiler vers une section spécifique
   * Gère la navigation vers la page d'accueil si nécessaire avant le scroll
   * @param {string} sectionId - L'ID de la section vers laquelle faire défiler
   */
  const scrollToSection = sectionId => {
    if (currentPage !== 'home') {
      // Si on n'est pas sur la page d'accueil, naviguer d'abord vers home
      navigateTo('home');
      // Attendre que la navigation soit terminée avant de faire défiler
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Si on est déjà sur la page d'accueil, faire défiler directement
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    // Fermer le menu mobile après navigation
    setIsMenuOpen(false);
  };

  /**
   * Fonction pour gérer la navigation vers une page spécifique
   * @param {string} page - Le nom de la page vers laquelle naviguer
   */
  const handleNavigation = page => {
    navigateTo(page);
    // Fermer le menu mobile après navigation
    setIsMenuOpen(false);
  };

  // Détermine si le header doit avoir un style clair (avec fond) ou transparent
  const isHeaderLight =
    isScrolled || currentPage === 'projects' || currentPage === 'project-detail';

  // Classes CSS communes pour tous les boutons de navigation
  const navButtonClasses = `font-medium transition-none flex items-center gap-2 text-responsive-sm
    hover:text-blue-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent`;

  // Configuration des liens de navigation avec leurs icônes et actions
  const navLinks = [
    { id: 'home', label: 'Accueil', icon: Home, action: () => handleNavigation('home') },
    { id: 'a-propos', label: 'À propos', icon: User, action: () => scrollToSection('a-propos') },
    {
      id: 'projects',
      label: 'Projets',
      icon: FolderOpen,
      action: () => handleNavigation('projects'),
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: MessageCircle,
      action: () => scrollToSection('contact'),
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-creative shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto spacing-responsive-xs">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="cursor-pointer group flex items-center flex-shrink-0"
            onClick={() => handleNavigation('home')}
          >
            <img
              src="/logo_portfolio-hocine.svg"
              alt="Logo"
              className={`h-14 w-auto transition-transform duration-300 group-hover:scale-105 ${
                !isDark ? 'logo-invert' : ''
              }`}
              style={{ maxHeight: '64px' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4" role="navigation" aria-label="Menu principal">
            {navLinks.map(({ id, label, icon: Icon, action }) => (
              <button
                key={id}
                onClick={action}
                className={`${navButtonClasses} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${
                  isHeaderLight ? 'text-gray-700 dark:text-white' : 'text-white'
                }`}
                aria-current={currentPage === id ? 'page' : undefined}
              >
                <Icon size={18} className={currentPage === id ? 'header-btn-icon-active' : ''} aria-hidden="true" />
                <span className={currentPage === id ? 'header-btn-active' : ''}>{label}</span>
              </button>
            ))}
          </nav>

          {/* Theme Toggle, Social Links */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-110 focus:outline-none focus:ring-0 ${
                isHeaderLight ? 'text-gray-700 dark:text-white' : 'text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {[
              {
                icon: Github,
                href: 'https://github.com/Hocine-kbc',
                label: 'GitHub',
                hoverColor: 'hover:bg-gray-800', // Noir GitHub
              },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/hocine-kebci-8a1379375/',
                label: 'LinkedIn',
                hoverColor: 'hover:bg-[#0A66C2]', // Bleu LinkedIn
              },
              {
                icon: Mail,
                href: 'mailto:kebcihocine94@gmail.com',
                label: 'Email',
                hoverColor: 'hover:bg-emerald-600', // Vert pour l'email
              },
            ].map(({ icon: Icon, href, label, hoverColor }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={`p-2 rounded-lg transition-all duration-300 ${hoverColor} hover:text-white transform hover:scale-110 focus:outline-none focus:ring-0 ${
                  isHeaderLight ? 'text-gray-700 dark:text-white' : 'text-white'
                }`}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                isHeaderLight ? 'text-gray-700 dark:text-white' : 'text-white'
              }`}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            role="navigation"
            aria-label="Menu de navigation mobile"
          >
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map(({ id, label, icon: Icon, action }) => (
                <button
                  key={id}
                  onClick={action}
                  className={`text-left py-2 transition-colors flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg px-2 ${
                    currentPage === id
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 dark:text-white hover:text-blue-600'
                  }`}
                  aria-current={currentPage === id ? 'page' : undefined}
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
