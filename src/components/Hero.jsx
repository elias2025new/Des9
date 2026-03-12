import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ t }) => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Restaurant Lounge" 
          className="w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-2 sm:mb-4"
        >
          {t.titlePrefix}<span className="text-accent">{t.titleSuffix}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-light tracking-wide md:tracking-widest text-secondary/90 mb-2 uppercase"
        >
          {t.subtitle}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-md md:text-lg mb-10 text-secondary/70 italic font-playfair"
        >
          {t.tagline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a href="#menu" className="px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-sm">
            {t.viewMenu}
          </a>
          <a href="#reservation" className="px-8 py-4 border border-accent text-accent font-bold uppercase tracking-widest hover:bg-accent/10 transition-colors duration-300 rounded-sm">
            {t.reserve}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-secondary/50 mb-2 font-inter">{t.scroll}</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
