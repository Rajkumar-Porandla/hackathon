import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-6xl rounded-full border border-gray-200 bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <BrainCircuit size={32} className="text-black" />
          <span className="text-xl font-bold text-gray-900">Memoraid</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="relative group" onClick={handleNavClick}>
            <span className={isActive('/') ? 'nav-link-active' : 'nav-link'}>Home</span>
            {isActive('/') && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-left scale-x-0 group-[.nav-link-active]:scale-x-100 transition-transform duration-500" style={{transform: 'scaleX(1)'}}></span>
            )}
          </Link>
          <Link to="/features" className="relative group" onClick={handleNavClick}>
            <span className={isActive('/features') ? 'nav-link-active' : 'nav-link'}>Features</span>
            {isActive('/features') && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-left scale-x-0 group-[.nav-link-active]:scale-x-100 transition-transform duration-500" style={{transform: 'scaleX(1)'}}></span>
            )}
          </Link>
          <Link to="/flashcards" className="relative group" onClick={handleNavClick}>
            <span className={isActive('/flashcards') ? 'nav-link-active' : 'nav-link'}>Flashcards</span>
            {isActive('/flashcards') && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-left scale-x-0 group-[.nav-link-active]:scale-x-100 transition-transform duration-500" style={{transform: 'scaleX(1)'}}></span>
            )}
          </Link>
          <Link to="/stats" className="relative group" onClick={handleNavClick}>
            <span className={isActive('/stats') ? 'nav-link-active' : 'nav-link'}>Stats</span>
            {isActive('/stats') && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-left scale-x-0 group-[.nav-link-active]:scale-x-100 transition-transform duration-500" style={{transform: 'scaleX(1)'}}></span>
            )}
          </Link>
          <Link to="/about" className="relative group" onClick={handleNavClick}>
            <span className={isActive('/about') ? 'nav-link-active' : 'nav-link'}>About</span>
            {isActive('/about') && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-left scale-x-0 group-[.nav-link-active]:scale-x-100 transition-transform duration-500" style={{transform: 'scaleX(1)'}}></span>
            )}
          </Link>
          <Link to="/contact" className="relative group" onClick={handleNavClick}>
            <span className={isActive('/contact') ? 'nav-link-active' : 'nav-link'}>Contact</span>
            {isActive('/contact') && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-left scale-x-0 group-[.nav-link-active]:scale-x-100 transition-transform duration-500" style={{transform: 'scaleX(1)'}}></span>
            )}
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="btn-secondary rounded-full" onClick={handleNavClick}>
            Log In
          </Link>
          <Link to="/signup" className="btn-primary rounded-full" onClick={handleNavClick}>
            Sign Up
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`py-2 ${isActive('/') ? 'nav-link-active' : 'nav-link'}`}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`py-2 ${isActive('/features') ? 'nav-link-active' : 'nav-link'}`}
              onClick={handleNavClick}
            >
              Features
            </Link>
            <Link 
              to="/flashcards" 
              className={`py-2 ${isActive('/flashcards') ? 'nav-link-active' : 'nav-link'}`}
              onClick={handleNavClick}
            >
              Flashcards
            </Link>
            <Link 
              to="/stats" 
              className={`py-2 ${isActive('/stats') ? 'nav-link-active' : 'nav-link'}`}
              onClick={handleNavClick}
            >
              Stats
            </Link>
            <Link 
              to="/about" 
              className={`py-2 ${isActive('/about') ? 'nav-link-active' : 'nav-link'}`}
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`py-2 ${isActive('/contact') ? 'nav-link-active' : 'nav-link'}`}
              onClick={handleNavClick}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/login" className="btn-secondary w-full rounded-full" onClick={handleNavClick}>
                Log In
              </Link>
              <Link to="/signup" className="btn-primary w-full rounded-full" onClick={handleNavClick}>
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;