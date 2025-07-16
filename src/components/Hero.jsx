import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Code, Palette, Zap, Sparkles } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { navigateTo } = useNavigation();

  const words = ['Développeur Full-Stack', 'Créateur d\'Interfaces', 'Passionné de Code', 'Innovateur Web'];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="hero-creative flex items-center justify-center relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="creative-blob"></div>
      <div className="creative-blob"></div>
      <div className="creative-blob"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-pulse-slow"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Code className="w-12 h-12 text-white/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Palette className="w-10 h-10 text-white/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '3s' }}>
        <Zap className="w-14 h-14 text-white/20" />
      </div>
      <div className="absolute top-1/2 left-5 animate-bounce-slow">
        <Sparkles className="w-8 h-8 text-white/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto spacing-responsive-lg">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-responsive-4xl font-light text-white mb-6 animate-fadeInUp tracking-wide">
              <span className="font-light">Salut, je suis</span>
              <br />
              <span className="font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">Hocine</span>
            </h1>
            <div className="h-16 flex items-center justify-center mb-8">
              <h2 className="text-responsive-lg text-slate-200 font-light tracking-wide">
                {text}
                <span className="animate-pulse text-slate-300">|</span>
              </h2>
            </div>
          </div>
          
          <p className="text-responsive-base text-slate-200/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp font-light" style={{ animationDelay: '0.2s' }}>
            Développeur web passionné, je transforme vos idées en expériences numériques 
            <span className="text-slate-100">exceptionnelles</span> avec créativité et expertise technique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-14 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => navigateTo('projects')}
              className="btn-primary group"
            >
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


          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('a-propos')}
            className="animate-bounce text-white/80 hover:text-white transition-colors group animate-fadeInUp"
            style={{ animationDelay: '0.8s' }}
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
      </div>
    </section>
  );
};

export default Hero;