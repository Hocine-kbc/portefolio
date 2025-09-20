// Importation de React et des hooks nécessaires pour la gestion du contexte
import React, { createContext, useContext, useState, useEffect } from 'react';

// Création du contexte pour la gestion du thème
const ThemeContext = createContext(undefined);

/**
 * Provider pour la gestion du thème (clair/sombre)
 * Gère l'état du thème et la persistance dans le localStorage
 * @param {Object} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Les composants enfants
 * @returns {JSX.Element} Le provider du contexte thème
 */
export const ThemeProvider = ({ children }) => {
  // État pour gérer le mode sombre/clair
  const [isDark, setIsDark] = useState(false);

  /**
   * Effet pour initialiser le thème depuis le localStorage
   * Restaure le thème sauvegardé au chargement de l'application
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  /**
   * Fonction pour basculer entre le thème clair et sombre
   * Met à jour l'état, la classe CSS et le localStorage
   */
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      // Activation du mode sombre
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Activation du mode clair
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook personnalisé pour utiliser le contexte thème
 * @returns {Object} L'objet contenant isDark et toggleTheme
 * @throws {Error} Si utilisé en dehors d'un ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};