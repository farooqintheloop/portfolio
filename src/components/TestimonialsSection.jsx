import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Star, Quote } from 'lucide-react';
import Button from '../components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Startup Founder",
      company: "TechVenture Inc.",
      content: "Umar delivered our mobile app ahead of schedule with exceptional quality. His attention to detail and proactive communication made the entire process seamless. The app performance improvements exceeded our expectations.",
      rating: 5,
      project: "Flutter Mobile App"
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "Digital Solutions Co.",
      content: "Working with Umar on our web platform was outstanding. He transformed our complex requirements into an intuitive, scalable solution. His expertise in the MERN stack really showed in the final product.",
      rating: 5,
      project: "Full-Stack Platform"
    },
    {
      name: "Lisa Thompson",
      role: "CTO",
      company: "InnovateLab",
      content: "Umar's ability to optimize our backend performance was remarkable - 40% improvement in load times! His clean code and comprehensive documentation made future maintenance effortless.",
      rating: 5,
      project: "Performance Optimization"
    }
  ];

  const stats = [
    { number: "90+", label: "Projects Completed", color: "text-blue-400" },
    { number: "100%", label: "On-Time Delivery", color: "text-blue-500" },
    { number: "35%", label: "Avg. Productivity Increase", color: "text-cyan-400" },
    { number: "40%", label: "Performance Improvement", color: "text-blue-600" }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          What Clients Say
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Building lasting relationships through exceptional delivery and reliable communication
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-600/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="text-blue-400 h-6 w-6 mr-2" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-blue-400 text-sm">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
                <div className="text-blue-500 text-xs mt-1 font-medium">
                  Project: {testimonial.project}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to join these satisfied clients?
          </h3>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can bring your project vision to life with reliable, scalable solutions.
          </p>
          <div className="text-blue-400 font-medium">
            📧 thefarooq.dev@gmail.com • 📱 0343-4155170
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 