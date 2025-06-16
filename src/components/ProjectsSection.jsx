import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'HeadStart – AI Startup Management Platform',
      description: 'Built an AI-based platform for startups with modules for project, legal, finance, and team management. Included role-based access, dashboards, and real-time syncing.',
      tags: ['MERN Stack', 'Firebase', 'AI Integration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Assistant Task Manager & Deadline Handler',
      description: 'Developed a mobile app with calendar, reminder notifications, and Firebase-based real-time data and user authentication.',
      tags: ['Flutter', 'Firebase', 'Mobile Development'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a responsive personal portfolio to showcase projects and skills. Integrated contact form, blog section, and project demos using React, Node, and MongoDB.',
      tags: ['MERN Stack', 'React', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Freelancer Marketplace Platform',
      description: 'Created a basic platform similar to Fiverr, enabling clients to post jobs and freelancers to bid. Included authentication, user dashboards, messaging, and job history using MongoDB and Express.',
      tags: ['MERN Stack', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Featured Projects</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-600/20"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>
                <a 
                  href={project.demo}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} className="mr-1" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;