import React, { useEffect, useRef } from 'react';

const SkillOrbit = () => {
  const orbitRef = useRef(null);
  
  // Skills data with logo URLs and colors
  const skills = [
    { 
      name: 'Java', 
      color: '#007396',
      proficiency: '90%',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
      name: 'JavaScript', 
      color: '#f0db4f',
      proficiency: '95%',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'Python', 
      color: '#3776AB',
      proficiency: '85%',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'Dart', 
      color: '#0175C2',
      proficiency: '90%',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'
    },
    { 
      name: 'Flutter', 
      color: '#02569B',
      proficiency: '92%',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
    },
    { 
      name: 'Node.js', 
      color: '#3C873A',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'Express.js', 
      color: '#68A063',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    { 
      name: 'MongoDB', 
      color: '#4DB33D',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'Firebase', 
      color: '#FFCA28',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    { 
      name: 'React', 
      color: '#61DAFB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'HTML5', 
      color: '#E34F26',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS3', 
      color: '#1572B6',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'Git', 
      color: '#F1502F',
      proficiency: '92%',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
      name: 'GitHub', 
      color: '#333',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    }
  ];

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;
    
    // Animation for orbit
    const center = { x: 250, y: 250 }; // Center position
    const speed = 0.0005; // Rotation speed
    
    const skillElements = Array.from(orbit.children);
    
    // Create multiple orbits with different radii
    const orbits = [
      { radius: 100, speed: speed * 1.3 }, // Inner orbit
      { radius: 160, speed: speed * 0.9 }, // Middle orbit
      { radius: 220, speed: speed * 0.6 }  // Outer orbit
    ];
    
    // Distribute skills across orbits
    skillElements.forEach((element, index) => {
      // Assign orbit
      const orbitIndex = index % orbits.length;
      element.dataset.orbit = orbitIndex;
      
      // Set custom animation delay for pulse effect
      element.style.setProperty('--i', index);
    });
    
    // Maintain angles for each orbit
    const angles = orbits.map(() => 0);
    
    const animate = () => {
      // Update angles for each orbit
      orbits.forEach((orbit, orbitIndex) => {
        angles[orbitIndex] += orbit.speed;
      });
      
      // Update positions for each skill
      skillElements.forEach((element, index) => {
        const orbitIndex = parseInt(element.dataset.orbit);
        const orbit = orbits[orbitIndex];
        
        // Calculate angle for this element (distribute evenly within its orbit)
        const skillsInThisOrbit = skillElements.filter(el => parseInt(el.dataset.orbit) === orbitIndex).length;
        const indexInOrbit = skillElements.filter((el, i) => parseInt(el.dataset.orbit) === orbitIndex && i < index).length;
        const angleOffset = (indexInOrbit * (2 * Math.PI)) / skillsInThisOrbit;
        
        const currentAngle = angles[orbitIndex] + angleOffset;
        
        // Calculate position
        const x = center.x + orbit.radius * Math.cos(currentAngle);
        const y = center.y + orbit.radius * Math.sin(currentAngle);
        
        // Apply position
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        
        // Scale based on y position to create pseudo-3D effect
        const scale = 0.8 + (0.2 * (1 + Math.sin(currentAngle)) / 2);
        element.style.transform = `translate(-50%, -50%) scale(${scale})`;
        
        // Adjust z-index based on y position
        element.style.zIndex = Math.floor(100 * scale);
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
      <div className="w-full lg:w-1/2">
        <div className="relative w-[500px] h-[500px] mx-auto">
          {/* Orbit visualization */}
          <div className="absolute left-1/2 top-1/2 w-[440px] h-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00FFFF]/10"></div>
          <div className="absolute left-1/2 top-1/2 w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00FFFF]/10"></div>
          <div className="absolute left-1/2 top-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00FFFF]/10"></div>
          
          {/* Center "Skills" text */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-24 h-24 rounded-full bg-[#00FFFF]/20 flex items-center justify-center backdrop-blur-sm border border-[#00FFFF]/30">
              <span className="text-white font-bold text-xl">Skills</span>
            </div>
          </div>
          
          <div ref={orbitRef} className="orbit-container relative w-full h-full">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="absolute skill-bubble flex items-center justify-center rounded-full w-14 h-14 transition-all duration-300 hover:scale-125 group"
                style={{
                  backgroundColor: `${skill.color}30`,
                  boxShadow: `0 0 15px ${skill.color}50`,
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Skill logo */}
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-8 h-8"
                />
                
                {/* Hover tooltip */}
                <div className="absolute opacity-0 group-hover:opacity-100 -bottom-10 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs whitespace-nowrap transition-opacity duration-300">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 space-y-8">
        <div className="bg-gray-800/40 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50">
          <h3 className="text-xl text-[#00FFFF] mb-6">Core Languages</h3>
          
          {skills.filter(skill => skill.proficiency).slice(0, 3).map((skill, index) => (
            <div key={index} className="mb-4 group">
              <div className="flex justify-between mb-1">
                <div className="flex items-center gap-2">
                  <img src={skill.logo} alt={skill.name} className="w-5 h-5" />
                  <span className="text-white">{skill.name}</span>
                </div>
                <span className="text-white">{skill.proficiency}</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-700 ease-out group-hover:opacity-80" 
                  style={{
                    width: skill.proficiency,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-800/40 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50">
          <h3 className="text-xl text-[#00FFFF] mb-4">Frameworks & Tools</h3>
          <div className="flex flex-wrap gap-6">
            {['Node.js', 'Express.js', 'Firebase', 'MongoDB'].map((name, idx) => {
              const skill = skills.find(s => s.name === name);
              return skill ? (
                <div key={idx} className="flex flex-col items-center group">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110" 
                    style={{ 
                      backgroundColor: `${skill.color}30`,
                      boxShadow: `0 0 10px ${skill.color}40`,
                      backdropFilter: "blur(8px)"
                    }}
                  >
                    <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                  </div>
                  <span className="text-white text-xs">{skill.name}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>
        
        <div className="bg-gray-800/40 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50">
          <h3 className="text-xl text-[#00FFFF] mb-4">Professional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['Git', 'GitHub', 'React', 'HTML5', 'CSS3'].map((name, idx) => {
              const skill = skills.find(s => s.name === name);
              return skill ? (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-full text-white text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: `${skill.color}30`,
                    backdropFilter: "blur(5px)"
                  }}
                >
                  <img src={skill.logo} alt={skill.name} className="w-4 h-4" />
                  <span>{skill.name}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillOrbit; 