import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Home, FolderOpen, User, MessageCircle } from 'lucide-react';
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

  const scrollToSection = (sectionId) => {
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

  const handleNavigation = (page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'header-creative shadow-lg' 
        : 'bg-transparent'
    }`}>
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
              className={`h-14 w-auto transition-transform duration-300 group-hover:scale-105 ${!isDark ? 'logo-invert' : ''}`}
              style={{ maxHeight: '64px' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => handleNavigation('home')}
              className={`font-medium transition-all duration-300 flex items-center gap-2 text-responsive-sm
                ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}
                hover:text-blue-700
                px-4 py-2 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent`}
            >
              <Home className={`w-4 h-4 sm:w-5 sm:h-5 ${currentPage === 'home' ? 'header-btn-icon-active' : ''}`} />
              <span className={currentPage === 'home' ? 'header-btn-active' : ''}>Accueil</span>
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className={`font-medium transition-all duration-300 flex items-center gap-2 text-responsive-sm
                ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}
                hover:text-blue-700
                px-4 py-2 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent`}
            >
              <User size={18} className={currentPage === 'about' ? 'header-btn-icon-active' : ''} />
              <span className={currentPage === 'about' ? 'header-btn-active' : ''}>À propos</span>
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className={`font-medium transition-all duration-300 flex items-center gap-2 text-responsive-sm
                ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}
                hover:text-blue-700
                px-4 py-2 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent`}
            >
              <FolderOpen size={18} className={currentPage === 'projects' ? 'header-btn-icon-active' : ''} />
              <span className={currentPage === 'projects' ? 'header-btn-active' : ''}>Projets</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-all duration-300 flex items-center gap-2 text-responsive-sm
                ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}
                hover:text-blue-700
                px-4 py-2 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent`}
            >
              <MessageCircle size={18} className={currentPage === 'contact' ? 'header-btn-icon-active' : ''} />
              <span className={currentPage === 'contact' ? 'header-btn-active' : ''}>Contact</span>
            </button>
          </div>

          {/* Theme Toggle, Social Links */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-110 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contact@Hocine-dev.fr", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith('mailto') ? undefined : "_blank"}
                rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className={`p-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-110 ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
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
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contact@Hocine-dev.fr", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith('mailto') ? undefined : "_blank"}
                rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className={`p-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-110 ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
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
              <button
                onClick={() => handleNavigation('home')}
                className={`text-left py-2 transition-colors flex items-center gap-3 ${
                  currentPage === 'home' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                <Home size={18} />
                Accueil
              </button>
              
              <button
                onClick={() => scrollToSection('a-propos')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors text-left py-2 flex items-center gap-3"
              >
                <User size={18} />
                À propos
              </button>
              
              <button
                onClick={() => handleNavigation('projects')}
                className={`text-left py-2 transition-colors flex items-center gap-3 ${
                  currentPage === 'projects' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                <FolderOpen size={18} />
                Projets
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors text-left py-2 flex items-center gap-3"
              >
                <MessageCircle size={18} />
                Contact
              </button>
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;