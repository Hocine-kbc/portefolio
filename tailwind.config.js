/**
 * Configuration Tailwind CSS pour le projet Portfolio Hocine KEBCI
 * Tailwind CSS est un framework CSS utility-first
 * @type {import('tailwindcss').Config}
 */
export default {
  // Fichiers à scanner pour les classes Tailwind utilisées
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  // Mode sombre basé sur la classe CSS (au lieu de media query)
  darkMode: 'class',
  
  // Configuration du thème Tailwind
  theme: {
    extend: {
      // Familles de polices personnalisées
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // Police principale pour l'interface
        'playfair': ['Playfair Display', 'serif'], // Police pour les titres élégants
        'mono': ['JetBrains Mono', 'monospace'], // Police monospace pour le code
      },
      
      // Animations personnalisées
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards', // Animation d'apparition vers le haut
        'fadeInLeft': 'fadeInLeft 0.8s ease-out forwards', // Animation d'apparition depuis la gauche
        'fadeInRight': 'fadeInRight 0.8s ease-out forwards', // Animation d'apparition depuis la droite
        'float': 'float 3s ease-in-out infinite', // Animation de flottement
        'pulse-slow': 'pulse 3s ease-in-out infinite', // Animation de pulsation lente
        'slideIn': 'slideIn 0.6s ease-out forwards', // Animation de glissement
        'rotate': 'rotate 2s linear infinite', // Animation de rotation continue
        'bounce-slow': 'bounce 2s infinite', // Animation de rebond lente
      },
      
      // Définitions des keyframes pour les animations
      keyframes: {
        // Animation d'apparition vers le haut
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        // Animation d'apparition depuis la gauche
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        // Animation d'apparition depuis la droite
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        // Animation de flottement vertical
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        // Animation de glissement vers le haut
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        // Animation de rotation continue
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  
  // Plugins Tailwind (aucun plugin personnalisé utilisé)
  plugins: [],
};