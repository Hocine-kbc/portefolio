import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Code, Sparkles } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import '../styles/Hero.scss';
import heroBg from '../images/heroimage.png';
import profilePic from '../images/profile.jpg';

const Hero = () => {
  // État pour le texte animé
  const [text, setText] = useState('');
  // État pour savoir si on efface le texte
  const [isDeleting, setIsDeleting] = useState(false);
  // Compteur pour boucler sur les mots
  const [loopNum, setLoopNum] = useState(0);
  // Vitesse d'écriture
  const [typingSpeed, setTypingSpeed] = useState(150);
  // Hook de navigation contextuelle
  const { navigateTo } = useNavigation();

  // Liste des mots à afficher en animation
  const words = [
    'Développeur Full-Stack',
    "Créateur d'Interfaces",
    'Passionné de Code',
    'Innovateur Web',
  ];

  // Effet pour gérer l'animation du texte tapé
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length; // Mot courant
      const fullText = words[current]; // Texte complet du mot courant

      // Ajoute ou retire une lettre selon l'état
      setText(
        isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      );

      // Vitesse plus rapide pour effacer
      setTypingSpeed(isDeleting ? 30 : 150);

      // Si le mot est entièrement écrit, on attend puis on efface
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Passe au mot suivant
      }
    };

    // Lance le timer pour l'animation
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer); // Nettoie le timer
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  // Fonction pour scroller vers une section donnée
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Section principale avec image de fond
    <section
      id="accueil"
      className="hero-creative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay sombre pour lisibilité */}
      
      <div className="hero-overlay" aria-hidden="true"></div>

      {/* Conteneur principal */}
      <div className="hero-container">
        {/* Flex principal pour aligner la photo et le texte */}
        <div className="hero-flex">
          {/* Wrapper pour la photo de profil (permet de la déplacer facilement) */}
          <div className="profile-pic-wrapper">
            {/* Image de profil */}
            <img src={profilePic} alt="Hocine" className="profile-pic" />
            {/* Nom sous la photo */}
            <span className="profile-name">
              Hocine KEBCI
            </span>
          </div>

          {/* Bloc de texte et boutons */}
          <div className="hero-text-block">
            {/* Titre principal */}
            <h1 className="hero-title">
              <span className="font-light">Pixel par pixel,</span>
              <br />
              <span className="hero-title-bold">
                je façonne le web
              </span>
            </h1>

           

            {/* Description */}
            <p className="hero-desc">
              Développeur web passionné, je transforme vos idées en expériences numériques
              <span className="desc-highlight"> exceptionnelles</span> avec créativité et expertise
              technique.
            </p>
            
             {/* Sous-titre animé */}
             <h2 className="hero-typed">
              {text}
              <span className="typed-cursor">|</span>
            </h2>

            {/* Boutons d'action */}
            <div className="hero-btns">
              {/* Bouton pour naviguer vers les projets */}
              <button onClick={() => navigateTo('projects')} className="btn-primary">
                <span className="btn-content">
                  <Code size={20} />
                  Découvrir mes projets
                  <Sparkles size={16} className="rotate-on-hover" />
                </span>
              </button>

              {/* Bouton pour télécharger le CV */}
              <a
                href="src/public/CV_2025-07-16_KEBCI_HOCINE.pdf"
                download
                className="btn-primary"
              >
                <span className="btn-content">
                  <Download size={20} />
                  Télécharger CV
                  <Sparkles size={16} className="rotate-on-hover" />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Bouton pour scroller vers la section "À propos" */}
        <button
          onClick={() => scrollToSection('a-propos')}
          className="discover-more-btn"
        >
          <div className="discover-more-inner">
            <span className="discover-more-label">Découvrir plus</span>
            <div className="discover-more-border">
              <div className="discover-more-dot"></div>
            </div>
            <ArrowDown size={20} className="arrow-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
