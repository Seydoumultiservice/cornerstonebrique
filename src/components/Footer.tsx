import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import TogoFlag from './TogoFlag';

const Footer = () => {
  return (
    <footer className="bg-cornerstone-darkgray text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">À Propos</h3>
            <p className="text-gray-300">
              Cornerstone Briques est le leader togolais dans la fabrication de briques de qualité supérieure pour tous vos projets de construction.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/nos-produits" className="text-gray-300 hover:text-white transition-colors">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Akodessewa, Après les rails, non loin de la station d'essence CM, Lomé, Togo</span>
              </li>
              <li className="flex items-center hover:text-primary transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+22890964993" className="hover:underline">
                  (+228) 90 96 49 93
                </a>
              </li>
              <li className="flex items-center hover:text-primary transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+22899870195" className="hover:underline">
                  (+228) 99 87 01 95
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:contact@cornerstonebrique.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@cornerstonebrique.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Nous Suivre</h3>
            <div className="flex space-x-4 flex-wrap gap-y-2">
              <a 
                href="https://facebook.com/cornerstonebriques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/cornerstonebriques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/cornerstonebriques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com/cornerstonebriques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/company/cornerstonebriques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://tiktok.com/@cornerstonebriques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M12 3a8 8 0 0 0 5 18a8.5 8.5 0 0 0 4 -3a8.5 8.5 0 0 0 2 -5h-4a2 2 0 1 1 0 -4h4a8 8 0 0 0 -8 -8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Cornerstone Briques. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
