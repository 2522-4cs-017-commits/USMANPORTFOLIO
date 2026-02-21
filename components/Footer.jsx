'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8 px-6 border-t border-[#1b2327] bg-[#070b0d]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');
        .sans-text {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="sans-text text-2xl font-bold text-[#12b2a6]">
          UA<span className="text-[#12b2a6]">Q</span>
        </div>
        <p className="sans-text text-gray-400 text-sm">© 2026 Usman Ahmed Qureshi. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;