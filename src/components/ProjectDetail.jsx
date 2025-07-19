import React from 'react';
import { ArrowLeft, Github, ExternalLink, Code, Lightbulb, Wrench, Calendar, Clock, Star, Users } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { selectedProjectId, navigateTo } = useNavigation();

  const projects = projectsData;

  const project = projects.find(p => p.id === selectedProjectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projet non trouvé</h1>
          <button
            onClick={() => navigateTo('projects')}
            className="btn-primary"
          >
            Retour aux projets
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <button
              onClick={() => navigateTo('projects')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium mb-6"
            >
              <ArrowLeft size={20} />
              Retour aux projets
            </button>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex items-center gap-6 text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>3 mois</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>Projet solo</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-400" />
                <span>Featured</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="flex items-center gap-3">
                  <Github size={20} />
                  Voir le Code
                </span>
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span className="flex items-center gap-3">
                    <ExternalLink size={20} />
                    Voir la Demo
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Project Overview */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="modern-card p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                À propos du projet
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {project.longDescription}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="creative-card p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    Défis Rencontrés
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                        <span className="text-red-500 mt-1 font-bold">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="creative-card p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <Wrench className="w-6 h-6 text-green-500" />
                    Solutions Apportées
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                        <span className="text-green-500 mt-1 font-bold">✓</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="modern-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="modern-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Informations du projet
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Statut</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 font-medium">Actif</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Durée</span>
                  <span className="text-gray-900 dark:text-white font-medium">3 mois</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Équipe</span>
                  <span className="text-gray-900 dark:text-white font-medium">Solo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Année</span>
                  <span className="text-gray-900 dark:text-white font-medium">2024</span>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Liens du projet
              </h3>
              <div className="space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github size={20} className="text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-900 dark:text-white font-medium">Code source</span>
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ExternalLink size={20} className="text-gray-700 dark:text-gray-300" />
                    <span className="text-gray-900 dark:text-white font-medium">Démo en ligne</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="modern-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Intéressé par ce projet ?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              N'hésitez pas à me contacter pour discuter de projets similaires ou pour toute question technique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  navigateTo('home');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="btn-primary"
              >
                Me contacter
              </button>
              <button
                onClick={() => navigateTo('projects')}
                className="btn-secondary"
              >
                Voir d'autres projets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;