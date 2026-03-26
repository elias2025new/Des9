import React from 'react';
import { motion } from 'framer-motion';

const About = ({ t }) => {
  return (
    <section id="about" className="min-h-screen py-16 sm:py-0 bg-primary relative flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" 
          alt="About Background" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-12 relative z-10 text-center lg:text-left">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-accent text-sm font-bold mb-6"
        >
          {t.badge}
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-7xl lg:text-7xl font-playfair font-bold text-white mb-6 sm:mb-10 leading-tight"
        >
          {t.heading}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-24 h-px bg-accent mx-auto lg:mx-0 mb-10"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg sm:text-2xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-8 sm:mb-10"
        >
          {t.description}
        </motion.p>

        {t.focusPoints && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h4 className="text-accent uppercase tracking-widest font-bold mb-6 italic">{t.focusTitle}</h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {t.focusPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 px-6 py-3 border border-white/10 rounded-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-secondary/90 font-medium tracking-wide">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-secondary/70 text-lg lg:text-xl italic font-playfair max-w-2xl mx-auto lg:mx-0 mb-16"
        >
          {t.conclusion}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href="#reservation" className="inline-block px-8 py-4 sm:px-12 sm:py-5 bg-accent text-primary font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 rounded-sm shadow-2xl text-xs sm:text-base">
            {t.cta}
          </a>
        </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default About;
