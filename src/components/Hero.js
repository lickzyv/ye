import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-6 animate-glow">
            <span className="gradient-text">Innovate.</span>{' '}
            <span className="gradient-text" style={{ '--tw-gradient-from': '#06B6D4', '--tw-gradient-to': '#8B5CF6' }}>Create.</span>{' '}
            <span className="gradient-text" style={{ '--tw-gradient-from': '#8B5CF6', '--tw-gradient-to': '#06B6D4' }}>Evolve.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-body">
            Crafting cutting-edge digital experiences that push the boundaries of what's possible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary cyber-border group"
            >
              View Projects
              <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary cyber-border group"
            >
              Get in Touch
              <i className="fas fa-envelope ml-2 group-hover:scale-110 transition-transform"></i>
            </button>
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-20">
            <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
              Made By Vertex Horizon Studios With Love ❤.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <i className="fab fa-react text-4xl text-primary hover:text-secondary transition-colors duration-300"></i>
              <i className="fab fa-node-js text-4xl text-primary hover:text-secondary transition-colors duration-300"></i>
              <i className="fab fa-python text-4xl text-primary hover:text-secondary transition-colors duration-300"></i>
              <i className="fab fa-aws text-4xl text-primary hover:text-secondary transition-colors duration-300"></i>
              <i className="fab fa-docker text-4xl text-primary hover:text-secondary transition-colors duration-300"></i>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <i className="fas fa-chevron-down text-2xl text-primary dark:text-secondary"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;