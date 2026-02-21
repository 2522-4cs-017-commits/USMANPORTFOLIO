'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const services = [
    {
      number: '01',
      title: 'E-Commerce Management',
      description: 'Complete Shopify store setup, optimization, and management for maximum conversions.',
    },
    {
      number: '02',
      title: 'Digital Marketing',
      description: 'Strategic campaigns across Meta, Google, and other platforms to drive growth.',
    },
    {
      number: '03',
      title: 'Brand Identity',
      description: 'Creative visuals, engaging content, and consistent storytelling that leave a lasting impression.',
    },
    {
      number: '04',
      title: 'Social Media Design',
      description: 'Eye-catching graphics and content that boost engagement and brand awareness.',
    },
  ];

  const technologies = [
    'Shopify',
    'WordPress',
    'Meta Ads',
    'Google Ads',
    'Canva',
    'Adobe Illustrator',
    'Figma',
    'Google Analytics',
    'SEO Tools',
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#070b0d]">
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
          <p className="text-[#12b2a6] text-sm uppercase tracking-widest mb-4">Expertise</p>
          <h2 className="serif-title text-5xl font-bold text-white">
            Skills & <span className="text-[#12b2a6]">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#0f1418] border border-[#1b2327] rounded-xl p-8 hover:border-[#12b2a6] transition-colors flex items-start gap-6"
            >
              {/* Numbered Teal Box */}
              <div className="bg-[#12b2a6] rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-black text-lg">{service.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="sans-text text-xl font-semibold text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="sans-text text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="serif-title text-3xl font-bold text-white mb-8">
            Tools & <span className="text-[#12b2a6]">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="sans-text bg-[#0f1418] border border-[#1b2327] text-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:border-[#12b2a6] hover:text-[#12b2a6] transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;