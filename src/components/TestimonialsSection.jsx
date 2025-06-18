import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Muhammad Mussaub Mobeen",
      role: "CEO @equivl | Digital Marketer | Software Engineer",
      image: "https://media.licdn.com/dms/image/D4D03AQF7QZQZQZQZQZQ/profile-displayphoto-shrink_800_800/0/1677660000000?e=1721865600&v=beta&t=QZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQ",
      quote: "Working with Muhammad Umar Farooq has been an absolute pleasure. His technical expertise and problem-solving skills are exceptional. He consistently delivers high-quality solutions and is always willing to go the extra mile to ensure project success.",
      linkedin: "https://linkedin.com/in/muhammad-mussaub-mobeen"
    },
    {
      name: "Sohaib Ahmad",
      role: "CEO at XTREEM | 🚀 Boosting Sales | 📈 Empowering Brands",
      image: "https://media.licdn.com/dms/image/D4D03AQF7QZQZQZQZQZQ/profile-displayphoto-shrink_800_800/0/1677660000000?e=1721865600&v=beta&t=QZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQ",
      quote: "Muhammad Umar Farooq is a talented developer who brings innovative solutions to the table. His attention to detail and commitment to excellence make him an invaluable asset to any project. I highly recommend his services for any development needs.",
      linkedin: "https://linkedin.com/in/sohaib-ahmad"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Client Testimonials
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Hear what industry leaders have to say about working with me
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-600/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                    <Quote className="h-6 w-6 text-blue-500" />
                  </div>
                  <p className="mt-4 text-gray-300">
                    {testimonial.quote}
                  </p>
                  <div className="mt-4">
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      View LinkedIn Profile →
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block p-6 bg-gray-800/50 rounded-lg border border-gray-700">
          <p className="text-gray-300 mb-4">
            Ready to start your next project?
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