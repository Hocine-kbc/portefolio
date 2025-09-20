// Importation des dépendances React et des hooks nécessaires
import React, { useEffect } from 'react';
// Importation des contextes pour la gestion du thème et de la navigation
import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
// Importation des composants de l'application
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
// Importation de React Router pour la gestion des routes
import { useLocation } from 'react-router-dom';

/**
 * Composant principal de l'application qui gère le contenu et la navigation
 * Utilise les contextes Theme et Navigation pour la gestion de l'état global
 */
const AppContent = () => {
  // Récupération de la page courante depuis le contexte de navigation
  const { currentPage } = useNavigation();
  // Hook React Router pour obtenir l'emplacement actuel
  const location = useLocation();

  /**
   * Effet de montage pour initialiser l'application
   * Configure le SEO, les animations et les comportements globaux
   */
  useEffect(() => {
    // Configuration du titre de la page pour le SEO
    document.title = 'Hocine kebci - Développeur Web Full-Stack | Portfolio';
    
    // Ajout de la meta description pour le SEO si elle n'existe pas
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Portfolio d\'Hocine kebci, développeur web full-stack spécialisé en React, Node.js et technologies modernes. Découvrez mes projets et compétences.';
      document.head.appendChild(meta);
    }

    // Configuration du défilement fluide pour toute l'application
    document.documentElement.style.scrollBehavior = 'smooth';

    // Configuration de l'Intersection Observer pour les animations au scroll
    const observerOptions = {
      threshold: 0.1, // Déclenche l'animation quand 10% de l'élément est visible
      rootMargin: '0px 0px -50px 0px' // Marge pour déclencher l'animation plus tôt
    };

    // Création de l'observer pour les animations de révélation au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    // Observation de toutes les sections pour les animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Nettoyage : arrêt de l'observation lors du démontage
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  /**
   * Fonction de rendu conditionnel des pages selon la navigation
   * @returns {JSX.Element} Le composant de page correspondant à l'état de navigation
   */
  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage />;
      case 'project-detail':
        return <ProjectDetail />;
      case 'home':
      default:
        return (
          <main>
            {/* Hero section avec clé basée sur l'URL pour forcer le re-render */}
            <Hero key={location.pathname} />
            {/* Section À propos */}
            <About />
            {/* Section Contact */}
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Lien d'évitement pour l'accessibilité clavier */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      {/* En-tête de l'application */}
      <Header />
      {/* Contenu principal avec ID pour l'accessibilité */}
      <main id="main-content">
        {renderPage()}
      </main>
      {/* Pied de page */}
      <Footer />
    </div>
  );
};

/**
 * Composant racine de l'application
 * Fournit les contextes nécessaires à toute l'application
 * @returns {JSX.Element} L'application avec ses providers
 */
function App() {
  return (
    // Provider pour la gestion du thème (clair/sombre)
    <ThemeProvider>
      {/* Provider pour la gestion de la navigation entre pages */}
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

// Export par défaut du composant App
export default App;