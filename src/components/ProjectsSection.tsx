import React from 'react';
import { ExternalLink, Github, Code, Database, Cloud, Smartphone, Mail, Search, Camera, Loader, MessageCircle } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "BorrowSmart",
      description: "A comprehensive loan provider and suggestion platform with intelligent recommendations",
      icon: <Database className="w-6 h-6" />,
      tags: ["Python", "Streamlit", "ML", "Finance"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "WhatsApp Automation Suite",
      description: "Multiple projects for WhatsApp messaging automation using Python",
      icon: <MessageCircle className="w-6 h-6" />,
      tags: ["Python", "Automation", "WhatsApp API"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Email Automation Tools",
      description: "Send emails using Python without using your own email account",
      icon: <Mail className="w-6 h-6" />,
      tags: ["Python", "Email", "SMTP", "Automation"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Phone Call Automation",
      description: "Make phone calls programmatically using Python",
      icon: <Smartphone className="w-6 h-6" />,
      tags: ["Python", "Telephony", "Automation"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Google Search Automation",
      description: "Automated Google search functionality without using Google's API",
      icon: <Search className="w-6 h-6" />,
      tags: ["Python", "Web Scraping", "Automation"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Social Media Automation",
      description: "Post to Instagram, Twitter, and Facebook using Python automation",
      icon: <Camera className="w-6 h-6" />,
      tags: ["Python", "Social Media", "APIs"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Web Scraping Suite",
      description: "Visit websites and download all data automatically",
      icon: <Code className="w-6 h-6" />,
      tags: ["Python", "Web Scraping", "Data Mining"],
      color: "from-teal-500 to-green-600"
    },
    {
      title: "AI Image Generation",
      description: "Create and manipulate images using code, including face swapping",
      icon: <Camera className="w-6 h-6" />,
      tags: ["Python", "AI", "Image Processing", "OpenCV"],
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Menu-Based Project Suite",
      description: "Comprehensive menu-based applications with Streamlit and speech recognition",
      icon: <Code className="w-6 h-6" />,
      tags: ["Streamlit", "Speech Recognition", "UI/UX"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Linux Command Manager",
      description: "Menu-based Linux command manager with Streamlit interface",
      icon: <Loader className="w-6 h-6" />,
      tags: ["Linux", "Streamlit", "System Administration"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Docker Container Manager",
      description: "Manage Docker containers using Python and Streamlit",
      icon: <Cloud className="w-6 h-6" />,
      tags: ["Docker", "Python", "Streamlit", "DevOps"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "CI/CD Pipeline Project",
      description: "Complete CI/CD pipeline implementation with automated testing and deployment",
      icon: <Code className="w-6 h-6" />,
      tags: ["Jenkins", "CI/CD", "DevOps", "Automation"],
      color: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#ccd1d1] mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-[#ccd1d1]/80 max-w-2xl mx-auto">
            A collection of innovative projects showcasing my skills in automation, AI, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} mb-4`}>
                <div className="text-white">
                  {project.icon}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-[#ccd1d1] mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-[#ccd1d1]/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg text-[#ccd1d1] hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300 flex-1 justify-center">
                  <Code className="w-4 h-4" />
                  <span>Details</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-lg text-[#ccd1d1] hover:from-green-500/30 hover:to-emerald-600/30 transition-all duration-300">
                  <Github className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-[#ccd1d1] mb-4">
              Technical Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Programming Concepts</h4>
                <ul className="space-y-1 text-[#ccd1d1]/80">
                  <li>• RAM reading and system monitoring</li>
                  <li>• Difference between Lists and Tuples</li>
                  <li>• Object-oriented programming principles</li>
                  <li>• Data structures and algorithms</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Advanced Features</h4>
                <ul className="space-y-1 text-[#ccd1d1]/80">
                  <li>• Speech recognition integration</li>
                  <li>• Image processing and manipulation</li>
                  <li>• API integrations and automation</li>
                  <li>• Cloud deployment and scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;