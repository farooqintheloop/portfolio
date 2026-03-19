import React from 'react';
import { Users, Globe, Code, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: 'Projects Completed', value: '90+', icon: Code },
    { label: 'Productivity Improvement', value: '35%', icon: Users },
    { label: 'Customer Engagement', value: '25%', icon: Globe },
    { label: 'Load Time Reduction', value: '40%', icon: Award },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">About Me</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>
            <p className="text-gray-300">Cell: 0343-4155170</p>
            <p className="text-gray-300">Email: thefarooq.dev@gmail.com</p>
            <p className="text-gray-300">LinkedIn: linkedin.com/in/muhammad-umar-farooq-dev</p>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Full Stack Developer with 3+ years of experience building and shipping real products for international clients. I work across the full stack — React, Next.js, Node.js, Flutter, MongoDB, PostgreSQL — whatever the product needs.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Most of my work has been remote, collaborating with clients across 4 countries. I've shipped 20+ production applications including SaaS platforms, LMS systems with secure video streaming, multi-role POS platforms, and AI-powered tools.
          </p>
          <p className="text-lg text-gray-300">
            I hold a BS in Software Engineering from COMSATS University Islamabad. Currently open to remote full-stack or mobile development roles.
          </p>
        </div>
        
        <div className="md:w-1/2 grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-gray-800/50 rounded-lg p-6 text-center border border-gray-700 hover:border-blue-600 transition-colors"
            >
              <stat.icon className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;