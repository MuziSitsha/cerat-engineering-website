"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 text-white">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-white">Get In Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+27790286454" className="text-gray-300 text-lg hover:text-white">
                  +27 79 028 6454
                </a>
                <p className="text-gray-500 text-sm">Mon-Fri 8:00-17:00 | Emergency 24/7</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:info@cerat.co.za" className="text-gray-300 hover:text-white">
                  info@cerat.co.za
                </a>
                <p className="text-gray-500 text-sm">We respond within 24 hours</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
                <p className="text-gray-300">
                  2 Roos Street, Fourways Golfpark<br />
                  Augusta House, Sandton, 2191<br />
                  South Africa
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-800 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-white">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-gray-300">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-gray-300">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-gray-300">Emergency Only</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-500 font-semibold">Emergency Support</span>
                  <span className="text-orange-500 font-semibold">24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="+27 79 028 6454"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Service Interested In *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="Mining Solutions">Mining Solutions</option>
                  <option value="Building Services">Building Services</option>
                  <option value="Energy Solutions">Energy Solutions</option>
                  <option value="Mobile Crushing">Mobile Crushing</option>
                  <option value="Maintenance Services">Maintenance Services</option>
                  <option value="Consulting">Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
