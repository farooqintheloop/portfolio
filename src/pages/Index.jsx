import React from 'react';
import StarField from '../components/StarField';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <Header />
      
      <main className="relative z-10">
        <section className="min-h-screen flex items-center py-20">
          <HeroSection />
        </section>
        
        <section className="py-20 bg-gray-900/50" id="about">
          <AboutSection />
        </section>
        
        <section className="py-20" id="skills">
          <SkillsSection />
        </section>
        
        <section className="py-20 bg-gray-900/50" id="projects">
          <ProjectsSection />
        </section>
        
        <section className="py-20" id="certifications">
          <CertificationsSection />
        </section>
        
        <section className="py-20 bg-gray-900/50" id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section className="py-20" id="contact">
          <ContactSection />
        </section>
        
        <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-800">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Muhammad Umar Farooq. All rights reserved.</p>
            <p className="mt-2">Full Stack Developer | MERN · Next.js · Flutter | Open to Remote</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index; 