'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${data.error || 'Failed to send message'}`);
        console.error('API Error:', data);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
      console.error('Fetch Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#070b0d]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');
        .serif-title {
          font-family: 'Playfair Display', serif;
        }
        .sans-text {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="sans-text text-[#12b2a6] text-sm uppercase tracking-widest mb-4">Get in Touch</p>
          <h2 className="serif-title text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="sans-text text-gray-400 text-lg">
            Ready to elevate your digital presence? Let's discuss how I can help your brand grow.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="sans-text text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-[#0f1418] border border-[#1b2327] p-6 rounded-xl flex items-start gap-4 hover:border-[#12b2a6] transition-colors">
                <Phone className="w-6 h-6 text-[#12b2a6] flex-shrink-0 mt-1" />
                <div>
                  <p className="sans-text font-semibold text-white">Phone</p>
                  <p className="sans-text text-gray-400">+92 334 330 3759</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#0f1418] border border-[#1b2327] p-6 rounded-xl flex items-start gap-4 hover:border-[#12b2a6] transition-colors">
                <Mail className="w-6 h-6 text-[#12b2a6] flex-shrink-0 mt-1" />
                <div>
                  <p className="sans-text font-semibold text-white">Email</p>
                  <p className="sans-text text-gray-400">usmanahmedq30@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-[#0f1418] border border-[#1b2327] p-6 rounded-xl flex items-start gap-4 hover:border-[#12b2a6] transition-colors">
                <MapPin className="w-6 h-6 text-[#12b2a6] flex-shrink-0 mt-1" />
                <div>
                  <p className="sans-text font-semibold text-white">Location</p>
                  <p className="sans-text text-gray-400">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#0f1418] border border-[#1b2327] rounded-xl p-8">
              <h3 className="sans-text text-xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="sans-text w-full bg-[#1b2327] text-white p-3 rounded-lg border border-[#2a3035] focus:border-[#12b2a6] focus:outline-none placeholder-gray-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="sans-text w-full bg-[#1b2327] text-white p-3 rounded-lg border border-[#2a3035] focus:border-[#12b2a6] focus:outline-none placeholder-gray-500 transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="sans-text w-full bg-[#1b2327] text-white p-3 rounded-lg border border-[#2a3035] focus:border-[#12b2a6] focus:outline-none placeholder-gray-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="sans-text w-full bg-[#12b2a6] hover:bg-[#0fa8a0] text-white font-semibold p-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
                {status && (
                  <p className="sans-text text-center text-[#12b2a6] text-sm mt-4">{status}</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;