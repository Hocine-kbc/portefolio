// Importation de React
import React from 'react';
// Importation des icônes Lucide React pour l'interface utilisateur
import { ArrowLeft, Github, ExternalLink, Code, Lightbulb, Wrench, Calendar, Clock, Users } from 'lucide-react';
// Importation du contexte de navigation pour la gestion des pages
import { useNavigation } from '../contexts/NavigationContext';
import { getStatusConfig } from '../utils/status';
// Importation des styles spécifiques au composant ProjectDetail
import '../styles/ProjectDetail.scss';
// Importation des données des projets depuis le fichier JSON
import projectsData from '../data/projects.json';

/**
 * Composant ProjectDetail - Page de détail d'un projet spécifique
 * Affiche les informations détaillées d'un projet sélectionné
 * @returns {JSX.Element} La page de détail du projet ou un message d'erreur
 */
const ProjectDetail = () => {
  // Récupération de l'ID du projet sélectionné et de la fonction de navigation
  const { selectedProjectId, navigateTo } = useNavigation();

  // Récupération des données des projets
  const projects = projectsData;

  // Recherche du projet correspondant à l'ID sélectionné
  const project = projects.find(p => p.id === selectedProjectId);

  // Affichage d'un message d'erreur si le projet n'est pas trouvé
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

  const { label: statusLabel, color: statusColor } = getStatusConfig(project.status);

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <div className="project-detail__hero">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-detail__hero-image"
        />
        <div className="project-detail__hero-overlay"></div>
        <div className="project-detail__hero-content">
          <div className="container mx-auto px-6">
            <button className="project-detail__back-btn" onClick={() => navigateTo('projects')} aria-label="Retour aux projets">
              <ArrowLeft size={24} className="back-btn__icon" />
              <span className="back-btn__text">Retour aux projets</span>
            </button>
            
            <h1 className="project-detail__title">
              {project.title}
            </h1>
            
            <div className="project-detail__meta">
              {/* Année du projet (dynamique depuis le JSON) */}
              <div className="project-detail__meta-item">
                <Calendar size={18} />
                <span>{project.year}</span>
              </div>
              {/* Durée du projet (dynamique depuis le JSON) */}
              <div className="project-detail__meta-item">
                <Clock size={18} />
                <span>{project.duration}</span>
              </div>
              {/* Équipe du projet (dynamique depuis le JSON) */}
              <div className="project-detail__meta-item">
                <Users size={18} />
                <span>{project.team}</span>
              </div>
              {/* Statut Featured (actuellement statique) */}
            
            </div>
            
            <div className="project-detail__actions">
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

      <div className="container mx-auto px-6 project-detail__content">
        {/* Project Overview */}
        <div className="project-detail__grid">
          <div className="project-detail__overview">
            <div className="modern-card">
              <h2 className="project-detail__overview-title">
                À propos du projet
              </h2>
              <p className="project-detail__overview-description">
                {project.longDescription}
              </p>
              
              <div className="project-detail__overview-challenges-solutions">
                <div className="project-detail__challenge-card">
                  <div className="creative-card">
                    <h3 className="project-detail__challenge-card-title">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    Défis Rencontrés
                  </h3>
                    <ul className="project-detail__challenge-card-list">
                    {project.challenges.map((challenge, index) => (
                        <li key={index}>
                          <span className="challenge-bullet">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
                
                <div className="project-detail__solution-card">
                  <div className="creative-card">
                    <h3 className="project-detail__solution-card-title">
                    <Wrench className="w-6 h-6 text-green-500" />
                    Solutions Apportées
                  </h3>
                    <ul className="project-detail__solution-card-list">
                    {project.solutions.map((solution, index) => (
                        <li key={index}>
                          <span className="solution-bullet">✓</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="project-detail__sidebar">
            <div className="project-detail__tech-card">
              <div className="modern-card">
                <h3 className="project-detail__tech-card-title">
                <Code className="w-6 h-6 text-blue-500" />
                Technologies
              </h3>
                <div className="project-detail__tech-card-list">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                      className="project-detail__tech-card-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              </div>
            </div>
            
            <div className="project-detail__info-card">
              <div className="modern-card">
                <h3 className="project-detail__info-card-title">
                Informations du projet
              </h3>
              <div className="project-detail__info-card-list">
                <div className="project-detail__info-card-item">
                  <span className="project-detail__info-card-label">Statut</span>
                  <div
                    className="project-detail__info-card-value project-detail__info-card-value--status"
                    style={{ color: statusColor }}
                  >
                    <div className="status-dot" style={{ backgroundColor: statusColor }}></div>
                    <span>{statusLabel}</span>
                  </div>
                </div>
                <div className="project-detail__info-card-item">
                  <span className="project-detail__info-card-label">Durée</span>
                  <span className="project-detail__info-card-value">{project.duration}</span>
                </div>
                <div className="project-detail__info-card-item">
                  <span className="project-detail__info-card-label">Équipe</span>
                  <span className="project-detail__info-card-value">{project.team}</span>
                </div>
                <div className="project-detail__info-card-item">
                  <span className="project-detail__info-card-label">Année</span>
                  <span className="project-detail__info-card-value">{project.year}</span>
                </div>
                </div>
              </div>
            </div>
            
            <div className="project-detail__links-card">
              <div className="modern-card">
                <h3 className="project-detail__links-card-title">
                Liens du projet
              </h3>
                <div className="project-detail__links-card-list">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="project-detail__links-card-item"
                >
                    <Github size={20} className="icon" />
                    <span className="text">Code source</span>
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="project-detail__links-card-item"
                  >
                      <ExternalLink size={20} className="icon" />
                      <span className="text">Démo en ligne</span>
                  </a>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="project-detail__cta">
          <div className="modern-card">
            <h3 className="project-detail__cta-title">
              Intéressé par ce projet ?
            </h3>
            <p className="project-detail__cta-description">
              N'hésitez pas à me contacter pour discuter de projets similaires ou pour toute question technique.
            </p>
            <div className="project-detail__cta-actions">
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