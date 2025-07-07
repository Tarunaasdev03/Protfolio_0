import React, { useState } from 'react';
import { ExternalLink, Github, Mail, MessageCircle, Phone, Video, Camera, Cog } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      title: 'Communication Automation Suite',
      description: 'Automated email, SMS, WhatsApp, call, and social media posting system',
      category: 'automation',
      technologies: ['Python', 'APIs', 'Automation'],
      icon: Mail,
      details: 'Complete automation for Email, SMS, WhatsApp, LinkedIn, Twitter, Facebook, Instagram'
    },
    {
      title: 'Docker GUI & Sound Access',
      description: 'Linux command exploration with GUI and sound access in Docker containers',
      category: 'docker',
      technologies: ['Docker', 'Linux', 'GUI'],
      icon: Cog,
      details: 'Advanced Docker containerization with GUI and audio capabilities'
    },
    {
      title: 'Git Workflow Manager',
      description: 'Complete GitHub workflow automation including init, commit, push, branch, and PR management',
      category: 'automation',
      technologies: ['Git', 'GitHub', 'Python', 'CLI'],
      icon: Github,
      details: 'Comprehensive GitHub task automation for efficient development workflows'
    },
    {
      title: 'JavaScript Media Capture',
      description: 'Web-based webcam capture, video processing, and email integration',
      category: 'web',
      technologies: ['JavaScript', 'WebRTC', 'HTML5'],
      icon: Camera,
      details: 'Real-time media capture with processing and communication features'
    },
    {
      title: 'ML Model Docker Deployment',
      description: 'Running machine learning models and applications in Docker containers',
      category: 'docker',
      technologies: ['Docker', 'ML', 'Python'],
      icon: Cog,
      details: 'Scalable ML model deployment using containerization'
    },
    {
      title: 'Unified Task Menu System',
      description: 'Menu-based project combining all automation tasks in one interface',
      category: 'automation',
      technologies: ['Python', 'CLI', 'Integration'],
      icon: Cog,
      details: 'Centralized command center for all automation tasks'
    },
    {
      title: 'Streamlit & Gradio Panels',
      description: 'Interactive web-based automation control panels',
      category: 'web',
      technologies: ['Streamlit', 'Gradio', 'Python'],
      icon: Cog,
      details: 'User-friendly web interfaces for automation control'
    },
    {
      title: 'Video Call Integration',
      description: 'Automated video calling system with scheduling and management',
      category: 'automation',
      technologies: ['Python', 'APIs', 'WebRTC'],
      icon: Video,
      details: 'Complete video communication automation system'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'automation', name: 'Automation' },
    { id: 'docker', name: 'Docker' },
    { id: 'web', name: 'Web Apps' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Projects</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Python & Docker tasks showcasing automation and containerization expertise
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-black p-3 rounded-lg group-hover:bg-gray-800 transition-colors">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-black hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-500 mb-4">
                        {project.details}
                      </p>
                      
                      <div className="flex space-x-3">
                        <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </button>
                        <button className="flex items-center space-x-2 border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-black text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Open Source Contributions</h3>
              <p className="text-gray-300 text-lg">
                All projects are developed with best practices in mind and are available on GitHub. 
                I believe in sharing knowledge and contributing to the open-source community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;