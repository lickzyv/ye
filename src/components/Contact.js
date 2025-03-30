import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">Get in Touch</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-cyber font-bold mb-4 gradient-text">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ready to start your next project? We'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-cyber text-gray-700 dark:text-gray-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">South Singatala, Malda, West Bengal - 732101</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-cyber text-gray-700 dark:text-gray-300">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">support@vertexhorizons.xyz</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-cyber text-gray-700 dark:text-gray-300">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+91 8942926276</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-cyber text-gray-700 dark:text-gray-300 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://x.com/createvertex" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform">
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/createvertex/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                  <a href="https://github.com/vertexhorizons" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform">
                    <i className="fab fa-github text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card cyber-border p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-cyber text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-cyber text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-cyber text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="input resize-none"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary cyber-border group w-full">
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <i className="fas fa-paper-plane ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;