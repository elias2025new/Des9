import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaMusic, FaCocktail } from 'react-icons/fa';

const About = ({ t }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const icons = [<FaUtensils />, <FaMusic />, <FaCocktail />];

  return (
    <section id="about" className="section-padding py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative group overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-accent/20 translate-x-3 translate-y-3 rounded-lg transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" 
              alt="DES9 Interior" 
              className="rounded-lg shadow-2xl w-full h-64 sm:h-80 md:h-[500px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <motion.p variants={itemVariants} className="uppercase tracking-widest text-accent text-sm font-bold mb-4 flex items-center gap-4">
              <span className="w-12 h-px bg-accent"></span> {t.badge}
            </motion.p>
            
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
              {t.heading}
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-secondary/70 mb-8 font-light leading-relaxed text-lg">
              {t.description}
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-6">
              {t.features.map((feature, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0 text-xl">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-secondary/60 text-sm font-light">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10">
              <a href="#reservation" className="inline-block px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-sm">
                {t.cta}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
