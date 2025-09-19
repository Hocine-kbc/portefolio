import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import { useLocation } from 'react-router-dom';

const AppContent = () => {
  const { currentPage } = useNavigation();
  const location = useLocation();

  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = 'Hocine kebci - Développeur Web Full-Stack | Portfolio';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Portfolio d\'Hocine kebci, développeur web full-stack spécialisé en React, Node.js et technologies modernes. Découvrez mes projets et compétences.';
      document.head.appendChild(meta);
    }

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

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
            <Hero key={location.pathname} />
            <About />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;