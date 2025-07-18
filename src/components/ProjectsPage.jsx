import React, { useState } from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Clock, Star, Filter } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import projectsData from '../data/projects.json';
import '../styles/ProjectsPage.scss';

const ProjectsPage = () => {
  const { navigateTo } = useNavigation();
  const [filter, setFilter] = useState('all');

  const projects = projectsData;

  const technologies = ['all', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'Socket.io', 'PWA'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 sm:pt-20">
      <div className="container mx-auto px-6 spacing-responsive-md">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium text-responsive-sm"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Retour à l'accueil
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-6">
            Mes <span className="text-gradient">Projets</span>
          </h1>
          <p className="text-responsive-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez mes réalisations récentes, des projets qui démontrent mes compétences 
            techniques et ma passion pour le développement web moderne.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mr-2 sm:mr-4 mb-2">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-medium text-responsive-xs">Filtrer par :</span>
          </div>
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium transition-all duration-300 text-responsive-xs ${
                filter === tech
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {tech === 'all' ? 'Tous' : tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-responsive">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="creative-card group cursor-pointer animate-fadeInUp"
              onClick={() => navigateTo('project-detail', project.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs bg-black/50 px-1 sm:px-2 py-1 rounded">Actif</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="spacing-responsive-xs">
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>2024</span>
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  <span>3 mois</span>
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 text-yellow-500" />
                  <span>Featured</span>
                </div>
                
                <h3 className="text-responsive-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-responsive-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      Code
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    )}
                  </div>
                  <button className="btn-more text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm">
                    Voir plus →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Aucun projet trouvé pour cette technologie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;