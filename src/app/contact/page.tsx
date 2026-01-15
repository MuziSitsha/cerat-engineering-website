"use client";

import { useState, FormEvent, ChangeEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="min-h-[40vh] pt-32 pb-20 flex items-center" style={{backgroundColor: '#255849'}}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{color: '#255849'}}>Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="p-6 rounded-lg bg-gray-50 border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold mb-2" style={{color: '#255849'}}>Phone</h3>
                  <a href="tel:+27790286454" className="text-lg font-semibold text-orange-500 hover:text-orange-600">
                    +27 79 028 6454
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Mon-Fri 8:00-17:00 | Emergency 24/7</p>
                </div>

                <div className="p-6 rounded-lg bg-gray-50 border-l-4" style={{borderColor: '#255849'}}>
                  <h3 className="text-lg font-semibold mb-2" style={{color: '#255849'}}>Email</h3>
                  <a href="mailto:info@cerat.co.za" className="text-lg font-semibold text-orange-500 hover:text-orange-600">
                    info@cerat.co.za
                  </a>
                  <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
                </div>

                <div className="p-6 rounded-lg bg-gray-50 border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold mb-2" style={{color: '#255849'}}>Office Address</h3>
                  <p className="text-gray-700">
                    2 Roos Street, Fourways Golfpark<br />
                    Augusta House, Sandton, 2191<br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="mt-12 p-8 rounded-xl shadow-lg" style={{backgroundColor: '#f8f9fa', borderTop: '4px solid #255849'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#255849'}}>Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Monday - Friday</span>
                    <span className="text-orange-500 font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Saturday</span>
                    <span className="text-orange-500 font-semibold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Sunday</span>
                    <span className="text-orange-500 font-semibold">Emergency Only</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t-2 border-orange-500">
                    <span className="text-orange-500 font-bold">Emergency Support</span>
                    <span className="text-orange-500 font-bold">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl shadow-lg bg-white" style={{borderTop: '4px solid #255849'}}>
              <h2 className="text-3xl font-bold mb-8" style={{color: '#255849'}}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2" style={{color: '#255849'}}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2" style={{color: '#255849'}}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2" style={{color: '#255849'}}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="+27 79 028 6454"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2" style={{color: '#255849'}}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{color: '#255849'}}>Service Interested In *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
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
                  <label className="block font-semibold mb-2" style={{color: '#255849'}}>Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg w-full transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
