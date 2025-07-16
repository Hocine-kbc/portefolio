import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Code, Sparkles } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import '../styles/Hero.scss';
import heroBg from '../images/heroimage.png';
import profilePic from '../images/profile.jpg'; // Ajoute ta photo dans /images/

const Hero = () => {
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
    <section
      id="accueil"
      className="hero-creative relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
            backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-10" aria-hidden="true"></div>

      <div className="container mx-auto px-6 relative z-20 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Photo de profil à gauche */}
          <div className="profile-pic-wrapper relative flex flex-col items-center">
            <img src={profilePic} alt="Hocine" className="profile-pic" />
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] text-center text-white text-base font-semibold drop-shadow bg-black/50 pb-2 pt-1 rounded-b-full"
              style={{ borderBottomLeftRadius: '9999px', borderBottomRightRadius: '9999px' }}
            >
              Hocine KEBCI
            </span>
          </div>

          {/* Textes et boutons à droite */}
          <div className="text-center lg:text-center max-w-2xl mt-20">
            <h1 className="text-responsive-4xl font-light text-white animate-fadeInUp tracking-wide leading-tight">
              <span className="font-light">Pixel par pixel,</span>
              <br />
              <span className="font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
                je façonne le web
              </span>
            </h1>

            <h2 className="text-responsive-lg text-slate-200 font-light tracking-wide h-16 mb-6 flex items-center justify-center lg:justify-center">
              {text}
              <span className="animate-pulse text-slate-300">|</span>
            </h2>

            <p className="text-responsive-base text-slate-200/90 mb-10 leading-relaxed font-light">
              Développeur web passionné, je transforme vos idées en expériences numériques
              <span className="text-slate-100"> exceptionnelles</span> avec créativité et expertise
              technique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-14 justify-center lg:justify-center items-center mb-12">
              <button onClick={() => navigateTo('projects')} className="btn-primary group">
                <span className="flex items-center gap-3">
                  <Code size={20} />
                  Découvrir mes projets
                  <Sparkles size={16} className="group-hover:animate-rotate" />
                </span>
              </button>

              <a
                href="src/public/CV_2025-07-16_KEBCI_HOCINE.pdf"
                download
                className="btn-primary group"
              >
                <span className="flex items-center gap-3">
                  <Download size={20} />
                  Télécharger CV
                  <Sparkles size={16} className="group-hover:animate-rotate" />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Bouton Découvrir plus, centré sur toute la largeur */}
        <button
          onClick={() => scrollToSection('a-propos')}
          className="discover-more-btn block mx-auto mt-8 animate-bounce text-white/80 hover:text-white transition-colors group"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Découvrir plus</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
            <ArrowDown size={20} className="group-hover:animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
