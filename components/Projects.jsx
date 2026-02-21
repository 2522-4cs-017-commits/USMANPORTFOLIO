'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'SV BAZAAR',
      subtitle: 'Shopify E-Commerce Website',
      category: 'E-Commerce',
    },
    {
      title: 'DUKHTER',
      subtitle: 'Shopify Fashion Store',
      category: 'Fashion',
    },
    {
      title: 'AL JALIL FABRICS',
      subtitle: 'Shopify Clothing & Textile Store',
      category: 'Textile',
    },
    {
      title: 'NAEYUFAQ GROUP',
      subtitle: 'WordPress Women Magazine',
      category: 'Publications',
    },
    {
      title: 'LUVETTO',
      subtitle: 'Shopify Clothing & Textile Store',
      category: 'E-Commerce',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#070b0d]">
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
          className="text-center mb-16"
        >
          <p className="text-[#12b2a6] text-sm uppercase tracking-widest mb-4">Portfolio</p>
          <h2 className="serif-title text-5xl font-bold text-white mb-4">
            Recent <span className="text-[#12b2a6]">Projects</span>
          </h2>
          <p className="sans-text text-gray-400 text-lg">
            A showcase of my work in e-commerce development and digital marketing across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative bg-[#0f1418] border border-[#1b2327] rounded-xl p-8 hover:border-[#12b2a6] transition-all duration-300 hover:shadow-lg hover:shadow-[#12b2a6]/20 overflow-hidden group"
            >
              {/* Decorative Teal Semi-circle (Top Right) */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#12b2a6] opacity-10 rounded-full -mr-12 -mt-12 group-hover:opacity-20 transition-opacity"></div>

              {/* Category Badge */}
              <div className="relative z-10 inline-block bg-[#12b2a6] bg-opacity-30 border border-[#12b2a6] text-white px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">
                {project.category}
              </div>

              {/* Title */}
              <h3 className="serif-title relative z-10 text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                {project.title}
              </h3>

              {/* Subtitle */}
              <p className="sans-text relative z-10 text-gray-400 text-sm leading-relaxed">
                {project.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;