import React, { useState } from 'react'; // Importation de React et du hook useState
import { ArrowLeft, Github, ExternalLink, Calendar, Clock, Star, Filter, ArrowRight } from 'lucide-react'; // Importation des icônes
import { useNavigation } from '../contexts/NavigationContext'; // Importation du contexte de navigation
import projectsData from '../data/projects.json'; // Importation des données projets
import '../styles/ProjectsPage.scss'; // Importation des styles spécifiques à la page projets

const ProjectsPage = () => {
  const { navigateTo } = useNavigation(); // Hook pour naviguer entre les pages
  const [filter, setFilter] = useState('all'); // État pour le filtre sélectionné

  const projects = projectsData; // Liste des projets importée

  // Liste des technologies pour le filtre
  const technologies = ['all', 'HTML5/CSS3', 'React', 'Node.js', 'MongoDB', 'JavaScript'];

  // Filtrage des projets selon la technologie sélectionnée
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <div className="projects-page"> {/* Conteneur principal de la page projets */}
      <div className="container"> {/* Conteneur centré pour le contenu */}
        {/* Header de la page */}
        <div className="header"> {/* Section du bouton retour */}
          <button className="project-detail__back-btn projects-back-btn" onClick={() => navigateTo('home')} aria-label="Retour à l'accueil" style={{ marginTop: '2rem' }}>
            <ArrowLeft size={24} className="back-btn__icon" />
            <span className="back-btn__text">Retour à l'accueil</span>
          </button>
        </div>

        <div className="intro"> {/* Introduction de la page */}
          <h1 className="title"> {/* Titre principal */}
            Mes <span className="highlight">Projets</span>
          </h1>
          <p className="description"> {/* Description sous le titre */}
            Découvrez mes réalisations récentes, des projets qui démontrent mes compétences 
            techniques et ma passion pour le développement web moderne.
          </p>
        </div>

        {/* Section de filtre */}
        <div className="filter-container"> {/* Conteneur du filtre */}
          <div className="filter-label"> {/* Label du filtre */}
            <Filter className="icon" /> {/* Icône filtre */}
            <span>Filtrer par :</span>
          </div>
          {technologies.map((tech) => (
            <button
              key={tech} // Clé unique pour chaque bouton
              onClick={() => setFilter(tech)} // Clique pour changer le filtre
              className={`filter-button filter-${tech.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()} ${filter === tech ? 'active' : ''}`}
            >
              {tech === 'all' ? 'Tous' : tech} {/* Affichage du nom de la techno */}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="projects-grid"> {/* Conteneur de la grille de projets */}
          {filteredProjects.map((project, index) => (
            <div
              key={project.id} // Clé unique pour chaque projet
              className="project-card" // Classe de la carte projet
              onClick={() => navigateTo('project-detail', project.id)} // Clique pour voir le détail du projet
              style={{ animationDelay: `${index * 0.1}s` }} // Animation décalée pour chaque carte
            >
              <div className="card-image-container"> {/* Conteneur de l'image du projet */}
                <img
                  src={project.imageUrl} // Image du projet
                  alt={project.title} // Texte alternatif
                  className="card-image"
                />
                <div className="status-badge"> {/* Badge d'état du projet */}
                  <div className="status-indicator"></div> {/* Indicateur visuel (ex: rond vert) */}
                  <span>Actif</span> {/* Texte d'état */}
                </div>
                <div className="image-overlay"></div> {/* Overlay sur l'image */}
              </div>
              
              <div className="card-content"> {/* Contenu de la carte projet */}
                <div className="project-meta"> {/* Métadonnées du projet */}
                  <Calendar className="meta-icon" /> {/* Icône calendrier */}
                  <span>{project.year}</span> {/* Année propre à chaque projet */}
                  <Clock className="meta-icon" /> {/* Icône horloge */}
                  <span>{project.duration}</span> {/* Durée propre à chaque projet */}
                  {/* Suppression de l'étoile et du texte Featured */}
                </div>
                
                <h3 className="project-title"> {/* Titre du projet */}
                  {project.title}
                </h3>
                
                <p className="project-description"> {/* Description du projet */}
                  {project.description}
                </p>
                
                <div className="tech-tags"> {/* Liste des technologies */}
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="more-tech-tag">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="card-footer"> {/* Pied de la carte projet */}
                  <div className="project-links"> {/* Liens vers le code et la démo */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="link-icon" /> {/* Icône GitHub */}
                      Code
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="link-icon" /> {/* Icône démo */}
                        Demo
                      </a>
                    )}
                  </div>
                  <button className="see-more"> {/* Bouton voir plus */}
                    Voir plus&nbsp;
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="no-projects"> {/* Message d'absence de projet */}
            <p>Aucun projet trouvé pour cette technologie.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage; // Export du composant