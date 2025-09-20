// Importation de React et des hooks nécessaires pour la gestion du contexte
import React, { createContext, useContext, useState } from 'react';

// Création du contexte pour la gestion de la navigation
const NavigationContext = createContext(undefined);

/**
 * Provider pour la gestion de la navigation entre les pages
 * Gère l'état de la page courante et du projet sélectionné
 * @param {Object} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Les composants enfants
 * @returns {JSX.Element} Le provider du contexte navigation
 */
export const NavigationProvider = ({ children }) => {
  // État pour gérer la page courante (home, projects, project-detail)
  const [currentPage, setCurrentPage] = useState('home');
  // État pour gérer l'ID du projet sélectionné pour la page de détail
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  /**
   * Fonction pour naviguer vers une page spécifique
   * @param {string} page - Le nom de la page vers laquelle naviguer
   * @param {string|null} projectId - L'ID du projet (optionnel, pour la page de détail)
   */
  const navigateTo = (page, projectId) => {
    setCurrentPage(page);
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    // Scroll vers le haut de la page avec animation fluide
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, selectedProjectId, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

/**
 * Hook personnalisé pour utiliser le contexte navigation
 * @returns {Object} L'objet contenant currentPage, selectedProjectId et navigateTo
 * @throws {Error} Si utilisé en dehors d'un NavigationProvider
 */
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};