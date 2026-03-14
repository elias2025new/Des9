import React from 'react';
import { motion } from 'framer-motion';

const About = ({ t }) => {
  return (
    <section id="about" className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-4xl px-4 text-center">
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
          className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-8"
        >
          {t.heading}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-secondary/70 mb-10 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {t.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href="#reservation" className="inline-block px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-sm">
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
