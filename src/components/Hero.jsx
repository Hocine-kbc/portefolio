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
      <div className="creative-blob" style={{ width: '100px', height: '100px', top: '10%', left: '10%' }}></div>
      <div className="creative-blob" style={{ width: '70px', height: '70px', top: '60%', right: '10%' }}></div>
      
      {/* Floating Elements */}
      {/* Blobs et éléments flottants réduits pour compacité */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto spacing-responsive-md" style={{ marginTop: '3rem' }}>
          {/* Main Content */}
          <div className="mb-4">
            <h1 className="text-responsive-3xl font-light text-white mb-4 animate-fadeInUp tracking-wide">
              <span className="font-light">Salut, je suis</span>
              <br />
              <span className="font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">Hocine</span>
            </h1>
            <div className="h-12 flex items-center justify-center mb-4">
              <h2 className="text-responsive-lg text-slate-200 font-light tracking-wide">
                {text}
                <span className="animate-pulse text-slate-300">|</span>
              </h2>
            </div>
          </div>
          
          <p className="text-responsive-base text-slate-200/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp font-light" style={{ animationDelay: '0.2s' }}>
            Développeur web passionné, je transforme vos idées en expériences numériques 
            <span className="text-slate-100"> exceptionnelles</span> avec créativité et expertise technique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => navigateTo('projects')}
              className="btn-primary group"
            >
              <span className="flex items-center gap-3">
                <Code size={24} />
                Découvrir mes projets
                <Sparkles size={20} className="group-hover:animate-rotate" />
              </span>
            </button>
            
            <a
              href="/cv-Hocine-kebci.pdf"
              download
              className="btn-secondary group"
            >
              <span className="flex items-center gap-3">
                <Download size={24} />
                Télécharger CV
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-700" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-600" },
              { icon: Mail, href: "mailto:contact@Hocine-dev.fr", label: "Email", color: "hover:bg-green-600" }
            ].map(({ icon: Icon, href, label, color }, index) => (
              <a 
                key={index}
                href={href} 
                target={href.startsWith('mailto') ? undefined : "_blank"}
                rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className={`glass p-4 rounded-xl ${color} transform hover:scale-110 transition-all duration-300 text-white group`}
                aria-label={label}
              >
                <Icon size={24} className="group-hover:animate-pulse" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator supprimé pour compacité */}
        </div>
      </div>
    </section>
  );
};

export default Hero;