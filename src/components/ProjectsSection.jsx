import React from 'react';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AutoCaption – AI Video Captioning Tool',
      description: 'Built a Python-based tool that transcribes spoken audio from any video and generates a new captioned video with accurately timestamped subtitles burned onto frames. Fully automated, no manual input required.',
      tags: ['Python', 'Speech Recognition', 'Video Processing', 'AI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com/farooqintheloop'
    },
    {
      title: 'HeadStart – AI Startup Management Platform',
      description: 'Built an AI-powered SaaS platform for early-stage startups to automate workflows, manage teams, legal, and finance — with role-based access and real-time syncing. Selected among Top 10 projects at COMSATS University Expo 2025.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'AI'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com/farooqintheloop'
    },
    {
      title: 'AM LMS – Learning Management System',
      description: 'Full-stack LMS with secure video streaming using chunking, segmentation, and signed URLs. Backend deployed on Cloudflare with D1 database and Vultr server adapter for scalable delivery.',
      tags: ['Flutter', 'React', 'Node.js', 'Cloudflare', 'D1'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop',
      github: 'https://github.com/farooqintheloop'
    },
    {
      title: 'Foodler – Restaurant & POS Management Platform',
      description: 'Restaurant aggregation platform with integrated POS supporting multiple roles — owner, chef, manager, waiter, customer. Full analytics dashboards and reporting built on Node.js and PostgreSQL.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com/farooqintheloop'
    },
    {
      title: 'Lordan Dev – Multi AI Chatbot',
      description: 'Resolved UI and backend configuration issues in a multi-model AI chatbot allowing users to switch between different AI conversation modes. Optimized for Play Store deployment.',
      tags: ['React Native', 'AI', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com/farooqintheloop'
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
              
              <a 
                href={project.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} className="mr-1" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;