import React from 'react';
import { Code, Cloud, Database, Cpu, GitBranch, Wrench } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      skills: ['AWS Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Frameworks',
      skills: ['Flask', 'Streamlit', 'React', 'Node.js']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI & ML',
      skills: ['Machine Learning', 'Generative AI', 'Agentic AI', 'LangChain']
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Operating Systems',
      skills: ['Linux', 'Ubuntu', 'CentOS', 'Windows']
    }
  ];

  const tools = [
    'Linux', 'Python', 'Jenkins', 'Docker', 'Kubernetes', 'Git & GitHub',
    'AWS Cloud', 'Machine Learning', 'Generative AI', 'Agentic AI',
    'LangChain', 'Flask', 'Streamlit', 'CI/CD'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#ccd1d1] mb-4">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-[#ccd1d1]/80 max-w-2xl mx-auto">
            A comprehensive toolkit for modern software development and deployment
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#ccd1d1]">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-[#ccd1d1]/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#ccd1d1] mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full text-[#ccd1d1] border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;