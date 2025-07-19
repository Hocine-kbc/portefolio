import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { Code, Laptop, Server, Database, GitBranch, Palette, Award, Download, Zap, Sparkles, Target, Heart } from 'lucide-react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiGit, SiGithub, SiFigma, SiPostman, SiTrello, SiNotion, SiExpress, SiJsonwebtokens } from 'react-icons/si';
import { FaLock, FaFileUpload, FaCog, FaDatabase } from 'react-icons/fa';
import '../styles/About.scss';

const About = () => {
  const skills = [
    // Développement Frontend
    { name: 'HTML5 / CSS3 / SCSS', level: 'Expert', category: 'Frontend', icon: <><SiHtml5 style={{color:'#e34c26'}} /><SiCss3 style={{color:'#1572B6'}} /></> },
    { name: 'JavaScript', level: 'Intermédiaire', category: 'Frontend', icon: <SiJavascript style={{color:'#f7df1e'}} /> },
    { name: 'React', level: 'Avancé', category: 'Frontend', icon: <SiReact style={{color:'#61dafb'}} /> },
    { name: 'Intégration Figma ', level: 'Débutant', category: 'Frontend', icon: <SiFigma style={{color:'#f24e1e'}} /> },

    // Développement Backend
    { name: 'Node.js / Express ', level: 'Avancé', category: 'Backend', icon: <><SiNodedotjs style={{color:'#3c873a'}} /><SiExpress style={{color:'#888'}} /></> },
    { name: 'MongoDB / Mongoose', level: 'Intermédiaire', category: 'Backend', icon: <><SiMongodb style={{color:'#47A248'}} /><FaDatabase style={{color:'#f59e42'}} /></> },
    { name: 'Authentification JWT, bcrypt', level: 'Expert', category: 'Backend', icon: <><SiJsonwebtokens style={{color:'#a729f5'}} /><FaLock style={{color:'#888'}} /></> },

    // Outils & Méthodes
    { name: 'Git / GitHub (gestion de version)', level: 'Expert', category: 'Outils', icon: <><SiGit style={{color:'#f05032'}} /><SiGithub style={{color:'#fff'}} /></> },
    { name: 'Méthode Agile (Trello, Notion, Kanban)', level: 'Avancé', category: 'Outils', icon: <><SiTrello style={{color:'#0079bf'}} /><SiNotion style={{color:'#fff'}} /></> },
    { name: 'Postman (tests d’API), Multer & Sharp', level: 'Intermédiaire', category: 'Outils', icon: <><SiPostman style={{color:'#ff6c37'}} /><FaFileUpload style={{color:'#888'}} /><FaCog style={{color:'#47A248'}} /></> },
  ];

  const categories = [
    { name: 'Frontend', icon: Laptop, color: 'blue', gradient: 'gradient-primary' },
    { name: 'Backend', icon: Server, color: 'purple', gradient: 'gradient-secondary' },
    { name: 'Outils', icon: GitBranch, color: 'orange', gradient: 'gradient-accent' },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'level-expert';
      case 'Avancé': return 'level-advanced';
      case 'Intermédiaire': return 'level-intermediate';
      case 'Débutant': return 'level-beginner';
      default: return 'level-beginner';
    }
  };

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Expert': return 'level-width-full';
      case 'Avancé': return 'level-width-4-5';
      case 'Intermédiaire': return 'level-width-3-5';
      case 'Débutant': return 'level-width-2-5';
      default: return 'level-width-2-5';
    }
  };

  const getLevelPercent = (level) => {
    switch (level) {
      case 'Expert': return 100;
      case 'Avancé': return 80;
      case 'Intermédiaire': return 60;
      case 'Débutant': return 40;
      default: return 40;
    }
  };

  // Animation individuelle de chaque barre au scroll
  const skillRefs = useRef([]);
  const [animateBars, setAnimateBars] = useState(() => skills.map(() => false));
  useEffect(() => {
    const observers = skills.map((_, i) => {
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimateBars(prev => {
              const copy = [...prev];
              copy[i] = true;
              return copy;
            });
          } else {
            setAnimateBars(prev => {
              const copy = [...prev];
              copy[i] = false;
              return copy;
            });
          }
        },
        { threshold: 0.3 }
      );
    });
    skillRefs.current.forEach((ref, i) => {
      if (ref) observers[i].observe(ref);
    });
    return () => {
      observers.forEach((observer, i) => {
        if (skillRefs.current[i]) observer.unobserve(skillRefs.current[i]);
        observer.disconnect();
      });
    };
  }, [skills.length]);

  return (
    <section id="a-propos" className="about-section">
      <div className="decoration sparkle">
        <Sparkles className="sparkle-icon" />
      </div>
      <div className="decoration code">
        <Code className="code-icon" />
      </div>

      <div className="container">
        <div className="header">
          <h2>
            À propos de <span className="highlight">moi</span>
          </h2>
          <div className="divider"></div>
          <p>
            Développeur web motivé, récemment formé, avec une première expérience concrète à travers plusieurs projets web complets et modernes.
          </p>
        </div>

        <div className="grid">
          <div className="left-column">
            <div className="card journey">
              <h3>
                <Award className="icon" />
                Mon Parcours
              </h3>
              
              <div className="content">
                <div className="block formation">
                  <div className="block-header">
                    <div className="dot"></div>
                    <span>Formation</span>
                  </div>
                  <p>
                  Issu d’une formation d’ingénieur en Génie des Systèmes Automatisés, 
                  j’ai complété mon parcours par une spécialisation intensive en 
                  développement web chez OpenClassrooms. Cette double formation me permet 
                  d’allier rigueur d’ingénieur et agilité de développeur dans la
                   conception de solutions web modernes et performantes.
                  </p>
                </div>
                
                <div className="block specialization">
                  <div className="block-header">
                    <div className="dot"></div>
                    <span>Spécialisation</span>
                  </div>
                  <p>
                    Développeur full-stack passionné, je conçois des applications web complètes, robustes et évolutives, du front-end dynamique (React, Sass) au back-end structuré (Node.js, Express, MongoDB).
                  </p>
                  <ul className="specialisation-list">
                    <li>Intégration de maquettes responsives et pixel-perfect</li>
                    <li>Création et sécurisation d’API REST</li>
                    <li>Gestion des utilisateurs, des données et de l’authentification</li>
                    <li>Optimisation des performances, accessibilité et SEO</li>
                  </ul>
                  <p>
                    J’accorde une grande importance à la qualité du code, à la maintenabilité et à la satisfaction utilisateur.
                  </p>
                </div>
                
                <div className="block passion">
                  <div className="block-header">
                    <div className="dot"></div>
                    <span>Passion</span>
                  </div>
                  <p>
                  Toujours en veille technologique, je reste attentif aux évolutions du web pour 
                  enrichir mes compétences, adopter les meilleures pratiques et proposer des solutions 
                  innovantes, fiables et adaptées aux besoins métiers.
                  </p>
                </div>
              </div>
            </div>

            <div className="card philosophy">
              <h4>
                <Heart className="icon" />
                Ma Philosophie
              </h4>
              <div className="philosophy-content">
                <p className="quote">
                  "Le code propre n'est pas écrit en suivant un ensemble de règles. 
                  Vous savez que vous travaillez sur du code propre quand chaque routine 
                  que vous lisez est à peu près ce à quoi vous vous attendiez."
                </p>
                <div className="badges">
                  <div className="badge">
                    <Code className="badge-icon" />
                    <span>Code Clean</span>
                  </div>
                  <div className="badge">
                    <Zap className="badge-icon" />
                    <span>Performance</span>
                  </div>
                  <div className="badge">
                    <Palette className="badge-icon" />
                    <span>UX/UI</span>
                  </div>
                  <div className="badge">
                    <Target className="badge-icon" />
                    <span>Objectifs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column">
            <h3>
              <Code className="icon" />
              Compétences Techniques
            </h3>
            
            <div className="skills-container">
              {categories.map((category) => (
                <div key={category.name} className="card">
                  <h4>
                    <div className={`category-icon ${category.gradient}`}>
                      <category.icon className="icon" />
                    </div>
                    {category.name}
                  </h4>
                  
                  <div className="skills-list">
                    {skills
                      .filter(skill => skill.category === category.name)
                      .map((skill) => (
                        <div key={skill.name} className="skill">
                          <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}</span>
                          </div>
                          <div
                            className="progress-bar"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', overflow: 'visible' }}
                            ref={el => skillRefs.current[skills.findIndex(s => s.name === skill.name)] = el}
                          >
                            <span className="skill-icon">{skill.icon}</span>
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                              <div
                                className={`progress ${getLevelColor(skill.level)}`}
                                style={{
                                  position: 'relative',
                                  width: animateBars[skills.findIndex(s => s.name === skill.name)]
                                    ? (skill.level === 'Expert' ? '100%' : skill.level === 'Avancé' ? '80%' : skill.level === 'Intermédiaire' ? '60%' : '40%')
                                    : '0%',
                                  transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)'
                                }}
                              ></div>
                              <span style={{ marginLeft: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>{getLevelPercent(skill.level)}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;