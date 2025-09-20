// Importation de React et des modules nécessaires pour le rendu
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importation du composant principal de l'application
import App from './App';
// Importation de BrowserRouter pour la gestion des routes côté client
import { BrowserRouter } from 'react-router-dom';
// Importation des styles globaux de l'application
import './index.scss';

/**
 * Point d'entrée de l'application React
 * Initialise le rendu de l'application dans le DOM
 * Utilise React 18 avec createRoot pour de meilleures performances
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  // Mode strict de React pour détecter les problèmes potentiels en développement
  <React.StrictMode>
    {/* Router pour la gestion de la navigation côté client */}
    <BrowserRouter>
      {/* Composant principal de l'application */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);