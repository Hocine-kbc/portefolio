import React, { useState, useEffect } from 'react';
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
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '../contexts/NavigationContext';
import logo from '../images/logo_portfolio-hocine.svg';
import '../styles/Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { currentPage, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = sectionId => {
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = page => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  const isHeaderLight =
    isScrolled || currentPage === 'projects' || currentPage === 'project-detail';

  // 1. Créer une constante pour les classes communes des boutons de navigation
  const navButtonClasses = `font-medium transition-none flex items-center gap-2 text-responsive-sm
    hover:text-blue-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent`;

  // 2. Créer un tableau pour les liens de navigation
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
              src={logo}
              alt="Logo"
              className={`h-14 w-auto transition-transform duration-300 group-hover:scale-105 ${
                !isDark ? 'logo-invert' : ''
              }`}
              style={{ maxHeight: '64px' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map(({ id, label, icon: Icon, action }) => (
              <button
                key={id}
                onClick={action}
                className={`${navButtonClasses} ${
                  isHeaderLight ? 'text-gray-700 dark:text-white' : 'text-white'
                }`}
              >
                <Icon size={18} className={currentPage === id ? 'header-btn-icon-active' : ''} />
                <span className={currentPage === id ? 'header-btn-active' : ''}>{label}</span>
              </button>
            ))}
          </div>

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
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map(({ id, label, icon: Icon, action }) => (
                <button
                  key={id}
                  onClick={action}
                  className={`text-left py-2 transition-colors flex items-center gap-3 ${
                    currentPage === id
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 dark:text-white hover:text-blue-600'
                  }`}
                >
                  <Icon size={18} />
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
