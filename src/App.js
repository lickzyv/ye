import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    setIsDark(storedTheme === 'dark' || (!storedTheme && darkModePreference));
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const socialLinks = {
    twitter: 'https://x.com/createvertex',
    linkedin: 'https://www.linkedin.com/in/createvertex/',
    github: 'https://github.com/vertexhorizons'
  };

  return (
    <div className="min-h-screen bg-light-primary dark:bg-dark-primary transition-colors duration-200">
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Team />
        <Contact />
      </main>

      <footer className="py-8 bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Vertex Horizons. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a 
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
