import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'globe',
      title: 'Web Development',
      description: 'Creating responsive, modern web applications with cutting-edge technologies.',
      features: [
        'React/Vue/Angular',
        'Node.js',
        'Progressive Web Apps'
      ]
    },
    {
      icon: 'mobile-alt',
      title: 'Mobile Development',
      description: 'Building native and cross-platform mobile applications.',
      features: [
        'iOS/Android',
        'React Native',
        'Flutter'
      ]
    },
    {
      icon: 'brain',
      title: 'AI Solutions',
      description: 'Implementing artificial intelligence and machine learning solutions.',
      features: [
        'Machine Learning',
        'Neural Networks',
        'Computer Vision'
      ]
    },
    {
      icon: 'shield-alt',
      title: 'Security Services',
      description: 'Protecting your digital assets with advanced security measures.',
      features: [
        'Penetration Testing',
        'Security Audits',
        'Encryption'
      ]
    }
  ];

  return (
    <section id="services" className="section bg-light-secondary dark:bg-dark-secondary relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card group"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:animate-bounce">
                <i className={`fas fa-${service.icon} text-2xl text-primary dark:text-secondary`}></i>
              </div>

              {/* Service Info */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary dark:bg-secondary mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="#contact"
            className="btn-primary inline-flex items-center group"
          >
            Start Your Project
            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
          </a>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-20 text-light-primary dark:text-dark-primary"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;