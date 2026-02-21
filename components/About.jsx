'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#070b0d]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');
        .serif-heading {
          font-family: 'Playfair Display', serif;
        }
        .sans-body {
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
          <p className="text-[#12b2a6] text-sm font-semibold tracking-widest mb-4">ABOUT ME</p>
          <h2 className="serif-heading text-5xl font-bold text-white">
            My <span className="text-[#12b2a6]">Story</span>
          </h2>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sans-body"
          >
            {/* Bio Paragraph */}
            <p className="text-gray-300 mb-12 leading-relaxed text-lg">
              I help brands build stronger <span className="text-[#12b2a6] font-semibold">digital identities</span> and drive <span className="text-[#12b2a6] font-semibold">e-commerce growth</span> through <span className="text-[#12b2a6] font-semibold">Shopify management, digital marketing, and content creation</span> — delivering <span className="text-[#12b2a6] font-semibold">higher conversions, stronger engagement, and sustainable online success.</span>
            </p>

            {/* Education & Certification Cards */}
            <div className="space-y-6 mb-8">
              {/* Education Card */}
              <div className="bg-[#0f1418] border border-[#1b2327] rounded-xl p-6 hover:border-[#12b2a6] transition-colors">
                <p className="text-[#12b2a6] font-semibold mb-2 text-sm">EDUCATION</p>
                <h3 className="text-white font-semibold text-lg mb-1">Bachelors of Computer Science (BSCS)</h3>
                <p className="text-gray-400 text-sm">2025 – Present | GU Tech</p>
              </div>

              {/* Certification Card */}
              <div className="bg-[#0f1418] border border-[#1b2327] rounded-xl p-6 hover:border-[#12b2a6] transition-colors">
                <p className="text-[#12b2a6] font-semibold mb-2 text-sm">CERTIFICATION</p>
                <h3 className="text-white font-semibold text-lg mb-1">Fundamentals of Digital Marketing</h3>
                <p className="text-gray-400 text-sm">Google Digital Garage</p>
              </div>
            </div>

            {/* Languages Card */}
              <div className="bg-[#0f1418] border border-[#1b2327] rounded-xl p-6 hover:border-[#12b2a6] transition-colors">
                <p className="text-[#12b2a6] font-semibold mb-3 text-sm">LANGUAGES</p>
                <div className="space-y-2">
                  <p className="text-white font-semibold text-base">English — Fluent</p>
                  <p className="text-white font-semibold text-base">Urdu — Fluent</p>
                </div>
              </div>
          </motion.div>

          {/* Right Column - Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sans-body"
          >
            <p className="text-gray-400 text-sm mb-6 font-semibold">WORK EXPERIENCE</p>
            <div className="space-y-5">
              {/* Work Experience 1 */}
              <div className="bg-[#0f1418] border border-[#1b2327] rounded-xl p-6 hover:border-[#12b2a6] transition-colors">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-[#12b2a6] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base mb-1">Digital Marketing & E-commerce Specialist</h4>
                    <p className="text-[#12b2a6] text-sm font-medium">Crescentic Digital</p>
                  </div>
                </div>
              </div>

              {/* Work Experience 2 */}
              <div className="bg-[#0f1418] border border-[#1b2327] rounded-xl p-6 hover:border-[#12b2a6] transition-colors">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-[#12b2a6] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base mb-1">Chief Digital Officer (CDO)</h4>
                    <p className="text-[#12b2a6] text-sm font-medium">AL Jalil Fabrics</p>
                  </div>
                </div>
              </div>

              {/* Work Experience 3 */}
              <div className="bg-[#0f1418] border border-[#1b2327] rounded-xl p-6 hover:border-[#12b2a6] transition-colors">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-[#12b2a6] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base mb-1">Organization Manager</h4>
                    <p className="text-[#12b2a6] text-sm font-medium">JMI Media House</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;