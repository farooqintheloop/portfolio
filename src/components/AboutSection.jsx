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
            <p className="text-gray-300">Email: umar57988@gmail.com</p>
            <p className="text-gray-300">LinkedIn: linkedin.com/in/muhammad-umar-farooq-dev</p>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Recent Software Engineering graduate from COMSATS University with solid foundations in Java, Flutter, Firebase, and the MERN stack. Strong problem-solving abilities demonstrated through real-world freelance and academic projects. Passionate about clean, scalable code and continuous improvement.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Currently working as a Freelance Mobile & Web Developer at Webnike, where I've assisted in 90+ client projects using Flutter and the MERN stack. My work has consistently improved client productivity and customer engagement through intuitive UX/UI development and optimized backend solutions.
          </p>
          <p className="text-lg text-gray-300">
            I hold a BS in Software Engineering from COMSATS University Islamabad with a CGPA of 3.1, and I'm continuously enhancing my skills through various certifications from IBM and Google.
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