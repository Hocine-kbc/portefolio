import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Code, Sparkles } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import '../styles/Hero.scss';
import profilePic from '../images/profile.jpg';

const Hero = () => {
  // État pour le texte animé
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { navigateTo } = useNavigation();

  const words = [
    'Développeur Full-Stack',
    "Créateur d'Interfaces",
    'Passionné de Code',
    'Innovateur Web',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

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
            <img src={profilePic} alt="Hocine" className="profile-pic" />
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
            <h2 className="hero-typed">
              {text}
              <span className="typed-cursor">|</span>
            </h2>
            <div className="hero-btns">
              <button onClick={() => navigateTo('projects')} className="btn-primary">
                <span className="btn-content">
                  <Code size={20} />
                  Découvrir mes projets
                  <Sparkles size={16} className="rotate-on-hover" />
                </span>
              </button>
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
