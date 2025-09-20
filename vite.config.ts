// Importation de la fonction de configuration Vite
import { defineConfig } from 'vite';
// Importation du plugin React pour Vite
import react from '@vitejs/plugin-react';

/**
 * Configuration Vite pour le projet Portfolio Hocine KEBCI
 * Vite est un outil de build rapide et moderne pour les applications web
 * Documentation: https://vitejs.dev/config/
 */
export default defineConfig({
  // Plugins utilisés par Vite
  plugins: [react()], // Plugin React pour le support JSX et le hot reload
  
  // Optimisation des dépendances
  optimizeDeps: {
    // Exclusion de lucide-react de l'optimisation pour éviter les problèmes de compatibilité
    exclude: ['lucide-react'],
  },
});
