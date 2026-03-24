import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import heroBg from '../assets/hero-bg.png';

const Hero = ({ t }) => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={heroBg} 
          alt="Luxury Restaurant Lounge" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block text-4xl sm:text-7xl lg:text-8xl font-playfair font-bold text-white mb-4"
        >
          {t.titlePrefix}<span className="text-accent">{t.titleSuffix}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-xl lg:text-2xl font-playfair font-bold md:font-light md:tracking-[0.5em] text-white md:text-secondary/90 mb-4 md:mb-2 uppercase"
        >
          {t.subtitle}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-lg lg:text-xl mb-10 md:mb-10 text-secondary/70 italic font-playfair md:tracking-widest px-4 md:px-0"
        >
          {t.tagline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 bg-accent text-primary font-bold text-sm tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 flex items-center gap-4 group"
          >
            <span className="relative z-10">{t.button}</span>
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <BsArrowRight className="text-xl" />
            </motion.span>
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
