import React from 'react';
import { Code, Laptop, Server, Database, GitBranch, Palette, Award, Download, Zap, Sparkles, Target, Heart } from 'lucide-react';
import '../styles/About.scss';

const About = () => {
  const skills = [
    // Développement Frontend
    { name: 'HTML5 / CSS3 / SCSS (architecture modulaire, responsive design)', level: 'Expert', category: 'Frontend' },
    { name: 'JavaScript', level: 'Intermédiaire', category: 'Frontend' },
    { name: 'React (hooks, composants, React Router, Context API)', level: 'Avancé', category: 'Frontend' },
    { name: 'Intégration Figma (pixel-perfect)', level: 'Débutant', category: 'Frontend' },

    // Développement Backend
    { name: 'Node.js / Express (API REST, middleware, sécurisation des routes)', level: 'Avancé', category: 'Backend' },
    { name: 'MongoDB / Mongoose (modélisation, CRUD, validation)', level: 'Intermédiaire', category: 'Backend' },
    { name: 'Authentification JWT, bcrypt (sécurité, ownership)', level: 'Expert', category: 'Backend' },

    // Outils & Méthodes
    { name: 'Git / GitHub (gestion de version)', level: 'Débutant', category: 'Outils' },
    { name: 'Méthode Agile (Trello, Notion, Kanban)', level: 'Avancé', category: 'Outils' },
    { name: 'Postman (tests d’API), Multer & Sharp (upload/optimisation images)', level: 'Intermédiaire', category: 'Outils' },
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
                    Diplômé d'OpenClassrooms en développement web. Une formation intensive qui m'a 
                    permis de maîtriser les fondamentaux du développement moderne.
                  </p>
                </div>
                
                <div className="block specialization">
                  <div className="block-header">
                    <div className="dot"></div>
                    <span>Spécialisation</span>
                  </div>
                  <p>
                  Développeur full-stack passionné, je conçois des applications web complètes, du front-end réactif (React, Sass) au back-end robuste (Node.js, Express, MongoDB).
                   Mes projets m'ont permis de développer des plateformes dynamiques, sécurisées et performantes, en respectant les bonnes pratiques de développement et les exigences métiers. 
                   Je maîtrise l'intégration de maquettes, la création d'API REST, la gestion d'utilisateurs, de bases de données et l'optimisation des performances. Mon objectif :
                    livrer des solutions web efficaces, maintenables et orientées utilisateur.
                  </p>
                </div>
                
                <div className="block passion">
                  <div className="block-header">
                    <div className="dot"></div>
                    <span>Passion</span>
                  </div>
                  <p>
                    Toujours en veille technologique, j'aime explorer de nouvelles technologies 
                    et méthodologies pour améliorer continuellement mes compétences.
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
                          <div className="progress-bar">
                            <div 
                              className={`progress ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                            ></div>
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