// Importation de React et des hooks nécessaires
import React, { useEffect, useState } from 'react';
// Importation des icônes Lucide React pour l'interface utilisateur
import { ArrowDown, Download, Code, Sparkles } from 'lucide-react';
// Importation du contexte de navigation pour la gestion des pages
import { useNavigation } from '../contexts/NavigationContext';
// Importation des styles spécifiques au composant Hero
import '../styles/Hero.scss';

/**
 * Composant Hero - Section d'accueil principale du portfolio
 * Affiche une présentation avec animation de texte et boutons d'action
 * @returns {JSX.Element} La section Hero complète
 */
const Hero = () => {
  // États pour gérer l'animation de frappe du texte
  const [text, setText] = useState(''); // Texte actuellement affiché
  const [isDeleting, setIsDeleting] = useState(false); // Indique si on est en mode suppression
  const [loopNum, setLoopNum] = useState(0); // Numéro de la boucle d'animation
  const [typingSpeed, setTypingSpeed] = useState(150); // Vitesse de frappe en ms
  // Récupération de la fonction de navigation depuis le contexte
  const { navigateTo } = useNavigation();

  // Tableau des mots à afficher dans l'animation de frappe
  const words = [
    'Développeur Full-Stack',
    "Créateur d'Interfaces",
    'Passionné de Code',
    'Innovateur Web',
  ];

  /**
   * Effet pour gérer l'animation de frappe du texte
   * Simule une machine à écrire avec effet de suppression
   */
  useEffect(() => {
    const handleTyping = () => {
      // Calcul du mot actuel dans la boucle
      const current = loopNum % words.length;
      const fullText = words[current];

      // Mise à jour du texte affiché (ajout ou suppression de caractères)
      setText(
        isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      );
      // Ajustement de la vitesse (plus rapide en mode suppression)
      setTypingSpeed(isDeleting ? 30 : 150);

      // Logique de transition entre les modes
      if (!isDeleting && text === fullText) {
        // Pause avant de commencer la suppression
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        // Passage au mot suivant après suppression complète
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    // Programmation du prochain caractère
    const timer = setTimeout(handleTyping, typingSpeed);
    // Nettoyage du timer lors du démontage
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  /**
   * Fonction pour faire défiler vers une section spécifique
   * @param {string} sectionId - L'ID de la section vers laquelle faire défiler
   */
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="hero-creative">
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-container">
        <div className="hero-flex">
          <div className="profile-pic-wrapper">
            <img src="/azerty.jpeg" alt="Hocine" className="profile-pic" />
            <span className="profile-name">Hocine KEBCI</span>
          </div>
          <div className="hero-text-block">
            <h1 className="hero-title">
              <span className="font-light">Pixel par pixel,</span>
              <br />
              <span className="hero-title-bold">je façonne le web</span>
            </h1>
            <p className="hero-desc">
              Développeur web passionné, je transforme vos idées en expériences numériques
              <span className="desc-highlight"> exceptionnelles</span> avec créativité et expertise
              technique.
            </p>
            <p className="hero-typed" role="status" aria-live="polite">
              {text}
              <span className="typed-cursor" aria-hidden="true">|</span>
            </p>
            <div className="hero-btns">
              <button 
                onClick={() => navigateTo('projects')} 
                className="btn-primary"
                aria-label="Voir mes projets de développement web"
              >
                <span className="btn-content">
                  <Code size={20} aria-hidden="true" />
                  Découvrir mes projets
                  <Sparkles size={16} className="rotate-on-hover" aria-hidden="true" />
                </span>
              </button>
              <a 
                href="/CV_2025-07-16_KEBCI_HOCINE.pdf" 
                download 
                className="btn-primary"
                aria-label="Télécharger le CV de Hocine KEBCI au format PDF"
              >
                <span className="btn-content">
                  <Download size={20} aria-hidden="true" />
                  Télécharger CV
                  <Sparkles size={16} className="rotate-on-hover" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('a-propos')} 
          className="discover-more-btn"
          aria-label="Faire défiler vers la section À propos"
        >
          <div className="discover-more-inner">
            <span className="discover-more-label">Découvrir plus</span>
            <div className="discover-more-border" aria-hidden="true">
              <div className="discover-more-dot"></div>
            </div>
            <ArrowDown size={20} className="arrow-bounce" aria-hidden="true" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
