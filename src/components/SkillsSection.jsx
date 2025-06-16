import React from 'react';
import SkillOrbit from './SkillOrbit';

const SkillsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-[#00FFFF] bg-clip-text text-transparent">My Skills</h2>
        <div className="w-24 h-1 bg-[#00FFFF] mx-auto mb-8"></div>
      </div>
      
      <SkillOrbit />
    </div>
  );
};

export default SkillsSection; 