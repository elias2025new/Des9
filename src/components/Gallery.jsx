import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const images = [
  "/images/katelo.jpg",
  "/images/ful.jpg",
  "/images/header_red_wine.png",
  "/images/cat_des9_specials.png",
  "/images/bar special.jpg",
  "/images/dulet.jpg"
];

const Gallery = ({ t }) => {
  return (
    <section id="gallery" className="py-24 bg-[#080808]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row justify-between items-end gap-6">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-accent text-sm font-bold mb-4"
          >
            {t.badge}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-6xl font-playfair font-bold text-white"
          >
            {t.title}
          </motion.h2>
        </div>
        
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-3 text-secondary/70 hover:text-accent transition-colors"
        >
          <FaInstagram className="text-2xl" />
          <span className="uppercase tracking-widest text-sm">{t.instagram}</span>
        </motion.a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 w-full max-w-[1920px] mx-auto pb-4">
        {images.map((img, idx) => (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            key={idx}
            className="aspect-square relative group overflow-hidden bg-white/5 cursor-pointer"
          >
            <img 
              src={img} 
              alt={`Gallery ${idx + 1}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <FaInstagram className="text-white text-4xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
