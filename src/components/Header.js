import React, { useState, useEffect } from 'react';

const Header = ({ toggleTheme, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 glass shadow-lg' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-cyber font-bold gradient-text">
              VH
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              <span className={`absolute inset-0 rounded-full transition-transform duration-300 ${
                isDark ? 'dark' : ''
              }`}>
                <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'} absolute top-1/2 ${
                  isDark ? 'right-1.5' : 'left-1.5'
                } -translate-y-1/2 text-sm`}></i>
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden cyber-border p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4 py-4">
            <button onClick={() => scrollToSection('about')} className="nav-link text-center">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-center">
              Projects
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link text-center">
              Services
            </button>
            <button onClick={() => scrollToSection('team')} className="nav-link text-center">
              Team
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-center">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;