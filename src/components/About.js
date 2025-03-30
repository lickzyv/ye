import React from 'react';

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' },
  ];

  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Cloud Architecture', level: 75 },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">About Us</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-cyber font-bold gradient-text">
              Pushing the Boundaries of Digital Innovation
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We are a team of passionate developers and designers dedicated to creating 
              cutting-edge digital solutions. Our approach combines innovative technology 
              with creative design to deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card p-4 text-center cyber-border">
                  <div className="text-2xl font-cyber font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-cyber font-bold mb-6 gradient-text">
              Our Expertise
            </h3>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-cyber text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="font-cyber text-primary dark:text-secondary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-dark-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: 'slideIn 1.5s ease-out'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary cyber-border group"
              >
                Let's Work Together
                <i className="fas fa-rocket ml-2 group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for skill bar animation */}
      <style jsx>{`
        @keyframes slideIn {
          from { width: 0; }
          to { width: var(--final-width); }
        }
      `}</style>
    </section>
  );
};

export default About;