import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const WhyChooseUs = ({ t }) => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      

      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl px-4 lg:px-12 relative z-10">
        <div className="text-center lg:text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-playfair font-bold text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto lg:mx-0"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-accent/50 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                <FiCheckCircle className="text-accent text-2xl group-hover:text-primary transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{item.title}</h3>
              <p className="text-secondary/70 leading-relaxed italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
