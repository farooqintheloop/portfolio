import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Badge from '../components/ui/badge';
import Button from '../components/ui/button';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Project Management",
      issuer: "IBM",
      date: "2024",
      type: "Professional Certificate",
      skills: ["Project Planning", "Risk Management", "Team Leadership", "Agile Methodology"],
      description: "Comprehensive project management fundamentals covering planning, execution, and delivery of successful projects.",
      badgeColor: "from-blue-600 to-blue-800",
      verified: true
    },
    {
      title: "Getting Started with Flutter",
      issuer: "Google",
      date: "2023",
      type: "Development Badge",
      skills: ["Flutter", "Dart", "Mobile Development", "Cross-platform"],
      description: "Foundational Flutter development skills including widget creation, state management, and app architecture.",
      badgeColor: "from-blue-400 to-cyan-500",
      verified: true
    },
    {
      title: "Bringing Places to Flutter App",
      issuer: "Google",
      date: "2023",
      type: "Development Badge",
      skills: ["Flutter", "Google Maps API", "Location Services", "UI/UX"],
      description: "Advanced Flutter development focusing on location-based features and Google Maps integration.",
      badgeColor: "from-blue-500 to-blue-600",
      verified: true
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      type: "Certification",
      skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
      description: "Modern web design principles including flexbox, grid, and mobile-first responsive design techniques.",
      badgeColor: "from-orange-500 to-red-500",
      verified: true
    },
    {
      title: "Frontend Libraries",
      issuer: "freeCodeCamp",
      date: "2023",
      type: "Certification",
      skills: ["React", "Redux", "Bootstrap", "Sass"],
      description: "Building dynamic user interfaces with React, state management with Redux, and modern CSS frameworks.",
      badgeColor: "from-cyan-500 to-blue-600",
      verified: true
    },
    {
      title: "Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      type: "Certification",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
      description: "Fundamental programming concepts including algorithms, data structures, and computational thinking.",
      badgeColor: "from-purple-500 to-indigo-600",
      verified: true
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Certifications & Badges
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Continuous learning and validation of expertise across multiple technology domains
        </p>
      </div>

      {/* Certification Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {certifications.map((cert, index) => (
          <Card 
            key={index} 
            className={`bg-gray-800/50 border-gray-700 hover:border-blue-600/50 transition-all duration-300 cursor-pointer ${
              selectedCert === index ? 'ring-2 ring-blue-600 scale-105' : 'hover:scale-105'
            }`}
            onClick={() => setSelectedCert(selectedCert === index ? null : index)}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cert.badgeColor} flex items-center justify-center`}>
                  <Award className="h-6 w-6 text-white" />
                </div>
                {cert.verified && (
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    ✓ Verified
                  </Badge>
                )}
              </div>
              <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
              <div className="flex items-center text-sm text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                {cert.date} • {cert.issuer}
              </div>
              <Badge variant="outline" className="w-fit border-blue-500/30 text-blue-300">
                {cert.type}
              </Badge>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">{cert.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-gray-700 text-gray-300 text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <Button 
                size="sm" 
                variant="outline" 
                className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Certificate
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">4</div>
            <div className="text-gray-400 text-sm">Platforms</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">2024</div>
            <div className="text-gray-400 text-sm">Latest Cert</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Verified</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-bold text-white mb-4">
          Committed to Continuous Learning
        </h3>
        <p className="text-gray-400 mb-6">
          Stay updated with the latest technologies and industry best practices through ongoing certification and training.
        </p>
        <Button 
          variant="outline" 
          className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
        >
          View All Credentials
        </Button>
      </div>
    </div>
  );
};

export default CertificationsSection; 