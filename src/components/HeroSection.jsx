import React from 'react';
import { ArrowDown } from 'lucide-react';
import profileImage from '../assets/profile.jpg'; // Verified correct path

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Muhammad Umar Farooq
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Software Engineer | Flutter Developer | MERN Stack Developer
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl">
          Building elegant, efficient and user-friendly applications for mobile and web platforms.
          Passionate about creating seamless digital experiences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Contact Me
          </a>
          <a 
            href="#about" 
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600/30">
          <img 
            src={profileImage} 
            alt="Muhammad Umar Farooq"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowDown className="animate-bounce" size={28} />
      </a>
    </div>
  );
};

export default HeroSection; 