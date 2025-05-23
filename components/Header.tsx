"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-800/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo / Nom */}
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
            Théo
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/#a-propos">À Propos</NavLink>
            <NavLink href="/#projets">Projets</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Mon CV
            </a>
          </nav>

          {/* Bouton Menu Mobile */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/#a-propos" onClick={() => setIsMobileMenuOpen(false)}>À Propos</MobileNavLink>
              <MobileNavLink href="/#projets" onClick={() => setIsMobileMenuOpen(false)}>Projets</MobileNavLink>
              <MobileNavLink href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mon CV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Composant pour les liens de navigation desktop
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:text-white relative group transition-colors duration-300"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

// Composant pour les liens de navigation mobile
const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:text-white px-2 py-1 rounded-md hover:bg-gray-700/50 transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;