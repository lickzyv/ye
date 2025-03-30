import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      category: "ai",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Advanced analytics platform using machine learning algorithms",
      tech: ["React", "Python", "TensorFlow"],
    },
    {
      id: 2,
      title: "Crypto Dashboard",
      category: "blockchain",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Real-time cryptocurrency tracking and analytics",
      tech: ["Vue.js", "Node.js", "Web3"],
    },
    {
      id: 3,
      title: "Smart Home IoT",
      category: "iot",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "IoT platform for smart home automation",
      tech: ["React", "AWS IoT", "MongoDB"],
    },
    {
      id: 4,
      title: "AR Shopping Experience",
      category: "ar",
      image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Augmented reality shopping application",
      tech: ["Unity", "ARKit", "Node.js"],
    },
    {
      id: 5,
      title: "Cloud Infrastructure",
      category: "cloud",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Scalable cloud infrastructure solution",
      tech: ["AWS", "Terraform", "Docker"],
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      category: "blockchain",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Secure cryptocurrency wallet application",
      tech: ["React Native", "Solidity", "Web3.js"],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'iot', label: 'IoT' },
    { id: 'ar', label: 'AR/VR' },
    { id: 'cloud', label: 'Cloud' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-cyber text-sm transition-all duration-300 ${
                activeFilter === filter.id
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-gray-100 dark:bg-dark-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-primary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group card cyber-border overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-2">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs font-cyber bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-cyber font-bold mb-2 gradient-text">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <button className="text-primary dark:text-secondary font-cyber text-sm group-hover:underline transition-all duration-300">
                  Learn More
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;