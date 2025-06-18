import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Mail, Phone, Linkedin, Github, Rocket, Zap, Code, Database, Server, Terminal, Layout, Palette, Globe, Shield } from 'lucide-react';

const ContactSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "thefarooq.dev@gmail.com",
      link: "mailto:thefarooq.dev@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "0343-4155170",
      link: "tel:+923434155170",
      color: "text-blue-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "/muhammad-umar-farooq-dev",
      link: "https://linkedin.com/in/muhammad-umar-farooq-dev",
      color: "text-blue-400"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "View Projects",
      link: "https://github.com",
      color: "text-gray-400"
    }
  ];

  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
      color: "from-blue-500 to-blue-600",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs using Node.js and Express.",
      color: "from-purple-500 to-purple-600",
      technologies: ["Node.js", "Express", "REST APIs", "MongoDB"]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Management",
      description: "Designing and optimizing database schemas for optimal performance and scalability.",
      color: "from-green-500 to-green-600",
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "DevOps & Tools",
      description: "Implementing CI/CD pipelines and managing cloud infrastructure.",
      color: "from-red-500 to-red-600",
      technologies: ["Git", "Docker", "AWS", "CI/CD"]
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences with modern design principles.",
      color: "from-yellow-500 to-yellow-600",
      technologies: ["Figma", "Adobe XD", "Responsive Design", "Material UI"]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security",
      description: "Implementing best practices for web security and data protection.",
      color: "from-indigo-500 to-indigo-600",
      technologies: ["JWT", "OAuth", "HTTPS", "Security Headers"]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Mission Control Center
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my technical arsenal and discover how I can help bring your vision to life 🚀
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <p className="text-gray-300 mb-8">
              Ready to collaborate on your next project? Let's connect and discuss how we can create something amazing together.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-600/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${contact.color}`}>
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{contact.label}</div>
                      <a 
                        href={contact.link}
                        className={`${contact.color} hover:underline font-medium`}
                        target={contact.link.startsWith('http') ? '_blank' : undefined}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            <p>Direct communication channel:</p>
            <a href="mailto:thefarooq.dev@gmail.com" className="text-blue-400 hover:underline font-medium">
              thefarooq.dev@gmail.com
            </a>
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className={`bg-gray-800/50 border-gray-700 hover:border-${skill.color.split('-')[1]}-600/50 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveSkill(activeSkill === index ? null : index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{skill.title}</h4>
                  </div>
                </div>
                {activeSkill === index && (
                  <div className="mt-4 space-y-4">
                    <p className="text-gray-300 text-sm">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full bg-gray-700/50 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 