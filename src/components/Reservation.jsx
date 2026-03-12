import React from 'react';
import { motion } from 'framer-motion';

const Reservation = ({ t }) => {
  return (
    <section id="reservation" className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-primary relative bg-[url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-card p-4 sm:p-8 md:p-16 relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-6 sm:w-16 h-6 sm:h-16 border-t border-l border-accent/30 rounded-tl-lg m-2 sm:m-4"></div>
          <div className="absolute bottom-0 right-0 w-6 sm:w-16 h-6 sm:h-16 border-b border-r border-accent/30 rounded-br-lg m-2 sm:m-4"></div>
          
          <div className="text-center mb-5 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-2 sm:mb-4">{t.title}</h2>
            <p className="text-secondary/70 font-light text-sm sm:text-base">{t.subtitle}</p>
          </div>

          <form className="space-y-3 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Name + Phone: side by side even on mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-secondary/60 ml-1">{t.name}</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors font-light"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-secondary/60 ml-1">{t.phone}</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors font-light"
                  placeholder="+251 9XX XXX XXX"
                />
              </div>
            </div>

            {/* Date + Time: side by side even on mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-secondary/60 ml-1">{t.date}</label>
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors font-light"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-secondary/60 ml-1">{t.time}</label>
                <input 
                  type="time" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors font-light"
                />
              </div>
            </div>

            {/* Guests: full width */}
            <div className="space-y-1">
              <label className="text-[10px] sm:text-xs uppercase tracking-widest text-secondary/60 ml-1">{t.guests}</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors font-light [&>option]:bg-primary">
                {[1, 2, 3, 4, 5, 6, "7+"].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? t.person : t.people}</option>
                ))}
              </select>
            </div>
            
            <div className="pt-2 sm:pt-6">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-accent text-primary font-bold uppercase tracking-widest rounded-md hover:bg-white transition-colors duration-300 text-sm sm:text-base"
              >
                {t.cta}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
