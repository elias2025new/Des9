import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-bg.png';

const Hero = ({ t }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hero1, hero2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative h-screen min-h-[500px] sm:min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={images[currentImage]} 
            alt="Luxury Restaurant Lounge" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12 sm:mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl sm:text-7xl lg:text-8xl font-playfair font-bold text-white mb-1 sm:mb-4"
        >
          {t.titlePrefix}<span className="text-accent">{t.titleSuffix}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm sm:text-2xl md:text-xl lg:text-2xl font-light tracking-[0.1em] sm:tracking-[0.5em] text-secondary/90 mb-2 sm:mb-2 uppercase"
        >
          {t.subtitle}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xs sm:text-lg md:text-lg lg:text-xl mb-4 sm:mb-8 text-secondary/70 italic font-playfair sm:tracking-widest px-4 md:px-0"
        >
          {t.tagline}
        </motion.p>

        {t.specialties && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8 px-4"
          >
            <p className="text-secondary/50 uppercase tracking-widest text-[10px] mb-2">{t.specializationLabel}</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {t.specialties.map((spec, i) => (
                <span key={i} className="text-accent text-[10px] sm:text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em]">
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-sm sm:text-2xl font-playfair text-white mb-6 sm:mb-10 font-bold"
        >
          {t.experience}
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
            className="px-6 py-3 sm:px-10 sm:py-5 bg-accent text-primary font-bold text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 sm:gap-4 group"
          >
            <span className="relative z-10">{t.button}</span>
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <BsArrowRight className="text-xl" />
            </motion.span>
          </a>
          <a href="#reservation" className="px-5 py-2.5 sm:px-8 sm:py-4 border border-accent text-accent font-bold uppercase tracking-widest hover:bg-accent/10 transition-colors duration-300 rounded-sm text-[10px] sm:text-sm">
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
