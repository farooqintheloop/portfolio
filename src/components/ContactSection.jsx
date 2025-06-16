import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Button from '../components/ui/button';
import Input from '../components/ui/input';
import Textarea from '../components/ui/textarea';
import { Mail, Phone, Linkedin, Github, Send, Rocket, Zap, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "umar57988@gmail.com",
      link: "mailto:umar57988@gmail.com",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out! I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Let's Build Something Stellar
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to bring your vision to life? Let's discuss your project and create something amazing together 🚀
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm always excited to work on new projects and help bring innovative ideas to life. 
              Whether you need a mobile app, web platform, or full-stack solution, let's connect and discuss how we can achieve your goals.
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

          {/* Mission Control Card */}
          <Card className="bg-gradient-to-br from-blue-500/10 via-gray-800/50 to-blue-600/10 border border-blue-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Rocket className="h-4 w-4 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white">Mission Control</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span>Free project consultation</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <CheckCircle className="h-4 w-4 text-cyan-400" />
                  <span>Detailed project timeline</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <Rocket className="h-4 w-4 text-blue-400" />
                  <span>Transparent pricing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="bg-gray-800/50 border-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                <Send className="h-4 w-4 text-white" />
              </div>
              Launch Communication
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Commander Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Space Communication Frequency *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
                  placeholder="your.email@galaxy.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mission Briefing *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 focus:ring-1 resize-none"
                  placeholder="Describe your project mission, timeline, resources, and specific objectives..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Initiating Launch...
                  </>
                ) : (
                  <>
                    <Rocket className="mr-2 h-4 w-4" />
                    Launch Mission Briefing 🚀
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              <p>Direct communication channel:</p>
              <a href="mailto:umar57988@gmail.com" className="text-blue-400 hover:underline font-medium">
                umar57988@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection; 