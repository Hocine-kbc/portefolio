import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Home, FolderOpen, User, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '../contexts/NavigationContext';

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
            className="font-bold text-2xl cursor-pointer group"
            className="font-bold text-responsive-lg cursor-pointer group"
            onClick={() => handleNavigation('home')}
          >
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            } group-hover:text-slate-600`}>
              Hocine
            </span>
            <span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent font-semibold">.dev</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => handleNavigation('home')}
              className={`font-medium transition-all duration-300 hover:text-blue-600 flex items-center gap-2 text-responsive-sm ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              } ${currentPage === 'home' ? 'text-slate-600' : ''}`}
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Accueil
            </button>
            
            <button
              onClick={() => scrollToSection('a-propos')}
              className={`font-medium transition-all duration-300 hover:text-blue-600 flex items-center gap-2 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
            >
              <User size={18} />
              À propos
            </button>
            
            <button
              onClick={() => handleNavigation('projects')}
              className={`font-medium transition-all duration-300 hover:text-blue-600 flex items-center gap-2 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              } ${currentPage === 'projects' ? 'text-slate-600' : ''}`}
            >
              <FolderOpen size={18} />
              Projets
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-all duration-300 hover:text-blue-600 flex items-center gap-2 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
            >
              <MessageCircle size={18} />
              Contact
            </button>
          </div>

          {/* Theme Toggle & Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
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
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
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
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
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
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-600">
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
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;