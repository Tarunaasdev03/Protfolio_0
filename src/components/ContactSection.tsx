import React, { useState } from 'react';
import { Phone, Mail, Linkedin, Github, MapPin, Send, Heart } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 9116938045',
      href: 'tel:+919116938045',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'suthartarun07@gmail.com',
      href: 'mailto:suthartarun07@gmail.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'tarun-suthar-845257364',
      href: 'https://www.linkedin.com/in/tarun-suthar-845257364',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'Tarunaasdev03',
      href: 'https://github.com/Tarunaasdev03',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#ccd1d1] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-[#ccd1d1]/80 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#ccd1d1] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                    rel={item.label === 'LinkedIn' || item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#ccd1d1]/60 text-sm">{item.label}</p>
                      <p className="text-[#ccd1d1] font-medium group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#ccd1d1]">Location</h4>
                  <p className="text-[#ccd1d1]/80">Bikaner, Rajasthan, India</p>
                </div>
              </div>
              <p className="text-[#ccd1d1]/60 text-sm">
                Currently available for remote work and local opportunities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-[#ccd1d1] mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#ccd1d1] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#ccd1d1] placeholder-[#ccd1d1]/50 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#ccd1d1] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#ccd1d1] placeholder-[#ccd1d1]/50 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#ccd1d1] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#ccd1d1] placeholder-[#ccd1d1]/50 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-[#ccd1d1]/60 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>by Tarun Suthar</span>
          </p>
          <p className="text-[#ccd1d1]/40 text-sm mt-2">
            © 2024 Tarun Suthar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;