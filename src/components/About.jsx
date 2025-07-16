import React from 'react';
import { Code, Laptop, Server, Database, GitBranch, Palette, Award, Download, Zap, Sparkles, Target, Heart } from 'lucide-react';
import '../styles/About.scss';

const About = () => {
  const skills = [
    // Frontend
    { name: 'React', level: 'Expert', category: 'Frontend' },
    { name: 'TypeScript', level: 'Avancé', category: 'Frontend' },
    { name: 'Next.js', level: 'Avancé', category: 'Frontend' },
    { name: 'Vue.js', level: 'Intermédiaire', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 'Expert', category: 'Frontend' },
    { name: 'SASS/SCSS', level: 'Avancé', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 'Avancé', category: 'Backend' },
    { name: 'Express.js', level: 'Avancé', category: 'Backend' },
    { name: 'Python', level: 'Intermédiaire', category: 'Backend' },
    { name: 'PHP', level: 'Intermédiaire', category: 'Backend' },
    
    // Database
    { name: 'MongoDB', level: 'Avancé', category: 'Database' },
    { name: 'PostgreSQL', level: 'Avancé', category: 'Database' },
    { name: 'MySQL', level: 'Intermédiaire', category: 'Database' },
    
    // Tools
    { name: 'Git', level: 'Expert', category: 'Tools' },
    { name: 'Docker', level: 'Intermédiaire', category: 'Tools' },
    { name: 'Figma', level: 'Avancé', category: 'Tools' },
    { name: 'VS Code', level: 'Expert', category: 'Tools' },
  ];

  const categories = [
    { name: 'Frontend', icon: Laptop, color: 'blue', gradient: 'gradient-primary' },
    { name: 'Backend', icon: Server, color: 'purple', gradient: 'gradient-secondary' },
    { name: 'Database', icon: Database, color: 'green', gradient: 'gradient-success' },
    { name: 'Tools', icon: GitBranch, color: 'orange', gradient: 'gradient-accent' },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Avancé': return 'bg-blue-500';
      case 'Intermédiaire': return 'bg-yellow-500';
      case 'Débutant': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Avancé': return 'w-4/5';
      case 'Intermédiaire': return 'w-3/5';
      case 'Débutant': return 'w-2/5';
      default: return 'w-2/5';
    }
  };

  return (
    <section id="a-propos" className="spacing-responsive-lg section-bg-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 animate-float">
        <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-blue-200 dark:text-blue-800" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: '2s' }}>
        <Code className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-purple-200 dark:text-purple-800" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-6">
            À propos de <span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto mb-8"></div>
          <p className="text-responsive-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Développeur web motivé, récemment formé, avec une première expérience concrète à travers plusieurs projets web complets et modernes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Story Section */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="profile-creative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="src/images/profile.jpg" 
                    alt="Hocine kebci" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="creative-card spacing-responsive-sm">
              <h3 className="text-responsive-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600" />
                Mon Parcours
              </h3>
              
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Formation</span>
                  </div>
                  <p>
                    Diplômé d'OpenClassrooms en développement web. Une formation intensive qui m'a 
                    permis de maîtriser les fondamentaux du développement moderne.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">Spécialisation</span>
                  </div>
                  <p>
                    Expertise en React, Node.js et TypeScript. Je me concentre sur la création 
                    d'applications web performantes et d'interfaces utilisateur intuitives.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 dark:text-green-400 font-semibold">Passion</span>
                  </div>
                  <p>
                    Toujours en veille technologique, j'aime explorer de nouvelles technologies 
                    et méthodologies pour améliorer continuellement mes compétences.
                  </p>
                </div>
              </div>
            </div>

            <div className="creative-card p-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Heart className="text-red-500 w-6 h-6" />
                Ma Philosophie
              </h4>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "Le code propre n'est pas écrit en suivant un ensemble de règles. 
                  Vous savez que vous travaillez sur du code propre quand chaque routine 
                  que vous lisez est à peu près ce à quoi vous vous attendiez."
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Code className="text-blue-600 w-5 h-5" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Code Clean</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="text-green-600 w-5 h-5" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="text-purple-600 w-5 h-5" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">UX/UI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="text-orange-600 w-5 h-5" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Objectifs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/cv-Hocine-kebci.pdf"
                download
                className="btn-primary inline-flex items-center gap-3"
              >
                <Download size={20} />
                Télécharger mon CV
                <Sparkles size={16} className="animate-pulse" />
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Code className="text-blue-600 w-7 h-7" />
              Compétences Techniques
            </h3>
            
            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category.name} className="creative-card p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className={`${category.gradient} p-2 rounded-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    {category.name}
                  </h4>
                  
                  <div className="space-y-4">
                    {skills
                      .filter(skill => skill.category === category.name)
                      .map((skill) => (
                        <div key={skill.name} className="group">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                              {skill.level}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ease-out ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)} group-hover:animate-pulse`}
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