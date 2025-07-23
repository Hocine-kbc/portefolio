import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import {
  Code,
  Laptop,
  Server,
  Database,
  GitBranch,
  Palette,
  Award,
  Download,
  Zap,
  Sparkles,
  Target,
  Heart,
  Lightbulb,
  Coffee,
  Users,
  GraduationCap,
} from 'lucide-react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiTrello,
  SiNotion,
  SiExpress,
  SiJsonwebtokens,
  SiLightning,
} from 'react-icons/si';
import { FaLock, FaFileUpload, FaCog, FaDatabase } from 'react-icons/fa';
import '../styles/About.scss';

const About = () => {
  const skills = [
    // Développement Frontend
    {
      name: 'HTML5 / CSS3 / SCSS',
      level: 'Expert',
      category: 'Frontend',
      icon: (
        <>
          <SiHtml5 style={{ color: '#e34c26' }} />
          <SiCss3 style={{ color: '#1572B6' }} />
        </>
      ),
    },
    {
      name: 'JavaScript',
      level: 'Intermédiaire',
      category: 'Frontend',
      icon: <SiJavascript style={{ color: '#f7df1e' }} />,
    },
    {
      name: 'React',
      level: 'Avancé',
      category: 'Frontend',
      icon: <SiReact style={{ color: '#61dafb' }} />,
    },
    {
      name: 'Intégration Figma ',
      level: 'Débutant',
      category: 'Frontend',
      icon: <SiFigma style={{ color: '#f24e1e' }} />,
    },

    // Développement Backend
    {
      name: 'Node.js / Express ',
      level: 'Avancé',
      category: 'Backend',
      icon: (
        <>
          <SiNodedotjs style={{ color: '#3c873a' }} />
          <SiExpress style={{ color: '#888' }} />
        </>
      ),
    },
    {
      name: 'MongoDB / Mongoose',
      level: 'Intermédiaire',
      category: 'Backend',
      icon: (
        <>
          <SiMongodb style={{ color: '#47A248' }} />
          <FaDatabase style={{ color: '#f59e42' }} />
        </>
      ),
    },
    {
      name: 'Authentification JWT, bcrypt',
      level: 'Expert',
      category: 'Backend',
      icon: (
        <>
          <SiJsonwebtokens style={{ color: '#a729f5' }} />
          <FaLock style={{ color: '#888' }} />
        </>
      ),
    },

    // Outils & Méthodes
    {
      name: 'Git / GitHub (gestion de version)',
      level: 'Expert',
      category: 'Outils',
      icon: (
        <>
          <SiGit style={{ color: '#f05032' }} />
          <SiGithub className="github-icon-mode" />
        </>
      ),
    },
    {
      name: 'Méthode Agile (Trello, Notion, Kanban)',
      level: 'Avancé',
      category: 'Outils',
      icon: (
        <>
          <SiTrello style={{ color: '#0079bf' }} />
          <SiNotion className="notion-icon-mode" />
        </>
      ),
    },
    {
      name: 'Postman (tests d’API), Multer & Sharp',
      level: 'Intermédiaire',
      category: 'Outils',
      icon: (
        <>
          <SiPostman style={{ color: '#ff6c37' }} />
          <FaFileUpload style={{ color: '#888' }} />
          <FaCog style={{ color: '#47A248' }} />
        </>
      ),
    },
    {
      name: 'Vite – Outil de build rapide pour projets React ',
      level: 'Avancé',
      category: 'Outils',
      icon: <SiLightning style={{ color: '#646cff' }} />,
    },
    {
      name: 'React Router – Routage entre pages dans une SPA ',
      level: 'Expert',
      category: 'Outils',
      icon: <SiReact style={{ color: '#f44250' }} />,
    },

    // Compétences à développer (4ème carte)
    {
      name: 'Utiliser TypeScript avec React',
      level: 'À développer',
      category: 'À développer',
      icon: <SiJavascript style={{ color: '#3178c6' }} />,
    },
    {
      name: 'Gérer l’état global avec Redux Toolkit ou Zustand',
      level: 'À développer',
      category: 'À développer',
      icon: <FaDatabase style={{ color: '#764abc' }} />,
    },
    {
      name: 'Créer une API REST avancée avec NestJS',
      level: 'À développer',
      category: 'À développer',
      icon: <FaCog style={{ color: '#ea2845' }} />,
    },
    {
      name: 'Mettre en place une CI/CD avec GitHub Actions',
      level: 'À développer',
      category: 'À développer',
      icon: <SiGithub className="github-icon-mode" />,
    },
    {
      name: 'Créer une Progressive Web App (PWA) avec React',
      level: 'À développer',
      category: 'À développer',
      icon: <SiReact style={{ color: '#61dafb' }} />,
    },
  ];

  const categories = [
    { name: 'Frontend', icon: Laptop, color: 'blue', gradient: 'gradient-primary' },
    { name: 'Backend', icon: Server, color: 'purple', gradient: 'gradient-secondary' },
    { name: 'Outils', icon: GitBranch, color: 'orange', gradient: 'gradient-accent' },
    { name: 'À développer', icon: Lightbulb, color: 'gray', gradient: 'gradient-gray' }, // nouvelle catégorie
  ];

  const getLevelColor = level => {
    switch (level) {
      case 'Expert':
        return 'level-expert';
      case 'Avancé':
        return 'level-advanced';
      case 'Intermédiaire':
        return 'level-intermediate';
      case 'Débutant':
        return 'level-beginner';
      default:
        return 'level-beginner';
    }
  };

  const getLevelWidth = level => {
    switch (level) {
      case 'Expert':
        return 'level-width-full';
      case 'Avancé':
        return 'level-width-4-5';
      case 'Intermédiaire':
        return 'level-width-3-5';
      case 'Débutant':
        return 'level-width-2-5';
      default:
        return 'level-width-2-5';
    }
  };

  const getLevelPercent = level => {
    switch (level) {
      case 'Expert':
        return 100;
      case 'Avancé':
        return 80;
      case 'Intermédiaire':
        return 60;
      case 'Débutant':
        return 40;
      default:
        return 40;
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

  const philosophyRef = useRef();

  const handleMouseEnter = () => {
    const el = philosophyRef.current;
    if (!el) return;
    el.classList.remove('animate-mirror-out');
    void el.offsetWidth;
    el.classList.add('animate-mirror-in');
  };
  const handleMouseLeave = () => {
    const el = philosophyRef.current;
    if (!el) return;
    el.classList.remove('animate-mirror-in');
    void el.offsetWidth;
    el.classList.add('animate-mirror-out');
  };

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
            Développeur web motivé, récemment formé, avec une première expérience concrète à travers
            plusieurs projets web complets et modernes.
          </p>
        </div>

        {/* Mon Parcours en grille, AVANT la section Compétences Techniques */}
        <div className="parcours-grid">
          <div className="parcours-card parcours-card--blue">
            <div className="parcours-card__icon">
              <GraduationCap size={28} />
            </div>
            <h4>Formation</h4>
            <p>
              Issu d’une formation d’ingénieur en Génie des Systèmes Automatisés, j’ai complété mon
              parcours par une spécialisation intensive en développement web chez OpenClassrooms.
              Cette double formation me permet d’allier rigueur d’ingénieur et agilité de
              développeur dans la conception de solutions web modernes et performantes.
            </p>
          </div>
          <div className="parcours-card parcours-card--purple">
            <div className="parcours-card__icon">
              <Award size={28} />
            </div>
            <h4>Spécialisation</h4>
            <p>
              Développeur full-stack passionné, je conçois des applications web complètes, robustes
              et évolutives, du front-end dynamique (React, Sass) au back-end structuré (Node.js,
              Express, MongoDB).
            </p>
            <ul className="specialisation-list">
              <li>Intégration de maquettes responsives et pixel-perfect</li>
              <li>Création et sécurisation d’API REST</li>
              <li>Gestion des utilisateurs, des données et de l’authentification</li>
              <li>Optimisation des performances, accessibilité et SEO</li>
            </ul>
            <p>
              J’accorde une grande importance à la qualité du code, à la maintenabilité et à la
              satisfaction utilisateur.
            </p>
          </div>
          <div className="parcours-card parcours-card--green">
            <div className="parcours-card__icon">
              <Heart size={28} />
            </div>
            <h4>Passion</h4>
            <p>
              Toujours en veille technologique, je reste attentif aux évolutions du web pour
              enrichir mes compétences, adopter les meilleures pratiques et proposer des solutions
              innovantes, fiables et adaptées aux besoins métiers.
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div
          className="philosophy-section"
          ref={philosophyRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="philosophy-header">
            <Coffee className="philosophy-header-icon" />
            <h3 className="philosophy-title">Ma Philosophie</h3>
          </div>
          <div className="philosophy-quote-block">
            <blockquote className="philosophy-quote">
              "Le code propre n'est pas écrit en suivant un ensemble de règles. Vous savez que vous
              travaillez sur du code propre quand chaque routine que vous lisez est à peu près ce à
              quoi vous vous attendiez."
            </blockquote>
            <div className="philosophy-badges">
              <div className="philosophy-badge philosophy-badge-blue">
                <Code className="philosophy-badge-icon" />
                <span className="philosophy-badge-label">Code Clean</span>
              </div>
              <div className="philosophy-badge philosophy-badge-green">
                <Zap className="philosophy-badge-icon" />
                <span className="philosophy-badge-label">Performance</span>
              </div>
              <div className="philosophy-badge philosophy-badge-purple">
                <Users className="philosophy-badge-icon" />
                <span className="philosophy-badge-label">UX/UI</span>
              </div>
              <div className="philosophy-badge philosophy-badge-orange">
                <Target className="philosophy-badge-icon" />
                <span className="philosophy-badge-label">Objectifs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid"></div>

        <div className="right-column">
          <h3>
            <Code className="icon" />
            Compétences Techniques
          </h3>

          <div className="skills-container">
            {categories.map(category => (
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
                    .map(skill => {
                      const isADevelopper = category.name === 'À développer';
                      const progressWidth = animateBars[
                        skills.findIndex(s => s.name === skill.name)
                      ]
                        ? isADevelopper
                          ? '100%'
                          : skill.level === 'Expert'
                          ? '100%'
                          : skill.level === 'Avancé'
                          ? '80%'
                          : skill.level === 'Intermédiaire'
                          ? '60%'
                          : skill.level === 'Débutant'
                          ? '40%'
                          : '40%'
                        : '0%';
                      return (
                        <div key={skill.name} className="skill">
                          <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}</span>
                          </div>
                          <div
                            className="progress-bar"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              background: 'none',
                              overflow: 'visible',
                            }}
                            ref={el =>
                              (skillRefs.current[skills.findIndex(s => s.name === skill.name)] = el)
                            }
                          >
                            <span className="skill-icon">{skill.icon}</span>
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                              <div
                                className={`progress ${getLevelColor(skill.level)}${
                                  isADevelopper ? ' in-progress' : ''
                                }`}
                                style={{
                                  position: 'relative',
                                  width: progressWidth,
                                  transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
                                }}
                              ></div>
                              {isADevelopper ? (
                                <span
                                  style={{
                                    marginLeft: '0.5rem',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    color: '#f59e0b',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  🚧 En cours
                                </span>
                              ) : (
                                <span
                                  className="skill-percent"
                                  style={{
                                    marginLeft: '0.5rem',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  {getLevelPercent(skill.level)}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
